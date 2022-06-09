import React from 'react'
import {FooterContainer, FooterWrapper, Navs, Copywrite, Qlinks, Support, Connect, Customer, Merchant, Quick, SupportHead, Work,Contact1, Privacy, ConnectHead, Socials, Address, Email, Phone, Facebook, Instagram, Twitter, Details} from "./FooterStyle"
import Community from './community/Community'
import FacebookIcon from '../../../images/facebookIcon.png'
import InstagramIcon from '../../../images/InstagramIcon.png'
import twitterIcon from '../../../images/twitterIcon.png'
import EmailIcon from '../../../images/VectorEmailIcon.png'
import PhoneIcon from '../../../images/VectorphoneIcon.png'
// import {Link} from 'react-router-dom'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear()
    // console.log(year)

  return (
    <FooterContainer>
        <Community />
        <FooterWrapper>
            <Navs>
                <Qlinks>
                    <Quick>Quick Links</Quick>
                    {/* <Link> */}
                        <Customer>Argone Pay for Customers</Customer>
                    {/* </Link> */}
                    {/* <Link> */}
                        <Merchant>Argone Pay for Merchants</Merchant>
                    {/* </Link> */}
                </Qlinks>
                <Support>
                    {/* <Link> */}
                    <SupportHead>Support</SupportHead>
                    {/* <Link> */}
                    <Work>How it works</Work>
                    {/* </Link> */}
                    {/* <Link> */}
                    <Contact1>Contact Us</Contact1>
                    {/* </Link> */}
                    {/* <Link> */}
                    <Privacy>Privacy Policy</Privacy>
                    {/* </Link> */}
                </Support>
                <Connect>
                    <ConnectHead>Connect</ConnectHead>
                    <Socials>
                        <Facebook>
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                <img src={FacebookIcon} alt="facebook_icon" />
                            </a>
                        </Facebook>
                        <Instagram>
                            <a href="https://instagram.com"  target="_blank" rel="noreferrer">
                                <img src={InstagramIcon} alt="instagram_icon" />
                            </a>    
                        </Instagram>
                        <Twitter>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                <img src={twitterIcon} alt="twitter_icon" />
                            </a>
                        </Twitter>
                    </Socials>
                    <Address>8, Louis Solomon Close should be the address</Address>
                    <Email>
                        <img src={EmailIcon} alt="email" />
                        <Details>info@argone.ng</Details>
                    </Email>
                    <Phone>
                        <img src={PhoneIcon} alt="email" />
                        <Details>08180249846</Details>
                    </Phone>
                </Connect>
            </Navs>
        </FooterWrapper>
        <Copywrite>
            © Argone Pay {year}. All rights reserved
        </Copywrite>
    </FooterContainer>
  )
}

export default Footer