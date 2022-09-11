import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Header from '../../common/Header';
import { firebaseApp } from "../../firebase/firebase.config";
import { collection, getDocs, query, where } from "firebase/firestore";

const Todo = (user, setUser) => {
    const [ userData, setuserData ] = useState('');
    const [todos, setTodos] = useState([]);

    // ログインしているユーザーのmailからfirestoreの該当usersドキュメント取得
    let userMail = user.user.user.email
    const userRef = collection(firebaseApp.firestore, "users");
    const seachUser = query(userRef, where("mail", "==", userMail));

    const userId = async() => {
        const querySnapshot = await getDocs(seachUser);

        querySnapshot.forEach((doc) => {
            setuserData(doc.id)
        });
    }
    userId()
    
    // 現在ログインしているuserのfirestoreの登録済みtodoを取得してstateに登録
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        const addColection = async() => {

            if(userData) {
                // firestoreのcollectionを参照
                const tasksCollectionRef = collection(firebaseApp.firestore, 'users', userData, 'todo');

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
    
    console.log(todos);

    return (
        <div>
        <Header />
        <TodoList todos={todos} setTodos={setTodos} userData={userData} setuserData={setuserData}/>
        <AddTodo todos={todos} setTodos={setTodos}  user={user} setUser={setUser} userData={userData} setuserData={setuserData}/>
        </div>
    );
};

export default Todo;