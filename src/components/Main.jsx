import { useAle } from '../context/AleContext';
import { Card } from '../components';

export default function Main() {
	const { filteredAleData } = useAle();

	return (
		<main className="main">
			{filteredAleData &&
				filteredAleData
					.filter((_, index) => index <= 16)
					.map(ale => <Card key={ale.id} ale={ale} />)}
		</main>
	);
}
