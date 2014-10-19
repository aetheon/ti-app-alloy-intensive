function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_815";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_815 = Ti.UI.createView({
        id: "widget_815"
    });
    $.__views.widget_815 && $.addTopLevelView($.__views.widget_815);
    $.__views.__alloyId20722 = Ti.UI.createView({
        id: "__alloyId20722"
    });
    $.__views.widget_815.add($.__views.__alloyId20722);
    $.__views.__alloyId20723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20723"
    });
    $.__views.__alloyId20722.add($.__views.__alloyId20723);
    $.__views.__alloyId20724 = Ti.UI.createView({
        id: "__alloyId20724"
    });
    $.__views.__alloyId20724 && $.addTopLevelView($.__views.__alloyId20724);
    $.__views.__alloyId20725 = Ti.UI.createView({
        id: "__alloyId20725"
    });
    $.__views.__alloyId20724.add($.__views.__alloyId20725);
    $.__views.__alloyId20726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20726"
    });
    $.__views.__alloyId20725.add($.__views.__alloyId20726);
    $.__views.__alloyId20727 = Ti.UI.createView({
        id: "__alloyId20727"
    });
    $.__views.__alloyId20727 && $.addTopLevelView($.__views.__alloyId20727);
    $.__views.__alloyId20728 = Ti.UI.createView({
        id: "__alloyId20728"
    });
    $.__views.__alloyId20727.add($.__views.__alloyId20728);
    $.__views.__alloyId20729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20729"
    });
    $.__views.__alloyId20728.add($.__views.__alloyId20729);
    $.__views.__alloyId20730 = Ti.UI.createView({
        id: "__alloyId20730"
    });
    $.__views.__alloyId20730 && $.addTopLevelView($.__views.__alloyId20730);
    $.__views.__alloyId20731 = Ti.UI.createView({
        id: "__alloyId20731"
    });
    $.__views.__alloyId20730.add($.__views.__alloyId20731);
    $.__views.__alloyId20732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20732"
    });
    $.__views.__alloyId20731.add($.__views.__alloyId20732);
    $.__views.__alloyId20733 = Ti.UI.createView({
        id: "__alloyId20733"
    });
    $.__views.__alloyId20733 && $.addTopLevelView($.__views.__alloyId20733);
    $.__views.__alloyId20734 = Ti.UI.createView({
        id: "__alloyId20734"
    });
    $.__views.__alloyId20733.add($.__views.__alloyId20734);
    $.__views.__alloyId20735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20735"
    });
    $.__views.__alloyId20734.add($.__views.__alloyId20735);
    $.__views.__alloyId20736 = Ti.UI.createView({
        id: "__alloyId20736"
    });
    $.__views.__alloyId20736 && $.addTopLevelView($.__views.__alloyId20736);
    $.__views.__alloyId20737 = Ti.UI.createView({
        id: "__alloyId20737"
    });
    $.__views.__alloyId20736.add($.__views.__alloyId20737);
    $.__views.__alloyId20738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20738"
    });
    $.__views.__alloyId20737.add($.__views.__alloyId20738);
    $.__views.__alloyId20739 = Ti.UI.createView({
        id: "__alloyId20739"
    });
    $.__views.__alloyId20739 && $.addTopLevelView($.__views.__alloyId20739);
    $.__views.__alloyId20740 = Ti.UI.createView({
        id: "__alloyId20740"
    });
    $.__views.__alloyId20739.add($.__views.__alloyId20740);
    $.__views.__alloyId20741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20741"
    });
    $.__views.__alloyId20740.add($.__views.__alloyId20741);
    $.__views.__alloyId20742 = Ti.UI.createView({
        id: "__alloyId20742"
    });
    $.__views.__alloyId20742 && $.addTopLevelView($.__views.__alloyId20742);
    $.__views.__alloyId20743 = Ti.UI.createView({
        id: "__alloyId20743"
    });
    $.__views.__alloyId20742.add($.__views.__alloyId20743);
    $.__views.__alloyId20744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20744"
    });
    $.__views.__alloyId20743.add($.__views.__alloyId20744);
    $.__views.__alloyId20745 = Ti.UI.createView({
        id: "__alloyId20745"
    });
    $.__views.__alloyId20745 && $.addTopLevelView($.__views.__alloyId20745);
    $.__views.__alloyId20746 = Ti.UI.createView({
        id: "__alloyId20746"
    });
    $.__views.__alloyId20745.add($.__views.__alloyId20746);
    $.__views.__alloyId20747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20747"
    });
    $.__views.__alloyId20746.add($.__views.__alloyId20747);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;