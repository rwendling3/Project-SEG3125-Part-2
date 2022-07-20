import Quiz from './quiz';
import Shop from './shop';
import Order from './order';
import Confirmation from './confirmation';
import './navbar.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <div class="Nav">
            <nav class="navbar navbar-dark">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <img src={logo} width= "100px" height="100px" alt="logo"></img>

            </nav><div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link class="nav-item" to= "/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item" to="/shop">Shop</Link>
                        </li>
                        <li class="nav-item active">
                            <Link class="nav-item-active" to="/order">Order</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item" to="/quiz">Coffee Quiz</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-item" to="/FAQ">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
}
 
export default Navbar;