function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_627";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_627 = Ti.UI.createView({
        id: "widget_627"
    });
    $.__views.widget_627 && $.addTopLevelView($.__views.widget_627);
    $.__views.__alloyId15288 = Ti.UI.createView({
        id: "__alloyId15288"
    });
    $.__views.widget_627.add($.__views.__alloyId15288);
    $.__views.__alloyId15289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15289"
    });
    $.__views.__alloyId15288.add($.__views.__alloyId15289);
    $.__views.__alloyId15290 = Ti.UI.createView({
        id: "__alloyId15290"
    });
    $.__views.__alloyId15290 && $.addTopLevelView($.__views.__alloyId15290);
    $.__views.__alloyId15291 = Ti.UI.createView({
        id: "__alloyId15291"
    });
    $.__views.__alloyId15290.add($.__views.__alloyId15291);
    $.__views.__alloyId15292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15292"
    });
    $.__views.__alloyId15291.add($.__views.__alloyId15292);
    $.__views.__alloyId15293 = Ti.UI.createView({
        id: "__alloyId15293"
    });
    $.__views.__alloyId15293 && $.addTopLevelView($.__views.__alloyId15293);
    $.__views.__alloyId15294 = Ti.UI.createView({
        id: "__alloyId15294"
    });
    $.__views.__alloyId15293.add($.__views.__alloyId15294);
    $.__views.__alloyId15295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15295"
    });
    $.__views.__alloyId15294.add($.__views.__alloyId15295);
    $.__views.__alloyId15296 = Ti.UI.createView({
        id: "__alloyId15296"
    });
    $.__views.__alloyId15296 && $.addTopLevelView($.__views.__alloyId15296);
    $.__views.__alloyId15297 = Ti.UI.createView({
        id: "__alloyId15297"
    });
    $.__views.__alloyId15296.add($.__views.__alloyId15297);
    $.__views.__alloyId15298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15298"
    });
    $.__views.__alloyId15297.add($.__views.__alloyId15298);
    $.__views.__alloyId15299 = Ti.UI.createView({
        id: "__alloyId15299"
    });
    $.__views.__alloyId15299 && $.addTopLevelView($.__views.__alloyId15299);
    $.__views.__alloyId15300 = Ti.UI.createView({
        id: "__alloyId15300"
    });
    $.__views.__alloyId15299.add($.__views.__alloyId15300);
    $.__views.__alloyId15301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15301"
    });
    $.__views.__alloyId15300.add($.__views.__alloyId15301);
    $.__views.__alloyId15302 = Ti.UI.createView({
        id: "__alloyId15302"
    });
    $.__views.__alloyId15302 && $.addTopLevelView($.__views.__alloyId15302);
    $.__views.__alloyId15303 = Ti.UI.createView({
        id: "__alloyId15303"
    });
    $.__views.__alloyId15302.add($.__views.__alloyId15303);
    $.__views.__alloyId15304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15304"
    });
    $.__views.__alloyId15303.add($.__views.__alloyId15304);
    $.__views.__alloyId15305 = Ti.UI.createView({
        id: "__alloyId15305"
    });
    $.__views.__alloyId15305 && $.addTopLevelView($.__views.__alloyId15305);
    $.__views.__alloyId15306 = Ti.UI.createView({
        id: "__alloyId15306"
    });
    $.__views.__alloyId15305.add($.__views.__alloyId15306);
    $.__views.__alloyId15307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15307"
    });
    $.__views.__alloyId15306.add($.__views.__alloyId15307);
    $.__views.__alloyId15308 = Ti.UI.createView({
        id: "__alloyId15308"
    });
    $.__views.__alloyId15308 && $.addTopLevelView($.__views.__alloyId15308);
    $.__views.__alloyId15309 = Ti.UI.createView({
        id: "__alloyId15309"
    });
    $.__views.__alloyId15308.add($.__views.__alloyId15309);
    $.__views.__alloyId15310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15310"
    });
    $.__views.__alloyId15309.add($.__views.__alloyId15310);
    $.__views.__alloyId15311 = Ti.UI.createView({
        id: "__alloyId15311"
    });
    $.__views.__alloyId15311 && $.addTopLevelView($.__views.__alloyId15311);
    $.__views.__alloyId15312 = Ti.UI.createView({
        id: "__alloyId15312"
    });
    $.__views.__alloyId15311.add($.__views.__alloyId15312);
    $.__views.__alloyId15313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15313"
    });
    $.__views.__alloyId15312.add($.__views.__alloyId15313);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;