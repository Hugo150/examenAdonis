'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductosSchema extends Schema {
  up () {
    this.create('productos', (table) => {
      table.increments()
      table.integer('codigo').unique().notNullable();
      table.string('nombre',50).notNullable();
      table.integer('precio').notNullable();
      table.string('marca',50).notNullable();
      table.integer('idProveedor').unsigned().references('id').inTable('proveedors').onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('productos')
  }
}

module.exports = ProductosSchema
