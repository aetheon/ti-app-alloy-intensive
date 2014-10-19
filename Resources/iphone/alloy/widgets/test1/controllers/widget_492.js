function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_492";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_492 = Ti.UI.createView({
        id: "widget_492"
    });
    $.__views.widget_492 && $.addTopLevelView($.__views.widget_492);
    $.__views.__alloyId11388 = Ti.UI.createView({
        id: "__alloyId11388"
    });
    $.__views.widget_492.add($.__views.__alloyId11388);
    $.__views.__alloyId11389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11389"
    });
    $.__views.__alloyId11388.add($.__views.__alloyId11389);
    $.__views.__alloyId11390 = Ti.UI.createView({
        id: "__alloyId11390"
    });
    $.__views.__alloyId11390 && $.addTopLevelView($.__views.__alloyId11390);
    $.__views.__alloyId11391 = Ti.UI.createView({
        id: "__alloyId11391"
    });
    $.__views.__alloyId11390.add($.__views.__alloyId11391);
    $.__views.__alloyId11392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11392"
    });
    $.__views.__alloyId11391.add($.__views.__alloyId11392);
    $.__views.__alloyId11393 = Ti.UI.createView({
        id: "__alloyId11393"
    });
    $.__views.__alloyId11393 && $.addTopLevelView($.__views.__alloyId11393);
    $.__views.__alloyId11394 = Ti.UI.createView({
        id: "__alloyId11394"
    });
    $.__views.__alloyId11393.add($.__views.__alloyId11394);
    $.__views.__alloyId11395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11395"
    });
    $.__views.__alloyId11394.add($.__views.__alloyId11395);
    $.__views.__alloyId11396 = Ti.UI.createView({
        id: "__alloyId11396"
    });
    $.__views.__alloyId11396 && $.addTopLevelView($.__views.__alloyId11396);
    $.__views.__alloyId11397 = Ti.UI.createView({
        id: "__alloyId11397"
    });
    $.__views.__alloyId11396.add($.__views.__alloyId11397);
    $.__views.__alloyId11398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11398"
    });
    $.__views.__alloyId11397.add($.__views.__alloyId11398);
    $.__views.__alloyId11399 = Ti.UI.createView({
        id: "__alloyId11399"
    });
    $.__views.__alloyId11399 && $.addTopLevelView($.__views.__alloyId11399);
    $.__views.__alloyId11400 = Ti.UI.createView({
        id: "__alloyId11400"
    });
    $.__views.__alloyId11399.add($.__views.__alloyId11400);
    $.__views.__alloyId11401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11401"
    });
    $.__views.__alloyId11400.add($.__views.__alloyId11401);
    $.__views.__alloyId11402 = Ti.UI.createView({
        id: "__alloyId11402"
    });
    $.__views.__alloyId11402 && $.addTopLevelView($.__views.__alloyId11402);
    $.__views.__alloyId11403 = Ti.UI.createView({
        id: "__alloyId11403"
    });
    $.__views.__alloyId11402.add($.__views.__alloyId11403);
    $.__views.__alloyId11404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11404"
    });
    $.__views.__alloyId11403.add($.__views.__alloyId11404);
    $.__views.__alloyId11405 = Ti.UI.createView({
        id: "__alloyId11405"
    });
    $.__views.__alloyId11405 && $.addTopLevelView($.__views.__alloyId11405);
    $.__views.__alloyId11406 = Ti.UI.createView({
        id: "__alloyId11406"
    });
    $.__views.__alloyId11405.add($.__views.__alloyId11406);
    $.__views.__alloyId11407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11407"
    });
    $.__views.__alloyId11406.add($.__views.__alloyId11407);
    $.__views.__alloyId11408 = Ti.UI.createView({
        id: "__alloyId11408"
    });
    $.__views.__alloyId11408 && $.addTopLevelView($.__views.__alloyId11408);
    $.__views.__alloyId11409 = Ti.UI.createView({
        id: "__alloyId11409"
    });
    $.__views.__alloyId11408.add($.__views.__alloyId11409);
    $.__views.__alloyId11410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11410"
    });
    $.__views.__alloyId11409.add($.__views.__alloyId11410);
    $.__views.__alloyId11411 = Ti.UI.createView({
        id: "__alloyId11411"
    });
    $.__views.__alloyId11411 && $.addTopLevelView($.__views.__alloyId11411);
    $.__views.__alloyId11412 = Ti.UI.createView({
        id: "__alloyId11412"
    });
    $.__views.__alloyId11411.add($.__views.__alloyId11412);
    $.__views.__alloyId11413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11413"
    });
    $.__views.__alloyId11412.add($.__views.__alloyId11413);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;