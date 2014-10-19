function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_712";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_712 = Ti.UI.createView({
        id: "widget_712"
    });
    $.__views.widget_712 && $.addTopLevelView($.__views.widget_712);
    $.__views.__alloyId17758 = Ti.UI.createView({
        id: "__alloyId17758"
    });
    $.__views.widget_712.add($.__views.__alloyId17758);
    $.__views.__alloyId17759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17759"
    });
    $.__views.__alloyId17758.add($.__views.__alloyId17759);
    $.__views.__alloyId17760 = Ti.UI.createView({
        id: "__alloyId17760"
    });
    $.__views.__alloyId17760 && $.addTopLevelView($.__views.__alloyId17760);
    $.__views.__alloyId17761 = Ti.UI.createView({
        id: "__alloyId17761"
    });
    $.__views.__alloyId17760.add($.__views.__alloyId17761);
    $.__views.__alloyId17762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17762"
    });
    $.__views.__alloyId17761.add($.__views.__alloyId17762);
    $.__views.__alloyId17763 = Ti.UI.createView({
        id: "__alloyId17763"
    });
    $.__views.__alloyId17763 && $.addTopLevelView($.__views.__alloyId17763);
    $.__views.__alloyId17764 = Ti.UI.createView({
        id: "__alloyId17764"
    });
    $.__views.__alloyId17763.add($.__views.__alloyId17764);
    $.__views.__alloyId17765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17765"
    });
    $.__views.__alloyId17764.add($.__views.__alloyId17765);
    $.__views.__alloyId17766 = Ti.UI.createView({
        id: "__alloyId17766"
    });
    $.__views.__alloyId17766 && $.addTopLevelView($.__views.__alloyId17766);
    $.__views.__alloyId17767 = Ti.UI.createView({
        id: "__alloyId17767"
    });
    $.__views.__alloyId17766.add($.__views.__alloyId17767);
    $.__views.__alloyId17768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17768"
    });
    $.__views.__alloyId17767.add($.__views.__alloyId17768);
    $.__views.__alloyId17769 = Ti.UI.createView({
        id: "__alloyId17769"
    });
    $.__views.__alloyId17769 && $.addTopLevelView($.__views.__alloyId17769);
    $.__views.__alloyId17770 = Ti.UI.createView({
        id: "__alloyId17770"
    });
    $.__views.__alloyId17769.add($.__views.__alloyId17770);
    $.__views.__alloyId17771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17771"
    });
    $.__views.__alloyId17770.add($.__views.__alloyId17771);
    $.__views.__alloyId17772 = Ti.UI.createView({
        id: "__alloyId17772"
    });
    $.__views.__alloyId17772 && $.addTopLevelView($.__views.__alloyId17772);
    $.__views.__alloyId17773 = Ti.UI.createView({
        id: "__alloyId17773"
    });
    $.__views.__alloyId17772.add($.__views.__alloyId17773);
    $.__views.__alloyId17774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17774"
    });
    $.__views.__alloyId17773.add($.__views.__alloyId17774);
    $.__views.__alloyId17775 = Ti.UI.createView({
        id: "__alloyId17775"
    });
    $.__views.__alloyId17775 && $.addTopLevelView($.__views.__alloyId17775);
    $.__views.__alloyId17776 = Ti.UI.createView({
        id: "__alloyId17776"
    });
    $.__views.__alloyId17775.add($.__views.__alloyId17776);
    $.__views.__alloyId17777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17777"
    });
    $.__views.__alloyId17776.add($.__views.__alloyId17777);
    $.__views.__alloyId17778 = Ti.UI.createView({
        id: "__alloyId17778"
    });
    $.__views.__alloyId17778 && $.addTopLevelView($.__views.__alloyId17778);
    $.__views.__alloyId17779 = Ti.UI.createView({
        id: "__alloyId17779"
    });
    $.__views.__alloyId17778.add($.__views.__alloyId17779);
    $.__views.__alloyId17780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17780"
    });
    $.__views.__alloyId17779.add($.__views.__alloyId17780);
    $.__views.__alloyId17781 = Ti.UI.createView({
        id: "__alloyId17781"
    });
    $.__views.__alloyId17781 && $.addTopLevelView($.__views.__alloyId17781);
    $.__views.__alloyId17782 = Ti.UI.createView({
        id: "__alloyId17782"
    });
    $.__views.__alloyId17781.add($.__views.__alloyId17782);
    $.__views.__alloyId17783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17783"
    });
    $.__views.__alloyId17782.add($.__views.__alloyId17783);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;