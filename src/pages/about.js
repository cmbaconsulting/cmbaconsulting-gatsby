import React from "react"
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout"
import { Segment, Container, Header, List, Transition } from "semantic-ui-react"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledSegment = styled(Segment)`
  &&&& {
    padding: 7em 0em 3.5em 0em;
    margin: -6em 0em 3em 0em;
    color: #084166;
    text-align: center;
  }
  & h1 {
    font-size: 3.6em;
  }
`

const StyledList = styled(List)`
  &&& {
    color: #042337;
  }
`

export default () => {
  return (
    <Layout>
      <SEO title="About" url="/about" description="About the Company" />

      <StyledSegment textAlign="center" secondary>
        <Transition
          mountOnShow={false}
          transitionOnMount
          animation="fade up"
          duration={1000}
        >
          <h1>About the Company</h1>
        </Transition>
      </StyledSegment>

      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment vertical basic padded>
          <Container>
            <StyledList bulleted divided size="massive">
              <List.Item>
                We have been in business since 2005. We are bonded and insured.
              </List.Item>

              <List.Item>
                We specialize in IT healthcare technologies (for medical clinics
                and hospitals), and IT professional services for businesses.
              </List.Item>

              <List.Item>
                We supply all types of hardware and software solutions for an
                infrastructure.
              </List.Item>

              <List.Item>
                We provide technical services and consulting for a network
                infrastructure, servers, workstations, laptops, tablets, mobile
                devices, database support, disaster recovery planning, system
                migrations, network cabling and so much more.
              </List.Item>

              <List.Item>
                We offer project management, IT consulting and IT professional
                services for short or long-term projects.
              </List.Item>

              <List.Item>
                We also offer Cyber Security, Scalability Assessments, IT
                Compliance, Integration Services, and Assessment & Planning.
              </List.Item>
            </StyledList>
          </Container>
        </Segment>
      </Transition>
    </Layout>
  )
}
