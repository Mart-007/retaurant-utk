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
    price: 0,
    cost: 0,
    amount_in_stock: 0,
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
    if (!isEdit && itemData) {
      itemData.map(data => {
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
  }, [itemData]);

  const handleChange = e => {
    const { name, value } = e.target;

    setItems(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectItem = selectedOption => {
    setItems({ ...items, size: selectedOption });
  };

  const handleClear = () => {
    setItems({ category: '', name: '', size: 'Small', price: 0, cost: 0, amount_in_stock: 0 });
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
    if (!isEdit) {
      const ItemsDao = new ItemsDAO();
      ItemsDao.updateItem(itemData.itemId, { items });
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

  return (
    <div className="items">
      <Button className="add-btn" onClick={handleOpenModal}>
        {/* <FontAwesomeIcon icon="fas fa-check-circle" />  */}Add Items
      </Button>
      <Modal
        title={isEdit ? 'Add Items' : 'Edit Items'}
        open={isOpenModal}
        onOk={onClickSave}
        onCancel={handleCancelModal}
        okText="Save"
      >
        <AddItem handleChange={handleChange} handleSelectItem={handleSelectItem} items={items} />
      </Modal>
      <div className="item-list-container">
        <ItemList itemData={itemData} deleteItem={deleteItem} handleEdit={handleEdit} />
      </div>
    </div>
  );
};

export default Items;
