function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_650";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_650 = Ti.UI.createView({
        id: "widget_650"
    });
    $.__views.widget_650 && $.addTopLevelView($.__views.widget_650);
    $.__views.__alloyId15964 = Ti.UI.createView({
        id: "__alloyId15964"
    });
    $.__views.widget_650.add($.__views.__alloyId15964);
    $.__views.__alloyId15965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15965"
    });
    $.__views.__alloyId15964.add($.__views.__alloyId15965);
    $.__views.__alloyId15966 = Ti.UI.createView({
        id: "__alloyId15966"
    });
    $.__views.__alloyId15966 && $.addTopLevelView($.__views.__alloyId15966);
    $.__views.__alloyId15967 = Ti.UI.createView({
        id: "__alloyId15967"
    });
    $.__views.__alloyId15966.add($.__views.__alloyId15967);
    $.__views.__alloyId15968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15968"
    });
    $.__views.__alloyId15967.add($.__views.__alloyId15968);
    $.__views.__alloyId15969 = Ti.UI.createView({
        id: "__alloyId15969"
    });
    $.__views.__alloyId15969 && $.addTopLevelView($.__views.__alloyId15969);
    $.__views.__alloyId15970 = Ti.UI.createView({
        id: "__alloyId15970"
    });
    $.__views.__alloyId15969.add($.__views.__alloyId15970);
    $.__views.__alloyId15971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15971"
    });
    $.__views.__alloyId15970.add($.__views.__alloyId15971);
    $.__views.__alloyId15972 = Ti.UI.createView({
        id: "__alloyId15972"
    });
    $.__views.__alloyId15972 && $.addTopLevelView($.__views.__alloyId15972);
    $.__views.__alloyId15973 = Ti.UI.createView({
        id: "__alloyId15973"
    });
    $.__views.__alloyId15972.add($.__views.__alloyId15973);
    $.__views.__alloyId15974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15974"
    });
    $.__views.__alloyId15973.add($.__views.__alloyId15974);
    $.__views.__alloyId15975 = Ti.UI.createView({
        id: "__alloyId15975"
    });
    $.__views.__alloyId15975 && $.addTopLevelView($.__views.__alloyId15975);
    $.__views.__alloyId15976 = Ti.UI.createView({
        id: "__alloyId15976"
    });
    $.__views.__alloyId15975.add($.__views.__alloyId15976);
    $.__views.__alloyId15977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15977"
    });
    $.__views.__alloyId15976.add($.__views.__alloyId15977);
    $.__views.__alloyId15978 = Ti.UI.createView({
        id: "__alloyId15978"
    });
    $.__views.__alloyId15978 && $.addTopLevelView($.__views.__alloyId15978);
    $.__views.__alloyId15979 = Ti.UI.createView({
        id: "__alloyId15979"
    });
    $.__views.__alloyId15978.add($.__views.__alloyId15979);
    $.__views.__alloyId15980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15980"
    });
    $.__views.__alloyId15979.add($.__views.__alloyId15980);
    $.__views.__alloyId15981 = Ti.UI.createView({
        id: "__alloyId15981"
    });
    $.__views.__alloyId15981 && $.addTopLevelView($.__views.__alloyId15981);
    $.__views.__alloyId15982 = Ti.UI.createView({
        id: "__alloyId15982"
    });
    $.__views.__alloyId15981.add($.__views.__alloyId15982);
    $.__views.__alloyId15983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15983"
    });
    $.__views.__alloyId15982.add($.__views.__alloyId15983);
    $.__views.__alloyId15984 = Ti.UI.createView({
        id: "__alloyId15984"
    });
    $.__views.__alloyId15984 && $.addTopLevelView($.__views.__alloyId15984);
    $.__views.__alloyId15985 = Ti.UI.createView({
        id: "__alloyId15985"
    });
    $.__views.__alloyId15984.add($.__views.__alloyId15985);
    $.__views.__alloyId15986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15986"
    });
    $.__views.__alloyId15985.add($.__views.__alloyId15986);
    $.__views.__alloyId15987 = Ti.UI.createView({
        id: "__alloyId15987"
    });
    $.__views.__alloyId15987 && $.addTopLevelView($.__views.__alloyId15987);
    $.__views.__alloyId15988 = Ti.UI.createView({
        id: "__alloyId15988"
    });
    $.__views.__alloyId15987.add($.__views.__alloyId15988);
    $.__views.__alloyId15989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15989"
    });
    $.__views.__alloyId15988.add($.__views.__alloyId15989);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;