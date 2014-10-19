function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_820";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_820 = Ti.UI.createView({
        id: "widget_820"
    });
    $.__views.widget_820 && $.addTopLevelView($.__views.widget_820);
    $.__views.__alloyId20878 = Ti.UI.createView({
        id: "__alloyId20878"
    });
    $.__views.widget_820.add($.__views.__alloyId20878);
    $.__views.__alloyId20879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20879"
    });
    $.__views.__alloyId20878.add($.__views.__alloyId20879);
    $.__views.__alloyId20880 = Ti.UI.createView({
        id: "__alloyId20880"
    });
    $.__views.__alloyId20880 && $.addTopLevelView($.__views.__alloyId20880);
    $.__views.__alloyId20881 = Ti.UI.createView({
        id: "__alloyId20881"
    });
    $.__views.__alloyId20880.add($.__views.__alloyId20881);
    $.__views.__alloyId20882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20882"
    });
    $.__views.__alloyId20881.add($.__views.__alloyId20882);
    $.__views.__alloyId20883 = Ti.UI.createView({
        id: "__alloyId20883"
    });
    $.__views.__alloyId20883 && $.addTopLevelView($.__views.__alloyId20883);
    $.__views.__alloyId20884 = Ti.UI.createView({
        id: "__alloyId20884"
    });
    $.__views.__alloyId20883.add($.__views.__alloyId20884);
    $.__views.__alloyId20885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20885"
    });
    $.__views.__alloyId20884.add($.__views.__alloyId20885);
    $.__views.__alloyId20886 = Ti.UI.createView({
        id: "__alloyId20886"
    });
    $.__views.__alloyId20886 && $.addTopLevelView($.__views.__alloyId20886);
    $.__views.__alloyId20887 = Ti.UI.createView({
        id: "__alloyId20887"
    });
    $.__views.__alloyId20886.add($.__views.__alloyId20887);
    $.__views.__alloyId20888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20888"
    });
    $.__views.__alloyId20887.add($.__views.__alloyId20888);
    $.__views.__alloyId20889 = Ti.UI.createView({
        id: "__alloyId20889"
    });
    $.__views.__alloyId20889 && $.addTopLevelView($.__views.__alloyId20889);
    $.__views.__alloyId20890 = Ti.UI.createView({
        id: "__alloyId20890"
    });
    $.__views.__alloyId20889.add($.__views.__alloyId20890);
    $.__views.__alloyId20891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20891"
    });
    $.__views.__alloyId20890.add($.__views.__alloyId20891);
    $.__views.__alloyId20892 = Ti.UI.createView({
        id: "__alloyId20892"
    });
    $.__views.__alloyId20892 && $.addTopLevelView($.__views.__alloyId20892);
    $.__views.__alloyId20893 = Ti.UI.createView({
        id: "__alloyId20893"
    });
    $.__views.__alloyId20892.add($.__views.__alloyId20893);
    $.__views.__alloyId20894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20894"
    });
    $.__views.__alloyId20893.add($.__views.__alloyId20894);
    $.__views.__alloyId20895 = Ti.UI.createView({
        id: "__alloyId20895"
    });
    $.__views.__alloyId20895 && $.addTopLevelView($.__views.__alloyId20895);
    $.__views.__alloyId20896 = Ti.UI.createView({
        id: "__alloyId20896"
    });
    $.__views.__alloyId20895.add($.__views.__alloyId20896);
    $.__views.__alloyId20897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20897"
    });
    $.__views.__alloyId20896.add($.__views.__alloyId20897);
    $.__views.__alloyId20898 = Ti.UI.createView({
        id: "__alloyId20898"
    });
    $.__views.__alloyId20898 && $.addTopLevelView($.__views.__alloyId20898);
    $.__views.__alloyId20899 = Ti.UI.createView({
        id: "__alloyId20899"
    });
    $.__views.__alloyId20898.add($.__views.__alloyId20899);
    $.__views.__alloyId20900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20900"
    });
    $.__views.__alloyId20899.add($.__views.__alloyId20900);
    $.__views.__alloyId20901 = Ti.UI.createView({
        id: "__alloyId20901"
    });
    $.__views.__alloyId20901 && $.addTopLevelView($.__views.__alloyId20901);
    $.__views.__alloyId20902 = Ti.UI.createView({
        id: "__alloyId20902"
    });
    $.__views.__alloyId20901.add($.__views.__alloyId20902);
    $.__views.__alloyId20903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20903"
    });
    $.__views.__alloyId20902.add($.__views.__alloyId20903);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;