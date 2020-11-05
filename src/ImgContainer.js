import React from "react";

const ImgContainer=(props)=>{
    const {imgData}=props

    return (
        <div>
            <img src={imgData.url}></img>
        </div>
    )
}

export default ImgContainer