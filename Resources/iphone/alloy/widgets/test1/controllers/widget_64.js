function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_64";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_64 = Ti.UI.createView({
        id: "widget_64"
    });
    $.__views.widget_64 && $.addTopLevelView($.__views.widget_64);
    $.__views.__alloyId15652 = Ti.UI.createView({
        id: "__alloyId15652"
    });
    $.__views.widget_64.add($.__views.__alloyId15652);
    $.__views.__alloyId15653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15653"
    });
    $.__views.__alloyId15652.add($.__views.__alloyId15653);
    $.__views.__alloyId15654 = Ti.UI.createView({
        id: "__alloyId15654"
    });
    $.__views.__alloyId15654 && $.addTopLevelView($.__views.__alloyId15654);
    $.__views.__alloyId15655 = Ti.UI.createView({
        id: "__alloyId15655"
    });
    $.__views.__alloyId15654.add($.__views.__alloyId15655);
    $.__views.__alloyId15656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15656"
    });
    $.__views.__alloyId15655.add($.__views.__alloyId15656);
    $.__views.__alloyId15657 = Ti.UI.createView({
        id: "__alloyId15657"
    });
    $.__views.__alloyId15657 && $.addTopLevelView($.__views.__alloyId15657);
    $.__views.__alloyId15658 = Ti.UI.createView({
        id: "__alloyId15658"
    });
    $.__views.__alloyId15657.add($.__views.__alloyId15658);
    $.__views.__alloyId15659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15659"
    });
    $.__views.__alloyId15658.add($.__views.__alloyId15659);
    $.__views.__alloyId15660 = Ti.UI.createView({
        id: "__alloyId15660"
    });
    $.__views.__alloyId15660 && $.addTopLevelView($.__views.__alloyId15660);
    $.__views.__alloyId15661 = Ti.UI.createView({
        id: "__alloyId15661"
    });
    $.__views.__alloyId15660.add($.__views.__alloyId15661);
    $.__views.__alloyId15662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15662"
    });
    $.__views.__alloyId15661.add($.__views.__alloyId15662);
    $.__views.__alloyId15663 = Ti.UI.createView({
        id: "__alloyId15663"
    });
    $.__views.__alloyId15663 && $.addTopLevelView($.__views.__alloyId15663);
    $.__views.__alloyId15664 = Ti.UI.createView({
        id: "__alloyId15664"
    });
    $.__views.__alloyId15663.add($.__views.__alloyId15664);
    $.__views.__alloyId15665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15665"
    });
    $.__views.__alloyId15664.add($.__views.__alloyId15665);
    $.__views.__alloyId15666 = Ti.UI.createView({
        id: "__alloyId15666"
    });
    $.__views.__alloyId15666 && $.addTopLevelView($.__views.__alloyId15666);
    $.__views.__alloyId15667 = Ti.UI.createView({
        id: "__alloyId15667"
    });
    $.__views.__alloyId15666.add($.__views.__alloyId15667);
    $.__views.__alloyId15668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15668"
    });
    $.__views.__alloyId15667.add($.__views.__alloyId15668);
    $.__views.__alloyId15669 = Ti.UI.createView({
        id: "__alloyId15669"
    });
    $.__views.__alloyId15669 && $.addTopLevelView($.__views.__alloyId15669);
    $.__views.__alloyId15670 = Ti.UI.createView({
        id: "__alloyId15670"
    });
    $.__views.__alloyId15669.add($.__views.__alloyId15670);
    $.__views.__alloyId15671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15671"
    });
    $.__views.__alloyId15670.add($.__views.__alloyId15671);
    $.__views.__alloyId15672 = Ti.UI.createView({
        id: "__alloyId15672"
    });
    $.__views.__alloyId15672 && $.addTopLevelView($.__views.__alloyId15672);
    $.__views.__alloyId15673 = Ti.UI.createView({
        id: "__alloyId15673"
    });
    $.__views.__alloyId15672.add($.__views.__alloyId15673);
    $.__views.__alloyId15674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15674"
    });
    $.__views.__alloyId15673.add($.__views.__alloyId15674);
    $.__views.__alloyId15675 = Ti.UI.createView({
        id: "__alloyId15675"
    });
    $.__views.__alloyId15675 && $.addTopLevelView($.__views.__alloyId15675);
    $.__views.__alloyId15676 = Ti.UI.createView({
        id: "__alloyId15676"
    });
    $.__views.__alloyId15675.add($.__views.__alloyId15676);
    $.__views.__alloyId15677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15677"
    });
    $.__views.__alloyId15676.add($.__views.__alloyId15677);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;