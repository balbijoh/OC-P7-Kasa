import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'

import { useFetch } from '../../utils/hooks'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'
import Error from '../../pages/404'

import style from '../../css/main.module.css'

const fontMontserrat = Montserrat({ subsets: ['latin'] })

function Dwelling() {
    const router = useRouter()
    const queryParams = router.query
    const { data, isLoading, error } = useFetch(`../../datas/dwellings.json`)

    // Restitue le logement souhaité selon le paramètre renseigné dans l'URL
    const dwelling = () => {
        return data.find(d => d.id === queryParams.dwelling)
    }

    if (error) {
		return (
            <>
                <style jsx global>{`
                    html {
                        font-family: ${fontMontserrat.style.fontFamily};
                        min-width: 330px;
                    }
                    body {
                        margin: 0;
                        min-height: 100vh;
                    }
                    main {
                        padding: 0 100px;
                    }          
                    a {
                        text-decoration: none;
                    }
                    ul {
                        list-style: none;
                    }
                    `}
                </style>
                <Header />
                <main>
                    <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
                </main>
                <Footer />
            </>
        )
    }

    if (!isLoading) {
        // Redirige vers la page 404 si le logement est introuvable
        if (!data.some(d => d.id === queryParams.dwelling)) {
            return <Error />
        }

        return (
            <>
            <style jsx global>{`
                html {
                    font-family: ${fontMontserrat.style.fontFamily};
                    min-width: 330px;
                }
                body {
                    margin: 0;
                    min-height: 100vh;
                }
                main {
                    padding: 0 100px;
                }          
                a {
                    text-decoration: none;
                }
                ul {
                    list-style: none;
                }
                `}
            </style>
    
            <Header />
                <main className={style.content_padding}>
                    {/**** Carrousel ****/}
                    <Carousel dwelling={dwelling()}/>
    
                    {/**** Bandeau-titre du logement ****/}
                    <div className={style.dwelling_headline}>
                        <div className={style.dwelling_headlineInfos}>
                            <div>
                                <h1 className={style.dwelling_title}>{dwelling().title}</h1>
                                <p className={style.dwelling_location}>{dwelling().location}</p>
                            </div>
                            <div className={style.dwelling_tags}>
                                {dwelling().tags.map((tag, index) => {
                                    return (
                                        <div className={style.dwelling_tagContainer} key={index} title={tag}>
                                            <p className={style.dwelling_tagText}>{tag}</p>
                                        </div>
                                    )                            
                                })}
                            </div>
                        </div>
                        <div className={style.dwelling_headlineHost}>
                            <div className={style.dwelling_hostIdentity}>
                                <div>
                                    <p className={style.dwelling_hostName}>{dwelling().host.name.split(' ')[0]}</p>
                                    <p className={style.dwelling_hostName}>{dwelling().host.name.split(' ')[1]}</p>
                                </div>
                                <img className={style.dwelling_hostPicture}
                                        src={dwelling().host.picture}
                                        alt="Photo de l'hôte" />
                            </div>
                            <div className={style.dwelling_ratings}>
                                <Rating rating={dwelling().rating} />
                            </div>
                        </div>
                    </div>
    
                    {/**** Informations du logement ****/}
                    <div className={style.dwelling_informations}>
                        <div className={style.collapse_container}>
                            <Collapse title='Description' content={<p className={style.dwelling_equipmentText}>{dwelling().description}</p>} />
                        </div>
                        <div className={style.collapse_container}>
                            <Collapse title='Equipements' content={dwelling().equipments.map((equipment, index) => {
                                return (
                                    <p key={index} className={style.dwelling_equipmentText}>{equipment}</p>
                                )
                            })} />
                        </div>
                    </div>
                </main>
            <Footer />
            </>
        )
    }
}

export default Dwelling