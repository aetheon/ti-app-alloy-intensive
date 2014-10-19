function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_63";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_63 = Ti.UI.createView({
        id: "widget_63"
    });
    $.__views.widget_63 && $.addTopLevelView($.__views.widget_63);
    $.__views.__alloyId15366 = Ti.UI.createView({
        id: "__alloyId15366"
    });
    $.__views.widget_63.add($.__views.__alloyId15366);
    $.__views.__alloyId15367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15367"
    });
    $.__views.__alloyId15366.add($.__views.__alloyId15367);
    $.__views.__alloyId15368 = Ti.UI.createView({
        id: "__alloyId15368"
    });
    $.__views.__alloyId15368 && $.addTopLevelView($.__views.__alloyId15368);
    $.__views.__alloyId15369 = Ti.UI.createView({
        id: "__alloyId15369"
    });
    $.__views.__alloyId15368.add($.__views.__alloyId15369);
    $.__views.__alloyId15370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15370"
    });
    $.__views.__alloyId15369.add($.__views.__alloyId15370);
    $.__views.__alloyId15371 = Ti.UI.createView({
        id: "__alloyId15371"
    });
    $.__views.__alloyId15371 && $.addTopLevelView($.__views.__alloyId15371);
    $.__views.__alloyId15372 = Ti.UI.createView({
        id: "__alloyId15372"
    });
    $.__views.__alloyId15371.add($.__views.__alloyId15372);
    $.__views.__alloyId15373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15373"
    });
    $.__views.__alloyId15372.add($.__views.__alloyId15373);
    $.__views.__alloyId15374 = Ti.UI.createView({
        id: "__alloyId15374"
    });
    $.__views.__alloyId15374 && $.addTopLevelView($.__views.__alloyId15374);
    $.__views.__alloyId15375 = Ti.UI.createView({
        id: "__alloyId15375"
    });
    $.__views.__alloyId15374.add($.__views.__alloyId15375);
    $.__views.__alloyId15376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15376"
    });
    $.__views.__alloyId15375.add($.__views.__alloyId15376);
    $.__views.__alloyId15377 = Ti.UI.createView({
        id: "__alloyId15377"
    });
    $.__views.__alloyId15377 && $.addTopLevelView($.__views.__alloyId15377);
    $.__views.__alloyId15378 = Ti.UI.createView({
        id: "__alloyId15378"
    });
    $.__views.__alloyId15377.add($.__views.__alloyId15378);
    $.__views.__alloyId15379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15379"
    });
    $.__views.__alloyId15378.add($.__views.__alloyId15379);
    $.__views.__alloyId15380 = Ti.UI.createView({
        id: "__alloyId15380"
    });
    $.__views.__alloyId15380 && $.addTopLevelView($.__views.__alloyId15380);
    $.__views.__alloyId15381 = Ti.UI.createView({
        id: "__alloyId15381"
    });
    $.__views.__alloyId15380.add($.__views.__alloyId15381);
    $.__views.__alloyId15382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15382"
    });
    $.__views.__alloyId15381.add($.__views.__alloyId15382);
    $.__views.__alloyId15383 = Ti.UI.createView({
        id: "__alloyId15383"
    });
    $.__views.__alloyId15383 && $.addTopLevelView($.__views.__alloyId15383);
    $.__views.__alloyId15384 = Ti.UI.createView({
        id: "__alloyId15384"
    });
    $.__views.__alloyId15383.add($.__views.__alloyId15384);
    $.__views.__alloyId15385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15385"
    });
    $.__views.__alloyId15384.add($.__views.__alloyId15385);
    $.__views.__alloyId15386 = Ti.UI.createView({
        id: "__alloyId15386"
    });
    $.__views.__alloyId15386 && $.addTopLevelView($.__views.__alloyId15386);
    $.__views.__alloyId15387 = Ti.UI.createView({
        id: "__alloyId15387"
    });
    $.__views.__alloyId15386.add($.__views.__alloyId15387);
    $.__views.__alloyId15388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15388"
    });
    $.__views.__alloyId15387.add($.__views.__alloyId15388);
    $.__views.__alloyId15389 = Ti.UI.createView({
        id: "__alloyId15389"
    });
    $.__views.__alloyId15389 && $.addTopLevelView($.__views.__alloyId15389);
    $.__views.__alloyId15390 = Ti.UI.createView({
        id: "__alloyId15390"
    });
    $.__views.__alloyId15389.add($.__views.__alloyId15390);
    $.__views.__alloyId15391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15391"
    });
    $.__views.__alloyId15390.add($.__views.__alloyId15391);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;