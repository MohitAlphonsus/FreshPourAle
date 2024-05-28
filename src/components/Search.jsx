import { useAle } from '../context/AleContext';
import './search.css';

export default function Search() {
	const { search, setSearch } = useAle();
	function searchHandler(e) {
		setSearch(e.target.value);
		console.log(search);
	}
	
	return (
		<header className="form">
			<input placeholder="search..." value={search} onChange={searchHandler} />
			<button>Search</button>
		</header>
	);
}
