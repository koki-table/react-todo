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
    modalButton: number,
    detailTask:string,
    setDetailTask:string,
}

const Modal = ( props: ModalProps ) => {
    const closeModal = () => {
        props.setShow(false)
    }

    if (props.show && props.index === props.modalButton) {
        return (
            <div key={props.index} id={`modal-target-${props.index + 1}`} className='overlay' onClick={closeModal}>
                <div className='content' onClick={(e) => e.stopPropagation()}>

                    <AddDetailTodo detailTodos={props.detailTodos} setDetailTodos={props.setDetailTodos} index={props.index} detailTask={props.detailTask} setDetailTask={props.setDetailTask}/>
                    <button onClick={() => props.setShow(false)}>Close</button>
                </div>
            </div>
        );
        } else {
        return null;
    }
};

export default Modal;