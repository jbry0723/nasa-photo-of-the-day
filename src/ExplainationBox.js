import React from "react";
import styled,{keyframes} from 'styled-components'

const kf=keyframes`
100%{
    opacity: 1;
}
`

const ExplainationBoxDiv=styled.div`
opacity: 0;
animation: ${kf} 3.5s ease-in-out forwards;
background-color:${pr=>pr.theme.boxColor};
border-radius:${pr=>pr.theme.roundCorners};
box-shadow:${pr=>pr.theme.boxShadow};
margin: 2% 10% 2% 10%;
padding: 1rem 2rem;
font-size: 1.25rem;
font-family: "Verdana";
line-height: 1.5rem;
text-align:center;
`

const ExplainationBox=(props)=>{
    const {imgData}=props

    return (
        <ExplainationBoxDiv>
            <p>{imgData.explanation}</p>
        </ExplainationBoxDiv>
    )
}

export default ExplainationBox