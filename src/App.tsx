import React from 'react';
import './App.css';
import './assets/img/icons/fonts/iconsfont.css';

import {Header} from "./components/header/header";
import {Main} from "./components/main/main";
import {Footer} from './components/footer/footer';

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>

    );
}

export default App;
