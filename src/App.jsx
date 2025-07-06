import { Container } from 'react-bootstrap'
import Input from '../components/input'
import List from '../components/list'
import { useState, useEffect } from 'react'
import './todo.css'

const App = () => {
  // Load from localStorage
  const [taskList, setTaskList] = useState(() => {
    const stored = localStorage.getItem('taskList')
    return stored ? JSON.parse(stored) : []
  })
  const [editIndex, setEditIndex] = useState(null)
  const [inputValue, setInputValue] = useState('')

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  // Add or update todo
  const onSubmit = () => {
    if (inputValue.trim() === '') return
    if (editIndex !== null) {
      // Update mode
      setTaskList(prev => {
        const updated = [...prev]
        updated[editIndex] = inputValue
        return updated
      })
      setEditIndex(null)
    } else {
      // Add mode
      setTaskList(prev => [...prev, inputValue])
    }
    setInputValue('')
  }

  // When user clicks on a todo (single click)
  const onItemClick = (index) => {
    setEditIndex(index);
    setInputValue(taskList[index])
  }

  // When user double clicks on a todo (delete)
  const onItemDoubleClick = (index) => {
    setTaskList(prev => prev.filter((_, i) => i !== index))
    // If deleting the item being edited, reset input
    if (editIndex === index) {
      setEditIndex(null)
      setInputValue('')
    }
  }

  // Cancel update 
  const onCancel = () => {
    setEditIndex(null)
    setInputValue('')
  }

return (
  <Container className="todo-container">
    <h1 className="todo-title">Todo App</h1>
    <Input
      value={inputValue}
      setValue={setInputValue}
      onSubmit={onSubmit}
      editIndex={editIndex}
      onCancel={onCancel}
    />
    <List
      taskList={taskList}
      onItemClick={onItemClick}
      onItemDoubleClick={onItemDoubleClick}
    />
  </Container>)
}
export default App