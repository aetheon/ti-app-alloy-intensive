function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_607";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_607 = Ti.UI.createView({
        id: "widget_607"
    });
    $.__views.widget_607 && $.addTopLevelView($.__views.widget_607);
    $.__views.__alloyId14716 = Ti.UI.createView({
        id: "__alloyId14716"
    });
    $.__views.widget_607.add($.__views.__alloyId14716);
    $.__views.__alloyId14717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14717"
    });
    $.__views.__alloyId14716.add($.__views.__alloyId14717);
    $.__views.__alloyId14718 = Ti.UI.createView({
        id: "__alloyId14718"
    });
    $.__views.__alloyId14718 && $.addTopLevelView($.__views.__alloyId14718);
    $.__views.__alloyId14719 = Ti.UI.createView({
        id: "__alloyId14719"
    });
    $.__views.__alloyId14718.add($.__views.__alloyId14719);
    $.__views.__alloyId14720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14720"
    });
    $.__views.__alloyId14719.add($.__views.__alloyId14720);
    $.__views.__alloyId14721 = Ti.UI.createView({
        id: "__alloyId14721"
    });
    $.__views.__alloyId14721 && $.addTopLevelView($.__views.__alloyId14721);
    $.__views.__alloyId14722 = Ti.UI.createView({
        id: "__alloyId14722"
    });
    $.__views.__alloyId14721.add($.__views.__alloyId14722);
    $.__views.__alloyId14723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14723"
    });
    $.__views.__alloyId14722.add($.__views.__alloyId14723);
    $.__views.__alloyId14724 = Ti.UI.createView({
        id: "__alloyId14724"
    });
    $.__views.__alloyId14724 && $.addTopLevelView($.__views.__alloyId14724);
    $.__views.__alloyId14725 = Ti.UI.createView({
        id: "__alloyId14725"
    });
    $.__views.__alloyId14724.add($.__views.__alloyId14725);
    $.__views.__alloyId14726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14726"
    });
    $.__views.__alloyId14725.add($.__views.__alloyId14726);
    $.__views.__alloyId14727 = Ti.UI.createView({
        id: "__alloyId14727"
    });
    $.__views.__alloyId14727 && $.addTopLevelView($.__views.__alloyId14727);
    $.__views.__alloyId14728 = Ti.UI.createView({
        id: "__alloyId14728"
    });
    $.__views.__alloyId14727.add($.__views.__alloyId14728);
    $.__views.__alloyId14729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14729"
    });
    $.__views.__alloyId14728.add($.__views.__alloyId14729);
    $.__views.__alloyId14730 = Ti.UI.createView({
        id: "__alloyId14730"
    });
    $.__views.__alloyId14730 && $.addTopLevelView($.__views.__alloyId14730);
    $.__views.__alloyId14731 = Ti.UI.createView({
        id: "__alloyId14731"
    });
    $.__views.__alloyId14730.add($.__views.__alloyId14731);
    $.__views.__alloyId14732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14732"
    });
    $.__views.__alloyId14731.add($.__views.__alloyId14732);
    $.__views.__alloyId14733 = Ti.UI.createView({
        id: "__alloyId14733"
    });
    $.__views.__alloyId14733 && $.addTopLevelView($.__views.__alloyId14733);
    $.__views.__alloyId14734 = Ti.UI.createView({
        id: "__alloyId14734"
    });
    $.__views.__alloyId14733.add($.__views.__alloyId14734);
    $.__views.__alloyId14735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14735"
    });
    $.__views.__alloyId14734.add($.__views.__alloyId14735);
    $.__views.__alloyId14736 = Ti.UI.createView({
        id: "__alloyId14736"
    });
    $.__views.__alloyId14736 && $.addTopLevelView($.__views.__alloyId14736);
    $.__views.__alloyId14737 = Ti.UI.createView({
        id: "__alloyId14737"
    });
    $.__views.__alloyId14736.add($.__views.__alloyId14737);
    $.__views.__alloyId14738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14738"
    });
    $.__views.__alloyId14737.add($.__views.__alloyId14738);
    $.__views.__alloyId14739 = Ti.UI.createView({
        id: "__alloyId14739"
    });
    $.__views.__alloyId14739 && $.addTopLevelView($.__views.__alloyId14739);
    $.__views.__alloyId14740 = Ti.UI.createView({
        id: "__alloyId14740"
    });
    $.__views.__alloyId14739.add($.__views.__alloyId14740);
    $.__views.__alloyId14741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14741"
    });
    $.__views.__alloyId14740.add($.__views.__alloyId14741);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;