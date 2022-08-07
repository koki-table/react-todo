import { useState, useEffect, useCallback } from 'react';

const ModalSample = ( {index}) => {
    const MODALS = {
        DEFAULT: "default",
        TEST1: "test1",
        TEST2: "test2"
    }

    const[modalName, setModalName] = useState(null);

    const handleClickClose = useCallback(() => {
        setModalName(null);
        document.removeEventListener('click', handleClickClose)
    },[])

    useEffect(()=>{
        return ()=>{
            document.removeEventListener('click', handleClickClose)
        }
    },[handleClickClose])

    const handleOpenClick = (event) => {
        setModalName(MODALS.DEFAULT);
        document.addEventListener('click',handleClickClose)
        event.stopPropagation()
    }

    const DefaultModal = (
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div className="modal-inner">
                <div clsssName="modal-content">
                    <p>デフォルトモーダル</p>
                </div>
                <button className="modal-test1-btn" onClick={() => {setModalName("test1");}}>
                    test1
                </button>
                <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
                    test2
                </button>
                <button className="modal-close-btn" onClick={()=>{handleClickClose()}}>
                    閉じる
                </button>
            </div>
        </div>
    )

    const TestModal1 = (
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div className="modal-inner">
                <div clsssName="modal-content">
                    <p>テストモーダル1</p>
                </div>
                <button className="modal-default-btn" onClick={() => {setModalName("default");}}>
                    test1
                </button>
                <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
                    test2
                </button>
                <button className="modal-default-button" onClick={()=>{handleOpenClick()}}>
                    戻る
                </button>
            </div>
        </div>
    )

    const TestModal2 = (
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div className="modal-inner">
                <div clsssName="modal-content">
                    <p>テストモーダル2</p>
                </div>
                <button className="modal-test1-btn" onClick={() => {setModalName("test1");}}>
                    test1
                </button>
                <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
                    test2
                </button>
                <button className="modal-default-button" onClick={()=>{handleOpenClick()}}>
                    戻る
                </button>
            </div>
        </div>
    )


    return (
        <div className="page">
            <button className="modal-open-btn" onClick={(event)=>{handleOpenClick(event)}}>
                Modal Opne!
            </button>

            {modalName === MODALS.TEST1 && TestModal1}
            {modalName === MODALS.TEST2 && TestModal2}
            {modalName === MODALS.DEFAULT && DefaultModal}

        </div>
    );
}

export default ModalSample;