function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_325";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_325 = Ti.UI.createView({
        id: "widget_325"
    });
    $.__views.widget_325 && $.addTopLevelView($.__views.widget_325);
    $.__views.__alloyId6578 = Ti.UI.createView({
        id: "__alloyId6578"
    });
    $.__views.widget_325.add($.__views.__alloyId6578);
    $.__views.__alloyId6579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6579"
    });
    $.__views.__alloyId6578.add($.__views.__alloyId6579);
    $.__views.__alloyId6580 = Ti.UI.createView({
        id: "__alloyId6580"
    });
    $.__views.__alloyId6580 && $.addTopLevelView($.__views.__alloyId6580);
    $.__views.__alloyId6581 = Ti.UI.createView({
        id: "__alloyId6581"
    });
    $.__views.__alloyId6580.add($.__views.__alloyId6581);
    $.__views.__alloyId6582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6582"
    });
    $.__views.__alloyId6581.add($.__views.__alloyId6582);
    $.__views.__alloyId6583 = Ti.UI.createView({
        id: "__alloyId6583"
    });
    $.__views.__alloyId6583 && $.addTopLevelView($.__views.__alloyId6583);
    $.__views.__alloyId6584 = Ti.UI.createView({
        id: "__alloyId6584"
    });
    $.__views.__alloyId6583.add($.__views.__alloyId6584);
    $.__views.__alloyId6585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6585"
    });
    $.__views.__alloyId6584.add($.__views.__alloyId6585);
    $.__views.__alloyId6586 = Ti.UI.createView({
        id: "__alloyId6586"
    });
    $.__views.__alloyId6586 && $.addTopLevelView($.__views.__alloyId6586);
    $.__views.__alloyId6587 = Ti.UI.createView({
        id: "__alloyId6587"
    });
    $.__views.__alloyId6586.add($.__views.__alloyId6587);
    $.__views.__alloyId6588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6588"
    });
    $.__views.__alloyId6587.add($.__views.__alloyId6588);
    $.__views.__alloyId6589 = Ti.UI.createView({
        id: "__alloyId6589"
    });
    $.__views.__alloyId6589 && $.addTopLevelView($.__views.__alloyId6589);
    $.__views.__alloyId6590 = Ti.UI.createView({
        id: "__alloyId6590"
    });
    $.__views.__alloyId6589.add($.__views.__alloyId6590);
    $.__views.__alloyId6591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6591"
    });
    $.__views.__alloyId6590.add($.__views.__alloyId6591);
    $.__views.__alloyId6592 = Ti.UI.createView({
        id: "__alloyId6592"
    });
    $.__views.__alloyId6592 && $.addTopLevelView($.__views.__alloyId6592);
    $.__views.__alloyId6593 = Ti.UI.createView({
        id: "__alloyId6593"
    });
    $.__views.__alloyId6592.add($.__views.__alloyId6593);
    $.__views.__alloyId6594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6594"
    });
    $.__views.__alloyId6593.add($.__views.__alloyId6594);
    $.__views.__alloyId6595 = Ti.UI.createView({
        id: "__alloyId6595"
    });
    $.__views.__alloyId6595 && $.addTopLevelView($.__views.__alloyId6595);
    $.__views.__alloyId6596 = Ti.UI.createView({
        id: "__alloyId6596"
    });
    $.__views.__alloyId6595.add($.__views.__alloyId6596);
    $.__views.__alloyId6597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6597"
    });
    $.__views.__alloyId6596.add($.__views.__alloyId6597);
    $.__views.__alloyId6598 = Ti.UI.createView({
        id: "__alloyId6598"
    });
    $.__views.__alloyId6598 && $.addTopLevelView($.__views.__alloyId6598);
    $.__views.__alloyId6599 = Ti.UI.createView({
        id: "__alloyId6599"
    });
    $.__views.__alloyId6598.add($.__views.__alloyId6599);
    $.__views.__alloyId6600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6600"
    });
    $.__views.__alloyId6599.add($.__views.__alloyId6600);
    $.__views.__alloyId6601 = Ti.UI.createView({
        id: "__alloyId6601"
    });
    $.__views.__alloyId6601 && $.addTopLevelView($.__views.__alloyId6601);
    $.__views.__alloyId6602 = Ti.UI.createView({
        id: "__alloyId6602"
    });
    $.__views.__alloyId6601.add($.__views.__alloyId6602);
    $.__views.__alloyId6603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6603"
    });
    $.__views.__alloyId6602.add($.__views.__alloyId6603);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;