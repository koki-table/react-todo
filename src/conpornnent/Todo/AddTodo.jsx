import { useState } from 'react';
// import { useForm } from 'react-hook-form'

const AddTodo = ({ setTodos, detailTodos, setDetailTodos }) => {
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

        // モーダルの中の詳細テキストの初期値を入力
        setDetailTodos((detailTodos) => [...detailTodos, { detailTask: 'サンプルテキストAddTodo' }]);
        setTodos((todos) => [...todos, { task, isCompleted: false }]);
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