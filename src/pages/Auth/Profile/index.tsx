import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "src/auth/firebase";
import { User } from "firebase/auth";
import { ICategory } from "src/types/db";
import Layout from "src/lib/Layout";
import { Link } from "react-router-dom";
import s from "./index.module.scss";

type Props = {
  db: ICategory[];
};

export const ProfilePage = ({ db }: Props) => {
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
      setLoading(false);
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (loading) {
    return (
      <Layout db={db} active={0} nav={false}>
        <h3>Loading...</h3>
      </Layout>
    );
  }

  if (authUser) {
    return (
      <Layout db={db} active={0} nav={false}>
        <button onClick={userSignOut}>Sign out</button>
      </Layout>
    );
  } else {
    return (
      <Layout db={db} active={0} nav={false}>
        <div className={s.container}>
          <h3>Вы еще не зарегестрированы.</h3>
          <Link className={s.link} to="/auth/signUp">
            Желаете зарегестрироваться?
          </Link>
        </div>
      </Layout>
    );
  }
};
