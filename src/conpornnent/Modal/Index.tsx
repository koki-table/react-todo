import React from "react"
// import { useState } from 'react';
import AddDetailTodo from "./AddDetailTodo";

type ModalProps = {
    show: string,
    setShow: any,
    content: string,
    detailTodos: any,
    setDetailTodos: any,
    index: any,
}

const Modal = ( props: ModalProps ) => {
    const closeModal = () => {
        props.setShow(false)
    }

    if (props.show) {
        return (
            // {props.todos.map((index) => (
            <div id={`modal-target-${props.index + 1}`} className='overlay' onClick={closeModal}>
                <div className='content' onClick={(e) => e.stopPropagation()}>
                    {/* <p>{props.content}</p> */}

                    <AddDetailTodo detailTodos={props.detailTodos} setDetailTodos={props.setDetailTodos}/>
                    <button onClick={() => props.setShow(false)}>Close</button>
                </div>
            </div>
            // ))}
        );
        } else {
        return null;
    }
};

export default Modal;