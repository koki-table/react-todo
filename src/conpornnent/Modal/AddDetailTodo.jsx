// import { useState } from 'react';
// import { useForm } from 'react-hook-form'

const AddDetailTodo = ({ index, detailTodos, setDetailTodos, detailTask, setDetailTask }) => {
    // const { register } = useForm();
    
    // 入力フォームにタスクを入力するからDetailTask
    const handleNewTask = (event) => {
        setDetailTask(event.target.value);
    };
    
    const handleSubmit = (event) => { 
        event.preventDefault();

        if (detailTask === '') {
            alert('入力必須');
            return;
        }; 

        console.log(index);

        setDetailTodos(
            detailTodos.map((detailTodo, detailTodoIndex) => (detailTodoIndex === index ? { detail : detailTask } : detailTodo))
        )

        setDetailTask('');
    };

    // detailAreaの初期値
    function initDetailArea() {
        return <li>{ detailTodos[index].detail }</li>
    }

    function DetailAreaFilter() {
        return  initDetailArea()
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
                {DetailAreaFilter()}
            </ul>
        </div>
    );
};

export default AddDetailTodo;