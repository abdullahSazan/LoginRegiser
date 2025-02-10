import React from 'react'
import './styles/Singin.css'
import { TextField, Button, Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from 'react';
import firebase, { auth } from '../componenst/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

// const kayitFormuLink = "http://localhost:3000/form"




function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        console.log("kayıtlı kullanıcı girriş yaıldı")


    }




    return (
        <div className='form-parent'>
            <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto" }}>

                <TextField
                    label="Email"
                    type="email"
                    name='email'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    name='password'
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <FormGroup>
                    <div className='d-flex align-items-center'>
                        <FormControlLabel onChange={handleChange} required control={<Checkbox checked={data.isChecked} name='isChecked' />} />
                        <p style={{ margin: "0" }} title='Kayıt Formu'>Kayıt <a href={kayitFormuLink}>formu </a> okudum onaylıyorum..</p>
                    </div>

                </FormGroup> */}
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Gönder
                </Button>
            </form>


        </div >
    )
}

export default SingIn