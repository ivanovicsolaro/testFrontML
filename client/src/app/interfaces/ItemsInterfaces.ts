export interface ItemDetail {
  author: {
      name: string;
      lastname: string;
  };
  item: Item;
}

export interface ResultSearchItem {
  author: {
      name?: string;
      lastname?: string;
  };
  categories: string[];
  items: ResultItem[];
}

export interface ResultItem {
  id: string;
  title: string;
  price: {
      currency: string;
      amount: number;
      decimals: number;
      };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface Item {
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}
