document.write("<p>Hello world!</p>");

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('add-btn');
const deleteBtn = document.getElementById('delete-btn');

//////////////////////////////////////////////////
const theme_Btn = document.getElementById('theme-btn');
const navbar = document.getElementById('navbar');


theme_Btn.onclick = ()=>{
    //console.log("My button clicked!!!");
    if( theme_Btn.innerHTML == 'Dark Header')
    {
      
       //delete light classes
       navbar.classList.remove('navbar-dark')
       navbar.classList.remove('bg-dark')
       //add dark classes
       navbar.classList.add('navbar-light')
       navbar.classList.add('bg-primary')

       theme_Btn.innerHTML = "Light Header";
      
    }
    else{       

          //delete dark classes
          navbar.classList.remove('navbar-light')
          navbar.classList.remove('bg-primary')
          //add light classes
          navbar.classList.add('navbar-dark')
          navbar.classList.add('bg-dark')
          
          theme_Btn.innerHTML = "Dark Header";
    }
    
    
}

let products = [];

function getProductFromForm()
{
    const modelInput = document.getElementById('modelInput');
    const descInput = document.getElementById('descriptionInput');
    const priceInput = document.getElementById('priceInput');
    return {
        id:products.length + 1,
        model: modelInput.value,
        description: descInput.value,
        price: +priceInput.value
    }
}


createBtn.onclick = ()=>{
    console.log("On click handler from JS")
    const product = getProductFromForm();
    products.push(product);
    tableBody.innerHTML += ` <tr class="table-info">
                            <th >${product.id}</td>
                            <td>${product.model}</td>
                            <td>${product.description}</td>
                            <td>${product.price}$</td>
                        </tr>   `;
} 

deleteBtn.onclick=()=>{
    products = [];
    tableBody.innerHTML = "";
}