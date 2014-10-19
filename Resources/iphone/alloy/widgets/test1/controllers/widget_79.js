function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_79";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_79 = Ti.UI.createView({
        id: "widget_79"
    });
    $.__views.widget_79 && $.addTopLevelView($.__views.widget_79);
    $.__views.__alloyId19968 = Ti.UI.createView({
        id: "__alloyId19968"
    });
    $.__views.widget_79.add($.__views.__alloyId19968);
    $.__views.__alloyId19969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19969"
    });
    $.__views.__alloyId19968.add($.__views.__alloyId19969);
    $.__views.__alloyId19970 = Ti.UI.createView({
        id: "__alloyId19970"
    });
    $.__views.__alloyId19970 && $.addTopLevelView($.__views.__alloyId19970);
    $.__views.__alloyId19971 = Ti.UI.createView({
        id: "__alloyId19971"
    });
    $.__views.__alloyId19970.add($.__views.__alloyId19971);
    $.__views.__alloyId19972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19972"
    });
    $.__views.__alloyId19971.add($.__views.__alloyId19972);
    $.__views.__alloyId19973 = Ti.UI.createView({
        id: "__alloyId19973"
    });
    $.__views.__alloyId19973 && $.addTopLevelView($.__views.__alloyId19973);
    $.__views.__alloyId19974 = Ti.UI.createView({
        id: "__alloyId19974"
    });
    $.__views.__alloyId19973.add($.__views.__alloyId19974);
    $.__views.__alloyId19975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19975"
    });
    $.__views.__alloyId19974.add($.__views.__alloyId19975);
    $.__views.__alloyId19976 = Ti.UI.createView({
        id: "__alloyId19976"
    });
    $.__views.__alloyId19976 && $.addTopLevelView($.__views.__alloyId19976);
    $.__views.__alloyId19977 = Ti.UI.createView({
        id: "__alloyId19977"
    });
    $.__views.__alloyId19976.add($.__views.__alloyId19977);
    $.__views.__alloyId19978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19978"
    });
    $.__views.__alloyId19977.add($.__views.__alloyId19978);
    $.__views.__alloyId19979 = Ti.UI.createView({
        id: "__alloyId19979"
    });
    $.__views.__alloyId19979 && $.addTopLevelView($.__views.__alloyId19979);
    $.__views.__alloyId19980 = Ti.UI.createView({
        id: "__alloyId19980"
    });
    $.__views.__alloyId19979.add($.__views.__alloyId19980);
    $.__views.__alloyId19981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19981"
    });
    $.__views.__alloyId19980.add($.__views.__alloyId19981);
    $.__views.__alloyId19982 = Ti.UI.createView({
        id: "__alloyId19982"
    });
    $.__views.__alloyId19982 && $.addTopLevelView($.__views.__alloyId19982);
    $.__views.__alloyId19983 = Ti.UI.createView({
        id: "__alloyId19983"
    });
    $.__views.__alloyId19982.add($.__views.__alloyId19983);
    $.__views.__alloyId19984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19984"
    });
    $.__views.__alloyId19983.add($.__views.__alloyId19984);
    $.__views.__alloyId19985 = Ti.UI.createView({
        id: "__alloyId19985"
    });
    $.__views.__alloyId19985 && $.addTopLevelView($.__views.__alloyId19985);
    $.__views.__alloyId19986 = Ti.UI.createView({
        id: "__alloyId19986"
    });
    $.__views.__alloyId19985.add($.__views.__alloyId19986);
    $.__views.__alloyId19987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19987"
    });
    $.__views.__alloyId19986.add($.__views.__alloyId19987);
    $.__views.__alloyId19988 = Ti.UI.createView({
        id: "__alloyId19988"
    });
    $.__views.__alloyId19988 && $.addTopLevelView($.__views.__alloyId19988);
    $.__views.__alloyId19989 = Ti.UI.createView({
        id: "__alloyId19989"
    });
    $.__views.__alloyId19988.add($.__views.__alloyId19989);
    $.__views.__alloyId19990 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19990"
    });
    $.__views.__alloyId19989.add($.__views.__alloyId19990);
    $.__views.__alloyId19991 = Ti.UI.createView({
        id: "__alloyId19991"
    });
    $.__views.__alloyId19991 && $.addTopLevelView($.__views.__alloyId19991);
    $.__views.__alloyId19992 = Ti.UI.createView({
        id: "__alloyId19992"
    });
    $.__views.__alloyId19991.add($.__views.__alloyId19992);
    $.__views.__alloyId19993 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19993"
    });
    $.__views.__alloyId19992.add($.__views.__alloyId19993);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;