import Navbar from './navbar';
import logo from './logo.png';
import coffee from './coffee.png';
import './shop.css';

const Shop = () => {
    return ( 
        <div class="Shop">
                <div class ="containers">
        <div class = "container-filter">
            <h1>Filter</h1>
            <input type="text" class="form-control" placeholder="Search"></input>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault">Hot
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault"> Milk
                </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                <label class="form-check-label" for="flexCheckDefault"> Sweet
                </label>
            </div>

            <div class="button-class">
                <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/shop.html'">  Submit</button>
            </div>
        </div>

        <div class = "container-options">
        
            <h1>Beanz's Options</h1>

            <table class ="drinks">
                <tr>
                  <th>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Cappuccino</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </th>

                  <th>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Espresso</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>

                  </th>

                  <th>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Latte</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </th>

                  
                </tr>


                <tr>
                  <td>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Cold Brew</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </td>
                  <td>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Americano</h5>
                          <img src={coffee} width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </td>

                  <td>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Flat White</h5>
                          <img src={coffee}  width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </td>

                </tr>
                <tr>
                  <td>
                    <div class="card">
                        <div class="card-body">
                          <h5 class="card-title">Macchiato</h5>
                          <img src={coffee} width= "200px" height="200px" alt="coffee"></img>
                          <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                          <p class="card-text">Very good!</p>
                          <div class="button-class">
                            <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                          </div>
                        </div>
                      </div>
                  </td>
                  <td><div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Iced Coffee</h5>
                      <img src={coffee} width= "200px" height="200px" alt="coffee"></img>
                      <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                      <p class="card-text">Very good!</p>
                      <div class="button-class">
                        <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Iced Americano</h5>
                      <img src={coffee} width= "200px" height="200px" alt="coffee"></img>
                      <h6 class="card-subtitle mb-2 text-muted">reccommend</h6>
                      <p class="card-text">Very good!</p>
                      <div class="button-class">
                        <button type="button" class="btn btn-secondary" onclick=" window.location.href = '/project2SEG3125/html/order.html'">Buy</button>
                      </div>
                    </div>
                  </div>
                </td>
                </tr>
              </table>
        
        </div>
    </div>
        </div>
     );
}
 
export default Shop;