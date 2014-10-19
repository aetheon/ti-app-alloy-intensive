function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_464";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_464 = Ti.UI.createView({
        id: "widget_464"
    });
    $.__views.widget_464 && $.addTopLevelView($.__views.widget_464);
    $.__views.__alloyId10582 = Ti.UI.createView({
        id: "__alloyId10582"
    });
    $.__views.widget_464.add($.__views.__alloyId10582);
    $.__views.__alloyId10583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10583"
    });
    $.__views.__alloyId10582.add($.__views.__alloyId10583);
    $.__views.__alloyId10584 = Ti.UI.createView({
        id: "__alloyId10584"
    });
    $.__views.__alloyId10584 && $.addTopLevelView($.__views.__alloyId10584);
    $.__views.__alloyId10585 = Ti.UI.createView({
        id: "__alloyId10585"
    });
    $.__views.__alloyId10584.add($.__views.__alloyId10585);
    $.__views.__alloyId10586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10586"
    });
    $.__views.__alloyId10585.add($.__views.__alloyId10586);
    $.__views.__alloyId10587 = Ti.UI.createView({
        id: "__alloyId10587"
    });
    $.__views.__alloyId10587 && $.addTopLevelView($.__views.__alloyId10587);
    $.__views.__alloyId10588 = Ti.UI.createView({
        id: "__alloyId10588"
    });
    $.__views.__alloyId10587.add($.__views.__alloyId10588);
    $.__views.__alloyId10589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10589"
    });
    $.__views.__alloyId10588.add($.__views.__alloyId10589);
    $.__views.__alloyId10590 = Ti.UI.createView({
        id: "__alloyId10590"
    });
    $.__views.__alloyId10590 && $.addTopLevelView($.__views.__alloyId10590);
    $.__views.__alloyId10591 = Ti.UI.createView({
        id: "__alloyId10591"
    });
    $.__views.__alloyId10590.add($.__views.__alloyId10591);
    $.__views.__alloyId10592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10592"
    });
    $.__views.__alloyId10591.add($.__views.__alloyId10592);
    $.__views.__alloyId10593 = Ti.UI.createView({
        id: "__alloyId10593"
    });
    $.__views.__alloyId10593 && $.addTopLevelView($.__views.__alloyId10593);
    $.__views.__alloyId10594 = Ti.UI.createView({
        id: "__alloyId10594"
    });
    $.__views.__alloyId10593.add($.__views.__alloyId10594);
    $.__views.__alloyId10595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10595"
    });
    $.__views.__alloyId10594.add($.__views.__alloyId10595);
    $.__views.__alloyId10596 = Ti.UI.createView({
        id: "__alloyId10596"
    });
    $.__views.__alloyId10596 && $.addTopLevelView($.__views.__alloyId10596);
    $.__views.__alloyId10597 = Ti.UI.createView({
        id: "__alloyId10597"
    });
    $.__views.__alloyId10596.add($.__views.__alloyId10597);
    $.__views.__alloyId10598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10598"
    });
    $.__views.__alloyId10597.add($.__views.__alloyId10598);
    $.__views.__alloyId10599 = Ti.UI.createView({
        id: "__alloyId10599"
    });
    $.__views.__alloyId10599 && $.addTopLevelView($.__views.__alloyId10599);
    $.__views.__alloyId10600 = Ti.UI.createView({
        id: "__alloyId10600"
    });
    $.__views.__alloyId10599.add($.__views.__alloyId10600);
    $.__views.__alloyId10601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10601"
    });
    $.__views.__alloyId10600.add($.__views.__alloyId10601);
    $.__views.__alloyId10602 = Ti.UI.createView({
        id: "__alloyId10602"
    });
    $.__views.__alloyId10602 && $.addTopLevelView($.__views.__alloyId10602);
    $.__views.__alloyId10603 = Ti.UI.createView({
        id: "__alloyId10603"
    });
    $.__views.__alloyId10602.add($.__views.__alloyId10603);
    $.__views.__alloyId10604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10604"
    });
    $.__views.__alloyId10603.add($.__views.__alloyId10604);
    $.__views.__alloyId10605 = Ti.UI.createView({
        id: "__alloyId10605"
    });
    $.__views.__alloyId10605 && $.addTopLevelView($.__views.__alloyId10605);
    $.__views.__alloyId10606 = Ti.UI.createView({
        id: "__alloyId10606"
    });
    $.__views.__alloyId10605.add($.__views.__alloyId10606);
    $.__views.__alloyId10607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10607"
    });
    $.__views.__alloyId10606.add($.__views.__alloyId10607);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;