function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_87";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_87 = Ti.UI.createView({
        id: "widget_87"
    });
    $.__views.widget_87 && $.addTopLevelView($.__views.widget_87);
    $.__views.__alloyId22282 = Ti.UI.createView({
        id: "__alloyId22282"
    });
    $.__views.widget_87.add($.__views.__alloyId22282);
    $.__views.__alloyId22283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22283"
    });
    $.__views.__alloyId22282.add($.__views.__alloyId22283);
    $.__views.__alloyId22284 = Ti.UI.createView({
        id: "__alloyId22284"
    });
    $.__views.__alloyId22284 && $.addTopLevelView($.__views.__alloyId22284);
    $.__views.__alloyId22285 = Ti.UI.createView({
        id: "__alloyId22285"
    });
    $.__views.__alloyId22284.add($.__views.__alloyId22285);
    $.__views.__alloyId22286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22286"
    });
    $.__views.__alloyId22285.add($.__views.__alloyId22286);
    $.__views.__alloyId22287 = Ti.UI.createView({
        id: "__alloyId22287"
    });
    $.__views.__alloyId22287 && $.addTopLevelView($.__views.__alloyId22287);
    $.__views.__alloyId22288 = Ti.UI.createView({
        id: "__alloyId22288"
    });
    $.__views.__alloyId22287.add($.__views.__alloyId22288);
    $.__views.__alloyId22289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22289"
    });
    $.__views.__alloyId22288.add($.__views.__alloyId22289);
    $.__views.__alloyId22290 = Ti.UI.createView({
        id: "__alloyId22290"
    });
    $.__views.__alloyId22290 && $.addTopLevelView($.__views.__alloyId22290);
    $.__views.__alloyId22291 = Ti.UI.createView({
        id: "__alloyId22291"
    });
    $.__views.__alloyId22290.add($.__views.__alloyId22291);
    $.__views.__alloyId22292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22292"
    });
    $.__views.__alloyId22291.add($.__views.__alloyId22292);
    $.__views.__alloyId22293 = Ti.UI.createView({
        id: "__alloyId22293"
    });
    $.__views.__alloyId22293 && $.addTopLevelView($.__views.__alloyId22293);
    $.__views.__alloyId22294 = Ti.UI.createView({
        id: "__alloyId22294"
    });
    $.__views.__alloyId22293.add($.__views.__alloyId22294);
    $.__views.__alloyId22295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22295"
    });
    $.__views.__alloyId22294.add($.__views.__alloyId22295);
    $.__views.__alloyId22296 = Ti.UI.createView({
        id: "__alloyId22296"
    });
    $.__views.__alloyId22296 && $.addTopLevelView($.__views.__alloyId22296);
    $.__views.__alloyId22297 = Ti.UI.createView({
        id: "__alloyId22297"
    });
    $.__views.__alloyId22296.add($.__views.__alloyId22297);
    $.__views.__alloyId22298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22298"
    });
    $.__views.__alloyId22297.add($.__views.__alloyId22298);
    $.__views.__alloyId22299 = Ti.UI.createView({
        id: "__alloyId22299"
    });
    $.__views.__alloyId22299 && $.addTopLevelView($.__views.__alloyId22299);
    $.__views.__alloyId22300 = Ti.UI.createView({
        id: "__alloyId22300"
    });
    $.__views.__alloyId22299.add($.__views.__alloyId22300);
    $.__views.__alloyId22301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22301"
    });
    $.__views.__alloyId22300.add($.__views.__alloyId22301);
    $.__views.__alloyId22302 = Ti.UI.createView({
        id: "__alloyId22302"
    });
    $.__views.__alloyId22302 && $.addTopLevelView($.__views.__alloyId22302);
    $.__views.__alloyId22303 = Ti.UI.createView({
        id: "__alloyId22303"
    });
    $.__views.__alloyId22302.add($.__views.__alloyId22303);
    $.__views.__alloyId22304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22304"
    });
    $.__views.__alloyId22303.add($.__views.__alloyId22304);
    $.__views.__alloyId22305 = Ti.UI.createView({
        id: "__alloyId22305"
    });
    $.__views.__alloyId22305 && $.addTopLevelView($.__views.__alloyId22305);
    $.__views.__alloyId22306 = Ti.UI.createView({
        id: "__alloyId22306"
    });
    $.__views.__alloyId22305.add($.__views.__alloyId22306);
    $.__views.__alloyId22307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22307"
    });
    $.__views.__alloyId22306.add($.__views.__alloyId22307);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;