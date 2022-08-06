const Modal = ({show, setShow, content}) => {
    const closeModal = () => {
        setShow(false)
    }

    if (show) {
        return (
            <div id="overlay" onClick={closeModal}>
                <div id="content" onClick={(e) => e.stopPropagation()}>
                    <p>{content}</p>
                    <button onClick={() => setShow(false)}>Close</button>
                </div>
            </div>
        );
        } else {
        return null;
    }
};

export default Modal;