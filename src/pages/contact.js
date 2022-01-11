import React from "react"
import styled from "styled-components"
import Section from "../components/Section"
import Layout from "../components/layout"

const Container = styled.div`
  h3 {
    font-size: 2rem;
    color: #fff;
    text-align: center;
    margin: 0 0 3rem 0;
  }
`
const Form = styled.form`
  font-size: 16px;
  width: 100%;
  /* ${({ theme }) => theme.sizes.md}{
    width: 60%;
  } */
`
const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media only screen and (min-width: 568px) {
    flex-direction: row;
  }
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1.5em 1.5em 0 0;
  width: 100%;
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
  color: #fff;
`
const Input = styled.input`
  appearance: none;
  background: rgba(255, 255, 255, 0.8);
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
const Select = styled.select`
  appearance: none;
  background: rgba(255, 255, 255, 0.8);
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
const TextArea = styled.textarea`
  padding: 0.75em 1em;
  appearance: none;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 0;
  color: inherit;
  display: block;
  outline: 0;
  text-decoration: none;
  width: 100%;
  line-height: 1.65;
`
const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: inset 0 0 0 2px #fff;
  color: #fff;
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
function Contact() {
  return (
    <Layout title="Contact us" lightFooter>
      <Section
        style={{ paddingTop: "10rem" }}
        title="Contact us"
        titleBg="Contact us"
      >
        <Container>
          <h3>
            Fill out your information and let us know how we can build Brink
            together. We read all inquiries and will respond within 1-2 working
            days.
          </h3>
          <Form>
            <Row>
              <InputContainer>
                <Label htmlFor="name">Name</Label>
                <Input type="text" name="name" id="name" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="email">Email</Label>
                <Input type="text" name="email" id="email" />
              </InputContainer>
            </Row>
            <Row>
              <InputContainer>
                <Label htmlFor="subject">Subject</Label>
                <Input type="text" name="subject" id="subject" />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="reason">Reason for contact</Label>
                <Select name="reason" id="reason">
                  <option value="Partnership">Partnership</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Support">Support</option>
                  <option value="General">General</option>
                </Select>
              </InputContainer>
            </Row>
            <InputContainer style={{ width: "100%" }}>
              <Label htmlFor="message">Message</Label>
              <TextArea rows="6" name="message" id="message" />
            </InputContainer>
            <Button type="submit">Send</Button>
          </Form>
        </Container>
      </Section>
    </Layout>
  )
}

export default Contact
