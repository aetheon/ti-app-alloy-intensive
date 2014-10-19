function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_551";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_551 = Ti.UI.createView({
        id: "widget_551"
    });
    $.__views.widget_551 && $.addTopLevelView($.__views.widget_551);
    $.__views.__alloyId13104 = Ti.UI.createView({
        id: "__alloyId13104"
    });
    $.__views.widget_551.add($.__views.__alloyId13104);
    $.__views.__alloyId13105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13105"
    });
    $.__views.__alloyId13104.add($.__views.__alloyId13105);
    $.__views.__alloyId13106 = Ti.UI.createView({
        id: "__alloyId13106"
    });
    $.__views.__alloyId13106 && $.addTopLevelView($.__views.__alloyId13106);
    $.__views.__alloyId13107 = Ti.UI.createView({
        id: "__alloyId13107"
    });
    $.__views.__alloyId13106.add($.__views.__alloyId13107);
    $.__views.__alloyId13108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13108"
    });
    $.__views.__alloyId13107.add($.__views.__alloyId13108);
    $.__views.__alloyId13109 = Ti.UI.createView({
        id: "__alloyId13109"
    });
    $.__views.__alloyId13109 && $.addTopLevelView($.__views.__alloyId13109);
    $.__views.__alloyId13110 = Ti.UI.createView({
        id: "__alloyId13110"
    });
    $.__views.__alloyId13109.add($.__views.__alloyId13110);
    $.__views.__alloyId13111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13111"
    });
    $.__views.__alloyId13110.add($.__views.__alloyId13111);
    $.__views.__alloyId13112 = Ti.UI.createView({
        id: "__alloyId13112"
    });
    $.__views.__alloyId13112 && $.addTopLevelView($.__views.__alloyId13112);
    $.__views.__alloyId13113 = Ti.UI.createView({
        id: "__alloyId13113"
    });
    $.__views.__alloyId13112.add($.__views.__alloyId13113);
    $.__views.__alloyId13114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13114"
    });
    $.__views.__alloyId13113.add($.__views.__alloyId13114);
    $.__views.__alloyId13115 = Ti.UI.createView({
        id: "__alloyId13115"
    });
    $.__views.__alloyId13115 && $.addTopLevelView($.__views.__alloyId13115);
    $.__views.__alloyId13116 = Ti.UI.createView({
        id: "__alloyId13116"
    });
    $.__views.__alloyId13115.add($.__views.__alloyId13116);
    $.__views.__alloyId13117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13117"
    });
    $.__views.__alloyId13116.add($.__views.__alloyId13117);
    $.__views.__alloyId13118 = Ti.UI.createView({
        id: "__alloyId13118"
    });
    $.__views.__alloyId13118 && $.addTopLevelView($.__views.__alloyId13118);
    $.__views.__alloyId13119 = Ti.UI.createView({
        id: "__alloyId13119"
    });
    $.__views.__alloyId13118.add($.__views.__alloyId13119);
    $.__views.__alloyId13120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13120"
    });
    $.__views.__alloyId13119.add($.__views.__alloyId13120);
    $.__views.__alloyId13121 = Ti.UI.createView({
        id: "__alloyId13121"
    });
    $.__views.__alloyId13121 && $.addTopLevelView($.__views.__alloyId13121);
    $.__views.__alloyId13122 = Ti.UI.createView({
        id: "__alloyId13122"
    });
    $.__views.__alloyId13121.add($.__views.__alloyId13122);
    $.__views.__alloyId13123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13123"
    });
    $.__views.__alloyId13122.add($.__views.__alloyId13123);
    $.__views.__alloyId13124 = Ti.UI.createView({
        id: "__alloyId13124"
    });
    $.__views.__alloyId13124 && $.addTopLevelView($.__views.__alloyId13124);
    $.__views.__alloyId13125 = Ti.UI.createView({
        id: "__alloyId13125"
    });
    $.__views.__alloyId13124.add($.__views.__alloyId13125);
    $.__views.__alloyId13126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13126"
    });
    $.__views.__alloyId13125.add($.__views.__alloyId13126);
    $.__views.__alloyId13127 = Ti.UI.createView({
        id: "__alloyId13127"
    });
    $.__views.__alloyId13127 && $.addTopLevelView($.__views.__alloyId13127);
    $.__views.__alloyId13128 = Ti.UI.createView({
        id: "__alloyId13128"
    });
    $.__views.__alloyId13127.add($.__views.__alloyId13128);
    $.__views.__alloyId13129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13129"
    });
    $.__views.__alloyId13128.add($.__views.__alloyId13129);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;