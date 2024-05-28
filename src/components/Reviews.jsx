import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './reviews.css';

export default function Reviews({ rating, totalReviews }) {
	const ratingStars = Array.from({ length: 5 }, (_, i) => {
		return (
			<span key={i}>
				{rating >= i + 1 ? (
					<FaStar className="icon " />
				) : rating >= i + 0.1 ? (
					<FaStarHalfAlt className="icon" />
				) : (
					<FaRegStar className="icon" />
				)}
			</span>
		);
	});

	return (
		<div className="stars">
			<span>({rating})</span>
			<div>{ratingStars}</div>
			<span>({totalReviews})</span>
		</div>
	);
}
