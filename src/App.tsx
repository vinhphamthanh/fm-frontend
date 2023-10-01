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
import ShareMovie from './components/ShareMovie';

function App() {
  return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/share" element={<ShareMovie />} />
				</Routes>
			</Layout>
		</BrowserRouter>
  );
}

export default App;
