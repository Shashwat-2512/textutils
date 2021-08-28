import React from 'react'
export default function About(props) {

    return (
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h2 className="my-4">About us</h2>
            <div className="accordion" id="accordionExample" >
            <div className="accordion-item" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}}>
            <h2 className="accordion-header" id="headingOne">
             <button className="accordion-button" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyze your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
            Textutils gives you a way to analyze your text quickly and efficiently.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}}>
        <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
        </div>
        </div>
    </div>
    <div className="accordion-item" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}} >
        <h2 className="accordion-header" id="headingThree">
        <button className="accordion-button collapsed" type="button" style={{color: props.mode==='light'?'black':'white',backgroundColor:props.mode==='light'?'white':'#042743',border:props.mode==='dark'?'1px solid white':'1px solid black'}}  data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatibility</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div className="accordion-body">
        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
        </div>
        </div>
    </div>
    </div>
    </div>
    )
}
