function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_454";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_454 = Ti.UI.createView({
        id: "widget_454"
    });
    $.__views.widget_454 && $.addTopLevelView($.__views.widget_454);
    $.__views.__alloyId10296 = Ti.UI.createView({
        id: "__alloyId10296"
    });
    $.__views.widget_454.add($.__views.__alloyId10296);
    $.__views.__alloyId10297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10297"
    });
    $.__views.__alloyId10296.add($.__views.__alloyId10297);
    $.__views.__alloyId10298 = Ti.UI.createView({
        id: "__alloyId10298"
    });
    $.__views.__alloyId10298 && $.addTopLevelView($.__views.__alloyId10298);
    $.__views.__alloyId10299 = Ti.UI.createView({
        id: "__alloyId10299"
    });
    $.__views.__alloyId10298.add($.__views.__alloyId10299);
    $.__views.__alloyId10300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10300"
    });
    $.__views.__alloyId10299.add($.__views.__alloyId10300);
    $.__views.__alloyId10301 = Ti.UI.createView({
        id: "__alloyId10301"
    });
    $.__views.__alloyId10301 && $.addTopLevelView($.__views.__alloyId10301);
    $.__views.__alloyId10302 = Ti.UI.createView({
        id: "__alloyId10302"
    });
    $.__views.__alloyId10301.add($.__views.__alloyId10302);
    $.__views.__alloyId10303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10303"
    });
    $.__views.__alloyId10302.add($.__views.__alloyId10303);
    $.__views.__alloyId10304 = Ti.UI.createView({
        id: "__alloyId10304"
    });
    $.__views.__alloyId10304 && $.addTopLevelView($.__views.__alloyId10304);
    $.__views.__alloyId10305 = Ti.UI.createView({
        id: "__alloyId10305"
    });
    $.__views.__alloyId10304.add($.__views.__alloyId10305);
    $.__views.__alloyId10306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10306"
    });
    $.__views.__alloyId10305.add($.__views.__alloyId10306);
    $.__views.__alloyId10307 = Ti.UI.createView({
        id: "__alloyId10307"
    });
    $.__views.__alloyId10307 && $.addTopLevelView($.__views.__alloyId10307);
    $.__views.__alloyId10308 = Ti.UI.createView({
        id: "__alloyId10308"
    });
    $.__views.__alloyId10307.add($.__views.__alloyId10308);
    $.__views.__alloyId10309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10309"
    });
    $.__views.__alloyId10308.add($.__views.__alloyId10309);
    $.__views.__alloyId10310 = Ti.UI.createView({
        id: "__alloyId10310"
    });
    $.__views.__alloyId10310 && $.addTopLevelView($.__views.__alloyId10310);
    $.__views.__alloyId10311 = Ti.UI.createView({
        id: "__alloyId10311"
    });
    $.__views.__alloyId10310.add($.__views.__alloyId10311);
    $.__views.__alloyId10312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10312"
    });
    $.__views.__alloyId10311.add($.__views.__alloyId10312);
    $.__views.__alloyId10313 = Ti.UI.createView({
        id: "__alloyId10313"
    });
    $.__views.__alloyId10313 && $.addTopLevelView($.__views.__alloyId10313);
    $.__views.__alloyId10314 = Ti.UI.createView({
        id: "__alloyId10314"
    });
    $.__views.__alloyId10313.add($.__views.__alloyId10314);
    $.__views.__alloyId10315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10315"
    });
    $.__views.__alloyId10314.add($.__views.__alloyId10315);
    $.__views.__alloyId10316 = Ti.UI.createView({
        id: "__alloyId10316"
    });
    $.__views.__alloyId10316 && $.addTopLevelView($.__views.__alloyId10316);
    $.__views.__alloyId10317 = Ti.UI.createView({
        id: "__alloyId10317"
    });
    $.__views.__alloyId10316.add($.__views.__alloyId10317);
    $.__views.__alloyId10318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10318"
    });
    $.__views.__alloyId10317.add($.__views.__alloyId10318);
    $.__views.__alloyId10319 = Ti.UI.createView({
        id: "__alloyId10319"
    });
    $.__views.__alloyId10319 && $.addTopLevelView($.__views.__alloyId10319);
    $.__views.__alloyId10320 = Ti.UI.createView({
        id: "__alloyId10320"
    });
    $.__views.__alloyId10319.add($.__views.__alloyId10320);
    $.__views.__alloyId10321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10321"
    });
    $.__views.__alloyId10320.add($.__views.__alloyId10321);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;