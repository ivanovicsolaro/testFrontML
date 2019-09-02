
const request = require('request');

export  default class ApiItems {

    async getItemById( id: string ){
        await request('https://api.mercadolibre.com/items/'+ id, { json: true } , function (error, response, bodyItem) {
        return bodyItem;
    }

}