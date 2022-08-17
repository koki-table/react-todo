import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Header from '../../common/Header';
// import Modal from "./Modal";
// import RemoveButton from './../Parts/RemoveButton';

const Todo = () => {
  const initialState = [
    {
      task: '最初のTodo',
      isCompleted: true,
    },
    {
      task: '次のTodo',
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);

  // モーダルの中の詳細テキスト
  const detailInitialState = [
      {
          detail: 'サンプルテキスト01'
      },
      {
          detail: 'サンプルテキスト02'
      },
  ]
  
  const [detailTodos, setDetailTodos] = useState(detailInitialState);

  return (
    <div>
      <Header />
      <TodoList todos={todos} setTodos={setTodos} detailTodos={detailTodos} setDetailTodos={setDetailTodos}/>
      <AddTodo setTodos={setTodos} detailTodos={detailTodos} setDetailTodos={setDetailTodos}/>
    </div>
  );
};

export default Todo;