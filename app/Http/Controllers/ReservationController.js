'use strict'
const Reservation = use('App/Model/Reservation');

class ReservationController {
  * getAll(req, res){
    console.log(req.url());
    const reservations = yield Reservation.all();
    return res.ok(reservations);
  }

  * findByName(req, res){
    let paramsObj = req.get();
    let hasData   =  Object.keys(paramsObj).length > 0
    paramsObj     = hasData ? paramsObj : req.post();
    // When handle POST
    // No difference from json or url-encode as form-data
    // Quite nice
    console.log(paramsObj);

    const {name} = paramsObj;
    if(name){
      const reservations = yield Reservation.query().where('first_name', 'LIKE', name).fetch();
      return res.ok(reservations);
    }else{
      return yield this.getAll(req, res);
    }
  }

  * findById(req, res){
    const routeParams = req.params();

    console.log(routeParams);

    const {id} = routeParams;
    if(id){
      const reservation = yield Reservation.find(id);
      if(reservation){
        return res.ok(reservation);
      }
    }

    return res.ok('Please submit id or We cant find your reservation');
  }
}

module.exports = ReservationController
