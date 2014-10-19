function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_328";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_328 = Ti.UI.createView({
        id: "widget_328"
    });
    $.__views.widget_328 && $.addTopLevelView($.__views.widget_328);
    $.__views.__alloyId6656 = Ti.UI.createView({
        id: "__alloyId6656"
    });
    $.__views.widget_328.add($.__views.__alloyId6656);
    $.__views.__alloyId6657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6657"
    });
    $.__views.__alloyId6656.add($.__views.__alloyId6657);
    $.__views.__alloyId6658 = Ti.UI.createView({
        id: "__alloyId6658"
    });
    $.__views.__alloyId6658 && $.addTopLevelView($.__views.__alloyId6658);
    $.__views.__alloyId6659 = Ti.UI.createView({
        id: "__alloyId6659"
    });
    $.__views.__alloyId6658.add($.__views.__alloyId6659);
    $.__views.__alloyId6660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6660"
    });
    $.__views.__alloyId6659.add($.__views.__alloyId6660);
    $.__views.__alloyId6661 = Ti.UI.createView({
        id: "__alloyId6661"
    });
    $.__views.__alloyId6661 && $.addTopLevelView($.__views.__alloyId6661);
    $.__views.__alloyId6662 = Ti.UI.createView({
        id: "__alloyId6662"
    });
    $.__views.__alloyId6661.add($.__views.__alloyId6662);
    $.__views.__alloyId6663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6663"
    });
    $.__views.__alloyId6662.add($.__views.__alloyId6663);
    $.__views.__alloyId6664 = Ti.UI.createView({
        id: "__alloyId6664"
    });
    $.__views.__alloyId6664 && $.addTopLevelView($.__views.__alloyId6664);
    $.__views.__alloyId6665 = Ti.UI.createView({
        id: "__alloyId6665"
    });
    $.__views.__alloyId6664.add($.__views.__alloyId6665);
    $.__views.__alloyId6666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6666"
    });
    $.__views.__alloyId6665.add($.__views.__alloyId6666);
    $.__views.__alloyId6667 = Ti.UI.createView({
        id: "__alloyId6667"
    });
    $.__views.__alloyId6667 && $.addTopLevelView($.__views.__alloyId6667);
    $.__views.__alloyId6668 = Ti.UI.createView({
        id: "__alloyId6668"
    });
    $.__views.__alloyId6667.add($.__views.__alloyId6668);
    $.__views.__alloyId6669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6669"
    });
    $.__views.__alloyId6668.add($.__views.__alloyId6669);
    $.__views.__alloyId6670 = Ti.UI.createView({
        id: "__alloyId6670"
    });
    $.__views.__alloyId6670 && $.addTopLevelView($.__views.__alloyId6670);
    $.__views.__alloyId6671 = Ti.UI.createView({
        id: "__alloyId6671"
    });
    $.__views.__alloyId6670.add($.__views.__alloyId6671);
    $.__views.__alloyId6672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6672"
    });
    $.__views.__alloyId6671.add($.__views.__alloyId6672);
    $.__views.__alloyId6673 = Ti.UI.createView({
        id: "__alloyId6673"
    });
    $.__views.__alloyId6673 && $.addTopLevelView($.__views.__alloyId6673);
    $.__views.__alloyId6674 = Ti.UI.createView({
        id: "__alloyId6674"
    });
    $.__views.__alloyId6673.add($.__views.__alloyId6674);
    $.__views.__alloyId6675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6675"
    });
    $.__views.__alloyId6674.add($.__views.__alloyId6675);
    $.__views.__alloyId6676 = Ti.UI.createView({
        id: "__alloyId6676"
    });
    $.__views.__alloyId6676 && $.addTopLevelView($.__views.__alloyId6676);
    $.__views.__alloyId6677 = Ti.UI.createView({
        id: "__alloyId6677"
    });
    $.__views.__alloyId6676.add($.__views.__alloyId6677);
    $.__views.__alloyId6678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6678"
    });
    $.__views.__alloyId6677.add($.__views.__alloyId6678);
    $.__views.__alloyId6679 = Ti.UI.createView({
        id: "__alloyId6679"
    });
    $.__views.__alloyId6679 && $.addTopLevelView($.__views.__alloyId6679);
    $.__views.__alloyId6680 = Ti.UI.createView({
        id: "__alloyId6680"
    });
    $.__views.__alloyId6679.add($.__views.__alloyId6680);
    $.__views.__alloyId6681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6681"
    });
    $.__views.__alloyId6680.add($.__views.__alloyId6681);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;