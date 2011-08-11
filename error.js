/*
 * Generic Error
 * 
 * Extension on Error to support more complex logic.
 * 
 * @param {error} Either an Error, or a string that will be casted into new
 *        error.
 * @param {code} The recognizable error code
 * @param {http_code} The HTTP code from CouchDB
 *
 * @return An error augmented an driver specific code
 */
function gen_err(error, code, http_code, type) {
  if(typeof error === 'string') { error = new Error(error); }
  if(!type) {
    type      = http_code;
    http_code = 500;
  }
  error.nano_code  = code;
  error.http_code  = http_code;
  error.type       = type;
  return error;
}

exports.request_err = function (e,c,h) { return gen_err(e,c,h,"request"); }; 
exports.couch_err   = function (e,c,h) { return gen_err(e,c,h,"couch");   }; 