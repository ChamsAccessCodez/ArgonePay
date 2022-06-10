import React from 'react'
import {UserContainer, One, Two, Three, Nin, Dial, UserInput} from "./UserSignUpStyle"

const UserSignUp = () => {
  return (
    <UserContainer>
        <One>
            <Nin>ENTER YOUR NIN</Nin>
            <Dial>Dial *321*?# for your NIN</Dial>
        </One>
        <Two>
            <UserInput placeholder="1234567890" />
        </Two>
        <Three>
            Continue
        </Three>
    </UserContainer>
  )
}

export default UserSignUp