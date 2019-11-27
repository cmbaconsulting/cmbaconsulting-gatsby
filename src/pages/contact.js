import React, { useState } from "react"
import axios from "axios"
import creds from "../config"
import "semantic-ui-css/semantic.min.css"
import { Form, Segment, Header, Container } from "semantic-ui-react"
import { navigate } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
      data: { creds, name, email, message },
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
        alert("Message failed to send:\n\n" + err.response.data.message)
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
        <Segment
          vertical
          basic
          padded
          style={{
            paddingTop: "6em",
            width: "55em",
          }}
        >
          <Header
            as="h1"
            style={{ fontSize: "4em", color: "#084166", textAlign: "center" }}
          >
            Contact Us
          </Header>
          <Form
            size="huge"
            id="contact-form"
            onSubmit={handleSubmit}
            style={{ padding: "1em 1em 3em 1em" }}
          >
            <Form.Input
              type="text"
              fluid
              required
              label="Name"
              id="name"
              value={name}
              onChange={e => changeName(e.target.value)}
            />
            <Form.Input
              type="email"
              label="Email address"
              required
              id="email"
              value={email}
              onChange={e => changeEmail(e.target.value)}
            />
            <Form.TextArea
              rows="5"
              required
              label="Message"
              id="message"
              value={message}
              onChange={e => changeMessage(e.target.value)}
            />
            <Form.Button
              size="large"
              primary
              disabled={loading}
              loading={loading}
            >
              Submit
            </Form.Button>
          </Form>
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