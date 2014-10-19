function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_36";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_36 = Ti.UI.createView({
        id: "widget_36"
    });
    $.__views.widget_36 && $.addTopLevelView($.__views.widget_36);
    $.__views.__alloyId7566 = Ti.UI.createView({
        id: "__alloyId7566"
    });
    $.__views.widget_36.add($.__views.__alloyId7566);
    $.__views.__alloyId7567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7567"
    });
    $.__views.__alloyId7566.add($.__views.__alloyId7567);
    $.__views.__alloyId7568 = Ti.UI.createView({
        id: "__alloyId7568"
    });
    $.__views.__alloyId7568 && $.addTopLevelView($.__views.__alloyId7568);
    $.__views.__alloyId7569 = Ti.UI.createView({
        id: "__alloyId7569"
    });
    $.__views.__alloyId7568.add($.__views.__alloyId7569);
    $.__views.__alloyId7570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7570"
    });
    $.__views.__alloyId7569.add($.__views.__alloyId7570);
    $.__views.__alloyId7571 = Ti.UI.createView({
        id: "__alloyId7571"
    });
    $.__views.__alloyId7571 && $.addTopLevelView($.__views.__alloyId7571);
    $.__views.__alloyId7572 = Ti.UI.createView({
        id: "__alloyId7572"
    });
    $.__views.__alloyId7571.add($.__views.__alloyId7572);
    $.__views.__alloyId7573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7573"
    });
    $.__views.__alloyId7572.add($.__views.__alloyId7573);
    $.__views.__alloyId7574 = Ti.UI.createView({
        id: "__alloyId7574"
    });
    $.__views.__alloyId7574 && $.addTopLevelView($.__views.__alloyId7574);
    $.__views.__alloyId7575 = Ti.UI.createView({
        id: "__alloyId7575"
    });
    $.__views.__alloyId7574.add($.__views.__alloyId7575);
    $.__views.__alloyId7576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7576"
    });
    $.__views.__alloyId7575.add($.__views.__alloyId7576);
    $.__views.__alloyId7577 = Ti.UI.createView({
        id: "__alloyId7577"
    });
    $.__views.__alloyId7577 && $.addTopLevelView($.__views.__alloyId7577);
    $.__views.__alloyId7578 = Ti.UI.createView({
        id: "__alloyId7578"
    });
    $.__views.__alloyId7577.add($.__views.__alloyId7578);
    $.__views.__alloyId7579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7579"
    });
    $.__views.__alloyId7578.add($.__views.__alloyId7579);
    $.__views.__alloyId7580 = Ti.UI.createView({
        id: "__alloyId7580"
    });
    $.__views.__alloyId7580 && $.addTopLevelView($.__views.__alloyId7580);
    $.__views.__alloyId7581 = Ti.UI.createView({
        id: "__alloyId7581"
    });
    $.__views.__alloyId7580.add($.__views.__alloyId7581);
    $.__views.__alloyId7582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7582"
    });
    $.__views.__alloyId7581.add($.__views.__alloyId7582);
    $.__views.__alloyId7583 = Ti.UI.createView({
        id: "__alloyId7583"
    });
    $.__views.__alloyId7583 && $.addTopLevelView($.__views.__alloyId7583);
    $.__views.__alloyId7584 = Ti.UI.createView({
        id: "__alloyId7584"
    });
    $.__views.__alloyId7583.add($.__views.__alloyId7584);
    $.__views.__alloyId7585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7585"
    });
    $.__views.__alloyId7584.add($.__views.__alloyId7585);
    $.__views.__alloyId7586 = Ti.UI.createView({
        id: "__alloyId7586"
    });
    $.__views.__alloyId7586 && $.addTopLevelView($.__views.__alloyId7586);
    $.__views.__alloyId7587 = Ti.UI.createView({
        id: "__alloyId7587"
    });
    $.__views.__alloyId7586.add($.__views.__alloyId7587);
    $.__views.__alloyId7588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7588"
    });
    $.__views.__alloyId7587.add($.__views.__alloyId7588);
    $.__views.__alloyId7589 = Ti.UI.createView({
        id: "__alloyId7589"
    });
    $.__views.__alloyId7589 && $.addTopLevelView($.__views.__alloyId7589);
    $.__views.__alloyId7590 = Ti.UI.createView({
        id: "__alloyId7590"
    });
    $.__views.__alloyId7589.add($.__views.__alloyId7590);
    $.__views.__alloyId7591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7591"
    });
    $.__views.__alloyId7590.add($.__views.__alloyId7591);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;