import './App.css';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom'
import ListBoardComponent from "./components/ListBoardComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from './components/FooterComponent';
import InsBoardComponent from './components/InsBoardComponent';
import ListBoardTabulator from './components/ListBoardTabulator';
import BoardDetailComponent from './components/BoardDetailComponent';
import UdtBoardComponent from './components/UdtBoardComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        <div className='container'>
          <Routes>
            <Route path='/' element={<ListBoardTabulator />} />
            <Route path='/boardList' element={<ListBoardComponent />} />
            <Route path='/insBoard' element={<InsBoardComponent />} />
            <Route path='/board' element={<ListBoardTabulator />} />
            <Route path='/boardDetail' element={<BoardDetailComponent />} />
            <Route path='/udtBoard' element={<UdtBoardComponent />} />
          </Routes>
        </div>
        <div style={{ float: 'right', margin: '30px' }}>
          <FooterComponent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
