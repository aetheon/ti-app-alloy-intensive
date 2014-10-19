function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_955";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_955 = Ti.UI.createView({
        id: "widget_955"
    });
    $.__views.widget_955 && $.addTopLevelView($.__views.widget_955);
    $.__views.__alloyId24752 = Ti.UI.createView({
        id: "__alloyId24752"
    });
    $.__views.widget_955.add($.__views.__alloyId24752);
    $.__views.__alloyId24753 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24753"
    });
    $.__views.__alloyId24752.add($.__views.__alloyId24753);
    $.__views.__alloyId24754 = Ti.UI.createView({
        id: "__alloyId24754"
    });
    $.__views.__alloyId24754 && $.addTopLevelView($.__views.__alloyId24754);
    $.__views.__alloyId24755 = Ti.UI.createView({
        id: "__alloyId24755"
    });
    $.__views.__alloyId24754.add($.__views.__alloyId24755);
    $.__views.__alloyId24756 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24756"
    });
    $.__views.__alloyId24755.add($.__views.__alloyId24756);
    $.__views.__alloyId24757 = Ti.UI.createView({
        id: "__alloyId24757"
    });
    $.__views.__alloyId24757 && $.addTopLevelView($.__views.__alloyId24757);
    $.__views.__alloyId24758 = Ti.UI.createView({
        id: "__alloyId24758"
    });
    $.__views.__alloyId24757.add($.__views.__alloyId24758);
    $.__views.__alloyId24759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24759"
    });
    $.__views.__alloyId24758.add($.__views.__alloyId24759);
    $.__views.__alloyId24760 = Ti.UI.createView({
        id: "__alloyId24760"
    });
    $.__views.__alloyId24760 && $.addTopLevelView($.__views.__alloyId24760);
    $.__views.__alloyId24761 = Ti.UI.createView({
        id: "__alloyId24761"
    });
    $.__views.__alloyId24760.add($.__views.__alloyId24761);
    $.__views.__alloyId24762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24762"
    });
    $.__views.__alloyId24761.add($.__views.__alloyId24762);
    $.__views.__alloyId24763 = Ti.UI.createView({
        id: "__alloyId24763"
    });
    $.__views.__alloyId24763 && $.addTopLevelView($.__views.__alloyId24763);
    $.__views.__alloyId24764 = Ti.UI.createView({
        id: "__alloyId24764"
    });
    $.__views.__alloyId24763.add($.__views.__alloyId24764);
    $.__views.__alloyId24765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24765"
    });
    $.__views.__alloyId24764.add($.__views.__alloyId24765);
    $.__views.__alloyId24766 = Ti.UI.createView({
        id: "__alloyId24766"
    });
    $.__views.__alloyId24766 && $.addTopLevelView($.__views.__alloyId24766);
    $.__views.__alloyId24767 = Ti.UI.createView({
        id: "__alloyId24767"
    });
    $.__views.__alloyId24766.add($.__views.__alloyId24767);
    $.__views.__alloyId24768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24768"
    });
    $.__views.__alloyId24767.add($.__views.__alloyId24768);
    $.__views.__alloyId24769 = Ti.UI.createView({
        id: "__alloyId24769"
    });
    $.__views.__alloyId24769 && $.addTopLevelView($.__views.__alloyId24769);
    $.__views.__alloyId24770 = Ti.UI.createView({
        id: "__alloyId24770"
    });
    $.__views.__alloyId24769.add($.__views.__alloyId24770);
    $.__views.__alloyId24771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24771"
    });
    $.__views.__alloyId24770.add($.__views.__alloyId24771);
    $.__views.__alloyId24772 = Ti.UI.createView({
        id: "__alloyId24772"
    });
    $.__views.__alloyId24772 && $.addTopLevelView($.__views.__alloyId24772);
    $.__views.__alloyId24773 = Ti.UI.createView({
        id: "__alloyId24773"
    });
    $.__views.__alloyId24772.add($.__views.__alloyId24773);
    $.__views.__alloyId24774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24774"
    });
    $.__views.__alloyId24773.add($.__views.__alloyId24774);
    $.__views.__alloyId24775 = Ti.UI.createView({
        id: "__alloyId24775"
    });
    $.__views.__alloyId24775 && $.addTopLevelView($.__views.__alloyId24775);
    $.__views.__alloyId24776 = Ti.UI.createView({
        id: "__alloyId24776"
    });
    $.__views.__alloyId24775.add($.__views.__alloyId24776);
    $.__views.__alloyId24777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24777"
    });
    $.__views.__alloyId24776.add($.__views.__alloyId24777);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;