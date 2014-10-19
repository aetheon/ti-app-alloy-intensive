function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_85";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_85 = Ti.UI.createView({
        id: "widget_85"
    });
    $.__views.widget_85 && $.addTopLevelView($.__views.widget_85);
    $.__views.__alloyId21710 = Ti.UI.createView({
        id: "__alloyId21710"
    });
    $.__views.widget_85.add($.__views.__alloyId21710);
    $.__views.__alloyId21711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21711"
    });
    $.__views.__alloyId21710.add($.__views.__alloyId21711);
    $.__views.__alloyId21712 = Ti.UI.createView({
        id: "__alloyId21712"
    });
    $.__views.__alloyId21712 && $.addTopLevelView($.__views.__alloyId21712);
    $.__views.__alloyId21713 = Ti.UI.createView({
        id: "__alloyId21713"
    });
    $.__views.__alloyId21712.add($.__views.__alloyId21713);
    $.__views.__alloyId21714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21714"
    });
    $.__views.__alloyId21713.add($.__views.__alloyId21714);
    $.__views.__alloyId21715 = Ti.UI.createView({
        id: "__alloyId21715"
    });
    $.__views.__alloyId21715 && $.addTopLevelView($.__views.__alloyId21715);
    $.__views.__alloyId21716 = Ti.UI.createView({
        id: "__alloyId21716"
    });
    $.__views.__alloyId21715.add($.__views.__alloyId21716);
    $.__views.__alloyId21717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21717"
    });
    $.__views.__alloyId21716.add($.__views.__alloyId21717);
    $.__views.__alloyId21718 = Ti.UI.createView({
        id: "__alloyId21718"
    });
    $.__views.__alloyId21718 && $.addTopLevelView($.__views.__alloyId21718);
    $.__views.__alloyId21719 = Ti.UI.createView({
        id: "__alloyId21719"
    });
    $.__views.__alloyId21718.add($.__views.__alloyId21719);
    $.__views.__alloyId21720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21720"
    });
    $.__views.__alloyId21719.add($.__views.__alloyId21720);
    $.__views.__alloyId21721 = Ti.UI.createView({
        id: "__alloyId21721"
    });
    $.__views.__alloyId21721 && $.addTopLevelView($.__views.__alloyId21721);
    $.__views.__alloyId21722 = Ti.UI.createView({
        id: "__alloyId21722"
    });
    $.__views.__alloyId21721.add($.__views.__alloyId21722);
    $.__views.__alloyId21723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21723"
    });
    $.__views.__alloyId21722.add($.__views.__alloyId21723);
    $.__views.__alloyId21724 = Ti.UI.createView({
        id: "__alloyId21724"
    });
    $.__views.__alloyId21724 && $.addTopLevelView($.__views.__alloyId21724);
    $.__views.__alloyId21725 = Ti.UI.createView({
        id: "__alloyId21725"
    });
    $.__views.__alloyId21724.add($.__views.__alloyId21725);
    $.__views.__alloyId21726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21726"
    });
    $.__views.__alloyId21725.add($.__views.__alloyId21726);
    $.__views.__alloyId21727 = Ti.UI.createView({
        id: "__alloyId21727"
    });
    $.__views.__alloyId21727 && $.addTopLevelView($.__views.__alloyId21727);
    $.__views.__alloyId21728 = Ti.UI.createView({
        id: "__alloyId21728"
    });
    $.__views.__alloyId21727.add($.__views.__alloyId21728);
    $.__views.__alloyId21729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21729"
    });
    $.__views.__alloyId21728.add($.__views.__alloyId21729);
    $.__views.__alloyId21730 = Ti.UI.createView({
        id: "__alloyId21730"
    });
    $.__views.__alloyId21730 && $.addTopLevelView($.__views.__alloyId21730);
    $.__views.__alloyId21731 = Ti.UI.createView({
        id: "__alloyId21731"
    });
    $.__views.__alloyId21730.add($.__views.__alloyId21731);
    $.__views.__alloyId21732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21732"
    });
    $.__views.__alloyId21731.add($.__views.__alloyId21732);
    $.__views.__alloyId21733 = Ti.UI.createView({
        id: "__alloyId21733"
    });
    $.__views.__alloyId21733 && $.addTopLevelView($.__views.__alloyId21733);
    $.__views.__alloyId21734 = Ti.UI.createView({
        id: "__alloyId21734"
    });
    $.__views.__alloyId21733.add($.__views.__alloyId21734);
    $.__views.__alloyId21735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21735"
    });
    $.__views.__alloyId21734.add($.__views.__alloyId21735);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;