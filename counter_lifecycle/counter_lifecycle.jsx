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

        console.log("konstruktor: domyślny stan!")

        this.state = {
            count: 0
        };

        this.increase = this.increase.bind(this);
    }



    increase(e) {
        this.setState({
            count: this.state.count + 1
        });
    }

    componentWillUpdate(newProps, newState) {
        console.log("componentWillUpdate(): komponent zostanie zaktualizowany!");
    }

    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate(): komponent zaktualizowany!");
    }

    componentWillMount() {
        console.log("componentWillMount(): komponent zostanie zamontowany!");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount(): komponent zostanie usunięty z modelu DOM!");
    }

    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate(): czy komponent trzeba zatualizować?");
        if(newState.count < 5) {
            console.log("shouldComponentUpdate(): komponent trzeba zatualizować!");
            return true;
        } else {
            ReactDOM.unmountComponentAtNode(destination);
            console.log("shouldComponentUpdate: komponent nie trzeba aktualizować!");
            return false;
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps(): komponent uzyska nowe właściwości!");
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