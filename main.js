function loadProducts() {
    renderProducts([...Gnotebooks,...Gcraft]);
}

loadProducts()

function onStationeryFilterClick() 
{
    renderProducts(Gcraft);
}

function  onNoteBookFilterClick()
{
    renderProducts(Gnotebooks);
}

function onFetchClick() 
{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>renderProducts(json))
}