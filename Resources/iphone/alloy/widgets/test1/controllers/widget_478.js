function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_478";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_478 = Ti.UI.createView({
        id: "widget_478"
    });
    $.__views.widget_478 && $.addTopLevelView($.__views.widget_478);
    $.__views.__alloyId10972 = Ti.UI.createView({
        id: "__alloyId10972"
    });
    $.__views.widget_478.add($.__views.__alloyId10972);
    $.__views.__alloyId10973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10973"
    });
    $.__views.__alloyId10972.add($.__views.__alloyId10973);
    $.__views.__alloyId10974 = Ti.UI.createView({
        id: "__alloyId10974"
    });
    $.__views.__alloyId10974 && $.addTopLevelView($.__views.__alloyId10974);
    $.__views.__alloyId10975 = Ti.UI.createView({
        id: "__alloyId10975"
    });
    $.__views.__alloyId10974.add($.__views.__alloyId10975);
    $.__views.__alloyId10976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10976"
    });
    $.__views.__alloyId10975.add($.__views.__alloyId10976);
    $.__views.__alloyId10977 = Ti.UI.createView({
        id: "__alloyId10977"
    });
    $.__views.__alloyId10977 && $.addTopLevelView($.__views.__alloyId10977);
    $.__views.__alloyId10978 = Ti.UI.createView({
        id: "__alloyId10978"
    });
    $.__views.__alloyId10977.add($.__views.__alloyId10978);
    $.__views.__alloyId10979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10979"
    });
    $.__views.__alloyId10978.add($.__views.__alloyId10979);
    $.__views.__alloyId10980 = Ti.UI.createView({
        id: "__alloyId10980"
    });
    $.__views.__alloyId10980 && $.addTopLevelView($.__views.__alloyId10980);
    $.__views.__alloyId10981 = Ti.UI.createView({
        id: "__alloyId10981"
    });
    $.__views.__alloyId10980.add($.__views.__alloyId10981);
    $.__views.__alloyId10982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10982"
    });
    $.__views.__alloyId10981.add($.__views.__alloyId10982);
    $.__views.__alloyId10983 = Ti.UI.createView({
        id: "__alloyId10983"
    });
    $.__views.__alloyId10983 && $.addTopLevelView($.__views.__alloyId10983);
    $.__views.__alloyId10984 = Ti.UI.createView({
        id: "__alloyId10984"
    });
    $.__views.__alloyId10983.add($.__views.__alloyId10984);
    $.__views.__alloyId10985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10985"
    });
    $.__views.__alloyId10984.add($.__views.__alloyId10985);
    $.__views.__alloyId10986 = Ti.UI.createView({
        id: "__alloyId10986"
    });
    $.__views.__alloyId10986 && $.addTopLevelView($.__views.__alloyId10986);
    $.__views.__alloyId10987 = Ti.UI.createView({
        id: "__alloyId10987"
    });
    $.__views.__alloyId10986.add($.__views.__alloyId10987);
    $.__views.__alloyId10988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10988"
    });
    $.__views.__alloyId10987.add($.__views.__alloyId10988);
    $.__views.__alloyId10989 = Ti.UI.createView({
        id: "__alloyId10989"
    });
    $.__views.__alloyId10989 && $.addTopLevelView($.__views.__alloyId10989);
    $.__views.__alloyId10990 = Ti.UI.createView({
        id: "__alloyId10990"
    });
    $.__views.__alloyId10989.add($.__views.__alloyId10990);
    $.__views.__alloyId10991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10991"
    });
    $.__views.__alloyId10990.add($.__views.__alloyId10991);
    $.__views.__alloyId10992 = Ti.UI.createView({
        id: "__alloyId10992"
    });
    $.__views.__alloyId10992 && $.addTopLevelView($.__views.__alloyId10992);
    $.__views.__alloyId10993 = Ti.UI.createView({
        id: "__alloyId10993"
    });
    $.__views.__alloyId10992.add($.__views.__alloyId10993);
    $.__views.__alloyId10994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10994"
    });
    $.__views.__alloyId10993.add($.__views.__alloyId10994);
    $.__views.__alloyId10995 = Ti.UI.createView({
        id: "__alloyId10995"
    });
    $.__views.__alloyId10995 && $.addTopLevelView($.__views.__alloyId10995);
    $.__views.__alloyId10996 = Ti.UI.createView({
        id: "__alloyId10996"
    });
    $.__views.__alloyId10995.add($.__views.__alloyId10996);
    $.__views.__alloyId10997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10997"
    });
    $.__views.__alloyId10996.add($.__views.__alloyId10997);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;