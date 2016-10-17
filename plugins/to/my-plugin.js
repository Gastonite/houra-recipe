const internals = {};

internals.MyPlugin = module.exports = {};

internals.MyPlugin.register = (server, options, next) => {

  next();
};
internals.MyPlugin.register.attributes = {
  name: 'my-plugin'
};