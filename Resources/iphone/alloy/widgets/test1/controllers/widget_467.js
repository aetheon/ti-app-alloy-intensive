function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_467";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_467 = Ti.UI.createView({
        id: "widget_467"
    });
    $.__views.widget_467 && $.addTopLevelView($.__views.widget_467);
    $.__views.__alloyId10660 = Ti.UI.createView({
        id: "__alloyId10660"
    });
    $.__views.widget_467.add($.__views.__alloyId10660);
    $.__views.__alloyId10661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10661"
    });
    $.__views.__alloyId10660.add($.__views.__alloyId10661);
    $.__views.__alloyId10662 = Ti.UI.createView({
        id: "__alloyId10662"
    });
    $.__views.__alloyId10662 && $.addTopLevelView($.__views.__alloyId10662);
    $.__views.__alloyId10663 = Ti.UI.createView({
        id: "__alloyId10663"
    });
    $.__views.__alloyId10662.add($.__views.__alloyId10663);
    $.__views.__alloyId10664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10664"
    });
    $.__views.__alloyId10663.add($.__views.__alloyId10664);
    $.__views.__alloyId10665 = Ti.UI.createView({
        id: "__alloyId10665"
    });
    $.__views.__alloyId10665 && $.addTopLevelView($.__views.__alloyId10665);
    $.__views.__alloyId10666 = Ti.UI.createView({
        id: "__alloyId10666"
    });
    $.__views.__alloyId10665.add($.__views.__alloyId10666);
    $.__views.__alloyId10667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10667"
    });
    $.__views.__alloyId10666.add($.__views.__alloyId10667);
    $.__views.__alloyId10668 = Ti.UI.createView({
        id: "__alloyId10668"
    });
    $.__views.__alloyId10668 && $.addTopLevelView($.__views.__alloyId10668);
    $.__views.__alloyId10669 = Ti.UI.createView({
        id: "__alloyId10669"
    });
    $.__views.__alloyId10668.add($.__views.__alloyId10669);
    $.__views.__alloyId10670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10670"
    });
    $.__views.__alloyId10669.add($.__views.__alloyId10670);
    $.__views.__alloyId10671 = Ti.UI.createView({
        id: "__alloyId10671"
    });
    $.__views.__alloyId10671 && $.addTopLevelView($.__views.__alloyId10671);
    $.__views.__alloyId10672 = Ti.UI.createView({
        id: "__alloyId10672"
    });
    $.__views.__alloyId10671.add($.__views.__alloyId10672);
    $.__views.__alloyId10673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10673"
    });
    $.__views.__alloyId10672.add($.__views.__alloyId10673);
    $.__views.__alloyId10674 = Ti.UI.createView({
        id: "__alloyId10674"
    });
    $.__views.__alloyId10674 && $.addTopLevelView($.__views.__alloyId10674);
    $.__views.__alloyId10675 = Ti.UI.createView({
        id: "__alloyId10675"
    });
    $.__views.__alloyId10674.add($.__views.__alloyId10675);
    $.__views.__alloyId10676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10676"
    });
    $.__views.__alloyId10675.add($.__views.__alloyId10676);
    $.__views.__alloyId10677 = Ti.UI.createView({
        id: "__alloyId10677"
    });
    $.__views.__alloyId10677 && $.addTopLevelView($.__views.__alloyId10677);
    $.__views.__alloyId10678 = Ti.UI.createView({
        id: "__alloyId10678"
    });
    $.__views.__alloyId10677.add($.__views.__alloyId10678);
    $.__views.__alloyId10679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10679"
    });
    $.__views.__alloyId10678.add($.__views.__alloyId10679);
    $.__views.__alloyId10680 = Ti.UI.createView({
        id: "__alloyId10680"
    });
    $.__views.__alloyId10680 && $.addTopLevelView($.__views.__alloyId10680);
    $.__views.__alloyId10681 = Ti.UI.createView({
        id: "__alloyId10681"
    });
    $.__views.__alloyId10680.add($.__views.__alloyId10681);
    $.__views.__alloyId10682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10682"
    });
    $.__views.__alloyId10681.add($.__views.__alloyId10682);
    $.__views.__alloyId10683 = Ti.UI.createView({
        id: "__alloyId10683"
    });
    $.__views.__alloyId10683 && $.addTopLevelView($.__views.__alloyId10683);
    $.__views.__alloyId10684 = Ti.UI.createView({
        id: "__alloyId10684"
    });
    $.__views.__alloyId10683.add($.__views.__alloyId10684);
    $.__views.__alloyId10685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10685"
    });
    $.__views.__alloyId10684.add($.__views.__alloyId10685);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;