export function filterByCategory(category) {
    if (category === undefined) return (products) => products;
    return (products) => products.filter((p) => p.category === category);
}

export function findById(id) {
    return (products) => products.find((p) => p.id === id);
}
