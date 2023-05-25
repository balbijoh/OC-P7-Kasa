import { useState } from 'react'
import Image from 'next/image'

import ArrowUp from '../../assets/icon_arrow-up.svg'
import ArrowDown from '../../assets/icon_arrow-down.svg'

import style from '../../css/main.module.css'

function Collapse({ title, content }) {
    const [collapse, setCollapse] = useState('closed')

    // Gère l'état de l'expansion panel
    function handleClick(e) {
        if (collapse === 'closed') {
            setCollapse('opened')
        } else {
            setCollapse('closed')
        }
    }
    
    return (
        <>
            <div className={style.collapse_bar} onClick={() => handleClick()}>
                <h2>{title}</h2>
                    <Image src={collapse === 'closed' ? ArrowDown : ArrowUp}
                        className={style.collapse_icon}
                        alt={collapse === 'closed' ? `Afficher le contenu` : `Masquer le contenu`} />
            </div>
            
            {collapse === 'closed' ? (
                <></>
                ) : (
                    <div className={style.collapse_content}>
                        <div>{content}</div>
                    </div>
                )}
        </>
    )
}

export default Collapse