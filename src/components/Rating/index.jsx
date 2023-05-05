import Image from 'next/image'
import StarActive from '../../assets/icon_star-active.svg'
import StarInactive from '../../assets/icon_star-inactive.svg'
import style from '../../css/main.module.css'

function Rating({rating}) {
    return (
        <>
            <Image className={style.dwelling_starActive}
                    src={rating >= 1 ? StarActive : StarInactive}
                    alt='Icone de notation' />
            <Image className={style.dwelling_starInactive}
                    src={rating >= 2 ? StarActive : StarInactive}
                    alt='Icone de notation' />
            <Image className={style.dwelling_starInactive}
                    src={rating >= 3 ? StarActive : StarInactive}
                    alt='Icone de notation' />
            <Image className={style.dwelling_starInactive}
                    src={rating >= 4 ? StarActive : StarInactive}
                    alt='Icone de notation' />
            <Image className={style.dwelling_starInactive}
                    src={rating >= 5 ? StarActive : StarInactive}
                    alt='Icone de notation' />
        </>
    )
}

export default Rating