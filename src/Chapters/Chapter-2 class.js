import React from 'react';
import '../App.css';

function FormField({ name, label, value, onChange, type = 'text' }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </>
    );
}

const initialState = {
    firstName: '',
    lastName: '',
    age: '',
};

export class Chapter2Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }
    clearState = () => {
        this.setState(initialState);
    };
    render() {
        return (
            <>
                <form className='chapter2' action=''>
                    <FormField
                        name='firstName'
                        label='First Name'
                        //type='text'
                        value={this.state.firstName}
                        onChange={(firstName) => this.setFirstName(firstName)}
                    />
                    <FormField
                        name='lastName'
                        label='Last Name'
                        //type='text'
                        value={this.state.lastName}
                        onChange={(lastName) => this.setLastName(lastName)}
                    />
                    <FormField
                        name='age'
                        label='Age'
                        type='number'
                        value={this.state.age}
                        onChange={(ageString) => {
                            this.setAge(ageString ? parseInt(ageString) : '');
                        }}
                    />
                </form>
                <div>
                    <button onClick={this.clear}>CLEAR!!!</button>
                </div>
                <div>
                    firstName: {this.state.firstName} <br />
                    lastName: {this.state.lastName} <br />
                    age: {this.state.age}
                </div>
            </>
        );
    }
}
