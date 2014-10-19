function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_999";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_999 = Ti.UI.createView({
        id: "widget_999"
    });
    $.__views.widget_999 && $.addTopLevelView($.__views.widget_999);
    $.__views.__alloyId26000 = Ti.UI.createView({
        id: "__alloyId26000"
    });
    $.__views.widget_999.add($.__views.__alloyId26000);
    $.__views.__alloyId26001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26001"
    });
    $.__views.__alloyId26000.add($.__views.__alloyId26001);
    $.__views.__alloyId26002 = Ti.UI.createView({
        id: "__alloyId26002"
    });
    $.__views.__alloyId26002 && $.addTopLevelView($.__views.__alloyId26002);
    $.__views.__alloyId26003 = Ti.UI.createView({
        id: "__alloyId26003"
    });
    $.__views.__alloyId26002.add($.__views.__alloyId26003);
    $.__views.__alloyId26004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26004"
    });
    $.__views.__alloyId26003.add($.__views.__alloyId26004);
    $.__views.__alloyId26005 = Ti.UI.createView({
        id: "__alloyId26005"
    });
    $.__views.__alloyId26005 && $.addTopLevelView($.__views.__alloyId26005);
    $.__views.__alloyId26006 = Ti.UI.createView({
        id: "__alloyId26006"
    });
    $.__views.__alloyId26005.add($.__views.__alloyId26006);
    $.__views.__alloyId26007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26007"
    });
    $.__views.__alloyId26006.add($.__views.__alloyId26007);
    $.__views.__alloyId26008 = Ti.UI.createView({
        id: "__alloyId26008"
    });
    $.__views.__alloyId26008 && $.addTopLevelView($.__views.__alloyId26008);
    $.__views.__alloyId26009 = Ti.UI.createView({
        id: "__alloyId26009"
    });
    $.__views.__alloyId26008.add($.__views.__alloyId26009);
    $.__views.__alloyId26010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26010"
    });
    $.__views.__alloyId26009.add($.__views.__alloyId26010);
    $.__views.__alloyId26011 = Ti.UI.createView({
        id: "__alloyId26011"
    });
    $.__views.__alloyId26011 && $.addTopLevelView($.__views.__alloyId26011);
    $.__views.__alloyId26012 = Ti.UI.createView({
        id: "__alloyId26012"
    });
    $.__views.__alloyId26011.add($.__views.__alloyId26012);
    $.__views.__alloyId26013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26013"
    });
    $.__views.__alloyId26012.add($.__views.__alloyId26013);
    $.__views.__alloyId26014 = Ti.UI.createView({
        id: "__alloyId26014"
    });
    $.__views.__alloyId26014 && $.addTopLevelView($.__views.__alloyId26014);
    $.__views.__alloyId26015 = Ti.UI.createView({
        id: "__alloyId26015"
    });
    $.__views.__alloyId26014.add($.__views.__alloyId26015);
    $.__views.__alloyId26016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26016"
    });
    $.__views.__alloyId26015.add($.__views.__alloyId26016);
    $.__views.__alloyId26017 = Ti.UI.createView({
        id: "__alloyId26017"
    });
    $.__views.__alloyId26017 && $.addTopLevelView($.__views.__alloyId26017);
    $.__views.__alloyId26018 = Ti.UI.createView({
        id: "__alloyId26018"
    });
    $.__views.__alloyId26017.add($.__views.__alloyId26018);
    $.__views.__alloyId26019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26019"
    });
    $.__views.__alloyId26018.add($.__views.__alloyId26019);
    $.__views.__alloyId26020 = Ti.UI.createView({
        id: "__alloyId26020"
    });
    $.__views.__alloyId26020 && $.addTopLevelView($.__views.__alloyId26020);
    $.__views.__alloyId26021 = Ti.UI.createView({
        id: "__alloyId26021"
    });
    $.__views.__alloyId26020.add($.__views.__alloyId26021);
    $.__views.__alloyId26022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26022"
    });
    $.__views.__alloyId26021.add($.__views.__alloyId26022);
    $.__views.__alloyId26023 = Ti.UI.createView({
        id: "__alloyId26023"
    });
    $.__views.__alloyId26023 && $.addTopLevelView($.__views.__alloyId26023);
    $.__views.__alloyId26024 = Ti.UI.createView({
        id: "__alloyId26024"
    });
    $.__views.__alloyId26023.add($.__views.__alloyId26024);
    $.__views.__alloyId26025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId26025"
    });
    $.__views.__alloyId26024.add($.__views.__alloyId26025);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;