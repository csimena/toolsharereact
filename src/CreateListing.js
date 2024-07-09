import React, { useState } from 'react';
import styles from './css/SignUp.module.css';
import listingData from './listingData';

function CreateListing() {

    const [userInput, setUserInput] = useState({
        listingName: "",
        listingType: "",
        imageUrl: "",
        rating: 0,
        tools: [],
        listingCity: "",
        listingState: "",
        isActive: true
    });

    const handleUserInput = (e) => {
        const { name, value } = e.target;
        setUserInput(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', userInput);
        listingData.push(userInput);
        console.log('listingData: ', listingData);
    };


    return (
        <>
            <div>
                <h2>List your tool or entire workspace.</h2>
                <p>
                    Sign up for our newsletter to stay up-to-date on the latest products,
                    receive exclusive discounts, and connect with other programmers who
                    share your passion for all things tech.
                </p>
                <form onSubmit={handleSubmit}>
                    <label for="listingName">Tool or Workspace Name: </label>
                    <input required id="listingName" name="listingName" type="text" onChange={handleUserInput} value={userInput.listingName} />


                    <p>Listing Type:</p>
                    <input id="workspace" name="listingType" type="radio" onChange={handleUserInput} value="Workspace" />
                    <label for="workspace">Workspace</label>

                    <input id="tool" name="listingType" type="radio" onChange={handleUserInput} value="Tool" />
                    <label for="tool">Tool</label>
                    <br /><br />


                    <label for="imageUrl">Image Url:</label>
                    <input type="text" name="imageUrl" id="imageUrl" onChange={handleUserInput} value={userInput.imageUrl} />
                    <br /><br />


                    <button id="submit" value="SUBMIT">Submit</button>

                </form>
            </div>
            <div className={styles.inputDisplay}>
                <h2>Current User Input: </h2>
                <h4>listing name: {userInput.listingName}</h4>
                <h4>listing type: {userInput.listingType}</h4>
                <h4>image url: {userInput.imageUrl}</h4>
            </div>
        </>
    );
}

export default CreateListing;