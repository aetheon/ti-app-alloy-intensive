function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_482";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_482 = Ti.UI.createView({
        id: "widget_482"
    });
    $.__views.widget_482 && $.addTopLevelView($.__views.widget_482);
    $.__views.__alloyId11102 = Ti.UI.createView({
        id: "__alloyId11102"
    });
    $.__views.widget_482.add($.__views.__alloyId11102);
    $.__views.__alloyId11103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11103"
    });
    $.__views.__alloyId11102.add($.__views.__alloyId11103);
    $.__views.__alloyId11104 = Ti.UI.createView({
        id: "__alloyId11104"
    });
    $.__views.__alloyId11104 && $.addTopLevelView($.__views.__alloyId11104);
    $.__views.__alloyId11105 = Ti.UI.createView({
        id: "__alloyId11105"
    });
    $.__views.__alloyId11104.add($.__views.__alloyId11105);
    $.__views.__alloyId11106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11106"
    });
    $.__views.__alloyId11105.add($.__views.__alloyId11106);
    $.__views.__alloyId11107 = Ti.UI.createView({
        id: "__alloyId11107"
    });
    $.__views.__alloyId11107 && $.addTopLevelView($.__views.__alloyId11107);
    $.__views.__alloyId11108 = Ti.UI.createView({
        id: "__alloyId11108"
    });
    $.__views.__alloyId11107.add($.__views.__alloyId11108);
    $.__views.__alloyId11109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11109"
    });
    $.__views.__alloyId11108.add($.__views.__alloyId11109);
    $.__views.__alloyId11110 = Ti.UI.createView({
        id: "__alloyId11110"
    });
    $.__views.__alloyId11110 && $.addTopLevelView($.__views.__alloyId11110);
    $.__views.__alloyId11111 = Ti.UI.createView({
        id: "__alloyId11111"
    });
    $.__views.__alloyId11110.add($.__views.__alloyId11111);
    $.__views.__alloyId11112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11112"
    });
    $.__views.__alloyId11111.add($.__views.__alloyId11112);
    $.__views.__alloyId11113 = Ti.UI.createView({
        id: "__alloyId11113"
    });
    $.__views.__alloyId11113 && $.addTopLevelView($.__views.__alloyId11113);
    $.__views.__alloyId11114 = Ti.UI.createView({
        id: "__alloyId11114"
    });
    $.__views.__alloyId11113.add($.__views.__alloyId11114);
    $.__views.__alloyId11115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11115"
    });
    $.__views.__alloyId11114.add($.__views.__alloyId11115);
    $.__views.__alloyId11116 = Ti.UI.createView({
        id: "__alloyId11116"
    });
    $.__views.__alloyId11116 && $.addTopLevelView($.__views.__alloyId11116);
    $.__views.__alloyId11117 = Ti.UI.createView({
        id: "__alloyId11117"
    });
    $.__views.__alloyId11116.add($.__views.__alloyId11117);
    $.__views.__alloyId11118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11118"
    });
    $.__views.__alloyId11117.add($.__views.__alloyId11118);
    $.__views.__alloyId11119 = Ti.UI.createView({
        id: "__alloyId11119"
    });
    $.__views.__alloyId11119 && $.addTopLevelView($.__views.__alloyId11119);
    $.__views.__alloyId11120 = Ti.UI.createView({
        id: "__alloyId11120"
    });
    $.__views.__alloyId11119.add($.__views.__alloyId11120);
    $.__views.__alloyId11121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11121"
    });
    $.__views.__alloyId11120.add($.__views.__alloyId11121);
    $.__views.__alloyId11122 = Ti.UI.createView({
        id: "__alloyId11122"
    });
    $.__views.__alloyId11122 && $.addTopLevelView($.__views.__alloyId11122);
    $.__views.__alloyId11123 = Ti.UI.createView({
        id: "__alloyId11123"
    });
    $.__views.__alloyId11122.add($.__views.__alloyId11123);
    $.__views.__alloyId11124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11124"
    });
    $.__views.__alloyId11123.add($.__views.__alloyId11124);
    $.__views.__alloyId11125 = Ti.UI.createView({
        id: "__alloyId11125"
    });
    $.__views.__alloyId11125 && $.addTopLevelView($.__views.__alloyId11125);
    $.__views.__alloyId11126 = Ti.UI.createView({
        id: "__alloyId11126"
    });
    $.__views.__alloyId11125.add($.__views.__alloyId11126);
    $.__views.__alloyId11127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11127"
    });
    $.__views.__alloyId11126.add($.__views.__alloyId11127);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;