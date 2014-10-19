function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_76";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_76 = Ti.UI.createView({
        id: "widget_76"
    });
    $.__views.widget_76 && $.addTopLevelView($.__views.widget_76);
    $.__views.__alloyId19110 = Ti.UI.createView({
        id: "__alloyId19110"
    });
    $.__views.widget_76.add($.__views.__alloyId19110);
    $.__views.__alloyId19111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19111"
    });
    $.__views.__alloyId19110.add($.__views.__alloyId19111);
    $.__views.__alloyId19112 = Ti.UI.createView({
        id: "__alloyId19112"
    });
    $.__views.__alloyId19112 && $.addTopLevelView($.__views.__alloyId19112);
    $.__views.__alloyId19113 = Ti.UI.createView({
        id: "__alloyId19113"
    });
    $.__views.__alloyId19112.add($.__views.__alloyId19113);
    $.__views.__alloyId19114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19114"
    });
    $.__views.__alloyId19113.add($.__views.__alloyId19114);
    $.__views.__alloyId19115 = Ti.UI.createView({
        id: "__alloyId19115"
    });
    $.__views.__alloyId19115 && $.addTopLevelView($.__views.__alloyId19115);
    $.__views.__alloyId19116 = Ti.UI.createView({
        id: "__alloyId19116"
    });
    $.__views.__alloyId19115.add($.__views.__alloyId19116);
    $.__views.__alloyId19117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19117"
    });
    $.__views.__alloyId19116.add($.__views.__alloyId19117);
    $.__views.__alloyId19118 = Ti.UI.createView({
        id: "__alloyId19118"
    });
    $.__views.__alloyId19118 && $.addTopLevelView($.__views.__alloyId19118);
    $.__views.__alloyId19119 = Ti.UI.createView({
        id: "__alloyId19119"
    });
    $.__views.__alloyId19118.add($.__views.__alloyId19119);
    $.__views.__alloyId19120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19120"
    });
    $.__views.__alloyId19119.add($.__views.__alloyId19120);
    $.__views.__alloyId19121 = Ti.UI.createView({
        id: "__alloyId19121"
    });
    $.__views.__alloyId19121 && $.addTopLevelView($.__views.__alloyId19121);
    $.__views.__alloyId19122 = Ti.UI.createView({
        id: "__alloyId19122"
    });
    $.__views.__alloyId19121.add($.__views.__alloyId19122);
    $.__views.__alloyId19123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19123"
    });
    $.__views.__alloyId19122.add($.__views.__alloyId19123);
    $.__views.__alloyId19124 = Ti.UI.createView({
        id: "__alloyId19124"
    });
    $.__views.__alloyId19124 && $.addTopLevelView($.__views.__alloyId19124);
    $.__views.__alloyId19125 = Ti.UI.createView({
        id: "__alloyId19125"
    });
    $.__views.__alloyId19124.add($.__views.__alloyId19125);
    $.__views.__alloyId19126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19126"
    });
    $.__views.__alloyId19125.add($.__views.__alloyId19126);
    $.__views.__alloyId19127 = Ti.UI.createView({
        id: "__alloyId19127"
    });
    $.__views.__alloyId19127 && $.addTopLevelView($.__views.__alloyId19127);
    $.__views.__alloyId19128 = Ti.UI.createView({
        id: "__alloyId19128"
    });
    $.__views.__alloyId19127.add($.__views.__alloyId19128);
    $.__views.__alloyId19129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19129"
    });
    $.__views.__alloyId19128.add($.__views.__alloyId19129);
    $.__views.__alloyId19130 = Ti.UI.createView({
        id: "__alloyId19130"
    });
    $.__views.__alloyId19130 && $.addTopLevelView($.__views.__alloyId19130);
    $.__views.__alloyId19131 = Ti.UI.createView({
        id: "__alloyId19131"
    });
    $.__views.__alloyId19130.add($.__views.__alloyId19131);
    $.__views.__alloyId19132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19132"
    });
    $.__views.__alloyId19131.add($.__views.__alloyId19132);
    $.__views.__alloyId19133 = Ti.UI.createView({
        id: "__alloyId19133"
    });
    $.__views.__alloyId19133 && $.addTopLevelView($.__views.__alloyId19133);
    $.__views.__alloyId19134 = Ti.UI.createView({
        id: "__alloyId19134"
    });
    $.__views.__alloyId19133.add($.__views.__alloyId19134);
    $.__views.__alloyId19135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19135"
    });
    $.__views.__alloyId19134.add($.__views.__alloyId19135);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;