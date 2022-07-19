import Quiz from './quiz';
import Shop from './shop';
import Order from './order';
import Navbar from './navbar';
import logo from './logo.png';
import coffee from './coffee.png';
import './home.css';

const Home  = () => {
    return ( 
        <div class ="Home">
            <h1>Beanz</h1>
            <h2>Get coffee in the comfort of your own home without ever having to leave</h2>
            <h2>Working from home? No Problem</h2>
            <img src={coffee} width= "450px" height="450px" alt="coffee"></img>
            
            <h2>Hours: We never close!</h2> 
            <h2>Location: 12 Road, Ottawa, ON CA</h2> 
            <h2>Phone Number: 222-222-222</h2>
        </div>
     );
}
 
export default Home;