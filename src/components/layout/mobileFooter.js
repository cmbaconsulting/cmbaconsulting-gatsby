import React from "react"
import { Link } from "gatsby"
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Input,
  Icon,
} from "semantic-ui-react"

export default () => {
  return (
    <Segment
      inverted
      vertical
      textAlign="center"
      style={{ padding: "2.3em 0em", backgroundColor: "#084166" }}
    >
      <Container style={{ fontSize: "1.14em" }}>
        <Grid
          divided
          inverted
          stackable
          verticalAlign="middle"
          columns="equal"
          padded="horizontally"
        >
          <Grid.Column computer={7} tablet={9}>
            <Header inverted as="h3" style={{ fontSize: "1.2em" }}>
              Subscribe to our newsletter
            </Header>
            <Input
              fluid
              action={"OK"}
              placeholder="Email Address"
              style={{ width: "20em", margin: "0 auto" }}
            />
          </Grid.Column>
          <Grid.Column>
            <List link inverted size="large">
              <List.Item as={Link} to="/about" style={topListStyle}>
                About Us
              </List.Item>
              <List.Item as={Link} to="/contact" style={middleListStyle}>
                Contact Us
              </List.Item>
              <List.Item as="a" href="#" style={middleListStyle}>
                Terms & Conditions
              </List.Item>
              <List.Item as="a" href="#" style={bottomListStyle}>
                Privacy Policy
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Icon disabled name="copyright outline">
              2019
            </Icon>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )
}

const middleListStyle = { padding: "4px 0px", margin: "8px 0px" }
const bottomListStyle = { paddingTop: "4px", marginTop: "8px" }
const topListStyle = { paddingBottom: "4px", marginBottom: "8px" }