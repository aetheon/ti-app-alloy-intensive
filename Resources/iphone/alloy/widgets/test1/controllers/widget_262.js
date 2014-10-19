function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_262";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_262 = Ti.UI.createView({
        id: "widget_262"
    });
    $.__views.widget_262 && $.addTopLevelView($.__views.widget_262);
    $.__views.__alloyId4758 = Ti.UI.createView({
        id: "__alloyId4758"
    });
    $.__views.widget_262.add($.__views.__alloyId4758);
    $.__views.__alloyId4759 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4759"
    });
    $.__views.__alloyId4758.add($.__views.__alloyId4759);
    $.__views.__alloyId4760 = Ti.UI.createView({
        id: "__alloyId4760"
    });
    $.__views.__alloyId4760 && $.addTopLevelView($.__views.__alloyId4760);
    $.__views.__alloyId4761 = Ti.UI.createView({
        id: "__alloyId4761"
    });
    $.__views.__alloyId4760.add($.__views.__alloyId4761);
    $.__views.__alloyId4762 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4762"
    });
    $.__views.__alloyId4761.add($.__views.__alloyId4762);
    $.__views.__alloyId4763 = Ti.UI.createView({
        id: "__alloyId4763"
    });
    $.__views.__alloyId4763 && $.addTopLevelView($.__views.__alloyId4763);
    $.__views.__alloyId4764 = Ti.UI.createView({
        id: "__alloyId4764"
    });
    $.__views.__alloyId4763.add($.__views.__alloyId4764);
    $.__views.__alloyId4765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4765"
    });
    $.__views.__alloyId4764.add($.__views.__alloyId4765);
    $.__views.__alloyId4766 = Ti.UI.createView({
        id: "__alloyId4766"
    });
    $.__views.__alloyId4766 && $.addTopLevelView($.__views.__alloyId4766);
    $.__views.__alloyId4767 = Ti.UI.createView({
        id: "__alloyId4767"
    });
    $.__views.__alloyId4766.add($.__views.__alloyId4767);
    $.__views.__alloyId4768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4768"
    });
    $.__views.__alloyId4767.add($.__views.__alloyId4768);
    $.__views.__alloyId4769 = Ti.UI.createView({
        id: "__alloyId4769"
    });
    $.__views.__alloyId4769 && $.addTopLevelView($.__views.__alloyId4769);
    $.__views.__alloyId4770 = Ti.UI.createView({
        id: "__alloyId4770"
    });
    $.__views.__alloyId4769.add($.__views.__alloyId4770);
    $.__views.__alloyId4771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4771"
    });
    $.__views.__alloyId4770.add($.__views.__alloyId4771);
    $.__views.__alloyId4772 = Ti.UI.createView({
        id: "__alloyId4772"
    });
    $.__views.__alloyId4772 && $.addTopLevelView($.__views.__alloyId4772);
    $.__views.__alloyId4773 = Ti.UI.createView({
        id: "__alloyId4773"
    });
    $.__views.__alloyId4772.add($.__views.__alloyId4773);
    $.__views.__alloyId4774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4774"
    });
    $.__views.__alloyId4773.add($.__views.__alloyId4774);
    $.__views.__alloyId4775 = Ti.UI.createView({
        id: "__alloyId4775"
    });
    $.__views.__alloyId4775 && $.addTopLevelView($.__views.__alloyId4775);
    $.__views.__alloyId4776 = Ti.UI.createView({
        id: "__alloyId4776"
    });
    $.__views.__alloyId4775.add($.__views.__alloyId4776);
    $.__views.__alloyId4777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4777"
    });
    $.__views.__alloyId4776.add($.__views.__alloyId4777);
    $.__views.__alloyId4778 = Ti.UI.createView({
        id: "__alloyId4778"
    });
    $.__views.__alloyId4778 && $.addTopLevelView($.__views.__alloyId4778);
    $.__views.__alloyId4779 = Ti.UI.createView({
        id: "__alloyId4779"
    });
    $.__views.__alloyId4778.add($.__views.__alloyId4779);
    $.__views.__alloyId4780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4780"
    });
    $.__views.__alloyId4779.add($.__views.__alloyId4780);
    $.__views.__alloyId4781 = Ti.UI.createView({
        id: "__alloyId4781"
    });
    $.__views.__alloyId4781 && $.addTopLevelView($.__views.__alloyId4781);
    $.__views.__alloyId4782 = Ti.UI.createView({
        id: "__alloyId4782"
    });
    $.__views.__alloyId4781.add($.__views.__alloyId4782);
    $.__views.__alloyId4783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4783"
    });
    $.__views.__alloyId4782.add($.__views.__alloyId4783);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;