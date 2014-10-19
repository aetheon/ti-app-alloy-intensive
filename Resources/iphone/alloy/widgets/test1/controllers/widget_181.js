function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_181";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_181 = Ti.UI.createView({
        id: "widget_181"
    });
    $.__views.widget_181 && $.addTopLevelView($.__views.widget_181);
    $.__views.__alloyId2418 = Ti.UI.createView({
        id: "__alloyId2418"
    });
    $.__views.widget_181.add($.__views.__alloyId2418);
    $.__views.__alloyId2419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2419"
    });
    $.__views.__alloyId2418.add($.__views.__alloyId2419);
    $.__views.__alloyId2420 = Ti.UI.createView({
        id: "__alloyId2420"
    });
    $.__views.__alloyId2420 && $.addTopLevelView($.__views.__alloyId2420);
    $.__views.__alloyId2421 = Ti.UI.createView({
        id: "__alloyId2421"
    });
    $.__views.__alloyId2420.add($.__views.__alloyId2421);
    $.__views.__alloyId2422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2422"
    });
    $.__views.__alloyId2421.add($.__views.__alloyId2422);
    $.__views.__alloyId2423 = Ti.UI.createView({
        id: "__alloyId2423"
    });
    $.__views.__alloyId2423 && $.addTopLevelView($.__views.__alloyId2423);
    $.__views.__alloyId2424 = Ti.UI.createView({
        id: "__alloyId2424"
    });
    $.__views.__alloyId2423.add($.__views.__alloyId2424);
    $.__views.__alloyId2425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2425"
    });
    $.__views.__alloyId2424.add($.__views.__alloyId2425);
    $.__views.__alloyId2426 = Ti.UI.createView({
        id: "__alloyId2426"
    });
    $.__views.__alloyId2426 && $.addTopLevelView($.__views.__alloyId2426);
    $.__views.__alloyId2427 = Ti.UI.createView({
        id: "__alloyId2427"
    });
    $.__views.__alloyId2426.add($.__views.__alloyId2427);
    $.__views.__alloyId2428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2428"
    });
    $.__views.__alloyId2427.add($.__views.__alloyId2428);
    $.__views.__alloyId2429 = Ti.UI.createView({
        id: "__alloyId2429"
    });
    $.__views.__alloyId2429 && $.addTopLevelView($.__views.__alloyId2429);
    $.__views.__alloyId2430 = Ti.UI.createView({
        id: "__alloyId2430"
    });
    $.__views.__alloyId2429.add($.__views.__alloyId2430);
    $.__views.__alloyId2431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2431"
    });
    $.__views.__alloyId2430.add($.__views.__alloyId2431);
    $.__views.__alloyId2432 = Ti.UI.createView({
        id: "__alloyId2432"
    });
    $.__views.__alloyId2432 && $.addTopLevelView($.__views.__alloyId2432);
    $.__views.__alloyId2433 = Ti.UI.createView({
        id: "__alloyId2433"
    });
    $.__views.__alloyId2432.add($.__views.__alloyId2433);
    $.__views.__alloyId2434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2434"
    });
    $.__views.__alloyId2433.add($.__views.__alloyId2434);
    $.__views.__alloyId2435 = Ti.UI.createView({
        id: "__alloyId2435"
    });
    $.__views.__alloyId2435 && $.addTopLevelView($.__views.__alloyId2435);
    $.__views.__alloyId2436 = Ti.UI.createView({
        id: "__alloyId2436"
    });
    $.__views.__alloyId2435.add($.__views.__alloyId2436);
    $.__views.__alloyId2437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2437"
    });
    $.__views.__alloyId2436.add($.__views.__alloyId2437);
    $.__views.__alloyId2438 = Ti.UI.createView({
        id: "__alloyId2438"
    });
    $.__views.__alloyId2438 && $.addTopLevelView($.__views.__alloyId2438);
    $.__views.__alloyId2439 = Ti.UI.createView({
        id: "__alloyId2439"
    });
    $.__views.__alloyId2438.add($.__views.__alloyId2439);
    $.__views.__alloyId2440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2440"
    });
    $.__views.__alloyId2439.add($.__views.__alloyId2440);
    $.__views.__alloyId2441 = Ti.UI.createView({
        id: "__alloyId2441"
    });
    $.__views.__alloyId2441 && $.addTopLevelView($.__views.__alloyId2441);
    $.__views.__alloyId2442 = Ti.UI.createView({
        id: "__alloyId2442"
    });
    $.__views.__alloyId2441.add($.__views.__alloyId2442);
    $.__views.__alloyId2443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2443"
    });
    $.__views.__alloyId2442.add($.__views.__alloyId2443);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;