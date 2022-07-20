import Navbar from './navbar';
import './quiz.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Quiz = () => {
    const [Value1, setv1] = useState('Hot');
    const [Value2, setv2] = useState('Cold');
    const [Value3, setv3] = useState('Warm');
    const history = useHistory();
    
    const handleClick = (Value1) => {
        if(Value1 == 'Hot') {
            console.log('here');
           setv1('Dairy Milk'); 
           setv2('Milk Oat'); 
           setv3('Almond Milk'); 
        } else if (Value1 == 'Dairy Milk') {
            setv1('Strong'); 
            setv2('Weak'); 
            setv3('Neither');  
        } else {
            history.push("/quizresults");
        }
        
    }

    return ( 
        
    <div class = "Quiz">
    <div class ="content">
    <h1>Beanz Quiz</h1>
    </div>
    
    <div class = "quiz-content">
            <div class = "quiz">
                <h2>Do you prefer warm or cold drinks?</h2>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">{Value1}</label>
                </div> 
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">{Value2}</label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">{Value3}</label>
                </div>

                <div class="button-class">
                    <button type="button" class="btn btn-secondary" onClick={() => handleClick(Value1)}>Next</button>
                </div>
            
            </div>
        </div>
        </div>

     );
}
 
export default Quiz;