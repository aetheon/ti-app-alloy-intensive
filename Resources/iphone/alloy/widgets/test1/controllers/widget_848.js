function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_848";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_848 = Ti.UI.createView({
        id: "widget_848"
    });
    $.__views.widget_848 && $.addTopLevelView($.__views.widget_848);
    $.__views.__alloyId21658 = Ti.UI.createView({
        id: "__alloyId21658"
    });
    $.__views.widget_848.add($.__views.__alloyId21658);
    $.__views.__alloyId21659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21659"
    });
    $.__views.__alloyId21658.add($.__views.__alloyId21659);
    $.__views.__alloyId21660 = Ti.UI.createView({
        id: "__alloyId21660"
    });
    $.__views.__alloyId21660 && $.addTopLevelView($.__views.__alloyId21660);
    $.__views.__alloyId21661 = Ti.UI.createView({
        id: "__alloyId21661"
    });
    $.__views.__alloyId21660.add($.__views.__alloyId21661);
    $.__views.__alloyId21662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21662"
    });
    $.__views.__alloyId21661.add($.__views.__alloyId21662);
    $.__views.__alloyId21663 = Ti.UI.createView({
        id: "__alloyId21663"
    });
    $.__views.__alloyId21663 && $.addTopLevelView($.__views.__alloyId21663);
    $.__views.__alloyId21664 = Ti.UI.createView({
        id: "__alloyId21664"
    });
    $.__views.__alloyId21663.add($.__views.__alloyId21664);
    $.__views.__alloyId21665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21665"
    });
    $.__views.__alloyId21664.add($.__views.__alloyId21665);
    $.__views.__alloyId21666 = Ti.UI.createView({
        id: "__alloyId21666"
    });
    $.__views.__alloyId21666 && $.addTopLevelView($.__views.__alloyId21666);
    $.__views.__alloyId21667 = Ti.UI.createView({
        id: "__alloyId21667"
    });
    $.__views.__alloyId21666.add($.__views.__alloyId21667);
    $.__views.__alloyId21668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21668"
    });
    $.__views.__alloyId21667.add($.__views.__alloyId21668);
    $.__views.__alloyId21669 = Ti.UI.createView({
        id: "__alloyId21669"
    });
    $.__views.__alloyId21669 && $.addTopLevelView($.__views.__alloyId21669);
    $.__views.__alloyId21670 = Ti.UI.createView({
        id: "__alloyId21670"
    });
    $.__views.__alloyId21669.add($.__views.__alloyId21670);
    $.__views.__alloyId21671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21671"
    });
    $.__views.__alloyId21670.add($.__views.__alloyId21671);
    $.__views.__alloyId21672 = Ti.UI.createView({
        id: "__alloyId21672"
    });
    $.__views.__alloyId21672 && $.addTopLevelView($.__views.__alloyId21672);
    $.__views.__alloyId21673 = Ti.UI.createView({
        id: "__alloyId21673"
    });
    $.__views.__alloyId21672.add($.__views.__alloyId21673);
    $.__views.__alloyId21674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21674"
    });
    $.__views.__alloyId21673.add($.__views.__alloyId21674);
    $.__views.__alloyId21675 = Ti.UI.createView({
        id: "__alloyId21675"
    });
    $.__views.__alloyId21675 && $.addTopLevelView($.__views.__alloyId21675);
    $.__views.__alloyId21676 = Ti.UI.createView({
        id: "__alloyId21676"
    });
    $.__views.__alloyId21675.add($.__views.__alloyId21676);
    $.__views.__alloyId21677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21677"
    });
    $.__views.__alloyId21676.add($.__views.__alloyId21677);
    $.__views.__alloyId21678 = Ti.UI.createView({
        id: "__alloyId21678"
    });
    $.__views.__alloyId21678 && $.addTopLevelView($.__views.__alloyId21678);
    $.__views.__alloyId21679 = Ti.UI.createView({
        id: "__alloyId21679"
    });
    $.__views.__alloyId21678.add($.__views.__alloyId21679);
    $.__views.__alloyId21680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21680"
    });
    $.__views.__alloyId21679.add($.__views.__alloyId21680);
    $.__views.__alloyId21681 = Ti.UI.createView({
        id: "__alloyId21681"
    });
    $.__views.__alloyId21681 && $.addTopLevelView($.__views.__alloyId21681);
    $.__views.__alloyId21682 = Ti.UI.createView({
        id: "__alloyId21682"
    });
    $.__views.__alloyId21681.add($.__views.__alloyId21682);
    $.__views.__alloyId21683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21683"
    });
    $.__views.__alloyId21682.add($.__views.__alloyId21683);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;