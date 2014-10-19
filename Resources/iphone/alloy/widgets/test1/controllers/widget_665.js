function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_665";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_665 = Ti.UI.createView({
        id: "widget_665"
    });
    $.__views.widget_665 && $.addTopLevelView($.__views.widget_665);
    $.__views.__alloyId16380 = Ti.UI.createView({
        id: "__alloyId16380"
    });
    $.__views.widget_665.add($.__views.__alloyId16380);
    $.__views.__alloyId16381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16381"
    });
    $.__views.__alloyId16380.add($.__views.__alloyId16381);
    $.__views.__alloyId16382 = Ti.UI.createView({
        id: "__alloyId16382"
    });
    $.__views.__alloyId16382 && $.addTopLevelView($.__views.__alloyId16382);
    $.__views.__alloyId16383 = Ti.UI.createView({
        id: "__alloyId16383"
    });
    $.__views.__alloyId16382.add($.__views.__alloyId16383);
    $.__views.__alloyId16384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16384"
    });
    $.__views.__alloyId16383.add($.__views.__alloyId16384);
    $.__views.__alloyId16385 = Ti.UI.createView({
        id: "__alloyId16385"
    });
    $.__views.__alloyId16385 && $.addTopLevelView($.__views.__alloyId16385);
    $.__views.__alloyId16386 = Ti.UI.createView({
        id: "__alloyId16386"
    });
    $.__views.__alloyId16385.add($.__views.__alloyId16386);
    $.__views.__alloyId16387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16387"
    });
    $.__views.__alloyId16386.add($.__views.__alloyId16387);
    $.__views.__alloyId16388 = Ti.UI.createView({
        id: "__alloyId16388"
    });
    $.__views.__alloyId16388 && $.addTopLevelView($.__views.__alloyId16388);
    $.__views.__alloyId16389 = Ti.UI.createView({
        id: "__alloyId16389"
    });
    $.__views.__alloyId16388.add($.__views.__alloyId16389);
    $.__views.__alloyId16390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16390"
    });
    $.__views.__alloyId16389.add($.__views.__alloyId16390);
    $.__views.__alloyId16391 = Ti.UI.createView({
        id: "__alloyId16391"
    });
    $.__views.__alloyId16391 && $.addTopLevelView($.__views.__alloyId16391);
    $.__views.__alloyId16392 = Ti.UI.createView({
        id: "__alloyId16392"
    });
    $.__views.__alloyId16391.add($.__views.__alloyId16392);
    $.__views.__alloyId16393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16393"
    });
    $.__views.__alloyId16392.add($.__views.__alloyId16393);
    $.__views.__alloyId16394 = Ti.UI.createView({
        id: "__alloyId16394"
    });
    $.__views.__alloyId16394 && $.addTopLevelView($.__views.__alloyId16394);
    $.__views.__alloyId16395 = Ti.UI.createView({
        id: "__alloyId16395"
    });
    $.__views.__alloyId16394.add($.__views.__alloyId16395);
    $.__views.__alloyId16396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16396"
    });
    $.__views.__alloyId16395.add($.__views.__alloyId16396);
    $.__views.__alloyId16397 = Ti.UI.createView({
        id: "__alloyId16397"
    });
    $.__views.__alloyId16397 && $.addTopLevelView($.__views.__alloyId16397);
    $.__views.__alloyId16398 = Ti.UI.createView({
        id: "__alloyId16398"
    });
    $.__views.__alloyId16397.add($.__views.__alloyId16398);
    $.__views.__alloyId16399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16399"
    });
    $.__views.__alloyId16398.add($.__views.__alloyId16399);
    $.__views.__alloyId16400 = Ti.UI.createView({
        id: "__alloyId16400"
    });
    $.__views.__alloyId16400 && $.addTopLevelView($.__views.__alloyId16400);
    $.__views.__alloyId16401 = Ti.UI.createView({
        id: "__alloyId16401"
    });
    $.__views.__alloyId16400.add($.__views.__alloyId16401);
    $.__views.__alloyId16402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16402"
    });
    $.__views.__alloyId16401.add($.__views.__alloyId16402);
    $.__views.__alloyId16403 = Ti.UI.createView({
        id: "__alloyId16403"
    });
    $.__views.__alloyId16403 && $.addTopLevelView($.__views.__alloyId16403);
    $.__views.__alloyId16404 = Ti.UI.createView({
        id: "__alloyId16404"
    });
    $.__views.__alloyId16403.add($.__views.__alloyId16404);
    $.__views.__alloyId16405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16405"
    });
    $.__views.__alloyId16404.add($.__views.__alloyId16405);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;