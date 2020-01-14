import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Container, Menu, Responsive, Visibility } from "semantic-ui-react"
import _ from "lodash"
import { navigate } from "@reach/router"
import logo from "../../images/logo.png"
import Subscribe from "./subscribe"
import styled from "styled-components"

const StyledLogo = styled.img`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: ${props => (props.topPassed ? "250px" : "351px")};
  padding: 1.5% 0%;
`

const StyledMenu = styled(Menu)`
  &&&&&&& a {
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 30px;
    margin-right: 30px;
    font-size: 1.05em;
    font-weight: bold;
    opacity: 0.66;
  }
  &&& > div.menuItems > a:hover {
    background-color: white;
    color: #084166;
    opacity: 1;
  }
`

const Body = styled.div`
  min-height: 100vh;
  margin-top: 4.5em;
  padding-bottom: 4.5em;
  padding-top: 7.5em;
`

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
        offset={[60, 0]}
      >
        <StyledMenu secondary={!topPassed} fixed="top" size="huge" borderless>
          <Container className="menuItems">
            <Menu.Header>
              <StyledLogo
                src={logo}
                onClick={() => navigate("/")}
                alt="Chika Mba Consulting Inc"
                topPassed={topPassed}
              />
            </Menu.Header>

            {_.map(items, item => (
              <Menu.Item
                position={item.key === "home" ? "right" : null}
                as={Link}
                activeStyle={{
                  color: "#084166",
                  opacity: 1,
                }}
                {...item}
              />
            ))}
          </Container>
        </StyledMenu>

        <Body>{children}</Body>
        {/*
        <Sidebar.Pushable
          style={{
            marginTop: 70,
          }}
        >
          <Sidebar
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
        </Sidebar>
          <Sidebar.Pusher
            style={{
              paddingBottom: "33em",
              paddingTop: "7.5em",
            }}
          >
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable> */}
      </Visibility>
      <Subscribe />
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
