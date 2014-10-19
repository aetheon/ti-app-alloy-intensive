function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_677";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_677 = Ti.UI.createView({
        id: "widget_677"
    });
    $.__views.widget_677 && $.addTopLevelView($.__views.widget_677);
    $.__views.__alloyId16718 = Ti.UI.createView({
        id: "__alloyId16718"
    });
    $.__views.widget_677.add($.__views.__alloyId16718);
    $.__views.__alloyId16719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16719"
    });
    $.__views.__alloyId16718.add($.__views.__alloyId16719);
    $.__views.__alloyId16720 = Ti.UI.createView({
        id: "__alloyId16720"
    });
    $.__views.__alloyId16720 && $.addTopLevelView($.__views.__alloyId16720);
    $.__views.__alloyId16721 = Ti.UI.createView({
        id: "__alloyId16721"
    });
    $.__views.__alloyId16720.add($.__views.__alloyId16721);
    $.__views.__alloyId16722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16722"
    });
    $.__views.__alloyId16721.add($.__views.__alloyId16722);
    $.__views.__alloyId16723 = Ti.UI.createView({
        id: "__alloyId16723"
    });
    $.__views.__alloyId16723 && $.addTopLevelView($.__views.__alloyId16723);
    $.__views.__alloyId16724 = Ti.UI.createView({
        id: "__alloyId16724"
    });
    $.__views.__alloyId16723.add($.__views.__alloyId16724);
    $.__views.__alloyId16725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16725"
    });
    $.__views.__alloyId16724.add($.__views.__alloyId16725);
    $.__views.__alloyId16726 = Ti.UI.createView({
        id: "__alloyId16726"
    });
    $.__views.__alloyId16726 && $.addTopLevelView($.__views.__alloyId16726);
    $.__views.__alloyId16727 = Ti.UI.createView({
        id: "__alloyId16727"
    });
    $.__views.__alloyId16726.add($.__views.__alloyId16727);
    $.__views.__alloyId16728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16728"
    });
    $.__views.__alloyId16727.add($.__views.__alloyId16728);
    $.__views.__alloyId16729 = Ti.UI.createView({
        id: "__alloyId16729"
    });
    $.__views.__alloyId16729 && $.addTopLevelView($.__views.__alloyId16729);
    $.__views.__alloyId16730 = Ti.UI.createView({
        id: "__alloyId16730"
    });
    $.__views.__alloyId16729.add($.__views.__alloyId16730);
    $.__views.__alloyId16731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16731"
    });
    $.__views.__alloyId16730.add($.__views.__alloyId16731);
    $.__views.__alloyId16732 = Ti.UI.createView({
        id: "__alloyId16732"
    });
    $.__views.__alloyId16732 && $.addTopLevelView($.__views.__alloyId16732);
    $.__views.__alloyId16733 = Ti.UI.createView({
        id: "__alloyId16733"
    });
    $.__views.__alloyId16732.add($.__views.__alloyId16733);
    $.__views.__alloyId16734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16734"
    });
    $.__views.__alloyId16733.add($.__views.__alloyId16734);
    $.__views.__alloyId16735 = Ti.UI.createView({
        id: "__alloyId16735"
    });
    $.__views.__alloyId16735 && $.addTopLevelView($.__views.__alloyId16735);
    $.__views.__alloyId16736 = Ti.UI.createView({
        id: "__alloyId16736"
    });
    $.__views.__alloyId16735.add($.__views.__alloyId16736);
    $.__views.__alloyId16737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16737"
    });
    $.__views.__alloyId16736.add($.__views.__alloyId16737);
    $.__views.__alloyId16738 = Ti.UI.createView({
        id: "__alloyId16738"
    });
    $.__views.__alloyId16738 && $.addTopLevelView($.__views.__alloyId16738);
    $.__views.__alloyId16739 = Ti.UI.createView({
        id: "__alloyId16739"
    });
    $.__views.__alloyId16738.add($.__views.__alloyId16739);
    $.__views.__alloyId16740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16740"
    });
    $.__views.__alloyId16739.add($.__views.__alloyId16740);
    $.__views.__alloyId16741 = Ti.UI.createView({
        id: "__alloyId16741"
    });
    $.__views.__alloyId16741 && $.addTopLevelView($.__views.__alloyId16741);
    $.__views.__alloyId16742 = Ti.UI.createView({
        id: "__alloyId16742"
    });
    $.__views.__alloyId16741.add($.__views.__alloyId16742);
    $.__views.__alloyId16743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16743"
    });
    $.__views.__alloyId16742.add($.__views.__alloyId16743);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;