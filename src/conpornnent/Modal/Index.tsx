import React from "react"
// import { useState } from 'react';
import AddDetailTodo from "./AddDetailTodo";

type ModalProps = {
    show: string,
    setShow: any,
    content: string,
    index: any,
    modalButton: number,
    detailTask:string,
    setDetailTask:string,
    userData: any,
    setuserData: any,
    todos: any,
    setTodos: any
}

const Modal = ( props: ModalProps ) => {
    const closeModal = () => {
        props.setShow(false)
    }

    if (props.show && props.index === props.modalButton) {
        return (
            <div key={props.index} id={`modal-target-${props.index + 1}`} className='overlay' onClick={closeModal}>
                <div className='content inner' onClick={(e) => e.stopPropagation()}>

                    <AddDetailTodo index={props.index} detailTask={props.detailTask} setDetailTask={props.setDetailTask} userData={props.userData} setuserData={props.setuserData} todos={props.todos} setTodos={props.setTodos}/>
                    <button className="close-btn" onClick={() => props.setShow(false)}>Close</button>
                </div>
            </div>
        );
        } else {
        return null;
    }
};

export default Modal;