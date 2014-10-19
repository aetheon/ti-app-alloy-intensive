function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_191";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_191 = Ti.UI.createView({
        id: "widget_191"
    });
    $.__views.widget_191 && $.addTopLevelView($.__views.widget_191);
    $.__views.__alloyId2704 = Ti.UI.createView({
        id: "__alloyId2704"
    });
    $.__views.widget_191.add($.__views.__alloyId2704);
    $.__views.__alloyId2705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2705"
    });
    $.__views.__alloyId2704.add($.__views.__alloyId2705);
    $.__views.__alloyId2706 = Ti.UI.createView({
        id: "__alloyId2706"
    });
    $.__views.__alloyId2706 && $.addTopLevelView($.__views.__alloyId2706);
    $.__views.__alloyId2707 = Ti.UI.createView({
        id: "__alloyId2707"
    });
    $.__views.__alloyId2706.add($.__views.__alloyId2707);
    $.__views.__alloyId2708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2708"
    });
    $.__views.__alloyId2707.add($.__views.__alloyId2708);
    $.__views.__alloyId2709 = Ti.UI.createView({
        id: "__alloyId2709"
    });
    $.__views.__alloyId2709 && $.addTopLevelView($.__views.__alloyId2709);
    $.__views.__alloyId2710 = Ti.UI.createView({
        id: "__alloyId2710"
    });
    $.__views.__alloyId2709.add($.__views.__alloyId2710);
    $.__views.__alloyId2711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2711"
    });
    $.__views.__alloyId2710.add($.__views.__alloyId2711);
    $.__views.__alloyId2712 = Ti.UI.createView({
        id: "__alloyId2712"
    });
    $.__views.__alloyId2712 && $.addTopLevelView($.__views.__alloyId2712);
    $.__views.__alloyId2713 = Ti.UI.createView({
        id: "__alloyId2713"
    });
    $.__views.__alloyId2712.add($.__views.__alloyId2713);
    $.__views.__alloyId2714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2714"
    });
    $.__views.__alloyId2713.add($.__views.__alloyId2714);
    $.__views.__alloyId2715 = Ti.UI.createView({
        id: "__alloyId2715"
    });
    $.__views.__alloyId2715 && $.addTopLevelView($.__views.__alloyId2715);
    $.__views.__alloyId2716 = Ti.UI.createView({
        id: "__alloyId2716"
    });
    $.__views.__alloyId2715.add($.__views.__alloyId2716);
    $.__views.__alloyId2717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2717"
    });
    $.__views.__alloyId2716.add($.__views.__alloyId2717);
    $.__views.__alloyId2718 = Ti.UI.createView({
        id: "__alloyId2718"
    });
    $.__views.__alloyId2718 && $.addTopLevelView($.__views.__alloyId2718);
    $.__views.__alloyId2719 = Ti.UI.createView({
        id: "__alloyId2719"
    });
    $.__views.__alloyId2718.add($.__views.__alloyId2719);
    $.__views.__alloyId2720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2720"
    });
    $.__views.__alloyId2719.add($.__views.__alloyId2720);
    $.__views.__alloyId2721 = Ti.UI.createView({
        id: "__alloyId2721"
    });
    $.__views.__alloyId2721 && $.addTopLevelView($.__views.__alloyId2721);
    $.__views.__alloyId2722 = Ti.UI.createView({
        id: "__alloyId2722"
    });
    $.__views.__alloyId2721.add($.__views.__alloyId2722);
    $.__views.__alloyId2723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2723"
    });
    $.__views.__alloyId2722.add($.__views.__alloyId2723);
    $.__views.__alloyId2724 = Ti.UI.createView({
        id: "__alloyId2724"
    });
    $.__views.__alloyId2724 && $.addTopLevelView($.__views.__alloyId2724);
    $.__views.__alloyId2725 = Ti.UI.createView({
        id: "__alloyId2725"
    });
    $.__views.__alloyId2724.add($.__views.__alloyId2725);
    $.__views.__alloyId2726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2726"
    });
    $.__views.__alloyId2725.add($.__views.__alloyId2726);
    $.__views.__alloyId2727 = Ti.UI.createView({
        id: "__alloyId2727"
    });
    $.__views.__alloyId2727 && $.addTopLevelView($.__views.__alloyId2727);
    $.__views.__alloyId2728 = Ti.UI.createView({
        id: "__alloyId2728"
    });
    $.__views.__alloyId2727.add($.__views.__alloyId2728);
    $.__views.__alloyId2729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2729"
    });
    $.__views.__alloyId2728.add($.__views.__alloyId2729);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;