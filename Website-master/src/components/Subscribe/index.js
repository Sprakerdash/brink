import React from "react"
import styled, { keyframes } from "styled-components"
import Section from "../Section"

const Form = styled.form`
  width: 100%;
  font-size: 16px;
`
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5em 1.5em 0 0;
  width: 100%;
  min-width: 150px;

  @media only screen and (min-width: 568px) {
    width: calc(50% - 0.75em);
  }
`
const Label = styled.label`
  display: block;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.25em;
  margin: 0 0 1em 0;
  text-transform: uppercase;
  color: #09598d;
`
const Input = styled.input`
  appearance: none;
  background: rgba(9, 89, 141, 0.5);
  border: none;
  border-radius: 0;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 1em;
  text-decoration: none;
  width: 100%;
  height: 2.75em;
`

const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: inset 0 0 0 2px #09598d;
  color: #09598d;
  cursor: pointer;
  display: inline-block;
  font-size: 0.8em;
  font-weight: 600;
  height: 3.5em;
  letter-spacing: 0.25em;
  line-height: 3.5em;
  padding: 0 1.75em;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;

  margin: 1.5em 0;

  :hover {
    box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.blue};
  }
`
const Text = styled.p`
  color:${({ theme }) => theme.colors.text};
  margin: 0 0 2rem 0;
`
function Index() {
  return (
    <Section light offsetTop title="Subscribe" titleBg="Subscribe to us!">
      <Text>
        We’re just getting started. If you want to join our movement, sign up
        for our newsletter and get early bird access to Brink and keep up with
        our latest news.
      </Text>
      <Form>
        <Row>
          <InputContainer>
            <Label htmlFor="fname">First Name</Label>
            <Input type="text" name="fname" id="fname" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="lname">Last Name</Label>
            <Input type="text" name="lname" id="lname" />
          </InputContainer>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input type="text" name="email" id="email" />
          </InputContainer>
        </Row>

        <Button type="submit">Subscribe</Button>
      </Form>
    </Section>
  )
}

export default Index
