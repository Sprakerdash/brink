import styled from "styled-components"
import { a } from "@react-spring/web"

export const Glass = styled(a.div)`
  border-radius: 20px;
  background: rgb(9 67 109 / 25%);
  backdrop-filter: blur(4px);
  box-shadow: ${({ theme }) => theme.shadow.card};
  border: 1px solid #1ca2e7b8;
  /* height: 100vh; */
  padding: 1rem;
`
