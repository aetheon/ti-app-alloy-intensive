function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_845";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_845 = Ti.UI.createView({
        id: "widget_845"
    });
    $.__views.widget_845 && $.addTopLevelView($.__views.widget_845);
    $.__views.__alloyId21580 = Ti.UI.createView({
        id: "__alloyId21580"
    });
    $.__views.widget_845.add($.__views.__alloyId21580);
    $.__views.__alloyId21581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21581"
    });
    $.__views.__alloyId21580.add($.__views.__alloyId21581);
    $.__views.__alloyId21582 = Ti.UI.createView({
        id: "__alloyId21582"
    });
    $.__views.__alloyId21582 && $.addTopLevelView($.__views.__alloyId21582);
    $.__views.__alloyId21583 = Ti.UI.createView({
        id: "__alloyId21583"
    });
    $.__views.__alloyId21582.add($.__views.__alloyId21583);
    $.__views.__alloyId21584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21584"
    });
    $.__views.__alloyId21583.add($.__views.__alloyId21584);
    $.__views.__alloyId21585 = Ti.UI.createView({
        id: "__alloyId21585"
    });
    $.__views.__alloyId21585 && $.addTopLevelView($.__views.__alloyId21585);
    $.__views.__alloyId21586 = Ti.UI.createView({
        id: "__alloyId21586"
    });
    $.__views.__alloyId21585.add($.__views.__alloyId21586);
    $.__views.__alloyId21587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21587"
    });
    $.__views.__alloyId21586.add($.__views.__alloyId21587);
    $.__views.__alloyId21588 = Ti.UI.createView({
        id: "__alloyId21588"
    });
    $.__views.__alloyId21588 && $.addTopLevelView($.__views.__alloyId21588);
    $.__views.__alloyId21589 = Ti.UI.createView({
        id: "__alloyId21589"
    });
    $.__views.__alloyId21588.add($.__views.__alloyId21589);
    $.__views.__alloyId21590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21590"
    });
    $.__views.__alloyId21589.add($.__views.__alloyId21590);
    $.__views.__alloyId21591 = Ti.UI.createView({
        id: "__alloyId21591"
    });
    $.__views.__alloyId21591 && $.addTopLevelView($.__views.__alloyId21591);
    $.__views.__alloyId21592 = Ti.UI.createView({
        id: "__alloyId21592"
    });
    $.__views.__alloyId21591.add($.__views.__alloyId21592);
    $.__views.__alloyId21593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21593"
    });
    $.__views.__alloyId21592.add($.__views.__alloyId21593);
    $.__views.__alloyId21594 = Ti.UI.createView({
        id: "__alloyId21594"
    });
    $.__views.__alloyId21594 && $.addTopLevelView($.__views.__alloyId21594);
    $.__views.__alloyId21595 = Ti.UI.createView({
        id: "__alloyId21595"
    });
    $.__views.__alloyId21594.add($.__views.__alloyId21595);
    $.__views.__alloyId21596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21596"
    });
    $.__views.__alloyId21595.add($.__views.__alloyId21596);
    $.__views.__alloyId21597 = Ti.UI.createView({
        id: "__alloyId21597"
    });
    $.__views.__alloyId21597 && $.addTopLevelView($.__views.__alloyId21597);
    $.__views.__alloyId21598 = Ti.UI.createView({
        id: "__alloyId21598"
    });
    $.__views.__alloyId21597.add($.__views.__alloyId21598);
    $.__views.__alloyId21599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21599"
    });
    $.__views.__alloyId21598.add($.__views.__alloyId21599);
    $.__views.__alloyId21600 = Ti.UI.createView({
        id: "__alloyId21600"
    });
    $.__views.__alloyId21600 && $.addTopLevelView($.__views.__alloyId21600);
    $.__views.__alloyId21601 = Ti.UI.createView({
        id: "__alloyId21601"
    });
    $.__views.__alloyId21600.add($.__views.__alloyId21601);
    $.__views.__alloyId21602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21602"
    });
    $.__views.__alloyId21601.add($.__views.__alloyId21602);
    $.__views.__alloyId21603 = Ti.UI.createView({
        id: "__alloyId21603"
    });
    $.__views.__alloyId21603 && $.addTopLevelView($.__views.__alloyId21603);
    $.__views.__alloyId21604 = Ti.UI.createView({
        id: "__alloyId21604"
    });
    $.__views.__alloyId21603.add($.__views.__alloyId21604);
    $.__views.__alloyId21605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21605"
    });
    $.__views.__alloyId21604.add($.__views.__alloyId21605);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;