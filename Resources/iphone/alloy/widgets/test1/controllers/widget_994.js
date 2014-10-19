function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_994";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_994 = Ti.UI.createView({
        id: "widget_994"
    });
    $.__views.widget_994 && $.addTopLevelView($.__views.widget_994);
    $.__views.__alloyId25870 = Ti.UI.createView({
        id: "__alloyId25870"
    });
    $.__views.widget_994.add($.__views.__alloyId25870);
    $.__views.__alloyId25871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25871"
    });
    $.__views.__alloyId25870.add($.__views.__alloyId25871);
    $.__views.__alloyId25872 = Ti.UI.createView({
        id: "__alloyId25872"
    });
    $.__views.__alloyId25872 && $.addTopLevelView($.__views.__alloyId25872);
    $.__views.__alloyId25873 = Ti.UI.createView({
        id: "__alloyId25873"
    });
    $.__views.__alloyId25872.add($.__views.__alloyId25873);
    $.__views.__alloyId25874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25874"
    });
    $.__views.__alloyId25873.add($.__views.__alloyId25874);
    $.__views.__alloyId25875 = Ti.UI.createView({
        id: "__alloyId25875"
    });
    $.__views.__alloyId25875 && $.addTopLevelView($.__views.__alloyId25875);
    $.__views.__alloyId25876 = Ti.UI.createView({
        id: "__alloyId25876"
    });
    $.__views.__alloyId25875.add($.__views.__alloyId25876);
    $.__views.__alloyId25877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25877"
    });
    $.__views.__alloyId25876.add($.__views.__alloyId25877);
    $.__views.__alloyId25878 = Ti.UI.createView({
        id: "__alloyId25878"
    });
    $.__views.__alloyId25878 && $.addTopLevelView($.__views.__alloyId25878);
    $.__views.__alloyId25879 = Ti.UI.createView({
        id: "__alloyId25879"
    });
    $.__views.__alloyId25878.add($.__views.__alloyId25879);
    $.__views.__alloyId25880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25880"
    });
    $.__views.__alloyId25879.add($.__views.__alloyId25880);
    $.__views.__alloyId25881 = Ti.UI.createView({
        id: "__alloyId25881"
    });
    $.__views.__alloyId25881 && $.addTopLevelView($.__views.__alloyId25881);
    $.__views.__alloyId25882 = Ti.UI.createView({
        id: "__alloyId25882"
    });
    $.__views.__alloyId25881.add($.__views.__alloyId25882);
    $.__views.__alloyId25883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25883"
    });
    $.__views.__alloyId25882.add($.__views.__alloyId25883);
    $.__views.__alloyId25884 = Ti.UI.createView({
        id: "__alloyId25884"
    });
    $.__views.__alloyId25884 && $.addTopLevelView($.__views.__alloyId25884);
    $.__views.__alloyId25885 = Ti.UI.createView({
        id: "__alloyId25885"
    });
    $.__views.__alloyId25884.add($.__views.__alloyId25885);
    $.__views.__alloyId25886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25886"
    });
    $.__views.__alloyId25885.add($.__views.__alloyId25886);
    $.__views.__alloyId25887 = Ti.UI.createView({
        id: "__alloyId25887"
    });
    $.__views.__alloyId25887 && $.addTopLevelView($.__views.__alloyId25887);
    $.__views.__alloyId25888 = Ti.UI.createView({
        id: "__alloyId25888"
    });
    $.__views.__alloyId25887.add($.__views.__alloyId25888);
    $.__views.__alloyId25889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25889"
    });
    $.__views.__alloyId25888.add($.__views.__alloyId25889);
    $.__views.__alloyId25890 = Ti.UI.createView({
        id: "__alloyId25890"
    });
    $.__views.__alloyId25890 && $.addTopLevelView($.__views.__alloyId25890);
    $.__views.__alloyId25891 = Ti.UI.createView({
        id: "__alloyId25891"
    });
    $.__views.__alloyId25890.add($.__views.__alloyId25891);
    $.__views.__alloyId25892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25892"
    });
    $.__views.__alloyId25891.add($.__views.__alloyId25892);
    $.__views.__alloyId25893 = Ti.UI.createView({
        id: "__alloyId25893"
    });
    $.__views.__alloyId25893 && $.addTopLevelView($.__views.__alloyId25893);
    $.__views.__alloyId25894 = Ti.UI.createView({
        id: "__alloyId25894"
    });
    $.__views.__alloyId25893.add($.__views.__alloyId25894);
    $.__views.__alloyId25895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25895"
    });
    $.__views.__alloyId25894.add($.__views.__alloyId25895);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;