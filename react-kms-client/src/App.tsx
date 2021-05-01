import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import HomeIndex from './containers/home/HomeIndex';
import MealTypeIndex from './containers/meal-types/MealTypeIndex';
import MealTypeCreate from './containers/meal-types/MealTypeCreate';
import MealTypeEdit from './containers/meal-types/MealTypeEdit';
import MealTypeDetails from './containers/meal-types/MealTypeDetails';
import MealTypeDelete from './containers/meal-types/MealTypeDelete';
import Login from './containers/identity/Login';
import Page404 from './containers/Page404';

function App() {
    return (
        <>
            <Header />

            <div className="container">
                <main role="main" className="pb-3">
                    <Switch>
                        <Route exact path="/" component={HomeIndex} />
                        <Route path="/identity/login" component={Login} />

                        <Route path="/MealTypes/create" component={MealTypeCreate} />
                        <Route path="/MealTypes/edit/:id" component={MealTypeEdit} />
                        <Route path="/MealTypes/delete/:id" component={MealTypeDelete} />
                        <Route path="/MealTypes/:id" component={MealTypeDetails} />
                        <Route path="/MealTypes" component={MealTypeIndex} />

                        <Route component={Page404} />
                    </Switch>
                </main>
            </div>

            <Footer />
        </>
    );
}

export default App;
