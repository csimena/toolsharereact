import React, { useState, useEffect } from 'react';
import '../app/App.css';
import SignUpForm from './SignUpForm';
import SignUpPage from './SignUpPage';
import FeaturedListings from './FeaturedListings'

export default function Hero(props) {
    const { signupList, addUser } = props;

    // State variables
    const [isDuplicate, setIsDuplicate] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [id, setId] = useState(0);

    useEffect(() => {
        checkIfDuplicate(email);
    }, [email]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', email);
        if (isDuplicate) {
            console.log("duplicate found");
        }
        else { // Add contact info and clear data if the contact name is not a duplicate
            addUser(email, name, id, getTodayString());
            setEmail('');
            setName('');
            setId(id => id+1);
        }
        console.log(signupList);
    };

    // Using hooks, check for contact name in the contacts array variable in props
    const checkIfDuplicate = (id) => {
        setIsDuplicate(false);
        signupList.forEach((user) => {
            if (user.id === id) {
                setIsDuplicate(true);
            }
        });
    }

    return (
        <>
            <div className="App">
                <header className="App-header">
                    <div className="header-copy">
                        <h1 className="header-title">toolbelt</h1>
                        <h4>Build things in other people's garages. Borrow from their toolbelt? There's some sort of saying like
                            this
                        </h4>
                    </div>
                    <SignUpForm
                        signupList={signupList}
                        name={name}
                        setName={setName}
                        email={email}
                        setEmail={setEmail}
                        handleSubmit={handleSubmit}
                    />
                </header>
            </div>
            <SignUpPage signupList={signupList} />
            <FeaturedListings />
        </>
    )
}

const getTodayString = () => {
    const [month, day, year] = new Date()
        .toLocaleDateString("en-US")
        .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};
