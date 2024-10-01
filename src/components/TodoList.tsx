import React from 'react';
import { List, Button, Typography } from 'antd';

const { Text } = Typography;

interface TodoItem {
  task: string;
  addedAt: string;
}

interface TodoListProps {
  todos: TodoItem[];
  removeTodo: (index: number) => void;
  removeAllTodos: () => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, removeTodo, removeAllTodos }) => {
  return (
    <div>
      <List
        bordered
        dataSource={todos}
        renderItem={(item, index) => (
          <List.Item
            actions={[<Button danger onClick={() => removeTodo(index)}>Delete</Button>]}
          >
            <div>
              <Text>{item.task}</Text>
              <br />
              <Text type="secondary" style={{ fontSize: '12px' }}>
                Added at: {item.addedAt}
              </Text>
            </div>
          </List.Item>
        )}
        style={{ marginBottom: '20px' }}
      />
      {todos.length > 0 && (
        <Button danger onClick={removeAllTodos} block>
          DELETE All
        </Button>
      )}
    </div>
  );
};

export default TodoList;
