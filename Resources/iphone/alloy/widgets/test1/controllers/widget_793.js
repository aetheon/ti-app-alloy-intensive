function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_793";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_793 = Ti.UI.createView({
        id: "widget_793"
    });
    $.__views.widget_793 && $.addTopLevelView($.__views.widget_793);
    $.__views.__alloyId20072 = Ti.UI.createView({
        id: "__alloyId20072"
    });
    $.__views.widget_793.add($.__views.__alloyId20072);
    $.__views.__alloyId20073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20073"
    });
    $.__views.__alloyId20072.add($.__views.__alloyId20073);
    $.__views.__alloyId20074 = Ti.UI.createView({
        id: "__alloyId20074"
    });
    $.__views.__alloyId20074 && $.addTopLevelView($.__views.__alloyId20074);
    $.__views.__alloyId20075 = Ti.UI.createView({
        id: "__alloyId20075"
    });
    $.__views.__alloyId20074.add($.__views.__alloyId20075);
    $.__views.__alloyId20076 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20076"
    });
    $.__views.__alloyId20075.add($.__views.__alloyId20076);
    $.__views.__alloyId20077 = Ti.UI.createView({
        id: "__alloyId20077"
    });
    $.__views.__alloyId20077 && $.addTopLevelView($.__views.__alloyId20077);
    $.__views.__alloyId20078 = Ti.UI.createView({
        id: "__alloyId20078"
    });
    $.__views.__alloyId20077.add($.__views.__alloyId20078);
    $.__views.__alloyId20079 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20079"
    });
    $.__views.__alloyId20078.add($.__views.__alloyId20079);
    $.__views.__alloyId20080 = Ti.UI.createView({
        id: "__alloyId20080"
    });
    $.__views.__alloyId20080 && $.addTopLevelView($.__views.__alloyId20080);
    $.__views.__alloyId20081 = Ti.UI.createView({
        id: "__alloyId20081"
    });
    $.__views.__alloyId20080.add($.__views.__alloyId20081);
    $.__views.__alloyId20082 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20082"
    });
    $.__views.__alloyId20081.add($.__views.__alloyId20082);
    $.__views.__alloyId20083 = Ti.UI.createView({
        id: "__alloyId20083"
    });
    $.__views.__alloyId20083 && $.addTopLevelView($.__views.__alloyId20083);
    $.__views.__alloyId20084 = Ti.UI.createView({
        id: "__alloyId20084"
    });
    $.__views.__alloyId20083.add($.__views.__alloyId20084);
    $.__views.__alloyId20085 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20085"
    });
    $.__views.__alloyId20084.add($.__views.__alloyId20085);
    $.__views.__alloyId20086 = Ti.UI.createView({
        id: "__alloyId20086"
    });
    $.__views.__alloyId20086 && $.addTopLevelView($.__views.__alloyId20086);
    $.__views.__alloyId20087 = Ti.UI.createView({
        id: "__alloyId20087"
    });
    $.__views.__alloyId20086.add($.__views.__alloyId20087);
    $.__views.__alloyId20088 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20088"
    });
    $.__views.__alloyId20087.add($.__views.__alloyId20088);
    $.__views.__alloyId20089 = Ti.UI.createView({
        id: "__alloyId20089"
    });
    $.__views.__alloyId20089 && $.addTopLevelView($.__views.__alloyId20089);
    $.__views.__alloyId20090 = Ti.UI.createView({
        id: "__alloyId20090"
    });
    $.__views.__alloyId20089.add($.__views.__alloyId20090);
    $.__views.__alloyId20091 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20091"
    });
    $.__views.__alloyId20090.add($.__views.__alloyId20091);
    $.__views.__alloyId20092 = Ti.UI.createView({
        id: "__alloyId20092"
    });
    $.__views.__alloyId20092 && $.addTopLevelView($.__views.__alloyId20092);
    $.__views.__alloyId20093 = Ti.UI.createView({
        id: "__alloyId20093"
    });
    $.__views.__alloyId20092.add($.__views.__alloyId20093);
    $.__views.__alloyId20094 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20094"
    });
    $.__views.__alloyId20093.add($.__views.__alloyId20094);
    $.__views.__alloyId20095 = Ti.UI.createView({
        id: "__alloyId20095"
    });
    $.__views.__alloyId20095 && $.addTopLevelView($.__views.__alloyId20095);
    $.__views.__alloyId20096 = Ti.UI.createView({
        id: "__alloyId20096"
    });
    $.__views.__alloyId20095.add($.__views.__alloyId20096);
    $.__views.__alloyId20097 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20097"
    });
    $.__views.__alloyId20096.add($.__views.__alloyId20097);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;