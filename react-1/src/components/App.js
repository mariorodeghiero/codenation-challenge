import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import RecipePage from './RecipePage'
import {slugify} from '../helpers'
import recipes from '../sample_data/recipes.json'
import {withRouter} from 'react-router-dom';


class App extends Component {


  render() {
    const result = Object.keys(recipes.results);
    const newRecipes = result.map((key, index) => {
      return recipes.results[key]
    })

    const routes = [
      {
        path: "/sandwiches",
        // component: Sandwiches
      }
    ];

    return (
      <Router>
        <div className="App">
          {/* TODO: Navbar precisa receber a string da URL */}
          {/* <Route path="/:id" component={Navbar}/> */}

          <div className="container mt-10">
            {/* TODO: Implementar rotas  */}
            <Route path="/:id" render={props => (<div><Navbar></Navbar><Home {...props} recipes={newRecipes} /></div>)}/>
          </div>
          {this.props.location.pathname}
        </div>
      </Router>
    )
  }
}
export default withRouter(App);
