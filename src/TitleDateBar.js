import React from "react";
import styled,{keyframes} from 'styled-components'

const kf=keyframes`
100%{
    opacity: 1;
}
`

const StyledTitlebar=styled.div `
    opacity: 0;
    animation: ${kf} 3.5s ease-in-out forwards;
background-color:${pr=>pr.theme.boxColor};
border-radius:${pr=>pr.theme.roundCorners};
box-shadow:${pr=>pr.theme.boxShadow};
margin: 3rem 0rem 1rem 0rem;
padding-left:.5rem;
padding-right:.5rem;
width: 30%;
text-align:center;
font-family: "Times new Roman";

h1 {
color:black;
font-size:2.5rem;
}
`

const TitleDateBar=(props)=>{
const{imgData}=props


return (
    <StyledTitlebar>
        <h1>{imgData.title}</h1>
     
    </StyledTitlebar>
    
)
}

export default TitleDateBar