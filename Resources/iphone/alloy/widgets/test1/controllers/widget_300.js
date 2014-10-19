function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_300";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_300 = Ti.UI.createView({
        id: "widget_300"
    });
    $.__views.widget_300 && $.addTopLevelView($.__views.widget_300);
    $.__views.__alloyId5876 = Ti.UI.createView({
        id: "__alloyId5876"
    });
    $.__views.widget_300.add($.__views.__alloyId5876);
    $.__views.__alloyId5877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5877"
    });
    $.__views.__alloyId5876.add($.__views.__alloyId5877);
    $.__views.__alloyId5878 = Ti.UI.createView({
        id: "__alloyId5878"
    });
    $.__views.__alloyId5878 && $.addTopLevelView($.__views.__alloyId5878);
    $.__views.__alloyId5879 = Ti.UI.createView({
        id: "__alloyId5879"
    });
    $.__views.__alloyId5878.add($.__views.__alloyId5879);
    $.__views.__alloyId5880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5880"
    });
    $.__views.__alloyId5879.add($.__views.__alloyId5880);
    $.__views.__alloyId5881 = Ti.UI.createView({
        id: "__alloyId5881"
    });
    $.__views.__alloyId5881 && $.addTopLevelView($.__views.__alloyId5881);
    $.__views.__alloyId5882 = Ti.UI.createView({
        id: "__alloyId5882"
    });
    $.__views.__alloyId5881.add($.__views.__alloyId5882);
    $.__views.__alloyId5883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5883"
    });
    $.__views.__alloyId5882.add($.__views.__alloyId5883);
    $.__views.__alloyId5884 = Ti.UI.createView({
        id: "__alloyId5884"
    });
    $.__views.__alloyId5884 && $.addTopLevelView($.__views.__alloyId5884);
    $.__views.__alloyId5885 = Ti.UI.createView({
        id: "__alloyId5885"
    });
    $.__views.__alloyId5884.add($.__views.__alloyId5885);
    $.__views.__alloyId5886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5886"
    });
    $.__views.__alloyId5885.add($.__views.__alloyId5886);
    $.__views.__alloyId5887 = Ti.UI.createView({
        id: "__alloyId5887"
    });
    $.__views.__alloyId5887 && $.addTopLevelView($.__views.__alloyId5887);
    $.__views.__alloyId5888 = Ti.UI.createView({
        id: "__alloyId5888"
    });
    $.__views.__alloyId5887.add($.__views.__alloyId5888);
    $.__views.__alloyId5889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5889"
    });
    $.__views.__alloyId5888.add($.__views.__alloyId5889);
    $.__views.__alloyId5890 = Ti.UI.createView({
        id: "__alloyId5890"
    });
    $.__views.__alloyId5890 && $.addTopLevelView($.__views.__alloyId5890);
    $.__views.__alloyId5891 = Ti.UI.createView({
        id: "__alloyId5891"
    });
    $.__views.__alloyId5890.add($.__views.__alloyId5891);
    $.__views.__alloyId5892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5892"
    });
    $.__views.__alloyId5891.add($.__views.__alloyId5892);
    $.__views.__alloyId5893 = Ti.UI.createView({
        id: "__alloyId5893"
    });
    $.__views.__alloyId5893 && $.addTopLevelView($.__views.__alloyId5893);
    $.__views.__alloyId5894 = Ti.UI.createView({
        id: "__alloyId5894"
    });
    $.__views.__alloyId5893.add($.__views.__alloyId5894);
    $.__views.__alloyId5895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5895"
    });
    $.__views.__alloyId5894.add($.__views.__alloyId5895);
    $.__views.__alloyId5896 = Ti.UI.createView({
        id: "__alloyId5896"
    });
    $.__views.__alloyId5896 && $.addTopLevelView($.__views.__alloyId5896);
    $.__views.__alloyId5897 = Ti.UI.createView({
        id: "__alloyId5897"
    });
    $.__views.__alloyId5896.add($.__views.__alloyId5897);
    $.__views.__alloyId5898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5898"
    });
    $.__views.__alloyId5897.add($.__views.__alloyId5898);
    $.__views.__alloyId5899 = Ti.UI.createView({
        id: "__alloyId5899"
    });
    $.__views.__alloyId5899 && $.addTopLevelView($.__views.__alloyId5899);
    $.__views.__alloyId5900 = Ti.UI.createView({
        id: "__alloyId5900"
    });
    $.__views.__alloyId5899.add($.__views.__alloyId5900);
    $.__views.__alloyId5901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5901"
    });
    $.__views.__alloyId5900.add($.__views.__alloyId5901);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;