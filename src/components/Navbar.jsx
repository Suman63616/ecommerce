import React from 'react'
import styled from 'styled-components'
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { Badge } from '@mui/material';
const Container = styled.div`
height:60px;
`

const Wrapper=styled.div`
  padding:10px 20px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;

const Language=styled.span`
font-size:14;
cursor:pointer;
`

const SearchContainer=styled.div`
border:0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`

const Input=styled.input`
border:none;
`;


const Center=styled.div`
text-align:center;
flex:1;`;

const Logo=styled.h1`
font-weight:bold;`;


const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

const MenuItem = styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;`
;

const Navbar = () => {
  return (

    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language> 
         <SearchContainer>
          <Input/>
          <SearchTwoToneIcon style={{color:"gray",fontSize:"16px"}}/>
        </SearchContainer>
      </Left>
      <Center><Logo>SUMAN.</Logo></Center>
      <Right>

        <MenuItem>REGISTER</MenuItem>
        <MenuItem>SIGN IN</MenuItem>
        <MenuItem>
        <Badge badgeContent={4} color="primary">
  <ShoppingCartTwoToneIcon/>
</Badge>
        </MenuItem>
      </Right>
      
      </Wrapper>
      </Container>
  )
}

export default Navbar