function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_942";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_942 = Ti.UI.createView({
        id: "widget_942"
    });
    $.__views.widget_942 && $.addTopLevelView($.__views.widget_942);
    $.__views.__alloyId24388 = Ti.UI.createView({
        id: "__alloyId24388"
    });
    $.__views.widget_942.add($.__views.__alloyId24388);
    $.__views.__alloyId24389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24389"
    });
    $.__views.__alloyId24388.add($.__views.__alloyId24389);
    $.__views.__alloyId24390 = Ti.UI.createView({
        id: "__alloyId24390"
    });
    $.__views.__alloyId24390 && $.addTopLevelView($.__views.__alloyId24390);
    $.__views.__alloyId24391 = Ti.UI.createView({
        id: "__alloyId24391"
    });
    $.__views.__alloyId24390.add($.__views.__alloyId24391);
    $.__views.__alloyId24392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24392"
    });
    $.__views.__alloyId24391.add($.__views.__alloyId24392);
    $.__views.__alloyId24393 = Ti.UI.createView({
        id: "__alloyId24393"
    });
    $.__views.__alloyId24393 && $.addTopLevelView($.__views.__alloyId24393);
    $.__views.__alloyId24394 = Ti.UI.createView({
        id: "__alloyId24394"
    });
    $.__views.__alloyId24393.add($.__views.__alloyId24394);
    $.__views.__alloyId24395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24395"
    });
    $.__views.__alloyId24394.add($.__views.__alloyId24395);
    $.__views.__alloyId24396 = Ti.UI.createView({
        id: "__alloyId24396"
    });
    $.__views.__alloyId24396 && $.addTopLevelView($.__views.__alloyId24396);
    $.__views.__alloyId24397 = Ti.UI.createView({
        id: "__alloyId24397"
    });
    $.__views.__alloyId24396.add($.__views.__alloyId24397);
    $.__views.__alloyId24398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24398"
    });
    $.__views.__alloyId24397.add($.__views.__alloyId24398);
    $.__views.__alloyId24399 = Ti.UI.createView({
        id: "__alloyId24399"
    });
    $.__views.__alloyId24399 && $.addTopLevelView($.__views.__alloyId24399);
    $.__views.__alloyId24400 = Ti.UI.createView({
        id: "__alloyId24400"
    });
    $.__views.__alloyId24399.add($.__views.__alloyId24400);
    $.__views.__alloyId24401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24401"
    });
    $.__views.__alloyId24400.add($.__views.__alloyId24401);
    $.__views.__alloyId24402 = Ti.UI.createView({
        id: "__alloyId24402"
    });
    $.__views.__alloyId24402 && $.addTopLevelView($.__views.__alloyId24402);
    $.__views.__alloyId24403 = Ti.UI.createView({
        id: "__alloyId24403"
    });
    $.__views.__alloyId24402.add($.__views.__alloyId24403);
    $.__views.__alloyId24404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24404"
    });
    $.__views.__alloyId24403.add($.__views.__alloyId24404);
    $.__views.__alloyId24405 = Ti.UI.createView({
        id: "__alloyId24405"
    });
    $.__views.__alloyId24405 && $.addTopLevelView($.__views.__alloyId24405);
    $.__views.__alloyId24406 = Ti.UI.createView({
        id: "__alloyId24406"
    });
    $.__views.__alloyId24405.add($.__views.__alloyId24406);
    $.__views.__alloyId24407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24407"
    });
    $.__views.__alloyId24406.add($.__views.__alloyId24407);
    $.__views.__alloyId24408 = Ti.UI.createView({
        id: "__alloyId24408"
    });
    $.__views.__alloyId24408 && $.addTopLevelView($.__views.__alloyId24408);
    $.__views.__alloyId24409 = Ti.UI.createView({
        id: "__alloyId24409"
    });
    $.__views.__alloyId24408.add($.__views.__alloyId24409);
    $.__views.__alloyId24410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24410"
    });
    $.__views.__alloyId24409.add($.__views.__alloyId24410);
    $.__views.__alloyId24411 = Ti.UI.createView({
        id: "__alloyId24411"
    });
    $.__views.__alloyId24411 && $.addTopLevelView($.__views.__alloyId24411);
    $.__views.__alloyId24412 = Ti.UI.createView({
        id: "__alloyId24412"
    });
    $.__views.__alloyId24411.add($.__views.__alloyId24412);
    $.__views.__alloyId24413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24413"
    });
    $.__views.__alloyId24412.add($.__views.__alloyId24413);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;