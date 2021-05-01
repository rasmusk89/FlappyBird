import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />

                <div className="container">
                    <main role="main" className="pb-3">
                        Hello
                    </main>
                </div>

            <Footer />
        </>
    );
}

export default App;
