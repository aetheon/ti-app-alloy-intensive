function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_226";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_226 = Ti.UI.createView({
        id: "widget_226"
    });
    $.__views.widget_226 && $.addTopLevelView($.__views.widget_226);
    $.__views.__alloyId3718 = Ti.UI.createView({
        id: "__alloyId3718"
    });
    $.__views.widget_226.add($.__views.__alloyId3718);
    $.__views.__alloyId3719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3719"
    });
    $.__views.__alloyId3718.add($.__views.__alloyId3719);
    $.__views.__alloyId3720 = Ti.UI.createView({
        id: "__alloyId3720"
    });
    $.__views.__alloyId3720 && $.addTopLevelView($.__views.__alloyId3720);
    $.__views.__alloyId3721 = Ti.UI.createView({
        id: "__alloyId3721"
    });
    $.__views.__alloyId3720.add($.__views.__alloyId3721);
    $.__views.__alloyId3722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3722"
    });
    $.__views.__alloyId3721.add($.__views.__alloyId3722);
    $.__views.__alloyId3723 = Ti.UI.createView({
        id: "__alloyId3723"
    });
    $.__views.__alloyId3723 && $.addTopLevelView($.__views.__alloyId3723);
    $.__views.__alloyId3724 = Ti.UI.createView({
        id: "__alloyId3724"
    });
    $.__views.__alloyId3723.add($.__views.__alloyId3724);
    $.__views.__alloyId3725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3725"
    });
    $.__views.__alloyId3724.add($.__views.__alloyId3725);
    $.__views.__alloyId3726 = Ti.UI.createView({
        id: "__alloyId3726"
    });
    $.__views.__alloyId3726 && $.addTopLevelView($.__views.__alloyId3726);
    $.__views.__alloyId3727 = Ti.UI.createView({
        id: "__alloyId3727"
    });
    $.__views.__alloyId3726.add($.__views.__alloyId3727);
    $.__views.__alloyId3728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3728"
    });
    $.__views.__alloyId3727.add($.__views.__alloyId3728);
    $.__views.__alloyId3729 = Ti.UI.createView({
        id: "__alloyId3729"
    });
    $.__views.__alloyId3729 && $.addTopLevelView($.__views.__alloyId3729);
    $.__views.__alloyId3730 = Ti.UI.createView({
        id: "__alloyId3730"
    });
    $.__views.__alloyId3729.add($.__views.__alloyId3730);
    $.__views.__alloyId3731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3731"
    });
    $.__views.__alloyId3730.add($.__views.__alloyId3731);
    $.__views.__alloyId3732 = Ti.UI.createView({
        id: "__alloyId3732"
    });
    $.__views.__alloyId3732 && $.addTopLevelView($.__views.__alloyId3732);
    $.__views.__alloyId3733 = Ti.UI.createView({
        id: "__alloyId3733"
    });
    $.__views.__alloyId3732.add($.__views.__alloyId3733);
    $.__views.__alloyId3734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3734"
    });
    $.__views.__alloyId3733.add($.__views.__alloyId3734);
    $.__views.__alloyId3735 = Ti.UI.createView({
        id: "__alloyId3735"
    });
    $.__views.__alloyId3735 && $.addTopLevelView($.__views.__alloyId3735);
    $.__views.__alloyId3736 = Ti.UI.createView({
        id: "__alloyId3736"
    });
    $.__views.__alloyId3735.add($.__views.__alloyId3736);
    $.__views.__alloyId3737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3737"
    });
    $.__views.__alloyId3736.add($.__views.__alloyId3737);
    $.__views.__alloyId3738 = Ti.UI.createView({
        id: "__alloyId3738"
    });
    $.__views.__alloyId3738 && $.addTopLevelView($.__views.__alloyId3738);
    $.__views.__alloyId3739 = Ti.UI.createView({
        id: "__alloyId3739"
    });
    $.__views.__alloyId3738.add($.__views.__alloyId3739);
    $.__views.__alloyId3740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3740"
    });
    $.__views.__alloyId3739.add($.__views.__alloyId3740);
    $.__views.__alloyId3741 = Ti.UI.createView({
        id: "__alloyId3741"
    });
    $.__views.__alloyId3741 && $.addTopLevelView($.__views.__alloyId3741);
    $.__views.__alloyId3742 = Ti.UI.createView({
        id: "__alloyId3742"
    });
    $.__views.__alloyId3741.add($.__views.__alloyId3742);
    $.__views.__alloyId3743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3743"
    });
    $.__views.__alloyId3742.add($.__views.__alloyId3743);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;