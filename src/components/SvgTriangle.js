import React from "react";
import { motion } from 'framer-motion';


export default function SvgTriangle(){ 
    return(
        <motion.div animate={{x:80,y:20}} transition={{type:"tween", duration: 4}}>
        <svg className="triangle" width="486" height="444" viewBox="0 0 486 444" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
<rect width="394.767" height="319.845" transform="matrix(-0.927908 0.372809 0.372809 0.927908 366.308 0)" fill="url(#pattern3)"/>
<defs>
<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image0_26_21" transform="translate(-0.220188) scale(0.000750196 0.000925926)"/>
</pattern>
</defs>
</svg>
</motion.div>
    )
}