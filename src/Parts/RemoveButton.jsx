// import React from 'react';

// const RemoveButton = ({ todos, setTodos }) => {
//     const handleRemoveTask = (index) => {
//     const newTodos = [...todos];
//     newTodos.splice(index, 1);
//     setTodos(newTodos);
//     };

//     return (
//         function (index) {
//             return (
//                 <button id={`complete-button-${index + 1}`} key={index} className='task-remove' onClick={() => handleRemoveTask(index)}>
//                     削除
//                 </button>
//             );
//         }
//     );
// };

// export default RemoveButton;