import { React, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';


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
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
