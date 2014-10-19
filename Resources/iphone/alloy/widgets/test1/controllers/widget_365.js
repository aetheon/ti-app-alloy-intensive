function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_365";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_365 = Ti.UI.createView({
        id: "widget_365"
    });
    $.__views.widget_365 && $.addTopLevelView($.__views.widget_365);
    $.__views.__alloyId7722 = Ti.UI.createView({
        id: "__alloyId7722"
    });
    $.__views.widget_365.add($.__views.__alloyId7722);
    $.__views.__alloyId7723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7723"
    });
    $.__views.__alloyId7722.add($.__views.__alloyId7723);
    $.__views.__alloyId7724 = Ti.UI.createView({
        id: "__alloyId7724"
    });
    $.__views.__alloyId7724 && $.addTopLevelView($.__views.__alloyId7724);
    $.__views.__alloyId7725 = Ti.UI.createView({
        id: "__alloyId7725"
    });
    $.__views.__alloyId7724.add($.__views.__alloyId7725);
    $.__views.__alloyId7726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7726"
    });
    $.__views.__alloyId7725.add($.__views.__alloyId7726);
    $.__views.__alloyId7727 = Ti.UI.createView({
        id: "__alloyId7727"
    });
    $.__views.__alloyId7727 && $.addTopLevelView($.__views.__alloyId7727);
    $.__views.__alloyId7728 = Ti.UI.createView({
        id: "__alloyId7728"
    });
    $.__views.__alloyId7727.add($.__views.__alloyId7728);
    $.__views.__alloyId7729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7729"
    });
    $.__views.__alloyId7728.add($.__views.__alloyId7729);
    $.__views.__alloyId7730 = Ti.UI.createView({
        id: "__alloyId7730"
    });
    $.__views.__alloyId7730 && $.addTopLevelView($.__views.__alloyId7730);
    $.__views.__alloyId7731 = Ti.UI.createView({
        id: "__alloyId7731"
    });
    $.__views.__alloyId7730.add($.__views.__alloyId7731);
    $.__views.__alloyId7732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7732"
    });
    $.__views.__alloyId7731.add($.__views.__alloyId7732);
    $.__views.__alloyId7733 = Ti.UI.createView({
        id: "__alloyId7733"
    });
    $.__views.__alloyId7733 && $.addTopLevelView($.__views.__alloyId7733);
    $.__views.__alloyId7734 = Ti.UI.createView({
        id: "__alloyId7734"
    });
    $.__views.__alloyId7733.add($.__views.__alloyId7734);
    $.__views.__alloyId7735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7735"
    });
    $.__views.__alloyId7734.add($.__views.__alloyId7735);
    $.__views.__alloyId7736 = Ti.UI.createView({
        id: "__alloyId7736"
    });
    $.__views.__alloyId7736 && $.addTopLevelView($.__views.__alloyId7736);
    $.__views.__alloyId7737 = Ti.UI.createView({
        id: "__alloyId7737"
    });
    $.__views.__alloyId7736.add($.__views.__alloyId7737);
    $.__views.__alloyId7738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7738"
    });
    $.__views.__alloyId7737.add($.__views.__alloyId7738);
    $.__views.__alloyId7739 = Ti.UI.createView({
        id: "__alloyId7739"
    });
    $.__views.__alloyId7739 && $.addTopLevelView($.__views.__alloyId7739);
    $.__views.__alloyId7740 = Ti.UI.createView({
        id: "__alloyId7740"
    });
    $.__views.__alloyId7739.add($.__views.__alloyId7740);
    $.__views.__alloyId7741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7741"
    });
    $.__views.__alloyId7740.add($.__views.__alloyId7741);
    $.__views.__alloyId7742 = Ti.UI.createView({
        id: "__alloyId7742"
    });
    $.__views.__alloyId7742 && $.addTopLevelView($.__views.__alloyId7742);
    $.__views.__alloyId7743 = Ti.UI.createView({
        id: "__alloyId7743"
    });
    $.__views.__alloyId7742.add($.__views.__alloyId7743);
    $.__views.__alloyId7744 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7744"
    });
    $.__views.__alloyId7743.add($.__views.__alloyId7744);
    $.__views.__alloyId7745 = Ti.UI.createView({
        id: "__alloyId7745"
    });
    $.__views.__alloyId7745 && $.addTopLevelView($.__views.__alloyId7745);
    $.__views.__alloyId7746 = Ti.UI.createView({
        id: "__alloyId7746"
    });
    $.__views.__alloyId7745.add($.__views.__alloyId7746);
    $.__views.__alloyId7747 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7747"
    });
    $.__views.__alloyId7746.add($.__views.__alloyId7747);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;