
import './App.css';
import './style.css';
import Header from './Header';
import Content from './Content';
import Content2 from './Content2';
import { UserContextProvider } from './context/UserContextProvider';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

 export function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Content/>}/>
          <Route path='/payment' element={<Content2/>}/>
        </Routes>
        
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}


