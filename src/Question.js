import "./App.css"
const Question=(props)=>{
return(
<div className="container" id={props.number}>
<b><h3>{props.number}:Question</h3></b>
<p>{props.question}</p>
<input type="radio" name={props.number} id= "answer1"/>{props.option1}<br/>
<input type="radio" name={props.number}id="answer2" />{props.option2}<br/>
<input type="radio" name={props.number} id="answer3" />{props.option3}<br/>
<input type="radio" name={props.number} id="answer4"/>{props.option4}<br/>
<p id={props.paragraphNumber} className="status"></p>
</div>
)
}
export default  Question