
/**
 * Jekyll
 */

jekyll = {};

jekyll.mpq = {
  track : function(eventName, properties, callback) {
    properties = properties || {};
    callback = callback || function(){};
    if (!/localhost/.test(document.location.hostname)) {
      mpq.track(eventName, properties, callback);
    };
  }
};

 /* EOF */