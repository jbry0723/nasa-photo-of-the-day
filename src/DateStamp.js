import React from "react";
import styled,{keyframes} from 'styled-components'

const kf=keyframes`
100%{
    opacity: 1;
}
`

const DateStampDiv=styled.div`
opacity: 0;
animation: ${kf} 3.5s ease-in-out forwards;
color: ${pr=>pr.theme.mainTextColor};
margin: 2rem 0rem 0rem 0rem;
font-size:1.5rem;
text-shadow: -5px 4px #190a1c;
text-align: center;

h1{
    font-size: 1rem;
}
p{
    margin:0rem
}

`

const DateStamp=(props)=>{
    const{imgData}=props

    return(
        <DateStampDiv>
        <h1>NASA's Photo of the Day for:</h1>
        <p>{imgData.date} </p>
        </DateStampDiv>
    )
}
    export default DateStamp