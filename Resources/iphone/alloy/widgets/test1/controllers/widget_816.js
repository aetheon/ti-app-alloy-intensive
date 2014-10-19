function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_816";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_816 = Ti.UI.createView({
        id: "widget_816"
    });
    $.__views.widget_816 && $.addTopLevelView($.__views.widget_816);
    $.__views.__alloyId20748 = Ti.UI.createView({
        id: "__alloyId20748"
    });
    $.__views.widget_816.add($.__views.__alloyId20748);
    $.__views.__alloyId20749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20749"
    });
    $.__views.__alloyId20748.add($.__views.__alloyId20749);
    $.__views.__alloyId20750 = Ti.UI.createView({
        id: "__alloyId20750"
    });
    $.__views.__alloyId20750 && $.addTopLevelView($.__views.__alloyId20750);
    $.__views.__alloyId20751 = Ti.UI.createView({
        id: "__alloyId20751"
    });
    $.__views.__alloyId20750.add($.__views.__alloyId20751);
    $.__views.__alloyId20752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20752"
    });
    $.__views.__alloyId20751.add($.__views.__alloyId20752);
    $.__views.__alloyId20753 = Ti.UI.createView({
        id: "__alloyId20753"
    });
    $.__views.__alloyId20753 && $.addTopLevelView($.__views.__alloyId20753);
    $.__views.__alloyId20754 = Ti.UI.createView({
        id: "__alloyId20754"
    });
    $.__views.__alloyId20753.add($.__views.__alloyId20754);
    $.__views.__alloyId20755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20755"
    });
    $.__views.__alloyId20754.add($.__views.__alloyId20755);
    $.__views.__alloyId20756 = Ti.UI.createView({
        id: "__alloyId20756"
    });
    $.__views.__alloyId20756 && $.addTopLevelView($.__views.__alloyId20756);
    $.__views.__alloyId20757 = Ti.UI.createView({
        id: "__alloyId20757"
    });
    $.__views.__alloyId20756.add($.__views.__alloyId20757);
    $.__views.__alloyId20758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20758"
    });
    $.__views.__alloyId20757.add($.__views.__alloyId20758);
    $.__views.__alloyId20759 = Ti.UI.createView({
        id: "__alloyId20759"
    });
    $.__views.__alloyId20759 && $.addTopLevelView($.__views.__alloyId20759);
    $.__views.__alloyId20760 = Ti.UI.createView({
        id: "__alloyId20760"
    });
    $.__views.__alloyId20759.add($.__views.__alloyId20760);
    $.__views.__alloyId20761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20761"
    });
    $.__views.__alloyId20760.add($.__views.__alloyId20761);
    $.__views.__alloyId20762 = Ti.UI.createView({
        id: "__alloyId20762"
    });
    $.__views.__alloyId20762 && $.addTopLevelView($.__views.__alloyId20762);
    $.__views.__alloyId20763 = Ti.UI.createView({
        id: "__alloyId20763"
    });
    $.__views.__alloyId20762.add($.__views.__alloyId20763);
    $.__views.__alloyId20764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20764"
    });
    $.__views.__alloyId20763.add($.__views.__alloyId20764);
    $.__views.__alloyId20765 = Ti.UI.createView({
        id: "__alloyId20765"
    });
    $.__views.__alloyId20765 && $.addTopLevelView($.__views.__alloyId20765);
    $.__views.__alloyId20766 = Ti.UI.createView({
        id: "__alloyId20766"
    });
    $.__views.__alloyId20765.add($.__views.__alloyId20766);
    $.__views.__alloyId20767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20767"
    });
    $.__views.__alloyId20766.add($.__views.__alloyId20767);
    $.__views.__alloyId20768 = Ti.UI.createView({
        id: "__alloyId20768"
    });
    $.__views.__alloyId20768 && $.addTopLevelView($.__views.__alloyId20768);
    $.__views.__alloyId20769 = Ti.UI.createView({
        id: "__alloyId20769"
    });
    $.__views.__alloyId20768.add($.__views.__alloyId20769);
    $.__views.__alloyId20770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20770"
    });
    $.__views.__alloyId20769.add($.__views.__alloyId20770);
    $.__views.__alloyId20771 = Ti.UI.createView({
        id: "__alloyId20771"
    });
    $.__views.__alloyId20771 && $.addTopLevelView($.__views.__alloyId20771);
    $.__views.__alloyId20772 = Ti.UI.createView({
        id: "__alloyId20772"
    });
    $.__views.__alloyId20771.add($.__views.__alloyId20772);
    $.__views.__alloyId20773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20773"
    });
    $.__views.__alloyId20772.add($.__views.__alloyId20773);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;