function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_69";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_69 = Ti.UI.createView({
        id: "widget_69"
    });
    $.__views.widget_69 && $.addTopLevelView($.__views.widget_69);
    $.__views.__alloyId17082 = Ti.UI.createView({
        id: "__alloyId17082"
    });
    $.__views.widget_69.add($.__views.__alloyId17082);
    $.__views.__alloyId17083 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17083"
    });
    $.__views.__alloyId17082.add($.__views.__alloyId17083);
    $.__views.__alloyId17084 = Ti.UI.createView({
        id: "__alloyId17084"
    });
    $.__views.__alloyId17084 && $.addTopLevelView($.__views.__alloyId17084);
    $.__views.__alloyId17085 = Ti.UI.createView({
        id: "__alloyId17085"
    });
    $.__views.__alloyId17084.add($.__views.__alloyId17085);
    $.__views.__alloyId17086 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17086"
    });
    $.__views.__alloyId17085.add($.__views.__alloyId17086);
    $.__views.__alloyId17087 = Ti.UI.createView({
        id: "__alloyId17087"
    });
    $.__views.__alloyId17087 && $.addTopLevelView($.__views.__alloyId17087);
    $.__views.__alloyId17088 = Ti.UI.createView({
        id: "__alloyId17088"
    });
    $.__views.__alloyId17087.add($.__views.__alloyId17088);
    $.__views.__alloyId17089 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17089"
    });
    $.__views.__alloyId17088.add($.__views.__alloyId17089);
    $.__views.__alloyId17090 = Ti.UI.createView({
        id: "__alloyId17090"
    });
    $.__views.__alloyId17090 && $.addTopLevelView($.__views.__alloyId17090);
    $.__views.__alloyId17091 = Ti.UI.createView({
        id: "__alloyId17091"
    });
    $.__views.__alloyId17090.add($.__views.__alloyId17091);
    $.__views.__alloyId17092 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17092"
    });
    $.__views.__alloyId17091.add($.__views.__alloyId17092);
    $.__views.__alloyId17093 = Ti.UI.createView({
        id: "__alloyId17093"
    });
    $.__views.__alloyId17093 && $.addTopLevelView($.__views.__alloyId17093);
    $.__views.__alloyId17094 = Ti.UI.createView({
        id: "__alloyId17094"
    });
    $.__views.__alloyId17093.add($.__views.__alloyId17094);
    $.__views.__alloyId17095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17095"
    });
    $.__views.__alloyId17094.add($.__views.__alloyId17095);
    $.__views.__alloyId17096 = Ti.UI.createView({
        id: "__alloyId17096"
    });
    $.__views.__alloyId17096 && $.addTopLevelView($.__views.__alloyId17096);
    $.__views.__alloyId17097 = Ti.UI.createView({
        id: "__alloyId17097"
    });
    $.__views.__alloyId17096.add($.__views.__alloyId17097);
    $.__views.__alloyId17098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17098"
    });
    $.__views.__alloyId17097.add($.__views.__alloyId17098);
    $.__views.__alloyId17099 = Ti.UI.createView({
        id: "__alloyId17099"
    });
    $.__views.__alloyId17099 && $.addTopLevelView($.__views.__alloyId17099);
    $.__views.__alloyId17100 = Ti.UI.createView({
        id: "__alloyId17100"
    });
    $.__views.__alloyId17099.add($.__views.__alloyId17100);
    $.__views.__alloyId17101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17101"
    });
    $.__views.__alloyId17100.add($.__views.__alloyId17101);
    $.__views.__alloyId17102 = Ti.UI.createView({
        id: "__alloyId17102"
    });
    $.__views.__alloyId17102 && $.addTopLevelView($.__views.__alloyId17102);
    $.__views.__alloyId17103 = Ti.UI.createView({
        id: "__alloyId17103"
    });
    $.__views.__alloyId17102.add($.__views.__alloyId17103);
    $.__views.__alloyId17104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17104"
    });
    $.__views.__alloyId17103.add($.__views.__alloyId17104);
    $.__views.__alloyId17105 = Ti.UI.createView({
        id: "__alloyId17105"
    });
    $.__views.__alloyId17105 && $.addTopLevelView($.__views.__alloyId17105);
    $.__views.__alloyId17106 = Ti.UI.createView({
        id: "__alloyId17106"
    });
    $.__views.__alloyId17105.add($.__views.__alloyId17106);
    $.__views.__alloyId17107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17107"
    });
    $.__views.__alloyId17106.add($.__views.__alloyId17107);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;