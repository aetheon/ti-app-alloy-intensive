function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_643";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_643 = Ti.UI.createView({
        id: "widget_643"
    });
    $.__views.widget_643 && $.addTopLevelView($.__views.widget_643);
    $.__views.__alloyId15756 = Ti.UI.createView({
        id: "__alloyId15756"
    });
    $.__views.widget_643.add($.__views.__alloyId15756);
    $.__views.__alloyId15757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15757"
    });
    $.__views.__alloyId15756.add($.__views.__alloyId15757);
    $.__views.__alloyId15758 = Ti.UI.createView({
        id: "__alloyId15758"
    });
    $.__views.__alloyId15758 && $.addTopLevelView($.__views.__alloyId15758);
    $.__views.__alloyId15759 = Ti.UI.createView({
        id: "__alloyId15759"
    });
    $.__views.__alloyId15758.add($.__views.__alloyId15759);
    $.__views.__alloyId15760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15760"
    });
    $.__views.__alloyId15759.add($.__views.__alloyId15760);
    $.__views.__alloyId15761 = Ti.UI.createView({
        id: "__alloyId15761"
    });
    $.__views.__alloyId15761 && $.addTopLevelView($.__views.__alloyId15761);
    $.__views.__alloyId15762 = Ti.UI.createView({
        id: "__alloyId15762"
    });
    $.__views.__alloyId15761.add($.__views.__alloyId15762);
    $.__views.__alloyId15763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15763"
    });
    $.__views.__alloyId15762.add($.__views.__alloyId15763);
    $.__views.__alloyId15764 = Ti.UI.createView({
        id: "__alloyId15764"
    });
    $.__views.__alloyId15764 && $.addTopLevelView($.__views.__alloyId15764);
    $.__views.__alloyId15765 = Ti.UI.createView({
        id: "__alloyId15765"
    });
    $.__views.__alloyId15764.add($.__views.__alloyId15765);
    $.__views.__alloyId15766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15766"
    });
    $.__views.__alloyId15765.add($.__views.__alloyId15766);
    $.__views.__alloyId15767 = Ti.UI.createView({
        id: "__alloyId15767"
    });
    $.__views.__alloyId15767 && $.addTopLevelView($.__views.__alloyId15767);
    $.__views.__alloyId15768 = Ti.UI.createView({
        id: "__alloyId15768"
    });
    $.__views.__alloyId15767.add($.__views.__alloyId15768);
    $.__views.__alloyId15769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15769"
    });
    $.__views.__alloyId15768.add($.__views.__alloyId15769);
    $.__views.__alloyId15770 = Ti.UI.createView({
        id: "__alloyId15770"
    });
    $.__views.__alloyId15770 && $.addTopLevelView($.__views.__alloyId15770);
    $.__views.__alloyId15771 = Ti.UI.createView({
        id: "__alloyId15771"
    });
    $.__views.__alloyId15770.add($.__views.__alloyId15771);
    $.__views.__alloyId15772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15772"
    });
    $.__views.__alloyId15771.add($.__views.__alloyId15772);
    $.__views.__alloyId15773 = Ti.UI.createView({
        id: "__alloyId15773"
    });
    $.__views.__alloyId15773 && $.addTopLevelView($.__views.__alloyId15773);
    $.__views.__alloyId15774 = Ti.UI.createView({
        id: "__alloyId15774"
    });
    $.__views.__alloyId15773.add($.__views.__alloyId15774);
    $.__views.__alloyId15775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15775"
    });
    $.__views.__alloyId15774.add($.__views.__alloyId15775);
    $.__views.__alloyId15776 = Ti.UI.createView({
        id: "__alloyId15776"
    });
    $.__views.__alloyId15776 && $.addTopLevelView($.__views.__alloyId15776);
    $.__views.__alloyId15777 = Ti.UI.createView({
        id: "__alloyId15777"
    });
    $.__views.__alloyId15776.add($.__views.__alloyId15777);
    $.__views.__alloyId15778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15778"
    });
    $.__views.__alloyId15777.add($.__views.__alloyId15778);
    $.__views.__alloyId15779 = Ti.UI.createView({
        id: "__alloyId15779"
    });
    $.__views.__alloyId15779 && $.addTopLevelView($.__views.__alloyId15779);
    $.__views.__alloyId15780 = Ti.UI.createView({
        id: "__alloyId15780"
    });
    $.__views.__alloyId15779.add($.__views.__alloyId15780);
    $.__views.__alloyId15781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15781"
    });
    $.__views.__alloyId15780.add($.__views.__alloyId15781);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;