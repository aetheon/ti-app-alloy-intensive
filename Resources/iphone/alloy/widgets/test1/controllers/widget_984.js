function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_984";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_984 = Ti.UI.createView({
        id: "widget_984"
    });
    $.__views.widget_984 && $.addTopLevelView($.__views.widget_984);
    $.__views.__alloyId25584 = Ti.UI.createView({
        id: "__alloyId25584"
    });
    $.__views.widget_984.add($.__views.__alloyId25584);
    $.__views.__alloyId25585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25585"
    });
    $.__views.__alloyId25584.add($.__views.__alloyId25585);
    $.__views.__alloyId25586 = Ti.UI.createView({
        id: "__alloyId25586"
    });
    $.__views.__alloyId25586 && $.addTopLevelView($.__views.__alloyId25586);
    $.__views.__alloyId25587 = Ti.UI.createView({
        id: "__alloyId25587"
    });
    $.__views.__alloyId25586.add($.__views.__alloyId25587);
    $.__views.__alloyId25588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25588"
    });
    $.__views.__alloyId25587.add($.__views.__alloyId25588);
    $.__views.__alloyId25589 = Ti.UI.createView({
        id: "__alloyId25589"
    });
    $.__views.__alloyId25589 && $.addTopLevelView($.__views.__alloyId25589);
    $.__views.__alloyId25590 = Ti.UI.createView({
        id: "__alloyId25590"
    });
    $.__views.__alloyId25589.add($.__views.__alloyId25590);
    $.__views.__alloyId25591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25591"
    });
    $.__views.__alloyId25590.add($.__views.__alloyId25591);
    $.__views.__alloyId25592 = Ti.UI.createView({
        id: "__alloyId25592"
    });
    $.__views.__alloyId25592 && $.addTopLevelView($.__views.__alloyId25592);
    $.__views.__alloyId25593 = Ti.UI.createView({
        id: "__alloyId25593"
    });
    $.__views.__alloyId25592.add($.__views.__alloyId25593);
    $.__views.__alloyId25594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25594"
    });
    $.__views.__alloyId25593.add($.__views.__alloyId25594);
    $.__views.__alloyId25595 = Ti.UI.createView({
        id: "__alloyId25595"
    });
    $.__views.__alloyId25595 && $.addTopLevelView($.__views.__alloyId25595);
    $.__views.__alloyId25596 = Ti.UI.createView({
        id: "__alloyId25596"
    });
    $.__views.__alloyId25595.add($.__views.__alloyId25596);
    $.__views.__alloyId25597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25597"
    });
    $.__views.__alloyId25596.add($.__views.__alloyId25597);
    $.__views.__alloyId25598 = Ti.UI.createView({
        id: "__alloyId25598"
    });
    $.__views.__alloyId25598 && $.addTopLevelView($.__views.__alloyId25598);
    $.__views.__alloyId25599 = Ti.UI.createView({
        id: "__alloyId25599"
    });
    $.__views.__alloyId25598.add($.__views.__alloyId25599);
    $.__views.__alloyId25600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25600"
    });
    $.__views.__alloyId25599.add($.__views.__alloyId25600);
    $.__views.__alloyId25601 = Ti.UI.createView({
        id: "__alloyId25601"
    });
    $.__views.__alloyId25601 && $.addTopLevelView($.__views.__alloyId25601);
    $.__views.__alloyId25602 = Ti.UI.createView({
        id: "__alloyId25602"
    });
    $.__views.__alloyId25601.add($.__views.__alloyId25602);
    $.__views.__alloyId25603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25603"
    });
    $.__views.__alloyId25602.add($.__views.__alloyId25603);
    $.__views.__alloyId25604 = Ti.UI.createView({
        id: "__alloyId25604"
    });
    $.__views.__alloyId25604 && $.addTopLevelView($.__views.__alloyId25604);
    $.__views.__alloyId25605 = Ti.UI.createView({
        id: "__alloyId25605"
    });
    $.__views.__alloyId25604.add($.__views.__alloyId25605);
    $.__views.__alloyId25606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25606"
    });
    $.__views.__alloyId25605.add($.__views.__alloyId25606);
    $.__views.__alloyId25607 = Ti.UI.createView({
        id: "__alloyId25607"
    });
    $.__views.__alloyId25607 && $.addTopLevelView($.__views.__alloyId25607);
    $.__views.__alloyId25608 = Ti.UI.createView({
        id: "__alloyId25608"
    });
    $.__views.__alloyId25607.add($.__views.__alloyId25608);
    $.__views.__alloyId25609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25609"
    });
    $.__views.__alloyId25608.add($.__views.__alloyId25609);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;