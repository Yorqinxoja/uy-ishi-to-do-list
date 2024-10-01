import React from 'react';
import { List, Button } from 'antd';

interface TodoItemProps {
  task: string;
  removeTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, removeTodo }) => {


  return (
    <List.Item
      actions={[
        <Button danger onClick={removeTodo}>
          Delete
        </Button>,
      ]}
    >
      {task}
    </List.Item>
  );
};

export default TodoItem;
