import Modal from "../Modal/Index";
import { useState } from 'react';
import { deleteDoc, doc } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebase.config";

const TodoList = ({ todos, setTodos, userData, setuserData }) => {

    // 追加したタスクを消す
    const handleRemoveTask = async(index) => {
        // todosに登録しているdataを全て取得
        const deleteTodos = [...todos];
        
        // 取得したdataの中から該当のindex番号のdataを削除
        deleteTodos.splice(index, 1);
        await setTodos(deleteTodos);

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
                            <Modal index={index} show={show} setShow={setShow} modalButton={modalButton} detailTask={detailTask} setDetailTask={setDetailTask} userData={userData} setuserData={setuserData} todos={todos} setTodos={setTodos}/>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;