function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_747";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_747 = Ti.UI.createView({
        id: "widget_747"
    });
    $.__views.widget_747 && $.addTopLevelView($.__views.widget_747);
    $.__views.__alloyId18746 = Ti.UI.createView({
        id: "__alloyId18746"
    });
    $.__views.widget_747.add($.__views.__alloyId18746);
    $.__views.__alloyId18747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18747"
    });
    $.__views.__alloyId18746.add($.__views.__alloyId18747);
    $.__views.__alloyId18748 = Ti.UI.createView({
        id: "__alloyId18748"
    });
    $.__views.__alloyId18748 && $.addTopLevelView($.__views.__alloyId18748);
    $.__views.__alloyId18749 = Ti.UI.createView({
        id: "__alloyId18749"
    });
    $.__views.__alloyId18748.add($.__views.__alloyId18749);
    $.__views.__alloyId18750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18750"
    });
    $.__views.__alloyId18749.add($.__views.__alloyId18750);
    $.__views.__alloyId18751 = Ti.UI.createView({
        id: "__alloyId18751"
    });
    $.__views.__alloyId18751 && $.addTopLevelView($.__views.__alloyId18751);
    $.__views.__alloyId18752 = Ti.UI.createView({
        id: "__alloyId18752"
    });
    $.__views.__alloyId18751.add($.__views.__alloyId18752);
    $.__views.__alloyId18753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18753"
    });
    $.__views.__alloyId18752.add($.__views.__alloyId18753);
    $.__views.__alloyId18754 = Ti.UI.createView({
        id: "__alloyId18754"
    });
    $.__views.__alloyId18754 && $.addTopLevelView($.__views.__alloyId18754);
    $.__views.__alloyId18755 = Ti.UI.createView({
        id: "__alloyId18755"
    });
    $.__views.__alloyId18754.add($.__views.__alloyId18755);
    $.__views.__alloyId18756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18756"
    });
    $.__views.__alloyId18755.add($.__views.__alloyId18756);
    $.__views.__alloyId18757 = Ti.UI.createView({
        id: "__alloyId18757"
    });
    $.__views.__alloyId18757 && $.addTopLevelView($.__views.__alloyId18757);
    $.__views.__alloyId18758 = Ti.UI.createView({
        id: "__alloyId18758"
    });
    $.__views.__alloyId18757.add($.__views.__alloyId18758);
    $.__views.__alloyId18759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18759"
    });
    $.__views.__alloyId18758.add($.__views.__alloyId18759);
    $.__views.__alloyId18760 = Ti.UI.createView({
        id: "__alloyId18760"
    });
    $.__views.__alloyId18760 && $.addTopLevelView($.__views.__alloyId18760);
    $.__views.__alloyId18761 = Ti.UI.createView({
        id: "__alloyId18761"
    });
    $.__views.__alloyId18760.add($.__views.__alloyId18761);
    $.__views.__alloyId18762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18762"
    });
    $.__views.__alloyId18761.add($.__views.__alloyId18762);
    $.__views.__alloyId18763 = Ti.UI.createView({
        id: "__alloyId18763"
    });
    $.__views.__alloyId18763 && $.addTopLevelView($.__views.__alloyId18763);
    $.__views.__alloyId18764 = Ti.UI.createView({
        id: "__alloyId18764"
    });
    $.__views.__alloyId18763.add($.__views.__alloyId18764);
    $.__views.__alloyId18765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18765"
    });
    $.__views.__alloyId18764.add($.__views.__alloyId18765);
    $.__views.__alloyId18766 = Ti.UI.createView({
        id: "__alloyId18766"
    });
    $.__views.__alloyId18766 && $.addTopLevelView($.__views.__alloyId18766);
    $.__views.__alloyId18767 = Ti.UI.createView({
        id: "__alloyId18767"
    });
    $.__views.__alloyId18766.add($.__views.__alloyId18767);
    $.__views.__alloyId18768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18768"
    });
    $.__views.__alloyId18767.add($.__views.__alloyId18768);
    $.__views.__alloyId18769 = Ti.UI.createView({
        id: "__alloyId18769"
    });
    $.__views.__alloyId18769 && $.addTopLevelView($.__views.__alloyId18769);
    $.__views.__alloyId18770 = Ti.UI.createView({
        id: "__alloyId18770"
    });
    $.__views.__alloyId18769.add($.__views.__alloyId18770);
    $.__views.__alloyId18771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18771"
    });
    $.__views.__alloyId18770.add($.__views.__alloyId18771);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;