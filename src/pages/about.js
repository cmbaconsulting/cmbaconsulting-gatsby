import React from "react"
import "semantic-ui-css/semantic.min.css"
import Layout from "../components/layout"
import { Segment, Container, Header, List, Transition } from "semantic-ui-react"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO title="About" url="/about" description="About the Company" />

      <Segment
        textAlign="center"
        style={{
          padding: "7em 0em 3.5em 0em", // Displacing due to menu transformation
          margin: "-6em auto 0em auto",
        }}
        stacked
        secondary
      >
        <Transition
          mountOnShow={false}
          transitionOnMount
          animation="fade up"
          duration={1000}
        >
          <Header
            as="h1"
            style={{
              fontSize: "4em",
              color: "#084166",
              textAlign: "center",
            }}
          >
            About the Company
          </Header>
        </Transition>
      </Segment>

      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment
          vertical
          basic
          padded
          style={{
            paddingTop: "4em",
          }}
        >
          <Container>
            <List bulleted divided size="massive" style={{ color: "#042337" }}>
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
            </List>
          </Container>
        </Segment>
      </Transition>
    </Layout>
  )
}
