import React, {useState} from "react";

const Input = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const [errorFirstName, setErrorFirstName] = useState("");
    const [errorLastName, setErrorLastName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorPassword, setErrorPassword] = useState("");

    let newUser = {};
    

    const createUser = (e) => {
        e.preventDefault();
        newUser = {firstName, lastName, email, password, cPassword};
        setSubmitted(true);
        console.log(newUser);
    };

    const handleFirstName = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        setFirstName(e.target.value);
        if (e.target.value.length < 1){
            setErrorFirstName("First name is required.")
        }
        else if (e.target.value.length < 2){
            setErrorFirstName("First name must be longer than 2 characters.")
        }
        else {
            setErrorFirstName("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 1){
            setErrorLastName("Last name is required.")
        }
        else if (e.target.value.length < 2){
            setErrorLastName("Last name must be longer than 2 characters.")
        }
        else {
            setErrorLastName("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1){
            setErrorEmail("Email is required.")
        }
        else if (e.target.value.length < 5){
            setErrorEmail("Email must be longer than 5 characters.")
        }
        else {
            setErrorEmail("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 1){
            setErrorPassword("Password is required.")
        }
        else if (e.target.value.length < 8){
            setErrorPassword("Password must at least 8 characters.")
        }
        else if (e.target.value !== cPassword) {
            setErrorPassword("Passwords do not match.")
        }
        else {
            setErrorPassword("");
        }
    }

    const handleCPassword = (e) => {
        setCPassword(e.target.value);
        if (e.target.value !== password) {
            setErrorPassword("Passwords do not match.")
        }
        else {
            setErrorPassword("");
        }
    }


    return (
        <div>
            {
                submitted ?
                <h3>Thank you for submitting {firstName}</h3> :
                <h3>Submit your information</h3>
            }
            <form onSubmit={createUser}>
                { errorFirstName ? <p>{errorFirstName}</p> : '' }
                <label htmlFor="firstName">First Name: </label>
                <input
                    onChange={handleFirstName}
                    type="text"
                    name="firstName"
                    value={firstName}
                />
                <br />
                { errorLastName ? <p>{errorLastName}</p> : '' }
                <label htmlFor="lastName">Last Name: </label>
                <input
                    onChange={handleLastName}
                    type="text"
                    name="lastName"
                    value={lastName}
                    />
                <br />
                { errorEmail ? <p>{errorEmail}</p> : '' }
                <label htmlFor="email">Email: </label>
                <input
                    onChange={handleEmail}
                    type="text"
                    name="email"
                    value={email}
                    />
                <br />
                { errorPassword ? <p>{errorPassword}</p> : '' }
                <label htmlFor="password">Password: </label>
                <input
                    onChange={handlePassword}
                    type="text"
                    name="password"
                    value={password}
                />
                <br />
                <label htmlFor="cPassword">Confirm Password: </label>
                <input
                    onChange={handleCPassword}
                    type="text"
                    name="cPassword"
                    value={cPassword}
                />
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Input;
