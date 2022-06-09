import React, {useState} from 'react'
import {ParentWork, WorkContainer, HowItWorks, UseArgone, VisitOur, VisitText, VisitImage, PointerContainer, One, Two, MobileVisitOur} from './WorkStyle'
import marchantWebsite from '../../../images/marchantWebsit.png'
import marchantWebsite2 from '../../../images/phone cart.png'
import AOS from 'aos'
import Slider from "react-slick";


const Work = () => {
    AOS.init();

    const [visitMe, setVisitMe] = useState(true);
    const [verifyMe, setVerifyMe] = useState(false);
    const [confirmMe, setConfirmMe] = useState(false);
    const [getMe, setGetMe] = useState(false);


    const showVisit = () => {
        setVisitMe(true);
        setVerifyMe(false);
        setConfirmMe(false);
        setGetMe(false);
    };

    const showVerify = () => {
        setVisitMe(false);
        setVerifyMe(true);
        setConfirmMe(false);
        setGetMe(false);
    };

    const showConfirm = () => {
        setVisitMe(false);
        setVerifyMe(false);
        setConfirmMe(true);
        setGetMe(false);
    };
    
    const showGet = () => {
        setVisitMe(false);
        setVerifyMe(false);
        setConfirmMe(false);
        setGetMe(true);
    };

    const [toggle, setToggle] = useState(false);
    const toggleMe = () =>{
        setToggle(!toggle)
    }
  return (
    <ParentWork>
        <WorkContainer>
            <HowItWorks>How <span>it Works</span></HowItWorks>
            <UseArgone>
                Use Argone Pay to shop and pay conveniently in 4 steps and less than a minute.
            </UseArgone>
            <VisitOur>
                <VisitText>
                {toggle && visitMe ? (
                <PointerContainer bg>
                    <One data-aos="fade-down" data-aos-duration="1500" cl onClick={()=>{
                        console.log(visitMe)
                        toggleMe();
                        showVisit();
                    }}>Visit our partner merchant websites</One>
                    {toggle && visitMe ? (<Two>Visit the website of our partner merchants to shop for your items, add your item(s) to cart and proceed to selecting Argone Pay as the payment method</Two>) : (null)}
                </PointerContainer>
                ) : (
                <PointerContainer>
                    <One onClick={()=>{
                        toggleMe();
                        showVisit();
                    }}>Visit our partner merchant websites</One>
                    {/* {toggle && visitMe ? (<Two>Visit the website of our partner merchants to shop for your items, add your item(s) to cart and proceed to selecting Argone Pay as the payment method</Two>) : (null)} */}
                </PointerContainer>
                )}
                {toggle && verifyMe ? (
                <PointerContainer bg>
                    <One cl onClick={()=>{
                        console.log(verifyMe)
                        toggleMe(); 
                        showVerify()
                    }}>Verify Your NIN</One>
                    {toggle && verifyMe ? (<Two>Enter your NIN to spool your records and pre-fill your basic data while allowing you to edit your incorrect details and other and other necessary information.</Two>) : (null)}
                </PointerContainer>
                ) : (
                <PointerContainer>
                    <One onClick={()=>{
                        toggleMe(); 
                        showVerify()
                    }}>Verify Your NIN</One>
                    {/* {toggle && verifyMe ? (<Two>Visit the website of our partner merchants to shop for your items, add your item(s) to cart and proceed to selecting Argone Pay as the payment method</Two>) : (null)} */}
                </PointerContainer>
                )}
                {toggle && confirmMe ? (
                <PointerContainer bg>
                    <One cl onClick={()=>{
                        console.log(confirmMe)
                        toggleMe(); 
                        showConfirm()
                    }}>Confirm your BVN</One>
                    {toggle && confirmMe ? (<Two>Fill in your BVN to enable bank verification and credit score checking to credit to complete the account verification steps in a matter of seconds</Two>) : (null)}
                </PointerContainer>
                ) : (
                <PointerContainer>
                    <One onClick={()=>{
                        toggleMe(); 
                        showConfirm()
                    }}>Confirm your BVN</One>
                    {/* {toggle && confirmMe ? (<Two>Visit the website of our partner merchants to shop for your items, add your item(s) to cart and proceed to selecting Argone Pay as the payment method</Two>) : (null)} */}
                </PointerContainer>
                )}
                {toggle && getMe ? (
                <PointerContainer bg>
                    <One cl onClick={()=>{
                        console.log(getMe)
                        toggleMe(); 
                        showGet()
                    }}>Get your credit limit</One>
                    {toggle && getMe ? (<Two>Spending limit will be match with your profile, so that you can proceed to make payment and complete the purchase</Two>) : (null)}
                </PointerContainer>
                ) : (
                <PointerContainer>
                    <One onClick={()=>{
                        toggleMe(); 
                        showGet()
                    }}>Get your credit limits</One>
                    {/* {toggle && getMe ? (<Two>Visit the website of our partner merchants to shop for your items, add your item(s) to cart and proceed to selecting Argone Pay as the payment method</Two>) : (null)} */}
                </PointerContainer>
                )}
                </VisitText>
                <VisitImage data-aos="fade-left">
                    {
                    visitMe ? (<img  src={marchantWebsite} alt="gadget1" /> ): 
                    verifyMe ? (<img src={marchantWebsite2} alt="gadget1" />) : 
                    confirmMe ? (<img src={marchantWebsite} alt="gadget1" />) : 
                    getMe ? (<img src={marchantWebsite2} alt="gadget1" />) : 
                    null
                    }
                </VisitImage>
            </VisitOur>
            <MobileVisitOur>
                {/* carousel will be here */}
            </MobileVisitOur>
        </WorkContainer>
    </ParentWork>
    
  )
}

export default Work