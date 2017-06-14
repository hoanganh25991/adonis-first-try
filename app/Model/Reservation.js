'use strict'

const Lucid = use('Lucid')

class Reservation extends Lucid {
	static get table () {
    return 'res_reservation'
  }
}

module.exports = Reservation
