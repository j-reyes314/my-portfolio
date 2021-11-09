import './ProjectCard.css'

export default function ProjectCard (props) {
    return (
        <>
            <div className ="card">
                <p className="slogan">{props.message}</p>
            </div>
        </>
    )
}