import Navbar from './navbar';
import './order.css';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Order = () => {
    const [Title, settitle] = useState('Personal Information');
    const [Value1, setv1] = useState('Name');
    const [Value2, setv2] = useState('Phone Number');
    const [Value3, setv3] = useState('Email');
    const [Step, setStep] = useState(1);
    const [color1, setColor1] = useState("#a7c7e7");
    const [color2, setColor2] = useState("white");
    const [color3, setColor3] = useState("white");
    const [color4, setColor4] = useState("white");
    const [color5, setColor5] = useState("white");
    const history = useHistory();
    
    const handleClick = (Input) => {
        console.log(Step);
        if(Input == 1) {
            settitle('Personal Information'); 
            setv1('Name'); 
            setv2('Phone Number'); 
            setv3('Email'); 
            setStep(1); 
            setColor1("#a7c7e7");
            setColor2("white");
            setColor3("white");
            setColor4("white");
            setColor5("white");

        } else if (Input == 2) {
            settitle('Location'); 
            setv1('Country'); 
            setv2('Province'); 
            setv3('City'); 
            setStep(2); 
            setColor1("white");
            setColor2("#a7c7e7");
            setColor3("white");
            setColor4("white");
            setColor5("white");

        } else if (Input == 3) {
            settitle('Address'); 
            setv1('Address'); 
            setv2('Postal Code'); 
            setv3('Appartment Number'); 
            setStep(3); 
            setColor1("white");
            setColor2("white");
            setColor3("#a7c7e7");
            setColor4("white");
            setColor5("white");
            
        } else if (Input == 4) {
            settitle('Coffee Order'); 
            setv1('Coffee Type'); 
            setv2('Milk'); 
            setv3('Number of Coffees'); 
            setStep(4); 
            setColor1("white");
            setColor2("white");
            setColor3("white");
            setColor4("#a7c7e7");
            setColor5("white");
            
        } else if (Input == 5 ) {
            settitle('Additional Information'); 
            setv1('Additional Notes'); 
            setv2('Allergies'); 
            setv3('Complaints');
            setStep(5);
            setColor1("white");
            setColor2("white");
            setColor3("white");
            setColor4("white");
            setColor5("#a7c7e7");
             
        } else if (Step == 5 && Input == 6) {
            history.push("/confirmation");   
        } else if (Input == 6) {
            handleClick(Step + 1); 
        }
        
    }
    return ( 
        <div class="Order">
                <div class ="content">
                    <h1>Coffee Order</h1>
                </div>


                <div class = "order-content">
                    <div class = "order">

                        <div class = "steps">
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" style={{backgroundColor:color1}} onClick={() => handleClick(1)}>  Step 1</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" style={{backgroundColor:color2}} onClick={() => handleClick(2)}>  Step 2</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" style={{backgroundColor:color3}} onClick={() => handleClick(3)}>  Step 3</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" style={{backgroundColor:color4}} onClick={() => handleClick(4)}>  Step 4</button>
                            </div>
                
                            <div class="button-class-circle">
                                <button type="button" class="btn btn-secondary btn-circle" style={{backgroundColor:color5}} onClick={() => handleClick(5)}>  Step 5</button>
                            </div>
                
                        </div>

                        <h2>{Title}</h2>
                        
                        <input type="text" class="form-control" placeholder={Value1}></input>
                        <input type="text" class="form-control" placeholder={Value2}></input>
                        <input type="text" class="form-control" placeholder={Value3}></input>
            
                        <div class="button-class">
                            <button type="button" class="btn btn-secondary" onClick={() => handleClick(6)}>  Submit</button>
                        </div>
                    
                    </div>
                </div>
        </div>
     );
}
 
export default Order;