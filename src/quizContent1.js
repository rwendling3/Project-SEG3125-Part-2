import "./quiz.css";
import { Link } from 'react-router-dom';
import coffee from './coffee.png';
import { useHistory } from "react-router-dom";

const QuizContent1 = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/order");
    }
    return ( 
        
    <div class = "Quiz">

    
    <div class = "quiz-content-inner">
            <div class = "quiz-values">
                <h2>We'd reccomend you get!</h2>
                <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Espresso</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onClick={handleClick}>Buy</button>
                          </div>
                        </div>
                </div>
            </div>
        </div>
        </div>

     );
}
export default QuizContent1;
 
