function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_932";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_932 = Ti.UI.createView({
        id: "widget_932"
    });
    $.__views.widget_932 && $.addTopLevelView($.__views.widget_932);
    $.__views.__alloyId24102 = Ti.UI.createView({
        id: "__alloyId24102"
    });
    $.__views.widget_932.add($.__views.__alloyId24102);
    $.__views.__alloyId24103 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24103"
    });
    $.__views.__alloyId24102.add($.__views.__alloyId24103);
    $.__views.__alloyId24104 = Ti.UI.createView({
        id: "__alloyId24104"
    });
    $.__views.__alloyId24104 && $.addTopLevelView($.__views.__alloyId24104);
    $.__views.__alloyId24105 = Ti.UI.createView({
        id: "__alloyId24105"
    });
    $.__views.__alloyId24104.add($.__views.__alloyId24105);
    $.__views.__alloyId24106 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24106"
    });
    $.__views.__alloyId24105.add($.__views.__alloyId24106);
    $.__views.__alloyId24107 = Ti.UI.createView({
        id: "__alloyId24107"
    });
    $.__views.__alloyId24107 && $.addTopLevelView($.__views.__alloyId24107);
    $.__views.__alloyId24108 = Ti.UI.createView({
        id: "__alloyId24108"
    });
    $.__views.__alloyId24107.add($.__views.__alloyId24108);
    $.__views.__alloyId24109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24109"
    });
    $.__views.__alloyId24108.add($.__views.__alloyId24109);
    $.__views.__alloyId24110 = Ti.UI.createView({
        id: "__alloyId24110"
    });
    $.__views.__alloyId24110 && $.addTopLevelView($.__views.__alloyId24110);
    $.__views.__alloyId24111 = Ti.UI.createView({
        id: "__alloyId24111"
    });
    $.__views.__alloyId24110.add($.__views.__alloyId24111);
    $.__views.__alloyId24112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24112"
    });
    $.__views.__alloyId24111.add($.__views.__alloyId24112);
    $.__views.__alloyId24113 = Ti.UI.createView({
        id: "__alloyId24113"
    });
    $.__views.__alloyId24113 && $.addTopLevelView($.__views.__alloyId24113);
    $.__views.__alloyId24114 = Ti.UI.createView({
        id: "__alloyId24114"
    });
    $.__views.__alloyId24113.add($.__views.__alloyId24114);
    $.__views.__alloyId24115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24115"
    });
    $.__views.__alloyId24114.add($.__views.__alloyId24115);
    $.__views.__alloyId24116 = Ti.UI.createView({
        id: "__alloyId24116"
    });
    $.__views.__alloyId24116 && $.addTopLevelView($.__views.__alloyId24116);
    $.__views.__alloyId24117 = Ti.UI.createView({
        id: "__alloyId24117"
    });
    $.__views.__alloyId24116.add($.__views.__alloyId24117);
    $.__views.__alloyId24118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24118"
    });
    $.__views.__alloyId24117.add($.__views.__alloyId24118);
    $.__views.__alloyId24119 = Ti.UI.createView({
        id: "__alloyId24119"
    });
    $.__views.__alloyId24119 && $.addTopLevelView($.__views.__alloyId24119);
    $.__views.__alloyId24120 = Ti.UI.createView({
        id: "__alloyId24120"
    });
    $.__views.__alloyId24119.add($.__views.__alloyId24120);
    $.__views.__alloyId24121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24121"
    });
    $.__views.__alloyId24120.add($.__views.__alloyId24121);
    $.__views.__alloyId24122 = Ti.UI.createView({
        id: "__alloyId24122"
    });
    $.__views.__alloyId24122 && $.addTopLevelView($.__views.__alloyId24122);
    $.__views.__alloyId24123 = Ti.UI.createView({
        id: "__alloyId24123"
    });
    $.__views.__alloyId24122.add($.__views.__alloyId24123);
    $.__views.__alloyId24124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24124"
    });
    $.__views.__alloyId24123.add($.__views.__alloyId24124);
    $.__views.__alloyId24125 = Ti.UI.createView({
        id: "__alloyId24125"
    });
    $.__views.__alloyId24125 && $.addTopLevelView($.__views.__alloyId24125);
    $.__views.__alloyId24126 = Ti.UI.createView({
        id: "__alloyId24126"
    });
    $.__views.__alloyId24125.add($.__views.__alloyId24126);
    $.__views.__alloyId24127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24127"
    });
    $.__views.__alloyId24126.add($.__views.__alloyId24127);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;