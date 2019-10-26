'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InventarioSchema extends Schema {
  up () {
    this.create('inventarios', (table) => {
      table.increments()
      table.integer('codigoProducto').unsigned().references('id').inTable('productos').onDelete('cascade');
      table.integer('stock').notNullable();
      table.date('fechaIngreso');
      table.timestamps()
    })
  }

  down () {
    this.drop('inventarios')
  }
}

module.exports = InventarioSchema
