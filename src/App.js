import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Reviews from './Components/Reviews/Reviews';
import Home from './Components/Home/Home';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';
import Dashbroad from './Components/Dashbroad/Dashbroad'


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbroad' element={<Dashbroad></Dashbroad>}></Route>
        <Route path='//blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
