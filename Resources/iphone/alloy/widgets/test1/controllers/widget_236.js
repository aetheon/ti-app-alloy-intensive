function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_236";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_236 = Ti.UI.createView({
        id: "widget_236"
    });
    $.__views.widget_236 && $.addTopLevelView($.__views.widget_236);
    $.__views.__alloyId4004 = Ti.UI.createView({
        id: "__alloyId4004"
    });
    $.__views.widget_236.add($.__views.__alloyId4004);
    $.__views.__alloyId4005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4005"
    });
    $.__views.__alloyId4004.add($.__views.__alloyId4005);
    $.__views.__alloyId4006 = Ti.UI.createView({
        id: "__alloyId4006"
    });
    $.__views.__alloyId4006 && $.addTopLevelView($.__views.__alloyId4006);
    $.__views.__alloyId4007 = Ti.UI.createView({
        id: "__alloyId4007"
    });
    $.__views.__alloyId4006.add($.__views.__alloyId4007);
    $.__views.__alloyId4008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4008"
    });
    $.__views.__alloyId4007.add($.__views.__alloyId4008);
    $.__views.__alloyId4009 = Ti.UI.createView({
        id: "__alloyId4009"
    });
    $.__views.__alloyId4009 && $.addTopLevelView($.__views.__alloyId4009);
    $.__views.__alloyId4010 = Ti.UI.createView({
        id: "__alloyId4010"
    });
    $.__views.__alloyId4009.add($.__views.__alloyId4010);
    $.__views.__alloyId4011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4011"
    });
    $.__views.__alloyId4010.add($.__views.__alloyId4011);
    $.__views.__alloyId4012 = Ti.UI.createView({
        id: "__alloyId4012"
    });
    $.__views.__alloyId4012 && $.addTopLevelView($.__views.__alloyId4012);
    $.__views.__alloyId4013 = Ti.UI.createView({
        id: "__alloyId4013"
    });
    $.__views.__alloyId4012.add($.__views.__alloyId4013);
    $.__views.__alloyId4014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4014"
    });
    $.__views.__alloyId4013.add($.__views.__alloyId4014);
    $.__views.__alloyId4015 = Ti.UI.createView({
        id: "__alloyId4015"
    });
    $.__views.__alloyId4015 && $.addTopLevelView($.__views.__alloyId4015);
    $.__views.__alloyId4016 = Ti.UI.createView({
        id: "__alloyId4016"
    });
    $.__views.__alloyId4015.add($.__views.__alloyId4016);
    $.__views.__alloyId4017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4017"
    });
    $.__views.__alloyId4016.add($.__views.__alloyId4017);
    $.__views.__alloyId4018 = Ti.UI.createView({
        id: "__alloyId4018"
    });
    $.__views.__alloyId4018 && $.addTopLevelView($.__views.__alloyId4018);
    $.__views.__alloyId4019 = Ti.UI.createView({
        id: "__alloyId4019"
    });
    $.__views.__alloyId4018.add($.__views.__alloyId4019);
    $.__views.__alloyId4020 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4020"
    });
    $.__views.__alloyId4019.add($.__views.__alloyId4020);
    $.__views.__alloyId4021 = Ti.UI.createView({
        id: "__alloyId4021"
    });
    $.__views.__alloyId4021 && $.addTopLevelView($.__views.__alloyId4021);
    $.__views.__alloyId4022 = Ti.UI.createView({
        id: "__alloyId4022"
    });
    $.__views.__alloyId4021.add($.__views.__alloyId4022);
    $.__views.__alloyId4023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4023"
    });
    $.__views.__alloyId4022.add($.__views.__alloyId4023);
    $.__views.__alloyId4024 = Ti.UI.createView({
        id: "__alloyId4024"
    });
    $.__views.__alloyId4024 && $.addTopLevelView($.__views.__alloyId4024);
    $.__views.__alloyId4025 = Ti.UI.createView({
        id: "__alloyId4025"
    });
    $.__views.__alloyId4024.add($.__views.__alloyId4025);
    $.__views.__alloyId4026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4026"
    });
    $.__views.__alloyId4025.add($.__views.__alloyId4026);
    $.__views.__alloyId4027 = Ti.UI.createView({
        id: "__alloyId4027"
    });
    $.__views.__alloyId4027 && $.addTopLevelView($.__views.__alloyId4027);
    $.__views.__alloyId4028 = Ti.UI.createView({
        id: "__alloyId4028"
    });
    $.__views.__alloyId4027.add($.__views.__alloyId4028);
    $.__views.__alloyId4029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4029"
    });
    $.__views.__alloyId4028.add($.__views.__alloyId4029);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;