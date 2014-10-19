function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_474";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_474 = Ti.UI.createView({
        id: "widget_474"
    });
    $.__views.widget_474 && $.addTopLevelView($.__views.widget_474);
    $.__views.__alloyId10868 = Ti.UI.createView({
        id: "__alloyId10868"
    });
    $.__views.widget_474.add($.__views.__alloyId10868);
    $.__views.__alloyId10869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10869"
    });
    $.__views.__alloyId10868.add($.__views.__alloyId10869);
    $.__views.__alloyId10870 = Ti.UI.createView({
        id: "__alloyId10870"
    });
    $.__views.__alloyId10870 && $.addTopLevelView($.__views.__alloyId10870);
    $.__views.__alloyId10871 = Ti.UI.createView({
        id: "__alloyId10871"
    });
    $.__views.__alloyId10870.add($.__views.__alloyId10871);
    $.__views.__alloyId10872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10872"
    });
    $.__views.__alloyId10871.add($.__views.__alloyId10872);
    $.__views.__alloyId10873 = Ti.UI.createView({
        id: "__alloyId10873"
    });
    $.__views.__alloyId10873 && $.addTopLevelView($.__views.__alloyId10873);
    $.__views.__alloyId10874 = Ti.UI.createView({
        id: "__alloyId10874"
    });
    $.__views.__alloyId10873.add($.__views.__alloyId10874);
    $.__views.__alloyId10875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10875"
    });
    $.__views.__alloyId10874.add($.__views.__alloyId10875);
    $.__views.__alloyId10876 = Ti.UI.createView({
        id: "__alloyId10876"
    });
    $.__views.__alloyId10876 && $.addTopLevelView($.__views.__alloyId10876);
    $.__views.__alloyId10877 = Ti.UI.createView({
        id: "__alloyId10877"
    });
    $.__views.__alloyId10876.add($.__views.__alloyId10877);
    $.__views.__alloyId10878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10878"
    });
    $.__views.__alloyId10877.add($.__views.__alloyId10878);
    $.__views.__alloyId10879 = Ti.UI.createView({
        id: "__alloyId10879"
    });
    $.__views.__alloyId10879 && $.addTopLevelView($.__views.__alloyId10879);
    $.__views.__alloyId10880 = Ti.UI.createView({
        id: "__alloyId10880"
    });
    $.__views.__alloyId10879.add($.__views.__alloyId10880);
    $.__views.__alloyId10881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10881"
    });
    $.__views.__alloyId10880.add($.__views.__alloyId10881);
    $.__views.__alloyId10882 = Ti.UI.createView({
        id: "__alloyId10882"
    });
    $.__views.__alloyId10882 && $.addTopLevelView($.__views.__alloyId10882);
    $.__views.__alloyId10883 = Ti.UI.createView({
        id: "__alloyId10883"
    });
    $.__views.__alloyId10882.add($.__views.__alloyId10883);
    $.__views.__alloyId10884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10884"
    });
    $.__views.__alloyId10883.add($.__views.__alloyId10884);
    $.__views.__alloyId10885 = Ti.UI.createView({
        id: "__alloyId10885"
    });
    $.__views.__alloyId10885 && $.addTopLevelView($.__views.__alloyId10885);
    $.__views.__alloyId10886 = Ti.UI.createView({
        id: "__alloyId10886"
    });
    $.__views.__alloyId10885.add($.__views.__alloyId10886);
    $.__views.__alloyId10887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10887"
    });
    $.__views.__alloyId10886.add($.__views.__alloyId10887);
    $.__views.__alloyId10888 = Ti.UI.createView({
        id: "__alloyId10888"
    });
    $.__views.__alloyId10888 && $.addTopLevelView($.__views.__alloyId10888);
    $.__views.__alloyId10889 = Ti.UI.createView({
        id: "__alloyId10889"
    });
    $.__views.__alloyId10888.add($.__views.__alloyId10889);
    $.__views.__alloyId10890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10890"
    });
    $.__views.__alloyId10889.add($.__views.__alloyId10890);
    $.__views.__alloyId10891 = Ti.UI.createView({
        id: "__alloyId10891"
    });
    $.__views.__alloyId10891 && $.addTopLevelView($.__views.__alloyId10891);
    $.__views.__alloyId10892 = Ti.UI.createView({
        id: "__alloyId10892"
    });
    $.__views.__alloyId10891.add($.__views.__alloyId10892);
    $.__views.__alloyId10893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10893"
    });
    $.__views.__alloyId10892.add($.__views.__alloyId10893);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;