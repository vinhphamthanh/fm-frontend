import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
	BrowserRouter,
	Link,
	Route,
	Routes,
} from 'react-router-dom';
import Home from './page/Home';
import Layout from './components/Layout';

function App() {
  return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/share-your-movie" element={<div>Share movie</div>} />
				</Routes>
			</Layout>
		</BrowserRouter>
  );
}

export default App;
