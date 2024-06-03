export interface Product {
    name: string,
    category: string,
    price: number,
    stock: number,
    image: string,
    clearance: boolean,
    quantity: number,
    description: string,
}

export interface ProductItem {
    product: Product,
    quantity: number,
}