//GoogleLogo.js
import React from "react";

export default function BulletPoint({fill, width, height}) {
  return (
  
      <svg className="svgIcon-use" width={width} height={height} viewBox="0 0 35 35">
      <g fillRule="evenodd">
       <path fill={fill}
             transform="translate(16, 16)"
             d="M16,0A16,16,0,1,1,-16,0A16,16,0,1,1,16,0"
       />
      </g>
    </svg>
   );
}