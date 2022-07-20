import './FAQ.css';

const FAQ = () => {
    return ( 
        <div class = "FAQ">  
        <div class="content"> 
        <h1>FAQ</h1>
        <h2>How soon will you order be delivered?</h2>
        <h3>Within 20-30 minutes of your order depending on your location.</h3>
        <h2>What if I'm unhappy with my  order?</h2>
        <h3>Your order with be 100% refunded</h3>
        <h2>How soon will you order be delivered?</h2>
        <h3>Within 20-30 minutes of your order depending on your location.</h3>
        <h2>Does any time really mean any time? </h2>
        <h3>Yes!</h3>
        <h2>Feedback?</h2>
        <input type="text" class="form-control" placeholder="Feedback"></input>
            
            <div class="button-class">
                <button type="button" class="btn btn-secondary">Submit</button>
            </div>
        </div>
        </div>
     );
}
 
export default FAQ ;