import './App.css';
import Nav from './Components/Nav/Nav'
import routes from './routes'
import { withRouter } from 'react-router-dom'


function App(props) {
  const { pathname } = props.location
  return (
    <div className="App">
      {pathname !== '/' ? <Nav /> : null}
      {routes}
    </div>
  );
}

export default withRouter(App);
