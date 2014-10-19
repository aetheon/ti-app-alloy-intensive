function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_72";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_72 = Ti.UI.createView({
        id: "widget_72"
    });
    $.__views.widget_72 && $.addTopLevelView($.__views.widget_72);
    $.__views.__alloyId17966 = Ti.UI.createView({
        id: "__alloyId17966"
    });
    $.__views.widget_72.add($.__views.__alloyId17966);
    $.__views.__alloyId17967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17967"
    });
    $.__views.__alloyId17966.add($.__views.__alloyId17967);
    $.__views.__alloyId17968 = Ti.UI.createView({
        id: "__alloyId17968"
    });
    $.__views.__alloyId17968 && $.addTopLevelView($.__views.__alloyId17968);
    $.__views.__alloyId17969 = Ti.UI.createView({
        id: "__alloyId17969"
    });
    $.__views.__alloyId17968.add($.__views.__alloyId17969);
    $.__views.__alloyId17970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17970"
    });
    $.__views.__alloyId17969.add($.__views.__alloyId17970);
    $.__views.__alloyId17971 = Ti.UI.createView({
        id: "__alloyId17971"
    });
    $.__views.__alloyId17971 && $.addTopLevelView($.__views.__alloyId17971);
    $.__views.__alloyId17972 = Ti.UI.createView({
        id: "__alloyId17972"
    });
    $.__views.__alloyId17971.add($.__views.__alloyId17972);
    $.__views.__alloyId17973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17973"
    });
    $.__views.__alloyId17972.add($.__views.__alloyId17973);
    $.__views.__alloyId17974 = Ti.UI.createView({
        id: "__alloyId17974"
    });
    $.__views.__alloyId17974 && $.addTopLevelView($.__views.__alloyId17974);
    $.__views.__alloyId17975 = Ti.UI.createView({
        id: "__alloyId17975"
    });
    $.__views.__alloyId17974.add($.__views.__alloyId17975);
    $.__views.__alloyId17976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17976"
    });
    $.__views.__alloyId17975.add($.__views.__alloyId17976);
    $.__views.__alloyId17977 = Ti.UI.createView({
        id: "__alloyId17977"
    });
    $.__views.__alloyId17977 && $.addTopLevelView($.__views.__alloyId17977);
    $.__views.__alloyId17978 = Ti.UI.createView({
        id: "__alloyId17978"
    });
    $.__views.__alloyId17977.add($.__views.__alloyId17978);
    $.__views.__alloyId17979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17979"
    });
    $.__views.__alloyId17978.add($.__views.__alloyId17979);
    $.__views.__alloyId17980 = Ti.UI.createView({
        id: "__alloyId17980"
    });
    $.__views.__alloyId17980 && $.addTopLevelView($.__views.__alloyId17980);
    $.__views.__alloyId17981 = Ti.UI.createView({
        id: "__alloyId17981"
    });
    $.__views.__alloyId17980.add($.__views.__alloyId17981);
    $.__views.__alloyId17982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17982"
    });
    $.__views.__alloyId17981.add($.__views.__alloyId17982);
    $.__views.__alloyId17983 = Ti.UI.createView({
        id: "__alloyId17983"
    });
    $.__views.__alloyId17983 && $.addTopLevelView($.__views.__alloyId17983);
    $.__views.__alloyId17984 = Ti.UI.createView({
        id: "__alloyId17984"
    });
    $.__views.__alloyId17983.add($.__views.__alloyId17984);
    $.__views.__alloyId17985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17985"
    });
    $.__views.__alloyId17984.add($.__views.__alloyId17985);
    $.__views.__alloyId17986 = Ti.UI.createView({
        id: "__alloyId17986"
    });
    $.__views.__alloyId17986 && $.addTopLevelView($.__views.__alloyId17986);
    $.__views.__alloyId17987 = Ti.UI.createView({
        id: "__alloyId17987"
    });
    $.__views.__alloyId17986.add($.__views.__alloyId17987);
    $.__views.__alloyId17988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17988"
    });
    $.__views.__alloyId17987.add($.__views.__alloyId17988);
    $.__views.__alloyId17989 = Ti.UI.createView({
        id: "__alloyId17989"
    });
    $.__views.__alloyId17989 && $.addTopLevelView($.__views.__alloyId17989);
    $.__views.__alloyId17990 = Ti.UI.createView({
        id: "__alloyId17990"
    });
    $.__views.__alloyId17989.add($.__views.__alloyId17990);
    $.__views.__alloyId17991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17991"
    });
    $.__views.__alloyId17990.add($.__views.__alloyId17991);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;