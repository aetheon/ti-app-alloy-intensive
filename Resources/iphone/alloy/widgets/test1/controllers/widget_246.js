function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_246";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_246 = Ti.UI.createView({
        id: "widget_246"
    });
    $.__views.widget_246 && $.addTopLevelView($.__views.widget_246);
    $.__views.__alloyId4290 = Ti.UI.createView({
        id: "__alloyId4290"
    });
    $.__views.widget_246.add($.__views.__alloyId4290);
    $.__views.__alloyId4291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4291"
    });
    $.__views.__alloyId4290.add($.__views.__alloyId4291);
    $.__views.__alloyId4292 = Ti.UI.createView({
        id: "__alloyId4292"
    });
    $.__views.__alloyId4292 && $.addTopLevelView($.__views.__alloyId4292);
    $.__views.__alloyId4293 = Ti.UI.createView({
        id: "__alloyId4293"
    });
    $.__views.__alloyId4292.add($.__views.__alloyId4293);
    $.__views.__alloyId4294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4294"
    });
    $.__views.__alloyId4293.add($.__views.__alloyId4294);
    $.__views.__alloyId4295 = Ti.UI.createView({
        id: "__alloyId4295"
    });
    $.__views.__alloyId4295 && $.addTopLevelView($.__views.__alloyId4295);
    $.__views.__alloyId4296 = Ti.UI.createView({
        id: "__alloyId4296"
    });
    $.__views.__alloyId4295.add($.__views.__alloyId4296);
    $.__views.__alloyId4297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4297"
    });
    $.__views.__alloyId4296.add($.__views.__alloyId4297);
    $.__views.__alloyId4298 = Ti.UI.createView({
        id: "__alloyId4298"
    });
    $.__views.__alloyId4298 && $.addTopLevelView($.__views.__alloyId4298);
    $.__views.__alloyId4299 = Ti.UI.createView({
        id: "__alloyId4299"
    });
    $.__views.__alloyId4298.add($.__views.__alloyId4299);
    $.__views.__alloyId4300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4300"
    });
    $.__views.__alloyId4299.add($.__views.__alloyId4300);
    $.__views.__alloyId4301 = Ti.UI.createView({
        id: "__alloyId4301"
    });
    $.__views.__alloyId4301 && $.addTopLevelView($.__views.__alloyId4301);
    $.__views.__alloyId4302 = Ti.UI.createView({
        id: "__alloyId4302"
    });
    $.__views.__alloyId4301.add($.__views.__alloyId4302);
    $.__views.__alloyId4303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4303"
    });
    $.__views.__alloyId4302.add($.__views.__alloyId4303);
    $.__views.__alloyId4304 = Ti.UI.createView({
        id: "__alloyId4304"
    });
    $.__views.__alloyId4304 && $.addTopLevelView($.__views.__alloyId4304);
    $.__views.__alloyId4305 = Ti.UI.createView({
        id: "__alloyId4305"
    });
    $.__views.__alloyId4304.add($.__views.__alloyId4305);
    $.__views.__alloyId4306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4306"
    });
    $.__views.__alloyId4305.add($.__views.__alloyId4306);
    $.__views.__alloyId4307 = Ti.UI.createView({
        id: "__alloyId4307"
    });
    $.__views.__alloyId4307 && $.addTopLevelView($.__views.__alloyId4307);
    $.__views.__alloyId4308 = Ti.UI.createView({
        id: "__alloyId4308"
    });
    $.__views.__alloyId4307.add($.__views.__alloyId4308);
    $.__views.__alloyId4309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4309"
    });
    $.__views.__alloyId4308.add($.__views.__alloyId4309);
    $.__views.__alloyId4310 = Ti.UI.createView({
        id: "__alloyId4310"
    });
    $.__views.__alloyId4310 && $.addTopLevelView($.__views.__alloyId4310);
    $.__views.__alloyId4311 = Ti.UI.createView({
        id: "__alloyId4311"
    });
    $.__views.__alloyId4310.add($.__views.__alloyId4311);
    $.__views.__alloyId4312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4312"
    });
    $.__views.__alloyId4311.add($.__views.__alloyId4312);
    $.__views.__alloyId4313 = Ti.UI.createView({
        id: "__alloyId4313"
    });
    $.__views.__alloyId4313 && $.addTopLevelView($.__views.__alloyId4313);
    $.__views.__alloyId4314 = Ti.UI.createView({
        id: "__alloyId4314"
    });
    $.__views.__alloyId4313.add($.__views.__alloyId4314);
    $.__views.__alloyId4315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4315"
    });
    $.__views.__alloyId4314.add($.__views.__alloyId4315);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;