function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_284";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_284 = Ti.UI.createView({
        id: "widget_284"
    });
    $.__views.widget_284 && $.addTopLevelView($.__views.widget_284);
    $.__views.__alloyId5382 = Ti.UI.createView({
        id: "__alloyId5382"
    });
    $.__views.widget_284.add($.__views.__alloyId5382);
    $.__views.__alloyId5383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5383"
    });
    $.__views.__alloyId5382.add($.__views.__alloyId5383);
    $.__views.__alloyId5384 = Ti.UI.createView({
        id: "__alloyId5384"
    });
    $.__views.__alloyId5384 && $.addTopLevelView($.__views.__alloyId5384);
    $.__views.__alloyId5385 = Ti.UI.createView({
        id: "__alloyId5385"
    });
    $.__views.__alloyId5384.add($.__views.__alloyId5385);
    $.__views.__alloyId5386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5386"
    });
    $.__views.__alloyId5385.add($.__views.__alloyId5386);
    $.__views.__alloyId5387 = Ti.UI.createView({
        id: "__alloyId5387"
    });
    $.__views.__alloyId5387 && $.addTopLevelView($.__views.__alloyId5387);
    $.__views.__alloyId5388 = Ti.UI.createView({
        id: "__alloyId5388"
    });
    $.__views.__alloyId5387.add($.__views.__alloyId5388);
    $.__views.__alloyId5389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5389"
    });
    $.__views.__alloyId5388.add($.__views.__alloyId5389);
    $.__views.__alloyId5390 = Ti.UI.createView({
        id: "__alloyId5390"
    });
    $.__views.__alloyId5390 && $.addTopLevelView($.__views.__alloyId5390);
    $.__views.__alloyId5391 = Ti.UI.createView({
        id: "__alloyId5391"
    });
    $.__views.__alloyId5390.add($.__views.__alloyId5391);
    $.__views.__alloyId5392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5392"
    });
    $.__views.__alloyId5391.add($.__views.__alloyId5392);
    $.__views.__alloyId5393 = Ti.UI.createView({
        id: "__alloyId5393"
    });
    $.__views.__alloyId5393 && $.addTopLevelView($.__views.__alloyId5393);
    $.__views.__alloyId5394 = Ti.UI.createView({
        id: "__alloyId5394"
    });
    $.__views.__alloyId5393.add($.__views.__alloyId5394);
    $.__views.__alloyId5395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5395"
    });
    $.__views.__alloyId5394.add($.__views.__alloyId5395);
    $.__views.__alloyId5396 = Ti.UI.createView({
        id: "__alloyId5396"
    });
    $.__views.__alloyId5396 && $.addTopLevelView($.__views.__alloyId5396);
    $.__views.__alloyId5397 = Ti.UI.createView({
        id: "__alloyId5397"
    });
    $.__views.__alloyId5396.add($.__views.__alloyId5397);
    $.__views.__alloyId5398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5398"
    });
    $.__views.__alloyId5397.add($.__views.__alloyId5398);
    $.__views.__alloyId5399 = Ti.UI.createView({
        id: "__alloyId5399"
    });
    $.__views.__alloyId5399 && $.addTopLevelView($.__views.__alloyId5399);
    $.__views.__alloyId5400 = Ti.UI.createView({
        id: "__alloyId5400"
    });
    $.__views.__alloyId5399.add($.__views.__alloyId5400);
    $.__views.__alloyId5401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5401"
    });
    $.__views.__alloyId5400.add($.__views.__alloyId5401);
    $.__views.__alloyId5402 = Ti.UI.createView({
        id: "__alloyId5402"
    });
    $.__views.__alloyId5402 && $.addTopLevelView($.__views.__alloyId5402);
    $.__views.__alloyId5403 = Ti.UI.createView({
        id: "__alloyId5403"
    });
    $.__views.__alloyId5402.add($.__views.__alloyId5403);
    $.__views.__alloyId5404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5404"
    });
    $.__views.__alloyId5403.add($.__views.__alloyId5404);
    $.__views.__alloyId5405 = Ti.UI.createView({
        id: "__alloyId5405"
    });
    $.__views.__alloyId5405 && $.addTopLevelView($.__views.__alloyId5405);
    $.__views.__alloyId5406 = Ti.UI.createView({
        id: "__alloyId5406"
    });
    $.__views.__alloyId5405.add($.__views.__alloyId5406);
    $.__views.__alloyId5407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5407"
    });
    $.__views.__alloyId5406.add($.__views.__alloyId5407);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;