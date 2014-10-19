function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_678";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_678 = Ti.UI.createView({
        id: "widget_678"
    });
    $.__views.widget_678 && $.addTopLevelView($.__views.widget_678);
    $.__views.__alloyId16744 = Ti.UI.createView({
        id: "__alloyId16744"
    });
    $.__views.widget_678.add($.__views.__alloyId16744);
    $.__views.__alloyId16745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16745"
    });
    $.__views.__alloyId16744.add($.__views.__alloyId16745);
    $.__views.__alloyId16746 = Ti.UI.createView({
        id: "__alloyId16746"
    });
    $.__views.__alloyId16746 && $.addTopLevelView($.__views.__alloyId16746);
    $.__views.__alloyId16747 = Ti.UI.createView({
        id: "__alloyId16747"
    });
    $.__views.__alloyId16746.add($.__views.__alloyId16747);
    $.__views.__alloyId16748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16748"
    });
    $.__views.__alloyId16747.add($.__views.__alloyId16748);
    $.__views.__alloyId16749 = Ti.UI.createView({
        id: "__alloyId16749"
    });
    $.__views.__alloyId16749 && $.addTopLevelView($.__views.__alloyId16749);
    $.__views.__alloyId16750 = Ti.UI.createView({
        id: "__alloyId16750"
    });
    $.__views.__alloyId16749.add($.__views.__alloyId16750);
    $.__views.__alloyId16751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16751"
    });
    $.__views.__alloyId16750.add($.__views.__alloyId16751);
    $.__views.__alloyId16752 = Ti.UI.createView({
        id: "__alloyId16752"
    });
    $.__views.__alloyId16752 && $.addTopLevelView($.__views.__alloyId16752);
    $.__views.__alloyId16753 = Ti.UI.createView({
        id: "__alloyId16753"
    });
    $.__views.__alloyId16752.add($.__views.__alloyId16753);
    $.__views.__alloyId16754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16754"
    });
    $.__views.__alloyId16753.add($.__views.__alloyId16754);
    $.__views.__alloyId16755 = Ti.UI.createView({
        id: "__alloyId16755"
    });
    $.__views.__alloyId16755 && $.addTopLevelView($.__views.__alloyId16755);
    $.__views.__alloyId16756 = Ti.UI.createView({
        id: "__alloyId16756"
    });
    $.__views.__alloyId16755.add($.__views.__alloyId16756);
    $.__views.__alloyId16757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16757"
    });
    $.__views.__alloyId16756.add($.__views.__alloyId16757);
    $.__views.__alloyId16758 = Ti.UI.createView({
        id: "__alloyId16758"
    });
    $.__views.__alloyId16758 && $.addTopLevelView($.__views.__alloyId16758);
    $.__views.__alloyId16759 = Ti.UI.createView({
        id: "__alloyId16759"
    });
    $.__views.__alloyId16758.add($.__views.__alloyId16759);
    $.__views.__alloyId16760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16760"
    });
    $.__views.__alloyId16759.add($.__views.__alloyId16760);
    $.__views.__alloyId16761 = Ti.UI.createView({
        id: "__alloyId16761"
    });
    $.__views.__alloyId16761 && $.addTopLevelView($.__views.__alloyId16761);
    $.__views.__alloyId16762 = Ti.UI.createView({
        id: "__alloyId16762"
    });
    $.__views.__alloyId16761.add($.__views.__alloyId16762);
    $.__views.__alloyId16763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16763"
    });
    $.__views.__alloyId16762.add($.__views.__alloyId16763);
    $.__views.__alloyId16764 = Ti.UI.createView({
        id: "__alloyId16764"
    });
    $.__views.__alloyId16764 && $.addTopLevelView($.__views.__alloyId16764);
    $.__views.__alloyId16765 = Ti.UI.createView({
        id: "__alloyId16765"
    });
    $.__views.__alloyId16764.add($.__views.__alloyId16765);
    $.__views.__alloyId16766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16766"
    });
    $.__views.__alloyId16765.add($.__views.__alloyId16766);
    $.__views.__alloyId16767 = Ti.UI.createView({
        id: "__alloyId16767"
    });
    $.__views.__alloyId16767 && $.addTopLevelView($.__views.__alloyId16767);
    $.__views.__alloyId16768 = Ti.UI.createView({
        id: "__alloyId16768"
    });
    $.__views.__alloyId16767.add($.__views.__alloyId16768);
    $.__views.__alloyId16769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16769"
    });
    $.__views.__alloyId16768.add($.__views.__alloyId16769);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;