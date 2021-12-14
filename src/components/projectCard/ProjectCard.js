import { useState } from 'react'
import './ProjectCard.css'

export default function ProjectCard (props) {

    const [clr,setClr] = useState(['rgb(48, 128, 74)','rgb(201, 152, 19)','rgb(240, 75, 10)'])
    return (
        <>
            {/* <a href={props.link} target = "_blank"  rel = "noopener noreferrer"> */}
            <div className='container'>
                <div className ="card" style={{backgroundColor: clr[props.clr]}}>
                    <a href={props.link} target = "_blank"  rel = "noopener noreferrer" style={{textDecoration: 'none'}}>
                        <p className="slogan" >{props.message}</p>
                    </a>
                </div>
            </div>
            {/* </a> */}
        </>
    )
}