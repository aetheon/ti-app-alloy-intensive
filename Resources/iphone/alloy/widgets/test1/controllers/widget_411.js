function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_411";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_411 = Ti.UI.createView({
        id: "widget_411"
    });
    $.__views.widget_411 && $.addTopLevelView($.__views.widget_411);
    $.__views.__alloyId9074 = Ti.UI.createView({
        id: "__alloyId9074"
    });
    $.__views.widget_411.add($.__views.__alloyId9074);
    $.__views.__alloyId9075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9075"
    });
    $.__views.__alloyId9074.add($.__views.__alloyId9075);
    $.__views.__alloyId9076 = Ti.UI.createView({
        id: "__alloyId9076"
    });
    $.__views.__alloyId9076 && $.addTopLevelView($.__views.__alloyId9076);
    $.__views.__alloyId9077 = Ti.UI.createView({
        id: "__alloyId9077"
    });
    $.__views.__alloyId9076.add($.__views.__alloyId9077);
    $.__views.__alloyId9078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9078"
    });
    $.__views.__alloyId9077.add($.__views.__alloyId9078);
    $.__views.__alloyId9079 = Ti.UI.createView({
        id: "__alloyId9079"
    });
    $.__views.__alloyId9079 && $.addTopLevelView($.__views.__alloyId9079);
    $.__views.__alloyId9080 = Ti.UI.createView({
        id: "__alloyId9080"
    });
    $.__views.__alloyId9079.add($.__views.__alloyId9080);
    $.__views.__alloyId9081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9081"
    });
    $.__views.__alloyId9080.add($.__views.__alloyId9081);
    $.__views.__alloyId9082 = Ti.UI.createView({
        id: "__alloyId9082"
    });
    $.__views.__alloyId9082 && $.addTopLevelView($.__views.__alloyId9082);
    $.__views.__alloyId9083 = Ti.UI.createView({
        id: "__alloyId9083"
    });
    $.__views.__alloyId9082.add($.__views.__alloyId9083);
    $.__views.__alloyId9084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9084"
    });
    $.__views.__alloyId9083.add($.__views.__alloyId9084);
    $.__views.__alloyId9085 = Ti.UI.createView({
        id: "__alloyId9085"
    });
    $.__views.__alloyId9085 && $.addTopLevelView($.__views.__alloyId9085);
    $.__views.__alloyId9086 = Ti.UI.createView({
        id: "__alloyId9086"
    });
    $.__views.__alloyId9085.add($.__views.__alloyId9086);
    $.__views.__alloyId9087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9087"
    });
    $.__views.__alloyId9086.add($.__views.__alloyId9087);
    $.__views.__alloyId9088 = Ti.UI.createView({
        id: "__alloyId9088"
    });
    $.__views.__alloyId9088 && $.addTopLevelView($.__views.__alloyId9088);
    $.__views.__alloyId9089 = Ti.UI.createView({
        id: "__alloyId9089"
    });
    $.__views.__alloyId9088.add($.__views.__alloyId9089);
    $.__views.__alloyId9090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9090"
    });
    $.__views.__alloyId9089.add($.__views.__alloyId9090);
    $.__views.__alloyId9091 = Ti.UI.createView({
        id: "__alloyId9091"
    });
    $.__views.__alloyId9091 && $.addTopLevelView($.__views.__alloyId9091);
    $.__views.__alloyId9092 = Ti.UI.createView({
        id: "__alloyId9092"
    });
    $.__views.__alloyId9091.add($.__views.__alloyId9092);
    $.__views.__alloyId9093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9093"
    });
    $.__views.__alloyId9092.add($.__views.__alloyId9093);
    $.__views.__alloyId9094 = Ti.UI.createView({
        id: "__alloyId9094"
    });
    $.__views.__alloyId9094 && $.addTopLevelView($.__views.__alloyId9094);
    $.__views.__alloyId9095 = Ti.UI.createView({
        id: "__alloyId9095"
    });
    $.__views.__alloyId9094.add($.__views.__alloyId9095);
    $.__views.__alloyId9096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9096"
    });
    $.__views.__alloyId9095.add($.__views.__alloyId9096);
    $.__views.__alloyId9097 = Ti.UI.createView({
        id: "__alloyId9097"
    });
    $.__views.__alloyId9097 && $.addTopLevelView($.__views.__alloyId9097);
    $.__views.__alloyId9098 = Ti.UI.createView({
        id: "__alloyId9098"
    });
    $.__views.__alloyId9097.add($.__views.__alloyId9098);
    $.__views.__alloyId9099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9099"
    });
    $.__views.__alloyId9098.add($.__views.__alloyId9099);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;