"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
var itemsRoutes = express_1.Router();
var axios = require('axios');
var numeral = require('numeral');
var categories = [];
var itemDetail;
var resultItems = [];
/** Obtención del detalle de un item según el ID
 *  Return: Object: ItemDetail
*/
itemsRoutes.get('/items/:id', (req, res) => {
    axios.all([
        axios.get('https://api.mercadolibre.com/items/' + req.params.id),
        axios.get('https://api.mercadolibre.com/items/' + req.params.id + '/description')
    ]).then(axios.spread((item, detalleItem) => {
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
                    amount: numeral(item.data.price).format('0,0').replace(',', '.'),
                    decimals: numeral(item.data.price).format('.00').replace('.', '')
                },
                picture: item.data.pictures[0].url,
                condition: item.data.condition,
                free_shipping: item.data.shipping.free_shipping,
                sold_quantity: item.data.sold_quantity,
                description: detalleItem.data.plain_text
            }
        };
        res.json(itemDetail);
    }));
});
/** Busqueda resultados según una cadena dada :query
 *  Return Object: ResultItems
*/
itemsRoutes.get('/items', (req, res) => {
    axios.all([
        axios.get('https://api.mercadolibre.com/sites/MLA/search?q=' + req.query.q + '&limit=4&offset=1'),
        axios.get('https://api.mercadolibre.com/sites/MLA/category_predictor/predict?title=' + req.query.q)
    ]).then(axios.spread((searchResult, predictCategory) => {
        categories = [];
        resultItems = [];
        /** Inserto las categorias en un array */
        predictCategory.data.path_from_root.forEach((e) => {
            categories.push(e['name']);
        });
        /** Inserto los items en el un objeto */
        searchResult.data.results.forEach((e) => {
            resultItems.push({
                id: e.id,
                title: e.title,
                price: {
                    currency: e.currency_id,
                    amount: numeral(e.price).format('0.').replace(/\./g, ''),
                    decimals: numeral(e.price).format('.00').replace(/\./g, '')
                },
                picture: e.thumbnail,
                condition: e.condition,
                free_shipping: e.shipping.free_shipping
            });
        });
        /** Retorno Obj Json */
        res.json({
            author: {
                name: '',
                lastname: ''
            },
            categories: categories,
            items: resultItems
        });
    }));
});
exports.default = itemsRoutes;
