import React, { useState } from "react"
import axios from "axios"
import "semantic-ui-css/semantic.min.css"
import { Form, Segment, Header, Container, Transition } from "semantic-ui-react"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
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
  width: 7em;
  margin: 2em auto 2em auto;
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
const StyledForm = styled(Form)`
  &&& {
    min-width: 300px;
  }
  &&&&& > * {
    margin: 0em 0em 1.5em 0em;
  }
`
export default () => {
  const [name, changeName] = useState("")
  const [email, changeEmail] = useState("")
  const [message, changeMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const resetForm = () => {
    changeName("")
    changeEmail("")
    changeMessage("")
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios({
      method: "POST",
      url: "https://chika-mba-mailer.herokuapp.com/send",
      data: { name, email, message },
    })
      .then(response => {
        console.log(response.data)
        if (response.data.message === "success") {
          if (typeof window !== `undefined`) {
            resetForm()
            alert("Message Sent.")
            setLoading(false)
            navigate("/")
          }
        } else if (response.data.message === "fail") {
          if (typeof window !== `undefined`) {
            alert("Message failed to send.")
            setLoading(false)
          }
        }
      })
      .catch(err => {
        console.log(err)
        alert(
          "Message failed to send:\n\n" + err.response
            ? err.response.data.message
            : err
        )
        setLoading(false)
      })
  }
  return (
    <Layout>
      <SEO
        title="Contact Us"
        url="/contact"
        description="E-mail any inquiries to info@cmbaconsulting.ca using the contact form"
      />

      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Segment vertical basic>
          <Transition
            mountOnShow={false}
            animation="fade up"
            duration={1500}
            transitionOnMount
          >
            <StyledSegment basic>
              <Transition
                mountOnShow={false}
                transitionOnMount
                animation="fade up"
                duration={1000}
              >
                <StyledHeader text>
                  <h2>Contact</h2>
                  <Underline />
                </StyledHeader>
              </Transition>
            </StyledSegment>
          </Transition>
          <Transition
            mountOnShow={false}
            transitionOnMount
            animation="fade up"
            duration={1000}
          >
            <StyledForm size="large" id="contact-form" onSubmit={handleSubmit}>
              <Form.Input
                type="text"
                required
                placeholder="Name"
                id="name"
                value={name}
                onChange={e => changeName(e.target.value)}
              />
              <Form.Input
                type="email"
                placeholder="Email address"
                required
                id="email"
                value={email}
                onChange={e => changeEmail(e.target.value)}
              />
              <Form.TextArea
                rows="5"
                required
                placeholder="Message"
                id="message"
                value={message}
                onChange={e => changeMessage(e.target.value)}
              />
              <Form.Button
                size="large"
                style={{ width: "50%", margin: "0 auto" }}
                fluid
                primary
                disabled={loading}
                loading={loading}
              >
                Submit
              </Form.Button>
            </StyledForm>
          </Transition>
        </Segment>
      </Container>
    </Layout>
  )
}

// GraphQL query implementation
// const query = `mutation SendEmail($service: String!,
//   $user: String!,
//   $password: String!,
//   $name: String!,
//   $email: String!,
//   $message: String!) {
//     sendEmail(
//       service: $service,
//       user: $user,
//       password: $password,
//       name: $name,
//       email: $email,
//       message: $message
//   ){ message }}
//   `
