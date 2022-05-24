var destination = document.querySelector("#container")

class Letter extends React.Component {
    render() {
        // w React zmienia się nazewnictwo stylów CSS:
        //  jednowyrazowe pozostają niezmienne (color: red; = color: red;)
        //  dwywyrazowe z myślnikiem   ---->   (background-color: red; = backgroundColor: red;)
        var letterStyle = {
            padding: 10,
            margin: 10,
            backgroundColor: this.props.bgcolor,
            color: "#333",
            display: "inline-block",
            fontFamily: "monospace",
            fontSize: 32,
            textAlign: "center"
        };

        return(
            <div style={letterStyle}>
                {this.props.children}
            </div>
        )
    };
}

ReactDOM.render(
    <div>
        <Letter bgcolor="#58B3FF">A</Letter>
        <Letter bgcolor="#FF605F">E</Letter>
        <Letter bgcolor="#FFD52E">I</Letter>
        <Letter bgcolor="#49DD8E">O</Letter>
        <Letter bgcolor="#AE99FF">U</Letter>
    </div>,
    destination
)