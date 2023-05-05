import { useState } from "react"
import Image from 'next/image'
import ArrowBack from '../../assets/icon_arrow-back.svg'
import ArrowForward from '../../assets/icon_arrow-forward.svg'
import style from '../../css/main.module.css'

function Carousel({dwelling}) {
    const [dwellingPicture, setDwellingPicture] = useState(0)

    // Gère le click sur la flèche "Image suivante"
    function Dwelling_ClickForward() {
        if (dwellingPicture < dwelling.pictures.length-1) {
            setDwellingPicture(dwellingPicture+1)
            return
        }
        if (dwellingPicture == dwelling.pictures.length-1) {
            setDwellingPicture(0)
        }
    }

    // Gère le click sur la flèche "Image précédente"
    function Dwelling_ClickPrevious() {
        if (dwellingPicture > 0) {
            setDwellingPicture(dwellingPicture-1)
            return
        }
        if (dwellingPicture == 0) {
            setDwellingPicture(dwelling.pictures.length-1)
        }
    }

    return (
        <div className={style.carousel_container}>
            <img src={dwelling.pictures[dwellingPicture]} alt='Photo du logement' className={style.carousel_image} />
            <div className={dwelling.pictures.length == 1 ? style.carousel_arrowsHidden : style.carousel_arrowsContainer}>
                <Image className={style.carousel_arrow}
                        src={ArrowBack}
                        alt='Image précédente'
                        onClick={() => Dwelling_ClickPrevious()} />
                <Image className={style.carousel_arrow}
                        src={ArrowForward}
                        alt='Image suivante'
                        onClick={() => Dwelling_ClickForward()}  />
            </div>
        </div>
    )
}

export default Carousel