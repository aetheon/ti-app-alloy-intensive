function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_528";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_528 = Ti.UI.createView({
        id: "widget_528"
    });
    $.__views.widget_528 && $.addTopLevelView($.__views.widget_528);
    $.__views.__alloyId12428 = Ti.UI.createView({
        id: "__alloyId12428"
    });
    $.__views.widget_528.add($.__views.__alloyId12428);
    $.__views.__alloyId12429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12429"
    });
    $.__views.__alloyId12428.add($.__views.__alloyId12429);
    $.__views.__alloyId12430 = Ti.UI.createView({
        id: "__alloyId12430"
    });
    $.__views.__alloyId12430 && $.addTopLevelView($.__views.__alloyId12430);
    $.__views.__alloyId12431 = Ti.UI.createView({
        id: "__alloyId12431"
    });
    $.__views.__alloyId12430.add($.__views.__alloyId12431);
    $.__views.__alloyId12432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12432"
    });
    $.__views.__alloyId12431.add($.__views.__alloyId12432);
    $.__views.__alloyId12433 = Ti.UI.createView({
        id: "__alloyId12433"
    });
    $.__views.__alloyId12433 && $.addTopLevelView($.__views.__alloyId12433);
    $.__views.__alloyId12434 = Ti.UI.createView({
        id: "__alloyId12434"
    });
    $.__views.__alloyId12433.add($.__views.__alloyId12434);
    $.__views.__alloyId12435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12435"
    });
    $.__views.__alloyId12434.add($.__views.__alloyId12435);
    $.__views.__alloyId12436 = Ti.UI.createView({
        id: "__alloyId12436"
    });
    $.__views.__alloyId12436 && $.addTopLevelView($.__views.__alloyId12436);
    $.__views.__alloyId12437 = Ti.UI.createView({
        id: "__alloyId12437"
    });
    $.__views.__alloyId12436.add($.__views.__alloyId12437);
    $.__views.__alloyId12438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12438"
    });
    $.__views.__alloyId12437.add($.__views.__alloyId12438);
    $.__views.__alloyId12439 = Ti.UI.createView({
        id: "__alloyId12439"
    });
    $.__views.__alloyId12439 && $.addTopLevelView($.__views.__alloyId12439);
    $.__views.__alloyId12440 = Ti.UI.createView({
        id: "__alloyId12440"
    });
    $.__views.__alloyId12439.add($.__views.__alloyId12440);
    $.__views.__alloyId12441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12441"
    });
    $.__views.__alloyId12440.add($.__views.__alloyId12441);
    $.__views.__alloyId12442 = Ti.UI.createView({
        id: "__alloyId12442"
    });
    $.__views.__alloyId12442 && $.addTopLevelView($.__views.__alloyId12442);
    $.__views.__alloyId12443 = Ti.UI.createView({
        id: "__alloyId12443"
    });
    $.__views.__alloyId12442.add($.__views.__alloyId12443);
    $.__views.__alloyId12444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12444"
    });
    $.__views.__alloyId12443.add($.__views.__alloyId12444);
    $.__views.__alloyId12445 = Ti.UI.createView({
        id: "__alloyId12445"
    });
    $.__views.__alloyId12445 && $.addTopLevelView($.__views.__alloyId12445);
    $.__views.__alloyId12446 = Ti.UI.createView({
        id: "__alloyId12446"
    });
    $.__views.__alloyId12445.add($.__views.__alloyId12446);
    $.__views.__alloyId12447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12447"
    });
    $.__views.__alloyId12446.add($.__views.__alloyId12447);
    $.__views.__alloyId12448 = Ti.UI.createView({
        id: "__alloyId12448"
    });
    $.__views.__alloyId12448 && $.addTopLevelView($.__views.__alloyId12448);
    $.__views.__alloyId12449 = Ti.UI.createView({
        id: "__alloyId12449"
    });
    $.__views.__alloyId12448.add($.__views.__alloyId12449);
    $.__views.__alloyId12450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12450"
    });
    $.__views.__alloyId12449.add($.__views.__alloyId12450);
    $.__views.__alloyId12451 = Ti.UI.createView({
        id: "__alloyId12451"
    });
    $.__views.__alloyId12451 && $.addTopLevelView($.__views.__alloyId12451);
    $.__views.__alloyId12452 = Ti.UI.createView({
        id: "__alloyId12452"
    });
    $.__views.__alloyId12451.add($.__views.__alloyId12452);
    $.__views.__alloyId12453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12453"
    });
    $.__views.__alloyId12452.add($.__views.__alloyId12453);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;