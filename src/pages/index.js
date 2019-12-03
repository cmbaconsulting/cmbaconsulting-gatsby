import React from "react"
import { Link } from "gatsby"
import "semantic-ui-css/semantic.min.css"
import {
  Container,
  Grid,
  Segment,
  Button,
  Divider,
  Icon,
  Transition,
} from "semantic-ui-react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const StyledH1 = styled.h1`
  color: #084166;
  font-size: 2.2em;
`
const StyledH2 = styled.h2`
  color: #084166;
  font-size: 1.6em;
`

const StyledH3 = styled.h3`
  color: #084166;
  font-size: 1.5em;
`

const StyledDivider = styled(Divider)`
  &&& {
    padding-top: 3em;
  }
`

const StyledParagraph = styled.p`
  font-size: 1.2em;
  padding-bottom: 1em;
  font-family: "Source Sans Pro";
`

const StyledGridContainer = styled(Container)`
  &&& {
    width: 27em;
    margin: 0 auto;
    padding: 3em 0em;
  }
`

export default () => {
  return (
    <Layout>
      <SEO
        title="Home"
        description="At Chika Mba Consulting Inc., our industry-leading expertise and customer-centric approach is what makes us easier to do business with."
      />
      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment basic vertical>
          <Container>
            <StyledH1>Solutions & Services Focused to Meet Your Needs</StyledH1>
            <StyledParagraph>
              At Chika Mba Consulting Inc., knowledge fuels strategy and
              knowledge is power. Our industry-leading expertise &
              customer-centric approach is what makes us easier to do business
              with. We help you evolve and make informed decisions with
              technology. We will ensure dexterity and scalability for future
              technological advances.
            </StyledParagraph>
            <Button as={Link} to="/about" color="blue" size="large">
              Read More
            </Button>
          </Container>
        </Segment>
      </Transition>
      <Transition
        mountOnShow={false}
        transitionOnMount
        animation="fade up"
        duration={1000}
      >
        <Segment textAlign="center" vertical>
          <StyledDivider className="header" horizontal>
            <StyledH2>Why Choose Us?</StyledH2>
          </StyledDivider>
          <Grid
            celled="internally"
            columns="equal"
            stackable
            verticalAlign="middle"
          >
            <Grid.Column>
              <StyledGridContainer>
                <Icon
                  inverted
                  circular
                  color="blue"
                  name="dollar sign"
                  size="large"
                />
                <StyledH3>Competitive Pricing</StyledH3>
                <StyledParagraph>
                  With our direct sourcing capabilities, we're able to provide
                  you with the best of both, pricing & service!
                </StyledParagraph>
              </StyledGridContainer>
            </Grid.Column>
            <Grid.Column>
              <StyledGridContainer>
                <Icon inverted circular color="blue" name="list" size="large" />
                <StyledH3>Great Selection</StyledH3>
                <StyledParagraph>
                  With our expanded line of products, we're able to provide you
                  with a one-stop shop for all your needs.
                </StyledParagraph>
              </StyledGridContainer>
            </Grid.Column>

            <Grid.Column>
              <StyledGridContainer>
                <Icon
                  inverted
                  circular
                  color="blue"
                  name="add user"
                  size="large"
                />
                <StyledH3>Expert Advice</StyledH3>
                <StyledParagraph>
                  If you have a question, we'll get you the answer quick & easy.
                  Live Chat, Email & Telephone.
                </StyledParagraph>
              </StyledGridContainer>
            </Grid.Column>
          </Grid>
        </Segment>
      </Transition>
    </Layout>
  )
}
