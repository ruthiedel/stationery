const renderProduct = (product)=>
{
    return `
    <div class = "product">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
        <img src="${product.image}" class="pimg" alt="${product.name}">
        <button  class="pbutton">Add to Cart</button>
    </div>
    `;
}


const renderProducts = (products)=>{
    let productStr = products.map(renderProduct).join('');
    document.getElementById('prod-area').innerHTML = productStr;
}