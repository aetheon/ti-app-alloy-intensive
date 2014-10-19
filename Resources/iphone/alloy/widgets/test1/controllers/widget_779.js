function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_779";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_779 = Ti.UI.createView({
        id: "widget_779"
    });
    $.__views.widget_779 && $.addTopLevelView($.__views.widget_779);
    $.__views.__alloyId19656 = Ti.UI.createView({
        id: "__alloyId19656"
    });
    $.__views.widget_779.add($.__views.__alloyId19656);
    $.__views.__alloyId19657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19657"
    });
    $.__views.__alloyId19656.add($.__views.__alloyId19657);
    $.__views.__alloyId19658 = Ti.UI.createView({
        id: "__alloyId19658"
    });
    $.__views.__alloyId19658 && $.addTopLevelView($.__views.__alloyId19658);
    $.__views.__alloyId19659 = Ti.UI.createView({
        id: "__alloyId19659"
    });
    $.__views.__alloyId19658.add($.__views.__alloyId19659);
    $.__views.__alloyId19660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19660"
    });
    $.__views.__alloyId19659.add($.__views.__alloyId19660);
    $.__views.__alloyId19661 = Ti.UI.createView({
        id: "__alloyId19661"
    });
    $.__views.__alloyId19661 && $.addTopLevelView($.__views.__alloyId19661);
    $.__views.__alloyId19662 = Ti.UI.createView({
        id: "__alloyId19662"
    });
    $.__views.__alloyId19661.add($.__views.__alloyId19662);
    $.__views.__alloyId19663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19663"
    });
    $.__views.__alloyId19662.add($.__views.__alloyId19663);
    $.__views.__alloyId19664 = Ti.UI.createView({
        id: "__alloyId19664"
    });
    $.__views.__alloyId19664 && $.addTopLevelView($.__views.__alloyId19664);
    $.__views.__alloyId19665 = Ti.UI.createView({
        id: "__alloyId19665"
    });
    $.__views.__alloyId19664.add($.__views.__alloyId19665);
    $.__views.__alloyId19666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19666"
    });
    $.__views.__alloyId19665.add($.__views.__alloyId19666);
    $.__views.__alloyId19667 = Ti.UI.createView({
        id: "__alloyId19667"
    });
    $.__views.__alloyId19667 && $.addTopLevelView($.__views.__alloyId19667);
    $.__views.__alloyId19668 = Ti.UI.createView({
        id: "__alloyId19668"
    });
    $.__views.__alloyId19667.add($.__views.__alloyId19668);
    $.__views.__alloyId19669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19669"
    });
    $.__views.__alloyId19668.add($.__views.__alloyId19669);
    $.__views.__alloyId19670 = Ti.UI.createView({
        id: "__alloyId19670"
    });
    $.__views.__alloyId19670 && $.addTopLevelView($.__views.__alloyId19670);
    $.__views.__alloyId19671 = Ti.UI.createView({
        id: "__alloyId19671"
    });
    $.__views.__alloyId19670.add($.__views.__alloyId19671);
    $.__views.__alloyId19672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19672"
    });
    $.__views.__alloyId19671.add($.__views.__alloyId19672);
    $.__views.__alloyId19673 = Ti.UI.createView({
        id: "__alloyId19673"
    });
    $.__views.__alloyId19673 && $.addTopLevelView($.__views.__alloyId19673);
    $.__views.__alloyId19674 = Ti.UI.createView({
        id: "__alloyId19674"
    });
    $.__views.__alloyId19673.add($.__views.__alloyId19674);
    $.__views.__alloyId19675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19675"
    });
    $.__views.__alloyId19674.add($.__views.__alloyId19675);
    $.__views.__alloyId19676 = Ti.UI.createView({
        id: "__alloyId19676"
    });
    $.__views.__alloyId19676 && $.addTopLevelView($.__views.__alloyId19676);
    $.__views.__alloyId19677 = Ti.UI.createView({
        id: "__alloyId19677"
    });
    $.__views.__alloyId19676.add($.__views.__alloyId19677);
    $.__views.__alloyId19678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19678"
    });
    $.__views.__alloyId19677.add($.__views.__alloyId19678);
    $.__views.__alloyId19679 = Ti.UI.createView({
        id: "__alloyId19679"
    });
    $.__views.__alloyId19679 && $.addTopLevelView($.__views.__alloyId19679);
    $.__views.__alloyId19680 = Ti.UI.createView({
        id: "__alloyId19680"
    });
    $.__views.__alloyId19679.add($.__views.__alloyId19680);
    $.__views.__alloyId19681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19681"
    });
    $.__views.__alloyId19680.add($.__views.__alloyId19681);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;