import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter,
    Routes
} from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Stuff from './Stuff';

class Main extends Component {
    render() {
        return(
            // do tego miejsca zawsze będzie się odwoływać "/" czyli strona główna
            <HashRouter>
                <div>
                    <h1>Prosta aplikacja jednostronowa</h1>
                    <ul className='header'>
                        {/* Tutaj jako właściowść "to" określamy adres URL */}
                        <li><NavLink exact to='/'>Strona główna</NavLink></li>
                        <li><NavLink to='/stuff'>O nas</NavLink></li>
                        <li><NavLink to='/contact'>Kontakt</NavLink></li>
                    </ul>
                    <div className='content'>
                        <Routes>
                            {/* A tutaj przypisujemy opszczególnym adresom ich komponenty */}
                            {/* exact path określa dokładnie tą lokalizację 
                            (kiedyś w /stuff pokazywał komponent dla Home i Stuff) */}
                            <Route exact path='/' Component={Home}/>
                            <Route path='/stuff' Component={Stuff}/>
                            <Route path='/contact' Component={Contact}/>
                            {/* jeśli odnośnik Route jest aktualnie otwarty zostaje mu przypisana klasa active,
                             dzięki czemu wiadomo co jest aktualnie wyświetlane  */}                            
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;