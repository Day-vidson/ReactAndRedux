class Square extends React.Component {
    render() {
        var squareStyle = {
            height: 150,
            backgroundColor: this.props.color
        }
        return (
            <div style={squareStyle}></div>
        )
    }
}

class Label extends React.Component {
    render() {
        var labelStyle = {
            fontFamily: "sans-serif",
            fontWeight: "bold",
            padding: 13,
            margin: 0
        }
        return (
            <p style={labelStyle}>{this.props.color}</p>
        )
    }
}

class Card extends React.Component {
    render() {
        var cardStyle = {
            height: 200,
            width: 150,
            padding: 0,
            backgroundColor: "#FFF",
            boxShadow: "0px 0px 5px #666"
        }
        return (
            <div style={cardStyle}>
                <Square color={this.props.color}></Square>
                <Label color={this.props.color}></Label>
            </div>
            
        )
    }
}

ReactDOM.render(
    <div>
        <Card color="#FF0000"/>
    </div>,
    document.querySelector("#container")
)
