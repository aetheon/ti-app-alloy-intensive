function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_231";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_231 = Ti.UI.createView({
        id: "widget_231"
    });
    $.__views.widget_231 && $.addTopLevelView($.__views.widget_231);
    $.__views.__alloyId3874 = Ti.UI.createView({
        id: "__alloyId3874"
    });
    $.__views.widget_231.add($.__views.__alloyId3874);
    $.__views.__alloyId3875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3875"
    });
    $.__views.__alloyId3874.add($.__views.__alloyId3875);
    $.__views.__alloyId3876 = Ti.UI.createView({
        id: "__alloyId3876"
    });
    $.__views.__alloyId3876 && $.addTopLevelView($.__views.__alloyId3876);
    $.__views.__alloyId3877 = Ti.UI.createView({
        id: "__alloyId3877"
    });
    $.__views.__alloyId3876.add($.__views.__alloyId3877);
    $.__views.__alloyId3878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3878"
    });
    $.__views.__alloyId3877.add($.__views.__alloyId3878);
    $.__views.__alloyId3879 = Ti.UI.createView({
        id: "__alloyId3879"
    });
    $.__views.__alloyId3879 && $.addTopLevelView($.__views.__alloyId3879);
    $.__views.__alloyId3880 = Ti.UI.createView({
        id: "__alloyId3880"
    });
    $.__views.__alloyId3879.add($.__views.__alloyId3880);
    $.__views.__alloyId3881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3881"
    });
    $.__views.__alloyId3880.add($.__views.__alloyId3881);
    $.__views.__alloyId3882 = Ti.UI.createView({
        id: "__alloyId3882"
    });
    $.__views.__alloyId3882 && $.addTopLevelView($.__views.__alloyId3882);
    $.__views.__alloyId3883 = Ti.UI.createView({
        id: "__alloyId3883"
    });
    $.__views.__alloyId3882.add($.__views.__alloyId3883);
    $.__views.__alloyId3884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3884"
    });
    $.__views.__alloyId3883.add($.__views.__alloyId3884);
    $.__views.__alloyId3885 = Ti.UI.createView({
        id: "__alloyId3885"
    });
    $.__views.__alloyId3885 && $.addTopLevelView($.__views.__alloyId3885);
    $.__views.__alloyId3886 = Ti.UI.createView({
        id: "__alloyId3886"
    });
    $.__views.__alloyId3885.add($.__views.__alloyId3886);
    $.__views.__alloyId3887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3887"
    });
    $.__views.__alloyId3886.add($.__views.__alloyId3887);
    $.__views.__alloyId3888 = Ti.UI.createView({
        id: "__alloyId3888"
    });
    $.__views.__alloyId3888 && $.addTopLevelView($.__views.__alloyId3888);
    $.__views.__alloyId3889 = Ti.UI.createView({
        id: "__alloyId3889"
    });
    $.__views.__alloyId3888.add($.__views.__alloyId3889);
    $.__views.__alloyId3890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3890"
    });
    $.__views.__alloyId3889.add($.__views.__alloyId3890);
    $.__views.__alloyId3891 = Ti.UI.createView({
        id: "__alloyId3891"
    });
    $.__views.__alloyId3891 && $.addTopLevelView($.__views.__alloyId3891);
    $.__views.__alloyId3892 = Ti.UI.createView({
        id: "__alloyId3892"
    });
    $.__views.__alloyId3891.add($.__views.__alloyId3892);
    $.__views.__alloyId3893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3893"
    });
    $.__views.__alloyId3892.add($.__views.__alloyId3893);
    $.__views.__alloyId3894 = Ti.UI.createView({
        id: "__alloyId3894"
    });
    $.__views.__alloyId3894 && $.addTopLevelView($.__views.__alloyId3894);
    $.__views.__alloyId3895 = Ti.UI.createView({
        id: "__alloyId3895"
    });
    $.__views.__alloyId3894.add($.__views.__alloyId3895);
    $.__views.__alloyId3896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3896"
    });
    $.__views.__alloyId3895.add($.__views.__alloyId3896);
    $.__views.__alloyId3897 = Ti.UI.createView({
        id: "__alloyId3897"
    });
    $.__views.__alloyId3897 && $.addTopLevelView($.__views.__alloyId3897);
    $.__views.__alloyId3898 = Ti.UI.createView({
        id: "__alloyId3898"
    });
    $.__views.__alloyId3897.add($.__views.__alloyId3898);
    $.__views.__alloyId3899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3899"
    });
    $.__views.__alloyId3898.add($.__views.__alloyId3899);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;