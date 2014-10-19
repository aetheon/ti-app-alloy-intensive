function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_766";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_766 = Ti.UI.createView({
        id: "widget_766"
    });
    $.__views.widget_766 && $.addTopLevelView($.__views.widget_766);
    $.__views.__alloyId19292 = Ti.UI.createView({
        id: "__alloyId19292"
    });
    $.__views.widget_766.add($.__views.__alloyId19292);
    $.__views.__alloyId19293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19293"
    });
    $.__views.__alloyId19292.add($.__views.__alloyId19293);
    $.__views.__alloyId19294 = Ti.UI.createView({
        id: "__alloyId19294"
    });
    $.__views.__alloyId19294 && $.addTopLevelView($.__views.__alloyId19294);
    $.__views.__alloyId19295 = Ti.UI.createView({
        id: "__alloyId19295"
    });
    $.__views.__alloyId19294.add($.__views.__alloyId19295);
    $.__views.__alloyId19296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19296"
    });
    $.__views.__alloyId19295.add($.__views.__alloyId19296);
    $.__views.__alloyId19297 = Ti.UI.createView({
        id: "__alloyId19297"
    });
    $.__views.__alloyId19297 && $.addTopLevelView($.__views.__alloyId19297);
    $.__views.__alloyId19298 = Ti.UI.createView({
        id: "__alloyId19298"
    });
    $.__views.__alloyId19297.add($.__views.__alloyId19298);
    $.__views.__alloyId19299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19299"
    });
    $.__views.__alloyId19298.add($.__views.__alloyId19299);
    $.__views.__alloyId19300 = Ti.UI.createView({
        id: "__alloyId19300"
    });
    $.__views.__alloyId19300 && $.addTopLevelView($.__views.__alloyId19300);
    $.__views.__alloyId19301 = Ti.UI.createView({
        id: "__alloyId19301"
    });
    $.__views.__alloyId19300.add($.__views.__alloyId19301);
    $.__views.__alloyId19302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19302"
    });
    $.__views.__alloyId19301.add($.__views.__alloyId19302);
    $.__views.__alloyId19303 = Ti.UI.createView({
        id: "__alloyId19303"
    });
    $.__views.__alloyId19303 && $.addTopLevelView($.__views.__alloyId19303);
    $.__views.__alloyId19304 = Ti.UI.createView({
        id: "__alloyId19304"
    });
    $.__views.__alloyId19303.add($.__views.__alloyId19304);
    $.__views.__alloyId19305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19305"
    });
    $.__views.__alloyId19304.add($.__views.__alloyId19305);
    $.__views.__alloyId19306 = Ti.UI.createView({
        id: "__alloyId19306"
    });
    $.__views.__alloyId19306 && $.addTopLevelView($.__views.__alloyId19306);
    $.__views.__alloyId19307 = Ti.UI.createView({
        id: "__alloyId19307"
    });
    $.__views.__alloyId19306.add($.__views.__alloyId19307);
    $.__views.__alloyId19308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19308"
    });
    $.__views.__alloyId19307.add($.__views.__alloyId19308);
    $.__views.__alloyId19309 = Ti.UI.createView({
        id: "__alloyId19309"
    });
    $.__views.__alloyId19309 && $.addTopLevelView($.__views.__alloyId19309);
    $.__views.__alloyId19310 = Ti.UI.createView({
        id: "__alloyId19310"
    });
    $.__views.__alloyId19309.add($.__views.__alloyId19310);
    $.__views.__alloyId19311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19311"
    });
    $.__views.__alloyId19310.add($.__views.__alloyId19311);
    $.__views.__alloyId19312 = Ti.UI.createView({
        id: "__alloyId19312"
    });
    $.__views.__alloyId19312 && $.addTopLevelView($.__views.__alloyId19312);
    $.__views.__alloyId19313 = Ti.UI.createView({
        id: "__alloyId19313"
    });
    $.__views.__alloyId19312.add($.__views.__alloyId19313);
    $.__views.__alloyId19314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19314"
    });
    $.__views.__alloyId19313.add($.__views.__alloyId19314);
    $.__views.__alloyId19315 = Ti.UI.createView({
        id: "__alloyId19315"
    });
    $.__views.__alloyId19315 && $.addTopLevelView($.__views.__alloyId19315);
    $.__views.__alloyId19316 = Ti.UI.createView({
        id: "__alloyId19316"
    });
    $.__views.__alloyId19315.add($.__views.__alloyId19316);
    $.__views.__alloyId19317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19317"
    });
    $.__views.__alloyId19316.add($.__views.__alloyId19317);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;