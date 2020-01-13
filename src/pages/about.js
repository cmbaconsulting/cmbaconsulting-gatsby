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
    text-align: center;
  }
`

const StyledText = styled(Container)`
   {
    font-size: 1.25em;
  }
`

const Underline = styled.div`
  border-top: 3px dotted #799391;
  width: 40%;
  margin: 2em auto 1em auto;
`
const StyledHeader = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  letter-spacing: 0.3rem;

  h2 {
    font-size: 1.8em;
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
    max-width: 90%;
    margin-bottom: 2em;
    color: #222533;
  }
`
const StyledP2 = styled.p`
   {
    max-width: 90%;
    color: #222533;
    margin: initial;
  }
`
const StyledList = styled(List)`
  &&& {
    color: #222533;
    max-width: 80%;
  }

  &&&&& .item {
    padding: 0.7em 0em;
  }
`
const StyledBold = styled.b`
  color: #084166;
`
export default () => {
  return (
    <Layout>
      <SEO title="About" url="/about" description="About the Company" />

      <StyledSegment basic>
        <Transition
          mountOnShow={false}
          transitionOnMount
          animation="fade up"
          duration={1000}
        >
          <StyledHeader text>
            <h2>About the Company</h2>
            <Underline />
          </StyledHeader>
        </Transition>
      </StyledSegment>

      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment vertical basic padded>
          <StyledText>
            <CenterContent>
              <StyledP>
                <StyledBold>Chika Mba Consulting Inc.</StyledBold> is an IT
                consulting company that was originally established as a sole
                proprietorship in 2005 and incorporation in 2018. The
                information technology needs of our Customers are top priority.
                Our main objective is to service our clients with the best
                products and services that are available. Our team works closely
                with you providing cost analysis, cost effective and dependable
                solutions to meet your technology fulfillment and infrastructure
                related requirements.
              </StyledP>
              <StyledP2>
                <StyledBold>
                  Chika Mba Consulting Inc. offers the following:
                </StyledBold>
              </StyledP2>
              <StyledList bulleted divided>
                <List.Item>IT expertise for consumers</List.Item>

                <List.Item>
                  IT Scripting, revising, analyzing and supporting software to
                  meet specific requirements
                </List.Item>

                <List.Item>
                  Planning, design and integration of computer or network
                  systems
                </List.Item>

                <List.Item>On-site and remote IT management.</List.Item>

                <List.Item>
                  IT systems design, development, and integratio
                </List.Item>

                <List.Item>IT application design and development</List.Item>

                <List.Item>IT professional support services</List.Item>
                <List.Item>IT application design and development</List.Item>
                <List.Item>IT professional services</List.Item>
                <List.Item>IT consulting services</List.Item>

                {/* <List.Item>
                  We have been in business since 2005. We are bonded and
                  insured.
                </List.Item>

                <List.Item>
                  We specialize in IT healthcare technologies (for medical
                  clinics and hospitals), and IT professional services for
                  businesses.
                </List.Item>

                <List.Item>
                  We supply all types of hardware and software solutions for an
                  infrastructure.
                </List.Item>

                <List.Item>
                  We provide technical services and consulting for a network
                  infrastructure, servers, workstations, laptops, tablets,
                  mobile devices, database support, disaster recovery planning,
                  system migrations, network cabling and so much more.
                </List.Item>

                <List.Item>
                  We offer project management, IT consulting and IT professional
                  services for short or long-term projects.
                </List.Item>

                <List.Item>
                  We also offer Cyber Security, Scalability Assessments, IT
                  Compliance, Integration Services, and Assessment & Planning.
                </List.Item> */}
              </StyledList>
            </CenterContent>
          </StyledText>
        </Segment>
      </Transition>
    </Layout>
  )
}
