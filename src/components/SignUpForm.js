import styles from '../css/SignUp.module.css';

function SignUpForm(props) {
    const {signupList, email, setEmail, handleSubmit} = props;

    return (
      <>
        <div className={styles.emailContainer}>
          <form className={styles.emailEntry} onSubmit={handleSubmit}>
            <input 
                id="email" 
                className={styles.emailInput} 
                type="email" 
                onChange={(e) => setEmail(e.target.value)} 
                value={email}
                />
          </form>
          <button type="submit" className={styles.emailEntryButton}><i class="fa fa-search"></i></button>
        </div>
      </>
    );
  }
  
  export default SignUpForm;