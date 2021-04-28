import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Groups from './views/Groups';
import Home from './views/Home';

export interface INameProps {
    name: string;
    updateNameCallback: (name: string) => void;
}

const SimpleRouter = (props: INameProps): JSX.Element => {
    const route = window.location.pathname;
    if (route === '/Groups') {
        return <Groups name="Fixed initial" updateNameCallback={props.updateNameCallback} />
    }
    return <Home />
}

const App = () => {

    const [name, updateName] = useState("Initial name!")

    const updateNameCallback = (name: string): void => {
        updateName(name)
    }

    return (
        <>
            <Header name={name} />

            <div className="container">
                <main role="main" className="pb-3">
                    <SimpleRouter name={name} updateNameCallback={updateNameCallback}/>
                </main>
            </div>

            <Footer />
        </>
    )
};

export default App;
