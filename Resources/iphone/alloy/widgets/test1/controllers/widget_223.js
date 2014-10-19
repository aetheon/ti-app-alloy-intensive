function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_223";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_223 = Ti.UI.createView({
        id: "widget_223"
    });
    $.__views.widget_223 && $.addTopLevelView($.__views.widget_223);
    $.__views.__alloyId3640 = Ti.UI.createView({
        id: "__alloyId3640"
    });
    $.__views.widget_223.add($.__views.__alloyId3640);
    $.__views.__alloyId3641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3641"
    });
    $.__views.__alloyId3640.add($.__views.__alloyId3641);
    $.__views.__alloyId3642 = Ti.UI.createView({
        id: "__alloyId3642"
    });
    $.__views.__alloyId3642 && $.addTopLevelView($.__views.__alloyId3642);
    $.__views.__alloyId3643 = Ti.UI.createView({
        id: "__alloyId3643"
    });
    $.__views.__alloyId3642.add($.__views.__alloyId3643);
    $.__views.__alloyId3644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3644"
    });
    $.__views.__alloyId3643.add($.__views.__alloyId3644);
    $.__views.__alloyId3645 = Ti.UI.createView({
        id: "__alloyId3645"
    });
    $.__views.__alloyId3645 && $.addTopLevelView($.__views.__alloyId3645);
    $.__views.__alloyId3646 = Ti.UI.createView({
        id: "__alloyId3646"
    });
    $.__views.__alloyId3645.add($.__views.__alloyId3646);
    $.__views.__alloyId3647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3647"
    });
    $.__views.__alloyId3646.add($.__views.__alloyId3647);
    $.__views.__alloyId3648 = Ti.UI.createView({
        id: "__alloyId3648"
    });
    $.__views.__alloyId3648 && $.addTopLevelView($.__views.__alloyId3648);
    $.__views.__alloyId3649 = Ti.UI.createView({
        id: "__alloyId3649"
    });
    $.__views.__alloyId3648.add($.__views.__alloyId3649);
    $.__views.__alloyId3650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3650"
    });
    $.__views.__alloyId3649.add($.__views.__alloyId3650);
    $.__views.__alloyId3651 = Ti.UI.createView({
        id: "__alloyId3651"
    });
    $.__views.__alloyId3651 && $.addTopLevelView($.__views.__alloyId3651);
    $.__views.__alloyId3652 = Ti.UI.createView({
        id: "__alloyId3652"
    });
    $.__views.__alloyId3651.add($.__views.__alloyId3652);
    $.__views.__alloyId3653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3653"
    });
    $.__views.__alloyId3652.add($.__views.__alloyId3653);
    $.__views.__alloyId3654 = Ti.UI.createView({
        id: "__alloyId3654"
    });
    $.__views.__alloyId3654 && $.addTopLevelView($.__views.__alloyId3654);
    $.__views.__alloyId3655 = Ti.UI.createView({
        id: "__alloyId3655"
    });
    $.__views.__alloyId3654.add($.__views.__alloyId3655);
    $.__views.__alloyId3656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3656"
    });
    $.__views.__alloyId3655.add($.__views.__alloyId3656);
    $.__views.__alloyId3657 = Ti.UI.createView({
        id: "__alloyId3657"
    });
    $.__views.__alloyId3657 && $.addTopLevelView($.__views.__alloyId3657);
    $.__views.__alloyId3658 = Ti.UI.createView({
        id: "__alloyId3658"
    });
    $.__views.__alloyId3657.add($.__views.__alloyId3658);
    $.__views.__alloyId3659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3659"
    });
    $.__views.__alloyId3658.add($.__views.__alloyId3659);
    $.__views.__alloyId3660 = Ti.UI.createView({
        id: "__alloyId3660"
    });
    $.__views.__alloyId3660 && $.addTopLevelView($.__views.__alloyId3660);
    $.__views.__alloyId3661 = Ti.UI.createView({
        id: "__alloyId3661"
    });
    $.__views.__alloyId3660.add($.__views.__alloyId3661);
    $.__views.__alloyId3662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3662"
    });
    $.__views.__alloyId3661.add($.__views.__alloyId3662);
    $.__views.__alloyId3663 = Ti.UI.createView({
        id: "__alloyId3663"
    });
    $.__views.__alloyId3663 && $.addTopLevelView($.__views.__alloyId3663);
    $.__views.__alloyId3664 = Ti.UI.createView({
        id: "__alloyId3664"
    });
    $.__views.__alloyId3663.add($.__views.__alloyId3664);
    $.__views.__alloyId3665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3665"
    });
    $.__views.__alloyId3664.add($.__views.__alloyId3665);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;