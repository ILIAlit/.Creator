import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import Layout from './components/App/Layout';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<AppRouter />
			</Layout>
		</BrowserRouter>
	);
}

export default App;
