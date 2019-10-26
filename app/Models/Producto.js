'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Producto extends Model {
    proveedor(){
        return this.belongsTo('App/Models/Proveedor','idProveedor')
    }
}

module.exports = Producto
