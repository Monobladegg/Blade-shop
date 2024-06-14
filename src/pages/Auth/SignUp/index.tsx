import { useState, FormEvent } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/auth/firebase";
import Layout from "src/lib/Layout";
import s from "./index.module.scss";
import { Link } from "react-router-dom";

export const SignUpPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const Register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword || password.length < 6 || email === "" || password === "") {
      setError("Заповніть всі поля, перевірте правильність паролю і чи має він мінімум 6 символів");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user)
        setError("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        setError("Помилка сталася на сторінці реєстрації: " + error);
      });
  };

  return (
    <Layout active={0} nav={false}>
      <form className={s.form} onSubmit={Register}>
        <h2>Створити аккаунт</h2>
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
        <input
          type="text"
          placeholder="Підтвердіть пароль"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button>Зареєструватися</button>
        <p>У вас вже є аккаунт? <Link className={s.signIn} to="/auth/signIn">Вхід</Link></p>
        {error && <p className={s.error}>{error}</p>}
      </form>
    </Layout>
  );
};