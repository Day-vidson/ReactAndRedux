// definiujemy akcje, które następnie przekażemy do reduktora, aby wiedział co zrobić z danymi w magazynie
function addColor(value) {
    return {
        type: "ADD",
        color: value
    };
}

function removeColor(value) {
    return {
        type: "REMOVE",
        color: value    
    }
}

// tworzymy REDUKTOR, czyli funkcję która:
// 1. Daje dostep do oryginalnego stanu w magazynie
// 2. Pozwala sprawdzać aktualnie wykonywaną akcję
// 3. umożliwia zapisywanie nowego stanu w magazynie

// REDUKTOR NIE MOŻE:
// 1. modyfikować wartości argumentów
// 2. wykonywać dodatkowych operacji np korzystać z API
// 3. wywoływać złożonych funkcji, np. Date.now() lub Math.random() 

function favoriteColors(state, action) {
    // jeśli stan nie jest określony (np. przy pierwszym wywołaniu funkcji definiujemy go jako pustą tablicę)
    if (state === undefined) {
        state = ["niebieski"];
    }

    if (action.type === "ADD") {
        return state.concat(action.color);
    } else if (action.type === "REMOVE") {
        return state.filter(function(item) {
            return item !== action.color;
        })
    } else {
        return state;
    }
}

// tworzymy magazyn, reduktorem jest funkcja favoriteColors()
var Store = Redux.createStore(favoriteColors);

// po każdej zmianie w magazynie (Store.dispatch(action)) wywoływana jest metoda notifyMe,
Store.subscribe(notifyMe);
// notifyMe() wysyła powiadomienie przy każdej zmianie stanu magazynu
function notifyMe() {
    console.log(Store.getState());
}

// Store.dispatch(action) powoduje wysłanie akcji do reduktora 
Store.dispatch(addColor("niebieski"));
Store.dispatch(addColor("żółty"));
Store.dispatch(addColor("zielony"));
Store.dispatch(addColor("czerwony"));
Store.dispatch(addColor("szary"));
Store.dispatch(addColor("pomarańczowy"));
Store.dispatch(removeColor("szary"));

// Store.getState() pozwala oczytywac aktualny stan magazynu
console.log(Store.getState());