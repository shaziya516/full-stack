import React from 'react'
import '../style.css';
import { useState } from 'react';

const ValidationForm = () => {

    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const [errorUserName, setErrorUserName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('');



    const [userColor, setUserColor] = useState('');
    const [emailColor, setEmailColor] = useState('');
    const [passwordColor, setPasswordColor] = useState('');
    const [confirmPasswordColor, setConfirmPasswordColor] = useState('');



    const validate = e => {
        e.preventDefault();

       



        if (username.length > 8) {
           setErrorUserName('');
            setUserColor('green');
        }
        else {

            setErrorUserName('username must be greater than 8 characters');
            setUserColor('red');
        }
        if(email.includes('@') && email.includes('.')) {
            setErrorEmail('');
            setEmailColor('green');
        }else{
            setErrorEmail('email must contain @ and .');
            setEmailColor('red');
        }

        if (password.length > 8) {
            setErrorPassword('');
            setPasswordColor('green');
        } else {
            setErrorPassword('password must be greater than 8 characters');
            setPasswordColor('red');
        }

        if (confirmPassword === password && confirmPassword.length > 8) {
            setErrorConfirmPassword('');
            setConfirmPasswordColor('green');
        } else {
            setErrorConfirmPassword('confirm password must match with password and greater than 8 characters');
            setConfirmPasswordColor('red');
        }

    }

    return (
        <div className='container'>


            <div className="card">


                <div className="card-image"><img src="https://tse2.mm.bing.net/th/id/OIP.eyVu-KTDxdRFlP0zf4uhRgHaKb?pid=Api&P=0&h=180" alt="" /></div>


                <form >

                    <input type="text"

                        placeholder='Name'

                        style={{ borderColor: userColor }}

                        value={username}

                        onChange={(e) => setUserName(e.target.value)}
                    />

                    
                  

                    <p className='error'>{errorUserName}</p>



                    <input type="email" placeholder='Email' style={{ borderColor: emailColor }} value={email}
                        onChange={(e) => setEmail(e.target.value)} />



                    <p className='error'>{errorEmail}</p>



                    <input type="password" placeholder='Passsword' style={{ borderColor: passwordColor }} value=
                        {password} onChange={e => setPassword(e.target.value)} />



                    <p className='error'>{errorPassword}</p>



                    <input type="password" placeholder='Confirm Password' style={{ borderColor: confirmPasswordColor }} value=
                        {confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />



                    <p className='error'>{errorConfirmPassword}</p>


                    <button className="submit-btn" onClick={validate}> Submit</button>



                </form>


            </div>

        </div>
    )
}



export default ValidationForm;