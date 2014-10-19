function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_683";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_683 = Ti.UI.createView({
        id: "widget_683"
    });
    $.__views.widget_683 && $.addTopLevelView($.__views.widget_683);
    $.__views.__alloyId16900 = Ti.UI.createView({
        id: "__alloyId16900"
    });
    $.__views.widget_683.add($.__views.__alloyId16900);
    $.__views.__alloyId16901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16901"
    });
    $.__views.__alloyId16900.add($.__views.__alloyId16901);
    $.__views.__alloyId16902 = Ti.UI.createView({
        id: "__alloyId16902"
    });
    $.__views.__alloyId16902 && $.addTopLevelView($.__views.__alloyId16902);
    $.__views.__alloyId16903 = Ti.UI.createView({
        id: "__alloyId16903"
    });
    $.__views.__alloyId16902.add($.__views.__alloyId16903);
    $.__views.__alloyId16904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16904"
    });
    $.__views.__alloyId16903.add($.__views.__alloyId16904);
    $.__views.__alloyId16905 = Ti.UI.createView({
        id: "__alloyId16905"
    });
    $.__views.__alloyId16905 && $.addTopLevelView($.__views.__alloyId16905);
    $.__views.__alloyId16906 = Ti.UI.createView({
        id: "__alloyId16906"
    });
    $.__views.__alloyId16905.add($.__views.__alloyId16906);
    $.__views.__alloyId16907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16907"
    });
    $.__views.__alloyId16906.add($.__views.__alloyId16907);
    $.__views.__alloyId16908 = Ti.UI.createView({
        id: "__alloyId16908"
    });
    $.__views.__alloyId16908 && $.addTopLevelView($.__views.__alloyId16908);
    $.__views.__alloyId16909 = Ti.UI.createView({
        id: "__alloyId16909"
    });
    $.__views.__alloyId16908.add($.__views.__alloyId16909);
    $.__views.__alloyId16910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16910"
    });
    $.__views.__alloyId16909.add($.__views.__alloyId16910);
    $.__views.__alloyId16911 = Ti.UI.createView({
        id: "__alloyId16911"
    });
    $.__views.__alloyId16911 && $.addTopLevelView($.__views.__alloyId16911);
    $.__views.__alloyId16912 = Ti.UI.createView({
        id: "__alloyId16912"
    });
    $.__views.__alloyId16911.add($.__views.__alloyId16912);
    $.__views.__alloyId16913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16913"
    });
    $.__views.__alloyId16912.add($.__views.__alloyId16913);
    $.__views.__alloyId16914 = Ti.UI.createView({
        id: "__alloyId16914"
    });
    $.__views.__alloyId16914 && $.addTopLevelView($.__views.__alloyId16914);
    $.__views.__alloyId16915 = Ti.UI.createView({
        id: "__alloyId16915"
    });
    $.__views.__alloyId16914.add($.__views.__alloyId16915);
    $.__views.__alloyId16916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16916"
    });
    $.__views.__alloyId16915.add($.__views.__alloyId16916);
    $.__views.__alloyId16917 = Ti.UI.createView({
        id: "__alloyId16917"
    });
    $.__views.__alloyId16917 && $.addTopLevelView($.__views.__alloyId16917);
    $.__views.__alloyId16918 = Ti.UI.createView({
        id: "__alloyId16918"
    });
    $.__views.__alloyId16917.add($.__views.__alloyId16918);
    $.__views.__alloyId16919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16919"
    });
    $.__views.__alloyId16918.add($.__views.__alloyId16919);
    $.__views.__alloyId16920 = Ti.UI.createView({
        id: "__alloyId16920"
    });
    $.__views.__alloyId16920 && $.addTopLevelView($.__views.__alloyId16920);
    $.__views.__alloyId16921 = Ti.UI.createView({
        id: "__alloyId16921"
    });
    $.__views.__alloyId16920.add($.__views.__alloyId16921);
    $.__views.__alloyId16922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16922"
    });
    $.__views.__alloyId16921.add($.__views.__alloyId16922);
    $.__views.__alloyId16923 = Ti.UI.createView({
        id: "__alloyId16923"
    });
    $.__views.__alloyId16923 && $.addTopLevelView($.__views.__alloyId16923);
    $.__views.__alloyId16924 = Ti.UI.createView({
        id: "__alloyId16924"
    });
    $.__views.__alloyId16923.add($.__views.__alloyId16924);
    $.__views.__alloyId16925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16925"
    });
    $.__views.__alloyId16924.add($.__views.__alloyId16925);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;