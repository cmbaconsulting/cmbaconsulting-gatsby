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
import Footer from "./footer"

const DesktopContainer = props => {
  const [topPassed, topPassedToggle] = useState(false)

  const { children, getWidth, items } = props

  return (
    <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onTopPassed={() => {
          topPassedToggle(true)
        }}
        onTopPassedReverse={() => {
          topPassedToggle(false)
        }}
        offset={[100, 0]}
      >
        <Menu
          style={{
            backgroundColor: "white",
            transition: "all .3s ease-in-out",
          }}
          fixed="top"
          size="massive"
          borderless
          pointing
        >
          <Container>
            <Menu.Header style={{ padding: "1.5% 0%" }}>
              <Image
                src={logo}
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
                  transition: "all .3s ease-in-out",
                  height: topPassed ? 100 : 133,
                }}
                alt="Chika Mba Consulting Inc"
              />
            </Menu.Header>

            {_.map(items, item => (
              <Menu.Item
                position={item.key === "home" ? "right" : null}
                as={Link}
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                  fontSize: "1.07em",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  opacity: 0.6,
                }}
                activeStyle={{
                  color: "#042337",
                  opacity: 1,
                }}
                {...item}
              />
            ))}
          </Container>
        </Menu>

        {/* Sidebar Component */}
        <Sidebar.Pushable
          style={{
            minHeight: 641,
            marginTop: 135.26,
          }}
        >
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
          <Sidebar.Pusher
            style={{
              paddingBottom: "33em",
              paddingTop: "6em",
            }}
          >
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Visibility>
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
