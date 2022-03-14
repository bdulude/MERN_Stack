import React, {useState} from "react";

const Input = (props) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: ""
    });

    const handleFirstName = (e) => {
        setState({
            ...state,
            firstName: e.target.value
        });
    }
    const handleLastName = (e) => {
        setState({
            ...state,
            lastName: e.target.value
        });
    }
    const handleEmail = (e) => {
        setState({
            ...state,
            email: e.target.value
        });
    }
    const handlePassword = (e) => {
        setState({
            ...state,
            password: e.target.value
        });
    }
    const handleConfirm = (e) => {
        setState({
            ...state,
            confirm: e.target.value
        });
    }

    return (
        <div>
            <form>
                <label htmlFor="firstName">First Name: </label>
                <input onChange={ (e) => handleFirstName(e)} type="text" name="firstName" />
                <br />
                <label htmlFor="lastName">Last Name: </label>
                <input onChange={ (e) => handleLastName(e)} type="text" name="lastName" />
                <br />
                <label htmlFor="email">Email: </label>
                <input onChange={ (e) => handleEmail(e)} type="text" name="email" />
                <br />
                <label htmlFor="password">Password: </label>
                <input onChange={ (e) => handlePassword(e)} type="text" name="password" />
                <br />
                <label htmlFor="confirm">Confirm Password: </label>
                <input onChange={ (e) => handleConfirm(e)} type="text" name="confirm" />
            </form>
            <div>
                <br />
                First Name: {state.firstName}
                <br />
                Last Name: {state.lastName}
                <br />
                Email: {state.email}
                <br />
                Password: {state.password}
                <br />
                Confirm: {state.confirm}
            </div>
        </div>
    );
};

export default Input;
