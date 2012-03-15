
/**
 * Jekyll
 */

var jekyll = {};

jekyll.mpq = {
  track : function(eventName, properties, callback) {
    properties = properties || {};
    callback = callback || function(){};
    if (!/localhost/.test(document.location.hostname)) {
      mpq.track(eventName, properties, callback);
      if (document.referrer) {
        mpq.track('referrer', { url : document.referrer});
      };
    };
  }
};

 /* EOF */