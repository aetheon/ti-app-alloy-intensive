function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_239";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_239 = Ti.UI.createView({
        id: "widget_239"
    });
    $.__views.widget_239 && $.addTopLevelView($.__views.widget_239);
    $.__views.__alloyId4082 = Ti.UI.createView({
        id: "__alloyId4082"
    });
    $.__views.widget_239.add($.__views.__alloyId4082);
    $.__views.__alloyId4083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4083"
    });
    $.__views.__alloyId4082.add($.__views.__alloyId4083);
    $.__views.__alloyId4084 = Ti.UI.createView({
        id: "__alloyId4084"
    });
    $.__views.__alloyId4084 && $.addTopLevelView($.__views.__alloyId4084);
    $.__views.__alloyId4085 = Ti.UI.createView({
        id: "__alloyId4085"
    });
    $.__views.__alloyId4084.add($.__views.__alloyId4085);
    $.__views.__alloyId4086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4086"
    });
    $.__views.__alloyId4085.add($.__views.__alloyId4086);
    $.__views.__alloyId4087 = Ti.UI.createView({
        id: "__alloyId4087"
    });
    $.__views.__alloyId4087 && $.addTopLevelView($.__views.__alloyId4087);
    $.__views.__alloyId4088 = Ti.UI.createView({
        id: "__alloyId4088"
    });
    $.__views.__alloyId4087.add($.__views.__alloyId4088);
    $.__views.__alloyId4089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4089"
    });
    $.__views.__alloyId4088.add($.__views.__alloyId4089);
    $.__views.__alloyId4090 = Ti.UI.createView({
        id: "__alloyId4090"
    });
    $.__views.__alloyId4090 && $.addTopLevelView($.__views.__alloyId4090);
    $.__views.__alloyId4091 = Ti.UI.createView({
        id: "__alloyId4091"
    });
    $.__views.__alloyId4090.add($.__views.__alloyId4091);
    $.__views.__alloyId4092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4092"
    });
    $.__views.__alloyId4091.add($.__views.__alloyId4092);
    $.__views.__alloyId4093 = Ti.UI.createView({
        id: "__alloyId4093"
    });
    $.__views.__alloyId4093 && $.addTopLevelView($.__views.__alloyId4093);
    $.__views.__alloyId4094 = Ti.UI.createView({
        id: "__alloyId4094"
    });
    $.__views.__alloyId4093.add($.__views.__alloyId4094);
    $.__views.__alloyId4095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4095"
    });
    $.__views.__alloyId4094.add($.__views.__alloyId4095);
    $.__views.__alloyId4096 = Ti.UI.createView({
        id: "__alloyId4096"
    });
    $.__views.__alloyId4096 && $.addTopLevelView($.__views.__alloyId4096);
    $.__views.__alloyId4097 = Ti.UI.createView({
        id: "__alloyId4097"
    });
    $.__views.__alloyId4096.add($.__views.__alloyId4097);
    $.__views.__alloyId4098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4098"
    });
    $.__views.__alloyId4097.add($.__views.__alloyId4098);
    $.__views.__alloyId4099 = Ti.UI.createView({
        id: "__alloyId4099"
    });
    $.__views.__alloyId4099 && $.addTopLevelView($.__views.__alloyId4099);
    $.__views.__alloyId4100 = Ti.UI.createView({
        id: "__alloyId4100"
    });
    $.__views.__alloyId4099.add($.__views.__alloyId4100);
    $.__views.__alloyId4101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4101"
    });
    $.__views.__alloyId4100.add($.__views.__alloyId4101);
    $.__views.__alloyId4102 = Ti.UI.createView({
        id: "__alloyId4102"
    });
    $.__views.__alloyId4102 && $.addTopLevelView($.__views.__alloyId4102);
    $.__views.__alloyId4103 = Ti.UI.createView({
        id: "__alloyId4103"
    });
    $.__views.__alloyId4102.add($.__views.__alloyId4103);
    $.__views.__alloyId4104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4104"
    });
    $.__views.__alloyId4103.add($.__views.__alloyId4104);
    $.__views.__alloyId4105 = Ti.UI.createView({
        id: "__alloyId4105"
    });
    $.__views.__alloyId4105 && $.addTopLevelView($.__views.__alloyId4105);
    $.__views.__alloyId4106 = Ti.UI.createView({
        id: "__alloyId4106"
    });
    $.__views.__alloyId4105.add($.__views.__alloyId4106);
    $.__views.__alloyId4107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4107"
    });
    $.__views.__alloyId4106.add($.__views.__alloyId4107);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;