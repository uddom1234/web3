import logo from './logo.svg';
import './App.css';
import RouteApp from './route';
import Browse from './page/Browse';
import { useSelector } from 'react-redux';


function App() {
  const active = useSelector(state => state.auth.active);
  console.log(active);
  return (
    <>
      { active && <Browse/>}  
      { !active &&<RouteApp/>}
    </>
  );
}

export default App;
