import Image from 'next/image'
import style from '../../css/main.module.css'

function Banner({ src, pageClass, text }) {
    return (
        <div className={pageClass}>
            <Image src={src} className={style.banner_image} alt='Image bannière' priority={true} />

            {text ? (
                <div className={style.banner_text}>
                    <p>{text}</p>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Banner