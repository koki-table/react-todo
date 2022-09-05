// import { useForm } from 'react-hook-form'
import { collection, doc, updateDoc } from "firebase/firestore";
import { firebaseApp } from "../../firebase/firebase.config";

const AddDetailTodo = ({ index, detailTask, setDetailTask, userData, setuserData, todos, setTodos }) => {
    // const { register } = useForm();

    // database(firestoreの参照)
    const firestoreTodos = collection(firebaseApp.firestore, 'users', userData, 'todo');
    
    // 入力フォームにタスクを入力するからDetailTask
    const handleNewTask = (event) => {
        setDetailTask(event.target.value);
    };
    
    const handleSubmit = async(event) => { 
        event.preventDefault();

        if (detailTask === '') {
            alert('入力必須');
            return;
        }; 

        // todoのstateにdetailTaskを登録
        setTodos(
            todos.map((todo, todoIndex) => (todoIndex === index ? { detail : detailTask, isCompleted: todo.isCompleted, task : todo.task } : todo))
        )

        // firestoreのフィールド更新
        await updateDoc(doc(firestoreTodos, todos[index].task),{
            detail: detailTask,
        });

        setDetailTask('');
    };

    // detailAreaの初期値
    function initDetailArea() {
        return <li>{ todos[index].detail }</li>
    }

    return (
        <div>
            <form className='input-form' onSubmit={handleSubmit}>
                <div className='inner'>
                    <input  id='todo-input' className='input' value={detailTask} placeholder="詳細を入力してください。" 
                    onChange={handleNewTask}/>
    
                    <button id="add-button" className='btn' onChange={handleNewTask}>更新</button>
                </div>
            </form>
            <ul>
                {initDetailArea()}
            </ul>
        </div>
    );
};

export default AddDetailTodo;