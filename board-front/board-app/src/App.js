import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from './components/FooterComponent';
import InsBoardComponent from './components/InsBoardComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListBoardComponent />} />
            <Route path='/board' element={<ListBoardComponent />} />
            <Route path='/insBoard' element={<InsBoardComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
