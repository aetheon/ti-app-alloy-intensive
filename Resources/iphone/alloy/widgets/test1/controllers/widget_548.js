function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_548";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_548 = Ti.UI.createView({
        id: "widget_548"
    });
    $.__views.widget_548 && $.addTopLevelView($.__views.widget_548);
    $.__views.__alloyId13000 = Ti.UI.createView({
        id: "__alloyId13000"
    });
    $.__views.widget_548.add($.__views.__alloyId13000);
    $.__views.__alloyId13001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13001"
    });
    $.__views.__alloyId13000.add($.__views.__alloyId13001);
    $.__views.__alloyId13002 = Ti.UI.createView({
        id: "__alloyId13002"
    });
    $.__views.__alloyId13002 && $.addTopLevelView($.__views.__alloyId13002);
    $.__views.__alloyId13003 = Ti.UI.createView({
        id: "__alloyId13003"
    });
    $.__views.__alloyId13002.add($.__views.__alloyId13003);
    $.__views.__alloyId13004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13004"
    });
    $.__views.__alloyId13003.add($.__views.__alloyId13004);
    $.__views.__alloyId13005 = Ti.UI.createView({
        id: "__alloyId13005"
    });
    $.__views.__alloyId13005 && $.addTopLevelView($.__views.__alloyId13005);
    $.__views.__alloyId13006 = Ti.UI.createView({
        id: "__alloyId13006"
    });
    $.__views.__alloyId13005.add($.__views.__alloyId13006);
    $.__views.__alloyId13007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13007"
    });
    $.__views.__alloyId13006.add($.__views.__alloyId13007);
    $.__views.__alloyId13008 = Ti.UI.createView({
        id: "__alloyId13008"
    });
    $.__views.__alloyId13008 && $.addTopLevelView($.__views.__alloyId13008);
    $.__views.__alloyId13009 = Ti.UI.createView({
        id: "__alloyId13009"
    });
    $.__views.__alloyId13008.add($.__views.__alloyId13009);
    $.__views.__alloyId13010 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13010"
    });
    $.__views.__alloyId13009.add($.__views.__alloyId13010);
    $.__views.__alloyId13011 = Ti.UI.createView({
        id: "__alloyId13011"
    });
    $.__views.__alloyId13011 && $.addTopLevelView($.__views.__alloyId13011);
    $.__views.__alloyId13012 = Ti.UI.createView({
        id: "__alloyId13012"
    });
    $.__views.__alloyId13011.add($.__views.__alloyId13012);
    $.__views.__alloyId13013 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13013"
    });
    $.__views.__alloyId13012.add($.__views.__alloyId13013);
    $.__views.__alloyId13014 = Ti.UI.createView({
        id: "__alloyId13014"
    });
    $.__views.__alloyId13014 && $.addTopLevelView($.__views.__alloyId13014);
    $.__views.__alloyId13015 = Ti.UI.createView({
        id: "__alloyId13015"
    });
    $.__views.__alloyId13014.add($.__views.__alloyId13015);
    $.__views.__alloyId13016 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13016"
    });
    $.__views.__alloyId13015.add($.__views.__alloyId13016);
    $.__views.__alloyId13017 = Ti.UI.createView({
        id: "__alloyId13017"
    });
    $.__views.__alloyId13017 && $.addTopLevelView($.__views.__alloyId13017);
    $.__views.__alloyId13018 = Ti.UI.createView({
        id: "__alloyId13018"
    });
    $.__views.__alloyId13017.add($.__views.__alloyId13018);
    $.__views.__alloyId13019 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13019"
    });
    $.__views.__alloyId13018.add($.__views.__alloyId13019);
    $.__views.__alloyId13020 = Ti.UI.createView({
        id: "__alloyId13020"
    });
    $.__views.__alloyId13020 && $.addTopLevelView($.__views.__alloyId13020);
    $.__views.__alloyId13021 = Ti.UI.createView({
        id: "__alloyId13021"
    });
    $.__views.__alloyId13020.add($.__views.__alloyId13021);
    $.__views.__alloyId13022 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13022"
    });
    $.__views.__alloyId13021.add($.__views.__alloyId13022);
    $.__views.__alloyId13023 = Ti.UI.createView({
        id: "__alloyId13023"
    });
    $.__views.__alloyId13023 && $.addTopLevelView($.__views.__alloyId13023);
    $.__views.__alloyId13024 = Ti.UI.createView({
        id: "__alloyId13024"
    });
    $.__views.__alloyId13023.add($.__views.__alloyId13024);
    $.__views.__alloyId13025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13025"
    });
    $.__views.__alloyId13024.add($.__views.__alloyId13025);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;