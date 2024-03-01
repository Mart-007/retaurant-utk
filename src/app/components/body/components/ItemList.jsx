/* eslint-disable react/prop-types */
import { Button } from 'antd';

const ItemList = ({ itemData, deleteItem, handleEdit }) => {
  const newItemData = itemData.filter(data => data.price !== undefined);
  return (
    <>
      {newItemData.map((data, index) => (
        <div className="item-list" key={index}>
          <div className="category">{data.category}</div>
          <div className="name-size">
            <span>{data.name}</span>
            <span>{data.size[0]}</span>
          </div>
          <div className="price">
            <span>Price</span>
            <span>{data.price}</span>
          </div>
          <div className="cost">
            <span>Cost</span>
            <span>{data.cost}</span>
          </div>
          <div className="amount_in_stock">
            <span>Amount in Stock</span>
            <span>{data.amount_in_stock || 0}</span>
          </div>
          <div className="button">
            <Button className="delete" onClick={() => deleteItem(data.itemId)}>
              Delete
            </Button>
            <Button className="edit" onClick={() => handleEdit(data)}>
              Edit
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
