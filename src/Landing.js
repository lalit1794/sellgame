import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Formik } from "formik";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/arrow-right.svg";



import Header, { NavLinks } from "./headers/light.js";

// const StyledHeader = styled(Header)`
//   ${tw`pt-8 max-w-none w-full`}
//   ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
//     ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
//   }
//   ${NavToggle}.closed {
//     ${tw`text-gray-100 hover:text-pink-500`}
//   }
// `;

const Actions = styled.div`
  ${tw`relative max-w-2xl text-center mx-auto lg:mx-0 lg:w-2/4`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-indigo-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-indigo-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-green-900 transition duration-300`}
  }
`;

// const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-screen`}
  background-image: url("https://i.ibb.co/TvKCphd/banner-without-layover.png");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;
const Description = tw.p`text-gray-500 font-medium text-xl max-w-lg mt-2 mb-4 sm:mt-1 text-center sm:text-left`
const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col overflow-x-hidden`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-indigo-500 inline`;


const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;


// const PrimaryAction = tw.button`rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 font-bold shadow transition duration-300 bg-pink-500 text-gray-100 hocus:bg-pink-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      
    </NavLinks>,
    <NavLinks key={2}>
      
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        
        <Content>
          <Heading>
              <span tw="text-indigo-500">Buy Game Accounts  </span> <br></br> in 3 simple steps
          </Heading>
          <Description>Select Game <FeatureIcon /> Select Account <FeatureIcon /> Buy Account</Description>
          <Actions>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={async values => {
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ title: 'React POST Request Example', email: values.email })
              };
              const response = await fetch('https://app.99inbound.com/api/e/XiJNjIXz', requestOptions);
              // const data = await response.json();
              alert("Cool!! We'll get back to you pretty soon.");
            }}
          >
            {props => {
              const {
                values,
                touched,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit
              } = props;
              return (
                <form onSubmit={handleSubmit}>
                  <input
                    id="email"
                    placeholder="Enter your email"
                    type="text"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}

                  <button type="submit" disabled={isSubmitting}>
                    Notify
                  </button>

                </form>
              );
            }}
          </Formik>
          </Actions>
          <Description>Share your email and we'll let you know once we're live.</Description>
        </Content>
      </HeroContainer>
    </Container>
  );
};
