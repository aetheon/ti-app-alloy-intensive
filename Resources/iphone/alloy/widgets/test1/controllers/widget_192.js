function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_192";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_192 = Ti.UI.createView({
        id: "widget_192"
    });
    $.__views.widget_192 && $.addTopLevelView($.__views.widget_192);
    $.__views.__alloyId2730 = Ti.UI.createView({
        id: "__alloyId2730"
    });
    $.__views.widget_192.add($.__views.__alloyId2730);
    $.__views.__alloyId2731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2731"
    });
    $.__views.__alloyId2730.add($.__views.__alloyId2731);
    $.__views.__alloyId2732 = Ti.UI.createView({
        id: "__alloyId2732"
    });
    $.__views.__alloyId2732 && $.addTopLevelView($.__views.__alloyId2732);
    $.__views.__alloyId2733 = Ti.UI.createView({
        id: "__alloyId2733"
    });
    $.__views.__alloyId2732.add($.__views.__alloyId2733);
    $.__views.__alloyId2734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2734"
    });
    $.__views.__alloyId2733.add($.__views.__alloyId2734);
    $.__views.__alloyId2735 = Ti.UI.createView({
        id: "__alloyId2735"
    });
    $.__views.__alloyId2735 && $.addTopLevelView($.__views.__alloyId2735);
    $.__views.__alloyId2736 = Ti.UI.createView({
        id: "__alloyId2736"
    });
    $.__views.__alloyId2735.add($.__views.__alloyId2736);
    $.__views.__alloyId2737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2737"
    });
    $.__views.__alloyId2736.add($.__views.__alloyId2737);
    $.__views.__alloyId2738 = Ti.UI.createView({
        id: "__alloyId2738"
    });
    $.__views.__alloyId2738 && $.addTopLevelView($.__views.__alloyId2738);
    $.__views.__alloyId2739 = Ti.UI.createView({
        id: "__alloyId2739"
    });
    $.__views.__alloyId2738.add($.__views.__alloyId2739);
    $.__views.__alloyId2740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2740"
    });
    $.__views.__alloyId2739.add($.__views.__alloyId2740);
    $.__views.__alloyId2741 = Ti.UI.createView({
        id: "__alloyId2741"
    });
    $.__views.__alloyId2741 && $.addTopLevelView($.__views.__alloyId2741);
    $.__views.__alloyId2742 = Ti.UI.createView({
        id: "__alloyId2742"
    });
    $.__views.__alloyId2741.add($.__views.__alloyId2742);
    $.__views.__alloyId2743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2743"
    });
    $.__views.__alloyId2742.add($.__views.__alloyId2743);
    $.__views.__alloyId2744 = Ti.UI.createView({
        id: "__alloyId2744"
    });
    $.__views.__alloyId2744 && $.addTopLevelView($.__views.__alloyId2744);
    $.__views.__alloyId2745 = Ti.UI.createView({
        id: "__alloyId2745"
    });
    $.__views.__alloyId2744.add($.__views.__alloyId2745);
    $.__views.__alloyId2746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2746"
    });
    $.__views.__alloyId2745.add($.__views.__alloyId2746);
    $.__views.__alloyId2747 = Ti.UI.createView({
        id: "__alloyId2747"
    });
    $.__views.__alloyId2747 && $.addTopLevelView($.__views.__alloyId2747);
    $.__views.__alloyId2748 = Ti.UI.createView({
        id: "__alloyId2748"
    });
    $.__views.__alloyId2747.add($.__views.__alloyId2748);
    $.__views.__alloyId2749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2749"
    });
    $.__views.__alloyId2748.add($.__views.__alloyId2749);
    $.__views.__alloyId2750 = Ti.UI.createView({
        id: "__alloyId2750"
    });
    $.__views.__alloyId2750 && $.addTopLevelView($.__views.__alloyId2750);
    $.__views.__alloyId2751 = Ti.UI.createView({
        id: "__alloyId2751"
    });
    $.__views.__alloyId2750.add($.__views.__alloyId2751);
    $.__views.__alloyId2752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2752"
    });
    $.__views.__alloyId2751.add($.__views.__alloyId2752);
    $.__views.__alloyId2753 = Ti.UI.createView({
        id: "__alloyId2753"
    });
    $.__views.__alloyId2753 && $.addTopLevelView($.__views.__alloyId2753);
    $.__views.__alloyId2754 = Ti.UI.createView({
        id: "__alloyId2754"
    });
    $.__views.__alloyId2753.add($.__views.__alloyId2754);
    $.__views.__alloyId2755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2755"
    });
    $.__views.__alloyId2754.add($.__views.__alloyId2755);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;