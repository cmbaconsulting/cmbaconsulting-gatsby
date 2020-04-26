import React from "react"
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout"
import { Segment, Container, Header, List, Transition } from "semantic-ui-react"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledSegment = styled(Segment)`
  &&&& {
    margin: 0em;
    color: #084166;
  }
`

const StyledText = styled(Container)`
   {
    font-size: 1.25em;
    max-width: 800px;
  }
`

const Underline = styled.div`
  border-top: 2px solid #728087;
  width: 100%;
  margin: 0em auto 0 auto;
`
const StyledH2 = styled(Container)`
  letter-spacing: 0.1em;

  h2 {
    font-size: 1.8em;
    display: inline-block;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
  }
`

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledP = styled.p`
   {
    margin-bottom: 2em;
    color: #222533;
  }
`
const StyledBold = styled.b`
  color: #084166;
  text-transform: capitalize;
  font-weight: 1.1em;
`

const StyledH3 = styled.h3`
  color: #084166;
  font-size: 1.15em;
`
export default () => {
  return (
    <Layout>
      <SEO title="Privacy Policy" url="/privacy-policy" />

      <StyledSegment basic>
        <Transition
          mountOnShow={false}
          transitionOnMount
          animation="fade up"
          duration={1000}
        >
          <StyledH2 className="page-header">
            <h2>Privacy Policy</h2>
            <Underline />
          </StyledH2>
        </Transition>
      </StyledSegment>

      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment vertical basic padded>
          <CenterContent>
            <StyledText>
              <StyledP>
                This Privacy Policy oversees the way
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>
                collects, uses, maintains and discloses information collected
                from users of the https://www.cmbaconsulting.ca website.
              </StyledP>
              <StyledP>
                This privacy policy applies to the website and all products and
                services offered by
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>
              </StyledP>
              <StyledH3>INFORMATION COLLECTION AND USE</StyledH3>
              <StyledP>
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>
                may collect and use identification data for the following
                functions: customer satisfaction, personalization, website
                improvements and for processing transactions.
              </StyledP>
              <StyledH3>IDENTIFICATION DATA</StyledH3>
              <StyledP>
                We may require you to provide us with certain personally
                identifiable information, including but not limited to your
                name, phone number, and postal address. The information then end
                users provides will be used as a contact or identification.
              </StyledP>
              <StyledP>
                We may collect identification data about customers only
                voluntarily when a customer submits such information. Customers
                have the right to deny supplying any identifiable data except
                when required to perform any actions on the website.
              </StyledP>
              <StyledP>
                We may collect personal identification data in a variety of
                ways, including, but not limited to, when customers visit our
                site, register on the website, place an order, fill out a form,
                subscribe to the newsletter and in connection with other
                activities, services, features or resources we make available on
                our website. End-users may be asked for, as required a name,
                email address, mailing address, phone number, credit card
                information, although users may visit our site incognito.
              </StyledP>
              <StyledP>
                We may collect identification data about customers whenever they
                interact with our website. The identification information may
                include the browser name, the type of computer and technical
                information about means of connection to our website, such as
                the operating system, Internet service providers and other
                related data.
              </StyledP>
              <StyledH3>COOKIES</StyledH3>
              <StyledP>
                Cookies are files with small amount of data that is commonly
                used an anonymous unique identifier. These are sent to your
                browser from the website that you visit and are stored on your
                computer’s hard drive.
              </StyledP>
              <StyledP>
                Our website uses these "cookies" to collection information and
                to improve our Service. You have the option to either accept or
                refuse these cookies and know when a cookie is being sent to
                your computer. If you choose to refuse our cookies, you may not
                be able to use some portions of our Service.
              </StyledP>
              <StyledP>
                This website may use cookies to enhance end-user experience.
              </StyledP>
              <StyledH3>PRIVACY POLICY CHANGES</StyledH3>
              <StyledP>
                <StyledBold>Chika Mba Consulting Inc. </StyledBold>reserves the
                right to update this privacy policy at our discretion. We may
                update our Privacy Policy from time to time. Thus, we advise you
                to review this page periodically for any changes. We will notify
                you of any changes by posting the new Privacy Policy on this
                page. These changes are effective immediately, after they are
                posted on this page.
              </StyledP>
              <StyledH3>YOUR ACCEPTANCE</StyledH3>
              <StyledP>
                By using this website, you are implying your approval of this
                policy. If you do not agree to this policy, please stop using
                the website. Your continued use of the website following any
                posted changes to this policy will be considered as your
                acceptance of those changes.
              </StyledP>
              <StyledH3>CONTACTING US</StyledH3>
              <StyledP>
                If you have any questions about our privacy policy, do not
                hesitate to contact us.
              </StyledP>
              <StyledBold>Chika Mba Consulting Inc.</StyledBold>
              <br />
              <a href="https://www.cmbaconsulting.ca">
                https://www.cmbaconsulting.ca
              </a>
              <br />
              Stittsville, Ontario, K2S0P1 <br /> (613)
              663-4768
            </StyledText>
          </CenterContent>
        </Segment>
      </Transition>
    </Layout>
  )
}
