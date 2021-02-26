import React from 'react'
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ tile }, dispatch] = useStateValue();

    const handleAdd = () => {
        dispatch({
            type: "ADD",
        })
    }

    const handleRemove = () => {
        dispatch({
            type: "REMOVE",
        })
    }
    console.log(tile);

    return (
        <div className="sidebar">
            <button className="btn" onClick={handleAdd}>ADD TITLE</button>
            <button className="btn" onClick={handleRemove}>REMOVE TITLE</button>
        </div>
    )
}

export default Sidebar
