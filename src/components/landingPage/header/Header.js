import React, {useState} from 'react'
import {HeaderContainer, ArgoneLogo, ArgoneNavs, ArgoneLinks, Logo, ArgoneName, Products, Developers, Faq, Contact, Items, SignIn, SignUp, SignText,SignText2, BurgerMenu, MobileCover} from "./HeaderStyles"
import Argone_Logo from '../../../images/Argonpag_logo.png'
import Argone_Name from '../../../images/ArgoneName.png'
import NavArrow from '../../../images/NavArrow.png'
import Headroom from 'react-headroom'
import { RiMenu4Line, RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Header = () => {
    const [toggle, setToggle] = useState(false)

    // change bugger menu
    const changeBuggerMenu = () => {
        setToggle(!toggle)
    }

    // close bugger menu
    const closeBuggerMenu = () => {
        setToggle(false)
    }

  return (
    <Headroom>
    <HeaderContainer>
        <ArgoneLogo>
            <Logo>
                <img src={Argone_Logo} alt="Argonelogo" />
            </Logo>
            <ArgoneName>
                <img src={Argone_Name} alt="ArgoneName" />
            </ArgoneName>
        </ArgoneLogo>
        <BurgerMenu onClick={changeBuggerMenu}>
            {toggle ? (<RiCloseFill size={40} style={{fill: 'red'}} />) : (<RiMenu4Line size={40} style={{fill: '#002644'}} />)}
        </BurgerMenu>
        <MobileCover onclick={changeBuggerMenu} toggle={toggle} >
        <ArgoneNavs>
            <Items onClick={closeBuggerMenu}>
                <Products>Products</Products>
            </Items>
            <Items onClick={closeBuggerMenu}>
                <Developers>Developers</Developers>
            </Items>
            <Items onClick={closeBuggerMenu}>
                <Faq>FAQ</Faq>
            </Items>
            <Items onClick={closeBuggerMenu}>
                <Contact>Contact</Contact>
            </Items>
        </ArgoneNavs>
        <ArgoneLinks>
            <SignIn onClick={closeBuggerMenu}>
                <SignText>SignIn</SignText>
            </SignIn>
            <SignUp to="onboarding" onClick={closeBuggerMenu}>
                <SignText2>SignUp</SignText2>
                <img src={NavArrow} alt="sing_text" />
            </SignUp>
        </ArgoneLinks>
        </MobileCover>
    </HeaderContainer>
    </Headroom>
  )
}

export default Header

