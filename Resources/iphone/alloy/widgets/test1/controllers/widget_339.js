function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_339";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_339 = Ti.UI.createView({
        id: "widget_339"
    });
    $.__views.widget_339 && $.addTopLevelView($.__views.widget_339);
    $.__views.__alloyId6968 = Ti.UI.createView({
        id: "__alloyId6968"
    });
    $.__views.widget_339.add($.__views.__alloyId6968);
    $.__views.__alloyId6969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6969"
    });
    $.__views.__alloyId6968.add($.__views.__alloyId6969);
    $.__views.__alloyId6970 = Ti.UI.createView({
        id: "__alloyId6970"
    });
    $.__views.__alloyId6970 && $.addTopLevelView($.__views.__alloyId6970);
    $.__views.__alloyId6971 = Ti.UI.createView({
        id: "__alloyId6971"
    });
    $.__views.__alloyId6970.add($.__views.__alloyId6971);
    $.__views.__alloyId6972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6972"
    });
    $.__views.__alloyId6971.add($.__views.__alloyId6972);
    $.__views.__alloyId6973 = Ti.UI.createView({
        id: "__alloyId6973"
    });
    $.__views.__alloyId6973 && $.addTopLevelView($.__views.__alloyId6973);
    $.__views.__alloyId6974 = Ti.UI.createView({
        id: "__alloyId6974"
    });
    $.__views.__alloyId6973.add($.__views.__alloyId6974);
    $.__views.__alloyId6975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6975"
    });
    $.__views.__alloyId6974.add($.__views.__alloyId6975);
    $.__views.__alloyId6976 = Ti.UI.createView({
        id: "__alloyId6976"
    });
    $.__views.__alloyId6976 && $.addTopLevelView($.__views.__alloyId6976);
    $.__views.__alloyId6977 = Ti.UI.createView({
        id: "__alloyId6977"
    });
    $.__views.__alloyId6976.add($.__views.__alloyId6977);
    $.__views.__alloyId6978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6978"
    });
    $.__views.__alloyId6977.add($.__views.__alloyId6978);
    $.__views.__alloyId6979 = Ti.UI.createView({
        id: "__alloyId6979"
    });
    $.__views.__alloyId6979 && $.addTopLevelView($.__views.__alloyId6979);
    $.__views.__alloyId6980 = Ti.UI.createView({
        id: "__alloyId6980"
    });
    $.__views.__alloyId6979.add($.__views.__alloyId6980);
    $.__views.__alloyId6981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6981"
    });
    $.__views.__alloyId6980.add($.__views.__alloyId6981);
    $.__views.__alloyId6982 = Ti.UI.createView({
        id: "__alloyId6982"
    });
    $.__views.__alloyId6982 && $.addTopLevelView($.__views.__alloyId6982);
    $.__views.__alloyId6983 = Ti.UI.createView({
        id: "__alloyId6983"
    });
    $.__views.__alloyId6982.add($.__views.__alloyId6983);
    $.__views.__alloyId6984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6984"
    });
    $.__views.__alloyId6983.add($.__views.__alloyId6984);
    $.__views.__alloyId6985 = Ti.UI.createView({
        id: "__alloyId6985"
    });
    $.__views.__alloyId6985 && $.addTopLevelView($.__views.__alloyId6985);
    $.__views.__alloyId6986 = Ti.UI.createView({
        id: "__alloyId6986"
    });
    $.__views.__alloyId6985.add($.__views.__alloyId6986);
    $.__views.__alloyId6987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6987"
    });
    $.__views.__alloyId6986.add($.__views.__alloyId6987);
    $.__views.__alloyId6988 = Ti.UI.createView({
        id: "__alloyId6988"
    });
    $.__views.__alloyId6988 && $.addTopLevelView($.__views.__alloyId6988);
    $.__views.__alloyId6989 = Ti.UI.createView({
        id: "__alloyId6989"
    });
    $.__views.__alloyId6988.add($.__views.__alloyId6989);
    $.__views.__alloyId6990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6990"
    });
    $.__views.__alloyId6989.add($.__views.__alloyId6990);
    $.__views.__alloyId6991 = Ti.UI.createView({
        id: "__alloyId6991"
    });
    $.__views.__alloyId6991 && $.addTopLevelView($.__views.__alloyId6991);
    $.__views.__alloyId6992 = Ti.UI.createView({
        id: "__alloyId6992"
    });
    $.__views.__alloyId6991.add($.__views.__alloyId6992);
    $.__views.__alloyId6993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6993"
    });
    $.__views.__alloyId6992.add($.__views.__alloyId6993);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;