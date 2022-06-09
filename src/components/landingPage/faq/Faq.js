import React, {useState} from 'react'
import {FaqContainer, Commonly, Answered, Customer, FaqWrapper, CustomerNav, CustomerContent, Nav1, Nav2, Nav3, Nav4} from "./FaqStyle"
import CustomerContents from './customerContent/customerContent'
import buttonIcon from '../../../images/NavArrow2.png'
import customerImage from '../../../images/phone cart.png'
import customerImage1 from '../../../images/flashImage.png'
// import {NavLink} from 'react-router-dom'



const Faq = () => {

    // states should be here
    const [requirements, setRequirements] = useState(true);
    const [settlement, setSettlement] = useState(false);
    const [repayment, setRepayment] = useState(false);
    const [spending, setSpending] = useState(false);

    const activeRequirements = () => {
        setRequirements(true)
        setSettlement(false)
        setRepayment(false)
        setSpending(false)
    }
    const activeSettlement = () => {
        setRequirements(false)
        setSettlement(true)
        setRepayment(false)
        setSpending(false)
    }
    const activeRepayment = () => {
        setRequirements(false)
        setSettlement(false)
        setRepayment(true)
        setSpending(false)
    }
    const activeSpending = () => {
        setRequirements(false)
        setSettlement(false)
        setRepayment(false)
        setSpending(true)
    }


  return (
    <FaqContainer>
        <FaqWrapper>
            <Commonly>
            Frequently asked questions
            </Commonly>
            <Answered>
            We answered some of the questions you might have so you won't bother asking them. 
            </Answered>
            <Customer>
                <CustomerNav>
                    {requirements ? (
                        <Nav1
                        style={{
                            borderRadius: '30px',
                            background: 'linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%)',
                            BorderRadius: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            marginLeft: '10px',
                            marginRight: '15px',
                            color: '#ffffff',
                        }}
                        onClick={activeRequirements}>
                            Requirement
                        </Nav1>
                    ) : (
                        <Nav1
                        onClick={activeRequirements}>
                        Requirements
                        </Nav1>
                    )}
                    {settlement ? (
                        <Nav2
                        style={{
                            borderRadius: '30px',
                            background: 'linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%)',
                            BorderRadius: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            marginLeft: '10px',
                            marginRight: '15px',
                            color: '#ffffff',
                        }} 
                        onClick={activeSettlement}>
                        Settlement
                        </Nav2>
                    ) : (
                        <Nav2 onClick={activeSettlement}>
                        Settlement
                        </Nav2>
                    )}
                    {repayment ? (
                        <Nav3
                        style={{
                            borderRadius: '30px',
                            background: 'linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%)',
                            BorderRadius: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            marginLeft: '10px',
                            marginRight: '15px',
                            color: '#ffffff',
                        }} 
                        onClick={activeRepayment}>
                        Repayment
                        </Nav3>
                    ) : (
                        <Nav3 onClick={activeRepayment}>
                        Repayment
                        </Nav3>
                    ) }
                    {spending ? (
                        <Nav4
                        style={{
                            borderRadius: '30px',
                            background: 'linear-gradient(289.11deg, #04487F 7.4%, #A0C559 117.27%)',
                            BorderRadius: '30px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            marginLeft: '10px',
                            marginRight: '15px',
                            color: '#ffffff',
                        }}
                        onClick={activeSpending}>
                        Spending Limit
                        </Nav4>
                    ) : (
                        <Nav4 onClick={activeSpending}>
                        Spending Limit
                        </Nav4>
                    )}
                </CustomerNav>
                <CustomerContent>
                    {requirements ? (
                        <CustomerContents 
                        heading="What do i need to use Argone Pay as a customer?" 
                        description1="Argone Pay provides instant credit facilities to everybody. All you need is credit worthiness, and our system will profile you with just enough to finance your desired items from your favorite online vendors."
    
                        description2="We partner with some of the leading credible online vendors in Nigeria. We do not offer loans, we only let you pay for items in installments directly from the websites of our partner websites." 
                        getStarted="Get started" 
                        buttonIcon={buttonIcon} 
                        title="missing image" 
                        customerImage={customerImage} 
                        />
                    ) : settlement ? (
                        <CustomerContents 
                        heading="How long does it take for merchants to get value of devices sold?"  
                        description1="We provide merchants with instant settlements."
    
                        description2="This means that upon successful profiling and approval for a customer that checks out using the Argone Pay payment option on your website, your account number registered with us will be credited in no time, given you value for every device sold." 
                        getStarted="Get started" 
                        buttonIcon={buttonIcon} 
                        title="missing image" 
                        customerImage={customerImage1} 
                        />
                    ) : repayment ? (
                        <CustomerContents 
                        heading="How long do i have to pay for what i have purchased?" 
                        description1="For every device purchased, you'd be required to pay back over the period of three to four(3 - 4) months"
    
                        description2="We see this as a fair period for payment of purchased items by our customers." 
                        getStarted="Get started" 
                        buttonIcon={buttonIcon} 
                        title="missing image" 
                        customerImage={customerImage} 
                        />
                    ) : spending ? (
                        <CustomerContents 
                        heading="What happens if my spending limit is not up to the total cost of what i want to purchase?" 
                        description1="Simply subtract the spending limit from the total cost of what you want to purchase, you would have to make down payment for what left to make it up to us."
    
                        description2="We partner with some of the leading credible online vendors in Nigeria. We do not offer loans, we only let you pay for items in installments directly from the websites of our partner websites." 
                        getStarted="Get started" 
                        buttonIcon={buttonIcon} 
                        title="missing image" 
                        customerImage={customerImage1} 
                        />
                    ) : (null)}
                    
                </CustomerContent>
            </Customer>
        </FaqWrapper>
    </FaqContainer>
  )
}

export default Faq