import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import ShareMovie from './components/ShareMovie';
import Home from './page/Home';

function App() {
	return (
		<>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/share" element={<ShareMovie />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</>
	);
}

export default App;
