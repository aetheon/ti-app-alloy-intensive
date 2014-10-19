function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_928";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_928 = Ti.UI.createView({
        id: "widget_928"
    });
    $.__views.widget_928 && $.addTopLevelView($.__views.widget_928);
    $.__views.__alloyId23972 = Ti.UI.createView({
        id: "__alloyId23972"
    });
    $.__views.widget_928.add($.__views.__alloyId23972);
    $.__views.__alloyId23973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23973"
    });
    $.__views.__alloyId23972.add($.__views.__alloyId23973);
    $.__views.__alloyId23974 = Ti.UI.createView({
        id: "__alloyId23974"
    });
    $.__views.__alloyId23974 && $.addTopLevelView($.__views.__alloyId23974);
    $.__views.__alloyId23975 = Ti.UI.createView({
        id: "__alloyId23975"
    });
    $.__views.__alloyId23974.add($.__views.__alloyId23975);
    $.__views.__alloyId23976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23976"
    });
    $.__views.__alloyId23975.add($.__views.__alloyId23976);
    $.__views.__alloyId23977 = Ti.UI.createView({
        id: "__alloyId23977"
    });
    $.__views.__alloyId23977 && $.addTopLevelView($.__views.__alloyId23977);
    $.__views.__alloyId23978 = Ti.UI.createView({
        id: "__alloyId23978"
    });
    $.__views.__alloyId23977.add($.__views.__alloyId23978);
    $.__views.__alloyId23979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23979"
    });
    $.__views.__alloyId23978.add($.__views.__alloyId23979);
    $.__views.__alloyId23980 = Ti.UI.createView({
        id: "__alloyId23980"
    });
    $.__views.__alloyId23980 && $.addTopLevelView($.__views.__alloyId23980);
    $.__views.__alloyId23981 = Ti.UI.createView({
        id: "__alloyId23981"
    });
    $.__views.__alloyId23980.add($.__views.__alloyId23981);
    $.__views.__alloyId23982 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23982"
    });
    $.__views.__alloyId23981.add($.__views.__alloyId23982);
    $.__views.__alloyId23983 = Ti.UI.createView({
        id: "__alloyId23983"
    });
    $.__views.__alloyId23983 && $.addTopLevelView($.__views.__alloyId23983);
    $.__views.__alloyId23984 = Ti.UI.createView({
        id: "__alloyId23984"
    });
    $.__views.__alloyId23983.add($.__views.__alloyId23984);
    $.__views.__alloyId23985 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23985"
    });
    $.__views.__alloyId23984.add($.__views.__alloyId23985);
    $.__views.__alloyId23986 = Ti.UI.createView({
        id: "__alloyId23986"
    });
    $.__views.__alloyId23986 && $.addTopLevelView($.__views.__alloyId23986);
    $.__views.__alloyId23987 = Ti.UI.createView({
        id: "__alloyId23987"
    });
    $.__views.__alloyId23986.add($.__views.__alloyId23987);
    $.__views.__alloyId23988 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23988"
    });
    $.__views.__alloyId23987.add($.__views.__alloyId23988);
    $.__views.__alloyId23989 = Ti.UI.createView({
        id: "__alloyId23989"
    });
    $.__views.__alloyId23989 && $.addTopLevelView($.__views.__alloyId23989);
    $.__views.__alloyId23990 = Ti.UI.createView({
        id: "__alloyId23990"
    });
    $.__views.__alloyId23989.add($.__views.__alloyId23990);
    $.__views.__alloyId23991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23991"
    });
    $.__views.__alloyId23990.add($.__views.__alloyId23991);
    $.__views.__alloyId23992 = Ti.UI.createView({
        id: "__alloyId23992"
    });
    $.__views.__alloyId23992 && $.addTopLevelView($.__views.__alloyId23992);
    $.__views.__alloyId23993 = Ti.UI.createView({
        id: "__alloyId23993"
    });
    $.__views.__alloyId23992.add($.__views.__alloyId23993);
    $.__views.__alloyId23994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23994"
    });
    $.__views.__alloyId23993.add($.__views.__alloyId23994);
    $.__views.__alloyId23995 = Ti.UI.createView({
        id: "__alloyId23995"
    });
    $.__views.__alloyId23995 && $.addTopLevelView($.__views.__alloyId23995);
    $.__views.__alloyId23996 = Ti.UI.createView({
        id: "__alloyId23996"
    });
    $.__views.__alloyId23995.add($.__views.__alloyId23996);
    $.__views.__alloyId23997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23997"
    });
    $.__views.__alloyId23996.add($.__views.__alloyId23997);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;