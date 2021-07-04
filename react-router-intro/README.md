# Intro to React-Router

-------------------------------

## Test Project 1:
![Intro_React-Router](./router_intro_1.png)

#### A super simple example, made like this:

```javascript
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <div>
      <MainHeader/>
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
```

-------------------------------

## Test Project 2:

-------------------------------
![Intro_React-Router](./router_intro_2.png)
![Intro_React-Router](./router_intro_3.png)
![Intro_React-Router](./router_intro_4.png)

-------------------------------

This one is a bit more detailed and I use more **react-router** features such as:

* Route
* Switch
* Redirect
* Link / Navlink
* useParams

-------------------------------