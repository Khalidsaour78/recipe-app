import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import RecipeForm from "./components/Recipes/RecipeForm";
import RecipeList from "./components/Recipes/RecipeList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/add-recipe" component={RecipeForm} />
            <Route exact path="/recipes" component={RecipeList} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
