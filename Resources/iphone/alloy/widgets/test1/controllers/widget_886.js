function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_886";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_886 = Ti.UI.createView({
        id: "widget_886"
    });
    $.__views.widget_886 && $.addTopLevelView($.__views.widget_886);
    $.__views.__alloyId22750 = Ti.UI.createView({
        id: "__alloyId22750"
    });
    $.__views.widget_886.add($.__views.__alloyId22750);
    $.__views.__alloyId22751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22751"
    });
    $.__views.__alloyId22750.add($.__views.__alloyId22751);
    $.__views.__alloyId22752 = Ti.UI.createView({
        id: "__alloyId22752"
    });
    $.__views.__alloyId22752 && $.addTopLevelView($.__views.__alloyId22752);
    $.__views.__alloyId22753 = Ti.UI.createView({
        id: "__alloyId22753"
    });
    $.__views.__alloyId22752.add($.__views.__alloyId22753);
    $.__views.__alloyId22754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22754"
    });
    $.__views.__alloyId22753.add($.__views.__alloyId22754);
    $.__views.__alloyId22755 = Ti.UI.createView({
        id: "__alloyId22755"
    });
    $.__views.__alloyId22755 && $.addTopLevelView($.__views.__alloyId22755);
    $.__views.__alloyId22756 = Ti.UI.createView({
        id: "__alloyId22756"
    });
    $.__views.__alloyId22755.add($.__views.__alloyId22756);
    $.__views.__alloyId22757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22757"
    });
    $.__views.__alloyId22756.add($.__views.__alloyId22757);
    $.__views.__alloyId22758 = Ti.UI.createView({
        id: "__alloyId22758"
    });
    $.__views.__alloyId22758 && $.addTopLevelView($.__views.__alloyId22758);
    $.__views.__alloyId22759 = Ti.UI.createView({
        id: "__alloyId22759"
    });
    $.__views.__alloyId22758.add($.__views.__alloyId22759);
    $.__views.__alloyId22760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22760"
    });
    $.__views.__alloyId22759.add($.__views.__alloyId22760);
    $.__views.__alloyId22761 = Ti.UI.createView({
        id: "__alloyId22761"
    });
    $.__views.__alloyId22761 && $.addTopLevelView($.__views.__alloyId22761);
    $.__views.__alloyId22762 = Ti.UI.createView({
        id: "__alloyId22762"
    });
    $.__views.__alloyId22761.add($.__views.__alloyId22762);
    $.__views.__alloyId22763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22763"
    });
    $.__views.__alloyId22762.add($.__views.__alloyId22763);
    $.__views.__alloyId22764 = Ti.UI.createView({
        id: "__alloyId22764"
    });
    $.__views.__alloyId22764 && $.addTopLevelView($.__views.__alloyId22764);
    $.__views.__alloyId22765 = Ti.UI.createView({
        id: "__alloyId22765"
    });
    $.__views.__alloyId22764.add($.__views.__alloyId22765);
    $.__views.__alloyId22766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22766"
    });
    $.__views.__alloyId22765.add($.__views.__alloyId22766);
    $.__views.__alloyId22767 = Ti.UI.createView({
        id: "__alloyId22767"
    });
    $.__views.__alloyId22767 && $.addTopLevelView($.__views.__alloyId22767);
    $.__views.__alloyId22768 = Ti.UI.createView({
        id: "__alloyId22768"
    });
    $.__views.__alloyId22767.add($.__views.__alloyId22768);
    $.__views.__alloyId22769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22769"
    });
    $.__views.__alloyId22768.add($.__views.__alloyId22769);
    $.__views.__alloyId22770 = Ti.UI.createView({
        id: "__alloyId22770"
    });
    $.__views.__alloyId22770 && $.addTopLevelView($.__views.__alloyId22770);
    $.__views.__alloyId22771 = Ti.UI.createView({
        id: "__alloyId22771"
    });
    $.__views.__alloyId22770.add($.__views.__alloyId22771);
    $.__views.__alloyId22772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22772"
    });
    $.__views.__alloyId22771.add($.__views.__alloyId22772);
    $.__views.__alloyId22773 = Ti.UI.createView({
        id: "__alloyId22773"
    });
    $.__views.__alloyId22773 && $.addTopLevelView($.__views.__alloyId22773);
    $.__views.__alloyId22774 = Ti.UI.createView({
        id: "__alloyId22774"
    });
    $.__views.__alloyId22773.add($.__views.__alloyId22774);
    $.__views.__alloyId22775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22775"
    });
    $.__views.__alloyId22774.add($.__views.__alloyId22775);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;