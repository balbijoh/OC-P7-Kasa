import Image from 'next/image'
import style from '../../css/main.module.css'
import HomeBanner from '../../assets/home-banner.png'
import AboutBanner from '../../assets/about-banner.png'

function Banner({ page = 'home' }) {
    const bannerType = () => {
        if (page === 'home') {
            return HomeBanner
        } else {
            return AboutBanner
        }
    }

    return (
        <div className={bannerType() == HomeBanner ? style.banner_homeContainer : style.banner_aboutContainer}>
            <Image src={bannerType()} className={style.banner_image} alt='Image bannière' />

            {page === 'home' ? (
                <div className={style.banner_text}>
                    <p>Chez vous, partout et ailleurs</p>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
}

export default Banner