function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_877";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_877 = Ti.UI.createView({
        id: "widget_877"
    });
    $.__views.widget_877 && $.addTopLevelView($.__views.widget_877);
    $.__views.__alloyId22490 = Ti.UI.createView({
        id: "__alloyId22490"
    });
    $.__views.widget_877.add($.__views.__alloyId22490);
    $.__views.__alloyId22491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22491"
    });
    $.__views.__alloyId22490.add($.__views.__alloyId22491);
    $.__views.__alloyId22492 = Ti.UI.createView({
        id: "__alloyId22492"
    });
    $.__views.__alloyId22492 && $.addTopLevelView($.__views.__alloyId22492);
    $.__views.__alloyId22493 = Ti.UI.createView({
        id: "__alloyId22493"
    });
    $.__views.__alloyId22492.add($.__views.__alloyId22493);
    $.__views.__alloyId22494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22494"
    });
    $.__views.__alloyId22493.add($.__views.__alloyId22494);
    $.__views.__alloyId22495 = Ti.UI.createView({
        id: "__alloyId22495"
    });
    $.__views.__alloyId22495 && $.addTopLevelView($.__views.__alloyId22495);
    $.__views.__alloyId22496 = Ti.UI.createView({
        id: "__alloyId22496"
    });
    $.__views.__alloyId22495.add($.__views.__alloyId22496);
    $.__views.__alloyId22497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22497"
    });
    $.__views.__alloyId22496.add($.__views.__alloyId22497);
    $.__views.__alloyId22498 = Ti.UI.createView({
        id: "__alloyId22498"
    });
    $.__views.__alloyId22498 && $.addTopLevelView($.__views.__alloyId22498);
    $.__views.__alloyId22499 = Ti.UI.createView({
        id: "__alloyId22499"
    });
    $.__views.__alloyId22498.add($.__views.__alloyId22499);
    $.__views.__alloyId22500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22500"
    });
    $.__views.__alloyId22499.add($.__views.__alloyId22500);
    $.__views.__alloyId22501 = Ti.UI.createView({
        id: "__alloyId22501"
    });
    $.__views.__alloyId22501 && $.addTopLevelView($.__views.__alloyId22501);
    $.__views.__alloyId22502 = Ti.UI.createView({
        id: "__alloyId22502"
    });
    $.__views.__alloyId22501.add($.__views.__alloyId22502);
    $.__views.__alloyId22503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22503"
    });
    $.__views.__alloyId22502.add($.__views.__alloyId22503);
    $.__views.__alloyId22504 = Ti.UI.createView({
        id: "__alloyId22504"
    });
    $.__views.__alloyId22504 && $.addTopLevelView($.__views.__alloyId22504);
    $.__views.__alloyId22505 = Ti.UI.createView({
        id: "__alloyId22505"
    });
    $.__views.__alloyId22504.add($.__views.__alloyId22505);
    $.__views.__alloyId22506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22506"
    });
    $.__views.__alloyId22505.add($.__views.__alloyId22506);
    $.__views.__alloyId22507 = Ti.UI.createView({
        id: "__alloyId22507"
    });
    $.__views.__alloyId22507 && $.addTopLevelView($.__views.__alloyId22507);
    $.__views.__alloyId22508 = Ti.UI.createView({
        id: "__alloyId22508"
    });
    $.__views.__alloyId22507.add($.__views.__alloyId22508);
    $.__views.__alloyId22509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22509"
    });
    $.__views.__alloyId22508.add($.__views.__alloyId22509);
    $.__views.__alloyId22510 = Ti.UI.createView({
        id: "__alloyId22510"
    });
    $.__views.__alloyId22510 && $.addTopLevelView($.__views.__alloyId22510);
    $.__views.__alloyId22511 = Ti.UI.createView({
        id: "__alloyId22511"
    });
    $.__views.__alloyId22510.add($.__views.__alloyId22511);
    $.__views.__alloyId22512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22512"
    });
    $.__views.__alloyId22511.add($.__views.__alloyId22512);
    $.__views.__alloyId22513 = Ti.UI.createView({
        id: "__alloyId22513"
    });
    $.__views.__alloyId22513 && $.addTopLevelView($.__views.__alloyId22513);
    $.__views.__alloyId22514 = Ti.UI.createView({
        id: "__alloyId22514"
    });
    $.__views.__alloyId22513.add($.__views.__alloyId22514);
    $.__views.__alloyId22515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22515"
    });
    $.__views.__alloyId22514.add($.__views.__alloyId22515);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;