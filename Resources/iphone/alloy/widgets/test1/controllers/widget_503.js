function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_503";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_503 = Ti.UI.createView({
        id: "widget_503"
    });
    $.__views.widget_503 && $.addTopLevelView($.__views.widget_503);
    $.__views.__alloyId11726 = Ti.UI.createView({
        id: "__alloyId11726"
    });
    $.__views.widget_503.add($.__views.__alloyId11726);
    $.__views.__alloyId11727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11727"
    });
    $.__views.__alloyId11726.add($.__views.__alloyId11727);
    $.__views.__alloyId11728 = Ti.UI.createView({
        id: "__alloyId11728"
    });
    $.__views.__alloyId11728 && $.addTopLevelView($.__views.__alloyId11728);
    $.__views.__alloyId11729 = Ti.UI.createView({
        id: "__alloyId11729"
    });
    $.__views.__alloyId11728.add($.__views.__alloyId11729);
    $.__views.__alloyId11730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11730"
    });
    $.__views.__alloyId11729.add($.__views.__alloyId11730);
    $.__views.__alloyId11731 = Ti.UI.createView({
        id: "__alloyId11731"
    });
    $.__views.__alloyId11731 && $.addTopLevelView($.__views.__alloyId11731);
    $.__views.__alloyId11732 = Ti.UI.createView({
        id: "__alloyId11732"
    });
    $.__views.__alloyId11731.add($.__views.__alloyId11732);
    $.__views.__alloyId11733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11733"
    });
    $.__views.__alloyId11732.add($.__views.__alloyId11733);
    $.__views.__alloyId11734 = Ti.UI.createView({
        id: "__alloyId11734"
    });
    $.__views.__alloyId11734 && $.addTopLevelView($.__views.__alloyId11734);
    $.__views.__alloyId11735 = Ti.UI.createView({
        id: "__alloyId11735"
    });
    $.__views.__alloyId11734.add($.__views.__alloyId11735);
    $.__views.__alloyId11736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11736"
    });
    $.__views.__alloyId11735.add($.__views.__alloyId11736);
    $.__views.__alloyId11737 = Ti.UI.createView({
        id: "__alloyId11737"
    });
    $.__views.__alloyId11737 && $.addTopLevelView($.__views.__alloyId11737);
    $.__views.__alloyId11738 = Ti.UI.createView({
        id: "__alloyId11738"
    });
    $.__views.__alloyId11737.add($.__views.__alloyId11738);
    $.__views.__alloyId11739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11739"
    });
    $.__views.__alloyId11738.add($.__views.__alloyId11739);
    $.__views.__alloyId11740 = Ti.UI.createView({
        id: "__alloyId11740"
    });
    $.__views.__alloyId11740 && $.addTopLevelView($.__views.__alloyId11740);
    $.__views.__alloyId11741 = Ti.UI.createView({
        id: "__alloyId11741"
    });
    $.__views.__alloyId11740.add($.__views.__alloyId11741);
    $.__views.__alloyId11742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11742"
    });
    $.__views.__alloyId11741.add($.__views.__alloyId11742);
    $.__views.__alloyId11743 = Ti.UI.createView({
        id: "__alloyId11743"
    });
    $.__views.__alloyId11743 && $.addTopLevelView($.__views.__alloyId11743);
    $.__views.__alloyId11744 = Ti.UI.createView({
        id: "__alloyId11744"
    });
    $.__views.__alloyId11743.add($.__views.__alloyId11744);
    $.__views.__alloyId11745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11745"
    });
    $.__views.__alloyId11744.add($.__views.__alloyId11745);
    $.__views.__alloyId11746 = Ti.UI.createView({
        id: "__alloyId11746"
    });
    $.__views.__alloyId11746 && $.addTopLevelView($.__views.__alloyId11746);
    $.__views.__alloyId11747 = Ti.UI.createView({
        id: "__alloyId11747"
    });
    $.__views.__alloyId11746.add($.__views.__alloyId11747);
    $.__views.__alloyId11748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11748"
    });
    $.__views.__alloyId11747.add($.__views.__alloyId11748);
    $.__views.__alloyId11749 = Ti.UI.createView({
        id: "__alloyId11749"
    });
    $.__views.__alloyId11749 && $.addTopLevelView($.__views.__alloyId11749);
    $.__views.__alloyId11750 = Ti.UI.createView({
        id: "__alloyId11750"
    });
    $.__views.__alloyId11749.add($.__views.__alloyId11750);
    $.__views.__alloyId11751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11751"
    });
    $.__views.__alloyId11750.add($.__views.__alloyId11751);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;