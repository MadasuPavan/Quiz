
import './App.css';
import Question from './Question.js'
import Submit from './Submit.js'

function App() {
  return (
  <div>
      <div id="head"><img src="./images/java.png"/><h1>JAVA QUIZ</h1></div>
      <Question number="1" question="which is fast among the following programming languages" option1="java" option2="python" option3="c" option4="javascript"  paragraphNumber="pr1" />
      <Question number="2" question="Java doesn't support?" option1="single Inheritance" option2="multiple Inheritance" option3="multilevel Inheritance" option4="Heirarchical Inheritance" paragraphNumber="pr2" />
      <Question number="3" question="Java is a ___________" option1="Platform Independent" option2="simple" option3="Robust" option4="All the above"paragraphNumber="pr3"/>
      <Question number="4" question="which of the following is not a keyword in java" option1="this" option2="break" option3="int" option4="mat"paragraphNumber="pr4"/>
      <Question number="5" question="To use the Scanner class, which package should imported?" option1="util" option2="lang" option3="awt" option4="none"paragraphNumber="pr5"/>
      <Submit/>
    </div>  
  );
}

export default App;
