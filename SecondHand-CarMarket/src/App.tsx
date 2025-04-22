// App.tsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SelectedCar from './pages/SelectedCar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/selected-car" element={<SelectedCar />} />
    </Routes>
  );
}

export default App;
