import {Switch, Route, BrowserRouter} from 'react-router-dom';
import NavBar from './Components/NavBar';
import PhrasalContainer from './Components/PhrasalContainer';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar />
        <Switch> 
          <Route path="/PhrasalContainer" > 
            <PhrasalContainer />
          </Route>
          <Route exact path="/" >   
          </Route>
          
        </Switch> 
      </BrowserRouter>    
</div>
  );
}

export default App;
