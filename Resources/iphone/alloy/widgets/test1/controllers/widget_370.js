function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_370";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_370 = Ti.UI.createView({
        id: "widget_370"
    });
    $.__views.widget_370 && $.addTopLevelView($.__views.widget_370);
    $.__views.__alloyId7878 = Ti.UI.createView({
        id: "__alloyId7878"
    });
    $.__views.widget_370.add($.__views.__alloyId7878);
    $.__views.__alloyId7879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7879"
    });
    $.__views.__alloyId7878.add($.__views.__alloyId7879);
    $.__views.__alloyId7880 = Ti.UI.createView({
        id: "__alloyId7880"
    });
    $.__views.__alloyId7880 && $.addTopLevelView($.__views.__alloyId7880);
    $.__views.__alloyId7881 = Ti.UI.createView({
        id: "__alloyId7881"
    });
    $.__views.__alloyId7880.add($.__views.__alloyId7881);
    $.__views.__alloyId7882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7882"
    });
    $.__views.__alloyId7881.add($.__views.__alloyId7882);
    $.__views.__alloyId7883 = Ti.UI.createView({
        id: "__alloyId7883"
    });
    $.__views.__alloyId7883 && $.addTopLevelView($.__views.__alloyId7883);
    $.__views.__alloyId7884 = Ti.UI.createView({
        id: "__alloyId7884"
    });
    $.__views.__alloyId7883.add($.__views.__alloyId7884);
    $.__views.__alloyId7885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7885"
    });
    $.__views.__alloyId7884.add($.__views.__alloyId7885);
    $.__views.__alloyId7886 = Ti.UI.createView({
        id: "__alloyId7886"
    });
    $.__views.__alloyId7886 && $.addTopLevelView($.__views.__alloyId7886);
    $.__views.__alloyId7887 = Ti.UI.createView({
        id: "__alloyId7887"
    });
    $.__views.__alloyId7886.add($.__views.__alloyId7887);
    $.__views.__alloyId7888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7888"
    });
    $.__views.__alloyId7887.add($.__views.__alloyId7888);
    $.__views.__alloyId7889 = Ti.UI.createView({
        id: "__alloyId7889"
    });
    $.__views.__alloyId7889 && $.addTopLevelView($.__views.__alloyId7889);
    $.__views.__alloyId7890 = Ti.UI.createView({
        id: "__alloyId7890"
    });
    $.__views.__alloyId7889.add($.__views.__alloyId7890);
    $.__views.__alloyId7891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7891"
    });
    $.__views.__alloyId7890.add($.__views.__alloyId7891);
    $.__views.__alloyId7892 = Ti.UI.createView({
        id: "__alloyId7892"
    });
    $.__views.__alloyId7892 && $.addTopLevelView($.__views.__alloyId7892);
    $.__views.__alloyId7893 = Ti.UI.createView({
        id: "__alloyId7893"
    });
    $.__views.__alloyId7892.add($.__views.__alloyId7893);
    $.__views.__alloyId7894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7894"
    });
    $.__views.__alloyId7893.add($.__views.__alloyId7894);
    $.__views.__alloyId7895 = Ti.UI.createView({
        id: "__alloyId7895"
    });
    $.__views.__alloyId7895 && $.addTopLevelView($.__views.__alloyId7895);
    $.__views.__alloyId7896 = Ti.UI.createView({
        id: "__alloyId7896"
    });
    $.__views.__alloyId7895.add($.__views.__alloyId7896);
    $.__views.__alloyId7897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7897"
    });
    $.__views.__alloyId7896.add($.__views.__alloyId7897);
    $.__views.__alloyId7898 = Ti.UI.createView({
        id: "__alloyId7898"
    });
    $.__views.__alloyId7898 && $.addTopLevelView($.__views.__alloyId7898);
    $.__views.__alloyId7899 = Ti.UI.createView({
        id: "__alloyId7899"
    });
    $.__views.__alloyId7898.add($.__views.__alloyId7899);
    $.__views.__alloyId7900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7900"
    });
    $.__views.__alloyId7899.add($.__views.__alloyId7900);
    $.__views.__alloyId7901 = Ti.UI.createView({
        id: "__alloyId7901"
    });
    $.__views.__alloyId7901 && $.addTopLevelView($.__views.__alloyId7901);
    $.__views.__alloyId7902 = Ti.UI.createView({
        id: "__alloyId7902"
    });
    $.__views.__alloyId7901.add($.__views.__alloyId7902);
    $.__views.__alloyId7903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7903"
    });
    $.__views.__alloyId7902.add($.__views.__alloyId7903);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;