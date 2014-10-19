function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_856";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_856 = Ti.UI.createView({
        id: "widget_856"
    });
    $.__views.widget_856 && $.addTopLevelView($.__views.widget_856);
    $.__views.__alloyId21892 = Ti.UI.createView({
        id: "__alloyId21892"
    });
    $.__views.widget_856.add($.__views.__alloyId21892);
    $.__views.__alloyId21893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21893"
    });
    $.__views.__alloyId21892.add($.__views.__alloyId21893);
    $.__views.__alloyId21894 = Ti.UI.createView({
        id: "__alloyId21894"
    });
    $.__views.__alloyId21894 && $.addTopLevelView($.__views.__alloyId21894);
    $.__views.__alloyId21895 = Ti.UI.createView({
        id: "__alloyId21895"
    });
    $.__views.__alloyId21894.add($.__views.__alloyId21895);
    $.__views.__alloyId21896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21896"
    });
    $.__views.__alloyId21895.add($.__views.__alloyId21896);
    $.__views.__alloyId21897 = Ti.UI.createView({
        id: "__alloyId21897"
    });
    $.__views.__alloyId21897 && $.addTopLevelView($.__views.__alloyId21897);
    $.__views.__alloyId21898 = Ti.UI.createView({
        id: "__alloyId21898"
    });
    $.__views.__alloyId21897.add($.__views.__alloyId21898);
    $.__views.__alloyId21899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21899"
    });
    $.__views.__alloyId21898.add($.__views.__alloyId21899);
    $.__views.__alloyId21900 = Ti.UI.createView({
        id: "__alloyId21900"
    });
    $.__views.__alloyId21900 && $.addTopLevelView($.__views.__alloyId21900);
    $.__views.__alloyId21901 = Ti.UI.createView({
        id: "__alloyId21901"
    });
    $.__views.__alloyId21900.add($.__views.__alloyId21901);
    $.__views.__alloyId21902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21902"
    });
    $.__views.__alloyId21901.add($.__views.__alloyId21902);
    $.__views.__alloyId21903 = Ti.UI.createView({
        id: "__alloyId21903"
    });
    $.__views.__alloyId21903 && $.addTopLevelView($.__views.__alloyId21903);
    $.__views.__alloyId21904 = Ti.UI.createView({
        id: "__alloyId21904"
    });
    $.__views.__alloyId21903.add($.__views.__alloyId21904);
    $.__views.__alloyId21905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21905"
    });
    $.__views.__alloyId21904.add($.__views.__alloyId21905);
    $.__views.__alloyId21906 = Ti.UI.createView({
        id: "__alloyId21906"
    });
    $.__views.__alloyId21906 && $.addTopLevelView($.__views.__alloyId21906);
    $.__views.__alloyId21907 = Ti.UI.createView({
        id: "__alloyId21907"
    });
    $.__views.__alloyId21906.add($.__views.__alloyId21907);
    $.__views.__alloyId21908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21908"
    });
    $.__views.__alloyId21907.add($.__views.__alloyId21908);
    $.__views.__alloyId21909 = Ti.UI.createView({
        id: "__alloyId21909"
    });
    $.__views.__alloyId21909 && $.addTopLevelView($.__views.__alloyId21909);
    $.__views.__alloyId21910 = Ti.UI.createView({
        id: "__alloyId21910"
    });
    $.__views.__alloyId21909.add($.__views.__alloyId21910);
    $.__views.__alloyId21911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21911"
    });
    $.__views.__alloyId21910.add($.__views.__alloyId21911);
    $.__views.__alloyId21912 = Ti.UI.createView({
        id: "__alloyId21912"
    });
    $.__views.__alloyId21912 && $.addTopLevelView($.__views.__alloyId21912);
    $.__views.__alloyId21913 = Ti.UI.createView({
        id: "__alloyId21913"
    });
    $.__views.__alloyId21912.add($.__views.__alloyId21913);
    $.__views.__alloyId21914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21914"
    });
    $.__views.__alloyId21913.add($.__views.__alloyId21914);
    $.__views.__alloyId21915 = Ti.UI.createView({
        id: "__alloyId21915"
    });
    $.__views.__alloyId21915 && $.addTopLevelView($.__views.__alloyId21915);
    $.__views.__alloyId21916 = Ti.UI.createView({
        id: "__alloyId21916"
    });
    $.__views.__alloyId21915.add($.__views.__alloyId21916);
    $.__views.__alloyId21917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21917"
    });
    $.__views.__alloyId21916.add($.__views.__alloyId21917);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;