import React, { Component } from 'react'
import '../App.css';

class PersonCard extends Component {
    render() {
        const {firstname, lastname, age, hairColor} = this.props;
        return (
            <>
                <h3>{firstname} {lastname}</h3>
                <div>
                    <p>
                        Age: {age}
                    </p>
                    <p>
                        Hair Color: {hairColor}
                    </p>
                </div>
            </>
        )
    }

}

export default PersonCard

// import React, { Component } from 'react';
    
    
// class SomeClassComponent extends Component {
//     render() {
//         return <div>This is our first class component.</div>;
//     }
// }
    
// export default SomeClassComponent;