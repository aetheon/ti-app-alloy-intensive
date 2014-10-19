function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_963";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_963 = Ti.UI.createView({
        id: "widget_963"
    });
    $.__views.widget_963 && $.addTopLevelView($.__views.widget_963);
    $.__views.__alloyId24986 = Ti.UI.createView({
        id: "__alloyId24986"
    });
    $.__views.widget_963.add($.__views.__alloyId24986);
    $.__views.__alloyId24987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24987"
    });
    $.__views.__alloyId24986.add($.__views.__alloyId24987);
    $.__views.__alloyId24988 = Ti.UI.createView({
        id: "__alloyId24988"
    });
    $.__views.__alloyId24988 && $.addTopLevelView($.__views.__alloyId24988);
    $.__views.__alloyId24989 = Ti.UI.createView({
        id: "__alloyId24989"
    });
    $.__views.__alloyId24988.add($.__views.__alloyId24989);
    $.__views.__alloyId24990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24990"
    });
    $.__views.__alloyId24989.add($.__views.__alloyId24990);
    $.__views.__alloyId24991 = Ti.UI.createView({
        id: "__alloyId24991"
    });
    $.__views.__alloyId24991 && $.addTopLevelView($.__views.__alloyId24991);
    $.__views.__alloyId24992 = Ti.UI.createView({
        id: "__alloyId24992"
    });
    $.__views.__alloyId24991.add($.__views.__alloyId24992);
    $.__views.__alloyId24993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24993"
    });
    $.__views.__alloyId24992.add($.__views.__alloyId24993);
    $.__views.__alloyId24994 = Ti.UI.createView({
        id: "__alloyId24994"
    });
    $.__views.__alloyId24994 && $.addTopLevelView($.__views.__alloyId24994);
    $.__views.__alloyId24995 = Ti.UI.createView({
        id: "__alloyId24995"
    });
    $.__views.__alloyId24994.add($.__views.__alloyId24995);
    $.__views.__alloyId24996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24996"
    });
    $.__views.__alloyId24995.add($.__views.__alloyId24996);
    $.__views.__alloyId24997 = Ti.UI.createView({
        id: "__alloyId24997"
    });
    $.__views.__alloyId24997 && $.addTopLevelView($.__views.__alloyId24997);
    $.__views.__alloyId24998 = Ti.UI.createView({
        id: "__alloyId24998"
    });
    $.__views.__alloyId24997.add($.__views.__alloyId24998);
    $.__views.__alloyId24999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24999"
    });
    $.__views.__alloyId24998.add($.__views.__alloyId24999);
    $.__views.__alloyId25000 = Ti.UI.createView({
        id: "__alloyId25000"
    });
    $.__views.__alloyId25000 && $.addTopLevelView($.__views.__alloyId25000);
    $.__views.__alloyId25001 = Ti.UI.createView({
        id: "__alloyId25001"
    });
    $.__views.__alloyId25000.add($.__views.__alloyId25001);
    $.__views.__alloyId25002 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25002"
    });
    $.__views.__alloyId25001.add($.__views.__alloyId25002);
    $.__views.__alloyId25003 = Ti.UI.createView({
        id: "__alloyId25003"
    });
    $.__views.__alloyId25003 && $.addTopLevelView($.__views.__alloyId25003);
    $.__views.__alloyId25004 = Ti.UI.createView({
        id: "__alloyId25004"
    });
    $.__views.__alloyId25003.add($.__views.__alloyId25004);
    $.__views.__alloyId25005 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25005"
    });
    $.__views.__alloyId25004.add($.__views.__alloyId25005);
    $.__views.__alloyId25006 = Ti.UI.createView({
        id: "__alloyId25006"
    });
    $.__views.__alloyId25006 && $.addTopLevelView($.__views.__alloyId25006);
    $.__views.__alloyId25007 = Ti.UI.createView({
        id: "__alloyId25007"
    });
    $.__views.__alloyId25006.add($.__views.__alloyId25007);
    $.__views.__alloyId25008 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25008"
    });
    $.__views.__alloyId25007.add($.__views.__alloyId25008);
    $.__views.__alloyId25009 = Ti.UI.createView({
        id: "__alloyId25009"
    });
    $.__views.__alloyId25009 && $.addTopLevelView($.__views.__alloyId25009);
    $.__views.__alloyId25010 = Ti.UI.createView({
        id: "__alloyId25010"
    });
    $.__views.__alloyId25009.add($.__views.__alloyId25010);
    $.__views.__alloyId25011 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25011"
    });
    $.__views.__alloyId25010.add($.__views.__alloyId25011);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;