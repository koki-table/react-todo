import { useState } from 'react';
// import { useForm } from 'react-hook-form'
import { collection, setDoc, doc, query, where } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebase.config";

const AddTodo = ({ setTodos, user, userData, setuserData }) => {
    // const { register } = useForm();
    
    const [task, setTask] = useState('');
    
    const handleNewTask = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => { 
        event.preventDefault();
        if (task === '') {
            alert('入力必須');
            return;
        }; 

        // todoにtaskの内容を追加する
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
        
        // database(firestoreの参照)
        const firestoreTodos = collection(firebaseApp.firestore, 'users', userData, 'todo');
        
        // eslint-disable-next-line no-unused-vars
        setDoc(doc(firestoreTodos, `${task}`),{
            task: task,
            isCompleted: false,
            detail: 'サンプルテキスト',
        });

        setTask('');
    };

    return (
        <form className='input-form' onSubmit={handleSubmit}>
            <div className='inner'>
                <input  id='todo-input' className='input' value={task} placeholder="TODOを入力してください。" 
                // {...register('inputText', { required: true })}
                onChange={handleNewTask}/>
                <button id="add-button" className='btn' onChange={handleNewTask}>追加</button>
            </div>
        </form>
    );
};

export default AddTodo;