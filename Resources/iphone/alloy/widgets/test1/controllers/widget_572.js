function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_572";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_572 = Ti.UI.createView({
        id: "widget_572"
    });
    $.__views.widget_572 && $.addTopLevelView($.__views.widget_572);
    $.__views.__alloyId13702 = Ti.UI.createView({
        id: "__alloyId13702"
    });
    $.__views.widget_572.add($.__views.__alloyId13702);
    $.__views.__alloyId13703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13703"
    });
    $.__views.__alloyId13702.add($.__views.__alloyId13703);
    $.__views.__alloyId13704 = Ti.UI.createView({
        id: "__alloyId13704"
    });
    $.__views.__alloyId13704 && $.addTopLevelView($.__views.__alloyId13704);
    $.__views.__alloyId13705 = Ti.UI.createView({
        id: "__alloyId13705"
    });
    $.__views.__alloyId13704.add($.__views.__alloyId13705);
    $.__views.__alloyId13706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13706"
    });
    $.__views.__alloyId13705.add($.__views.__alloyId13706);
    $.__views.__alloyId13707 = Ti.UI.createView({
        id: "__alloyId13707"
    });
    $.__views.__alloyId13707 && $.addTopLevelView($.__views.__alloyId13707);
    $.__views.__alloyId13708 = Ti.UI.createView({
        id: "__alloyId13708"
    });
    $.__views.__alloyId13707.add($.__views.__alloyId13708);
    $.__views.__alloyId13709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13709"
    });
    $.__views.__alloyId13708.add($.__views.__alloyId13709);
    $.__views.__alloyId13710 = Ti.UI.createView({
        id: "__alloyId13710"
    });
    $.__views.__alloyId13710 && $.addTopLevelView($.__views.__alloyId13710);
    $.__views.__alloyId13711 = Ti.UI.createView({
        id: "__alloyId13711"
    });
    $.__views.__alloyId13710.add($.__views.__alloyId13711);
    $.__views.__alloyId13712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13712"
    });
    $.__views.__alloyId13711.add($.__views.__alloyId13712);
    $.__views.__alloyId13713 = Ti.UI.createView({
        id: "__alloyId13713"
    });
    $.__views.__alloyId13713 && $.addTopLevelView($.__views.__alloyId13713);
    $.__views.__alloyId13714 = Ti.UI.createView({
        id: "__alloyId13714"
    });
    $.__views.__alloyId13713.add($.__views.__alloyId13714);
    $.__views.__alloyId13715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13715"
    });
    $.__views.__alloyId13714.add($.__views.__alloyId13715);
    $.__views.__alloyId13716 = Ti.UI.createView({
        id: "__alloyId13716"
    });
    $.__views.__alloyId13716 && $.addTopLevelView($.__views.__alloyId13716);
    $.__views.__alloyId13717 = Ti.UI.createView({
        id: "__alloyId13717"
    });
    $.__views.__alloyId13716.add($.__views.__alloyId13717);
    $.__views.__alloyId13718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13718"
    });
    $.__views.__alloyId13717.add($.__views.__alloyId13718);
    $.__views.__alloyId13719 = Ti.UI.createView({
        id: "__alloyId13719"
    });
    $.__views.__alloyId13719 && $.addTopLevelView($.__views.__alloyId13719);
    $.__views.__alloyId13720 = Ti.UI.createView({
        id: "__alloyId13720"
    });
    $.__views.__alloyId13719.add($.__views.__alloyId13720);
    $.__views.__alloyId13721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13721"
    });
    $.__views.__alloyId13720.add($.__views.__alloyId13721);
    $.__views.__alloyId13722 = Ti.UI.createView({
        id: "__alloyId13722"
    });
    $.__views.__alloyId13722 && $.addTopLevelView($.__views.__alloyId13722);
    $.__views.__alloyId13723 = Ti.UI.createView({
        id: "__alloyId13723"
    });
    $.__views.__alloyId13722.add($.__views.__alloyId13723);
    $.__views.__alloyId13724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13724"
    });
    $.__views.__alloyId13723.add($.__views.__alloyId13724);
    $.__views.__alloyId13725 = Ti.UI.createView({
        id: "__alloyId13725"
    });
    $.__views.__alloyId13725 && $.addTopLevelView($.__views.__alloyId13725);
    $.__views.__alloyId13726 = Ti.UI.createView({
        id: "__alloyId13726"
    });
    $.__views.__alloyId13725.add($.__views.__alloyId13726);
    $.__views.__alloyId13727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13727"
    });
    $.__views.__alloyId13726.add($.__views.__alloyId13727);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;