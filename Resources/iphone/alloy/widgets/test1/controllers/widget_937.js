function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_937";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_937 = Ti.UI.createView({
        id: "widget_937"
    });
    $.__views.widget_937 && $.addTopLevelView($.__views.widget_937);
    $.__views.__alloyId24232 = Ti.UI.createView({
        id: "__alloyId24232"
    });
    $.__views.widget_937.add($.__views.__alloyId24232);
    $.__views.__alloyId24233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24233"
    });
    $.__views.__alloyId24232.add($.__views.__alloyId24233);
    $.__views.__alloyId24234 = Ti.UI.createView({
        id: "__alloyId24234"
    });
    $.__views.__alloyId24234 && $.addTopLevelView($.__views.__alloyId24234);
    $.__views.__alloyId24235 = Ti.UI.createView({
        id: "__alloyId24235"
    });
    $.__views.__alloyId24234.add($.__views.__alloyId24235);
    $.__views.__alloyId24236 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24236"
    });
    $.__views.__alloyId24235.add($.__views.__alloyId24236);
    $.__views.__alloyId24237 = Ti.UI.createView({
        id: "__alloyId24237"
    });
    $.__views.__alloyId24237 && $.addTopLevelView($.__views.__alloyId24237);
    $.__views.__alloyId24238 = Ti.UI.createView({
        id: "__alloyId24238"
    });
    $.__views.__alloyId24237.add($.__views.__alloyId24238);
    $.__views.__alloyId24239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24239"
    });
    $.__views.__alloyId24238.add($.__views.__alloyId24239);
    $.__views.__alloyId24240 = Ti.UI.createView({
        id: "__alloyId24240"
    });
    $.__views.__alloyId24240 && $.addTopLevelView($.__views.__alloyId24240);
    $.__views.__alloyId24241 = Ti.UI.createView({
        id: "__alloyId24241"
    });
    $.__views.__alloyId24240.add($.__views.__alloyId24241);
    $.__views.__alloyId24242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24242"
    });
    $.__views.__alloyId24241.add($.__views.__alloyId24242);
    $.__views.__alloyId24243 = Ti.UI.createView({
        id: "__alloyId24243"
    });
    $.__views.__alloyId24243 && $.addTopLevelView($.__views.__alloyId24243);
    $.__views.__alloyId24244 = Ti.UI.createView({
        id: "__alloyId24244"
    });
    $.__views.__alloyId24243.add($.__views.__alloyId24244);
    $.__views.__alloyId24245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24245"
    });
    $.__views.__alloyId24244.add($.__views.__alloyId24245);
    $.__views.__alloyId24246 = Ti.UI.createView({
        id: "__alloyId24246"
    });
    $.__views.__alloyId24246 && $.addTopLevelView($.__views.__alloyId24246);
    $.__views.__alloyId24247 = Ti.UI.createView({
        id: "__alloyId24247"
    });
    $.__views.__alloyId24246.add($.__views.__alloyId24247);
    $.__views.__alloyId24248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24248"
    });
    $.__views.__alloyId24247.add($.__views.__alloyId24248);
    $.__views.__alloyId24249 = Ti.UI.createView({
        id: "__alloyId24249"
    });
    $.__views.__alloyId24249 && $.addTopLevelView($.__views.__alloyId24249);
    $.__views.__alloyId24250 = Ti.UI.createView({
        id: "__alloyId24250"
    });
    $.__views.__alloyId24249.add($.__views.__alloyId24250);
    $.__views.__alloyId24251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24251"
    });
    $.__views.__alloyId24250.add($.__views.__alloyId24251);
    $.__views.__alloyId24252 = Ti.UI.createView({
        id: "__alloyId24252"
    });
    $.__views.__alloyId24252 && $.addTopLevelView($.__views.__alloyId24252);
    $.__views.__alloyId24253 = Ti.UI.createView({
        id: "__alloyId24253"
    });
    $.__views.__alloyId24252.add($.__views.__alloyId24253);
    $.__views.__alloyId24254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24254"
    });
    $.__views.__alloyId24253.add($.__views.__alloyId24254);
    $.__views.__alloyId24255 = Ti.UI.createView({
        id: "__alloyId24255"
    });
    $.__views.__alloyId24255 && $.addTopLevelView($.__views.__alloyId24255);
    $.__views.__alloyId24256 = Ti.UI.createView({
        id: "__alloyId24256"
    });
    $.__views.__alloyId24255.add($.__views.__alloyId24256);
    $.__views.__alloyId24257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24257"
    });
    $.__views.__alloyId24256.add($.__views.__alloyId24257);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;