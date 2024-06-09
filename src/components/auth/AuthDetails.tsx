import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'src/auth/firebase'
import { User } from 'firebase/auth'


type Props = {}

const authDetails = ({}: Props) => {

  const [authUser, setAuthUser] = useState<User | null>(null)

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user)
      } else {
        setAuthUser(null)
      }

    })

    return () => {
      listen()
    }
  }, [])


  const userSignOut = () => {
    auth.signOut().then(() => {
      console.log('Signed out')
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div>{authUser ? (
      <div>
        Signed in as {authUser.email}
        <button onClick={userSignOut}>Sign out</button>
        </div>
    ) : 'Not signed in'}</div>
  )
}

export default authDetails