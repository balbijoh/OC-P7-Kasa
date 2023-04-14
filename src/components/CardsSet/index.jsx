import { useFetch } from '../../utils/hooks'
import Card from '../Card'
import style from '../../css/main.module.css'

function CardsSet() {
	const { data, isLoading, error } = useFetch(`./datas/dwellings.json`)

	if (error) {
		return <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
	}

	return (
		<section className={style.cardsSet_section}>
			{isLoading ? (
				<></>
			) : (
				<ul className={style.cardsSet_list}>
					{data.map(({ id, title, cover }) => (
						<Card key={id}
							id={id}
							title={title}
							cover={cover}
						/>
					))}
				</ul>
			)}
        </section>
	)
}

export default CardsSet