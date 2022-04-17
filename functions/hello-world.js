exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Twilio Function"
    }

    callback(null, result);
  };
