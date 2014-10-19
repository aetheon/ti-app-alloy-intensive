function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_543";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_543 = Ti.UI.createView({
        id: "widget_543"
    });
    $.__views.widget_543 && $.addTopLevelView($.__views.widget_543);
    $.__views.__alloyId12870 = Ti.UI.createView({
        id: "__alloyId12870"
    });
    $.__views.widget_543.add($.__views.__alloyId12870);
    $.__views.__alloyId12871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12871"
    });
    $.__views.__alloyId12870.add($.__views.__alloyId12871);
    $.__views.__alloyId12872 = Ti.UI.createView({
        id: "__alloyId12872"
    });
    $.__views.__alloyId12872 && $.addTopLevelView($.__views.__alloyId12872);
    $.__views.__alloyId12873 = Ti.UI.createView({
        id: "__alloyId12873"
    });
    $.__views.__alloyId12872.add($.__views.__alloyId12873);
    $.__views.__alloyId12874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12874"
    });
    $.__views.__alloyId12873.add($.__views.__alloyId12874);
    $.__views.__alloyId12875 = Ti.UI.createView({
        id: "__alloyId12875"
    });
    $.__views.__alloyId12875 && $.addTopLevelView($.__views.__alloyId12875);
    $.__views.__alloyId12876 = Ti.UI.createView({
        id: "__alloyId12876"
    });
    $.__views.__alloyId12875.add($.__views.__alloyId12876);
    $.__views.__alloyId12877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12877"
    });
    $.__views.__alloyId12876.add($.__views.__alloyId12877);
    $.__views.__alloyId12878 = Ti.UI.createView({
        id: "__alloyId12878"
    });
    $.__views.__alloyId12878 && $.addTopLevelView($.__views.__alloyId12878);
    $.__views.__alloyId12879 = Ti.UI.createView({
        id: "__alloyId12879"
    });
    $.__views.__alloyId12878.add($.__views.__alloyId12879);
    $.__views.__alloyId12880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12880"
    });
    $.__views.__alloyId12879.add($.__views.__alloyId12880);
    $.__views.__alloyId12881 = Ti.UI.createView({
        id: "__alloyId12881"
    });
    $.__views.__alloyId12881 && $.addTopLevelView($.__views.__alloyId12881);
    $.__views.__alloyId12882 = Ti.UI.createView({
        id: "__alloyId12882"
    });
    $.__views.__alloyId12881.add($.__views.__alloyId12882);
    $.__views.__alloyId12883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12883"
    });
    $.__views.__alloyId12882.add($.__views.__alloyId12883);
    $.__views.__alloyId12884 = Ti.UI.createView({
        id: "__alloyId12884"
    });
    $.__views.__alloyId12884 && $.addTopLevelView($.__views.__alloyId12884);
    $.__views.__alloyId12885 = Ti.UI.createView({
        id: "__alloyId12885"
    });
    $.__views.__alloyId12884.add($.__views.__alloyId12885);
    $.__views.__alloyId12886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12886"
    });
    $.__views.__alloyId12885.add($.__views.__alloyId12886);
    $.__views.__alloyId12887 = Ti.UI.createView({
        id: "__alloyId12887"
    });
    $.__views.__alloyId12887 && $.addTopLevelView($.__views.__alloyId12887);
    $.__views.__alloyId12888 = Ti.UI.createView({
        id: "__alloyId12888"
    });
    $.__views.__alloyId12887.add($.__views.__alloyId12888);
    $.__views.__alloyId12889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12889"
    });
    $.__views.__alloyId12888.add($.__views.__alloyId12889);
    $.__views.__alloyId12890 = Ti.UI.createView({
        id: "__alloyId12890"
    });
    $.__views.__alloyId12890 && $.addTopLevelView($.__views.__alloyId12890);
    $.__views.__alloyId12891 = Ti.UI.createView({
        id: "__alloyId12891"
    });
    $.__views.__alloyId12890.add($.__views.__alloyId12891);
    $.__views.__alloyId12892 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12892"
    });
    $.__views.__alloyId12891.add($.__views.__alloyId12892);
    $.__views.__alloyId12893 = Ti.UI.createView({
        id: "__alloyId12893"
    });
    $.__views.__alloyId12893 && $.addTopLevelView($.__views.__alloyId12893);
    $.__views.__alloyId12894 = Ti.UI.createView({
        id: "__alloyId12894"
    });
    $.__views.__alloyId12893.add($.__views.__alloyId12894);
    $.__views.__alloyId12895 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12895"
    });
    $.__views.__alloyId12894.add($.__views.__alloyId12895);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;