function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_319";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_319 = Ti.UI.createView({
        id: "widget_319"
    });
    $.__views.widget_319 && $.addTopLevelView($.__views.widget_319);
    $.__views.__alloyId6396 = Ti.UI.createView({
        id: "__alloyId6396"
    });
    $.__views.widget_319.add($.__views.__alloyId6396);
    $.__views.__alloyId6397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6397"
    });
    $.__views.__alloyId6396.add($.__views.__alloyId6397);
    $.__views.__alloyId6398 = Ti.UI.createView({
        id: "__alloyId6398"
    });
    $.__views.__alloyId6398 && $.addTopLevelView($.__views.__alloyId6398);
    $.__views.__alloyId6399 = Ti.UI.createView({
        id: "__alloyId6399"
    });
    $.__views.__alloyId6398.add($.__views.__alloyId6399);
    $.__views.__alloyId6400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6400"
    });
    $.__views.__alloyId6399.add($.__views.__alloyId6400);
    $.__views.__alloyId6401 = Ti.UI.createView({
        id: "__alloyId6401"
    });
    $.__views.__alloyId6401 && $.addTopLevelView($.__views.__alloyId6401);
    $.__views.__alloyId6402 = Ti.UI.createView({
        id: "__alloyId6402"
    });
    $.__views.__alloyId6401.add($.__views.__alloyId6402);
    $.__views.__alloyId6403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6403"
    });
    $.__views.__alloyId6402.add($.__views.__alloyId6403);
    $.__views.__alloyId6404 = Ti.UI.createView({
        id: "__alloyId6404"
    });
    $.__views.__alloyId6404 && $.addTopLevelView($.__views.__alloyId6404);
    $.__views.__alloyId6405 = Ti.UI.createView({
        id: "__alloyId6405"
    });
    $.__views.__alloyId6404.add($.__views.__alloyId6405);
    $.__views.__alloyId6406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6406"
    });
    $.__views.__alloyId6405.add($.__views.__alloyId6406);
    $.__views.__alloyId6407 = Ti.UI.createView({
        id: "__alloyId6407"
    });
    $.__views.__alloyId6407 && $.addTopLevelView($.__views.__alloyId6407);
    $.__views.__alloyId6408 = Ti.UI.createView({
        id: "__alloyId6408"
    });
    $.__views.__alloyId6407.add($.__views.__alloyId6408);
    $.__views.__alloyId6409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6409"
    });
    $.__views.__alloyId6408.add($.__views.__alloyId6409);
    $.__views.__alloyId6410 = Ti.UI.createView({
        id: "__alloyId6410"
    });
    $.__views.__alloyId6410 && $.addTopLevelView($.__views.__alloyId6410);
    $.__views.__alloyId6411 = Ti.UI.createView({
        id: "__alloyId6411"
    });
    $.__views.__alloyId6410.add($.__views.__alloyId6411);
    $.__views.__alloyId6412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6412"
    });
    $.__views.__alloyId6411.add($.__views.__alloyId6412);
    $.__views.__alloyId6413 = Ti.UI.createView({
        id: "__alloyId6413"
    });
    $.__views.__alloyId6413 && $.addTopLevelView($.__views.__alloyId6413);
    $.__views.__alloyId6414 = Ti.UI.createView({
        id: "__alloyId6414"
    });
    $.__views.__alloyId6413.add($.__views.__alloyId6414);
    $.__views.__alloyId6415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6415"
    });
    $.__views.__alloyId6414.add($.__views.__alloyId6415);
    $.__views.__alloyId6416 = Ti.UI.createView({
        id: "__alloyId6416"
    });
    $.__views.__alloyId6416 && $.addTopLevelView($.__views.__alloyId6416);
    $.__views.__alloyId6417 = Ti.UI.createView({
        id: "__alloyId6417"
    });
    $.__views.__alloyId6416.add($.__views.__alloyId6417);
    $.__views.__alloyId6418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6418"
    });
    $.__views.__alloyId6417.add($.__views.__alloyId6418);
    $.__views.__alloyId6419 = Ti.UI.createView({
        id: "__alloyId6419"
    });
    $.__views.__alloyId6419 && $.addTopLevelView($.__views.__alloyId6419);
    $.__views.__alloyId6420 = Ti.UI.createView({
        id: "__alloyId6420"
    });
    $.__views.__alloyId6419.add($.__views.__alloyId6420);
    $.__views.__alloyId6421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6421"
    });
    $.__views.__alloyId6420.add($.__views.__alloyId6421);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;