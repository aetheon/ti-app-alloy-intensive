function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_989";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_989 = Ti.UI.createView({
        id: "widget_989"
    });
    $.__views.widget_989 && $.addTopLevelView($.__views.widget_989);
    $.__views.__alloyId25714 = Ti.UI.createView({
        id: "__alloyId25714"
    });
    $.__views.widget_989.add($.__views.__alloyId25714);
    $.__views.__alloyId25715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25715"
    });
    $.__views.__alloyId25714.add($.__views.__alloyId25715);
    $.__views.__alloyId25716 = Ti.UI.createView({
        id: "__alloyId25716"
    });
    $.__views.__alloyId25716 && $.addTopLevelView($.__views.__alloyId25716);
    $.__views.__alloyId25717 = Ti.UI.createView({
        id: "__alloyId25717"
    });
    $.__views.__alloyId25716.add($.__views.__alloyId25717);
    $.__views.__alloyId25718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25718"
    });
    $.__views.__alloyId25717.add($.__views.__alloyId25718);
    $.__views.__alloyId25719 = Ti.UI.createView({
        id: "__alloyId25719"
    });
    $.__views.__alloyId25719 && $.addTopLevelView($.__views.__alloyId25719);
    $.__views.__alloyId25720 = Ti.UI.createView({
        id: "__alloyId25720"
    });
    $.__views.__alloyId25719.add($.__views.__alloyId25720);
    $.__views.__alloyId25721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25721"
    });
    $.__views.__alloyId25720.add($.__views.__alloyId25721);
    $.__views.__alloyId25722 = Ti.UI.createView({
        id: "__alloyId25722"
    });
    $.__views.__alloyId25722 && $.addTopLevelView($.__views.__alloyId25722);
    $.__views.__alloyId25723 = Ti.UI.createView({
        id: "__alloyId25723"
    });
    $.__views.__alloyId25722.add($.__views.__alloyId25723);
    $.__views.__alloyId25724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25724"
    });
    $.__views.__alloyId25723.add($.__views.__alloyId25724);
    $.__views.__alloyId25725 = Ti.UI.createView({
        id: "__alloyId25725"
    });
    $.__views.__alloyId25725 && $.addTopLevelView($.__views.__alloyId25725);
    $.__views.__alloyId25726 = Ti.UI.createView({
        id: "__alloyId25726"
    });
    $.__views.__alloyId25725.add($.__views.__alloyId25726);
    $.__views.__alloyId25727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25727"
    });
    $.__views.__alloyId25726.add($.__views.__alloyId25727);
    $.__views.__alloyId25728 = Ti.UI.createView({
        id: "__alloyId25728"
    });
    $.__views.__alloyId25728 && $.addTopLevelView($.__views.__alloyId25728);
    $.__views.__alloyId25729 = Ti.UI.createView({
        id: "__alloyId25729"
    });
    $.__views.__alloyId25728.add($.__views.__alloyId25729);
    $.__views.__alloyId25730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25730"
    });
    $.__views.__alloyId25729.add($.__views.__alloyId25730);
    $.__views.__alloyId25731 = Ti.UI.createView({
        id: "__alloyId25731"
    });
    $.__views.__alloyId25731 && $.addTopLevelView($.__views.__alloyId25731);
    $.__views.__alloyId25732 = Ti.UI.createView({
        id: "__alloyId25732"
    });
    $.__views.__alloyId25731.add($.__views.__alloyId25732);
    $.__views.__alloyId25733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25733"
    });
    $.__views.__alloyId25732.add($.__views.__alloyId25733);
    $.__views.__alloyId25734 = Ti.UI.createView({
        id: "__alloyId25734"
    });
    $.__views.__alloyId25734 && $.addTopLevelView($.__views.__alloyId25734);
    $.__views.__alloyId25735 = Ti.UI.createView({
        id: "__alloyId25735"
    });
    $.__views.__alloyId25734.add($.__views.__alloyId25735);
    $.__views.__alloyId25736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25736"
    });
    $.__views.__alloyId25735.add($.__views.__alloyId25736);
    $.__views.__alloyId25737 = Ti.UI.createView({
        id: "__alloyId25737"
    });
    $.__views.__alloyId25737 && $.addTopLevelView($.__views.__alloyId25737);
    $.__views.__alloyId25738 = Ti.UI.createView({
        id: "__alloyId25738"
    });
    $.__views.__alloyId25737.add($.__views.__alloyId25738);
    $.__views.__alloyId25739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25739"
    });
    $.__views.__alloyId25738.add($.__views.__alloyId25739);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;