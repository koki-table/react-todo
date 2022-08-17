import { useState, useCallback } from 'react';

const ModalSample = ( {index}) => {
    // const MODALS = {
    //     // DEFAULT: "default",
    //     // TEST1: "test1",
    //     // TEST2: "test2"
    //     TEST: `test${index}`
    //     // TEST2: `test${index}`
    // }

    const MODALS = `test${index}`

    const[modalName, setModalName] = useState(null);

    const handleClickClose = useCallback(() => {
        setModalName(null);
        document.removeEventListener('click', handleClickClose)
    },[])

    // 下記useEffectの使用用途が不明のため、コメントアウト、、特に問題はなさそうだけど、、
    // useEffect(()=>{
    //     return ()=>{
    //         document.removeEventListener('click', handleClickClose)
    //     }
    // },[handleClickClose])

    // const handleOpenClick = (event) => {
    //     setModalName(`test${index}`);
    //     document.addEventListener('click',handleClickClose)
    //     event.stopPropagation()
    // }

    // const DefaultModal = (
    //     <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
    //         <div className="modal-inner">
    //             <div clsssName="modal-content">
    //                 <p>デフォルトモーダル</p>
    //             </div>
    //             <button className="modal-test1-btn" onClick={() => {setModalName("test1");}}>
    //                 test1
    //             </button>
    //             <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
    //                 test2
    //             </button>
    //             <button className="modal-close-btn" onClick={()=>{handleClickClose()}}>
    //                 閉じる
    //             </button>
    //         </div>
    //     </div>
    // )

    const TestModal1 = (
        <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
            <div className="modal-inner">
                <div clsssName="modal-content">
                    <p>テストモーダル1</p>
                </div>
                {/* <button className="modal-default-btn" onClick={() => {setModalName("default");}}>
                    test1
                </button>
                <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
                    test2
                </button> */}
                <button className="modal-default-button" onClick={()=>{handleClickClose()}}>
                    戻る
                </button>
            </div>
        </div>
    )

    // const TestModal2 = (
    //     <div id="modal" className="modal" onClick={(event)=>{event.stopPropagation()}}>
    //         <div className="modal-inner">
    //             <div clsssName="modal-content">
    //                 <p>テストモーダル2</p>
    //             </div>
    //             {/* <button className="modal-test1-btn" onClick={() => {setModalName("test1");}}>
    //                 test1
    //             </button>
    //             <button className="modal-test2-btn" onClick={() => {setModalName("test2");}}>
    //                 test2
    //             </button> */}
    //             <button className="modal-default-button" onClick={()=>{handleClickClose()}}>
    //                 戻る
    //             </button>
    //         </div>
    //     </div>
    // )


    return (
        <div className="page">
            {/* <button className="modal-open-btn" onClick={(event)=>{handleOpenClick(event)}}>
                Modal Opne!
            </button> */}

            <button className="modal-open-btn" onClick={(event)=>{setModalName(`test${index}`);}}>
                Modal open
            </button>

            {/* <button className="modal-open-btn" onClick={(event)=>{setModalName("test2");}}>
                Modal 02
            </button> */}


            {modalName === MODALS && TestModal1}
            {/* {modalName === MODALS.TEST2 && TestModal1} */}
            {/* {modalName === MODALS.DEFAULT && DefaultModal} */}

        </div>
    );
}

export default ModalSample;