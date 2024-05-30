


module.exports = function(RED) {

    function backgroundColorFunc(config) {
        RED.nodes.createNode(this, config);
        var node = this;

    }

    RED.nodes.registerType("自定义Block", backgroundColorFunc);
};



  




