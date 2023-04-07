import Image from 'next/image'
import style from '../../css/main.module.css'
// import styled from 'styled-components'
import HomeBanner from '../../assets/home-banner.png'
import AboutBanner from '../../assets/about-banner.png'
// useRouter from next/router ? https://nextjs.org/docs/api-reference/next/router


// const BannerContainer = styled.div`
//     width: 100%;
//     height: 223px;
//     position: relative;
//     text-align: center;
//     color: white;
// `

function Banner({ page = 'home' }) {
    const bannerType = () => {
        if (page === 'home') {
            return HomeBanner
        } else {
            return AboutBanner
        }
    }

    return (
        <div className={style.banner_container}>
            <Image src={bannerType()} className={style.banner_image} alt='Image bannière' />
            <div className={style.banner_text}>
                <p>Chez vous, partout et ailleurs</p>
            </div>
        </div>

        // <BannerContainer>
        //     <BannerImage src={getPage() === 'home' ? HomeBanner : AboutBanner} alt='Image bannière' />
        //     <BannerText>Chez vous, partout et ailleurs</BannerText>
        // </BannerContainer>
    )
}

export default Banner