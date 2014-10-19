function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_608";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_608 = Ti.UI.createView({
        id: "widget_608"
    });
    $.__views.widget_608 && $.addTopLevelView($.__views.widget_608);
    $.__views.__alloyId14742 = Ti.UI.createView({
        id: "__alloyId14742"
    });
    $.__views.widget_608.add($.__views.__alloyId14742);
    $.__views.__alloyId14743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14743"
    });
    $.__views.__alloyId14742.add($.__views.__alloyId14743);
    $.__views.__alloyId14744 = Ti.UI.createView({
        id: "__alloyId14744"
    });
    $.__views.__alloyId14744 && $.addTopLevelView($.__views.__alloyId14744);
    $.__views.__alloyId14745 = Ti.UI.createView({
        id: "__alloyId14745"
    });
    $.__views.__alloyId14744.add($.__views.__alloyId14745);
    $.__views.__alloyId14746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14746"
    });
    $.__views.__alloyId14745.add($.__views.__alloyId14746);
    $.__views.__alloyId14747 = Ti.UI.createView({
        id: "__alloyId14747"
    });
    $.__views.__alloyId14747 && $.addTopLevelView($.__views.__alloyId14747);
    $.__views.__alloyId14748 = Ti.UI.createView({
        id: "__alloyId14748"
    });
    $.__views.__alloyId14747.add($.__views.__alloyId14748);
    $.__views.__alloyId14749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14749"
    });
    $.__views.__alloyId14748.add($.__views.__alloyId14749);
    $.__views.__alloyId14750 = Ti.UI.createView({
        id: "__alloyId14750"
    });
    $.__views.__alloyId14750 && $.addTopLevelView($.__views.__alloyId14750);
    $.__views.__alloyId14751 = Ti.UI.createView({
        id: "__alloyId14751"
    });
    $.__views.__alloyId14750.add($.__views.__alloyId14751);
    $.__views.__alloyId14752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14752"
    });
    $.__views.__alloyId14751.add($.__views.__alloyId14752);
    $.__views.__alloyId14753 = Ti.UI.createView({
        id: "__alloyId14753"
    });
    $.__views.__alloyId14753 && $.addTopLevelView($.__views.__alloyId14753);
    $.__views.__alloyId14754 = Ti.UI.createView({
        id: "__alloyId14754"
    });
    $.__views.__alloyId14753.add($.__views.__alloyId14754);
    $.__views.__alloyId14755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14755"
    });
    $.__views.__alloyId14754.add($.__views.__alloyId14755);
    $.__views.__alloyId14756 = Ti.UI.createView({
        id: "__alloyId14756"
    });
    $.__views.__alloyId14756 && $.addTopLevelView($.__views.__alloyId14756);
    $.__views.__alloyId14757 = Ti.UI.createView({
        id: "__alloyId14757"
    });
    $.__views.__alloyId14756.add($.__views.__alloyId14757);
    $.__views.__alloyId14758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14758"
    });
    $.__views.__alloyId14757.add($.__views.__alloyId14758);
    $.__views.__alloyId14759 = Ti.UI.createView({
        id: "__alloyId14759"
    });
    $.__views.__alloyId14759 && $.addTopLevelView($.__views.__alloyId14759);
    $.__views.__alloyId14760 = Ti.UI.createView({
        id: "__alloyId14760"
    });
    $.__views.__alloyId14759.add($.__views.__alloyId14760);
    $.__views.__alloyId14761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14761"
    });
    $.__views.__alloyId14760.add($.__views.__alloyId14761);
    $.__views.__alloyId14762 = Ti.UI.createView({
        id: "__alloyId14762"
    });
    $.__views.__alloyId14762 && $.addTopLevelView($.__views.__alloyId14762);
    $.__views.__alloyId14763 = Ti.UI.createView({
        id: "__alloyId14763"
    });
    $.__views.__alloyId14762.add($.__views.__alloyId14763);
    $.__views.__alloyId14764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14764"
    });
    $.__views.__alloyId14763.add($.__views.__alloyId14764);
    $.__views.__alloyId14765 = Ti.UI.createView({
        id: "__alloyId14765"
    });
    $.__views.__alloyId14765 && $.addTopLevelView($.__views.__alloyId14765);
    $.__views.__alloyId14766 = Ti.UI.createView({
        id: "__alloyId14766"
    });
    $.__views.__alloyId14765.add($.__views.__alloyId14766);
    $.__views.__alloyId14767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14767"
    });
    $.__views.__alloyId14766.add($.__views.__alloyId14767);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;