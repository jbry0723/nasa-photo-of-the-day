import React from "react";

const TitleDateBar=(props)=>{
const{imgData}=props


return (
    <div className='titleDateBar'>
        {imgData.title}
        <div>
            {imgData.date}
        </div>
    </div>
    
)
}

export default TitleDateBar