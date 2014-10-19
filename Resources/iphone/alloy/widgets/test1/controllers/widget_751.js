function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_751";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_751 = Ti.UI.createView({
        id: "widget_751"
    });
    $.__views.widget_751 && $.addTopLevelView($.__views.widget_751);
    $.__views.__alloyId18876 = Ti.UI.createView({
        id: "__alloyId18876"
    });
    $.__views.widget_751.add($.__views.__alloyId18876);
    $.__views.__alloyId18877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18877"
    });
    $.__views.__alloyId18876.add($.__views.__alloyId18877);
    $.__views.__alloyId18878 = Ti.UI.createView({
        id: "__alloyId18878"
    });
    $.__views.__alloyId18878 && $.addTopLevelView($.__views.__alloyId18878);
    $.__views.__alloyId18879 = Ti.UI.createView({
        id: "__alloyId18879"
    });
    $.__views.__alloyId18878.add($.__views.__alloyId18879);
    $.__views.__alloyId18880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18880"
    });
    $.__views.__alloyId18879.add($.__views.__alloyId18880);
    $.__views.__alloyId18881 = Ti.UI.createView({
        id: "__alloyId18881"
    });
    $.__views.__alloyId18881 && $.addTopLevelView($.__views.__alloyId18881);
    $.__views.__alloyId18882 = Ti.UI.createView({
        id: "__alloyId18882"
    });
    $.__views.__alloyId18881.add($.__views.__alloyId18882);
    $.__views.__alloyId18883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18883"
    });
    $.__views.__alloyId18882.add($.__views.__alloyId18883);
    $.__views.__alloyId18884 = Ti.UI.createView({
        id: "__alloyId18884"
    });
    $.__views.__alloyId18884 && $.addTopLevelView($.__views.__alloyId18884);
    $.__views.__alloyId18885 = Ti.UI.createView({
        id: "__alloyId18885"
    });
    $.__views.__alloyId18884.add($.__views.__alloyId18885);
    $.__views.__alloyId18886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18886"
    });
    $.__views.__alloyId18885.add($.__views.__alloyId18886);
    $.__views.__alloyId18887 = Ti.UI.createView({
        id: "__alloyId18887"
    });
    $.__views.__alloyId18887 && $.addTopLevelView($.__views.__alloyId18887);
    $.__views.__alloyId18888 = Ti.UI.createView({
        id: "__alloyId18888"
    });
    $.__views.__alloyId18887.add($.__views.__alloyId18888);
    $.__views.__alloyId18889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18889"
    });
    $.__views.__alloyId18888.add($.__views.__alloyId18889);
    $.__views.__alloyId18890 = Ti.UI.createView({
        id: "__alloyId18890"
    });
    $.__views.__alloyId18890 && $.addTopLevelView($.__views.__alloyId18890);
    $.__views.__alloyId18891 = Ti.UI.createView({
        id: "__alloyId18891"
    });
    $.__views.__alloyId18890.add($.__views.__alloyId18891);
    $.__views.__alloyId18892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18892"
    });
    $.__views.__alloyId18891.add($.__views.__alloyId18892);
    $.__views.__alloyId18893 = Ti.UI.createView({
        id: "__alloyId18893"
    });
    $.__views.__alloyId18893 && $.addTopLevelView($.__views.__alloyId18893);
    $.__views.__alloyId18894 = Ti.UI.createView({
        id: "__alloyId18894"
    });
    $.__views.__alloyId18893.add($.__views.__alloyId18894);
    $.__views.__alloyId18895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18895"
    });
    $.__views.__alloyId18894.add($.__views.__alloyId18895);
    $.__views.__alloyId18896 = Ti.UI.createView({
        id: "__alloyId18896"
    });
    $.__views.__alloyId18896 && $.addTopLevelView($.__views.__alloyId18896);
    $.__views.__alloyId18897 = Ti.UI.createView({
        id: "__alloyId18897"
    });
    $.__views.__alloyId18896.add($.__views.__alloyId18897);
    $.__views.__alloyId18898 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18898"
    });
    $.__views.__alloyId18897.add($.__views.__alloyId18898);
    $.__views.__alloyId18899 = Ti.UI.createView({
        id: "__alloyId18899"
    });
    $.__views.__alloyId18899 && $.addTopLevelView($.__views.__alloyId18899);
    $.__views.__alloyId18900 = Ti.UI.createView({
        id: "__alloyId18900"
    });
    $.__views.__alloyId18899.add($.__views.__alloyId18900);
    $.__views.__alloyId18901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18901"
    });
    $.__views.__alloyId18900.add($.__views.__alloyId18901);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;