import Navbar from './navbar';
import './quiz.css';

const Quiz = () => {
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
                    <label class="form-check-label" for="flexRadioDefault1">Warm</label>
                </div> 
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Cold</label>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
                    <label class="form-check-label" for="flexRadioDefault1">Both</label>
                </div>

                <div class="button-class">
                    <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/index.html'">Next</button>
                </div>
            
            </div>
        </div>
        </div>

     );
}
 
export default Quiz;