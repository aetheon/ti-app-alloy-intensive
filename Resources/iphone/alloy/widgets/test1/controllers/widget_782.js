function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_782";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_782 = Ti.UI.createView({
        id: "widget_782"
    });
    $.__views.widget_782 && $.addTopLevelView($.__views.widget_782);
    $.__views.__alloyId19760 = Ti.UI.createView({
        id: "__alloyId19760"
    });
    $.__views.widget_782.add($.__views.__alloyId19760);
    $.__views.__alloyId19761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19761"
    });
    $.__views.__alloyId19760.add($.__views.__alloyId19761);
    $.__views.__alloyId19762 = Ti.UI.createView({
        id: "__alloyId19762"
    });
    $.__views.__alloyId19762 && $.addTopLevelView($.__views.__alloyId19762);
    $.__views.__alloyId19763 = Ti.UI.createView({
        id: "__alloyId19763"
    });
    $.__views.__alloyId19762.add($.__views.__alloyId19763);
    $.__views.__alloyId19764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19764"
    });
    $.__views.__alloyId19763.add($.__views.__alloyId19764);
    $.__views.__alloyId19765 = Ti.UI.createView({
        id: "__alloyId19765"
    });
    $.__views.__alloyId19765 && $.addTopLevelView($.__views.__alloyId19765);
    $.__views.__alloyId19766 = Ti.UI.createView({
        id: "__alloyId19766"
    });
    $.__views.__alloyId19765.add($.__views.__alloyId19766);
    $.__views.__alloyId19767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19767"
    });
    $.__views.__alloyId19766.add($.__views.__alloyId19767);
    $.__views.__alloyId19768 = Ti.UI.createView({
        id: "__alloyId19768"
    });
    $.__views.__alloyId19768 && $.addTopLevelView($.__views.__alloyId19768);
    $.__views.__alloyId19769 = Ti.UI.createView({
        id: "__alloyId19769"
    });
    $.__views.__alloyId19768.add($.__views.__alloyId19769);
    $.__views.__alloyId19770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19770"
    });
    $.__views.__alloyId19769.add($.__views.__alloyId19770);
    $.__views.__alloyId19771 = Ti.UI.createView({
        id: "__alloyId19771"
    });
    $.__views.__alloyId19771 && $.addTopLevelView($.__views.__alloyId19771);
    $.__views.__alloyId19772 = Ti.UI.createView({
        id: "__alloyId19772"
    });
    $.__views.__alloyId19771.add($.__views.__alloyId19772);
    $.__views.__alloyId19773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19773"
    });
    $.__views.__alloyId19772.add($.__views.__alloyId19773);
    $.__views.__alloyId19774 = Ti.UI.createView({
        id: "__alloyId19774"
    });
    $.__views.__alloyId19774 && $.addTopLevelView($.__views.__alloyId19774);
    $.__views.__alloyId19775 = Ti.UI.createView({
        id: "__alloyId19775"
    });
    $.__views.__alloyId19774.add($.__views.__alloyId19775);
    $.__views.__alloyId19776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19776"
    });
    $.__views.__alloyId19775.add($.__views.__alloyId19776);
    $.__views.__alloyId19777 = Ti.UI.createView({
        id: "__alloyId19777"
    });
    $.__views.__alloyId19777 && $.addTopLevelView($.__views.__alloyId19777);
    $.__views.__alloyId19778 = Ti.UI.createView({
        id: "__alloyId19778"
    });
    $.__views.__alloyId19777.add($.__views.__alloyId19778);
    $.__views.__alloyId19779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19779"
    });
    $.__views.__alloyId19778.add($.__views.__alloyId19779);
    $.__views.__alloyId19780 = Ti.UI.createView({
        id: "__alloyId19780"
    });
    $.__views.__alloyId19780 && $.addTopLevelView($.__views.__alloyId19780);
    $.__views.__alloyId19781 = Ti.UI.createView({
        id: "__alloyId19781"
    });
    $.__views.__alloyId19780.add($.__views.__alloyId19781);
    $.__views.__alloyId19782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19782"
    });
    $.__views.__alloyId19781.add($.__views.__alloyId19782);
    $.__views.__alloyId19783 = Ti.UI.createView({
        id: "__alloyId19783"
    });
    $.__views.__alloyId19783 && $.addTopLevelView($.__views.__alloyId19783);
    $.__views.__alloyId19784 = Ti.UI.createView({
        id: "__alloyId19784"
    });
    $.__views.__alloyId19783.add($.__views.__alloyId19784);
    $.__views.__alloyId19785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19785"
    });
    $.__views.__alloyId19784.add($.__views.__alloyId19785);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;