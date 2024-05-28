import { Search, Main } from './components';
import './app.css';
import { AleProvider } from './context/AleContext';

export default function App() {
	return (
		<AleProvider>
			<section className="app">
				<h1>Fresh Pour Ale</h1>
				<Search />
				<Main />
			</section>
		</AleProvider>
	);
}
