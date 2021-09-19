import { useState } from 'react';
import '../App.css';

function FormField(props) {
    const { name, label, value, onChange, type = 'text' } = props;
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    );
}

const initialState = {
    firstName: '',
    lastName: '',
    age: 21,
};

export function Form() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [age, setAge] = useState(DEFAULT_AGE);
    const [state, setState] = useState(initialState);

    const clear = () => {
        setState(initialState);
    };

    return (
        <>
            <form className='chapter2' action=''>
                <FormField
                    name='firstName'
                    label='First Name'
                    //type='text'
                    value={state.firstName}
                    onChange={(newValue) =>
                        setState((prevState) => {
                            return {
                                ...prevState,
                                firstName: newValue,
                            };
                        })
                    }
                />
                <FormField
                    name='lastName'
                    label='Last Name'
                    //type='text'
                    value={state.lastName}
                    onChange={(newValue) =>
                        setState((prevState) => {
                            return {
                                ...prevState,
                                lastName: newValue,
                            };
                        })
                    }
                />
                <FormField
                    name='age'
                    label='Age'
                    type='number'
                    value={state.age}
                    onChange={(newValue) =>
                        setState((prevState) => {
                            return {
                                ...prevState,
                                age: newValue ? parseInt(newValue) : 0,
                            };
                        })
                    }
                />
            </form>
            <div>
                <button onClick={clear}>CLEAR!!!</button>
            </div>
            <div>
                firstName: {state.firstName} <br />
                lastName: {state.lastName} <br />
                age: {state.age}
            </div>
        </>
    );
}
