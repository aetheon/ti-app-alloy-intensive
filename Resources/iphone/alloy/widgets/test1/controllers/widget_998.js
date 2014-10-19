function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_998";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_998 = Ti.UI.createView({
        id: "widget_998"
    });
    $.__views.widget_998 && $.addTopLevelView($.__views.widget_998);
    $.__views.__alloyId25974 = Ti.UI.createView({
        id: "__alloyId25974"
    });
    $.__views.widget_998.add($.__views.__alloyId25974);
    $.__views.__alloyId25975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25975"
    });
    $.__views.__alloyId25974.add($.__views.__alloyId25975);
    $.__views.__alloyId25976 = Ti.UI.createView({
        id: "__alloyId25976"
    });
    $.__views.__alloyId25976 && $.addTopLevelView($.__views.__alloyId25976);
    $.__views.__alloyId25977 = Ti.UI.createView({
        id: "__alloyId25977"
    });
    $.__views.__alloyId25976.add($.__views.__alloyId25977);
    $.__views.__alloyId25978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25978"
    });
    $.__views.__alloyId25977.add($.__views.__alloyId25978);
    $.__views.__alloyId25979 = Ti.UI.createView({
        id: "__alloyId25979"
    });
    $.__views.__alloyId25979 && $.addTopLevelView($.__views.__alloyId25979);
    $.__views.__alloyId25980 = Ti.UI.createView({
        id: "__alloyId25980"
    });
    $.__views.__alloyId25979.add($.__views.__alloyId25980);
    $.__views.__alloyId25981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25981"
    });
    $.__views.__alloyId25980.add($.__views.__alloyId25981);
    $.__views.__alloyId25982 = Ti.UI.createView({
        id: "__alloyId25982"
    });
    $.__views.__alloyId25982 && $.addTopLevelView($.__views.__alloyId25982);
    $.__views.__alloyId25983 = Ti.UI.createView({
        id: "__alloyId25983"
    });
    $.__views.__alloyId25982.add($.__views.__alloyId25983);
    $.__views.__alloyId25984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25984"
    });
    $.__views.__alloyId25983.add($.__views.__alloyId25984);
    $.__views.__alloyId25985 = Ti.UI.createView({
        id: "__alloyId25985"
    });
    $.__views.__alloyId25985 && $.addTopLevelView($.__views.__alloyId25985);
    $.__views.__alloyId25986 = Ti.UI.createView({
        id: "__alloyId25986"
    });
    $.__views.__alloyId25985.add($.__views.__alloyId25986);
    $.__views.__alloyId25987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25987"
    });
    $.__views.__alloyId25986.add($.__views.__alloyId25987);
    $.__views.__alloyId25988 = Ti.UI.createView({
        id: "__alloyId25988"
    });
    $.__views.__alloyId25988 && $.addTopLevelView($.__views.__alloyId25988);
    $.__views.__alloyId25989 = Ti.UI.createView({
        id: "__alloyId25989"
    });
    $.__views.__alloyId25988.add($.__views.__alloyId25989);
    $.__views.__alloyId25990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25990"
    });
    $.__views.__alloyId25989.add($.__views.__alloyId25990);
    $.__views.__alloyId25991 = Ti.UI.createView({
        id: "__alloyId25991"
    });
    $.__views.__alloyId25991 && $.addTopLevelView($.__views.__alloyId25991);
    $.__views.__alloyId25992 = Ti.UI.createView({
        id: "__alloyId25992"
    });
    $.__views.__alloyId25991.add($.__views.__alloyId25992);
    $.__views.__alloyId25993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25993"
    });
    $.__views.__alloyId25992.add($.__views.__alloyId25993);
    $.__views.__alloyId25994 = Ti.UI.createView({
        id: "__alloyId25994"
    });
    $.__views.__alloyId25994 && $.addTopLevelView($.__views.__alloyId25994);
    $.__views.__alloyId25995 = Ti.UI.createView({
        id: "__alloyId25995"
    });
    $.__views.__alloyId25994.add($.__views.__alloyId25995);
    $.__views.__alloyId25996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25996"
    });
    $.__views.__alloyId25995.add($.__views.__alloyId25996);
    $.__views.__alloyId25997 = Ti.UI.createView({
        id: "__alloyId25997"
    });
    $.__views.__alloyId25997 && $.addTopLevelView($.__views.__alloyId25997);
    $.__views.__alloyId25998 = Ti.UI.createView({
        id: "__alloyId25998"
    });
    $.__views.__alloyId25997.add($.__views.__alloyId25998);
    $.__views.__alloyId25999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25999"
    });
    $.__views.__alloyId25998.add($.__views.__alloyId25999);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;