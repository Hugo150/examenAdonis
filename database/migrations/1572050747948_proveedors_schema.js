'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProveedorsSchema extends Schema {
  up () {
    this.create('proveedors', (table) => {
      table.increments()
      table.string('nombre').notNullable();
      table.integer('telefono');
      table.timestamps()
    })
  }

  down () {
    this.drop('proveedors')
  }
}

module.exports = ProveedorsSchema
