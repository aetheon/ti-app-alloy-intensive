function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_672";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_672 = Ti.UI.createView({
        id: "widget_672"
    });
    $.__views.widget_672 && $.addTopLevelView($.__views.widget_672);
    $.__views.__alloyId16588 = Ti.UI.createView({
        id: "__alloyId16588"
    });
    $.__views.widget_672.add($.__views.__alloyId16588);
    $.__views.__alloyId16589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16589"
    });
    $.__views.__alloyId16588.add($.__views.__alloyId16589);
    $.__views.__alloyId16590 = Ti.UI.createView({
        id: "__alloyId16590"
    });
    $.__views.__alloyId16590 && $.addTopLevelView($.__views.__alloyId16590);
    $.__views.__alloyId16591 = Ti.UI.createView({
        id: "__alloyId16591"
    });
    $.__views.__alloyId16590.add($.__views.__alloyId16591);
    $.__views.__alloyId16592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16592"
    });
    $.__views.__alloyId16591.add($.__views.__alloyId16592);
    $.__views.__alloyId16593 = Ti.UI.createView({
        id: "__alloyId16593"
    });
    $.__views.__alloyId16593 && $.addTopLevelView($.__views.__alloyId16593);
    $.__views.__alloyId16594 = Ti.UI.createView({
        id: "__alloyId16594"
    });
    $.__views.__alloyId16593.add($.__views.__alloyId16594);
    $.__views.__alloyId16595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16595"
    });
    $.__views.__alloyId16594.add($.__views.__alloyId16595);
    $.__views.__alloyId16596 = Ti.UI.createView({
        id: "__alloyId16596"
    });
    $.__views.__alloyId16596 && $.addTopLevelView($.__views.__alloyId16596);
    $.__views.__alloyId16597 = Ti.UI.createView({
        id: "__alloyId16597"
    });
    $.__views.__alloyId16596.add($.__views.__alloyId16597);
    $.__views.__alloyId16598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16598"
    });
    $.__views.__alloyId16597.add($.__views.__alloyId16598);
    $.__views.__alloyId16599 = Ti.UI.createView({
        id: "__alloyId16599"
    });
    $.__views.__alloyId16599 && $.addTopLevelView($.__views.__alloyId16599);
    $.__views.__alloyId16600 = Ti.UI.createView({
        id: "__alloyId16600"
    });
    $.__views.__alloyId16599.add($.__views.__alloyId16600);
    $.__views.__alloyId16601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16601"
    });
    $.__views.__alloyId16600.add($.__views.__alloyId16601);
    $.__views.__alloyId16602 = Ti.UI.createView({
        id: "__alloyId16602"
    });
    $.__views.__alloyId16602 && $.addTopLevelView($.__views.__alloyId16602);
    $.__views.__alloyId16603 = Ti.UI.createView({
        id: "__alloyId16603"
    });
    $.__views.__alloyId16602.add($.__views.__alloyId16603);
    $.__views.__alloyId16604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16604"
    });
    $.__views.__alloyId16603.add($.__views.__alloyId16604);
    $.__views.__alloyId16605 = Ti.UI.createView({
        id: "__alloyId16605"
    });
    $.__views.__alloyId16605 && $.addTopLevelView($.__views.__alloyId16605);
    $.__views.__alloyId16606 = Ti.UI.createView({
        id: "__alloyId16606"
    });
    $.__views.__alloyId16605.add($.__views.__alloyId16606);
    $.__views.__alloyId16607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16607"
    });
    $.__views.__alloyId16606.add($.__views.__alloyId16607);
    $.__views.__alloyId16608 = Ti.UI.createView({
        id: "__alloyId16608"
    });
    $.__views.__alloyId16608 && $.addTopLevelView($.__views.__alloyId16608);
    $.__views.__alloyId16609 = Ti.UI.createView({
        id: "__alloyId16609"
    });
    $.__views.__alloyId16608.add($.__views.__alloyId16609);
    $.__views.__alloyId16610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16610"
    });
    $.__views.__alloyId16609.add($.__views.__alloyId16610);
    $.__views.__alloyId16611 = Ti.UI.createView({
        id: "__alloyId16611"
    });
    $.__views.__alloyId16611 && $.addTopLevelView($.__views.__alloyId16611);
    $.__views.__alloyId16612 = Ti.UI.createView({
        id: "__alloyId16612"
    });
    $.__views.__alloyId16611.add($.__views.__alloyId16612);
    $.__views.__alloyId16613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16613"
    });
    $.__views.__alloyId16612.add($.__views.__alloyId16613);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;