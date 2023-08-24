import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { StockOverviewPage } from './Pages/StockOverviewPage';
import {StockDetailPage} from './Pages/StockDetailPage'
import './App.css';



function App() {
  
  return (

    <main>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StockOverviewPage/>}/> 
        <Route path="/detail/:symbol" element={<StockDetailPage/>}/> 
      </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
