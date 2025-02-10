
import React, { useState } from 'react'

function Home() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;

        setData({
            ...data,
            [name]: value
        })

    }
    const submitBtn = (e) => {
        e.preventDefault();
        if (data.email !== "" && data.password !== "") {
            if (data.email.includes("@")) {
                alert("siteme giriş yapılıyor")
                console.log(data)
            }
            else {
                alert("email formatında giriniz...")
            }
        } else {
            console.log("email ve password boş bırakılamaz...")
        }

    }


    return (
        <div>
            <form>
                <p>Email</p>
                <input
                    onChange={handleChange}
                    type="Email" placeholder='Email...' name='email' />
                <p>Password</p>
                <input
                    onChange={handleChange}
                    type="password" placeholder='Password...' name='password' />
                <br />
                <br />
                <input type="submit" value="Gönder" onClick={submitBtn} />

            </form>


        </div>
    )
}

export default Home