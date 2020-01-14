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

const StyledList = styled.ul`
  list-style-type: none;

  & > * {
    margin-bottom: 0.5em;
  }
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
          <StyledH2>
            <h2>Terms of Service Agreement</h2>
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
                Please read the following terms of service agreement carefully.
                By accessing or using our website and or services, you hereby
                agree to be bound by the terms and all terms, and all terms
                incorporated herein by reference. It is the responsibility of
                you, the user, customer or prospective customer to read the
                terms and conditions before proceeding use this website. If you
                do not expressly agree to all the terms and conditions, then
                please do not access or use our website or our services. This
                term of service agreement is effective as of 01/01/2019.
              </StyledP>
              <StyledH3>ACCEPTANCE OF TERMS</StyledH3>
              <StyledP>
                The following terms of service agreement (the “TOS”) is a
                legally binding agreement that shall govern the relationship
                with our users and others which may interact or interface with
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>and all
                subsidiaries and affiliates, in association with the use of the
                website, which includes
                <a href="/"> https://www.cmbaconsulting.ca </a> (the “Site”),
                and its services, which shall be defined below.
              </StyledP>
              <StyledH3>DESCRIPTION OF WEBSITE SERVICES OFFERED</StyledH3>
              <StyledP>
                The Site provides products and services for an IT
                infrastructure.
              </StyledP>
              <StyledP>
                Any and all visitors to our site shall be deemed as ‘Users’ of
                the herein contained services provided for the purpose of this
                TOS.
              </StyledP>
              <StyledP>
                The user acknowledges and agrees that the services provided and
                made available through our website and applications, which may
                include some mobile applications and that those application may
                be made available on various social medial networking sites and
                numerous other platforms and downloadable programs, are the sole
                property of<StyledBold> Chika Mba Consulting Inc.</StyledBold>.
                At its discretion,
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>may offer
                additional website services and/or products, or update, modify
                or revise any current content and services , and this agreement
                shall apply to any and all additional services and/or products
                and any and all updated, modified or revised services unless
                otherwise stipulated.
              </StyledP>
              <StyledP>
                <StyledBold>Chika Mba Consulting Inc. </StyledBold>does hereby
                reserve the right to cancel and cease offering any of the
                services and/or products. You, as the end user acknowledge,
                accept and agree that
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>shall not be
                held liable for any such updates, modifications, revisions,
                suspensions or discontinuance of any of our services and/or
                products. Your continued use of the services provided, after
                such posting of any updates, changes, and/or modifications shall
                constitute your acceptance of such updates, changes and/or
                modifications, and as such, frequent review of this agreement
                and any and all applicable terms and policies should be made by
                you to ensure you are aware of all terms and policies currently
                in effect. Should you not agree to the updated, revised or
                modified terms, you must stop using the provided services
                forthwith.
              </StyledP>
              <StyledP>
                Furthermore, the user understand, acknowledges and agrees that
                the services offered shall be provides “AS IS” and as such
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>shall not
                assume any responsibility or obligations for the timelines,
                missed delivery, deletion and/or any failure to store user
                content, communication or personalization setting.
              </StyledP>
              <StyledH3>
                CAUTIONS FOR GLOBAL USE AND EXPORT AND IMPORT COMPLIANCE
              </StyledH3>
              <StyledP>
                Due to the global nature of the internet, through the use or our
                network you hereby agree to comply with all local rules relating
                to online conduct and that which is considered acceptable
                content. Uploading, posting, and/or transferring of software,
                technology and other technical data may be subject to the export
                and import laws of Canada and possibly other countries. Using
                our network, you thus agree to comply with all applicable export
                and import laws, statutes and regulations.
              </StyledP>
              <StyledH3>INDEMNITY</StyledH3>
              <StyledP>
                All users herein agree to insure and hold
                <StyledBold> Chika Mba Consulting Inc.</StyledBold>, our
                subsidiaries, affiliates, agents, employees, officers, partners
                and/or licensors blameless or not liable for any claim or
                demand, which may include, but is not limited to, reasonable
                attorney fees made by any third partyer which may arise from any
                content a user of our site may submit, post, modify, transmit or
                otherwise make available through our services, your connection
                with these services, your violations of the terms of services
                and/or your violation of any such rights of another person.
              </StyledP>
              <StyledH3>COMMERCIAL REUSE OF SERVICES</StyledH3>
              <StyledP>
                The user herein agrees not to replicate, duplicate, copy, trade,
                sell, resell nor exploit for any commercial reason any part, use
                of, or access to <a href="/">https://www.cmbaconsulting.ca</a>{" "}
                sites.
              </StyledP>
              <StyledH3>LIMITATIONS OF LIABILITY</StyledH3>
              <StyledP>
                You explicitly acknowledge, understand and agree that
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>and our
                subsidiaries, affiliates, officers, employees, agents, partners
                and licensors shall not be liable to you for any punitive,
                indirect, incidental, special, consequential or exemplary
                damages, including, but not limited to, damages which may be
                related to the loss of any profits, goodwill, use, data and/or
                other intangible losses, even though we may have been advised of
                such possibility that said damages may occur, and result from:
              </StyledP>
              <ol type="a">
                <li>The use or inability to use our service</li>
                <li>The cost of procuring substitute goods and services.</li>
                <li>
                  Unauthorized access to or the alternation of your
                  transmissions and/or data.
                </li>
                <li>
                  Statements or conduct of any such third party on our service.
                </li>
                <li>Any other matter which may be related to our service.</li>
              </ol>
              <StyledH3>RELEASE</StyledH3>
              <StyledP>
                In the even you have a dispute, you agree to release
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>(and its
                officers, directors, employees, agents, affiliates, partners and
                any other third parties) from claims, demands and damages
                (actual and consequential) of every kin and nature, known and
                unknown, suspected or unsuspected, disclosed and undisclosed,
                arising out of or in any way connected to such dispute.
              </StyledP>
              <StyledH3>VIOLATIONS</StyledH3>
              <StyledP>
                Please report any and all violation of this TOS to
                <StyledBold> Chika Mba Consulting Inc. </StyledBold>as follows:
              </StyledP>
              <StyledList>
                <li>Telephone: 613-663-4768</li>
                <li>Email: info@cmbaconsulting.ca</li>
              </StyledList>
            </StyledText>
          </CenterContent>
        </Segment>
      </Transition>
    </Layout>
  )
}
