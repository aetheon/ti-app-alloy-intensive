function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_690";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_690 = Ti.UI.createView({
        id: "widget_690"
    });
    $.__views.widget_690 && $.addTopLevelView($.__views.widget_690);
    $.__views.__alloyId17108 = Ti.UI.createView({
        id: "__alloyId17108"
    });
    $.__views.widget_690.add($.__views.__alloyId17108);
    $.__views.__alloyId17109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17109"
    });
    $.__views.__alloyId17108.add($.__views.__alloyId17109);
    $.__views.__alloyId17110 = Ti.UI.createView({
        id: "__alloyId17110"
    });
    $.__views.__alloyId17110 && $.addTopLevelView($.__views.__alloyId17110);
    $.__views.__alloyId17111 = Ti.UI.createView({
        id: "__alloyId17111"
    });
    $.__views.__alloyId17110.add($.__views.__alloyId17111);
    $.__views.__alloyId17112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17112"
    });
    $.__views.__alloyId17111.add($.__views.__alloyId17112);
    $.__views.__alloyId17113 = Ti.UI.createView({
        id: "__alloyId17113"
    });
    $.__views.__alloyId17113 && $.addTopLevelView($.__views.__alloyId17113);
    $.__views.__alloyId17114 = Ti.UI.createView({
        id: "__alloyId17114"
    });
    $.__views.__alloyId17113.add($.__views.__alloyId17114);
    $.__views.__alloyId17115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17115"
    });
    $.__views.__alloyId17114.add($.__views.__alloyId17115);
    $.__views.__alloyId17116 = Ti.UI.createView({
        id: "__alloyId17116"
    });
    $.__views.__alloyId17116 && $.addTopLevelView($.__views.__alloyId17116);
    $.__views.__alloyId17117 = Ti.UI.createView({
        id: "__alloyId17117"
    });
    $.__views.__alloyId17116.add($.__views.__alloyId17117);
    $.__views.__alloyId17118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17118"
    });
    $.__views.__alloyId17117.add($.__views.__alloyId17118);
    $.__views.__alloyId17119 = Ti.UI.createView({
        id: "__alloyId17119"
    });
    $.__views.__alloyId17119 && $.addTopLevelView($.__views.__alloyId17119);
    $.__views.__alloyId17120 = Ti.UI.createView({
        id: "__alloyId17120"
    });
    $.__views.__alloyId17119.add($.__views.__alloyId17120);
    $.__views.__alloyId17121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17121"
    });
    $.__views.__alloyId17120.add($.__views.__alloyId17121);
    $.__views.__alloyId17122 = Ti.UI.createView({
        id: "__alloyId17122"
    });
    $.__views.__alloyId17122 && $.addTopLevelView($.__views.__alloyId17122);
    $.__views.__alloyId17123 = Ti.UI.createView({
        id: "__alloyId17123"
    });
    $.__views.__alloyId17122.add($.__views.__alloyId17123);
    $.__views.__alloyId17124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17124"
    });
    $.__views.__alloyId17123.add($.__views.__alloyId17124);
    $.__views.__alloyId17125 = Ti.UI.createView({
        id: "__alloyId17125"
    });
    $.__views.__alloyId17125 && $.addTopLevelView($.__views.__alloyId17125);
    $.__views.__alloyId17126 = Ti.UI.createView({
        id: "__alloyId17126"
    });
    $.__views.__alloyId17125.add($.__views.__alloyId17126);
    $.__views.__alloyId17127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17127"
    });
    $.__views.__alloyId17126.add($.__views.__alloyId17127);
    $.__views.__alloyId17128 = Ti.UI.createView({
        id: "__alloyId17128"
    });
    $.__views.__alloyId17128 && $.addTopLevelView($.__views.__alloyId17128);
    $.__views.__alloyId17129 = Ti.UI.createView({
        id: "__alloyId17129"
    });
    $.__views.__alloyId17128.add($.__views.__alloyId17129);
    $.__views.__alloyId17130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17130"
    });
    $.__views.__alloyId17129.add($.__views.__alloyId17130);
    $.__views.__alloyId17131 = Ti.UI.createView({
        id: "__alloyId17131"
    });
    $.__views.__alloyId17131 && $.addTopLevelView($.__views.__alloyId17131);
    $.__views.__alloyId17132 = Ti.UI.createView({
        id: "__alloyId17132"
    });
    $.__views.__alloyId17131.add($.__views.__alloyId17132);
    $.__views.__alloyId17133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17133"
    });
    $.__views.__alloyId17132.add($.__views.__alloyId17133);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;