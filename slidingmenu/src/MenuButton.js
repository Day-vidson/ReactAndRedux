import React, { PureComponent } from "react";
import "./MenuButton.css";


// klasa PureComponent sama sprawdza czy zmienił się stan lub właść. obiektu i decyduje czy trzeba wywołać metodę render() czy nie.
// Pozwala to zoptymalizować kod i uniknąć niepotrzebnych wykonań metody render()

// czasami jednak lepiej jest stosować zwykły Component i napisać własny algorytm sprawdzający różnice,
//  ponieważ nawet płytkie sprawdzanie przez PureComponent zajmuje trochę czasu 
class MenuButton extends PureComponent {
    // ! metoda shouldComponentUpdate() wykonuje się bezpośrednio przed metodą render()  !

    // Aby niepotrzebnie nie renderować MenuButton kiedy komp. Menu wywoła swój render
    // sprawdzamy czy zmieniła się wartość właściwości "handleMouseDown" (jest to jedyna wł. el. MenuButton)
    // shouldComponentUpdate(nextProps, nextState) {
    //     // jesli nie, to nie wywołujemy metody render komp. MenuButton 
    //     if (nextProps.handleMouseDown === this.props.handleMouseDown) {
    //         return false;
    //     } 

    //     // jesli tak, to wywołujemy metodę render komp. MenuButton 
    //     else{
    //         return true;
    //     }
    // }

    render() {
        console.log("Wyświetlenie komponentu MenuButton")
        return(
            <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
        );
    }
}

export default MenuButton;