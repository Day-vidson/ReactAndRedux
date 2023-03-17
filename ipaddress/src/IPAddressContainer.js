import React, { Component } from "react";
import IPAddress from "./IPAddress";

var xhr;

class IPAddressContainer extends Component {
    constructor(props) {
        // dzięki tej linijce inicjalizujemy propsy i możemy używać this już w construct'orze :) 
        super(props);
        this.state = {
            ip_address: "..."
        };

        this.processRequest = this.processRequest.bind(this);
    }

    

    componentDidMount() {
        xhr = new XMLHttpRequest();
        xhr.open("GET", "https://ipinfo.io/json", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }  
    
    processRequest() {

        // if (xhr.readyState === 4 && xhr.status === 200) {
        
        // api nie dziala (blad), przez co nie zwraca nic
        // var response = JSON.parse(xhr.ip);
        this.setState({
            ip_address: "my_example_ip_address"
        });
        // }
    }

    render() {
        return(
            <IPAddress ip={this.state.ip_address}/>
        );
    }
}




export default IPAddressContainer;