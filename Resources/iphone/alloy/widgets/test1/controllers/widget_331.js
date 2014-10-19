function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_331";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_331 = Ti.UI.createView({
        id: "widget_331"
    });
    $.__views.widget_331 && $.addTopLevelView($.__views.widget_331);
    $.__views.__alloyId6760 = Ti.UI.createView({
        id: "__alloyId6760"
    });
    $.__views.widget_331.add($.__views.__alloyId6760);
    $.__views.__alloyId6761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6761"
    });
    $.__views.__alloyId6760.add($.__views.__alloyId6761);
    $.__views.__alloyId6762 = Ti.UI.createView({
        id: "__alloyId6762"
    });
    $.__views.__alloyId6762 && $.addTopLevelView($.__views.__alloyId6762);
    $.__views.__alloyId6763 = Ti.UI.createView({
        id: "__alloyId6763"
    });
    $.__views.__alloyId6762.add($.__views.__alloyId6763);
    $.__views.__alloyId6764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6764"
    });
    $.__views.__alloyId6763.add($.__views.__alloyId6764);
    $.__views.__alloyId6765 = Ti.UI.createView({
        id: "__alloyId6765"
    });
    $.__views.__alloyId6765 && $.addTopLevelView($.__views.__alloyId6765);
    $.__views.__alloyId6766 = Ti.UI.createView({
        id: "__alloyId6766"
    });
    $.__views.__alloyId6765.add($.__views.__alloyId6766);
    $.__views.__alloyId6767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6767"
    });
    $.__views.__alloyId6766.add($.__views.__alloyId6767);
    $.__views.__alloyId6768 = Ti.UI.createView({
        id: "__alloyId6768"
    });
    $.__views.__alloyId6768 && $.addTopLevelView($.__views.__alloyId6768);
    $.__views.__alloyId6769 = Ti.UI.createView({
        id: "__alloyId6769"
    });
    $.__views.__alloyId6768.add($.__views.__alloyId6769);
    $.__views.__alloyId6770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6770"
    });
    $.__views.__alloyId6769.add($.__views.__alloyId6770);
    $.__views.__alloyId6771 = Ti.UI.createView({
        id: "__alloyId6771"
    });
    $.__views.__alloyId6771 && $.addTopLevelView($.__views.__alloyId6771);
    $.__views.__alloyId6772 = Ti.UI.createView({
        id: "__alloyId6772"
    });
    $.__views.__alloyId6771.add($.__views.__alloyId6772);
    $.__views.__alloyId6773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6773"
    });
    $.__views.__alloyId6772.add($.__views.__alloyId6773);
    $.__views.__alloyId6774 = Ti.UI.createView({
        id: "__alloyId6774"
    });
    $.__views.__alloyId6774 && $.addTopLevelView($.__views.__alloyId6774);
    $.__views.__alloyId6775 = Ti.UI.createView({
        id: "__alloyId6775"
    });
    $.__views.__alloyId6774.add($.__views.__alloyId6775);
    $.__views.__alloyId6776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6776"
    });
    $.__views.__alloyId6775.add($.__views.__alloyId6776);
    $.__views.__alloyId6777 = Ti.UI.createView({
        id: "__alloyId6777"
    });
    $.__views.__alloyId6777 && $.addTopLevelView($.__views.__alloyId6777);
    $.__views.__alloyId6778 = Ti.UI.createView({
        id: "__alloyId6778"
    });
    $.__views.__alloyId6777.add($.__views.__alloyId6778);
    $.__views.__alloyId6779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6779"
    });
    $.__views.__alloyId6778.add($.__views.__alloyId6779);
    $.__views.__alloyId6780 = Ti.UI.createView({
        id: "__alloyId6780"
    });
    $.__views.__alloyId6780 && $.addTopLevelView($.__views.__alloyId6780);
    $.__views.__alloyId6781 = Ti.UI.createView({
        id: "__alloyId6781"
    });
    $.__views.__alloyId6780.add($.__views.__alloyId6781);
    $.__views.__alloyId6782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6782"
    });
    $.__views.__alloyId6781.add($.__views.__alloyId6782);
    $.__views.__alloyId6783 = Ti.UI.createView({
        id: "__alloyId6783"
    });
    $.__views.__alloyId6783 && $.addTopLevelView($.__views.__alloyId6783);
    $.__views.__alloyId6784 = Ti.UI.createView({
        id: "__alloyId6784"
    });
    $.__views.__alloyId6783.add($.__views.__alloyId6784);
    $.__views.__alloyId6785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6785"
    });
    $.__views.__alloyId6784.add($.__views.__alloyId6785);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;