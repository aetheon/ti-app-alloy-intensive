function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_404";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_404 = Ti.UI.createView({
        id: "widget_404"
    });
    $.__views.widget_404 && $.addTopLevelView($.__views.widget_404);
    $.__views.__alloyId8866 = Ti.UI.createView({
        id: "__alloyId8866"
    });
    $.__views.widget_404.add($.__views.__alloyId8866);
    $.__views.__alloyId8867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8867"
    });
    $.__views.__alloyId8866.add($.__views.__alloyId8867);
    $.__views.__alloyId8868 = Ti.UI.createView({
        id: "__alloyId8868"
    });
    $.__views.__alloyId8868 && $.addTopLevelView($.__views.__alloyId8868);
    $.__views.__alloyId8869 = Ti.UI.createView({
        id: "__alloyId8869"
    });
    $.__views.__alloyId8868.add($.__views.__alloyId8869);
    $.__views.__alloyId8870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8870"
    });
    $.__views.__alloyId8869.add($.__views.__alloyId8870);
    $.__views.__alloyId8871 = Ti.UI.createView({
        id: "__alloyId8871"
    });
    $.__views.__alloyId8871 && $.addTopLevelView($.__views.__alloyId8871);
    $.__views.__alloyId8872 = Ti.UI.createView({
        id: "__alloyId8872"
    });
    $.__views.__alloyId8871.add($.__views.__alloyId8872);
    $.__views.__alloyId8873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8873"
    });
    $.__views.__alloyId8872.add($.__views.__alloyId8873);
    $.__views.__alloyId8874 = Ti.UI.createView({
        id: "__alloyId8874"
    });
    $.__views.__alloyId8874 && $.addTopLevelView($.__views.__alloyId8874);
    $.__views.__alloyId8875 = Ti.UI.createView({
        id: "__alloyId8875"
    });
    $.__views.__alloyId8874.add($.__views.__alloyId8875);
    $.__views.__alloyId8876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8876"
    });
    $.__views.__alloyId8875.add($.__views.__alloyId8876);
    $.__views.__alloyId8877 = Ti.UI.createView({
        id: "__alloyId8877"
    });
    $.__views.__alloyId8877 && $.addTopLevelView($.__views.__alloyId8877);
    $.__views.__alloyId8878 = Ti.UI.createView({
        id: "__alloyId8878"
    });
    $.__views.__alloyId8877.add($.__views.__alloyId8878);
    $.__views.__alloyId8879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8879"
    });
    $.__views.__alloyId8878.add($.__views.__alloyId8879);
    $.__views.__alloyId8880 = Ti.UI.createView({
        id: "__alloyId8880"
    });
    $.__views.__alloyId8880 && $.addTopLevelView($.__views.__alloyId8880);
    $.__views.__alloyId8881 = Ti.UI.createView({
        id: "__alloyId8881"
    });
    $.__views.__alloyId8880.add($.__views.__alloyId8881);
    $.__views.__alloyId8882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8882"
    });
    $.__views.__alloyId8881.add($.__views.__alloyId8882);
    $.__views.__alloyId8883 = Ti.UI.createView({
        id: "__alloyId8883"
    });
    $.__views.__alloyId8883 && $.addTopLevelView($.__views.__alloyId8883);
    $.__views.__alloyId8884 = Ti.UI.createView({
        id: "__alloyId8884"
    });
    $.__views.__alloyId8883.add($.__views.__alloyId8884);
    $.__views.__alloyId8885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8885"
    });
    $.__views.__alloyId8884.add($.__views.__alloyId8885);
    $.__views.__alloyId8886 = Ti.UI.createView({
        id: "__alloyId8886"
    });
    $.__views.__alloyId8886 && $.addTopLevelView($.__views.__alloyId8886);
    $.__views.__alloyId8887 = Ti.UI.createView({
        id: "__alloyId8887"
    });
    $.__views.__alloyId8886.add($.__views.__alloyId8887);
    $.__views.__alloyId8888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8888"
    });
    $.__views.__alloyId8887.add($.__views.__alloyId8888);
    $.__views.__alloyId8889 = Ti.UI.createView({
        id: "__alloyId8889"
    });
    $.__views.__alloyId8889 && $.addTopLevelView($.__views.__alloyId8889);
    $.__views.__alloyId8890 = Ti.UI.createView({
        id: "__alloyId8890"
    });
    $.__views.__alloyId8889.add($.__views.__alloyId8890);
    $.__views.__alloyId8891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8891"
    });
    $.__views.__alloyId8890.add($.__views.__alloyId8891);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;