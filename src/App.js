import {Routes, Route, Link} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Link to={'/'}>홈으로 바로가기</Link>{''}
      <Link to={'/sub'}>서브로 바로가기</Link>

      <Routes>
        <Route path='/' element={<> 홈입니다 </>}></Route>
        <Route path='/sub' element={<> 서브입니다 </>}></Route>
      </Routes>
    </div>
  );
}

export default App;
