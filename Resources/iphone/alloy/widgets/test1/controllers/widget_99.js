function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_99";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_99 = Ti.UI.createView({
        id: "widget_99"
    });
    $.__views.widget_99 && $.addTopLevelView($.__views.widget_99);
    $.__views.__alloyId25740 = Ti.UI.createView({
        id: "__alloyId25740"
    });
    $.__views.widget_99.add($.__views.__alloyId25740);
    $.__views.__alloyId25741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25741"
    });
    $.__views.__alloyId25740.add($.__views.__alloyId25741);
    $.__views.__alloyId25742 = Ti.UI.createView({
        id: "__alloyId25742"
    });
    $.__views.__alloyId25742 && $.addTopLevelView($.__views.__alloyId25742);
    $.__views.__alloyId25743 = Ti.UI.createView({
        id: "__alloyId25743"
    });
    $.__views.__alloyId25742.add($.__views.__alloyId25743);
    $.__views.__alloyId25744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25744"
    });
    $.__views.__alloyId25743.add($.__views.__alloyId25744);
    $.__views.__alloyId25745 = Ti.UI.createView({
        id: "__alloyId25745"
    });
    $.__views.__alloyId25745 && $.addTopLevelView($.__views.__alloyId25745);
    $.__views.__alloyId25746 = Ti.UI.createView({
        id: "__alloyId25746"
    });
    $.__views.__alloyId25745.add($.__views.__alloyId25746);
    $.__views.__alloyId25747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25747"
    });
    $.__views.__alloyId25746.add($.__views.__alloyId25747);
    $.__views.__alloyId25748 = Ti.UI.createView({
        id: "__alloyId25748"
    });
    $.__views.__alloyId25748 && $.addTopLevelView($.__views.__alloyId25748);
    $.__views.__alloyId25749 = Ti.UI.createView({
        id: "__alloyId25749"
    });
    $.__views.__alloyId25748.add($.__views.__alloyId25749);
    $.__views.__alloyId25750 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25750"
    });
    $.__views.__alloyId25749.add($.__views.__alloyId25750);
    $.__views.__alloyId25751 = Ti.UI.createView({
        id: "__alloyId25751"
    });
    $.__views.__alloyId25751 && $.addTopLevelView($.__views.__alloyId25751);
    $.__views.__alloyId25752 = Ti.UI.createView({
        id: "__alloyId25752"
    });
    $.__views.__alloyId25751.add($.__views.__alloyId25752);
    $.__views.__alloyId25753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25753"
    });
    $.__views.__alloyId25752.add($.__views.__alloyId25753);
    $.__views.__alloyId25754 = Ti.UI.createView({
        id: "__alloyId25754"
    });
    $.__views.__alloyId25754 && $.addTopLevelView($.__views.__alloyId25754);
    $.__views.__alloyId25755 = Ti.UI.createView({
        id: "__alloyId25755"
    });
    $.__views.__alloyId25754.add($.__views.__alloyId25755);
    $.__views.__alloyId25756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25756"
    });
    $.__views.__alloyId25755.add($.__views.__alloyId25756);
    $.__views.__alloyId25757 = Ti.UI.createView({
        id: "__alloyId25757"
    });
    $.__views.__alloyId25757 && $.addTopLevelView($.__views.__alloyId25757);
    $.__views.__alloyId25758 = Ti.UI.createView({
        id: "__alloyId25758"
    });
    $.__views.__alloyId25757.add($.__views.__alloyId25758);
    $.__views.__alloyId25759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25759"
    });
    $.__views.__alloyId25758.add($.__views.__alloyId25759);
    $.__views.__alloyId25760 = Ti.UI.createView({
        id: "__alloyId25760"
    });
    $.__views.__alloyId25760 && $.addTopLevelView($.__views.__alloyId25760);
    $.__views.__alloyId25761 = Ti.UI.createView({
        id: "__alloyId25761"
    });
    $.__views.__alloyId25760.add($.__views.__alloyId25761);
    $.__views.__alloyId25762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25762"
    });
    $.__views.__alloyId25761.add($.__views.__alloyId25762);
    $.__views.__alloyId25763 = Ti.UI.createView({
        id: "__alloyId25763"
    });
    $.__views.__alloyId25763 && $.addTopLevelView($.__views.__alloyId25763);
    $.__views.__alloyId25764 = Ti.UI.createView({
        id: "__alloyId25764"
    });
    $.__views.__alloyId25763.add($.__views.__alloyId25764);
    $.__views.__alloyId25765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25765"
    });
    $.__views.__alloyId25764.add($.__views.__alloyId25765);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;