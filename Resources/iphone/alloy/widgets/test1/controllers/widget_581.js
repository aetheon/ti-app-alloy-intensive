function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_581";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_581 = Ti.UI.createView({
        id: "widget_581"
    });
    $.__views.widget_581 && $.addTopLevelView($.__views.widget_581);
    $.__views.__alloyId13962 = Ti.UI.createView({
        id: "__alloyId13962"
    });
    $.__views.widget_581.add($.__views.__alloyId13962);
    $.__views.__alloyId13963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13963"
    });
    $.__views.__alloyId13962.add($.__views.__alloyId13963);
    $.__views.__alloyId13964 = Ti.UI.createView({
        id: "__alloyId13964"
    });
    $.__views.__alloyId13964 && $.addTopLevelView($.__views.__alloyId13964);
    $.__views.__alloyId13965 = Ti.UI.createView({
        id: "__alloyId13965"
    });
    $.__views.__alloyId13964.add($.__views.__alloyId13965);
    $.__views.__alloyId13966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13966"
    });
    $.__views.__alloyId13965.add($.__views.__alloyId13966);
    $.__views.__alloyId13967 = Ti.UI.createView({
        id: "__alloyId13967"
    });
    $.__views.__alloyId13967 && $.addTopLevelView($.__views.__alloyId13967);
    $.__views.__alloyId13968 = Ti.UI.createView({
        id: "__alloyId13968"
    });
    $.__views.__alloyId13967.add($.__views.__alloyId13968);
    $.__views.__alloyId13969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13969"
    });
    $.__views.__alloyId13968.add($.__views.__alloyId13969);
    $.__views.__alloyId13970 = Ti.UI.createView({
        id: "__alloyId13970"
    });
    $.__views.__alloyId13970 && $.addTopLevelView($.__views.__alloyId13970);
    $.__views.__alloyId13971 = Ti.UI.createView({
        id: "__alloyId13971"
    });
    $.__views.__alloyId13970.add($.__views.__alloyId13971);
    $.__views.__alloyId13972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13972"
    });
    $.__views.__alloyId13971.add($.__views.__alloyId13972);
    $.__views.__alloyId13973 = Ti.UI.createView({
        id: "__alloyId13973"
    });
    $.__views.__alloyId13973 && $.addTopLevelView($.__views.__alloyId13973);
    $.__views.__alloyId13974 = Ti.UI.createView({
        id: "__alloyId13974"
    });
    $.__views.__alloyId13973.add($.__views.__alloyId13974);
    $.__views.__alloyId13975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13975"
    });
    $.__views.__alloyId13974.add($.__views.__alloyId13975);
    $.__views.__alloyId13976 = Ti.UI.createView({
        id: "__alloyId13976"
    });
    $.__views.__alloyId13976 && $.addTopLevelView($.__views.__alloyId13976);
    $.__views.__alloyId13977 = Ti.UI.createView({
        id: "__alloyId13977"
    });
    $.__views.__alloyId13976.add($.__views.__alloyId13977);
    $.__views.__alloyId13978 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13978"
    });
    $.__views.__alloyId13977.add($.__views.__alloyId13978);
    $.__views.__alloyId13979 = Ti.UI.createView({
        id: "__alloyId13979"
    });
    $.__views.__alloyId13979 && $.addTopLevelView($.__views.__alloyId13979);
    $.__views.__alloyId13980 = Ti.UI.createView({
        id: "__alloyId13980"
    });
    $.__views.__alloyId13979.add($.__views.__alloyId13980);
    $.__views.__alloyId13981 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13981"
    });
    $.__views.__alloyId13980.add($.__views.__alloyId13981);
    $.__views.__alloyId13982 = Ti.UI.createView({
        id: "__alloyId13982"
    });
    $.__views.__alloyId13982 && $.addTopLevelView($.__views.__alloyId13982);
    $.__views.__alloyId13983 = Ti.UI.createView({
        id: "__alloyId13983"
    });
    $.__views.__alloyId13982.add($.__views.__alloyId13983);
    $.__views.__alloyId13984 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13984"
    });
    $.__views.__alloyId13983.add($.__views.__alloyId13984);
    $.__views.__alloyId13985 = Ti.UI.createView({
        id: "__alloyId13985"
    });
    $.__views.__alloyId13985 && $.addTopLevelView($.__views.__alloyId13985);
    $.__views.__alloyId13986 = Ti.UI.createView({
        id: "__alloyId13986"
    });
    $.__views.__alloyId13985.add($.__views.__alloyId13986);
    $.__views.__alloyId13987 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13987"
    });
    $.__views.__alloyId13986.add($.__views.__alloyId13987);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;