import React, { useState } from 'react';
import { Typography, Layout } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const { Title } = Typography;
const { Content } = Layout;

interface TodoItem {
  task: string;
  addedAt: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (task: string) => {
    if (task.trim()) {
      const newTodo = { task, addedAt: new Date().toLocaleString() }; 
      setTodos([...todos, newTodo]);
      toast.success('Task added successfully!');
    } else {
      toast.error('Please enter a valid task.');
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
    toast.info('Task removed.');
  };

  const removeAllTodos = () => {
    setTodos([]);
    toast.info('All tasks removed.');
  };

  return (
    <>
      <Layout style={{ padding: '20px', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
        <Content style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
          <Title level={2} style={{ textAlign: 'center' }}>To-Do List</Title>
          <AddTodo addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} removeAllTodos={removeAllTodos} />
        </Content>
      </Layout>
      <ToastContainer />
    </>
  );
};

export default App;
