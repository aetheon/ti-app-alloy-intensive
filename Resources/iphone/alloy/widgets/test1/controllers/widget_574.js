function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_574";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_574 = Ti.UI.createView({
        id: "widget_574"
    });
    $.__views.widget_574 && $.addTopLevelView($.__views.widget_574);
    $.__views.__alloyId13754 = Ti.UI.createView({
        id: "__alloyId13754"
    });
    $.__views.widget_574.add($.__views.__alloyId13754);
    $.__views.__alloyId13755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13755"
    });
    $.__views.__alloyId13754.add($.__views.__alloyId13755);
    $.__views.__alloyId13756 = Ti.UI.createView({
        id: "__alloyId13756"
    });
    $.__views.__alloyId13756 && $.addTopLevelView($.__views.__alloyId13756);
    $.__views.__alloyId13757 = Ti.UI.createView({
        id: "__alloyId13757"
    });
    $.__views.__alloyId13756.add($.__views.__alloyId13757);
    $.__views.__alloyId13758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13758"
    });
    $.__views.__alloyId13757.add($.__views.__alloyId13758);
    $.__views.__alloyId13759 = Ti.UI.createView({
        id: "__alloyId13759"
    });
    $.__views.__alloyId13759 && $.addTopLevelView($.__views.__alloyId13759);
    $.__views.__alloyId13760 = Ti.UI.createView({
        id: "__alloyId13760"
    });
    $.__views.__alloyId13759.add($.__views.__alloyId13760);
    $.__views.__alloyId13761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13761"
    });
    $.__views.__alloyId13760.add($.__views.__alloyId13761);
    $.__views.__alloyId13762 = Ti.UI.createView({
        id: "__alloyId13762"
    });
    $.__views.__alloyId13762 && $.addTopLevelView($.__views.__alloyId13762);
    $.__views.__alloyId13763 = Ti.UI.createView({
        id: "__alloyId13763"
    });
    $.__views.__alloyId13762.add($.__views.__alloyId13763);
    $.__views.__alloyId13764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13764"
    });
    $.__views.__alloyId13763.add($.__views.__alloyId13764);
    $.__views.__alloyId13765 = Ti.UI.createView({
        id: "__alloyId13765"
    });
    $.__views.__alloyId13765 && $.addTopLevelView($.__views.__alloyId13765);
    $.__views.__alloyId13766 = Ti.UI.createView({
        id: "__alloyId13766"
    });
    $.__views.__alloyId13765.add($.__views.__alloyId13766);
    $.__views.__alloyId13767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13767"
    });
    $.__views.__alloyId13766.add($.__views.__alloyId13767);
    $.__views.__alloyId13768 = Ti.UI.createView({
        id: "__alloyId13768"
    });
    $.__views.__alloyId13768 && $.addTopLevelView($.__views.__alloyId13768);
    $.__views.__alloyId13769 = Ti.UI.createView({
        id: "__alloyId13769"
    });
    $.__views.__alloyId13768.add($.__views.__alloyId13769);
    $.__views.__alloyId13770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13770"
    });
    $.__views.__alloyId13769.add($.__views.__alloyId13770);
    $.__views.__alloyId13771 = Ti.UI.createView({
        id: "__alloyId13771"
    });
    $.__views.__alloyId13771 && $.addTopLevelView($.__views.__alloyId13771);
    $.__views.__alloyId13772 = Ti.UI.createView({
        id: "__alloyId13772"
    });
    $.__views.__alloyId13771.add($.__views.__alloyId13772);
    $.__views.__alloyId13773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13773"
    });
    $.__views.__alloyId13772.add($.__views.__alloyId13773);
    $.__views.__alloyId13774 = Ti.UI.createView({
        id: "__alloyId13774"
    });
    $.__views.__alloyId13774 && $.addTopLevelView($.__views.__alloyId13774);
    $.__views.__alloyId13775 = Ti.UI.createView({
        id: "__alloyId13775"
    });
    $.__views.__alloyId13774.add($.__views.__alloyId13775);
    $.__views.__alloyId13776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13776"
    });
    $.__views.__alloyId13775.add($.__views.__alloyId13776);
    $.__views.__alloyId13777 = Ti.UI.createView({
        id: "__alloyId13777"
    });
    $.__views.__alloyId13777 && $.addTopLevelView($.__views.__alloyId13777);
    $.__views.__alloyId13778 = Ti.UI.createView({
        id: "__alloyId13778"
    });
    $.__views.__alloyId13777.add($.__views.__alloyId13778);
    $.__views.__alloyId13779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13779"
    });
    $.__views.__alloyId13778.add($.__views.__alloyId13779);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;