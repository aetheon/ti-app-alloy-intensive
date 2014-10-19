function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_507";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_507 = Ti.UI.createView({
        id: "widget_507"
    });
    $.__views.widget_507 && $.addTopLevelView($.__views.widget_507);
    $.__views.__alloyId11830 = Ti.UI.createView({
        id: "__alloyId11830"
    });
    $.__views.widget_507.add($.__views.__alloyId11830);
    $.__views.__alloyId11831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11831"
    });
    $.__views.__alloyId11830.add($.__views.__alloyId11831);
    $.__views.__alloyId11832 = Ti.UI.createView({
        id: "__alloyId11832"
    });
    $.__views.__alloyId11832 && $.addTopLevelView($.__views.__alloyId11832);
    $.__views.__alloyId11833 = Ti.UI.createView({
        id: "__alloyId11833"
    });
    $.__views.__alloyId11832.add($.__views.__alloyId11833);
    $.__views.__alloyId11834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11834"
    });
    $.__views.__alloyId11833.add($.__views.__alloyId11834);
    $.__views.__alloyId11835 = Ti.UI.createView({
        id: "__alloyId11835"
    });
    $.__views.__alloyId11835 && $.addTopLevelView($.__views.__alloyId11835);
    $.__views.__alloyId11836 = Ti.UI.createView({
        id: "__alloyId11836"
    });
    $.__views.__alloyId11835.add($.__views.__alloyId11836);
    $.__views.__alloyId11837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11837"
    });
    $.__views.__alloyId11836.add($.__views.__alloyId11837);
    $.__views.__alloyId11838 = Ti.UI.createView({
        id: "__alloyId11838"
    });
    $.__views.__alloyId11838 && $.addTopLevelView($.__views.__alloyId11838);
    $.__views.__alloyId11839 = Ti.UI.createView({
        id: "__alloyId11839"
    });
    $.__views.__alloyId11838.add($.__views.__alloyId11839);
    $.__views.__alloyId11840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11840"
    });
    $.__views.__alloyId11839.add($.__views.__alloyId11840);
    $.__views.__alloyId11841 = Ti.UI.createView({
        id: "__alloyId11841"
    });
    $.__views.__alloyId11841 && $.addTopLevelView($.__views.__alloyId11841);
    $.__views.__alloyId11842 = Ti.UI.createView({
        id: "__alloyId11842"
    });
    $.__views.__alloyId11841.add($.__views.__alloyId11842);
    $.__views.__alloyId11843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11843"
    });
    $.__views.__alloyId11842.add($.__views.__alloyId11843);
    $.__views.__alloyId11844 = Ti.UI.createView({
        id: "__alloyId11844"
    });
    $.__views.__alloyId11844 && $.addTopLevelView($.__views.__alloyId11844);
    $.__views.__alloyId11845 = Ti.UI.createView({
        id: "__alloyId11845"
    });
    $.__views.__alloyId11844.add($.__views.__alloyId11845);
    $.__views.__alloyId11846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11846"
    });
    $.__views.__alloyId11845.add($.__views.__alloyId11846);
    $.__views.__alloyId11847 = Ti.UI.createView({
        id: "__alloyId11847"
    });
    $.__views.__alloyId11847 && $.addTopLevelView($.__views.__alloyId11847);
    $.__views.__alloyId11848 = Ti.UI.createView({
        id: "__alloyId11848"
    });
    $.__views.__alloyId11847.add($.__views.__alloyId11848);
    $.__views.__alloyId11849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11849"
    });
    $.__views.__alloyId11848.add($.__views.__alloyId11849);
    $.__views.__alloyId11850 = Ti.UI.createView({
        id: "__alloyId11850"
    });
    $.__views.__alloyId11850 && $.addTopLevelView($.__views.__alloyId11850);
    $.__views.__alloyId11851 = Ti.UI.createView({
        id: "__alloyId11851"
    });
    $.__views.__alloyId11850.add($.__views.__alloyId11851);
    $.__views.__alloyId11852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11852"
    });
    $.__views.__alloyId11851.add($.__views.__alloyId11852);
    $.__views.__alloyId11853 = Ti.UI.createView({
        id: "__alloyId11853"
    });
    $.__views.__alloyId11853 && $.addTopLevelView($.__views.__alloyId11853);
    $.__views.__alloyId11854 = Ti.UI.createView({
        id: "__alloyId11854"
    });
    $.__views.__alloyId11853.add($.__views.__alloyId11854);
    $.__views.__alloyId11855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11855"
    });
    $.__views.__alloyId11854.add($.__views.__alloyId11855);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;