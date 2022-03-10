import React, { Component } from 'react'

class PersonCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    birthday = () => {
        this.setState({
            ...this.state,
            age : this.state.age + 1
        });
    }
    
    render() {
        // const {firstname, lastname, age, hairColor} = this.props;
        return (
            <>
                <h3>{this.state.lastname}, {this.state.firstName}</h3>
                <div>
                    <p>
                        Age: {this.state.age}
                    </p>
                    <p>
                        Hair Color: {this.state.hairColor}
                    </p>
                    <button onClick={() => this.birthday()}>Birthday Button for {this.state.firstName} {this.state.lastname}</button>
                </div>
            </>
        )
    }
}


export default PersonCard