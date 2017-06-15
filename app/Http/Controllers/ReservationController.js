'use strict'
const Reservation = use('App/Model/Reservation');

class ReservationController {
  * getAll(req, res){
    console.log(req.url());
    const reservations = yield Reservation.all();
    return res.ok(reservations);
  }

  * findByName(req, res){
    const paramsObj = req.get();
    const {name} = paramsObj;
    if(name){
      const reservations = yield Reservation.query().where('first_name', 'LIKE', name).fetch();
      return res.ok(reservations);
    }else{
      return this.getAll(req, res);
    }
  }
}

module.exports = ReservationController
