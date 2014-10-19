function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_925";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_925 = Ti.UI.createView({
        id: "widget_925"
    });
    $.__views.widget_925 && $.addTopLevelView($.__views.widget_925);
    $.__views.__alloyId23894 = Ti.UI.createView({
        id: "__alloyId23894"
    });
    $.__views.widget_925.add($.__views.__alloyId23894);
    $.__views.__alloyId23895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23895"
    });
    $.__views.__alloyId23894.add($.__views.__alloyId23895);
    $.__views.__alloyId23896 = Ti.UI.createView({
        id: "__alloyId23896"
    });
    $.__views.__alloyId23896 && $.addTopLevelView($.__views.__alloyId23896);
    $.__views.__alloyId23897 = Ti.UI.createView({
        id: "__alloyId23897"
    });
    $.__views.__alloyId23896.add($.__views.__alloyId23897);
    $.__views.__alloyId23898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23898"
    });
    $.__views.__alloyId23897.add($.__views.__alloyId23898);
    $.__views.__alloyId23899 = Ti.UI.createView({
        id: "__alloyId23899"
    });
    $.__views.__alloyId23899 && $.addTopLevelView($.__views.__alloyId23899);
    $.__views.__alloyId23900 = Ti.UI.createView({
        id: "__alloyId23900"
    });
    $.__views.__alloyId23899.add($.__views.__alloyId23900);
    $.__views.__alloyId23901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23901"
    });
    $.__views.__alloyId23900.add($.__views.__alloyId23901);
    $.__views.__alloyId23902 = Ti.UI.createView({
        id: "__alloyId23902"
    });
    $.__views.__alloyId23902 && $.addTopLevelView($.__views.__alloyId23902);
    $.__views.__alloyId23903 = Ti.UI.createView({
        id: "__alloyId23903"
    });
    $.__views.__alloyId23902.add($.__views.__alloyId23903);
    $.__views.__alloyId23904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23904"
    });
    $.__views.__alloyId23903.add($.__views.__alloyId23904);
    $.__views.__alloyId23905 = Ti.UI.createView({
        id: "__alloyId23905"
    });
    $.__views.__alloyId23905 && $.addTopLevelView($.__views.__alloyId23905);
    $.__views.__alloyId23906 = Ti.UI.createView({
        id: "__alloyId23906"
    });
    $.__views.__alloyId23905.add($.__views.__alloyId23906);
    $.__views.__alloyId23907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23907"
    });
    $.__views.__alloyId23906.add($.__views.__alloyId23907);
    $.__views.__alloyId23908 = Ti.UI.createView({
        id: "__alloyId23908"
    });
    $.__views.__alloyId23908 && $.addTopLevelView($.__views.__alloyId23908);
    $.__views.__alloyId23909 = Ti.UI.createView({
        id: "__alloyId23909"
    });
    $.__views.__alloyId23908.add($.__views.__alloyId23909);
    $.__views.__alloyId23910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23910"
    });
    $.__views.__alloyId23909.add($.__views.__alloyId23910);
    $.__views.__alloyId23911 = Ti.UI.createView({
        id: "__alloyId23911"
    });
    $.__views.__alloyId23911 && $.addTopLevelView($.__views.__alloyId23911);
    $.__views.__alloyId23912 = Ti.UI.createView({
        id: "__alloyId23912"
    });
    $.__views.__alloyId23911.add($.__views.__alloyId23912);
    $.__views.__alloyId23913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23913"
    });
    $.__views.__alloyId23912.add($.__views.__alloyId23913);
    $.__views.__alloyId23914 = Ti.UI.createView({
        id: "__alloyId23914"
    });
    $.__views.__alloyId23914 && $.addTopLevelView($.__views.__alloyId23914);
    $.__views.__alloyId23915 = Ti.UI.createView({
        id: "__alloyId23915"
    });
    $.__views.__alloyId23914.add($.__views.__alloyId23915);
    $.__views.__alloyId23916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23916"
    });
    $.__views.__alloyId23915.add($.__views.__alloyId23916);
    $.__views.__alloyId23917 = Ti.UI.createView({
        id: "__alloyId23917"
    });
    $.__views.__alloyId23917 && $.addTopLevelView($.__views.__alloyId23917);
    $.__views.__alloyId23918 = Ti.UI.createView({
        id: "__alloyId23918"
    });
    $.__views.__alloyId23917.add($.__views.__alloyId23918);
    $.__views.__alloyId23919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23919"
    });
    $.__views.__alloyId23918.add($.__views.__alloyId23919);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;