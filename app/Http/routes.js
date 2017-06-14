'use strict'
const Reservation = use('App/Model/Reservation')

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'User.index')
| Route.post('/user', 'User.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
Route.get('login').render('login');
Route.get('reservations', function* (request, response){
	const reservations = yield Reservation.all() 
  	response.ok(reservations)
});
