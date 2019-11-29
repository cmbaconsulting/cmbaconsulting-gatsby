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
import Footer from "./footer"

const DesktopContainer = props => {
  const [fixed, showFixedMenu] = useState(false)

  const { children, getWidth, items } = props

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onTopPassed={() => {
          showFixedMenu(true)
        }}
        onTopPassedReverse={() => {
          showFixedMenu(false)
        }}
      >
        <Menu
          style={{ backgroundColor: "white", opacity: 0.95 }}
          fixed="top"
          size="massive"
          borderless
          text
        >
          <Menu.Header style={{ padding: 20 }}>
            <Image
              src="./images/logo.png"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer", width: 325 }}
              size="medium"
              alt="Chika Mba Consulting Inc"
            />
          </Menu.Header>
          <Container>
            {_.map(items, item => (
              <Menu.Item
                position={item.key === "home" ? "right" : null}
                as={Link}
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                  fontSize: "1.1em",
                }}
                activeStyle={{ color: "#042337", fontWeight: "bold" }}
                {...item}
              />
            ))}
          </Container>
        </Menu>
      </Visibility>
      {/* Sidebar Component */}
      <Sidebar.Pushable style={{ minHeight: 641, marginTop: 146.25 }}>
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
        <Sidebar.Pusher style={{ paddingBottom: "30em" }}>
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
