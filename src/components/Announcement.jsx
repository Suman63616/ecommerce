import styled from "styled-components";

const Container=styled.div`
height: 30px;
background-color: teal;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 500;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal! free Shipping on Orders Over 500 Rs
    </Container>
  )
}

export default Announcement