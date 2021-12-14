import './ProjectCard.css'

export default function ProjectCard (props) {

    return (
        <>
            {/* <a href={props.link} target = "_blank"  rel = "noopener noreferrer"> */}
                <div className ="card">
                <a href={props.link} target = "_blank"  rel = "noopener noreferrer" style={{textDecoration: 'none'}}>
                    <p className="slogan" >{props.message}</p>
                    </a>
                </div>
            {/* </a> */}
        </>
    )
}