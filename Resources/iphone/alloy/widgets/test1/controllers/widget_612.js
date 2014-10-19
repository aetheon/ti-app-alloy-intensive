function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_612";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_612 = Ti.UI.createView({
        id: "widget_612"
    });
    $.__views.widget_612 && $.addTopLevelView($.__views.widget_612);
    $.__views.__alloyId14872 = Ti.UI.createView({
        id: "__alloyId14872"
    });
    $.__views.widget_612.add($.__views.__alloyId14872);
    $.__views.__alloyId14873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14873"
    });
    $.__views.__alloyId14872.add($.__views.__alloyId14873);
    $.__views.__alloyId14874 = Ti.UI.createView({
        id: "__alloyId14874"
    });
    $.__views.__alloyId14874 && $.addTopLevelView($.__views.__alloyId14874);
    $.__views.__alloyId14875 = Ti.UI.createView({
        id: "__alloyId14875"
    });
    $.__views.__alloyId14874.add($.__views.__alloyId14875);
    $.__views.__alloyId14876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14876"
    });
    $.__views.__alloyId14875.add($.__views.__alloyId14876);
    $.__views.__alloyId14877 = Ti.UI.createView({
        id: "__alloyId14877"
    });
    $.__views.__alloyId14877 && $.addTopLevelView($.__views.__alloyId14877);
    $.__views.__alloyId14878 = Ti.UI.createView({
        id: "__alloyId14878"
    });
    $.__views.__alloyId14877.add($.__views.__alloyId14878);
    $.__views.__alloyId14879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14879"
    });
    $.__views.__alloyId14878.add($.__views.__alloyId14879);
    $.__views.__alloyId14880 = Ti.UI.createView({
        id: "__alloyId14880"
    });
    $.__views.__alloyId14880 && $.addTopLevelView($.__views.__alloyId14880);
    $.__views.__alloyId14881 = Ti.UI.createView({
        id: "__alloyId14881"
    });
    $.__views.__alloyId14880.add($.__views.__alloyId14881);
    $.__views.__alloyId14882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14882"
    });
    $.__views.__alloyId14881.add($.__views.__alloyId14882);
    $.__views.__alloyId14883 = Ti.UI.createView({
        id: "__alloyId14883"
    });
    $.__views.__alloyId14883 && $.addTopLevelView($.__views.__alloyId14883);
    $.__views.__alloyId14884 = Ti.UI.createView({
        id: "__alloyId14884"
    });
    $.__views.__alloyId14883.add($.__views.__alloyId14884);
    $.__views.__alloyId14885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14885"
    });
    $.__views.__alloyId14884.add($.__views.__alloyId14885);
    $.__views.__alloyId14886 = Ti.UI.createView({
        id: "__alloyId14886"
    });
    $.__views.__alloyId14886 && $.addTopLevelView($.__views.__alloyId14886);
    $.__views.__alloyId14887 = Ti.UI.createView({
        id: "__alloyId14887"
    });
    $.__views.__alloyId14886.add($.__views.__alloyId14887);
    $.__views.__alloyId14888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14888"
    });
    $.__views.__alloyId14887.add($.__views.__alloyId14888);
    $.__views.__alloyId14889 = Ti.UI.createView({
        id: "__alloyId14889"
    });
    $.__views.__alloyId14889 && $.addTopLevelView($.__views.__alloyId14889);
    $.__views.__alloyId14890 = Ti.UI.createView({
        id: "__alloyId14890"
    });
    $.__views.__alloyId14889.add($.__views.__alloyId14890);
    $.__views.__alloyId14891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14891"
    });
    $.__views.__alloyId14890.add($.__views.__alloyId14891);
    $.__views.__alloyId14892 = Ti.UI.createView({
        id: "__alloyId14892"
    });
    $.__views.__alloyId14892 && $.addTopLevelView($.__views.__alloyId14892);
    $.__views.__alloyId14893 = Ti.UI.createView({
        id: "__alloyId14893"
    });
    $.__views.__alloyId14892.add($.__views.__alloyId14893);
    $.__views.__alloyId14894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14894"
    });
    $.__views.__alloyId14893.add($.__views.__alloyId14894);
    $.__views.__alloyId14895 = Ti.UI.createView({
        id: "__alloyId14895"
    });
    $.__views.__alloyId14895 && $.addTopLevelView($.__views.__alloyId14895);
    $.__views.__alloyId14896 = Ti.UI.createView({
        id: "__alloyId14896"
    });
    $.__views.__alloyId14895.add($.__views.__alloyId14896);
    $.__views.__alloyId14897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14897"
    });
    $.__views.__alloyId14896.add($.__views.__alloyId14897);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;