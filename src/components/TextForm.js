import React,{useState} from 'react'


export default function TextForm(props) {
    const [text,setText]=useState('Enter your text here')
    const  handleUpClick=() =>{
        console.log('Uppercase was clicked')
        let Uppercase=text.toUpperCase();
        setText(Uppercase);
        props.showAlert('success','Changed to Uppercase')
    }
    const handleLowClick=()=>
    {
        console.log('Lowercase was Clicked')
        let Lowercase=text.toLowerCase()
        setText(Lowercase)
        props.showAlert('success','Changed to Lowercase')
    }
    const handleSpaceClick=()=>
    {
        console.log('Remove space was Clicked')
        let newText=text.split(/[ ]+/).join(" ")
        setText(newText)
        props.showAlert('success','Extra spaces removed')
    }
    const handleClearClick=()=>
    {
        console.log('Clear Text was Clicked')
        let newText=""
        setText(newText)
        props.showAlert('success','Cleared')
    }
    const handleCopyClick=()=>
    {
        var text =document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('success','Copied to Clipboard')

    }
    const handleOnChange=(event)=>{
        console.log('On change')
        setText(event.target.value)
    }
    return (
        <div className="container">
    
    <div className="mb-3"style={{color: props.mode==='light'?'black':'white'}}>
            <h2>{props.heading}</h2>
            <textarea className="form-control"  value={text} style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'rgb(87 118 143)'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            <button disabled={text.length===0} type="button" className="btn btn-info mx-3 my-2 " onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0}type="button" className="btn btn-secondary mx-3 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled={text.length===0} type="button" className="btn btn-warning mx-3 my-2" onClick={handleSpaceClick}>Remove extra Space</button>
            <button  disabled={text.length===0} type="button" className="btn btn-danger mx-3 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-success mx-3 my-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
        <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h3>Preview</h3>
        <p>{text}</p>
        </div>
        
            
        </div>
    )
}
