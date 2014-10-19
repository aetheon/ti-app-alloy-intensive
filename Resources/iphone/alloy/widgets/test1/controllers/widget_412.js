function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_412";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_412 = Ti.UI.createView({
        id: "widget_412"
    });
    $.__views.widget_412 && $.addTopLevelView($.__views.widget_412);
    $.__views.__alloyId9100 = Ti.UI.createView({
        id: "__alloyId9100"
    });
    $.__views.widget_412.add($.__views.__alloyId9100);
    $.__views.__alloyId9101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9101"
    });
    $.__views.__alloyId9100.add($.__views.__alloyId9101);
    $.__views.__alloyId9102 = Ti.UI.createView({
        id: "__alloyId9102"
    });
    $.__views.__alloyId9102 && $.addTopLevelView($.__views.__alloyId9102);
    $.__views.__alloyId9103 = Ti.UI.createView({
        id: "__alloyId9103"
    });
    $.__views.__alloyId9102.add($.__views.__alloyId9103);
    $.__views.__alloyId9104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9104"
    });
    $.__views.__alloyId9103.add($.__views.__alloyId9104);
    $.__views.__alloyId9105 = Ti.UI.createView({
        id: "__alloyId9105"
    });
    $.__views.__alloyId9105 && $.addTopLevelView($.__views.__alloyId9105);
    $.__views.__alloyId9106 = Ti.UI.createView({
        id: "__alloyId9106"
    });
    $.__views.__alloyId9105.add($.__views.__alloyId9106);
    $.__views.__alloyId9107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9107"
    });
    $.__views.__alloyId9106.add($.__views.__alloyId9107);
    $.__views.__alloyId9108 = Ti.UI.createView({
        id: "__alloyId9108"
    });
    $.__views.__alloyId9108 && $.addTopLevelView($.__views.__alloyId9108);
    $.__views.__alloyId9109 = Ti.UI.createView({
        id: "__alloyId9109"
    });
    $.__views.__alloyId9108.add($.__views.__alloyId9109);
    $.__views.__alloyId9110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9110"
    });
    $.__views.__alloyId9109.add($.__views.__alloyId9110);
    $.__views.__alloyId9111 = Ti.UI.createView({
        id: "__alloyId9111"
    });
    $.__views.__alloyId9111 && $.addTopLevelView($.__views.__alloyId9111);
    $.__views.__alloyId9112 = Ti.UI.createView({
        id: "__alloyId9112"
    });
    $.__views.__alloyId9111.add($.__views.__alloyId9112);
    $.__views.__alloyId9113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9113"
    });
    $.__views.__alloyId9112.add($.__views.__alloyId9113);
    $.__views.__alloyId9114 = Ti.UI.createView({
        id: "__alloyId9114"
    });
    $.__views.__alloyId9114 && $.addTopLevelView($.__views.__alloyId9114);
    $.__views.__alloyId9115 = Ti.UI.createView({
        id: "__alloyId9115"
    });
    $.__views.__alloyId9114.add($.__views.__alloyId9115);
    $.__views.__alloyId9116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9116"
    });
    $.__views.__alloyId9115.add($.__views.__alloyId9116);
    $.__views.__alloyId9117 = Ti.UI.createView({
        id: "__alloyId9117"
    });
    $.__views.__alloyId9117 && $.addTopLevelView($.__views.__alloyId9117);
    $.__views.__alloyId9118 = Ti.UI.createView({
        id: "__alloyId9118"
    });
    $.__views.__alloyId9117.add($.__views.__alloyId9118);
    $.__views.__alloyId9119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9119"
    });
    $.__views.__alloyId9118.add($.__views.__alloyId9119);
    $.__views.__alloyId9120 = Ti.UI.createView({
        id: "__alloyId9120"
    });
    $.__views.__alloyId9120 && $.addTopLevelView($.__views.__alloyId9120);
    $.__views.__alloyId9121 = Ti.UI.createView({
        id: "__alloyId9121"
    });
    $.__views.__alloyId9120.add($.__views.__alloyId9121);
    $.__views.__alloyId9122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9122"
    });
    $.__views.__alloyId9121.add($.__views.__alloyId9122);
    $.__views.__alloyId9123 = Ti.UI.createView({
        id: "__alloyId9123"
    });
    $.__views.__alloyId9123 && $.addTopLevelView($.__views.__alloyId9123);
    $.__views.__alloyId9124 = Ti.UI.createView({
        id: "__alloyId9124"
    });
    $.__views.__alloyId9123.add($.__views.__alloyId9124);
    $.__views.__alloyId9125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9125"
    });
    $.__views.__alloyId9124.add($.__views.__alloyId9125);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;