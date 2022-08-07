import { useState } from 'react';
// import { useForm } from 'react-hook-form'

const AddDetailTodo = ({ detailTodos, setDetailTodos }) => {
    // const { register } = useForm();
        
    const [detailTask, setDetailTask] = useState('');

    
    const handleNewTask = (event) => {
        console.log(event.target.value)
        setDetailTask(event.target.value);
    };
    
    const handleSubmit = (event) => { 
        event.preventDefault();

        if (detailTask === '') {
            alert('入力必須');
            return;
        }; 

        // setDetailTaskで追加した内容をsetDetailTodosを使って、detailTodosに登録
        console.log(...detailTodos);
        setDetailTodos((detailTodos) => [...detailTodos, { detailTask, isCompleted: false }]);

        setDetailTask('');
    };

    return (
        <div>
            <form className='input-form' onSubmit={handleSubmit}>
                <div className='inner'>
                    <input  id='todo-input' className='input' value={detailTask} placeholder="詳細を入力してください。" 
                    // {...register('inputText', { required: true })}
                    onChange={handleNewTask}/>
    
                    <button id="add-button" className='btn' onChange={handleNewTask}>追加</button>
    
    
                </div>
            </form>

            {/* <p>{detailTask}</p> */}
            <ul>
                { detailTodos.map((todo, index) => (
                <li key={ index }>{ todo.detailTask }</li>
                ))}
            </ul>
        </div>
    );
};

export default AddDetailTodo;