import Sidebar from './components/sidebar/Sidebar';
import Home from './components/Home';
import Analytics from './components/Analytics';
import Dashboard from './components/Dashboard';
import Friends from './components/Friends';
import Images from './components/Images';
import Mailbox from './components/Mailbox';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <Sidebar/>
      </div>
      <div className='router'>
        <BrowserRouter>
          <Routes>
            <Route path='/home' exact element={<Home/>}/>
            <Route path='/analytics' exact element={<Analytics/>}/>
            <Route path='/dashboard' exact element={<Dashboard/>}/>
            <Route path='/friends' exact element={<Friends/>}/>
            <Route path='/images' exact element={<Images/>}/>
            <Route path='/mailbox' exact element={<Mailbox/>}/>
          </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
