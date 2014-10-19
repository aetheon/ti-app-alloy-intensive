function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_336";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_336 = Ti.UI.createView({
        id: "widget_336"
    });
    $.__views.widget_336 && $.addTopLevelView($.__views.widget_336);
    $.__views.__alloyId6890 = Ti.UI.createView({
        id: "__alloyId6890"
    });
    $.__views.widget_336.add($.__views.__alloyId6890);
    $.__views.__alloyId6891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6891"
    });
    $.__views.__alloyId6890.add($.__views.__alloyId6891);
    $.__views.__alloyId6892 = Ti.UI.createView({
        id: "__alloyId6892"
    });
    $.__views.__alloyId6892 && $.addTopLevelView($.__views.__alloyId6892);
    $.__views.__alloyId6893 = Ti.UI.createView({
        id: "__alloyId6893"
    });
    $.__views.__alloyId6892.add($.__views.__alloyId6893);
    $.__views.__alloyId6894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6894"
    });
    $.__views.__alloyId6893.add($.__views.__alloyId6894);
    $.__views.__alloyId6895 = Ti.UI.createView({
        id: "__alloyId6895"
    });
    $.__views.__alloyId6895 && $.addTopLevelView($.__views.__alloyId6895);
    $.__views.__alloyId6896 = Ti.UI.createView({
        id: "__alloyId6896"
    });
    $.__views.__alloyId6895.add($.__views.__alloyId6896);
    $.__views.__alloyId6897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6897"
    });
    $.__views.__alloyId6896.add($.__views.__alloyId6897);
    $.__views.__alloyId6898 = Ti.UI.createView({
        id: "__alloyId6898"
    });
    $.__views.__alloyId6898 && $.addTopLevelView($.__views.__alloyId6898);
    $.__views.__alloyId6899 = Ti.UI.createView({
        id: "__alloyId6899"
    });
    $.__views.__alloyId6898.add($.__views.__alloyId6899);
    $.__views.__alloyId6900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6900"
    });
    $.__views.__alloyId6899.add($.__views.__alloyId6900);
    $.__views.__alloyId6901 = Ti.UI.createView({
        id: "__alloyId6901"
    });
    $.__views.__alloyId6901 && $.addTopLevelView($.__views.__alloyId6901);
    $.__views.__alloyId6902 = Ti.UI.createView({
        id: "__alloyId6902"
    });
    $.__views.__alloyId6901.add($.__views.__alloyId6902);
    $.__views.__alloyId6903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6903"
    });
    $.__views.__alloyId6902.add($.__views.__alloyId6903);
    $.__views.__alloyId6904 = Ti.UI.createView({
        id: "__alloyId6904"
    });
    $.__views.__alloyId6904 && $.addTopLevelView($.__views.__alloyId6904);
    $.__views.__alloyId6905 = Ti.UI.createView({
        id: "__alloyId6905"
    });
    $.__views.__alloyId6904.add($.__views.__alloyId6905);
    $.__views.__alloyId6906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6906"
    });
    $.__views.__alloyId6905.add($.__views.__alloyId6906);
    $.__views.__alloyId6907 = Ti.UI.createView({
        id: "__alloyId6907"
    });
    $.__views.__alloyId6907 && $.addTopLevelView($.__views.__alloyId6907);
    $.__views.__alloyId6908 = Ti.UI.createView({
        id: "__alloyId6908"
    });
    $.__views.__alloyId6907.add($.__views.__alloyId6908);
    $.__views.__alloyId6909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6909"
    });
    $.__views.__alloyId6908.add($.__views.__alloyId6909);
    $.__views.__alloyId6910 = Ti.UI.createView({
        id: "__alloyId6910"
    });
    $.__views.__alloyId6910 && $.addTopLevelView($.__views.__alloyId6910);
    $.__views.__alloyId6911 = Ti.UI.createView({
        id: "__alloyId6911"
    });
    $.__views.__alloyId6910.add($.__views.__alloyId6911);
    $.__views.__alloyId6912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6912"
    });
    $.__views.__alloyId6911.add($.__views.__alloyId6912);
    $.__views.__alloyId6913 = Ti.UI.createView({
        id: "__alloyId6913"
    });
    $.__views.__alloyId6913 && $.addTopLevelView($.__views.__alloyId6913);
    $.__views.__alloyId6914 = Ti.UI.createView({
        id: "__alloyId6914"
    });
    $.__views.__alloyId6913.add($.__views.__alloyId6914);
    $.__views.__alloyId6915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6915"
    });
    $.__views.__alloyId6914.add($.__views.__alloyId6915);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;