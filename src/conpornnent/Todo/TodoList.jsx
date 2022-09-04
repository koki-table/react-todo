// import React, { useEffect } from 'react';
import Modal from "../Modal/Index";
import { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { collection, deleteDoc, addDoc, getDocs, setDoc, doc, updateDoc, orderBy, limit, endAt, getDoc, getDocFromCache, onSnapshot, startAt, query, where, collectionGroup } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebase.config";

const TodoList = ({ todos, setTodos, detailTodos, setDetailTodos, userData, setuserData }) => {

    // database(firestoreの参照)
    // const firestoreTodos = collection(firebaseApp.firestore, 'users', userData, 'todo');

    // 追加したタスクを消す
    const handleRemoveTask = async(index) => {
        // todosに登録しているdataを全て取得
        const deleteTodos = [...todos];
        
        // 取得したdataの中から該当のindex番号のdataを削除
        deleteTodos.splice(index, 1);
        await setTodos(deleteTodos);

        // detailTodos(モーダル内)のdataも削除したtodosのindexに合うように新しい配列を生成
        setDetailTodos(
            detailTodos.filter((detailTodo, detailTodoIndex) => (detailTodoIndex !== index))
        )

        // firestoreのドキュメントを削除
        await deleteDoc(doc(firebaseApp.firestore, 'users', userData, 'todo', todos[index].task));
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

        console.log(todos[index].task);

        // firestoreのフィールド更新
        // await updateDoc(doc(firestoreTodos, todos[index].task),{
        //     isCompleted: true,
        // });
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
            {/* <div className='task-list__head'>
                <p>TODO一覧</p>
            </div> */}

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
                        <div className="modal-btn">
                            <button id={`modal-trigger-${index + 1}`} onClick={() => openModal(index)}>詳細</button>
                            <Modal index={index} show={show} setShow={setShow} modalButton={modalButton} detailTodos={detailTodos} setDetailTodos={setDetailTodos} detailTask={detailTask} setDetailTask={setDetailTask} userData={userData} setuserData={setuserData} todos={todos} setTodos={setTodos}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;