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