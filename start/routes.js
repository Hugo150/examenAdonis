'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('proveedors/show/:id','ProveedorController.show')
Route.post('proveedors/store','ProveedorController.store');
Route.post('proveedors/update/:id','ProveedorController.update');
Route.delete('proveedors/destroy/:id','ProveedorController.destroy');

Route.get('productos/ver','ProductoController.index')
Route.get('productos/show/:id','ProductoController.show')
Route.post('productos/store','ProductoController.store');
Route.post('productos/update/:id','ProductoController.update');
Route.delete('productos/destroy/:id','ProductoController.destroy');

Route.get('inventario/ver','InventarioController.index');
Route.get('inventario/show/:id','InventarioController.show')
Route.post('inventario/store','InventarioController.store');
Route.post('inventario/update/:id','InventarioController.update');
Route.delete('inventario/destroy/:id','InventarioController.destroy');