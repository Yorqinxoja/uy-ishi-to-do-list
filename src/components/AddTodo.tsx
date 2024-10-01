import React, { useState } from 'react';
import { Input, Button } from 'antd';

interface AddTodoProps {
  addTodo: (task: string) => void;
}

const AddTodo: React.FC<AddTodoProps> = ({ addTodo }) => {
  const [task, setTask] = useState<string>('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task);
      setTask('');
    }
  };

  return (
    <div style={{ display: 'flex', marginBottom: '20px' }}>
      <Input
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      <Button type="primary" onClick={handleAdd}>
        Add Task
      </Button>
    </div>
  );
};

export default AddTodo;
