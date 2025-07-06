import { Form, Button, InputGroup } from 'react-bootstrap';

const Input = ({ value, setValue, onSubmit, editIndex, onCancel }) => (
<Form onSubmit={e => { e.preventDefault(), onSubmit()}} className="todo-input-group">
  <InputGroup>
    <Form.Control
      className="todo-input"
      type="text"
      placeholder="Enter the todo"
      value={value}
      onChange={e => setValue(e.target.value)}/>

    <Button
      className={`todo-btn ${editIndex !== null ? "update" : "add"}`}
      type="submit"> {editIndex !== null ? "Update" : "Add"}

    </Button>
    {editIndex !== null && (
      <Button className="todo-btn cancel" onClick={onCancel}>
        Cancel
      </Button>
    )}
  </InputGroup>
</Form>
)

export default Input