import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StuList from './StuList';
import Create from './Create';
import Edit from './Edit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<StuList />}></Route>
          <Route path='/sms/Create' element={<Create />}></Route>
          <Route path='/sms/Edit/:id' element={<Edit />}></Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
