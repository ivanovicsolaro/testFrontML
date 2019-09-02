export interface ItemDetail {
    author: {
        name: string
        lastname: string
    },
    item: {
        id: string,
        title: string,
        price: {
            currency: string,
            amount: number,
            decimals: number,
        },
        picture: string,
        condition: string,
        free_shipping: boolean,
        sold_quantity: number,
        description: string
        }
}

export interface ResultSearchItem {
    author: {
        name?: string
        lastname?: string
    },
    categories: any[],
    items: ResultItem[]
}

export interface ResultItem{
    id: string,
    title: string,
    price: {
        currency: string,
        amount: number,
        decimals: number
        },
    picture: string,
    condition: string,
    free_shipping: boolean
}

export interface ResponseItem{ 
    id: string; 
    title: string; 
    currency_id: string; 
    price: any; 
    thumbnail: string; 
    condition: string; 
    shipping: { 
        free_shipping: boolean; 
    }; 
}