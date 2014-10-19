function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_741";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_741 = Ti.UI.createView({
        id: "widget_741"
    });
    $.__views.widget_741 && $.addTopLevelView($.__views.widget_741);
    $.__views.__alloyId18590 = Ti.UI.createView({
        id: "__alloyId18590"
    });
    $.__views.widget_741.add($.__views.__alloyId18590);
    $.__views.__alloyId18591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18591"
    });
    $.__views.__alloyId18590.add($.__views.__alloyId18591);
    $.__views.__alloyId18592 = Ti.UI.createView({
        id: "__alloyId18592"
    });
    $.__views.__alloyId18592 && $.addTopLevelView($.__views.__alloyId18592);
    $.__views.__alloyId18593 = Ti.UI.createView({
        id: "__alloyId18593"
    });
    $.__views.__alloyId18592.add($.__views.__alloyId18593);
    $.__views.__alloyId18594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18594"
    });
    $.__views.__alloyId18593.add($.__views.__alloyId18594);
    $.__views.__alloyId18595 = Ti.UI.createView({
        id: "__alloyId18595"
    });
    $.__views.__alloyId18595 && $.addTopLevelView($.__views.__alloyId18595);
    $.__views.__alloyId18596 = Ti.UI.createView({
        id: "__alloyId18596"
    });
    $.__views.__alloyId18595.add($.__views.__alloyId18596);
    $.__views.__alloyId18597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18597"
    });
    $.__views.__alloyId18596.add($.__views.__alloyId18597);
    $.__views.__alloyId18598 = Ti.UI.createView({
        id: "__alloyId18598"
    });
    $.__views.__alloyId18598 && $.addTopLevelView($.__views.__alloyId18598);
    $.__views.__alloyId18599 = Ti.UI.createView({
        id: "__alloyId18599"
    });
    $.__views.__alloyId18598.add($.__views.__alloyId18599);
    $.__views.__alloyId18600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18600"
    });
    $.__views.__alloyId18599.add($.__views.__alloyId18600);
    $.__views.__alloyId18601 = Ti.UI.createView({
        id: "__alloyId18601"
    });
    $.__views.__alloyId18601 && $.addTopLevelView($.__views.__alloyId18601);
    $.__views.__alloyId18602 = Ti.UI.createView({
        id: "__alloyId18602"
    });
    $.__views.__alloyId18601.add($.__views.__alloyId18602);
    $.__views.__alloyId18603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18603"
    });
    $.__views.__alloyId18602.add($.__views.__alloyId18603);
    $.__views.__alloyId18604 = Ti.UI.createView({
        id: "__alloyId18604"
    });
    $.__views.__alloyId18604 && $.addTopLevelView($.__views.__alloyId18604);
    $.__views.__alloyId18605 = Ti.UI.createView({
        id: "__alloyId18605"
    });
    $.__views.__alloyId18604.add($.__views.__alloyId18605);
    $.__views.__alloyId18606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18606"
    });
    $.__views.__alloyId18605.add($.__views.__alloyId18606);
    $.__views.__alloyId18607 = Ti.UI.createView({
        id: "__alloyId18607"
    });
    $.__views.__alloyId18607 && $.addTopLevelView($.__views.__alloyId18607);
    $.__views.__alloyId18608 = Ti.UI.createView({
        id: "__alloyId18608"
    });
    $.__views.__alloyId18607.add($.__views.__alloyId18608);
    $.__views.__alloyId18609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18609"
    });
    $.__views.__alloyId18608.add($.__views.__alloyId18609);
    $.__views.__alloyId18610 = Ti.UI.createView({
        id: "__alloyId18610"
    });
    $.__views.__alloyId18610 && $.addTopLevelView($.__views.__alloyId18610);
    $.__views.__alloyId18611 = Ti.UI.createView({
        id: "__alloyId18611"
    });
    $.__views.__alloyId18610.add($.__views.__alloyId18611);
    $.__views.__alloyId18612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18612"
    });
    $.__views.__alloyId18611.add($.__views.__alloyId18612);
    $.__views.__alloyId18613 = Ti.UI.createView({
        id: "__alloyId18613"
    });
    $.__views.__alloyId18613 && $.addTopLevelView($.__views.__alloyId18613);
    $.__views.__alloyId18614 = Ti.UI.createView({
        id: "__alloyId18614"
    });
    $.__views.__alloyId18613.add($.__views.__alloyId18614);
    $.__views.__alloyId18615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18615"
    });
    $.__views.__alloyId18614.add($.__views.__alloyId18615);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;