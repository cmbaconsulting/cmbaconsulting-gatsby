import React, { useState, useEffect } from "react"
import {
  Segment,
  Header,
  Input,
  Transition,
  Visibility,
} from "semantic-ui-react"

export default () => {
  const [visible, toggleVisbility] = useState(false)

  useEffect(() => {
    toggleVisbility(true)
    return () => {
      toggleVisbility(false)
    }
  }, [])

  return (
    <Transition
      visible={visible}
      animation="fade up"
      duration={1000}
      mountOnShow={false}
    >
      <div>
        <Segment
          compact
          style={{
            padding: "4.5em 4em",
            margin: "0 auto",
          }}
          secondary
          raised
        >
          <Header
            textAlign="center"
            as="h3"
            style={{ fontSize: "1.5em", color: "#084166", fontWeight: "bold" }}
          >
            Subscribe to our newsletter
          </Header>
          <Input
            fluid
            action={{ content: "OK", color: "blue" }}
            placeholder="Email Address"
            size="big"
            style={{ width: "22em", fontSize: "1.3em" }}
          />
        </Segment>
      </div>
    </Transition>
  )
}
