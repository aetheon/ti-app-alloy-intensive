function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_954";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_954 = Ti.UI.createView({
        id: "widget_954"
    });
    $.__views.widget_954 && $.addTopLevelView($.__views.widget_954);
    $.__views.__alloyId24726 = Ti.UI.createView({
        id: "__alloyId24726"
    });
    $.__views.widget_954.add($.__views.__alloyId24726);
    $.__views.__alloyId24727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24727"
    });
    $.__views.__alloyId24726.add($.__views.__alloyId24727);
    $.__views.__alloyId24728 = Ti.UI.createView({
        id: "__alloyId24728"
    });
    $.__views.__alloyId24728 && $.addTopLevelView($.__views.__alloyId24728);
    $.__views.__alloyId24729 = Ti.UI.createView({
        id: "__alloyId24729"
    });
    $.__views.__alloyId24728.add($.__views.__alloyId24729);
    $.__views.__alloyId24730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24730"
    });
    $.__views.__alloyId24729.add($.__views.__alloyId24730);
    $.__views.__alloyId24731 = Ti.UI.createView({
        id: "__alloyId24731"
    });
    $.__views.__alloyId24731 && $.addTopLevelView($.__views.__alloyId24731);
    $.__views.__alloyId24732 = Ti.UI.createView({
        id: "__alloyId24732"
    });
    $.__views.__alloyId24731.add($.__views.__alloyId24732);
    $.__views.__alloyId24733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24733"
    });
    $.__views.__alloyId24732.add($.__views.__alloyId24733);
    $.__views.__alloyId24734 = Ti.UI.createView({
        id: "__alloyId24734"
    });
    $.__views.__alloyId24734 && $.addTopLevelView($.__views.__alloyId24734);
    $.__views.__alloyId24735 = Ti.UI.createView({
        id: "__alloyId24735"
    });
    $.__views.__alloyId24734.add($.__views.__alloyId24735);
    $.__views.__alloyId24736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24736"
    });
    $.__views.__alloyId24735.add($.__views.__alloyId24736);
    $.__views.__alloyId24737 = Ti.UI.createView({
        id: "__alloyId24737"
    });
    $.__views.__alloyId24737 && $.addTopLevelView($.__views.__alloyId24737);
    $.__views.__alloyId24738 = Ti.UI.createView({
        id: "__alloyId24738"
    });
    $.__views.__alloyId24737.add($.__views.__alloyId24738);
    $.__views.__alloyId24739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24739"
    });
    $.__views.__alloyId24738.add($.__views.__alloyId24739);
    $.__views.__alloyId24740 = Ti.UI.createView({
        id: "__alloyId24740"
    });
    $.__views.__alloyId24740 && $.addTopLevelView($.__views.__alloyId24740);
    $.__views.__alloyId24741 = Ti.UI.createView({
        id: "__alloyId24741"
    });
    $.__views.__alloyId24740.add($.__views.__alloyId24741);
    $.__views.__alloyId24742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24742"
    });
    $.__views.__alloyId24741.add($.__views.__alloyId24742);
    $.__views.__alloyId24743 = Ti.UI.createView({
        id: "__alloyId24743"
    });
    $.__views.__alloyId24743 && $.addTopLevelView($.__views.__alloyId24743);
    $.__views.__alloyId24744 = Ti.UI.createView({
        id: "__alloyId24744"
    });
    $.__views.__alloyId24743.add($.__views.__alloyId24744);
    $.__views.__alloyId24745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24745"
    });
    $.__views.__alloyId24744.add($.__views.__alloyId24745);
    $.__views.__alloyId24746 = Ti.UI.createView({
        id: "__alloyId24746"
    });
    $.__views.__alloyId24746 && $.addTopLevelView($.__views.__alloyId24746);
    $.__views.__alloyId24747 = Ti.UI.createView({
        id: "__alloyId24747"
    });
    $.__views.__alloyId24746.add($.__views.__alloyId24747);
    $.__views.__alloyId24748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24748"
    });
    $.__views.__alloyId24747.add($.__views.__alloyId24748);
    $.__views.__alloyId24749 = Ti.UI.createView({
        id: "__alloyId24749"
    });
    $.__views.__alloyId24749 && $.addTopLevelView($.__views.__alloyId24749);
    $.__views.__alloyId24750 = Ti.UI.createView({
        id: "__alloyId24750"
    });
    $.__views.__alloyId24749.add($.__views.__alloyId24750);
    $.__views.__alloyId24751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24751"
    });
    $.__views.__alloyId24750.add($.__views.__alloyId24751);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;