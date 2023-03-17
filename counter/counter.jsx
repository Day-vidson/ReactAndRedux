// React event system

class Counter extends React.Component {
    render() {
        var textStyle = {
            fontSize: 72,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold"
        };

        return(
            <div style={textStyle}>
                {this.props.display}
            </div>
        )
    }
}

class CounterParent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };

        // dzięki tej linijce funkcja increase zawsze będzie się odwoływać do aktualnej wartości state.count 
        // ta linijka powiązuje oryginalny obiekt DOM'u z komponentem react
        this.increase = this.increase.bind(this);
    }

    increase(e) {
        var currentCount = this.state.count;
        
        // jeśli klawisz shift jest wciśnięty i kliniemy myszką to zwiększamy liczbę like'ów o 10, jeśli tylko klikniemy myszką to o 1
        if(e.shiftKey) {
            currentCount += 10;
        } else {
            currentCount += 1;
        }

        this.setState({
            count: currentCount
        });
    }

    render() {
        var backgroundStyle = {
            padding: 50,
            backgroundColor: "#FFC53A",
            width: 250,
            height: 100,
            borderRadius: 10,
            textAlign: "center"
        };
        
        var buttonStyle = {
            fontSize: "1em",
            width: 30,
            height: 30,
            fontFamily: "sans-serif",
            color: "#333",
            fontWeight: "bold",
            lineHeight: "3px"
        };

        return(
            <div style={backgroundStyle}>
                <Counter display={this.state.count} />
                <button onClick={this.increase} style={buttonStyle}>+</button>
            </div>
        );

    }
}

ReactDOM.render(
    <div>
        <CounterParent />
    </div>,
    document.querySelector("#container")
);