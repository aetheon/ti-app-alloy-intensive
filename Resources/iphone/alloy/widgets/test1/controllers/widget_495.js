function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_495";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_495 = Ti.UI.createView({
        id: "widget_495"
    });
    $.__views.widget_495 && $.addTopLevelView($.__views.widget_495);
    $.__views.__alloyId11466 = Ti.UI.createView({
        id: "__alloyId11466"
    });
    $.__views.widget_495.add($.__views.__alloyId11466);
    $.__views.__alloyId11467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11467"
    });
    $.__views.__alloyId11466.add($.__views.__alloyId11467);
    $.__views.__alloyId11468 = Ti.UI.createView({
        id: "__alloyId11468"
    });
    $.__views.__alloyId11468 && $.addTopLevelView($.__views.__alloyId11468);
    $.__views.__alloyId11469 = Ti.UI.createView({
        id: "__alloyId11469"
    });
    $.__views.__alloyId11468.add($.__views.__alloyId11469);
    $.__views.__alloyId11470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11470"
    });
    $.__views.__alloyId11469.add($.__views.__alloyId11470);
    $.__views.__alloyId11471 = Ti.UI.createView({
        id: "__alloyId11471"
    });
    $.__views.__alloyId11471 && $.addTopLevelView($.__views.__alloyId11471);
    $.__views.__alloyId11472 = Ti.UI.createView({
        id: "__alloyId11472"
    });
    $.__views.__alloyId11471.add($.__views.__alloyId11472);
    $.__views.__alloyId11473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11473"
    });
    $.__views.__alloyId11472.add($.__views.__alloyId11473);
    $.__views.__alloyId11474 = Ti.UI.createView({
        id: "__alloyId11474"
    });
    $.__views.__alloyId11474 && $.addTopLevelView($.__views.__alloyId11474);
    $.__views.__alloyId11475 = Ti.UI.createView({
        id: "__alloyId11475"
    });
    $.__views.__alloyId11474.add($.__views.__alloyId11475);
    $.__views.__alloyId11476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11476"
    });
    $.__views.__alloyId11475.add($.__views.__alloyId11476);
    $.__views.__alloyId11477 = Ti.UI.createView({
        id: "__alloyId11477"
    });
    $.__views.__alloyId11477 && $.addTopLevelView($.__views.__alloyId11477);
    $.__views.__alloyId11478 = Ti.UI.createView({
        id: "__alloyId11478"
    });
    $.__views.__alloyId11477.add($.__views.__alloyId11478);
    $.__views.__alloyId11479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11479"
    });
    $.__views.__alloyId11478.add($.__views.__alloyId11479);
    $.__views.__alloyId11480 = Ti.UI.createView({
        id: "__alloyId11480"
    });
    $.__views.__alloyId11480 && $.addTopLevelView($.__views.__alloyId11480);
    $.__views.__alloyId11481 = Ti.UI.createView({
        id: "__alloyId11481"
    });
    $.__views.__alloyId11480.add($.__views.__alloyId11481);
    $.__views.__alloyId11482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11482"
    });
    $.__views.__alloyId11481.add($.__views.__alloyId11482);
    $.__views.__alloyId11483 = Ti.UI.createView({
        id: "__alloyId11483"
    });
    $.__views.__alloyId11483 && $.addTopLevelView($.__views.__alloyId11483);
    $.__views.__alloyId11484 = Ti.UI.createView({
        id: "__alloyId11484"
    });
    $.__views.__alloyId11483.add($.__views.__alloyId11484);
    $.__views.__alloyId11485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11485"
    });
    $.__views.__alloyId11484.add($.__views.__alloyId11485);
    $.__views.__alloyId11486 = Ti.UI.createView({
        id: "__alloyId11486"
    });
    $.__views.__alloyId11486 && $.addTopLevelView($.__views.__alloyId11486);
    $.__views.__alloyId11487 = Ti.UI.createView({
        id: "__alloyId11487"
    });
    $.__views.__alloyId11486.add($.__views.__alloyId11487);
    $.__views.__alloyId11488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11488"
    });
    $.__views.__alloyId11487.add($.__views.__alloyId11488);
    $.__views.__alloyId11489 = Ti.UI.createView({
        id: "__alloyId11489"
    });
    $.__views.__alloyId11489 && $.addTopLevelView($.__views.__alloyId11489);
    $.__views.__alloyId11490 = Ti.UI.createView({
        id: "__alloyId11490"
    });
    $.__views.__alloyId11489.add($.__views.__alloyId11490);
    $.__views.__alloyId11491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11491"
    });
    $.__views.__alloyId11490.add($.__views.__alloyId11491);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;