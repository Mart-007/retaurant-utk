import { Button, Modal, message } from 'antd';
import AddItem from './modal/AddItem';
import { useEffect, useRef, useState } from 'react';
import ItemsDAO from '../../../../shared/utils/dao/Items';
import ItemList from './ItemList';

const Items = () => {
  const Items = useRef(null);

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [itemData, setItemData] = useState([]);

  const [items, setItems] = useState({
    category: '',
    name: '',
    size: '',
    price: '',
    cost: '',
    amount_in_stock: '',
  });

  useEffect(() => {
    Items.current = new ItemsDAO();
  }, []);

  useEffect(() => {
    const ItemDao = new ItemsDAO();

    ItemDao.getItem(data => {
      setItemData(data);
    });

    return () => {
      ItemDao.detachGetItem();
    };
  }, []);

  useEffect(() => {
    if (isEdit === true && itemData.length) {
      itemData.forEach(data => {
        console.log('data:', data);
        setItems({
          category: data.category,
          name: data.name,
          size: data.size,
          price: data.price,
          cost: data.cost,
          amount_in_stock: data.amount_in_stock,
        });
      });
    }
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    if ((name === 'cost' || name === 'price' || name === 'cost_in_stock') && isNaN(value)) {
      return message.error('Input must be a number.');
    }
    setItems(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectItem = selectedOption => {
    setItems({ ...items, size: selectedOption });
  };

  const handleClear = () => {
    setItems({ category: '', name: '', size: 'Small', price: '', cost: '', amount_in_stock: '' });
  };

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCancelModal = () => {
    handleClear();
    setIsOpenModal(false);
  };

  const handleSave = () => {
    Items.current.createItem(items);
    handleClear();
    setIsOpenModal(false);
    message.success('Save Success');
  };

  const onClickSave = () => {
    if (isEdit === true) {
      const ItemsDao = new ItemsDAO();
      ItemsDao.updateItem(itemData.itemId, { items });
      setIsEdit(false);
      handleClear();
      message.success('Edit Success');
    } else {
      handleSave();
    }
  };

  const handleEdit = () => {
    setIsEdit(true);
    handleOpenModal();
  };

  const deleteItem = itemId => {
    new Promise(resolve => {
      resolve(Items.current.deleteItem(itemId));
      message.success('Delete Success');
    });
  };

  const handleDelete = itemId => {
    Modal.confirm({
      className: 'delete-item',
      title: 'Delete item',
      okText: 'Delete',
      cancelText: 'Cancel',
      content: <>Are you sure you want to delete this item?</>,
      onOk: () => {
        deleteItem(itemId);
      },
      onCancel: () => {
        handleClear();
        console.log('Cancel');
      },
    });
  };

  return (
    <div className="items">
      <Button className="add-btn" onClick={handleOpenModal}>
        Add Items
      </Button>
      <Modal
        title={isEdit === false ? 'Add Items' : 'Edit Items'}
        open={isOpenModal}
        onOk={onClickSave}
        onCancel={handleCancelModal}
        okText="Save"
      >
        <AddItem handleChange={handleChange} handleSelectItem={handleSelectItem} items={items} />
      </Modal>
      <div className="item-list-container">
        <ItemList itemData={itemData} deleteItem={handleDelete} handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Items;
