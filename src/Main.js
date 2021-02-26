import React from 'react'
import { useStateValue } from './StateProvider'
import TitleCard from './TitleCard'

function Main() {

    const [{ tile }, dispatch] = useStateValue();

    return (
        <div className="main">
            {tile.map(t => (
                <TitleCard tile={t}/>
            ))}
        </div>
    )
}

export default Main
