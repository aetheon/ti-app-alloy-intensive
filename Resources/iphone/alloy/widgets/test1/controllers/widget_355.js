function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_355";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_355 = Ti.UI.createView({
        id: "widget_355"
    });
    $.__views.widget_355 && $.addTopLevelView($.__views.widget_355);
    $.__views.__alloyId7436 = Ti.UI.createView({
        id: "__alloyId7436"
    });
    $.__views.widget_355.add($.__views.__alloyId7436);
    $.__views.__alloyId7437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7437"
    });
    $.__views.__alloyId7436.add($.__views.__alloyId7437);
    $.__views.__alloyId7438 = Ti.UI.createView({
        id: "__alloyId7438"
    });
    $.__views.__alloyId7438 && $.addTopLevelView($.__views.__alloyId7438);
    $.__views.__alloyId7439 = Ti.UI.createView({
        id: "__alloyId7439"
    });
    $.__views.__alloyId7438.add($.__views.__alloyId7439);
    $.__views.__alloyId7440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7440"
    });
    $.__views.__alloyId7439.add($.__views.__alloyId7440);
    $.__views.__alloyId7441 = Ti.UI.createView({
        id: "__alloyId7441"
    });
    $.__views.__alloyId7441 && $.addTopLevelView($.__views.__alloyId7441);
    $.__views.__alloyId7442 = Ti.UI.createView({
        id: "__alloyId7442"
    });
    $.__views.__alloyId7441.add($.__views.__alloyId7442);
    $.__views.__alloyId7443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7443"
    });
    $.__views.__alloyId7442.add($.__views.__alloyId7443);
    $.__views.__alloyId7444 = Ti.UI.createView({
        id: "__alloyId7444"
    });
    $.__views.__alloyId7444 && $.addTopLevelView($.__views.__alloyId7444);
    $.__views.__alloyId7445 = Ti.UI.createView({
        id: "__alloyId7445"
    });
    $.__views.__alloyId7444.add($.__views.__alloyId7445);
    $.__views.__alloyId7446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7446"
    });
    $.__views.__alloyId7445.add($.__views.__alloyId7446);
    $.__views.__alloyId7447 = Ti.UI.createView({
        id: "__alloyId7447"
    });
    $.__views.__alloyId7447 && $.addTopLevelView($.__views.__alloyId7447);
    $.__views.__alloyId7448 = Ti.UI.createView({
        id: "__alloyId7448"
    });
    $.__views.__alloyId7447.add($.__views.__alloyId7448);
    $.__views.__alloyId7449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7449"
    });
    $.__views.__alloyId7448.add($.__views.__alloyId7449);
    $.__views.__alloyId7450 = Ti.UI.createView({
        id: "__alloyId7450"
    });
    $.__views.__alloyId7450 && $.addTopLevelView($.__views.__alloyId7450);
    $.__views.__alloyId7451 = Ti.UI.createView({
        id: "__alloyId7451"
    });
    $.__views.__alloyId7450.add($.__views.__alloyId7451);
    $.__views.__alloyId7452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7452"
    });
    $.__views.__alloyId7451.add($.__views.__alloyId7452);
    $.__views.__alloyId7453 = Ti.UI.createView({
        id: "__alloyId7453"
    });
    $.__views.__alloyId7453 && $.addTopLevelView($.__views.__alloyId7453);
    $.__views.__alloyId7454 = Ti.UI.createView({
        id: "__alloyId7454"
    });
    $.__views.__alloyId7453.add($.__views.__alloyId7454);
    $.__views.__alloyId7455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7455"
    });
    $.__views.__alloyId7454.add($.__views.__alloyId7455);
    $.__views.__alloyId7456 = Ti.UI.createView({
        id: "__alloyId7456"
    });
    $.__views.__alloyId7456 && $.addTopLevelView($.__views.__alloyId7456);
    $.__views.__alloyId7457 = Ti.UI.createView({
        id: "__alloyId7457"
    });
    $.__views.__alloyId7456.add($.__views.__alloyId7457);
    $.__views.__alloyId7458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7458"
    });
    $.__views.__alloyId7457.add($.__views.__alloyId7458);
    $.__views.__alloyId7459 = Ti.UI.createView({
        id: "__alloyId7459"
    });
    $.__views.__alloyId7459 && $.addTopLevelView($.__views.__alloyId7459);
    $.__views.__alloyId7460 = Ti.UI.createView({
        id: "__alloyId7460"
    });
    $.__views.__alloyId7459.add($.__views.__alloyId7460);
    $.__views.__alloyId7461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7461"
    });
    $.__views.__alloyId7460.add($.__views.__alloyId7461);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;