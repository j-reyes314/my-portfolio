// import GitHubButton from "react-github-button"
import { useState } from 'react';
import GitHubButton from 'react-github-btn'
import './contact.css';

export default function Contact(props) {
    const [show, setShow] = useState('snackbar');
    const [inputs,setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit (event) {
        event.preventDefault()

        

        // setShow('snackbar show');

        // setTimeout(setShow('snackbar'), 3000);

        alert('Message sent!')
        setInputs({});
    }
    return (
        <>
            <div style={{textAlign:'left'}}>
                <h1 style={{color: "black", textAlign: 'left'}}>Contact me</h1>
                <p style={{fontSize: '2em'}}>I'd love to meet you. Why not send an email?</p>
            </div>


            <form action="" onSubmit={handleSubmit}>
                <div className ='row input-container'>

                    <div className='styled-input wide'>
                        <input type="text" name='name' value={inputs.name || ''} onChange={handleChange} required/>
                        <label>Name</label>
                    </div>

                    <div className='styled-input' style={{paddingRight: '1em'}}>
                        <input  type="text" name ="email" value={inputs.email || ''} onChange={handleChange} required/>
                        <label>Email</label>
                    </div>

                    <div className='styled-input'>
                        <input style={{marginLeft: '3em'}} type="text" name= "subject" value={inputs.subject || ''} onChange={handleChange} required/>
                        <label style={{marginLeft: '3em'}}>Subject</label>
                    </div>

                    <div className='styled-input wide'>
                        <textarea type="text" name= "message" value={inputs.message || ''} onChange={handleChange} required/>
                        <label>Message</label>
                    </div>

                    <div className='styled-input wide btn'>
                        <input type="submit" value="submit" />
                    </div>

                </div>
            </form>

            <div className ={show}>Message sent!</div>



            {/* <GitHubButton href="https://github.com/j-reyes314"></GitHubButton> */}
        </>
    )
}