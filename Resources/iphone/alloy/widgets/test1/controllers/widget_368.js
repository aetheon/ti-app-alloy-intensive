function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_368";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_368 = Ti.UI.createView({
        id: "widget_368"
    });
    $.__views.widget_368 && $.addTopLevelView($.__views.widget_368);
    $.__views.__alloyId7800 = Ti.UI.createView({
        id: "__alloyId7800"
    });
    $.__views.widget_368.add($.__views.__alloyId7800);
    $.__views.__alloyId7801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7801"
    });
    $.__views.__alloyId7800.add($.__views.__alloyId7801);
    $.__views.__alloyId7802 = Ti.UI.createView({
        id: "__alloyId7802"
    });
    $.__views.__alloyId7802 && $.addTopLevelView($.__views.__alloyId7802);
    $.__views.__alloyId7803 = Ti.UI.createView({
        id: "__alloyId7803"
    });
    $.__views.__alloyId7802.add($.__views.__alloyId7803);
    $.__views.__alloyId7804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7804"
    });
    $.__views.__alloyId7803.add($.__views.__alloyId7804);
    $.__views.__alloyId7805 = Ti.UI.createView({
        id: "__alloyId7805"
    });
    $.__views.__alloyId7805 && $.addTopLevelView($.__views.__alloyId7805);
    $.__views.__alloyId7806 = Ti.UI.createView({
        id: "__alloyId7806"
    });
    $.__views.__alloyId7805.add($.__views.__alloyId7806);
    $.__views.__alloyId7807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7807"
    });
    $.__views.__alloyId7806.add($.__views.__alloyId7807);
    $.__views.__alloyId7808 = Ti.UI.createView({
        id: "__alloyId7808"
    });
    $.__views.__alloyId7808 && $.addTopLevelView($.__views.__alloyId7808);
    $.__views.__alloyId7809 = Ti.UI.createView({
        id: "__alloyId7809"
    });
    $.__views.__alloyId7808.add($.__views.__alloyId7809);
    $.__views.__alloyId7810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7810"
    });
    $.__views.__alloyId7809.add($.__views.__alloyId7810);
    $.__views.__alloyId7811 = Ti.UI.createView({
        id: "__alloyId7811"
    });
    $.__views.__alloyId7811 && $.addTopLevelView($.__views.__alloyId7811);
    $.__views.__alloyId7812 = Ti.UI.createView({
        id: "__alloyId7812"
    });
    $.__views.__alloyId7811.add($.__views.__alloyId7812);
    $.__views.__alloyId7813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7813"
    });
    $.__views.__alloyId7812.add($.__views.__alloyId7813);
    $.__views.__alloyId7814 = Ti.UI.createView({
        id: "__alloyId7814"
    });
    $.__views.__alloyId7814 && $.addTopLevelView($.__views.__alloyId7814);
    $.__views.__alloyId7815 = Ti.UI.createView({
        id: "__alloyId7815"
    });
    $.__views.__alloyId7814.add($.__views.__alloyId7815);
    $.__views.__alloyId7816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7816"
    });
    $.__views.__alloyId7815.add($.__views.__alloyId7816);
    $.__views.__alloyId7817 = Ti.UI.createView({
        id: "__alloyId7817"
    });
    $.__views.__alloyId7817 && $.addTopLevelView($.__views.__alloyId7817);
    $.__views.__alloyId7818 = Ti.UI.createView({
        id: "__alloyId7818"
    });
    $.__views.__alloyId7817.add($.__views.__alloyId7818);
    $.__views.__alloyId7819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7819"
    });
    $.__views.__alloyId7818.add($.__views.__alloyId7819);
    $.__views.__alloyId7820 = Ti.UI.createView({
        id: "__alloyId7820"
    });
    $.__views.__alloyId7820 && $.addTopLevelView($.__views.__alloyId7820);
    $.__views.__alloyId7821 = Ti.UI.createView({
        id: "__alloyId7821"
    });
    $.__views.__alloyId7820.add($.__views.__alloyId7821);
    $.__views.__alloyId7822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7822"
    });
    $.__views.__alloyId7821.add($.__views.__alloyId7822);
    $.__views.__alloyId7823 = Ti.UI.createView({
        id: "__alloyId7823"
    });
    $.__views.__alloyId7823 && $.addTopLevelView($.__views.__alloyId7823);
    $.__views.__alloyId7824 = Ti.UI.createView({
        id: "__alloyId7824"
    });
    $.__views.__alloyId7823.add($.__views.__alloyId7824);
    $.__views.__alloyId7825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7825"
    });
    $.__views.__alloyId7824.add($.__views.__alloyId7825);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;