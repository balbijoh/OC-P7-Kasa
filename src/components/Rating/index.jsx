import Image from 'next/image'

import StarActive from '../../assets/icon_star-active.svg'
import StarInactive from '../../assets/icon_star-inactive.svg'

import style from '../../css/main.module.css'

function Rating({ rating }) {
    return (
        <>
            <Image className={style.dwelling_star}
                    src={rating >= 1 ? StarActive : StarInactive}
                    alt='Note : 1/5' />
            <Image className={style.dwelling_star}
                    src={rating >= 2 ? StarActive : StarInactive}
                    alt='Note : 2/5' />
            <Image className={style.dwelling_star}
                    src={rating >= 3 ? StarActive : StarInactive}
                    alt='Note : 3/5' />
            <Image className={style.dwelling_star}
                    src={rating >= 4 ? StarActive : StarInactive}
                    alt='Note : 4/5' />
            <Image className={style.dwelling_star}
                    src={rating >= 5 ? StarActive : StarInactive}
                    alt='Note : 5/5' />
        </>
    )
}

export default Rating