import React, { useState } from "react";
import { auth } from "../componenst/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const NoPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("Kullanıcı başarıyla oluşturuldu!");
        } catch (error) {
            setMessage(`Hata: ${error.message}`);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Kayıt Ol</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default NoPage;
