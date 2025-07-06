import { ListGroup } from "react-bootstrap";
import ListItem from "./listItem";

const List = ({ taskList, onItemClick, onItemDoubleClick }) => (
<ListGroup className="todo-list">
  {taskList.map((task, idx) => (
    <ListItem
      key={idx}
      task={task}
      index={idx}
      onItemClick={onItemClick}
      onItemDoubleClick={onItemDoubleClick}
    />
  ))}
</ListGroup>
)

export default List