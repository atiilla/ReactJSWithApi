import React, { Component } from 'react';
import './App.css'
import faker from 'faker';
class App_Faker extends Component {
    render() {
        return (
            <div className="card">

                <img
                    src={faker
                        .image
                        .avatar()}/>
                <h1>{
                        faker
                            .name
                            .findName()
                    }</h1>
                <p className="title">{
                        faker
                            .name
                            .jobTitle()
                    }</p>
                <p className="title">{faker.address.city},{
                        faker
                            .address
                            .country()
                    }</p>
                <a href="#">
                    <i className="fa fa-phone"></i>phone: {
                        faker
                            .phone
                            .phoneNumber()
                    }</a>
                <button>VIEW MY CARD</button>
                {
                    this
                        .state
                        .users
                        .map((n) => {
                            console.log(n.name)
                        })
                }

            </div>
        );
    }
}

export default App_Faker;


