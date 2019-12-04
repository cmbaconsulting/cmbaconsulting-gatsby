import React from "react"
import { Link } from "gatsby"
import {
  Segment,
  Container,
  Grid,
  List,
  Icon,
  Responsive,
} from "semantic-ui-react"

export default props => {
  return (
    <Responsive
      getWidth={props.getWidth}
      minWidth={Responsive.onlyTablet.minWidth}
    >
      <Container
        fluid
        style={{
          bottom: 0,
          width: "100%",
        }}
      >
        <Segment
          inverted
          vertical
          textAlign="center"
          style={{
            padding: "1em 0em 0em 0em",
            backgroundColor: "#144b6e",
            marginTop: "5em",
          }}
        >
          <Container>
            <Grid
              divided
              inverted
              stackable
              verticalAlign="middle"
              columns="equal"
              padded
            >
              <Grid.Row style={{ padding: 0 }}>
                <Grid.Column>
                  <List divided horizontal inverted link size="large">
                    {/* <List.Item>
                  <Icon as={Image} src={icon} size="mini" />
                </List.Item> */}
                    <List.Item as={Link} to="/about">
                      About Us
                    </List.Item>
                    <List.Item as={Link} to="/contact">
                      Contact Us
                    </List.Item>
                    <List.Item as="a" href="#">
                      Terms & Conditions
                    </List.Item>
                    <List.Item as="a" href="#">
                      Privacy Policy
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row stlye={{ padding: 0 }}>
                <Grid.Column>
                  <Segment
                    disabled
                    basic
                    vertical
                    style={{ padding: 0, color: "white" }}
                  >
                    <Icon name="copyright outline"></Icon>
                    2019
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Container>
    </Responsive>
  )
}

const middleListStyle = { padding: "4px 0px", margin: "8px 0px" }
const bottomListStyle = { paddingTop: "4px", marginTop: "8px" }
const topListStyle = { paddingBottom: "4px", marginBottom: "8px" }
