import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Container,
  Menu,
  Segment,
  Sidebar,
  Responsive,
  Image,
  Visibility,
} from "semantic-ui-react"
import _ from "lodash"
import { navigate } from "@reach/router"
import logo from "../../images/logo.png"
import Footer from "./mobileFooter"

const DesktopContainer = props => {
  const [fixed, showFixedMenu] = useState(false)

  const { children, getWidth, items } = props

  return (
    <Responsive getWidth={getWidth} maxWidth={Responsive.onlyMobile.maxWidth}>
      <Segment vertical basic style={{ padding: 20 }}>
        <Image
          src={logo}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
          size="large"
          centered
          alt="Chika Mba Consulting Inc"
        />
      </Segment>
      <Visibility
        once={false}
        onTopPassed={() => {
          showFixedMenu(true)
        }}
        onTopPassedReverse={() => {
          showFixedMenu(false)
        }}
      >
        <Segment
          vertical
          inverted
          basic
          style={{ padding: 0, backgroundColor: "#084166" }}
        >
          <Menu
            fixed={fixed ? "top" : null}
            inverted
            borderless
            size="massive"
            widths={3}
            style={{ backgroundColor: "#084166" }}
          >
            <Container>
              {_.map(items, item => (
                <Menu.Item
                  as={Link}
                  style={{
                    paddingBottom: 16.571,
                    paddingLeft: 50,
                    paddingRight: 50,
                  }}
                  activeStyle={{ backgroundColor: "#2d5d7d" }}
                  {...item}
                />
              ))}
            </Container>
          </Menu>
        </Segment>
      </Visibility>
      {/* Sidebar Component */}
      <Sidebar.Pushable style={{ minHeight: 641, marginTop: fixed ? 50 : 0 }}>
        {/* <Sidebar
          as={Menu}
          animation="overlay"
          color="blue"
          direction="right"
          inverted
          borderless
          size="large"
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          {_.map(sidebarItems, item => (
            <Menu.Item
              onClick={handleSidebarHide}
              as={Link}
              style={sidebarStyle}
              {...item}
            />
          ))}
        </Sidebar> */}
        <Sidebar.Pusher style={{ paddingBottom: "3em", paddingTop: "4em" }}>
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      <Footer />
    </Responsive>
  )
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
  getWidth: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSidebarHide: PropTypes.func.isRequired,
  handleToggle: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool,
}
export default DesktopContainer
