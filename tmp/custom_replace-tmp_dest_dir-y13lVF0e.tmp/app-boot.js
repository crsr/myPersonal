/* jshint ignore:start */

define('mypersonal/config/environment', ['ember'], function(Ember) {
  var prefix = 'mypersonal';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("mypersonal/tests/test-helper");
} else {
  require("mypersonal/app")["default"].create({"name":"mypersonal","version":"0.0.0+7c6ee19a"});
}

/* jshint ignore:end */
