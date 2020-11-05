import React from "react";

const ExplainationBox=(props)=>{
    const {imgData}=props

    return (
        <div>
            <p>{imgData.explanation}</p>
        </div>
    )
}

export default ExplainationBox