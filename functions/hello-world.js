exports.handler = function(context, event, callback) {
    const result = {
        message : "Hello Twilio Function Call"
    }

    callback(null, result);
  };
