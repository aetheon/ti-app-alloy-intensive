function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_746";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_746 = Ti.UI.createView({
        id: "widget_746"
    });
    $.__views.widget_746 && $.addTopLevelView($.__views.widget_746);
    $.__views.__alloyId18720 = Ti.UI.createView({
        id: "__alloyId18720"
    });
    $.__views.widget_746.add($.__views.__alloyId18720);
    $.__views.__alloyId18721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18721"
    });
    $.__views.__alloyId18720.add($.__views.__alloyId18721);
    $.__views.__alloyId18722 = Ti.UI.createView({
        id: "__alloyId18722"
    });
    $.__views.__alloyId18722 && $.addTopLevelView($.__views.__alloyId18722);
    $.__views.__alloyId18723 = Ti.UI.createView({
        id: "__alloyId18723"
    });
    $.__views.__alloyId18722.add($.__views.__alloyId18723);
    $.__views.__alloyId18724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18724"
    });
    $.__views.__alloyId18723.add($.__views.__alloyId18724);
    $.__views.__alloyId18725 = Ti.UI.createView({
        id: "__alloyId18725"
    });
    $.__views.__alloyId18725 && $.addTopLevelView($.__views.__alloyId18725);
    $.__views.__alloyId18726 = Ti.UI.createView({
        id: "__alloyId18726"
    });
    $.__views.__alloyId18725.add($.__views.__alloyId18726);
    $.__views.__alloyId18727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18727"
    });
    $.__views.__alloyId18726.add($.__views.__alloyId18727);
    $.__views.__alloyId18728 = Ti.UI.createView({
        id: "__alloyId18728"
    });
    $.__views.__alloyId18728 && $.addTopLevelView($.__views.__alloyId18728);
    $.__views.__alloyId18729 = Ti.UI.createView({
        id: "__alloyId18729"
    });
    $.__views.__alloyId18728.add($.__views.__alloyId18729);
    $.__views.__alloyId18730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18730"
    });
    $.__views.__alloyId18729.add($.__views.__alloyId18730);
    $.__views.__alloyId18731 = Ti.UI.createView({
        id: "__alloyId18731"
    });
    $.__views.__alloyId18731 && $.addTopLevelView($.__views.__alloyId18731);
    $.__views.__alloyId18732 = Ti.UI.createView({
        id: "__alloyId18732"
    });
    $.__views.__alloyId18731.add($.__views.__alloyId18732);
    $.__views.__alloyId18733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18733"
    });
    $.__views.__alloyId18732.add($.__views.__alloyId18733);
    $.__views.__alloyId18734 = Ti.UI.createView({
        id: "__alloyId18734"
    });
    $.__views.__alloyId18734 && $.addTopLevelView($.__views.__alloyId18734);
    $.__views.__alloyId18735 = Ti.UI.createView({
        id: "__alloyId18735"
    });
    $.__views.__alloyId18734.add($.__views.__alloyId18735);
    $.__views.__alloyId18736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18736"
    });
    $.__views.__alloyId18735.add($.__views.__alloyId18736);
    $.__views.__alloyId18737 = Ti.UI.createView({
        id: "__alloyId18737"
    });
    $.__views.__alloyId18737 && $.addTopLevelView($.__views.__alloyId18737);
    $.__views.__alloyId18738 = Ti.UI.createView({
        id: "__alloyId18738"
    });
    $.__views.__alloyId18737.add($.__views.__alloyId18738);
    $.__views.__alloyId18739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18739"
    });
    $.__views.__alloyId18738.add($.__views.__alloyId18739);
    $.__views.__alloyId18740 = Ti.UI.createView({
        id: "__alloyId18740"
    });
    $.__views.__alloyId18740 && $.addTopLevelView($.__views.__alloyId18740);
    $.__views.__alloyId18741 = Ti.UI.createView({
        id: "__alloyId18741"
    });
    $.__views.__alloyId18740.add($.__views.__alloyId18741);
    $.__views.__alloyId18742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18742"
    });
    $.__views.__alloyId18741.add($.__views.__alloyId18742);
    $.__views.__alloyId18743 = Ti.UI.createView({
        id: "__alloyId18743"
    });
    $.__views.__alloyId18743 && $.addTopLevelView($.__views.__alloyId18743);
    $.__views.__alloyId18744 = Ti.UI.createView({
        id: "__alloyId18744"
    });
    $.__views.__alloyId18743.add($.__views.__alloyId18744);
    $.__views.__alloyId18745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18745"
    });
    $.__views.__alloyId18744.add($.__views.__alloyId18745);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;