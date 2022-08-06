import React from 'react';

const TodoList = ({ todos, setTodos }) => {

    // 追加したタスクを消す
    const handleRemoveTask = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    };

    // タスク完了のチェック
    const handleUpdateTask = (index) => {
        const newTodos = todos.map((todo, todoIndex) => {
            if (todoIndex === index) {
            todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
        setTodos(newTodos);
    };

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
                    </li>
                ))}
            </ul>
        </div>
        
    );
};

export default TodoList;