import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import CarDetails from './pages/CarDetails/CarDetails.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CarDetails />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
