import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Header from '../../common/Header';
// import Auth from '../../firebase/auth/firebase.auth';
import { firebaseApp } from "../../firebase/firebase.config";
// eslint-disable-next-line no-unused-vars
import { collection, deleteDoc, addDoc, getDocs, setDoc, doc, orderBy, limit, endAt, getDoc, getDocFromCache, onSnapshot, startAt, query, where, collectionGroup } from "firebase/firestore";
// eslint-disable-next-line no-unused-vars
import { async } from '@firebase/util';

const Todo = (user, setUser) => {

    const [ userData, setuserData ] = useState('');
    
    // 現在ログインしているuserのfirestoreに登録済みtodoを取得してstateに登録
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const addColection = async() => {

            // firestoreのcollectionを参照
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const tasksCollectionRef = collection(firebaseApp.firestore, 'users', userData, 'todo');

            if(tasksCollectionRef) {
                // 参照したdataをstateに登録
                const snapShots = await getDocs(tasksCollectionRef)
                snapShots.forEach((doc) => {
                    setTodos((setingTasks) => [...setingTasks, doc.data()]);
                })
            }
        };
        // eslint-disable-next-line no-unused-expressions
        addColection()
    }, [userData]);

    // const initialState = [
    //     {
    //         task: '最初のTodo',
    //         isCompleted: true,
    //     },
    //     {
    //         task: '次のTodo',
    //         isCompleted: false,
    //     },
    // ];

    const [todos, setTodos] = useState([]);

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
        <TodoList todos={todos} setTodos={setTodos} detailTodos={detailTodos} setDetailTodos={setDetailTodos} userData={userData} setuserData={setuserData}/>
        <AddTodo todos={todos} setTodos={setTodos} detailTodos={detailTodos} setDetailTodos={setDetailTodos}  user={user} setUser={setUser} userData={userData} setuserData={setuserData}/>
        </div>
    );
};

export default Todo;