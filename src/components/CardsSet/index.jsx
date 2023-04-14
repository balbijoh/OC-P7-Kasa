import dwellingsList from '../../datas/dwellings.json'
import Card from '../Card'
import style from '../../css/main.module.css'

function CardsSet() {
	// console.log(dwellingsList)

	return (
		<section className={style.cardsSet_section}>
			<ul className={style.cardsSet_list}>
				{dwellingsList.map(({ id, title, cover }) => (
					<Card key={id}
						id={id}
						title={title}
						cover={cover}
					/>
				))}
			</ul>
        </section>
	)
}

export default CardsSet