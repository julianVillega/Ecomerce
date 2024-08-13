export function formatPrice(price){
    let currencyFormatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
    });
    return currencyFormatter.format(price);
}
