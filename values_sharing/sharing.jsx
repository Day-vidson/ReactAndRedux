class Display extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.color}</p>
                <p>{this.props.num}</p>
                <p>{this.props.size}</p>
            </div>
        )
    }
}

class Label extends React.Component {
    render() {
        return (
            <Display {...this.props} />
        )
    }
}

class Shirt extends React.Component {
    render() {
        return (
            <div>
                <Label {...this.props}></Label>
            </div>
        )
    }
}





ReactDOM.render(
    <div>
        <Shirt color="blue"
                 num="3,14"
                 size="medium"/>
    </div>,
    document.querySelector("#container")
)
