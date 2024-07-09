import React, { useState } from 'react';
import styles from './css/SignUp.module.css';

function SignUp() {
    const [userInput, setUserInput] = useState('Enter your email to join our beta launch');
  
    function handleUserInput(e) {
      setUserInput(e.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', userInput);
    };

    return (
      <>
        <div className={styles.emailContainer}>
          <form className={styles.emailEntry} onSubmit={handleSubmit}>
            <input 
                id="email" 
                className={styles.emailInput} 
                type="text" 
                onChange={handleUserInput} 
                value={userInput}
                />
          </form>
          <button type="submit" className={styles.emailEntryButton}><i class="fa fa-search"></i></button>

        </div>
      </>
    );
  }
  
  export default SignUp;

//   <div class="email-entry-grid">
//   <form class="email-entry-form">
//     <input class="email-input" type="text" placeholder="Enter your email to join our beta launch" />
//   </form>

//   <button type="submit" class="email-entry-button"><i class="fa fa-search"></i></button>
// </div>