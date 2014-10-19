function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_890";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_890 = Ti.UI.createView({
        id: "widget_890"
    });
    $.__views.widget_890 && $.addTopLevelView($.__views.widget_890);
    $.__views.__alloyId22880 = Ti.UI.createView({
        id: "__alloyId22880"
    });
    $.__views.widget_890.add($.__views.__alloyId22880);
    $.__views.__alloyId22881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22881"
    });
    $.__views.__alloyId22880.add($.__views.__alloyId22881);
    $.__views.__alloyId22882 = Ti.UI.createView({
        id: "__alloyId22882"
    });
    $.__views.__alloyId22882 && $.addTopLevelView($.__views.__alloyId22882);
    $.__views.__alloyId22883 = Ti.UI.createView({
        id: "__alloyId22883"
    });
    $.__views.__alloyId22882.add($.__views.__alloyId22883);
    $.__views.__alloyId22884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22884"
    });
    $.__views.__alloyId22883.add($.__views.__alloyId22884);
    $.__views.__alloyId22885 = Ti.UI.createView({
        id: "__alloyId22885"
    });
    $.__views.__alloyId22885 && $.addTopLevelView($.__views.__alloyId22885);
    $.__views.__alloyId22886 = Ti.UI.createView({
        id: "__alloyId22886"
    });
    $.__views.__alloyId22885.add($.__views.__alloyId22886);
    $.__views.__alloyId22887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22887"
    });
    $.__views.__alloyId22886.add($.__views.__alloyId22887);
    $.__views.__alloyId22888 = Ti.UI.createView({
        id: "__alloyId22888"
    });
    $.__views.__alloyId22888 && $.addTopLevelView($.__views.__alloyId22888);
    $.__views.__alloyId22889 = Ti.UI.createView({
        id: "__alloyId22889"
    });
    $.__views.__alloyId22888.add($.__views.__alloyId22889);
    $.__views.__alloyId22890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22890"
    });
    $.__views.__alloyId22889.add($.__views.__alloyId22890);
    $.__views.__alloyId22891 = Ti.UI.createView({
        id: "__alloyId22891"
    });
    $.__views.__alloyId22891 && $.addTopLevelView($.__views.__alloyId22891);
    $.__views.__alloyId22892 = Ti.UI.createView({
        id: "__alloyId22892"
    });
    $.__views.__alloyId22891.add($.__views.__alloyId22892);
    $.__views.__alloyId22893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22893"
    });
    $.__views.__alloyId22892.add($.__views.__alloyId22893);
    $.__views.__alloyId22894 = Ti.UI.createView({
        id: "__alloyId22894"
    });
    $.__views.__alloyId22894 && $.addTopLevelView($.__views.__alloyId22894);
    $.__views.__alloyId22895 = Ti.UI.createView({
        id: "__alloyId22895"
    });
    $.__views.__alloyId22894.add($.__views.__alloyId22895);
    $.__views.__alloyId22896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22896"
    });
    $.__views.__alloyId22895.add($.__views.__alloyId22896);
    $.__views.__alloyId22897 = Ti.UI.createView({
        id: "__alloyId22897"
    });
    $.__views.__alloyId22897 && $.addTopLevelView($.__views.__alloyId22897);
    $.__views.__alloyId22898 = Ti.UI.createView({
        id: "__alloyId22898"
    });
    $.__views.__alloyId22897.add($.__views.__alloyId22898);
    $.__views.__alloyId22899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22899"
    });
    $.__views.__alloyId22898.add($.__views.__alloyId22899);
    $.__views.__alloyId22900 = Ti.UI.createView({
        id: "__alloyId22900"
    });
    $.__views.__alloyId22900 && $.addTopLevelView($.__views.__alloyId22900);
    $.__views.__alloyId22901 = Ti.UI.createView({
        id: "__alloyId22901"
    });
    $.__views.__alloyId22900.add($.__views.__alloyId22901);
    $.__views.__alloyId22902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22902"
    });
    $.__views.__alloyId22901.add($.__views.__alloyId22902);
    $.__views.__alloyId22903 = Ti.UI.createView({
        id: "__alloyId22903"
    });
    $.__views.__alloyId22903 && $.addTopLevelView($.__views.__alloyId22903);
    $.__views.__alloyId22904 = Ti.UI.createView({
        id: "__alloyId22904"
    });
    $.__views.__alloyId22903.add($.__views.__alloyId22904);
    $.__views.__alloyId22905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22905"
    });
    $.__views.__alloyId22904.add($.__views.__alloyId22905);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;