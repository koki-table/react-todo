// import React, { useEffect } from 'react';
import Modal from "../Modal/Index";
import { useState } from 'react';

const TodoList = ({ todos, setTodos, detailTodos, setDetailTodos }) => {

    // 追加したタスクを消す
    const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

    setDetailTodos(
        detailTodos.filter((detailTodo, detailTodoIndex) => (detailTodoIndex !== index))
    )
    };

    // タスク完了のチェック
    const handleUpdateTask = (index) => {

        // todos.mapですべてのtodoをループで確認
        const newTodos = todos.map((todo, todoIndex) => {
            // 引数で渡しているindex番号に合うtodoに対して、
            if (todoIndex === index) {
            // todo.isCompletedを!todo.isCompletedに代入して、変数に入れ込んでいる
            todo.isCompleted = !todo.isCompleted;
            }
            // 同じindex番号以外の場合は、todo.isCompletedの状態のまま返り値として返している
            return todo;
        });
        setTodos(newTodos);
    };

    const [show, setShow] = useState(false);
    const [modalButton, setmodalButton] = useState(0);

    const [detailTask, setDetailTask] = useState('');

    // モーダルを開く際に「タスク完了のチェック」を参考に条件分岐で、同じindex番号のみtrueにする
    const openModal = function(index) {
        setmodalButton(index)
        setShow(true)
    }

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
                            <button id={`modal-trigger-${index + 1}`} onClick={() => openModal(index)}>モーダル開く</button>
                            <Modal index={index} show={show} setShow={setShow} modalButton={modalButton} detailTodos={detailTodos} setDetailTodos={setDetailTodos} detailTask={detailTask} setDetailTask={setDetailTask}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;