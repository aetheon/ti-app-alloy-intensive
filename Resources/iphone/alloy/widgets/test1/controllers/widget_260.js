function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_260";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_260 = Ti.UI.createView({
        id: "widget_260"
    });
    $.__views.widget_260 && $.addTopLevelView($.__views.widget_260);
    $.__views.__alloyId4706 = Ti.UI.createView({
        id: "__alloyId4706"
    });
    $.__views.widget_260.add($.__views.__alloyId4706);
    $.__views.__alloyId4707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4707"
    });
    $.__views.__alloyId4706.add($.__views.__alloyId4707);
    $.__views.__alloyId4708 = Ti.UI.createView({
        id: "__alloyId4708"
    });
    $.__views.__alloyId4708 && $.addTopLevelView($.__views.__alloyId4708);
    $.__views.__alloyId4709 = Ti.UI.createView({
        id: "__alloyId4709"
    });
    $.__views.__alloyId4708.add($.__views.__alloyId4709);
    $.__views.__alloyId4710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4710"
    });
    $.__views.__alloyId4709.add($.__views.__alloyId4710);
    $.__views.__alloyId4711 = Ti.UI.createView({
        id: "__alloyId4711"
    });
    $.__views.__alloyId4711 && $.addTopLevelView($.__views.__alloyId4711);
    $.__views.__alloyId4712 = Ti.UI.createView({
        id: "__alloyId4712"
    });
    $.__views.__alloyId4711.add($.__views.__alloyId4712);
    $.__views.__alloyId4713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4713"
    });
    $.__views.__alloyId4712.add($.__views.__alloyId4713);
    $.__views.__alloyId4714 = Ti.UI.createView({
        id: "__alloyId4714"
    });
    $.__views.__alloyId4714 && $.addTopLevelView($.__views.__alloyId4714);
    $.__views.__alloyId4715 = Ti.UI.createView({
        id: "__alloyId4715"
    });
    $.__views.__alloyId4714.add($.__views.__alloyId4715);
    $.__views.__alloyId4716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4716"
    });
    $.__views.__alloyId4715.add($.__views.__alloyId4716);
    $.__views.__alloyId4717 = Ti.UI.createView({
        id: "__alloyId4717"
    });
    $.__views.__alloyId4717 && $.addTopLevelView($.__views.__alloyId4717);
    $.__views.__alloyId4718 = Ti.UI.createView({
        id: "__alloyId4718"
    });
    $.__views.__alloyId4717.add($.__views.__alloyId4718);
    $.__views.__alloyId4719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4719"
    });
    $.__views.__alloyId4718.add($.__views.__alloyId4719);
    $.__views.__alloyId4720 = Ti.UI.createView({
        id: "__alloyId4720"
    });
    $.__views.__alloyId4720 && $.addTopLevelView($.__views.__alloyId4720);
    $.__views.__alloyId4721 = Ti.UI.createView({
        id: "__alloyId4721"
    });
    $.__views.__alloyId4720.add($.__views.__alloyId4721);
    $.__views.__alloyId4722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4722"
    });
    $.__views.__alloyId4721.add($.__views.__alloyId4722);
    $.__views.__alloyId4723 = Ti.UI.createView({
        id: "__alloyId4723"
    });
    $.__views.__alloyId4723 && $.addTopLevelView($.__views.__alloyId4723);
    $.__views.__alloyId4724 = Ti.UI.createView({
        id: "__alloyId4724"
    });
    $.__views.__alloyId4723.add($.__views.__alloyId4724);
    $.__views.__alloyId4725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4725"
    });
    $.__views.__alloyId4724.add($.__views.__alloyId4725);
    $.__views.__alloyId4726 = Ti.UI.createView({
        id: "__alloyId4726"
    });
    $.__views.__alloyId4726 && $.addTopLevelView($.__views.__alloyId4726);
    $.__views.__alloyId4727 = Ti.UI.createView({
        id: "__alloyId4727"
    });
    $.__views.__alloyId4726.add($.__views.__alloyId4727);
    $.__views.__alloyId4728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4728"
    });
    $.__views.__alloyId4727.add($.__views.__alloyId4728);
    $.__views.__alloyId4729 = Ti.UI.createView({
        id: "__alloyId4729"
    });
    $.__views.__alloyId4729 && $.addTopLevelView($.__views.__alloyId4729);
    $.__views.__alloyId4730 = Ti.UI.createView({
        id: "__alloyId4730"
    });
    $.__views.__alloyId4729.add($.__views.__alloyId4730);
    $.__views.__alloyId4731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4731"
    });
    $.__views.__alloyId4730.add($.__views.__alloyId4731);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;