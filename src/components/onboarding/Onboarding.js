import React, {useState} from 'react'
import {OnboardingContainer, OnboardingWrapper, Brand, AuthDashboard, BrandImage, BrandText, LinkUp, Buttons, Infos, UserSignupButton, MerchantSignupButton, SignUpDescription, Movement, Arrow, Back} from "./OnboardingStyle"
import BrandLogo from '../../images/Argonpag_logo.png'
import BrandName from '../../images/ArgoneName.png'
import SignUpUser from '../onboarding/user/UserSignUp'
import SignUpMerchant from '../onboarding/merchant/MerchantSignUp'
import arrowBack from "../../images/arrowBack.png"
import {IoIosArrowBack} from 'react-icons/io'

const Onboarding = () => {
  const [signUp, setSignUp] = useState(true)
  const [signIn, setSignIn] = useState(false)
  const [toggle, setToggle] = useState(true)

  // determine what form to render
  const showSignUp = () => {
    setSignUp(true)
    setSignIn(false)
  }

  // will be used for sign in form
  const showSignIn = () => {
    setSignUp(false)
    setSignIn(true)
  }

  const changeForm = () => {
    setToggle(!toggle)
  }


  return (
    <OnboardingContainer>
      <Movement to="/">
        {/* <Arrow src={arrowBack} alt="arrow" /> */}
        <IoIosArrowBack />
        <Back>Back</Back>
      </Movement> 
      <OnboardingWrapper>
        <Brand>
          <BrandImage src={BrandLogo} alt="argonpay" />
          <BrandText src={BrandName} alt="argonpay" />
        </Brand>
        {toggle && signUp ? 
        (<SignUpDescription>
          Create your ArgonePay account in 2 steps
        </SignUpDescription>) : 
        (<SignUpDescription>
          Create your ArgonePay Merchant account
        </SignUpDescription>)}
        <AuthDashboard>
          <Buttons>
            {/* control for user */}
            {toggle && signUp ? (
            <UserSignupButton bb rd bg cl onClick={showSignUp}>
              User SignUp
            </UserSignupButton>
            ) : 
            (<UserSignupButton onClick={showSignUp}>User SignUp</UserSignupButton>)}

            {/* control for marchant */}
            {toggle && signUp ? (
            <MerchantSignupButton bb rd bg cl onClick={showSignIn}>
              Merchant SignUp
            </MerchantSignupButton>
            ) : 
            (<MerchantSignupButton onClick={showSignIn}>Merchant SignUp</MerchantSignupButton>)}
          </Buttons>
          <Infos>
            {toggle && signUp ? (<SignUpUser />) : (<SignUpMerchant />)}
          </Infos>
        </AuthDashboard>
        <LinkUp>
          Already have an account? <span>Login</span>
        </LinkUp>
      </OnboardingWrapper>
    </OnboardingContainer>
  )
}

export default Onboarding