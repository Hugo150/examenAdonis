'use strict'
const Proveedor = use('App/Models/Proveedor');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with proveedors
 */
class ProveedorController {
  /**
   * Show a list of all proveedors.
   * GET proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    /*let proveedors = await Proveedor.all();
    return response.send('Hola materias')*/
  }

  /**
   * Render a form to be used for creating a new proveedor.
   * GET proveedors/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new proveedor.
   * POST proveedors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    await Proveedor.create(request.all());
    response.json('Proveedor creado');
  }

  /**
   * Display a single proveedor.
   * GET proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    let proveedor = await Proveedor.find(params.id);
    return response.json(proveedor);
  }

  /**
   * Render a form to update an existing proveedor.
   * GET proveedors/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update proveedor details.
   * PUT or PATCH proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    let proveedor = await Proveedor.find(params.id)
    proveedor.merge(request.all())
    await proveedor.save();
    return response.json(proveedor)
  }

  /**
   * Delete a proveedor with id.
   * DELETE proveedors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    let proveedor = await Proveedor.find(params.id)
    proveedor.delete();
    response.json('Proveedor eliminado')
  }
}

module.exports = ProveedorController
