'use strict'
const Reservation = use('App/Model/Reservation');

class ReservationController {
  * getAll(req, res){
    console.log(req.url());
    const reservations = yield Reservation.all();
    return res.ok(reservations);
  }
}

module.exports = ReservationController
