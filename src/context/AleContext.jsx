import { createContext, useContext, useState, useEffect } from 'react';

const AleContext = createContext();

function AleProvider({ children }) {
	const [aleData, setAleData] = useState([]);
	const [search, setSearch] = useState('');
	const [filteredAleData, setFilteredAleData] = useState(aleData);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://api.sampleapis.com/beers/ale');
			const data = await response.json();
			setAleData(data);
		};
		fetchData();
	}, []);

	useEffect(
		function () {
			const newFilteredAleData = aleData.filter(ale => {
				return ale.name.toLowerCase().includes(search.toLowerCase());
			});
			setFilteredAleData(newFilteredAleData);
		},
		[aleData, search],
	);

	return (
		<AleContext.Provider
			value={{ aleData, search, setSearch, filteredAleData }}
		>
			{children}
		</AleContext.Provider>
	);
}

function useAle() {
	const context = useContext(AleContext);
	if (context === undefined)
		throw new Error('useAle must be used within a AleProvider');
	return context;
}

export { AleProvider, useAle };
