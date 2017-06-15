'use strict'

const Lucid = use('Lucid')

class Reservation extends Lucid {
  static get computed () {
    return ['xyz'];
  }

	static get table () {
    return 'res_reservation'
  }

  getXyz(){
    return 'xyz';
  }
}

module.exports = Reservation
