import { useState, FormEvent } from "react";
import { ICategory } from "src/types/db";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "src/auth/firebase";

type Props = {
  db: ICategory;
};

const SignUp = ({ db }: Props) => {
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
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        setError("Помилка сталася на сторінці реєстрації: " + error);
      });
  };

  return (
    <div>
      <form onSubmit={Register}>
        <h2>Create account</h2>
        <input
          type="email"
          placeholder="Електронна пошта"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <input
          type="password"
          placeholder="Підтвердіть пароль"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default SignUp;
