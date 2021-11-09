// import GitHubButton from "react-github-button"
import GitHubButton from 'react-github-btn'

export default function Contact(props) {
    return (
        <>
            <h5 style={{color: "black"}}>Say hello!</h5>
            <form action="">
                <input type="text" name="name" placeholder ="Name"/>
                <input type="text" name ="email" placeholder ="Email"/>
                <input type="text" name= "subject" placeholder ="Subject"/>
                <textarea type="text" name= "message" placeholder ="Message"/>
                <input type="submit" value="submit" placeholder ="Submit"/>
            </form>



            <GitHubButton href="https://github.com/j-reyes314">Follow me!</GitHubButton>
        </>
    )
}