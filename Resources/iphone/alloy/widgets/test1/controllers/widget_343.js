function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_343";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_343 = Ti.UI.createView({
        id: "widget_343"
    });
    $.__views.widget_343 && $.addTopLevelView($.__views.widget_343);
    $.__views.__alloyId7098 = Ti.UI.createView({
        id: "__alloyId7098"
    });
    $.__views.widget_343.add($.__views.__alloyId7098);
    $.__views.__alloyId7099 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7099"
    });
    $.__views.__alloyId7098.add($.__views.__alloyId7099);
    $.__views.__alloyId7100 = Ti.UI.createView({
        id: "__alloyId7100"
    });
    $.__views.__alloyId7100 && $.addTopLevelView($.__views.__alloyId7100);
    $.__views.__alloyId7101 = Ti.UI.createView({
        id: "__alloyId7101"
    });
    $.__views.__alloyId7100.add($.__views.__alloyId7101);
    $.__views.__alloyId7102 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7102"
    });
    $.__views.__alloyId7101.add($.__views.__alloyId7102);
    $.__views.__alloyId7103 = Ti.UI.createView({
        id: "__alloyId7103"
    });
    $.__views.__alloyId7103 && $.addTopLevelView($.__views.__alloyId7103);
    $.__views.__alloyId7104 = Ti.UI.createView({
        id: "__alloyId7104"
    });
    $.__views.__alloyId7103.add($.__views.__alloyId7104);
    $.__views.__alloyId7105 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7105"
    });
    $.__views.__alloyId7104.add($.__views.__alloyId7105);
    $.__views.__alloyId7106 = Ti.UI.createView({
        id: "__alloyId7106"
    });
    $.__views.__alloyId7106 && $.addTopLevelView($.__views.__alloyId7106);
    $.__views.__alloyId7107 = Ti.UI.createView({
        id: "__alloyId7107"
    });
    $.__views.__alloyId7106.add($.__views.__alloyId7107);
    $.__views.__alloyId7108 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7108"
    });
    $.__views.__alloyId7107.add($.__views.__alloyId7108);
    $.__views.__alloyId7109 = Ti.UI.createView({
        id: "__alloyId7109"
    });
    $.__views.__alloyId7109 && $.addTopLevelView($.__views.__alloyId7109);
    $.__views.__alloyId7110 = Ti.UI.createView({
        id: "__alloyId7110"
    });
    $.__views.__alloyId7109.add($.__views.__alloyId7110);
    $.__views.__alloyId7111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7111"
    });
    $.__views.__alloyId7110.add($.__views.__alloyId7111);
    $.__views.__alloyId7112 = Ti.UI.createView({
        id: "__alloyId7112"
    });
    $.__views.__alloyId7112 && $.addTopLevelView($.__views.__alloyId7112);
    $.__views.__alloyId7113 = Ti.UI.createView({
        id: "__alloyId7113"
    });
    $.__views.__alloyId7112.add($.__views.__alloyId7113);
    $.__views.__alloyId7114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7114"
    });
    $.__views.__alloyId7113.add($.__views.__alloyId7114);
    $.__views.__alloyId7115 = Ti.UI.createView({
        id: "__alloyId7115"
    });
    $.__views.__alloyId7115 && $.addTopLevelView($.__views.__alloyId7115);
    $.__views.__alloyId7116 = Ti.UI.createView({
        id: "__alloyId7116"
    });
    $.__views.__alloyId7115.add($.__views.__alloyId7116);
    $.__views.__alloyId7117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7117"
    });
    $.__views.__alloyId7116.add($.__views.__alloyId7117);
    $.__views.__alloyId7118 = Ti.UI.createView({
        id: "__alloyId7118"
    });
    $.__views.__alloyId7118 && $.addTopLevelView($.__views.__alloyId7118);
    $.__views.__alloyId7119 = Ti.UI.createView({
        id: "__alloyId7119"
    });
    $.__views.__alloyId7118.add($.__views.__alloyId7119);
    $.__views.__alloyId7120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7120"
    });
    $.__views.__alloyId7119.add($.__views.__alloyId7120);
    $.__views.__alloyId7121 = Ti.UI.createView({
        id: "__alloyId7121"
    });
    $.__views.__alloyId7121 && $.addTopLevelView($.__views.__alloyId7121);
    $.__views.__alloyId7122 = Ti.UI.createView({
        id: "__alloyId7122"
    });
    $.__views.__alloyId7121.add($.__views.__alloyId7122);
    $.__views.__alloyId7123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7123"
    });
    $.__views.__alloyId7122.add($.__views.__alloyId7123);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;