import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';

const Items = () => {
  return (
    <div className="items">
      <Button className="add-btn">
        <FontAwesomeIcon icon="fas fa-check-circle" /> Add Items
      </Button>
    </div>
  );
};

export default Items;
