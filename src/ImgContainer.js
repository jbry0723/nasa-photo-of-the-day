import React from "react";
import styled,{keyframes} from 'styled-components'

const ImgDiv=styled.div`
padding: 0rem;
border: 10px groove ${pr=>pr.theme.boxColor};
margin-top:2rem;
box-shadow:0px 3px #190a1c;
`

const ImgContainer=(props)=>{
    const {imgData}=props

    return (
        <ImgDiv>
            <img src={imgData.url}></img>
        </ImgDiv>
    )
}

export default ImgContainer