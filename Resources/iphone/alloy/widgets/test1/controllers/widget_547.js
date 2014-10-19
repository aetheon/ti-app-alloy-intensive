function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_547";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_547 = Ti.UI.createView({
        id: "widget_547"
    });
    $.__views.widget_547 && $.addTopLevelView($.__views.widget_547);
    $.__views.__alloyId12974 = Ti.UI.createView({
        id: "__alloyId12974"
    });
    $.__views.widget_547.add($.__views.__alloyId12974);
    $.__views.__alloyId12975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12975"
    });
    $.__views.__alloyId12974.add($.__views.__alloyId12975);
    $.__views.__alloyId12976 = Ti.UI.createView({
        id: "__alloyId12976"
    });
    $.__views.__alloyId12976 && $.addTopLevelView($.__views.__alloyId12976);
    $.__views.__alloyId12977 = Ti.UI.createView({
        id: "__alloyId12977"
    });
    $.__views.__alloyId12976.add($.__views.__alloyId12977);
    $.__views.__alloyId12978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12978"
    });
    $.__views.__alloyId12977.add($.__views.__alloyId12978);
    $.__views.__alloyId12979 = Ti.UI.createView({
        id: "__alloyId12979"
    });
    $.__views.__alloyId12979 && $.addTopLevelView($.__views.__alloyId12979);
    $.__views.__alloyId12980 = Ti.UI.createView({
        id: "__alloyId12980"
    });
    $.__views.__alloyId12979.add($.__views.__alloyId12980);
    $.__views.__alloyId12981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12981"
    });
    $.__views.__alloyId12980.add($.__views.__alloyId12981);
    $.__views.__alloyId12982 = Ti.UI.createView({
        id: "__alloyId12982"
    });
    $.__views.__alloyId12982 && $.addTopLevelView($.__views.__alloyId12982);
    $.__views.__alloyId12983 = Ti.UI.createView({
        id: "__alloyId12983"
    });
    $.__views.__alloyId12982.add($.__views.__alloyId12983);
    $.__views.__alloyId12984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12984"
    });
    $.__views.__alloyId12983.add($.__views.__alloyId12984);
    $.__views.__alloyId12985 = Ti.UI.createView({
        id: "__alloyId12985"
    });
    $.__views.__alloyId12985 && $.addTopLevelView($.__views.__alloyId12985);
    $.__views.__alloyId12986 = Ti.UI.createView({
        id: "__alloyId12986"
    });
    $.__views.__alloyId12985.add($.__views.__alloyId12986);
    $.__views.__alloyId12987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12987"
    });
    $.__views.__alloyId12986.add($.__views.__alloyId12987);
    $.__views.__alloyId12988 = Ti.UI.createView({
        id: "__alloyId12988"
    });
    $.__views.__alloyId12988 && $.addTopLevelView($.__views.__alloyId12988);
    $.__views.__alloyId12989 = Ti.UI.createView({
        id: "__alloyId12989"
    });
    $.__views.__alloyId12988.add($.__views.__alloyId12989);
    $.__views.__alloyId12990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12990"
    });
    $.__views.__alloyId12989.add($.__views.__alloyId12990);
    $.__views.__alloyId12991 = Ti.UI.createView({
        id: "__alloyId12991"
    });
    $.__views.__alloyId12991 && $.addTopLevelView($.__views.__alloyId12991);
    $.__views.__alloyId12992 = Ti.UI.createView({
        id: "__alloyId12992"
    });
    $.__views.__alloyId12991.add($.__views.__alloyId12992);
    $.__views.__alloyId12993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12993"
    });
    $.__views.__alloyId12992.add($.__views.__alloyId12993);
    $.__views.__alloyId12994 = Ti.UI.createView({
        id: "__alloyId12994"
    });
    $.__views.__alloyId12994 && $.addTopLevelView($.__views.__alloyId12994);
    $.__views.__alloyId12995 = Ti.UI.createView({
        id: "__alloyId12995"
    });
    $.__views.__alloyId12994.add($.__views.__alloyId12995);
    $.__views.__alloyId12996 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12996"
    });
    $.__views.__alloyId12995.add($.__views.__alloyId12996);
    $.__views.__alloyId12997 = Ti.UI.createView({
        id: "__alloyId12997"
    });
    $.__views.__alloyId12997 && $.addTopLevelView($.__views.__alloyId12997);
    $.__views.__alloyId12998 = Ti.UI.createView({
        id: "__alloyId12998"
    });
    $.__views.__alloyId12997.add($.__views.__alloyId12998);
    $.__views.__alloyId12999 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12999"
    });
    $.__views.__alloyId12998.add($.__views.__alloyId12999);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;