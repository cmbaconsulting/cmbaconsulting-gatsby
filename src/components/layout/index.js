import React, { Component } from "react"
import { Responsive } from "semantic-ui-react"
import DesktopContainer from "./desktopContainer"
import MobileContainer from "./mobileContainer"
import PropTypes from "prop-types"
import styled from "styled-components"
import Footer from "./desktopFooter"

const GlobalStyle = styled.div`
  &&&&& {
    font-family: "Source Sans Pro";
    position: relative;
    min-height: 100vh;
    letter-spacing: 0.05em;
    color: #201c1e;
  }
  html,
  body {
  }
`

let items = [
  {
    content: "Home",
    key: "home",
    to: "/",
  },
  { content: "About", key: "about", to: "/about" },
  {
    content: "Contact Us",
    key: "contact",
    to: "/contact",
  },
]

const getWidth = () => {
  const isSSR = typeof window === "undefined"

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class ResponsiveContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, activeTab, setActiveTab } = this.props
    const { sidebarOpened } = this.state

    const containerProps = {
      getWidth: getWidth,
      items: items,
      handleSidebarHide: this.handleSidebarHide,
      handleToggle: this.handleToggle,
      sidebarOpened: sidebarOpened,
      setActiveTab: setActiveTab,
      activeTab: activeTab,
    }

    return (
      <GlobalStyle>
        <DesktopContainer {...containerProps}>{children}</DesktopContainer>
        <MobileContainer {...containerProps}>{children}</MobileContainer>

        <Footer getWidth={containerProps.getWidth} />
      </GlobalStyle>
    )
  }
}

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer
