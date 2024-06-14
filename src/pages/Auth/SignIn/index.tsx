import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/auth/firebase";
import Layout from "src/lib/Layout";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

export const SignInPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const Login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password.length < 6 || email === "" || password === "") {
      setError("Ми не змогли найти вас. Перевірте правильність паролю та електронної пошти");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setError("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        setError("Помилка сталася на сторінці входу: " + error);
      });

  }

  return (
    <Layout active={0} nav={false}>
      <form className={s.form} onSubmit={Login}>
        <h2>Вхід</h2>
        <input
          type="email"
          placeholder="Електронна пошта"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="text"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Зайти в аккаунт</button>
        <p>У вас ще нема аккаунта? <Link className={s.signUp} to="/auth/signUp">Зареєструватися</Link></p>
        {error && <p className={s.error}>{error}</p>}
      </form>
    </Layout>
  );
};