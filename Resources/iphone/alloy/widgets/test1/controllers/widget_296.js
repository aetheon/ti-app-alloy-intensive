function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_296";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_296 = Ti.UI.createView({
        id: "widget_296"
    });
    $.__views.widget_296 && $.addTopLevelView($.__views.widget_296);
    $.__views.__alloyId5720 = Ti.UI.createView({
        id: "__alloyId5720"
    });
    $.__views.widget_296.add($.__views.__alloyId5720);
    $.__views.__alloyId5721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5721"
    });
    $.__views.__alloyId5720.add($.__views.__alloyId5721);
    $.__views.__alloyId5722 = Ti.UI.createView({
        id: "__alloyId5722"
    });
    $.__views.__alloyId5722 && $.addTopLevelView($.__views.__alloyId5722);
    $.__views.__alloyId5723 = Ti.UI.createView({
        id: "__alloyId5723"
    });
    $.__views.__alloyId5722.add($.__views.__alloyId5723);
    $.__views.__alloyId5724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5724"
    });
    $.__views.__alloyId5723.add($.__views.__alloyId5724);
    $.__views.__alloyId5725 = Ti.UI.createView({
        id: "__alloyId5725"
    });
    $.__views.__alloyId5725 && $.addTopLevelView($.__views.__alloyId5725);
    $.__views.__alloyId5726 = Ti.UI.createView({
        id: "__alloyId5726"
    });
    $.__views.__alloyId5725.add($.__views.__alloyId5726);
    $.__views.__alloyId5727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5727"
    });
    $.__views.__alloyId5726.add($.__views.__alloyId5727);
    $.__views.__alloyId5728 = Ti.UI.createView({
        id: "__alloyId5728"
    });
    $.__views.__alloyId5728 && $.addTopLevelView($.__views.__alloyId5728);
    $.__views.__alloyId5729 = Ti.UI.createView({
        id: "__alloyId5729"
    });
    $.__views.__alloyId5728.add($.__views.__alloyId5729);
    $.__views.__alloyId5730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5730"
    });
    $.__views.__alloyId5729.add($.__views.__alloyId5730);
    $.__views.__alloyId5731 = Ti.UI.createView({
        id: "__alloyId5731"
    });
    $.__views.__alloyId5731 && $.addTopLevelView($.__views.__alloyId5731);
    $.__views.__alloyId5732 = Ti.UI.createView({
        id: "__alloyId5732"
    });
    $.__views.__alloyId5731.add($.__views.__alloyId5732);
    $.__views.__alloyId5733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5733"
    });
    $.__views.__alloyId5732.add($.__views.__alloyId5733);
    $.__views.__alloyId5734 = Ti.UI.createView({
        id: "__alloyId5734"
    });
    $.__views.__alloyId5734 && $.addTopLevelView($.__views.__alloyId5734);
    $.__views.__alloyId5735 = Ti.UI.createView({
        id: "__alloyId5735"
    });
    $.__views.__alloyId5734.add($.__views.__alloyId5735);
    $.__views.__alloyId5736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5736"
    });
    $.__views.__alloyId5735.add($.__views.__alloyId5736);
    $.__views.__alloyId5737 = Ti.UI.createView({
        id: "__alloyId5737"
    });
    $.__views.__alloyId5737 && $.addTopLevelView($.__views.__alloyId5737);
    $.__views.__alloyId5738 = Ti.UI.createView({
        id: "__alloyId5738"
    });
    $.__views.__alloyId5737.add($.__views.__alloyId5738);
    $.__views.__alloyId5739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5739"
    });
    $.__views.__alloyId5738.add($.__views.__alloyId5739);
    $.__views.__alloyId5740 = Ti.UI.createView({
        id: "__alloyId5740"
    });
    $.__views.__alloyId5740 && $.addTopLevelView($.__views.__alloyId5740);
    $.__views.__alloyId5741 = Ti.UI.createView({
        id: "__alloyId5741"
    });
    $.__views.__alloyId5740.add($.__views.__alloyId5741);
    $.__views.__alloyId5742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5742"
    });
    $.__views.__alloyId5741.add($.__views.__alloyId5742);
    $.__views.__alloyId5743 = Ti.UI.createView({
        id: "__alloyId5743"
    });
    $.__views.__alloyId5743 && $.addTopLevelView($.__views.__alloyId5743);
    $.__views.__alloyId5744 = Ti.UI.createView({
        id: "__alloyId5744"
    });
    $.__views.__alloyId5743.add($.__views.__alloyId5744);
    $.__views.__alloyId5745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5745"
    });
    $.__views.__alloyId5744.add($.__views.__alloyId5745);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;