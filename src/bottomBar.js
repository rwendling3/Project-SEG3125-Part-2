import Quiz from './quiz';
import Shop from './shop';
import Order from './order';
import Confirmation from './confirmation';
import './navbar.css';

const NavbarBottom = () => {
    return (  
        <div class="Nav">
        <nav class="navbar-bottom navbar-light">
        <div class = "info-navbar">
        <h3 class = "call">Call 222-222-222</h3>
        <h3 class = "location">Located at 12 Road, Ottawa, ON CA</h3>
        <h3 class = "hours">We never close!</h3>
        </div>
        </nav>
        </div>
    );
}
 
export default NavbarBottom;