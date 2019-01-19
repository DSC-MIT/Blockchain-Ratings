App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
  },

  initContract: function() {
  },

  listenForEvents: function() {
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
