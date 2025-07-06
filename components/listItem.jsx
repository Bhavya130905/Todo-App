import { ListGroup } from "react-bootstrap";

const ListItem = ({ task, index, onItemClick, onItemDoubleClick }) => (
<ListGroup.Item
  className="todo-list-item"
  onClick={() => onItemClick(index)}
  onDoubleClick={() => onItemDoubleClick(index)}
>
  {task}
</ListGroup.Item>
)

export default ListItem
