import Link from 'next/link'
import style from '../../css/main.module.css'

function Card({ id, title, cover }) {
	return (
		<li key={id} className={style.card_container}>
			<Link href={{
              pathname: '/dwelling/[dwelling]',
              query: { dwelling: id },
            }}>
				<div className={style.card_divImg}>
					<img src={cover} className={style.card_img} alt={`Image de ${title}`} />
				</div>
				<div className={style.card_divText}>
					<p className={style.card_text}>{title}</p>
				</div>
			</Link>
		</li>
	)
};

export default Card;