import { useState } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Header from './Header';
import Modal from "./Modal";
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

  // モーダル
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true)
  }

  return (
    <div>
      <Header />
      {/* <RemoveButton/> */}
      <TodoList todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />

      <div>
        {/* <button onClick={() => setShow(true)}>Click</button> */}
        <button onClick={openModal}>Click</button>
        <Modal show={show} setShow={setShow} content="Appから内容を変更できます"/>
      </div>
    </div>
  );
};

export default Todo;