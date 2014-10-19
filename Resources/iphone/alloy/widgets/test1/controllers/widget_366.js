function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_366";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_366 = Ti.UI.createView({
        id: "widget_366"
    });
    $.__views.widget_366 && $.addTopLevelView($.__views.widget_366);
    $.__views.__alloyId7748 = Ti.UI.createView({
        id: "__alloyId7748"
    });
    $.__views.widget_366.add($.__views.__alloyId7748);
    $.__views.__alloyId7749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7749"
    });
    $.__views.__alloyId7748.add($.__views.__alloyId7749);
    $.__views.__alloyId7750 = Ti.UI.createView({
        id: "__alloyId7750"
    });
    $.__views.__alloyId7750 && $.addTopLevelView($.__views.__alloyId7750);
    $.__views.__alloyId7751 = Ti.UI.createView({
        id: "__alloyId7751"
    });
    $.__views.__alloyId7750.add($.__views.__alloyId7751);
    $.__views.__alloyId7752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7752"
    });
    $.__views.__alloyId7751.add($.__views.__alloyId7752);
    $.__views.__alloyId7753 = Ti.UI.createView({
        id: "__alloyId7753"
    });
    $.__views.__alloyId7753 && $.addTopLevelView($.__views.__alloyId7753);
    $.__views.__alloyId7754 = Ti.UI.createView({
        id: "__alloyId7754"
    });
    $.__views.__alloyId7753.add($.__views.__alloyId7754);
    $.__views.__alloyId7755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7755"
    });
    $.__views.__alloyId7754.add($.__views.__alloyId7755);
    $.__views.__alloyId7756 = Ti.UI.createView({
        id: "__alloyId7756"
    });
    $.__views.__alloyId7756 && $.addTopLevelView($.__views.__alloyId7756);
    $.__views.__alloyId7757 = Ti.UI.createView({
        id: "__alloyId7757"
    });
    $.__views.__alloyId7756.add($.__views.__alloyId7757);
    $.__views.__alloyId7758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7758"
    });
    $.__views.__alloyId7757.add($.__views.__alloyId7758);
    $.__views.__alloyId7759 = Ti.UI.createView({
        id: "__alloyId7759"
    });
    $.__views.__alloyId7759 && $.addTopLevelView($.__views.__alloyId7759);
    $.__views.__alloyId7760 = Ti.UI.createView({
        id: "__alloyId7760"
    });
    $.__views.__alloyId7759.add($.__views.__alloyId7760);
    $.__views.__alloyId7761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7761"
    });
    $.__views.__alloyId7760.add($.__views.__alloyId7761);
    $.__views.__alloyId7762 = Ti.UI.createView({
        id: "__alloyId7762"
    });
    $.__views.__alloyId7762 && $.addTopLevelView($.__views.__alloyId7762);
    $.__views.__alloyId7763 = Ti.UI.createView({
        id: "__alloyId7763"
    });
    $.__views.__alloyId7762.add($.__views.__alloyId7763);
    $.__views.__alloyId7764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7764"
    });
    $.__views.__alloyId7763.add($.__views.__alloyId7764);
    $.__views.__alloyId7765 = Ti.UI.createView({
        id: "__alloyId7765"
    });
    $.__views.__alloyId7765 && $.addTopLevelView($.__views.__alloyId7765);
    $.__views.__alloyId7766 = Ti.UI.createView({
        id: "__alloyId7766"
    });
    $.__views.__alloyId7765.add($.__views.__alloyId7766);
    $.__views.__alloyId7767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7767"
    });
    $.__views.__alloyId7766.add($.__views.__alloyId7767);
    $.__views.__alloyId7768 = Ti.UI.createView({
        id: "__alloyId7768"
    });
    $.__views.__alloyId7768 && $.addTopLevelView($.__views.__alloyId7768);
    $.__views.__alloyId7769 = Ti.UI.createView({
        id: "__alloyId7769"
    });
    $.__views.__alloyId7768.add($.__views.__alloyId7769);
    $.__views.__alloyId7770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7770"
    });
    $.__views.__alloyId7769.add($.__views.__alloyId7770);
    $.__views.__alloyId7771 = Ti.UI.createView({
        id: "__alloyId7771"
    });
    $.__views.__alloyId7771 && $.addTopLevelView($.__views.__alloyId7771);
    $.__views.__alloyId7772 = Ti.UI.createView({
        id: "__alloyId7772"
    });
    $.__views.__alloyId7771.add($.__views.__alloyId7772);
    $.__views.__alloyId7773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7773"
    });
    $.__views.__alloyId7772.add($.__views.__alloyId7773);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;