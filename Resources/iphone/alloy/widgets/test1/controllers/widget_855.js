function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_855";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_855 = Ti.UI.createView({
        id: "widget_855"
    });
    $.__views.widget_855 && $.addTopLevelView($.__views.widget_855);
    $.__views.__alloyId21866 = Ti.UI.createView({
        id: "__alloyId21866"
    });
    $.__views.widget_855.add($.__views.__alloyId21866);
    $.__views.__alloyId21867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21867"
    });
    $.__views.__alloyId21866.add($.__views.__alloyId21867);
    $.__views.__alloyId21868 = Ti.UI.createView({
        id: "__alloyId21868"
    });
    $.__views.__alloyId21868 && $.addTopLevelView($.__views.__alloyId21868);
    $.__views.__alloyId21869 = Ti.UI.createView({
        id: "__alloyId21869"
    });
    $.__views.__alloyId21868.add($.__views.__alloyId21869);
    $.__views.__alloyId21870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21870"
    });
    $.__views.__alloyId21869.add($.__views.__alloyId21870);
    $.__views.__alloyId21871 = Ti.UI.createView({
        id: "__alloyId21871"
    });
    $.__views.__alloyId21871 && $.addTopLevelView($.__views.__alloyId21871);
    $.__views.__alloyId21872 = Ti.UI.createView({
        id: "__alloyId21872"
    });
    $.__views.__alloyId21871.add($.__views.__alloyId21872);
    $.__views.__alloyId21873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21873"
    });
    $.__views.__alloyId21872.add($.__views.__alloyId21873);
    $.__views.__alloyId21874 = Ti.UI.createView({
        id: "__alloyId21874"
    });
    $.__views.__alloyId21874 && $.addTopLevelView($.__views.__alloyId21874);
    $.__views.__alloyId21875 = Ti.UI.createView({
        id: "__alloyId21875"
    });
    $.__views.__alloyId21874.add($.__views.__alloyId21875);
    $.__views.__alloyId21876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21876"
    });
    $.__views.__alloyId21875.add($.__views.__alloyId21876);
    $.__views.__alloyId21877 = Ti.UI.createView({
        id: "__alloyId21877"
    });
    $.__views.__alloyId21877 && $.addTopLevelView($.__views.__alloyId21877);
    $.__views.__alloyId21878 = Ti.UI.createView({
        id: "__alloyId21878"
    });
    $.__views.__alloyId21877.add($.__views.__alloyId21878);
    $.__views.__alloyId21879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21879"
    });
    $.__views.__alloyId21878.add($.__views.__alloyId21879);
    $.__views.__alloyId21880 = Ti.UI.createView({
        id: "__alloyId21880"
    });
    $.__views.__alloyId21880 && $.addTopLevelView($.__views.__alloyId21880);
    $.__views.__alloyId21881 = Ti.UI.createView({
        id: "__alloyId21881"
    });
    $.__views.__alloyId21880.add($.__views.__alloyId21881);
    $.__views.__alloyId21882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21882"
    });
    $.__views.__alloyId21881.add($.__views.__alloyId21882);
    $.__views.__alloyId21883 = Ti.UI.createView({
        id: "__alloyId21883"
    });
    $.__views.__alloyId21883 && $.addTopLevelView($.__views.__alloyId21883);
    $.__views.__alloyId21884 = Ti.UI.createView({
        id: "__alloyId21884"
    });
    $.__views.__alloyId21883.add($.__views.__alloyId21884);
    $.__views.__alloyId21885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21885"
    });
    $.__views.__alloyId21884.add($.__views.__alloyId21885);
    $.__views.__alloyId21886 = Ti.UI.createView({
        id: "__alloyId21886"
    });
    $.__views.__alloyId21886 && $.addTopLevelView($.__views.__alloyId21886);
    $.__views.__alloyId21887 = Ti.UI.createView({
        id: "__alloyId21887"
    });
    $.__views.__alloyId21886.add($.__views.__alloyId21887);
    $.__views.__alloyId21888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21888"
    });
    $.__views.__alloyId21887.add($.__views.__alloyId21888);
    $.__views.__alloyId21889 = Ti.UI.createView({
        id: "__alloyId21889"
    });
    $.__views.__alloyId21889 && $.addTopLevelView($.__views.__alloyId21889);
    $.__views.__alloyId21890 = Ti.UI.createView({
        id: "__alloyId21890"
    });
    $.__views.__alloyId21889.add($.__views.__alloyId21890);
    $.__views.__alloyId21891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21891"
    });
    $.__views.__alloyId21890.add($.__views.__alloyId21891);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;