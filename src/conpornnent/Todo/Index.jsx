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

  // // モーダル
  // const [show, setShow] = useState(false);
  // const openModal = () => {
  //   setShow(true)
  // }

  return (
    <div>
      <Header />
      {/* <RemoveButton/> */}
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
};

export default Todo;