import { Reviews } from '../components';
import fallbackImg from '../assets/fallback-poster.jpg';
import './card.css';
export default function Card({ ale }) {
	const onImageErrorHandler = fallbackImg => e => (e.target.src = fallbackImg);

	return (
		<div className="card">
			<div className="card__image">
				<img
					className="card__image--box"
					src={ale.image}
					onError={onImageErrorHandler(fallbackImg)}
				/>
			</div>
			<div className="card__content">
				<h6>{ale.name}</h6>
				<span>{ale.price}</span>
				<Reviews
					rating={ale.rating.average.toFixed(1)}
					totalReviews={ale.rating.reviews}
				/>
			</div>
		</div>
	);
}
