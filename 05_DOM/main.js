document.write("<p>Hello world!</p>");

const tableBody = document.getElementById('table-body');
const createBtn = document.getElementById('add-btn');

const products = [];

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