import { React, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import ViewCart from './Components/ViewCart';
import Login from './Components/Login';
import ViewItem from './Components/ViewItem';

function App() {
  let [counter, setcounter] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", forceRender);
    return () => {
      window.removeEventListener("resize");
    }
  }, [])

  const forceRender = () => {
    setcounter(counter => counter + 1);
  }

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/allItems' component={Home} />
        <Route exact path='/allItems/:itemId' component={ViewItem} />
        <Route exact path='/checkout' component={ViewCart} />
      </Switch>
    </div>
  );
}

export default App;
