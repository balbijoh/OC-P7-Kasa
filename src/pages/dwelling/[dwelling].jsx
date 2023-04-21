import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Carousel from '../../components/Carousel'
import style from '../../css/main.module.css'
import { useFetch } from '../../utils/hooks'
import { useRouter } from 'next/router'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
})

function Dwelling() {
    const router = useRouter()
    const queryParams = router.query
    console.log("queryParams : ", queryParams)
    const { data, isLoading, error } = useFetch(
        `../../datas/dwellings.json`
    )
    const dwelling = () => {
        return data.find(d => d.id === queryParams.dwelling);
    }

    if (error) {
		return <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
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
        {isLoading ? (
			<></>
		) : (
            <main className={style.content_padding}>
                <Carousel dwelling={dwelling()}/>
            </main>
        )}
        <Footer />
        </>
    )
}

export default Dwelling