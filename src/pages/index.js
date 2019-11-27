import React from "react"
import { Link } from "gatsby"
import "semantic-ui-css/semantic.min.css"
import {
  Container,
  Header,
  Grid,
  Segment,
  Button,
  Divider,
  Icon,
} from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="At Chika Mba Consulting Inc., our industry-leading expertise and customer-centric approach is what makes us easier to do business with."
      />
      <Segment basic style={{ paddingTop: "5.5em" }} vertical>
        <Container>
          <Header as="h1" style={{ fontSize: "2.8em", color: "#084166" }}>
            Solutions & Services Focused to Meet Your Needs
          </Header>
          <p style={{ fontSize: "1.33em", margin: "1em 0em 2em 0em" }}>
            At Chika Mba Consulting Inc., knowledge fuels strategy and knowledge
            is power. Our industry-leading expertise & customer-centric approach
            is what makes us easier to do business with. We help you evolve and
            make informed decisions with technology. We will ensure dexterity
            and scalability for future technological advances.
          </p>
          <Button as={Link} to="/about" color="blue" size="large">
            Read More
          </Button>
        </Container>
      </Segment>

      <Segment textAlign="center" vertical style={{ paddingBottom: "4em" }}>
        <Divider
          as="h2"
          className="header"
          horizontal
          style={{
            paddingTop: "1em",
            paddingBottom: "1em",
            fontSize: "2em",
          }}
        >
          <Header
            style={{
              color: "#084166",
            }}
          >
            Why Choose Us?
          </Header>
        </Divider>
        <Grid
          celled="internally"
          columns="equal"
          stackable
          verticalAlign="middle"
        >
          <Grid.Column>
            <Container style={gridStyle}>
              <Icon
                inverted
                circular
                color="blue"
                name="dollar sign"
                size="large"
                style={{ fontSize: "1.3em" }}
              />
              <Header as="h3" style={{ fontSize: "1.5em", color: "#084166" }}>
                Competitive Pricing
              </Header>
              <p>
                With our direct sourcing capabilities, we're able to provide you
                with the best of both, pricing & service!
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column>
            <Container style={gridStyle}>
              <Icon
                inverted
                circular
                color="blue"
                name="list"
                size="large"
                style={{ fontSize: "1.3em" }}
              />
              <Header as="h3" style={{ fontSize: "1.5em", color: "#084166" }}>
                Great Selection
              </Header>
              <p>
                With our expanded line of products, we're able to provide you
                with a one-stop shop for all your needs.
              </p>
            </Container>
          </Grid.Column>

          <Grid.Column>
            <Container style={gridStyle}>
              <Icon
                inverted
                circular
                color="blue"
                name="add user"
                size="large"
                style={{ fontSize: "1.3em" }}
              />
              <Header as="h3" style={{ fontSize: "1.5em", color: "#084166" }}>
                Expert Advice
              </Header>
              <p>
                If you have a question, we'll get you the answer quick & easy.
                Live Chat, Email & Telephone.
              </p>
            </Container>
          </Grid.Column>
        </Grid>
      </Segment>
    </Layout>
  )
}

const gridStyle = {
  fontSize: "1.33em",
  width: "27em",
  margin: "0 auto",
  paddingTop: "1.2em",
  paddingBottom: "2.7em",
}
