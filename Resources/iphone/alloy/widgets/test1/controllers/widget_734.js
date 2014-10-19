function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_734";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_734 = Ti.UI.createView({
        id: "widget_734"
    });
    $.__views.widget_734 && $.addTopLevelView($.__views.widget_734);
    $.__views.__alloyId18382 = Ti.UI.createView({
        id: "__alloyId18382"
    });
    $.__views.widget_734.add($.__views.__alloyId18382);
    $.__views.__alloyId18383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18383"
    });
    $.__views.__alloyId18382.add($.__views.__alloyId18383);
    $.__views.__alloyId18384 = Ti.UI.createView({
        id: "__alloyId18384"
    });
    $.__views.__alloyId18384 && $.addTopLevelView($.__views.__alloyId18384);
    $.__views.__alloyId18385 = Ti.UI.createView({
        id: "__alloyId18385"
    });
    $.__views.__alloyId18384.add($.__views.__alloyId18385);
    $.__views.__alloyId18386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18386"
    });
    $.__views.__alloyId18385.add($.__views.__alloyId18386);
    $.__views.__alloyId18387 = Ti.UI.createView({
        id: "__alloyId18387"
    });
    $.__views.__alloyId18387 && $.addTopLevelView($.__views.__alloyId18387);
    $.__views.__alloyId18388 = Ti.UI.createView({
        id: "__alloyId18388"
    });
    $.__views.__alloyId18387.add($.__views.__alloyId18388);
    $.__views.__alloyId18389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18389"
    });
    $.__views.__alloyId18388.add($.__views.__alloyId18389);
    $.__views.__alloyId18390 = Ti.UI.createView({
        id: "__alloyId18390"
    });
    $.__views.__alloyId18390 && $.addTopLevelView($.__views.__alloyId18390);
    $.__views.__alloyId18391 = Ti.UI.createView({
        id: "__alloyId18391"
    });
    $.__views.__alloyId18390.add($.__views.__alloyId18391);
    $.__views.__alloyId18392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18392"
    });
    $.__views.__alloyId18391.add($.__views.__alloyId18392);
    $.__views.__alloyId18393 = Ti.UI.createView({
        id: "__alloyId18393"
    });
    $.__views.__alloyId18393 && $.addTopLevelView($.__views.__alloyId18393);
    $.__views.__alloyId18394 = Ti.UI.createView({
        id: "__alloyId18394"
    });
    $.__views.__alloyId18393.add($.__views.__alloyId18394);
    $.__views.__alloyId18395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18395"
    });
    $.__views.__alloyId18394.add($.__views.__alloyId18395);
    $.__views.__alloyId18396 = Ti.UI.createView({
        id: "__alloyId18396"
    });
    $.__views.__alloyId18396 && $.addTopLevelView($.__views.__alloyId18396);
    $.__views.__alloyId18397 = Ti.UI.createView({
        id: "__alloyId18397"
    });
    $.__views.__alloyId18396.add($.__views.__alloyId18397);
    $.__views.__alloyId18398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18398"
    });
    $.__views.__alloyId18397.add($.__views.__alloyId18398);
    $.__views.__alloyId18399 = Ti.UI.createView({
        id: "__alloyId18399"
    });
    $.__views.__alloyId18399 && $.addTopLevelView($.__views.__alloyId18399);
    $.__views.__alloyId18400 = Ti.UI.createView({
        id: "__alloyId18400"
    });
    $.__views.__alloyId18399.add($.__views.__alloyId18400);
    $.__views.__alloyId18401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18401"
    });
    $.__views.__alloyId18400.add($.__views.__alloyId18401);
    $.__views.__alloyId18402 = Ti.UI.createView({
        id: "__alloyId18402"
    });
    $.__views.__alloyId18402 && $.addTopLevelView($.__views.__alloyId18402);
    $.__views.__alloyId18403 = Ti.UI.createView({
        id: "__alloyId18403"
    });
    $.__views.__alloyId18402.add($.__views.__alloyId18403);
    $.__views.__alloyId18404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18404"
    });
    $.__views.__alloyId18403.add($.__views.__alloyId18404);
    $.__views.__alloyId18405 = Ti.UI.createView({
        id: "__alloyId18405"
    });
    $.__views.__alloyId18405 && $.addTopLevelView($.__views.__alloyId18405);
    $.__views.__alloyId18406 = Ti.UI.createView({
        id: "__alloyId18406"
    });
    $.__views.__alloyId18405.add($.__views.__alloyId18406);
    $.__views.__alloyId18407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18407"
    });
    $.__views.__alloyId18406.add($.__views.__alloyId18407);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;