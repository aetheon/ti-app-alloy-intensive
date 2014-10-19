function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_596";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_596 = Ti.UI.createView({
        id: "widget_596"
    });
    $.__views.widget_596 && $.addTopLevelView($.__views.widget_596);
    $.__views.__alloyId14378 = Ti.UI.createView({
        id: "__alloyId14378"
    });
    $.__views.widget_596.add($.__views.__alloyId14378);
    $.__views.__alloyId14379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14379"
    });
    $.__views.__alloyId14378.add($.__views.__alloyId14379);
    $.__views.__alloyId14380 = Ti.UI.createView({
        id: "__alloyId14380"
    });
    $.__views.__alloyId14380 && $.addTopLevelView($.__views.__alloyId14380);
    $.__views.__alloyId14381 = Ti.UI.createView({
        id: "__alloyId14381"
    });
    $.__views.__alloyId14380.add($.__views.__alloyId14381);
    $.__views.__alloyId14382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14382"
    });
    $.__views.__alloyId14381.add($.__views.__alloyId14382);
    $.__views.__alloyId14383 = Ti.UI.createView({
        id: "__alloyId14383"
    });
    $.__views.__alloyId14383 && $.addTopLevelView($.__views.__alloyId14383);
    $.__views.__alloyId14384 = Ti.UI.createView({
        id: "__alloyId14384"
    });
    $.__views.__alloyId14383.add($.__views.__alloyId14384);
    $.__views.__alloyId14385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14385"
    });
    $.__views.__alloyId14384.add($.__views.__alloyId14385);
    $.__views.__alloyId14386 = Ti.UI.createView({
        id: "__alloyId14386"
    });
    $.__views.__alloyId14386 && $.addTopLevelView($.__views.__alloyId14386);
    $.__views.__alloyId14387 = Ti.UI.createView({
        id: "__alloyId14387"
    });
    $.__views.__alloyId14386.add($.__views.__alloyId14387);
    $.__views.__alloyId14388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14388"
    });
    $.__views.__alloyId14387.add($.__views.__alloyId14388);
    $.__views.__alloyId14389 = Ti.UI.createView({
        id: "__alloyId14389"
    });
    $.__views.__alloyId14389 && $.addTopLevelView($.__views.__alloyId14389);
    $.__views.__alloyId14390 = Ti.UI.createView({
        id: "__alloyId14390"
    });
    $.__views.__alloyId14389.add($.__views.__alloyId14390);
    $.__views.__alloyId14391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14391"
    });
    $.__views.__alloyId14390.add($.__views.__alloyId14391);
    $.__views.__alloyId14392 = Ti.UI.createView({
        id: "__alloyId14392"
    });
    $.__views.__alloyId14392 && $.addTopLevelView($.__views.__alloyId14392);
    $.__views.__alloyId14393 = Ti.UI.createView({
        id: "__alloyId14393"
    });
    $.__views.__alloyId14392.add($.__views.__alloyId14393);
    $.__views.__alloyId14394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14394"
    });
    $.__views.__alloyId14393.add($.__views.__alloyId14394);
    $.__views.__alloyId14395 = Ti.UI.createView({
        id: "__alloyId14395"
    });
    $.__views.__alloyId14395 && $.addTopLevelView($.__views.__alloyId14395);
    $.__views.__alloyId14396 = Ti.UI.createView({
        id: "__alloyId14396"
    });
    $.__views.__alloyId14395.add($.__views.__alloyId14396);
    $.__views.__alloyId14397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14397"
    });
    $.__views.__alloyId14396.add($.__views.__alloyId14397);
    $.__views.__alloyId14398 = Ti.UI.createView({
        id: "__alloyId14398"
    });
    $.__views.__alloyId14398 && $.addTopLevelView($.__views.__alloyId14398);
    $.__views.__alloyId14399 = Ti.UI.createView({
        id: "__alloyId14399"
    });
    $.__views.__alloyId14398.add($.__views.__alloyId14399);
    $.__views.__alloyId14400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14400"
    });
    $.__views.__alloyId14399.add($.__views.__alloyId14400);
    $.__views.__alloyId14401 = Ti.UI.createView({
        id: "__alloyId14401"
    });
    $.__views.__alloyId14401 && $.addTopLevelView($.__views.__alloyId14401);
    $.__views.__alloyId14402 = Ti.UI.createView({
        id: "__alloyId14402"
    });
    $.__views.__alloyId14401.add($.__views.__alloyId14402);
    $.__views.__alloyId14403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14403"
    });
    $.__views.__alloyId14402.add($.__views.__alloyId14403);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;