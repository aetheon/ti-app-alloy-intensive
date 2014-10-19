function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_885";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_885 = Ti.UI.createView({
        id: "widget_885"
    });
    $.__views.widget_885 && $.addTopLevelView($.__views.widget_885);
    $.__views.__alloyId22724 = Ti.UI.createView({
        id: "__alloyId22724"
    });
    $.__views.widget_885.add($.__views.__alloyId22724);
    $.__views.__alloyId22725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22725"
    });
    $.__views.__alloyId22724.add($.__views.__alloyId22725);
    $.__views.__alloyId22726 = Ti.UI.createView({
        id: "__alloyId22726"
    });
    $.__views.__alloyId22726 && $.addTopLevelView($.__views.__alloyId22726);
    $.__views.__alloyId22727 = Ti.UI.createView({
        id: "__alloyId22727"
    });
    $.__views.__alloyId22726.add($.__views.__alloyId22727);
    $.__views.__alloyId22728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22728"
    });
    $.__views.__alloyId22727.add($.__views.__alloyId22728);
    $.__views.__alloyId22729 = Ti.UI.createView({
        id: "__alloyId22729"
    });
    $.__views.__alloyId22729 && $.addTopLevelView($.__views.__alloyId22729);
    $.__views.__alloyId22730 = Ti.UI.createView({
        id: "__alloyId22730"
    });
    $.__views.__alloyId22729.add($.__views.__alloyId22730);
    $.__views.__alloyId22731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22731"
    });
    $.__views.__alloyId22730.add($.__views.__alloyId22731);
    $.__views.__alloyId22732 = Ti.UI.createView({
        id: "__alloyId22732"
    });
    $.__views.__alloyId22732 && $.addTopLevelView($.__views.__alloyId22732);
    $.__views.__alloyId22733 = Ti.UI.createView({
        id: "__alloyId22733"
    });
    $.__views.__alloyId22732.add($.__views.__alloyId22733);
    $.__views.__alloyId22734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22734"
    });
    $.__views.__alloyId22733.add($.__views.__alloyId22734);
    $.__views.__alloyId22735 = Ti.UI.createView({
        id: "__alloyId22735"
    });
    $.__views.__alloyId22735 && $.addTopLevelView($.__views.__alloyId22735);
    $.__views.__alloyId22736 = Ti.UI.createView({
        id: "__alloyId22736"
    });
    $.__views.__alloyId22735.add($.__views.__alloyId22736);
    $.__views.__alloyId22737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22737"
    });
    $.__views.__alloyId22736.add($.__views.__alloyId22737);
    $.__views.__alloyId22738 = Ti.UI.createView({
        id: "__alloyId22738"
    });
    $.__views.__alloyId22738 && $.addTopLevelView($.__views.__alloyId22738);
    $.__views.__alloyId22739 = Ti.UI.createView({
        id: "__alloyId22739"
    });
    $.__views.__alloyId22738.add($.__views.__alloyId22739);
    $.__views.__alloyId22740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22740"
    });
    $.__views.__alloyId22739.add($.__views.__alloyId22740);
    $.__views.__alloyId22741 = Ti.UI.createView({
        id: "__alloyId22741"
    });
    $.__views.__alloyId22741 && $.addTopLevelView($.__views.__alloyId22741);
    $.__views.__alloyId22742 = Ti.UI.createView({
        id: "__alloyId22742"
    });
    $.__views.__alloyId22741.add($.__views.__alloyId22742);
    $.__views.__alloyId22743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22743"
    });
    $.__views.__alloyId22742.add($.__views.__alloyId22743);
    $.__views.__alloyId22744 = Ti.UI.createView({
        id: "__alloyId22744"
    });
    $.__views.__alloyId22744 && $.addTopLevelView($.__views.__alloyId22744);
    $.__views.__alloyId22745 = Ti.UI.createView({
        id: "__alloyId22745"
    });
    $.__views.__alloyId22744.add($.__views.__alloyId22745);
    $.__views.__alloyId22746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22746"
    });
    $.__views.__alloyId22745.add($.__views.__alloyId22746);
    $.__views.__alloyId22747 = Ti.UI.createView({
        id: "__alloyId22747"
    });
    $.__views.__alloyId22747 && $.addTopLevelView($.__views.__alloyId22747);
    $.__views.__alloyId22748 = Ti.UI.createView({
        id: "__alloyId22748"
    });
    $.__views.__alloyId22747.add($.__views.__alloyId22748);
    $.__views.__alloyId22749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22749"
    });
    $.__views.__alloyId22748.add($.__views.__alloyId22749);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;