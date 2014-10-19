function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_794";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_794 = Ti.UI.createView({
        id: "widget_794"
    });
    $.__views.widget_794 && $.addTopLevelView($.__views.widget_794);
    $.__views.__alloyId20098 = Ti.UI.createView({
        id: "__alloyId20098"
    });
    $.__views.widget_794.add($.__views.__alloyId20098);
    $.__views.__alloyId20099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20099"
    });
    $.__views.__alloyId20098.add($.__views.__alloyId20099);
    $.__views.__alloyId20100 = Ti.UI.createView({
        id: "__alloyId20100"
    });
    $.__views.__alloyId20100 && $.addTopLevelView($.__views.__alloyId20100);
    $.__views.__alloyId20101 = Ti.UI.createView({
        id: "__alloyId20101"
    });
    $.__views.__alloyId20100.add($.__views.__alloyId20101);
    $.__views.__alloyId20102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20102"
    });
    $.__views.__alloyId20101.add($.__views.__alloyId20102);
    $.__views.__alloyId20103 = Ti.UI.createView({
        id: "__alloyId20103"
    });
    $.__views.__alloyId20103 && $.addTopLevelView($.__views.__alloyId20103);
    $.__views.__alloyId20104 = Ti.UI.createView({
        id: "__alloyId20104"
    });
    $.__views.__alloyId20103.add($.__views.__alloyId20104);
    $.__views.__alloyId20105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20105"
    });
    $.__views.__alloyId20104.add($.__views.__alloyId20105);
    $.__views.__alloyId20106 = Ti.UI.createView({
        id: "__alloyId20106"
    });
    $.__views.__alloyId20106 && $.addTopLevelView($.__views.__alloyId20106);
    $.__views.__alloyId20107 = Ti.UI.createView({
        id: "__alloyId20107"
    });
    $.__views.__alloyId20106.add($.__views.__alloyId20107);
    $.__views.__alloyId20108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20108"
    });
    $.__views.__alloyId20107.add($.__views.__alloyId20108);
    $.__views.__alloyId20109 = Ti.UI.createView({
        id: "__alloyId20109"
    });
    $.__views.__alloyId20109 && $.addTopLevelView($.__views.__alloyId20109);
    $.__views.__alloyId20110 = Ti.UI.createView({
        id: "__alloyId20110"
    });
    $.__views.__alloyId20109.add($.__views.__alloyId20110);
    $.__views.__alloyId20111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20111"
    });
    $.__views.__alloyId20110.add($.__views.__alloyId20111);
    $.__views.__alloyId20112 = Ti.UI.createView({
        id: "__alloyId20112"
    });
    $.__views.__alloyId20112 && $.addTopLevelView($.__views.__alloyId20112);
    $.__views.__alloyId20113 = Ti.UI.createView({
        id: "__alloyId20113"
    });
    $.__views.__alloyId20112.add($.__views.__alloyId20113);
    $.__views.__alloyId20114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20114"
    });
    $.__views.__alloyId20113.add($.__views.__alloyId20114);
    $.__views.__alloyId20115 = Ti.UI.createView({
        id: "__alloyId20115"
    });
    $.__views.__alloyId20115 && $.addTopLevelView($.__views.__alloyId20115);
    $.__views.__alloyId20116 = Ti.UI.createView({
        id: "__alloyId20116"
    });
    $.__views.__alloyId20115.add($.__views.__alloyId20116);
    $.__views.__alloyId20117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20117"
    });
    $.__views.__alloyId20116.add($.__views.__alloyId20117);
    $.__views.__alloyId20118 = Ti.UI.createView({
        id: "__alloyId20118"
    });
    $.__views.__alloyId20118 && $.addTopLevelView($.__views.__alloyId20118);
    $.__views.__alloyId20119 = Ti.UI.createView({
        id: "__alloyId20119"
    });
    $.__views.__alloyId20118.add($.__views.__alloyId20119);
    $.__views.__alloyId20120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20120"
    });
    $.__views.__alloyId20119.add($.__views.__alloyId20120);
    $.__views.__alloyId20121 = Ti.UI.createView({
        id: "__alloyId20121"
    });
    $.__views.__alloyId20121 && $.addTopLevelView($.__views.__alloyId20121);
    $.__views.__alloyId20122 = Ti.UI.createView({
        id: "__alloyId20122"
    });
    $.__views.__alloyId20121.add($.__views.__alloyId20122);
    $.__views.__alloyId20123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20123"
    });
    $.__views.__alloyId20122.add($.__views.__alloyId20123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;