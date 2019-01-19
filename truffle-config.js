module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "YOUR CUSTOM RPC HERE",
      port: 7545,
      network_id: "*",
      gas: 4712388
    }
  }
};
