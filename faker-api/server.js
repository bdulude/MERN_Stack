const { faker } = require('@faker-js/faker');
const express = require('express');
const app = express();
const PORT = 8000;

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        };
    }
}


app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    let resObj = {
        user: new User(),
        company: new Company()
    }
    res.json(resObj);
});



const server = app.listen(PORT, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
