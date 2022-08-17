import { useState } from 'react';
// import { useForm } from 'react-hook-form'

const MyModal = ( index ) => {

    // モーダルサンプル
    const initialModalState = [
        {
            detailTask: 'sample',
        },
        {
            detailTask: 'sample02',
        },    
    ]
    
    const [modals, setmodals] = useState(initialModalState);

    const selectDetailModal = modals.map((modal, showIndex) => {
        const showNumber = showIndex + 1

        if (showNumber === index.index) {
            return modal.detailTask
        }

        return null
    })

    return (
        <ul>
            { modals.map((modal, index) => (
            <li key={ index }>{(selectDetailModal)}</li>
            ))}
        </ul>
    );
};

export default MyModal;