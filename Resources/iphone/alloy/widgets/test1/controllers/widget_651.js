function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_651";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_651 = Ti.UI.createView({
        id: "widget_651"
    });
    $.__views.widget_651 && $.addTopLevelView($.__views.widget_651);
    $.__views.__alloyId15990 = Ti.UI.createView({
        id: "__alloyId15990"
    });
    $.__views.widget_651.add($.__views.__alloyId15990);
    $.__views.__alloyId15991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15991"
    });
    $.__views.__alloyId15990.add($.__views.__alloyId15991);
    $.__views.__alloyId15992 = Ti.UI.createView({
        id: "__alloyId15992"
    });
    $.__views.__alloyId15992 && $.addTopLevelView($.__views.__alloyId15992);
    $.__views.__alloyId15993 = Ti.UI.createView({
        id: "__alloyId15993"
    });
    $.__views.__alloyId15992.add($.__views.__alloyId15993);
    $.__views.__alloyId15994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15994"
    });
    $.__views.__alloyId15993.add($.__views.__alloyId15994);
    $.__views.__alloyId15995 = Ti.UI.createView({
        id: "__alloyId15995"
    });
    $.__views.__alloyId15995 && $.addTopLevelView($.__views.__alloyId15995);
    $.__views.__alloyId15996 = Ti.UI.createView({
        id: "__alloyId15996"
    });
    $.__views.__alloyId15995.add($.__views.__alloyId15996);
    $.__views.__alloyId15997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15997"
    });
    $.__views.__alloyId15996.add($.__views.__alloyId15997);
    $.__views.__alloyId15998 = Ti.UI.createView({
        id: "__alloyId15998"
    });
    $.__views.__alloyId15998 && $.addTopLevelView($.__views.__alloyId15998);
    $.__views.__alloyId15999 = Ti.UI.createView({
        id: "__alloyId15999"
    });
    $.__views.__alloyId15998.add($.__views.__alloyId15999);
    $.__views.__alloyId16000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16000"
    });
    $.__views.__alloyId15999.add($.__views.__alloyId16000);
    $.__views.__alloyId16001 = Ti.UI.createView({
        id: "__alloyId16001"
    });
    $.__views.__alloyId16001 && $.addTopLevelView($.__views.__alloyId16001);
    $.__views.__alloyId16002 = Ti.UI.createView({
        id: "__alloyId16002"
    });
    $.__views.__alloyId16001.add($.__views.__alloyId16002);
    $.__views.__alloyId16003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16003"
    });
    $.__views.__alloyId16002.add($.__views.__alloyId16003);
    $.__views.__alloyId16004 = Ti.UI.createView({
        id: "__alloyId16004"
    });
    $.__views.__alloyId16004 && $.addTopLevelView($.__views.__alloyId16004);
    $.__views.__alloyId16005 = Ti.UI.createView({
        id: "__alloyId16005"
    });
    $.__views.__alloyId16004.add($.__views.__alloyId16005);
    $.__views.__alloyId16006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16006"
    });
    $.__views.__alloyId16005.add($.__views.__alloyId16006);
    $.__views.__alloyId16007 = Ti.UI.createView({
        id: "__alloyId16007"
    });
    $.__views.__alloyId16007 && $.addTopLevelView($.__views.__alloyId16007);
    $.__views.__alloyId16008 = Ti.UI.createView({
        id: "__alloyId16008"
    });
    $.__views.__alloyId16007.add($.__views.__alloyId16008);
    $.__views.__alloyId16009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16009"
    });
    $.__views.__alloyId16008.add($.__views.__alloyId16009);
    $.__views.__alloyId16010 = Ti.UI.createView({
        id: "__alloyId16010"
    });
    $.__views.__alloyId16010 && $.addTopLevelView($.__views.__alloyId16010);
    $.__views.__alloyId16011 = Ti.UI.createView({
        id: "__alloyId16011"
    });
    $.__views.__alloyId16010.add($.__views.__alloyId16011);
    $.__views.__alloyId16012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16012"
    });
    $.__views.__alloyId16011.add($.__views.__alloyId16012);
    $.__views.__alloyId16013 = Ti.UI.createView({
        id: "__alloyId16013"
    });
    $.__views.__alloyId16013 && $.addTopLevelView($.__views.__alloyId16013);
    $.__views.__alloyId16014 = Ti.UI.createView({
        id: "__alloyId16014"
    });
    $.__views.__alloyId16013.add($.__views.__alloyId16014);
    $.__views.__alloyId16015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16015"
    });
    $.__views.__alloyId16014.add($.__views.__alloyId16015);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;