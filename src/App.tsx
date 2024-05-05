import { useEffect, useState } from 'react'
import './App.css'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import { GetAllTodos } from './lib/todo'
import { Todo } from './domain/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getAllTodos = async () => {
      const todoData = await GetAllTodos();
      setTodos(todoData);
    }
    getAllTodos();
  },[])

  return (
    <>
    <h1 data-testid="title">TODOリスト</h1>
      <TableContainer>
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Done</Th>
        <Th isNumeric>Created at</Th>
      </Tr>
    </Thead>
    <Tbody>
      {todos.map((todo) => (
        <Tr key={todo.id}>
          <Td>{todo.title}</Td>
          <Td>{todo.done ? "True" : "FALSE"}</Td>
          <Td>{todo.created_at}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
</TableContainer>
    </>
  )
}

export default App
