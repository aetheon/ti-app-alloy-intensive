function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_720";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_720 = Ti.UI.createView({
        id: "widget_720"
    });
    $.__views.widget_720 && $.addTopLevelView($.__views.widget_720);
    $.__views.__alloyId17992 = Ti.UI.createView({
        id: "__alloyId17992"
    });
    $.__views.widget_720.add($.__views.__alloyId17992);
    $.__views.__alloyId17993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17993"
    });
    $.__views.__alloyId17992.add($.__views.__alloyId17993);
    $.__views.__alloyId17994 = Ti.UI.createView({
        id: "__alloyId17994"
    });
    $.__views.__alloyId17994 && $.addTopLevelView($.__views.__alloyId17994);
    $.__views.__alloyId17995 = Ti.UI.createView({
        id: "__alloyId17995"
    });
    $.__views.__alloyId17994.add($.__views.__alloyId17995);
    $.__views.__alloyId17996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17996"
    });
    $.__views.__alloyId17995.add($.__views.__alloyId17996);
    $.__views.__alloyId17997 = Ti.UI.createView({
        id: "__alloyId17997"
    });
    $.__views.__alloyId17997 && $.addTopLevelView($.__views.__alloyId17997);
    $.__views.__alloyId17998 = Ti.UI.createView({
        id: "__alloyId17998"
    });
    $.__views.__alloyId17997.add($.__views.__alloyId17998);
    $.__views.__alloyId17999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17999"
    });
    $.__views.__alloyId17998.add($.__views.__alloyId17999);
    $.__views.__alloyId18000 = Ti.UI.createView({
        id: "__alloyId18000"
    });
    $.__views.__alloyId18000 && $.addTopLevelView($.__views.__alloyId18000);
    $.__views.__alloyId18001 = Ti.UI.createView({
        id: "__alloyId18001"
    });
    $.__views.__alloyId18000.add($.__views.__alloyId18001);
    $.__views.__alloyId18002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18002"
    });
    $.__views.__alloyId18001.add($.__views.__alloyId18002);
    $.__views.__alloyId18003 = Ti.UI.createView({
        id: "__alloyId18003"
    });
    $.__views.__alloyId18003 && $.addTopLevelView($.__views.__alloyId18003);
    $.__views.__alloyId18004 = Ti.UI.createView({
        id: "__alloyId18004"
    });
    $.__views.__alloyId18003.add($.__views.__alloyId18004);
    $.__views.__alloyId18005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18005"
    });
    $.__views.__alloyId18004.add($.__views.__alloyId18005);
    $.__views.__alloyId18006 = Ti.UI.createView({
        id: "__alloyId18006"
    });
    $.__views.__alloyId18006 && $.addTopLevelView($.__views.__alloyId18006);
    $.__views.__alloyId18007 = Ti.UI.createView({
        id: "__alloyId18007"
    });
    $.__views.__alloyId18006.add($.__views.__alloyId18007);
    $.__views.__alloyId18008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18008"
    });
    $.__views.__alloyId18007.add($.__views.__alloyId18008);
    $.__views.__alloyId18009 = Ti.UI.createView({
        id: "__alloyId18009"
    });
    $.__views.__alloyId18009 && $.addTopLevelView($.__views.__alloyId18009);
    $.__views.__alloyId18010 = Ti.UI.createView({
        id: "__alloyId18010"
    });
    $.__views.__alloyId18009.add($.__views.__alloyId18010);
    $.__views.__alloyId18011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18011"
    });
    $.__views.__alloyId18010.add($.__views.__alloyId18011);
    $.__views.__alloyId18012 = Ti.UI.createView({
        id: "__alloyId18012"
    });
    $.__views.__alloyId18012 && $.addTopLevelView($.__views.__alloyId18012);
    $.__views.__alloyId18013 = Ti.UI.createView({
        id: "__alloyId18013"
    });
    $.__views.__alloyId18012.add($.__views.__alloyId18013);
    $.__views.__alloyId18014 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18014"
    });
    $.__views.__alloyId18013.add($.__views.__alloyId18014);
    $.__views.__alloyId18015 = Ti.UI.createView({
        id: "__alloyId18015"
    });
    $.__views.__alloyId18015 && $.addTopLevelView($.__views.__alloyId18015);
    $.__views.__alloyId18016 = Ti.UI.createView({
        id: "__alloyId18016"
    });
    $.__views.__alloyId18015.add($.__views.__alloyId18016);
    $.__views.__alloyId18017 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18017"
    });
    $.__views.__alloyId18016.add($.__views.__alloyId18017);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;