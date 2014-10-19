function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_862";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_862 = Ti.UI.createView({
        id: "widget_862"
    });
    $.__views.widget_862 && $.addTopLevelView($.__views.widget_862);
    $.__views.__alloyId22074 = Ti.UI.createView({
        id: "__alloyId22074"
    });
    $.__views.widget_862.add($.__views.__alloyId22074);
    $.__views.__alloyId22075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22075"
    });
    $.__views.__alloyId22074.add($.__views.__alloyId22075);
    $.__views.__alloyId22076 = Ti.UI.createView({
        id: "__alloyId22076"
    });
    $.__views.__alloyId22076 && $.addTopLevelView($.__views.__alloyId22076);
    $.__views.__alloyId22077 = Ti.UI.createView({
        id: "__alloyId22077"
    });
    $.__views.__alloyId22076.add($.__views.__alloyId22077);
    $.__views.__alloyId22078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22078"
    });
    $.__views.__alloyId22077.add($.__views.__alloyId22078);
    $.__views.__alloyId22079 = Ti.UI.createView({
        id: "__alloyId22079"
    });
    $.__views.__alloyId22079 && $.addTopLevelView($.__views.__alloyId22079);
    $.__views.__alloyId22080 = Ti.UI.createView({
        id: "__alloyId22080"
    });
    $.__views.__alloyId22079.add($.__views.__alloyId22080);
    $.__views.__alloyId22081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22081"
    });
    $.__views.__alloyId22080.add($.__views.__alloyId22081);
    $.__views.__alloyId22082 = Ti.UI.createView({
        id: "__alloyId22082"
    });
    $.__views.__alloyId22082 && $.addTopLevelView($.__views.__alloyId22082);
    $.__views.__alloyId22083 = Ti.UI.createView({
        id: "__alloyId22083"
    });
    $.__views.__alloyId22082.add($.__views.__alloyId22083);
    $.__views.__alloyId22084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22084"
    });
    $.__views.__alloyId22083.add($.__views.__alloyId22084);
    $.__views.__alloyId22085 = Ti.UI.createView({
        id: "__alloyId22085"
    });
    $.__views.__alloyId22085 && $.addTopLevelView($.__views.__alloyId22085);
    $.__views.__alloyId22086 = Ti.UI.createView({
        id: "__alloyId22086"
    });
    $.__views.__alloyId22085.add($.__views.__alloyId22086);
    $.__views.__alloyId22087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22087"
    });
    $.__views.__alloyId22086.add($.__views.__alloyId22087);
    $.__views.__alloyId22088 = Ti.UI.createView({
        id: "__alloyId22088"
    });
    $.__views.__alloyId22088 && $.addTopLevelView($.__views.__alloyId22088);
    $.__views.__alloyId22089 = Ti.UI.createView({
        id: "__alloyId22089"
    });
    $.__views.__alloyId22088.add($.__views.__alloyId22089);
    $.__views.__alloyId22090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22090"
    });
    $.__views.__alloyId22089.add($.__views.__alloyId22090);
    $.__views.__alloyId22091 = Ti.UI.createView({
        id: "__alloyId22091"
    });
    $.__views.__alloyId22091 && $.addTopLevelView($.__views.__alloyId22091);
    $.__views.__alloyId22092 = Ti.UI.createView({
        id: "__alloyId22092"
    });
    $.__views.__alloyId22091.add($.__views.__alloyId22092);
    $.__views.__alloyId22093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22093"
    });
    $.__views.__alloyId22092.add($.__views.__alloyId22093);
    $.__views.__alloyId22094 = Ti.UI.createView({
        id: "__alloyId22094"
    });
    $.__views.__alloyId22094 && $.addTopLevelView($.__views.__alloyId22094);
    $.__views.__alloyId22095 = Ti.UI.createView({
        id: "__alloyId22095"
    });
    $.__views.__alloyId22094.add($.__views.__alloyId22095);
    $.__views.__alloyId22096 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22096"
    });
    $.__views.__alloyId22095.add($.__views.__alloyId22096);
    $.__views.__alloyId22097 = Ti.UI.createView({
        id: "__alloyId22097"
    });
    $.__views.__alloyId22097 && $.addTopLevelView($.__views.__alloyId22097);
    $.__views.__alloyId22098 = Ti.UI.createView({
        id: "__alloyId22098"
    });
    $.__views.__alloyId22097.add($.__views.__alloyId22098);
    $.__views.__alloyId22099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22099"
    });
    $.__views.__alloyId22098.add($.__views.__alloyId22099);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;