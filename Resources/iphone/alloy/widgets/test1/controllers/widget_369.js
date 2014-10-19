function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_369";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_369 = Ti.UI.createView({
        id: "widget_369"
    });
    $.__views.widget_369 && $.addTopLevelView($.__views.widget_369);
    $.__views.__alloyId7826 = Ti.UI.createView({
        id: "__alloyId7826"
    });
    $.__views.widget_369.add($.__views.__alloyId7826);
    $.__views.__alloyId7827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7827"
    });
    $.__views.__alloyId7826.add($.__views.__alloyId7827);
    $.__views.__alloyId7828 = Ti.UI.createView({
        id: "__alloyId7828"
    });
    $.__views.__alloyId7828 && $.addTopLevelView($.__views.__alloyId7828);
    $.__views.__alloyId7829 = Ti.UI.createView({
        id: "__alloyId7829"
    });
    $.__views.__alloyId7828.add($.__views.__alloyId7829);
    $.__views.__alloyId7830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7830"
    });
    $.__views.__alloyId7829.add($.__views.__alloyId7830);
    $.__views.__alloyId7831 = Ti.UI.createView({
        id: "__alloyId7831"
    });
    $.__views.__alloyId7831 && $.addTopLevelView($.__views.__alloyId7831);
    $.__views.__alloyId7832 = Ti.UI.createView({
        id: "__alloyId7832"
    });
    $.__views.__alloyId7831.add($.__views.__alloyId7832);
    $.__views.__alloyId7833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7833"
    });
    $.__views.__alloyId7832.add($.__views.__alloyId7833);
    $.__views.__alloyId7834 = Ti.UI.createView({
        id: "__alloyId7834"
    });
    $.__views.__alloyId7834 && $.addTopLevelView($.__views.__alloyId7834);
    $.__views.__alloyId7835 = Ti.UI.createView({
        id: "__alloyId7835"
    });
    $.__views.__alloyId7834.add($.__views.__alloyId7835);
    $.__views.__alloyId7836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7836"
    });
    $.__views.__alloyId7835.add($.__views.__alloyId7836);
    $.__views.__alloyId7837 = Ti.UI.createView({
        id: "__alloyId7837"
    });
    $.__views.__alloyId7837 && $.addTopLevelView($.__views.__alloyId7837);
    $.__views.__alloyId7838 = Ti.UI.createView({
        id: "__alloyId7838"
    });
    $.__views.__alloyId7837.add($.__views.__alloyId7838);
    $.__views.__alloyId7839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7839"
    });
    $.__views.__alloyId7838.add($.__views.__alloyId7839);
    $.__views.__alloyId7840 = Ti.UI.createView({
        id: "__alloyId7840"
    });
    $.__views.__alloyId7840 && $.addTopLevelView($.__views.__alloyId7840);
    $.__views.__alloyId7841 = Ti.UI.createView({
        id: "__alloyId7841"
    });
    $.__views.__alloyId7840.add($.__views.__alloyId7841);
    $.__views.__alloyId7842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7842"
    });
    $.__views.__alloyId7841.add($.__views.__alloyId7842);
    $.__views.__alloyId7843 = Ti.UI.createView({
        id: "__alloyId7843"
    });
    $.__views.__alloyId7843 && $.addTopLevelView($.__views.__alloyId7843);
    $.__views.__alloyId7844 = Ti.UI.createView({
        id: "__alloyId7844"
    });
    $.__views.__alloyId7843.add($.__views.__alloyId7844);
    $.__views.__alloyId7845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7845"
    });
    $.__views.__alloyId7844.add($.__views.__alloyId7845);
    $.__views.__alloyId7846 = Ti.UI.createView({
        id: "__alloyId7846"
    });
    $.__views.__alloyId7846 && $.addTopLevelView($.__views.__alloyId7846);
    $.__views.__alloyId7847 = Ti.UI.createView({
        id: "__alloyId7847"
    });
    $.__views.__alloyId7846.add($.__views.__alloyId7847);
    $.__views.__alloyId7848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7848"
    });
    $.__views.__alloyId7847.add($.__views.__alloyId7848);
    $.__views.__alloyId7849 = Ti.UI.createView({
        id: "__alloyId7849"
    });
    $.__views.__alloyId7849 && $.addTopLevelView($.__views.__alloyId7849);
    $.__views.__alloyId7850 = Ti.UI.createView({
        id: "__alloyId7850"
    });
    $.__views.__alloyId7849.add($.__views.__alloyId7850);
    $.__views.__alloyId7851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7851"
    });
    $.__views.__alloyId7850.add($.__views.__alloyId7851);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;