import React from 'react';
import Modal from "../Modal/Index";
import { useState } from 'react';
import ModalSample from "../ModalSample/Index";


const TodoList = ({ todos, setTodos }) => {

    // 追加したタスクを消す
    const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };

    // タスク完了のチェック
    const handleUpdateTask = (index) => {
        const newTodos = todos.map((todo, todoIndex) => {
            if (todoIndex === index) {
            todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };

    // モーダル
    const [show, setShow] = useState(false);
    const openModal = () => {
        setShow(true)
    }

    // モーダルの中の詳細テキスト
    const initialState = [
        {
            detailTask: 'sample',
            isCompleted: false
        },   
    ]
    
    const [detailTodos, setDetailTodos] = useState(initialState);
    
    // 複数のモーダルを扱う際にtrue・falseではなく『名前』で管理する。
    // const MODALS = {
    //     DEFAULT: "default",
    //     TEST1: "test1",
    //     TEST2: "test2"
    // }

    return (
        <div className='task-list inner'>
            <div className='task-list__head'>
                <p>タスク一覧</p>
            </div>

            {/* 追加したタスクリスト */}
            <ul className='task-list__body'>
                {todos.map((todo, index) => (

                    // 追加したタスク
                    <li id={`todo-item-${index + 1}`} key={index}>

                        {/* タスク完了のチェックボタン */}
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={() => handleUpdateTask(index)}
                        />

                        {/* 追加したタスクのテキスト */}
                        <p className='task-text' style={{textDecoration: todo.isCompleted ? 'line-through' : 'none',}}>
                            {todo.task}
                        </p>

                        {/* 削除ボタン */}
                        <button id={`complete-button-${index + 1}`} key={index} className='task-remove' onClick={() => handleRemoveTask(index)}>
                            削除
                        </button>

                        {/* モーダル */}
                        <div>
                            {/* <button onClick={() => setShow(true)}>Click</button> */}
                            <button id={`modal-trigger-${index + 1}`} onClick={openModal}>詳細</button>
                            {/* <Modal show={show} setShow={setShow} content=''/> */}
                            <Modal index={index} show={show} setShow={setShow} detailTodos={detailTodos} setDetailTodos={setDetailTodos}/>
                        </div>
                        <ModalSample index={index}/>
                    </li>
                ))}
            </ul>

        </div>
    );
};

export default TodoList;