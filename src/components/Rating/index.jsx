import Image from 'next/image'
import StarActive from '../../assets/icon_star-active.svg'
import StarInactive from '../../assets/icon_star-inactive.svg'
import style from '../../css/main.module.css'

function Rating({starState}) {
    return (
        <>
            {starState == 'starActive' ? (
                <Image className={style.dwelling_starActive}
                        src={StarActive}
                        alt='Icone de notation' />
			) : (
                <Image className={style.dwelling_starInactive}
                        src={StarInactive}
                        alt='Icone de notation' />
			)}
        </>
    )
}

export default Rating