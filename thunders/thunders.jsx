class LightningCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            strikes: 0
        };

        this.timerTick = this.timerTick.bind(this);
    }

    timerTick() {
        this.setState({
            strikes: this.state.strikes + 100
        })
    }

    componentDidMount() {
        setInterval(this.timerTick, 1000);
    }

    render() {
        var counterStyle = {
            color: "#66FFFF",
            fontSize: 50
        }

        var count = this.state.strikes.toLocaleString();

        return (
            <h1>{this.state.strikes}</h1>
        )
    };
}

class LightningCounterDisplay extends React.Component {
    render() {
        var commonStyle = {
            margin: 0,
            padding: 0
        }

        var divStyle = {
            width: 250,
            textAlign: "center",
            backgroundColor: "black",
            padding: 40,
            fontFamily: "sans-serif",
            color: "#999",
            borderRadius: 10
        };

        var textStyles = {
            emphasis: {
                fontSize: 38,
                ...commonStyle
            },
            smallEmphasis: {
                ...commonStyle
            },
            small: {
                fontSize: 17,
                opacity: 0.5,
                ...commonStyle
            }
        }

        return (
            <div style={divStyle}>
                <LightningCounter></LightningCounter>
                <h2 style={textStyles.smallEmphasis}>Liczba uderzeń piorunów</h2>
                <h2 style={textStyles.emphasis}>na całym świecie</h2>
                <p style={textStyles.small}>(od czasu otwarcia strony)</p>
            </div>
        )
    }
}

ReactDOM.render(
    <LightningCounterDisplay></LightningCounterDisplay>,
    document.querySelector("#container")
)
