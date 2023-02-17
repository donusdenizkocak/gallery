import React from "react";

const Picture =({src, photographer}) => {
    return(
        <div>
            <img src={src} style={{width:"250px"}} alt="img" />
            <h2>{photographer}</h2>
        </div>
    )
}

export default Picture;