function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_221";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_221 = Ti.UI.createView({
        id: "widget_221"
    });
    $.__views.widget_221 && $.addTopLevelView($.__views.widget_221);
    $.__views.__alloyId3588 = Ti.UI.createView({
        id: "__alloyId3588"
    });
    $.__views.widget_221.add($.__views.__alloyId3588);
    $.__views.__alloyId3589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3589"
    });
    $.__views.__alloyId3588.add($.__views.__alloyId3589);
    $.__views.__alloyId3590 = Ti.UI.createView({
        id: "__alloyId3590"
    });
    $.__views.__alloyId3590 && $.addTopLevelView($.__views.__alloyId3590);
    $.__views.__alloyId3591 = Ti.UI.createView({
        id: "__alloyId3591"
    });
    $.__views.__alloyId3590.add($.__views.__alloyId3591);
    $.__views.__alloyId3592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3592"
    });
    $.__views.__alloyId3591.add($.__views.__alloyId3592);
    $.__views.__alloyId3593 = Ti.UI.createView({
        id: "__alloyId3593"
    });
    $.__views.__alloyId3593 && $.addTopLevelView($.__views.__alloyId3593);
    $.__views.__alloyId3594 = Ti.UI.createView({
        id: "__alloyId3594"
    });
    $.__views.__alloyId3593.add($.__views.__alloyId3594);
    $.__views.__alloyId3595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3595"
    });
    $.__views.__alloyId3594.add($.__views.__alloyId3595);
    $.__views.__alloyId3596 = Ti.UI.createView({
        id: "__alloyId3596"
    });
    $.__views.__alloyId3596 && $.addTopLevelView($.__views.__alloyId3596);
    $.__views.__alloyId3597 = Ti.UI.createView({
        id: "__alloyId3597"
    });
    $.__views.__alloyId3596.add($.__views.__alloyId3597);
    $.__views.__alloyId3598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3598"
    });
    $.__views.__alloyId3597.add($.__views.__alloyId3598);
    $.__views.__alloyId3599 = Ti.UI.createView({
        id: "__alloyId3599"
    });
    $.__views.__alloyId3599 && $.addTopLevelView($.__views.__alloyId3599);
    $.__views.__alloyId3600 = Ti.UI.createView({
        id: "__alloyId3600"
    });
    $.__views.__alloyId3599.add($.__views.__alloyId3600);
    $.__views.__alloyId3601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3601"
    });
    $.__views.__alloyId3600.add($.__views.__alloyId3601);
    $.__views.__alloyId3602 = Ti.UI.createView({
        id: "__alloyId3602"
    });
    $.__views.__alloyId3602 && $.addTopLevelView($.__views.__alloyId3602);
    $.__views.__alloyId3603 = Ti.UI.createView({
        id: "__alloyId3603"
    });
    $.__views.__alloyId3602.add($.__views.__alloyId3603);
    $.__views.__alloyId3604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3604"
    });
    $.__views.__alloyId3603.add($.__views.__alloyId3604);
    $.__views.__alloyId3605 = Ti.UI.createView({
        id: "__alloyId3605"
    });
    $.__views.__alloyId3605 && $.addTopLevelView($.__views.__alloyId3605);
    $.__views.__alloyId3606 = Ti.UI.createView({
        id: "__alloyId3606"
    });
    $.__views.__alloyId3605.add($.__views.__alloyId3606);
    $.__views.__alloyId3607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3607"
    });
    $.__views.__alloyId3606.add($.__views.__alloyId3607);
    $.__views.__alloyId3608 = Ti.UI.createView({
        id: "__alloyId3608"
    });
    $.__views.__alloyId3608 && $.addTopLevelView($.__views.__alloyId3608);
    $.__views.__alloyId3609 = Ti.UI.createView({
        id: "__alloyId3609"
    });
    $.__views.__alloyId3608.add($.__views.__alloyId3609);
    $.__views.__alloyId3610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3610"
    });
    $.__views.__alloyId3609.add($.__views.__alloyId3610);
    $.__views.__alloyId3611 = Ti.UI.createView({
        id: "__alloyId3611"
    });
    $.__views.__alloyId3611 && $.addTopLevelView($.__views.__alloyId3611);
    $.__views.__alloyId3612 = Ti.UI.createView({
        id: "__alloyId3612"
    });
    $.__views.__alloyId3611.add($.__views.__alloyId3612);
    $.__views.__alloyId3613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3613"
    });
    $.__views.__alloyId3612.add($.__views.__alloyId3613);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;