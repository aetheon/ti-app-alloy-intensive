function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_443";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_443 = Ti.UI.createView({
        id: "widget_443"
    });
    $.__views.widget_443 && $.addTopLevelView($.__views.widget_443);
    $.__views.__alloyId9984 = Ti.UI.createView({
        id: "__alloyId9984"
    });
    $.__views.widget_443.add($.__views.__alloyId9984);
    $.__views.__alloyId9985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9985"
    });
    $.__views.__alloyId9984.add($.__views.__alloyId9985);
    $.__views.__alloyId9986 = Ti.UI.createView({
        id: "__alloyId9986"
    });
    $.__views.__alloyId9986 && $.addTopLevelView($.__views.__alloyId9986);
    $.__views.__alloyId9987 = Ti.UI.createView({
        id: "__alloyId9987"
    });
    $.__views.__alloyId9986.add($.__views.__alloyId9987);
    $.__views.__alloyId9988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9988"
    });
    $.__views.__alloyId9987.add($.__views.__alloyId9988);
    $.__views.__alloyId9989 = Ti.UI.createView({
        id: "__alloyId9989"
    });
    $.__views.__alloyId9989 && $.addTopLevelView($.__views.__alloyId9989);
    $.__views.__alloyId9990 = Ti.UI.createView({
        id: "__alloyId9990"
    });
    $.__views.__alloyId9989.add($.__views.__alloyId9990);
    $.__views.__alloyId9991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9991"
    });
    $.__views.__alloyId9990.add($.__views.__alloyId9991);
    $.__views.__alloyId9992 = Ti.UI.createView({
        id: "__alloyId9992"
    });
    $.__views.__alloyId9992 && $.addTopLevelView($.__views.__alloyId9992);
    $.__views.__alloyId9993 = Ti.UI.createView({
        id: "__alloyId9993"
    });
    $.__views.__alloyId9992.add($.__views.__alloyId9993);
    $.__views.__alloyId9994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9994"
    });
    $.__views.__alloyId9993.add($.__views.__alloyId9994);
    $.__views.__alloyId9995 = Ti.UI.createView({
        id: "__alloyId9995"
    });
    $.__views.__alloyId9995 && $.addTopLevelView($.__views.__alloyId9995);
    $.__views.__alloyId9996 = Ti.UI.createView({
        id: "__alloyId9996"
    });
    $.__views.__alloyId9995.add($.__views.__alloyId9996);
    $.__views.__alloyId9997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9997"
    });
    $.__views.__alloyId9996.add($.__views.__alloyId9997);
    $.__views.__alloyId9998 = Ti.UI.createView({
        id: "__alloyId9998"
    });
    $.__views.__alloyId9998 && $.addTopLevelView($.__views.__alloyId9998);
    $.__views.__alloyId9999 = Ti.UI.createView({
        id: "__alloyId9999"
    });
    $.__views.__alloyId9998.add($.__views.__alloyId9999);
    $.__views.__alloyId10000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10000"
    });
    $.__views.__alloyId9999.add($.__views.__alloyId10000);
    $.__views.__alloyId10001 = Ti.UI.createView({
        id: "__alloyId10001"
    });
    $.__views.__alloyId10001 && $.addTopLevelView($.__views.__alloyId10001);
    $.__views.__alloyId10002 = Ti.UI.createView({
        id: "__alloyId10002"
    });
    $.__views.__alloyId10001.add($.__views.__alloyId10002);
    $.__views.__alloyId10003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10003"
    });
    $.__views.__alloyId10002.add($.__views.__alloyId10003);
    $.__views.__alloyId10004 = Ti.UI.createView({
        id: "__alloyId10004"
    });
    $.__views.__alloyId10004 && $.addTopLevelView($.__views.__alloyId10004);
    $.__views.__alloyId10005 = Ti.UI.createView({
        id: "__alloyId10005"
    });
    $.__views.__alloyId10004.add($.__views.__alloyId10005);
    $.__views.__alloyId10006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10006"
    });
    $.__views.__alloyId10005.add($.__views.__alloyId10006);
    $.__views.__alloyId10007 = Ti.UI.createView({
        id: "__alloyId10007"
    });
    $.__views.__alloyId10007 && $.addTopLevelView($.__views.__alloyId10007);
    $.__views.__alloyId10008 = Ti.UI.createView({
        id: "__alloyId10008"
    });
    $.__views.__alloyId10007.add($.__views.__alloyId10008);
    $.__views.__alloyId10009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10009"
    });
    $.__views.__alloyId10008.add($.__views.__alloyId10009);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;