function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_235";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_235 = Ti.UI.createView({
        id: "widget_235"
    });
    $.__views.widget_235 && $.addTopLevelView($.__views.widget_235);
    $.__views.__alloyId3978 = Ti.UI.createView({
        id: "__alloyId3978"
    });
    $.__views.widget_235.add($.__views.__alloyId3978);
    $.__views.__alloyId3979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3979"
    });
    $.__views.__alloyId3978.add($.__views.__alloyId3979);
    $.__views.__alloyId3980 = Ti.UI.createView({
        id: "__alloyId3980"
    });
    $.__views.__alloyId3980 && $.addTopLevelView($.__views.__alloyId3980);
    $.__views.__alloyId3981 = Ti.UI.createView({
        id: "__alloyId3981"
    });
    $.__views.__alloyId3980.add($.__views.__alloyId3981);
    $.__views.__alloyId3982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3982"
    });
    $.__views.__alloyId3981.add($.__views.__alloyId3982);
    $.__views.__alloyId3983 = Ti.UI.createView({
        id: "__alloyId3983"
    });
    $.__views.__alloyId3983 && $.addTopLevelView($.__views.__alloyId3983);
    $.__views.__alloyId3984 = Ti.UI.createView({
        id: "__alloyId3984"
    });
    $.__views.__alloyId3983.add($.__views.__alloyId3984);
    $.__views.__alloyId3985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3985"
    });
    $.__views.__alloyId3984.add($.__views.__alloyId3985);
    $.__views.__alloyId3986 = Ti.UI.createView({
        id: "__alloyId3986"
    });
    $.__views.__alloyId3986 && $.addTopLevelView($.__views.__alloyId3986);
    $.__views.__alloyId3987 = Ti.UI.createView({
        id: "__alloyId3987"
    });
    $.__views.__alloyId3986.add($.__views.__alloyId3987);
    $.__views.__alloyId3988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3988"
    });
    $.__views.__alloyId3987.add($.__views.__alloyId3988);
    $.__views.__alloyId3989 = Ti.UI.createView({
        id: "__alloyId3989"
    });
    $.__views.__alloyId3989 && $.addTopLevelView($.__views.__alloyId3989);
    $.__views.__alloyId3990 = Ti.UI.createView({
        id: "__alloyId3990"
    });
    $.__views.__alloyId3989.add($.__views.__alloyId3990);
    $.__views.__alloyId3991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3991"
    });
    $.__views.__alloyId3990.add($.__views.__alloyId3991);
    $.__views.__alloyId3992 = Ti.UI.createView({
        id: "__alloyId3992"
    });
    $.__views.__alloyId3992 && $.addTopLevelView($.__views.__alloyId3992);
    $.__views.__alloyId3993 = Ti.UI.createView({
        id: "__alloyId3993"
    });
    $.__views.__alloyId3992.add($.__views.__alloyId3993);
    $.__views.__alloyId3994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3994"
    });
    $.__views.__alloyId3993.add($.__views.__alloyId3994);
    $.__views.__alloyId3995 = Ti.UI.createView({
        id: "__alloyId3995"
    });
    $.__views.__alloyId3995 && $.addTopLevelView($.__views.__alloyId3995);
    $.__views.__alloyId3996 = Ti.UI.createView({
        id: "__alloyId3996"
    });
    $.__views.__alloyId3995.add($.__views.__alloyId3996);
    $.__views.__alloyId3997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3997"
    });
    $.__views.__alloyId3996.add($.__views.__alloyId3997);
    $.__views.__alloyId3998 = Ti.UI.createView({
        id: "__alloyId3998"
    });
    $.__views.__alloyId3998 && $.addTopLevelView($.__views.__alloyId3998);
    $.__views.__alloyId3999 = Ti.UI.createView({
        id: "__alloyId3999"
    });
    $.__views.__alloyId3998.add($.__views.__alloyId3999);
    $.__views.__alloyId4000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4000"
    });
    $.__views.__alloyId3999.add($.__views.__alloyId4000);
    $.__views.__alloyId4001 = Ti.UI.createView({
        id: "__alloyId4001"
    });
    $.__views.__alloyId4001 && $.addTopLevelView($.__views.__alloyId4001);
    $.__views.__alloyId4002 = Ti.UI.createView({
        id: "__alloyId4002"
    });
    $.__views.__alloyId4001.add($.__views.__alloyId4002);
    $.__views.__alloyId4003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4003"
    });
    $.__views.__alloyId4002.add($.__views.__alloyId4003);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;