import React from 'react'
import {MerchantContainer, Left, Right, Name, Email, One, Two, Three, Four, NameData, EmailData, Company, CompanyData, CompanyNumber, CompanyNumberInput, Instruction, Caution, Desc} from "./MerchantSignUpStyle"
import CautionPng from "../../../images/caution.png"

const MerchantSignUp = () => {
  return (
    <MerchantContainer>
        <One>
            <Left>
                <Name>Company Name</Name>
                <NameData placeholder="Chams Access Limited" />
            </Left>
            <Right>
                <Email>Company Email</Email>
                <EmailData placeholder="chamsaccess@yahoo.net" />
            </Right>
        </One>
        <Two>
            <Company>Company Email</Company>
            <CompanyData placeholder="Femi" />
        </Two>
        <Three>
        <Left>
                <CompanyNumber>Company Official Number</CompanyNumber>
                <CompanyNumberInput placeholder="08012345678" />
            </Left>
            <Right>
                <Instruction>
                    <Caution src={CautionPng} alt="Caution"/>
                    <Desc>
                    Kindly provide an active phone number where you can recieve your verification OTP.
                    </Desc>
                </Instruction>
            </Right>
        </Three>
        <Four>
            Proceed
        </Four>
    </MerchantContainer>
  )
}

export default MerchantSignUp