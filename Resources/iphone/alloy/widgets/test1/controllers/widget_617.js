function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_617";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_617 = Ti.UI.createView({
        id: "widget_617"
    });
    $.__views.widget_617 && $.addTopLevelView($.__views.widget_617);
    $.__views.__alloyId15002 = Ti.UI.createView({
        id: "__alloyId15002"
    });
    $.__views.widget_617.add($.__views.__alloyId15002);
    $.__views.__alloyId15003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15003"
    });
    $.__views.__alloyId15002.add($.__views.__alloyId15003);
    $.__views.__alloyId15004 = Ti.UI.createView({
        id: "__alloyId15004"
    });
    $.__views.__alloyId15004 && $.addTopLevelView($.__views.__alloyId15004);
    $.__views.__alloyId15005 = Ti.UI.createView({
        id: "__alloyId15005"
    });
    $.__views.__alloyId15004.add($.__views.__alloyId15005);
    $.__views.__alloyId15006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15006"
    });
    $.__views.__alloyId15005.add($.__views.__alloyId15006);
    $.__views.__alloyId15007 = Ti.UI.createView({
        id: "__alloyId15007"
    });
    $.__views.__alloyId15007 && $.addTopLevelView($.__views.__alloyId15007);
    $.__views.__alloyId15008 = Ti.UI.createView({
        id: "__alloyId15008"
    });
    $.__views.__alloyId15007.add($.__views.__alloyId15008);
    $.__views.__alloyId15009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15009"
    });
    $.__views.__alloyId15008.add($.__views.__alloyId15009);
    $.__views.__alloyId15010 = Ti.UI.createView({
        id: "__alloyId15010"
    });
    $.__views.__alloyId15010 && $.addTopLevelView($.__views.__alloyId15010);
    $.__views.__alloyId15011 = Ti.UI.createView({
        id: "__alloyId15011"
    });
    $.__views.__alloyId15010.add($.__views.__alloyId15011);
    $.__views.__alloyId15012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15012"
    });
    $.__views.__alloyId15011.add($.__views.__alloyId15012);
    $.__views.__alloyId15013 = Ti.UI.createView({
        id: "__alloyId15013"
    });
    $.__views.__alloyId15013 && $.addTopLevelView($.__views.__alloyId15013);
    $.__views.__alloyId15014 = Ti.UI.createView({
        id: "__alloyId15014"
    });
    $.__views.__alloyId15013.add($.__views.__alloyId15014);
    $.__views.__alloyId15015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15015"
    });
    $.__views.__alloyId15014.add($.__views.__alloyId15015);
    $.__views.__alloyId15016 = Ti.UI.createView({
        id: "__alloyId15016"
    });
    $.__views.__alloyId15016 && $.addTopLevelView($.__views.__alloyId15016);
    $.__views.__alloyId15017 = Ti.UI.createView({
        id: "__alloyId15017"
    });
    $.__views.__alloyId15016.add($.__views.__alloyId15017);
    $.__views.__alloyId15018 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15018"
    });
    $.__views.__alloyId15017.add($.__views.__alloyId15018);
    $.__views.__alloyId15019 = Ti.UI.createView({
        id: "__alloyId15019"
    });
    $.__views.__alloyId15019 && $.addTopLevelView($.__views.__alloyId15019);
    $.__views.__alloyId15020 = Ti.UI.createView({
        id: "__alloyId15020"
    });
    $.__views.__alloyId15019.add($.__views.__alloyId15020);
    $.__views.__alloyId15021 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15021"
    });
    $.__views.__alloyId15020.add($.__views.__alloyId15021);
    $.__views.__alloyId15022 = Ti.UI.createView({
        id: "__alloyId15022"
    });
    $.__views.__alloyId15022 && $.addTopLevelView($.__views.__alloyId15022);
    $.__views.__alloyId15023 = Ti.UI.createView({
        id: "__alloyId15023"
    });
    $.__views.__alloyId15022.add($.__views.__alloyId15023);
    $.__views.__alloyId15024 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15024"
    });
    $.__views.__alloyId15023.add($.__views.__alloyId15024);
    $.__views.__alloyId15025 = Ti.UI.createView({
        id: "__alloyId15025"
    });
    $.__views.__alloyId15025 && $.addTopLevelView($.__views.__alloyId15025);
    $.__views.__alloyId15026 = Ti.UI.createView({
        id: "__alloyId15026"
    });
    $.__views.__alloyId15025.add($.__views.__alloyId15026);
    $.__views.__alloyId15027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15027"
    });
    $.__views.__alloyId15026.add($.__views.__alloyId15027);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;