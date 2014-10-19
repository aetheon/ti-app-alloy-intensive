function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_512";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_512 = Ti.UI.createView({
        id: "widget_512"
    });
    $.__views.widget_512 && $.addTopLevelView($.__views.widget_512);
    $.__views.__alloyId11986 = Ti.UI.createView({
        id: "__alloyId11986"
    });
    $.__views.widget_512.add($.__views.__alloyId11986);
    $.__views.__alloyId11987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11987"
    });
    $.__views.__alloyId11986.add($.__views.__alloyId11987);
    $.__views.__alloyId11988 = Ti.UI.createView({
        id: "__alloyId11988"
    });
    $.__views.__alloyId11988 && $.addTopLevelView($.__views.__alloyId11988);
    $.__views.__alloyId11989 = Ti.UI.createView({
        id: "__alloyId11989"
    });
    $.__views.__alloyId11988.add($.__views.__alloyId11989);
    $.__views.__alloyId11990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11990"
    });
    $.__views.__alloyId11989.add($.__views.__alloyId11990);
    $.__views.__alloyId11991 = Ti.UI.createView({
        id: "__alloyId11991"
    });
    $.__views.__alloyId11991 && $.addTopLevelView($.__views.__alloyId11991);
    $.__views.__alloyId11992 = Ti.UI.createView({
        id: "__alloyId11992"
    });
    $.__views.__alloyId11991.add($.__views.__alloyId11992);
    $.__views.__alloyId11993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11993"
    });
    $.__views.__alloyId11992.add($.__views.__alloyId11993);
    $.__views.__alloyId11994 = Ti.UI.createView({
        id: "__alloyId11994"
    });
    $.__views.__alloyId11994 && $.addTopLevelView($.__views.__alloyId11994);
    $.__views.__alloyId11995 = Ti.UI.createView({
        id: "__alloyId11995"
    });
    $.__views.__alloyId11994.add($.__views.__alloyId11995);
    $.__views.__alloyId11996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11996"
    });
    $.__views.__alloyId11995.add($.__views.__alloyId11996);
    $.__views.__alloyId11997 = Ti.UI.createView({
        id: "__alloyId11997"
    });
    $.__views.__alloyId11997 && $.addTopLevelView($.__views.__alloyId11997);
    $.__views.__alloyId11998 = Ti.UI.createView({
        id: "__alloyId11998"
    });
    $.__views.__alloyId11997.add($.__views.__alloyId11998);
    $.__views.__alloyId11999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11999"
    });
    $.__views.__alloyId11998.add($.__views.__alloyId11999);
    $.__views.__alloyId12000 = Ti.UI.createView({
        id: "__alloyId12000"
    });
    $.__views.__alloyId12000 && $.addTopLevelView($.__views.__alloyId12000);
    $.__views.__alloyId12001 = Ti.UI.createView({
        id: "__alloyId12001"
    });
    $.__views.__alloyId12000.add($.__views.__alloyId12001);
    $.__views.__alloyId12002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12002"
    });
    $.__views.__alloyId12001.add($.__views.__alloyId12002);
    $.__views.__alloyId12003 = Ti.UI.createView({
        id: "__alloyId12003"
    });
    $.__views.__alloyId12003 && $.addTopLevelView($.__views.__alloyId12003);
    $.__views.__alloyId12004 = Ti.UI.createView({
        id: "__alloyId12004"
    });
    $.__views.__alloyId12003.add($.__views.__alloyId12004);
    $.__views.__alloyId12005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12005"
    });
    $.__views.__alloyId12004.add($.__views.__alloyId12005);
    $.__views.__alloyId12006 = Ti.UI.createView({
        id: "__alloyId12006"
    });
    $.__views.__alloyId12006 && $.addTopLevelView($.__views.__alloyId12006);
    $.__views.__alloyId12007 = Ti.UI.createView({
        id: "__alloyId12007"
    });
    $.__views.__alloyId12006.add($.__views.__alloyId12007);
    $.__views.__alloyId12008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12008"
    });
    $.__views.__alloyId12007.add($.__views.__alloyId12008);
    $.__views.__alloyId12009 = Ti.UI.createView({
        id: "__alloyId12009"
    });
    $.__views.__alloyId12009 && $.addTopLevelView($.__views.__alloyId12009);
    $.__views.__alloyId12010 = Ti.UI.createView({
        id: "__alloyId12010"
    });
    $.__views.__alloyId12009.add($.__views.__alloyId12010);
    $.__views.__alloyId12011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12011"
    });
    $.__views.__alloyId12010.add($.__views.__alloyId12011);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;