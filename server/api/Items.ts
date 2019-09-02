import { Router, Request, Response } from 'express';
import { ItemDetail, ResultSearchItem, ResultItem } from '../interfaces/ItemsInterfaces';

var itemsRoutes = Router();
var axios = require('axios');
var numeral = require('numeral');


var categories: string[] = [];

var itemDetail: ItemDetail;
var resultItems: ResultItem[] = [];

/** Obtención del detalle de un item según el ID */
itemsRoutes.get('/items/:id', ( req: Request, res: Response) => {

    axios.all([
    axios.get('https://api.mercadolibre.com/items/' + req.params.id),
    axios.get('https://api.mercadolibre.com/items/' + req.params.id + '/description')
    ]).then(axios.spread((item: any, detalleItem: any) => {
    itemDetail = {
        author: {
            name: item.data.nombre,
            lastname: item.data.lastname
        },
        item: {
            id: item.data.id,
            title: item.data.title,
            price: {
                currency: item.data.currency_id,
                amount: numeral(item.data.price).format('0,0').replace(',','.') ,
                decimals: numeral(item.data.price).format('.00').replace('.','')
            },
            picture: item.data.pictures[0].url,
            condition: item.data.condition,
            free_shipping: item.data.shipping.free_shipping,
            sold_quantity: item.data.sold_quantity,
            description: detalleItem.data.plain_text
            }
    }
    
    res.json(
        itemDetail
    )
    })).catch(error => {
    console.log(error);
    });
});


/** Obtención del detalle de un item según el ID */
itemsRoutes.get('/items', ( req: Request, res: Response) => { 
    axios.all([
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+ req.query.q +'&limit=4&offset=1'),
    axios.get('https://api.mercadolibre.com/sites/MLA/category_predictor/predict?title='+ req.query.q)
    ]).then(axios.spread((searchResult: any, predictCategory: any) => {
    categories = []; 
    resultItems = [];   
    /** Inserto las categorias en un array */
    predictCategory.data.path_from_root.forEach( e => {
       categories.push(e['name']);
    });
    
    searchResult.data.results.forEach( e => {
        resultItems.push(
            {
                id: e.id,
                title: e.title,
                price: {
                    currency: e.currency_id,
                    amount: numeral(e.price).format('0.').replace(/\./g,'') ,
                    decimals: numeral(e.price).format('.00').replace(/\./g,'')
                    },
                picture: e.thumbnail,
                condition: e.condition,
                free_shipping: e.shipping.free_shipping
            }
        );
    });

    res.json({
        author: {
            name: '',
            lastname: ''
        },
        categories: categories,
        items: resultItems
        }
    )

    })).catch(error => {
    console.log(error);
    });
});



export default itemsRoutes;