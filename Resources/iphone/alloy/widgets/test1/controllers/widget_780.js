function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_780";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_780 = Ti.UI.createView({
        id: "widget_780"
    });
    $.__views.widget_780 && $.addTopLevelView($.__views.widget_780);
    $.__views.__alloyId19708 = Ti.UI.createView({
        id: "__alloyId19708"
    });
    $.__views.widget_780.add($.__views.__alloyId19708);
    $.__views.__alloyId19709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19709"
    });
    $.__views.__alloyId19708.add($.__views.__alloyId19709);
    $.__views.__alloyId19710 = Ti.UI.createView({
        id: "__alloyId19710"
    });
    $.__views.__alloyId19710 && $.addTopLevelView($.__views.__alloyId19710);
    $.__views.__alloyId19711 = Ti.UI.createView({
        id: "__alloyId19711"
    });
    $.__views.__alloyId19710.add($.__views.__alloyId19711);
    $.__views.__alloyId19712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19712"
    });
    $.__views.__alloyId19711.add($.__views.__alloyId19712);
    $.__views.__alloyId19713 = Ti.UI.createView({
        id: "__alloyId19713"
    });
    $.__views.__alloyId19713 && $.addTopLevelView($.__views.__alloyId19713);
    $.__views.__alloyId19714 = Ti.UI.createView({
        id: "__alloyId19714"
    });
    $.__views.__alloyId19713.add($.__views.__alloyId19714);
    $.__views.__alloyId19715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19715"
    });
    $.__views.__alloyId19714.add($.__views.__alloyId19715);
    $.__views.__alloyId19716 = Ti.UI.createView({
        id: "__alloyId19716"
    });
    $.__views.__alloyId19716 && $.addTopLevelView($.__views.__alloyId19716);
    $.__views.__alloyId19717 = Ti.UI.createView({
        id: "__alloyId19717"
    });
    $.__views.__alloyId19716.add($.__views.__alloyId19717);
    $.__views.__alloyId19718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19718"
    });
    $.__views.__alloyId19717.add($.__views.__alloyId19718);
    $.__views.__alloyId19719 = Ti.UI.createView({
        id: "__alloyId19719"
    });
    $.__views.__alloyId19719 && $.addTopLevelView($.__views.__alloyId19719);
    $.__views.__alloyId19720 = Ti.UI.createView({
        id: "__alloyId19720"
    });
    $.__views.__alloyId19719.add($.__views.__alloyId19720);
    $.__views.__alloyId19721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19721"
    });
    $.__views.__alloyId19720.add($.__views.__alloyId19721);
    $.__views.__alloyId19722 = Ti.UI.createView({
        id: "__alloyId19722"
    });
    $.__views.__alloyId19722 && $.addTopLevelView($.__views.__alloyId19722);
    $.__views.__alloyId19723 = Ti.UI.createView({
        id: "__alloyId19723"
    });
    $.__views.__alloyId19722.add($.__views.__alloyId19723);
    $.__views.__alloyId19724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19724"
    });
    $.__views.__alloyId19723.add($.__views.__alloyId19724);
    $.__views.__alloyId19725 = Ti.UI.createView({
        id: "__alloyId19725"
    });
    $.__views.__alloyId19725 && $.addTopLevelView($.__views.__alloyId19725);
    $.__views.__alloyId19726 = Ti.UI.createView({
        id: "__alloyId19726"
    });
    $.__views.__alloyId19725.add($.__views.__alloyId19726);
    $.__views.__alloyId19727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19727"
    });
    $.__views.__alloyId19726.add($.__views.__alloyId19727);
    $.__views.__alloyId19728 = Ti.UI.createView({
        id: "__alloyId19728"
    });
    $.__views.__alloyId19728 && $.addTopLevelView($.__views.__alloyId19728);
    $.__views.__alloyId19729 = Ti.UI.createView({
        id: "__alloyId19729"
    });
    $.__views.__alloyId19728.add($.__views.__alloyId19729);
    $.__views.__alloyId19730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19730"
    });
    $.__views.__alloyId19729.add($.__views.__alloyId19730);
    $.__views.__alloyId19731 = Ti.UI.createView({
        id: "__alloyId19731"
    });
    $.__views.__alloyId19731 && $.addTopLevelView($.__views.__alloyId19731);
    $.__views.__alloyId19732 = Ti.UI.createView({
        id: "__alloyId19732"
    });
    $.__views.__alloyId19731.add($.__views.__alloyId19732);
    $.__views.__alloyId19733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19733"
    });
    $.__views.__alloyId19732.add($.__views.__alloyId19733);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;