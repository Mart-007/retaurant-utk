/* eslint-disable react/prop-types */
import { Input, Select } from 'antd';
import { FRIES_OPTIONS } from '../../../../../shared/enums/appConstants';

function AddItem({ handleChange, handleSelectItem, items }) {
  return (
    <div className="add-item">
      <Input
        className="category"
        name="category"
        value={items.category}
        onChange={e => handleChange(e)}
        placeholder="category"
      />
      <Input
        className="name"
        name="name"
        value={items.name}
        onChange={e => handleChange(e)}
        placeholder="name"
      />
      <Select
        className="size"
        defaultValue={FRIES_OPTIONS[0]}
        value={FRIES_OPTIONS.find(option => option.value === items.size)}
        name="size"
        onChange={handleSelectItem}
        options={FRIES_OPTIONS}
        popupMatchSelectWidth={true}
      />
      <Input
        className="price"
        name="price"
        type="number"
        value={items.price}
        onChange={e => handleChange(e)}
        placeholder="0"
      />
      <Input
        className="cost"
        name="cost"
        type="number"
        value={items.cost}
        onChange={e => handleChange(e)}
        placeholder="0"
      />
      <Input
        className="amount_in_stock"
        name="amount_in_stock"
        type="number"
        value={items.amount_in_stock}
        onChange={e => handleChange(e)}
        placeholder="0"
      />
    </div>
  );
}

export default AddItem;
