import React from "react";
import {
  OnboardingContainer,
  OnboardingWrapper,
  Brand,
  AuthDashboard,
  BrandImage,
  BrandText,
  LinkUp,
  Buttons,
  Infos,
  Step1Button,
  Step2Button,
  Movement,
  Back,
  Send,
  FormFields,
  BvnDesc,
  BvnForm,
  Left,
  LeftCountry,
  LeftNin,
  LeftEducation,
  Right,
  FirstName,
  LastName,
  FirstNameData,
  LastNameData,
  One,
  OneCountry,
  OneNin,
  OneEducation,
  MiddleName,
  MiddleNameData,
  Email,
  EmailData,
  Dob,
  DobData,
  Gender,
  GenderData,
  Country,
  NinNumber,
  CountryData,
  NInData,
  Address,
  AddressData,
  State,
  StateData,
  Education,
  // EducationData,
  Select,
  BVNnumber,
  BVNdata,
  BVNcode,
  BankName,
  BankData,
  AccountNumber,
  AccountData,
  PhoneNumber,
  PhoneData,
  PhoneInfo,
  PhoneText,
  PhoneIcon,
  Cover,
  Dummy,
} from "./SignUp1Style.js";
import BrandLogo from "../../../images/Argonpag_logo.png";
import BrandName from "../../../images/ArgoneName.png";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import Help from "../../../images/caution.png";

const SignUp1 = () => {
  // get NIN data
  const userData = useSelector((state) => state.ninData);
  // log NIN data to the terminal
  console.log(userData);

  return (
    <OnboardingContainer>
      <Movement to="/onboarding">
        <IoIosArrowBack />
        <Back>Back</Back>
      </Movement>
      <OnboardingWrapper>
        <Brand>
          <BrandImage src={BrandLogo} alt="argonpay" />
          <BrandText src={BrandName} alt="argonpay" />
        </Brand>
        <AuthDashboard>
          <Buttons>
            <Step1Button bb rd bg cl>
              Step 1
            </Step1Button>
            <Step2Button bb rd bg cl>
              Step 2
            </Step2Button>
          </Buttons>
          {/* User fields */}
          <Infos>
            <FormFields>
              <One>
                <Left>
                  <FirstName>First Name</FirstName>
                  <FirstNameData value={`${userData.firstname}`} readonly />
                </Left>
                <Right>
                  <LastName>Last Name</LastName>
                  <LastNameData value={`${userData.surname}`} readonly />
                </Right>
              </One>
              <One>
                <Left>
                  <MiddleName>Middle Name</MiddleName>
                  <MiddleNameData value={`${userData.middlename}`} readonly />
                </Left>
                <Right>
                  <Email>Email Address</Email>
                  <EmailData placeholder={`${userData.email}`} />
                </Right>
              </One>
              <One>
                <Left>
                  <Dob>Date of Birth</Dob>
                  <DobData value={`${userData.birthdate}`} readonly />
                </Left>
                <Right>
                  <Gender>Gender</Gender>
                  <GenderData value={`${userData.gender}`} readonly />
                </Right>
              </One>
              <OneCountry>
                <LeftCountry>
                  <Country>Country</Country>
                  <CountryData value="Nigeria" readonly />
                </LeftCountry>
              </OneCountry>
              <OneNin>
                <LeftNin>
                  <NinNumber>NIN</NinNumber>
                  <NInData value={`${userData.nin}`} readonly />
                </LeftNin>
              </OneNin>
              <One>
                <Left>
                  <Address>Home Address</Address>
                  <AddressData
                    placeholder={`${userData.residence_AdressLine1}`}
                  />
                </Left>
                <Right>
                  <State>City / State</State>
                  <StateData placeholder={`${userData.residence_state}`} />
                </Right>
              </One>
              <OneEducation>
                <LeftEducation>
                  <Education>Highest Level of Education</Education>
                  <Select>
                    <option value="" hidden>
                      {userData.educationallevel}
                    </option>
                    <option>B.Sc</option>
                    <option>B.Sc</option>
                    <option value="9">B.Tech</option>
                    <option value="2">B.A</option>
                    <option value="3">B.Ed</option>
                    <option value="4">B.Sc(Ed)</option>
                    <option value="5">B.Agr</option>
                    <option value="6">HND</option>
                    <option value="7">OND</option>
                    <option value="8">SSCE</option>
                  </Select>
                </LeftEducation>
              </OneEducation>
            </FormFields>
            <BvnDesc>
              You’re almost there! Kindly provide your BVN to complete your
              signup
            </BvnDesc>
            <BvnForm>
              <One>
                <Left>
                  <BVNnumber>BVN Number</BVNnumber>
                </Left>
                <Right>
                  <BVNcode>Dial 565*0# for your BVN</BVNcode>
                </Right>
              </One>
              <BVNdata placeholder="1234567890" />
              <One>
                <Left>
                  <BankName>Bank Name</BankName>
                  {/* <BankData placeholder={`${readData.residence_AdressLine1}`} /> */}
                  <Select>
                    <option value="" hidden>
                      {/* {readData.educationallevel} */}
                      Select Your Bank
                    </option>
                    <option value="1">Access</option>
                    <option value="1">GTBank</option>
                    <option value="2">Sterling</option>
                    <option value="3">Fidelity</option>
                    <option value="4">UBA</option>
                    <option value="5">First Bank</option>
                  </Select>
                </Left>
                <Right>
                  <AccountNumber>Account Number</AccountNumber>
                  <AccountData placeholder="4544******" />
                </Right>
              </One>
              <One>
                <Left>
                  <PhoneNumber>Phone Number</PhoneNumber>
                  <Cover>
                    <Dummy>+234</Dummy>
                    <PhoneData placeholder="701234????" />
                  </Cover>
                </Left>
                <Right>
                  <PhoneInfo>
                    <PhoneIcon src={Help} alt="phone icon" />
                    <PhoneText>
                      Kindly provide an active phone number where you can
                      receive your verification OTP.
                    </PhoneText>
                  </PhoneInfo>
                </Right>
              </One>
            </BvnForm>
            <Send type="submit">Proceed</Send>
          </Infos>
        </AuthDashboard>
        <LinkUp>
          Already have an account? <span>Login</span>
        </LinkUp>
      </OnboardingWrapper>
    </OnboardingContainer>
  );
};

export default SignUp1;
