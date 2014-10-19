function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_475";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_475 = Ti.UI.createView({
        id: "widget_475"
    });
    $.__views.widget_475 && $.addTopLevelView($.__views.widget_475);
    $.__views.__alloyId10894 = Ti.UI.createView({
        id: "__alloyId10894"
    });
    $.__views.widget_475.add($.__views.__alloyId10894);
    $.__views.__alloyId10895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10895"
    });
    $.__views.__alloyId10894.add($.__views.__alloyId10895);
    $.__views.__alloyId10896 = Ti.UI.createView({
        id: "__alloyId10896"
    });
    $.__views.__alloyId10896 && $.addTopLevelView($.__views.__alloyId10896);
    $.__views.__alloyId10897 = Ti.UI.createView({
        id: "__alloyId10897"
    });
    $.__views.__alloyId10896.add($.__views.__alloyId10897);
    $.__views.__alloyId10898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10898"
    });
    $.__views.__alloyId10897.add($.__views.__alloyId10898);
    $.__views.__alloyId10899 = Ti.UI.createView({
        id: "__alloyId10899"
    });
    $.__views.__alloyId10899 && $.addTopLevelView($.__views.__alloyId10899);
    $.__views.__alloyId10900 = Ti.UI.createView({
        id: "__alloyId10900"
    });
    $.__views.__alloyId10899.add($.__views.__alloyId10900);
    $.__views.__alloyId10901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10901"
    });
    $.__views.__alloyId10900.add($.__views.__alloyId10901);
    $.__views.__alloyId10902 = Ti.UI.createView({
        id: "__alloyId10902"
    });
    $.__views.__alloyId10902 && $.addTopLevelView($.__views.__alloyId10902);
    $.__views.__alloyId10903 = Ti.UI.createView({
        id: "__alloyId10903"
    });
    $.__views.__alloyId10902.add($.__views.__alloyId10903);
    $.__views.__alloyId10904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10904"
    });
    $.__views.__alloyId10903.add($.__views.__alloyId10904);
    $.__views.__alloyId10905 = Ti.UI.createView({
        id: "__alloyId10905"
    });
    $.__views.__alloyId10905 && $.addTopLevelView($.__views.__alloyId10905);
    $.__views.__alloyId10906 = Ti.UI.createView({
        id: "__alloyId10906"
    });
    $.__views.__alloyId10905.add($.__views.__alloyId10906);
    $.__views.__alloyId10907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10907"
    });
    $.__views.__alloyId10906.add($.__views.__alloyId10907);
    $.__views.__alloyId10908 = Ti.UI.createView({
        id: "__alloyId10908"
    });
    $.__views.__alloyId10908 && $.addTopLevelView($.__views.__alloyId10908);
    $.__views.__alloyId10909 = Ti.UI.createView({
        id: "__alloyId10909"
    });
    $.__views.__alloyId10908.add($.__views.__alloyId10909);
    $.__views.__alloyId10910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10910"
    });
    $.__views.__alloyId10909.add($.__views.__alloyId10910);
    $.__views.__alloyId10911 = Ti.UI.createView({
        id: "__alloyId10911"
    });
    $.__views.__alloyId10911 && $.addTopLevelView($.__views.__alloyId10911);
    $.__views.__alloyId10912 = Ti.UI.createView({
        id: "__alloyId10912"
    });
    $.__views.__alloyId10911.add($.__views.__alloyId10912);
    $.__views.__alloyId10913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10913"
    });
    $.__views.__alloyId10912.add($.__views.__alloyId10913);
    $.__views.__alloyId10914 = Ti.UI.createView({
        id: "__alloyId10914"
    });
    $.__views.__alloyId10914 && $.addTopLevelView($.__views.__alloyId10914);
    $.__views.__alloyId10915 = Ti.UI.createView({
        id: "__alloyId10915"
    });
    $.__views.__alloyId10914.add($.__views.__alloyId10915);
    $.__views.__alloyId10916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10916"
    });
    $.__views.__alloyId10915.add($.__views.__alloyId10916);
    $.__views.__alloyId10917 = Ti.UI.createView({
        id: "__alloyId10917"
    });
    $.__views.__alloyId10917 && $.addTopLevelView($.__views.__alloyId10917);
    $.__views.__alloyId10918 = Ti.UI.createView({
        id: "__alloyId10918"
    });
    $.__views.__alloyId10917.add($.__views.__alloyId10918);
    $.__views.__alloyId10919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10919"
    });
    $.__views.__alloyId10918.add($.__views.__alloyId10919);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;