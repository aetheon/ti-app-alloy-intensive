function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_335";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_335 = Ti.UI.createView({
        id: "widget_335"
    });
    $.__views.widget_335 && $.addTopLevelView($.__views.widget_335);
    $.__views.__alloyId6864 = Ti.UI.createView({
        id: "__alloyId6864"
    });
    $.__views.widget_335.add($.__views.__alloyId6864);
    $.__views.__alloyId6865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6865"
    });
    $.__views.__alloyId6864.add($.__views.__alloyId6865);
    $.__views.__alloyId6866 = Ti.UI.createView({
        id: "__alloyId6866"
    });
    $.__views.__alloyId6866 && $.addTopLevelView($.__views.__alloyId6866);
    $.__views.__alloyId6867 = Ti.UI.createView({
        id: "__alloyId6867"
    });
    $.__views.__alloyId6866.add($.__views.__alloyId6867);
    $.__views.__alloyId6868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6868"
    });
    $.__views.__alloyId6867.add($.__views.__alloyId6868);
    $.__views.__alloyId6869 = Ti.UI.createView({
        id: "__alloyId6869"
    });
    $.__views.__alloyId6869 && $.addTopLevelView($.__views.__alloyId6869);
    $.__views.__alloyId6870 = Ti.UI.createView({
        id: "__alloyId6870"
    });
    $.__views.__alloyId6869.add($.__views.__alloyId6870);
    $.__views.__alloyId6871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6871"
    });
    $.__views.__alloyId6870.add($.__views.__alloyId6871);
    $.__views.__alloyId6872 = Ti.UI.createView({
        id: "__alloyId6872"
    });
    $.__views.__alloyId6872 && $.addTopLevelView($.__views.__alloyId6872);
    $.__views.__alloyId6873 = Ti.UI.createView({
        id: "__alloyId6873"
    });
    $.__views.__alloyId6872.add($.__views.__alloyId6873);
    $.__views.__alloyId6874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6874"
    });
    $.__views.__alloyId6873.add($.__views.__alloyId6874);
    $.__views.__alloyId6875 = Ti.UI.createView({
        id: "__alloyId6875"
    });
    $.__views.__alloyId6875 && $.addTopLevelView($.__views.__alloyId6875);
    $.__views.__alloyId6876 = Ti.UI.createView({
        id: "__alloyId6876"
    });
    $.__views.__alloyId6875.add($.__views.__alloyId6876);
    $.__views.__alloyId6877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6877"
    });
    $.__views.__alloyId6876.add($.__views.__alloyId6877);
    $.__views.__alloyId6878 = Ti.UI.createView({
        id: "__alloyId6878"
    });
    $.__views.__alloyId6878 && $.addTopLevelView($.__views.__alloyId6878);
    $.__views.__alloyId6879 = Ti.UI.createView({
        id: "__alloyId6879"
    });
    $.__views.__alloyId6878.add($.__views.__alloyId6879);
    $.__views.__alloyId6880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6880"
    });
    $.__views.__alloyId6879.add($.__views.__alloyId6880);
    $.__views.__alloyId6881 = Ti.UI.createView({
        id: "__alloyId6881"
    });
    $.__views.__alloyId6881 && $.addTopLevelView($.__views.__alloyId6881);
    $.__views.__alloyId6882 = Ti.UI.createView({
        id: "__alloyId6882"
    });
    $.__views.__alloyId6881.add($.__views.__alloyId6882);
    $.__views.__alloyId6883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6883"
    });
    $.__views.__alloyId6882.add($.__views.__alloyId6883);
    $.__views.__alloyId6884 = Ti.UI.createView({
        id: "__alloyId6884"
    });
    $.__views.__alloyId6884 && $.addTopLevelView($.__views.__alloyId6884);
    $.__views.__alloyId6885 = Ti.UI.createView({
        id: "__alloyId6885"
    });
    $.__views.__alloyId6884.add($.__views.__alloyId6885);
    $.__views.__alloyId6886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6886"
    });
    $.__views.__alloyId6885.add($.__views.__alloyId6886);
    $.__views.__alloyId6887 = Ti.UI.createView({
        id: "__alloyId6887"
    });
    $.__views.__alloyId6887 && $.addTopLevelView($.__views.__alloyId6887);
    $.__views.__alloyId6888 = Ti.UI.createView({
        id: "__alloyId6888"
    });
    $.__views.__alloyId6887.add($.__views.__alloyId6888);
    $.__views.__alloyId6889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6889"
    });
    $.__views.__alloyId6888.add($.__views.__alloyId6889);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;