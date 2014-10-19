function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_400";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_400 = Ti.UI.createView({
        id: "widget_400"
    });
    $.__views.widget_400 && $.addTopLevelView($.__views.widget_400);
    $.__views.__alloyId8762 = Ti.UI.createView({
        id: "__alloyId8762"
    });
    $.__views.widget_400.add($.__views.__alloyId8762);
    $.__views.__alloyId8763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8763"
    });
    $.__views.__alloyId8762.add($.__views.__alloyId8763);
    $.__views.__alloyId8764 = Ti.UI.createView({
        id: "__alloyId8764"
    });
    $.__views.__alloyId8764 && $.addTopLevelView($.__views.__alloyId8764);
    $.__views.__alloyId8765 = Ti.UI.createView({
        id: "__alloyId8765"
    });
    $.__views.__alloyId8764.add($.__views.__alloyId8765);
    $.__views.__alloyId8766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8766"
    });
    $.__views.__alloyId8765.add($.__views.__alloyId8766);
    $.__views.__alloyId8767 = Ti.UI.createView({
        id: "__alloyId8767"
    });
    $.__views.__alloyId8767 && $.addTopLevelView($.__views.__alloyId8767);
    $.__views.__alloyId8768 = Ti.UI.createView({
        id: "__alloyId8768"
    });
    $.__views.__alloyId8767.add($.__views.__alloyId8768);
    $.__views.__alloyId8769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8769"
    });
    $.__views.__alloyId8768.add($.__views.__alloyId8769);
    $.__views.__alloyId8770 = Ti.UI.createView({
        id: "__alloyId8770"
    });
    $.__views.__alloyId8770 && $.addTopLevelView($.__views.__alloyId8770);
    $.__views.__alloyId8771 = Ti.UI.createView({
        id: "__alloyId8771"
    });
    $.__views.__alloyId8770.add($.__views.__alloyId8771);
    $.__views.__alloyId8772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8772"
    });
    $.__views.__alloyId8771.add($.__views.__alloyId8772);
    $.__views.__alloyId8773 = Ti.UI.createView({
        id: "__alloyId8773"
    });
    $.__views.__alloyId8773 && $.addTopLevelView($.__views.__alloyId8773);
    $.__views.__alloyId8774 = Ti.UI.createView({
        id: "__alloyId8774"
    });
    $.__views.__alloyId8773.add($.__views.__alloyId8774);
    $.__views.__alloyId8775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8775"
    });
    $.__views.__alloyId8774.add($.__views.__alloyId8775);
    $.__views.__alloyId8776 = Ti.UI.createView({
        id: "__alloyId8776"
    });
    $.__views.__alloyId8776 && $.addTopLevelView($.__views.__alloyId8776);
    $.__views.__alloyId8777 = Ti.UI.createView({
        id: "__alloyId8777"
    });
    $.__views.__alloyId8776.add($.__views.__alloyId8777);
    $.__views.__alloyId8778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8778"
    });
    $.__views.__alloyId8777.add($.__views.__alloyId8778);
    $.__views.__alloyId8779 = Ti.UI.createView({
        id: "__alloyId8779"
    });
    $.__views.__alloyId8779 && $.addTopLevelView($.__views.__alloyId8779);
    $.__views.__alloyId8780 = Ti.UI.createView({
        id: "__alloyId8780"
    });
    $.__views.__alloyId8779.add($.__views.__alloyId8780);
    $.__views.__alloyId8781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8781"
    });
    $.__views.__alloyId8780.add($.__views.__alloyId8781);
    $.__views.__alloyId8782 = Ti.UI.createView({
        id: "__alloyId8782"
    });
    $.__views.__alloyId8782 && $.addTopLevelView($.__views.__alloyId8782);
    $.__views.__alloyId8783 = Ti.UI.createView({
        id: "__alloyId8783"
    });
    $.__views.__alloyId8782.add($.__views.__alloyId8783);
    $.__views.__alloyId8784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8784"
    });
    $.__views.__alloyId8783.add($.__views.__alloyId8784);
    $.__views.__alloyId8785 = Ti.UI.createView({
        id: "__alloyId8785"
    });
    $.__views.__alloyId8785 && $.addTopLevelView($.__views.__alloyId8785);
    $.__views.__alloyId8786 = Ti.UI.createView({
        id: "__alloyId8786"
    });
    $.__views.__alloyId8785.add($.__views.__alloyId8786);
    $.__views.__alloyId8787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8787"
    });
    $.__views.__alloyId8786.add($.__views.__alloyId8787);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;