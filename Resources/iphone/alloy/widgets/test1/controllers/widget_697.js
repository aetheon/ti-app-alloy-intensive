function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_697";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_697 = Ti.UI.createView({
        id: "widget_697"
    });
    $.__views.widget_697 && $.addTopLevelView($.__views.widget_697);
    $.__views.__alloyId17290 = Ti.UI.createView({
        id: "__alloyId17290"
    });
    $.__views.widget_697.add($.__views.__alloyId17290);
    $.__views.__alloyId17291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17291"
    });
    $.__views.__alloyId17290.add($.__views.__alloyId17291);
    $.__views.__alloyId17292 = Ti.UI.createView({
        id: "__alloyId17292"
    });
    $.__views.__alloyId17292 && $.addTopLevelView($.__views.__alloyId17292);
    $.__views.__alloyId17293 = Ti.UI.createView({
        id: "__alloyId17293"
    });
    $.__views.__alloyId17292.add($.__views.__alloyId17293);
    $.__views.__alloyId17294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17294"
    });
    $.__views.__alloyId17293.add($.__views.__alloyId17294);
    $.__views.__alloyId17295 = Ti.UI.createView({
        id: "__alloyId17295"
    });
    $.__views.__alloyId17295 && $.addTopLevelView($.__views.__alloyId17295);
    $.__views.__alloyId17296 = Ti.UI.createView({
        id: "__alloyId17296"
    });
    $.__views.__alloyId17295.add($.__views.__alloyId17296);
    $.__views.__alloyId17297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17297"
    });
    $.__views.__alloyId17296.add($.__views.__alloyId17297);
    $.__views.__alloyId17298 = Ti.UI.createView({
        id: "__alloyId17298"
    });
    $.__views.__alloyId17298 && $.addTopLevelView($.__views.__alloyId17298);
    $.__views.__alloyId17299 = Ti.UI.createView({
        id: "__alloyId17299"
    });
    $.__views.__alloyId17298.add($.__views.__alloyId17299);
    $.__views.__alloyId17300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17300"
    });
    $.__views.__alloyId17299.add($.__views.__alloyId17300);
    $.__views.__alloyId17301 = Ti.UI.createView({
        id: "__alloyId17301"
    });
    $.__views.__alloyId17301 && $.addTopLevelView($.__views.__alloyId17301);
    $.__views.__alloyId17302 = Ti.UI.createView({
        id: "__alloyId17302"
    });
    $.__views.__alloyId17301.add($.__views.__alloyId17302);
    $.__views.__alloyId17303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17303"
    });
    $.__views.__alloyId17302.add($.__views.__alloyId17303);
    $.__views.__alloyId17304 = Ti.UI.createView({
        id: "__alloyId17304"
    });
    $.__views.__alloyId17304 && $.addTopLevelView($.__views.__alloyId17304);
    $.__views.__alloyId17305 = Ti.UI.createView({
        id: "__alloyId17305"
    });
    $.__views.__alloyId17304.add($.__views.__alloyId17305);
    $.__views.__alloyId17306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17306"
    });
    $.__views.__alloyId17305.add($.__views.__alloyId17306);
    $.__views.__alloyId17307 = Ti.UI.createView({
        id: "__alloyId17307"
    });
    $.__views.__alloyId17307 && $.addTopLevelView($.__views.__alloyId17307);
    $.__views.__alloyId17308 = Ti.UI.createView({
        id: "__alloyId17308"
    });
    $.__views.__alloyId17307.add($.__views.__alloyId17308);
    $.__views.__alloyId17309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17309"
    });
    $.__views.__alloyId17308.add($.__views.__alloyId17309);
    $.__views.__alloyId17310 = Ti.UI.createView({
        id: "__alloyId17310"
    });
    $.__views.__alloyId17310 && $.addTopLevelView($.__views.__alloyId17310);
    $.__views.__alloyId17311 = Ti.UI.createView({
        id: "__alloyId17311"
    });
    $.__views.__alloyId17310.add($.__views.__alloyId17311);
    $.__views.__alloyId17312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17312"
    });
    $.__views.__alloyId17311.add($.__views.__alloyId17312);
    $.__views.__alloyId17313 = Ti.UI.createView({
        id: "__alloyId17313"
    });
    $.__views.__alloyId17313 && $.addTopLevelView($.__views.__alloyId17313);
    $.__views.__alloyId17314 = Ti.UI.createView({
        id: "__alloyId17314"
    });
    $.__views.__alloyId17313.add($.__views.__alloyId17314);
    $.__views.__alloyId17315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17315"
    });
    $.__views.__alloyId17314.add($.__views.__alloyId17315);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;