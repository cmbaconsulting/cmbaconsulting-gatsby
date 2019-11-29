import React from "react"
import { Segment, Header, Input } from "semantic-ui-react"

export default () => {
  return (
    <Segment
      compact
      style={{
        padding: "4em",
        margin: "0 auto",
      }}
      raised
      secondary
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
  )
}
