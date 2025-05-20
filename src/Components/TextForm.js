import React , {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState("Enter Text Here") ; 

    const handleChange = (event) =>{
        setText(event.target.value)
    }

    const handleUpperClick = () => {
        setText(text.toUpperCase()) ;
    }

    const handleLowClick = () => {
        setText(text.toLowerCase()) ;
    }

    const handleSpeechClick = () => {
        let msg = new SpeechSynthesisUtterance() ;
        msg.text = text ;
        window.speechSynthesis.speak(msg) ;

    }

    const handleTitleClick =() => {
        setText(text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ")) ;
    }

    const handleClear = () => {
        setText("")
    }

    const handleCopyClick = () => {
        let text = document.getElementById("TextArea") ;
        text.select() ;
        text.setSelectionRange(0 ,9999) ;
        navigator.clipboard.writeText(text.value) ;
        console.log("Text copied")
    }
    return (
        <div>
            <div className="container my-4" style={{color : props.mode === 'light' ? 'black' : 'white'}}> 
                <h1 className='my-4'>{props.heading}</h1>
                <div className="mb-3 ">
                    <textarea className="form-control" id="TextArea" rows="8" value={text} onChange={handleChange} style={{backgroundcolor : props.mode === 'black' ? 'grey' : 'white'}}></textarea>
                </div>    
                <button className="btn btn-primary mx-3" onClick={handleUpperClick}>Convert to UpperCase</button> 
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" onClick={handleSpeechClick}>Get the Speech</button>
                <button className="btn btn-primary mx-3" onClick={handleTitleClick}>Convert to TitleCase</button>
                <button className="btn btn-primary mx-3" onClick={handleClear}>Clear Text</button> 
                <button className="btn btn-primary mx-3" onClick={handleCopyClick}>Copy to Clipboard</button>
            </div> 

            <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}> 
                <h1>Your Text Summary</h1> 
                <p>{ text.trim().length > 0 ? text.split(/\s+/).length : 0 } words and {text.length} letters</p> 
                <p> { 0.008 *(text.trim().length > 0 ? text.split(/\s+/).length : 0 )} Minutes to read</p> 
                <p>Text Preview</p> 
                <p>{text}</p> 
            </div>
        </div>  
        
    )
} 
