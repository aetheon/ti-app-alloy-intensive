function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_533";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_533 = Ti.UI.createView({
        id: "widget_533"
    });
    $.__views.widget_533 && $.addTopLevelView($.__views.widget_533);
    $.__views.__alloyId12584 = Ti.UI.createView({
        id: "__alloyId12584"
    });
    $.__views.widget_533.add($.__views.__alloyId12584);
    $.__views.__alloyId12585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12585"
    });
    $.__views.__alloyId12584.add($.__views.__alloyId12585);
    $.__views.__alloyId12586 = Ti.UI.createView({
        id: "__alloyId12586"
    });
    $.__views.__alloyId12586 && $.addTopLevelView($.__views.__alloyId12586);
    $.__views.__alloyId12587 = Ti.UI.createView({
        id: "__alloyId12587"
    });
    $.__views.__alloyId12586.add($.__views.__alloyId12587);
    $.__views.__alloyId12588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12588"
    });
    $.__views.__alloyId12587.add($.__views.__alloyId12588);
    $.__views.__alloyId12589 = Ti.UI.createView({
        id: "__alloyId12589"
    });
    $.__views.__alloyId12589 && $.addTopLevelView($.__views.__alloyId12589);
    $.__views.__alloyId12590 = Ti.UI.createView({
        id: "__alloyId12590"
    });
    $.__views.__alloyId12589.add($.__views.__alloyId12590);
    $.__views.__alloyId12591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12591"
    });
    $.__views.__alloyId12590.add($.__views.__alloyId12591);
    $.__views.__alloyId12592 = Ti.UI.createView({
        id: "__alloyId12592"
    });
    $.__views.__alloyId12592 && $.addTopLevelView($.__views.__alloyId12592);
    $.__views.__alloyId12593 = Ti.UI.createView({
        id: "__alloyId12593"
    });
    $.__views.__alloyId12592.add($.__views.__alloyId12593);
    $.__views.__alloyId12594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12594"
    });
    $.__views.__alloyId12593.add($.__views.__alloyId12594);
    $.__views.__alloyId12595 = Ti.UI.createView({
        id: "__alloyId12595"
    });
    $.__views.__alloyId12595 && $.addTopLevelView($.__views.__alloyId12595);
    $.__views.__alloyId12596 = Ti.UI.createView({
        id: "__alloyId12596"
    });
    $.__views.__alloyId12595.add($.__views.__alloyId12596);
    $.__views.__alloyId12597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12597"
    });
    $.__views.__alloyId12596.add($.__views.__alloyId12597);
    $.__views.__alloyId12598 = Ti.UI.createView({
        id: "__alloyId12598"
    });
    $.__views.__alloyId12598 && $.addTopLevelView($.__views.__alloyId12598);
    $.__views.__alloyId12599 = Ti.UI.createView({
        id: "__alloyId12599"
    });
    $.__views.__alloyId12598.add($.__views.__alloyId12599);
    $.__views.__alloyId12600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12600"
    });
    $.__views.__alloyId12599.add($.__views.__alloyId12600);
    $.__views.__alloyId12601 = Ti.UI.createView({
        id: "__alloyId12601"
    });
    $.__views.__alloyId12601 && $.addTopLevelView($.__views.__alloyId12601);
    $.__views.__alloyId12602 = Ti.UI.createView({
        id: "__alloyId12602"
    });
    $.__views.__alloyId12601.add($.__views.__alloyId12602);
    $.__views.__alloyId12603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12603"
    });
    $.__views.__alloyId12602.add($.__views.__alloyId12603);
    $.__views.__alloyId12604 = Ti.UI.createView({
        id: "__alloyId12604"
    });
    $.__views.__alloyId12604 && $.addTopLevelView($.__views.__alloyId12604);
    $.__views.__alloyId12605 = Ti.UI.createView({
        id: "__alloyId12605"
    });
    $.__views.__alloyId12604.add($.__views.__alloyId12605);
    $.__views.__alloyId12606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12606"
    });
    $.__views.__alloyId12605.add($.__views.__alloyId12606);
    $.__views.__alloyId12607 = Ti.UI.createView({
        id: "__alloyId12607"
    });
    $.__views.__alloyId12607 && $.addTopLevelView($.__views.__alloyId12607);
    $.__views.__alloyId12608 = Ti.UI.createView({
        id: "__alloyId12608"
    });
    $.__views.__alloyId12607.add($.__views.__alloyId12608);
    $.__views.__alloyId12609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12609"
    });
    $.__views.__alloyId12608.add($.__views.__alloyId12609);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;