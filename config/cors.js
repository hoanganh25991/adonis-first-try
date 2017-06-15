'use strict'

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Origin
  |--------------------------------------------------------------------------
  |
  | Setting up origin true will allow the request origin. You can also
  | define multiple origins as string.
  |
  */
  origin: false,

  /*
  |--------------------------------------------------------------------------
  | Methods
  |--------------------------------------------------------------------------
  |
  | Comma seperated HTTP methods to be allowed.
  |
  */
  methods: 'GET, PUT, POST',

  /*
  |--------------------------------------------------------------------------
  | Headers
  |--------------------------------------------------------------------------
  |
  | Headers to allow. Keep it true will allow headers defined in
  | Access-Control-Request-Headers.
  |
  */
  headers: true,
  // headers: false,

  /*
  |--------------------------------------------------------------------------
  | Expose Headers
  |--------------------------------------------------------------------------
  |
  | Expose headers to Access-Control-Expose-Headers.
  |
  */
  exposeHeaders: false,
  // exposeHeaders: true,

  /*
  |--------------------------------------------------------------------------
  | Credentials
  |--------------------------------------------------------------------------
  |
  | Define Access-Control-Allow-Credentials header
  |
  */
  credentials: false,
  // credentials: true,

  /*
  |--------------------------------------------------------------------------
  | MaxAge
  |--------------------------------------------------------------------------
  |
  | Define Access-Control-Allow-Max-Age
  |
  */
  maxAge: 90
}
