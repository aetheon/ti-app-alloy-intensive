function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_924";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_924 = Ti.UI.createView({
        id: "widget_924"
    });
    $.__views.widget_924 && $.addTopLevelView($.__views.widget_924);
    $.__views.__alloyId23868 = Ti.UI.createView({
        id: "__alloyId23868"
    });
    $.__views.widget_924.add($.__views.__alloyId23868);
    $.__views.__alloyId23869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23869"
    });
    $.__views.__alloyId23868.add($.__views.__alloyId23869);
    $.__views.__alloyId23870 = Ti.UI.createView({
        id: "__alloyId23870"
    });
    $.__views.__alloyId23870 && $.addTopLevelView($.__views.__alloyId23870);
    $.__views.__alloyId23871 = Ti.UI.createView({
        id: "__alloyId23871"
    });
    $.__views.__alloyId23870.add($.__views.__alloyId23871);
    $.__views.__alloyId23872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23872"
    });
    $.__views.__alloyId23871.add($.__views.__alloyId23872);
    $.__views.__alloyId23873 = Ti.UI.createView({
        id: "__alloyId23873"
    });
    $.__views.__alloyId23873 && $.addTopLevelView($.__views.__alloyId23873);
    $.__views.__alloyId23874 = Ti.UI.createView({
        id: "__alloyId23874"
    });
    $.__views.__alloyId23873.add($.__views.__alloyId23874);
    $.__views.__alloyId23875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23875"
    });
    $.__views.__alloyId23874.add($.__views.__alloyId23875);
    $.__views.__alloyId23876 = Ti.UI.createView({
        id: "__alloyId23876"
    });
    $.__views.__alloyId23876 && $.addTopLevelView($.__views.__alloyId23876);
    $.__views.__alloyId23877 = Ti.UI.createView({
        id: "__alloyId23877"
    });
    $.__views.__alloyId23876.add($.__views.__alloyId23877);
    $.__views.__alloyId23878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23878"
    });
    $.__views.__alloyId23877.add($.__views.__alloyId23878);
    $.__views.__alloyId23879 = Ti.UI.createView({
        id: "__alloyId23879"
    });
    $.__views.__alloyId23879 && $.addTopLevelView($.__views.__alloyId23879);
    $.__views.__alloyId23880 = Ti.UI.createView({
        id: "__alloyId23880"
    });
    $.__views.__alloyId23879.add($.__views.__alloyId23880);
    $.__views.__alloyId23881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23881"
    });
    $.__views.__alloyId23880.add($.__views.__alloyId23881);
    $.__views.__alloyId23882 = Ti.UI.createView({
        id: "__alloyId23882"
    });
    $.__views.__alloyId23882 && $.addTopLevelView($.__views.__alloyId23882);
    $.__views.__alloyId23883 = Ti.UI.createView({
        id: "__alloyId23883"
    });
    $.__views.__alloyId23882.add($.__views.__alloyId23883);
    $.__views.__alloyId23884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23884"
    });
    $.__views.__alloyId23883.add($.__views.__alloyId23884);
    $.__views.__alloyId23885 = Ti.UI.createView({
        id: "__alloyId23885"
    });
    $.__views.__alloyId23885 && $.addTopLevelView($.__views.__alloyId23885);
    $.__views.__alloyId23886 = Ti.UI.createView({
        id: "__alloyId23886"
    });
    $.__views.__alloyId23885.add($.__views.__alloyId23886);
    $.__views.__alloyId23887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23887"
    });
    $.__views.__alloyId23886.add($.__views.__alloyId23887);
    $.__views.__alloyId23888 = Ti.UI.createView({
        id: "__alloyId23888"
    });
    $.__views.__alloyId23888 && $.addTopLevelView($.__views.__alloyId23888);
    $.__views.__alloyId23889 = Ti.UI.createView({
        id: "__alloyId23889"
    });
    $.__views.__alloyId23888.add($.__views.__alloyId23889);
    $.__views.__alloyId23890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23890"
    });
    $.__views.__alloyId23889.add($.__views.__alloyId23890);
    $.__views.__alloyId23891 = Ti.UI.createView({
        id: "__alloyId23891"
    });
    $.__views.__alloyId23891 && $.addTopLevelView($.__views.__alloyId23891);
    $.__views.__alloyId23892 = Ti.UI.createView({
        id: "__alloyId23892"
    });
    $.__views.__alloyId23891.add($.__views.__alloyId23892);
    $.__views.__alloyId23893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23893"
    });
    $.__views.__alloyId23892.add($.__views.__alloyId23893);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;