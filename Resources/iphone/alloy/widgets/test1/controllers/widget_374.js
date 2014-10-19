function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_374";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_374 = Ti.UI.createView({
        id: "widget_374"
    });
    $.__views.widget_374 && $.addTopLevelView($.__views.widget_374);
    $.__views.__alloyId7982 = Ti.UI.createView({
        id: "__alloyId7982"
    });
    $.__views.widget_374.add($.__views.__alloyId7982);
    $.__views.__alloyId7983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7983"
    });
    $.__views.__alloyId7982.add($.__views.__alloyId7983);
    $.__views.__alloyId7984 = Ti.UI.createView({
        id: "__alloyId7984"
    });
    $.__views.__alloyId7984 && $.addTopLevelView($.__views.__alloyId7984);
    $.__views.__alloyId7985 = Ti.UI.createView({
        id: "__alloyId7985"
    });
    $.__views.__alloyId7984.add($.__views.__alloyId7985);
    $.__views.__alloyId7986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7986"
    });
    $.__views.__alloyId7985.add($.__views.__alloyId7986);
    $.__views.__alloyId7987 = Ti.UI.createView({
        id: "__alloyId7987"
    });
    $.__views.__alloyId7987 && $.addTopLevelView($.__views.__alloyId7987);
    $.__views.__alloyId7988 = Ti.UI.createView({
        id: "__alloyId7988"
    });
    $.__views.__alloyId7987.add($.__views.__alloyId7988);
    $.__views.__alloyId7989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7989"
    });
    $.__views.__alloyId7988.add($.__views.__alloyId7989);
    $.__views.__alloyId7990 = Ti.UI.createView({
        id: "__alloyId7990"
    });
    $.__views.__alloyId7990 && $.addTopLevelView($.__views.__alloyId7990);
    $.__views.__alloyId7991 = Ti.UI.createView({
        id: "__alloyId7991"
    });
    $.__views.__alloyId7990.add($.__views.__alloyId7991);
    $.__views.__alloyId7992 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7992"
    });
    $.__views.__alloyId7991.add($.__views.__alloyId7992);
    $.__views.__alloyId7993 = Ti.UI.createView({
        id: "__alloyId7993"
    });
    $.__views.__alloyId7993 && $.addTopLevelView($.__views.__alloyId7993);
    $.__views.__alloyId7994 = Ti.UI.createView({
        id: "__alloyId7994"
    });
    $.__views.__alloyId7993.add($.__views.__alloyId7994);
    $.__views.__alloyId7995 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7995"
    });
    $.__views.__alloyId7994.add($.__views.__alloyId7995);
    $.__views.__alloyId7996 = Ti.UI.createView({
        id: "__alloyId7996"
    });
    $.__views.__alloyId7996 && $.addTopLevelView($.__views.__alloyId7996);
    $.__views.__alloyId7997 = Ti.UI.createView({
        id: "__alloyId7997"
    });
    $.__views.__alloyId7996.add($.__views.__alloyId7997);
    $.__views.__alloyId7998 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7998"
    });
    $.__views.__alloyId7997.add($.__views.__alloyId7998);
    $.__views.__alloyId7999 = Ti.UI.createView({
        id: "__alloyId7999"
    });
    $.__views.__alloyId7999 && $.addTopLevelView($.__views.__alloyId7999);
    $.__views.__alloyId8000 = Ti.UI.createView({
        id: "__alloyId8000"
    });
    $.__views.__alloyId7999.add($.__views.__alloyId8000);
    $.__views.__alloyId8001 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8001"
    });
    $.__views.__alloyId8000.add($.__views.__alloyId8001);
    $.__views.__alloyId8002 = Ti.UI.createView({
        id: "__alloyId8002"
    });
    $.__views.__alloyId8002 && $.addTopLevelView($.__views.__alloyId8002);
    $.__views.__alloyId8003 = Ti.UI.createView({
        id: "__alloyId8003"
    });
    $.__views.__alloyId8002.add($.__views.__alloyId8003);
    $.__views.__alloyId8004 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8004"
    });
    $.__views.__alloyId8003.add($.__views.__alloyId8004);
    $.__views.__alloyId8005 = Ti.UI.createView({
        id: "__alloyId8005"
    });
    $.__views.__alloyId8005 && $.addTopLevelView($.__views.__alloyId8005);
    $.__views.__alloyId8006 = Ti.UI.createView({
        id: "__alloyId8006"
    });
    $.__views.__alloyId8005.add($.__views.__alloyId8006);
    $.__views.__alloyId8007 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8007"
    });
    $.__views.__alloyId8006.add($.__views.__alloyId8007);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;