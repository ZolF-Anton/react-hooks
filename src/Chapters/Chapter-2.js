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
const DEFAULT_AGE = 21;

export function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(DEFAULT_AGE);

    const clear = () => {
        setFirstName('');
        setLastName('');
        setAge(DEFAULT_AGE);
    };

    return (
        <>
            <form className='chapter2' action=''>
                <FormField
                    name='firstName'
                    label='First Name'
                    //type='text'
                    value={firstName}
                    onChange={(newValue) => setFirstName(newValue)}
                />
                <FormField
                    name='lastName'
                    label='Last Name'
                    //type='text'
                    value={lastName}
                    onChange={(newValue) => setLastName(newValue)}
                />
                <FormField
                    name='age'
                    label='Age'
                    type='number'
                    value={age}
                    onChange={(newValue) => setAge(newValue ? parseInt(newValue) : 0)}
                />
            </form>
            <div>
                <button onClick={clear}>CLEAR!!!</button>
            </div>
            <div>
                firstName: {firstName} <br />
                lastName: {lastName} <br />
                age: {age}
            </div>
        </>
    );
}
