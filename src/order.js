import Navbar from './navbar';
import './order.css';

const Order = () => {
    return ( 
        <div class="Order">
                <div class ="content">
                    <h1>Coffee Order</h1>
                </div>


                <div class = "order-content">
                    <div class = "order">

                        <div class = "steps">
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle active-circle" onclick=" window.location.href = '/project2SEG3125/html/order.html'">  Step 1</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" onclick=" window.location.href = '/project2SEG3125/html/order.html'">  Step 2</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" onclick=" window.location.href = '/project2SEG3125/html/order.html'">  Step 3</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" onclick=" window.location.href = '/project2SEG3125/html/order.html'">  Step 4</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" onclick=" window.location.href = '/project2SEG3125/html/order.html'">  Step 5</button>
                            </div>
                
                        </div>

                        <h2>Personal Information</h2>
                        
                        <input type="text" class="form-control" placeholder="Name"></input>
                        <input type="text" class="form-control" placeholder="Phone Number"></input>
                        <input type="text" class="form-control" placeholder="Email"></input>
            
                        <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/confirmation.html'">  Submit</button>
                        </div>
                    
                    </div>
                </div>
        </div>
     );
}
 
export default Order;