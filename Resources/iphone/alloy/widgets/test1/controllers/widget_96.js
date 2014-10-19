function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_96";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_96 = Ti.UI.createView({
        id: "widget_96"
    });
    $.__views.widget_96 && $.addTopLevelView($.__views.widget_96);
    $.__views.__alloyId24882 = Ti.UI.createView({
        id: "__alloyId24882"
    });
    $.__views.widget_96.add($.__views.__alloyId24882);
    $.__views.__alloyId24883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24883"
    });
    $.__views.__alloyId24882.add($.__views.__alloyId24883);
    $.__views.__alloyId24884 = Ti.UI.createView({
        id: "__alloyId24884"
    });
    $.__views.__alloyId24884 && $.addTopLevelView($.__views.__alloyId24884);
    $.__views.__alloyId24885 = Ti.UI.createView({
        id: "__alloyId24885"
    });
    $.__views.__alloyId24884.add($.__views.__alloyId24885);
    $.__views.__alloyId24886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24886"
    });
    $.__views.__alloyId24885.add($.__views.__alloyId24886);
    $.__views.__alloyId24887 = Ti.UI.createView({
        id: "__alloyId24887"
    });
    $.__views.__alloyId24887 && $.addTopLevelView($.__views.__alloyId24887);
    $.__views.__alloyId24888 = Ti.UI.createView({
        id: "__alloyId24888"
    });
    $.__views.__alloyId24887.add($.__views.__alloyId24888);
    $.__views.__alloyId24889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24889"
    });
    $.__views.__alloyId24888.add($.__views.__alloyId24889);
    $.__views.__alloyId24890 = Ti.UI.createView({
        id: "__alloyId24890"
    });
    $.__views.__alloyId24890 && $.addTopLevelView($.__views.__alloyId24890);
    $.__views.__alloyId24891 = Ti.UI.createView({
        id: "__alloyId24891"
    });
    $.__views.__alloyId24890.add($.__views.__alloyId24891);
    $.__views.__alloyId24892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24892"
    });
    $.__views.__alloyId24891.add($.__views.__alloyId24892);
    $.__views.__alloyId24893 = Ti.UI.createView({
        id: "__alloyId24893"
    });
    $.__views.__alloyId24893 && $.addTopLevelView($.__views.__alloyId24893);
    $.__views.__alloyId24894 = Ti.UI.createView({
        id: "__alloyId24894"
    });
    $.__views.__alloyId24893.add($.__views.__alloyId24894);
    $.__views.__alloyId24895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24895"
    });
    $.__views.__alloyId24894.add($.__views.__alloyId24895);
    $.__views.__alloyId24896 = Ti.UI.createView({
        id: "__alloyId24896"
    });
    $.__views.__alloyId24896 && $.addTopLevelView($.__views.__alloyId24896);
    $.__views.__alloyId24897 = Ti.UI.createView({
        id: "__alloyId24897"
    });
    $.__views.__alloyId24896.add($.__views.__alloyId24897);
    $.__views.__alloyId24898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24898"
    });
    $.__views.__alloyId24897.add($.__views.__alloyId24898);
    $.__views.__alloyId24899 = Ti.UI.createView({
        id: "__alloyId24899"
    });
    $.__views.__alloyId24899 && $.addTopLevelView($.__views.__alloyId24899);
    $.__views.__alloyId24900 = Ti.UI.createView({
        id: "__alloyId24900"
    });
    $.__views.__alloyId24899.add($.__views.__alloyId24900);
    $.__views.__alloyId24901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24901"
    });
    $.__views.__alloyId24900.add($.__views.__alloyId24901);
    $.__views.__alloyId24902 = Ti.UI.createView({
        id: "__alloyId24902"
    });
    $.__views.__alloyId24902 && $.addTopLevelView($.__views.__alloyId24902);
    $.__views.__alloyId24903 = Ti.UI.createView({
        id: "__alloyId24903"
    });
    $.__views.__alloyId24902.add($.__views.__alloyId24903);
    $.__views.__alloyId24904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24904"
    });
    $.__views.__alloyId24903.add($.__views.__alloyId24904);
    $.__views.__alloyId24905 = Ti.UI.createView({
        id: "__alloyId24905"
    });
    $.__views.__alloyId24905 && $.addTopLevelView($.__views.__alloyId24905);
    $.__views.__alloyId24906 = Ti.UI.createView({
        id: "__alloyId24906"
    });
    $.__views.__alloyId24905.add($.__views.__alloyId24906);
    $.__views.__alloyId24907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24907"
    });
    $.__views.__alloyId24906.add($.__views.__alloyId24907);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;