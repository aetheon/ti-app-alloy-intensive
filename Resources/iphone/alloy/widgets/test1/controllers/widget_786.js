function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_786";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_786 = Ti.UI.createView({
        id: "widget_786"
    });
    $.__views.widget_786 && $.addTopLevelView($.__views.widget_786);
    $.__views.__alloyId19864 = Ti.UI.createView({
        id: "__alloyId19864"
    });
    $.__views.widget_786.add($.__views.__alloyId19864);
    $.__views.__alloyId19865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19865"
    });
    $.__views.__alloyId19864.add($.__views.__alloyId19865);
    $.__views.__alloyId19866 = Ti.UI.createView({
        id: "__alloyId19866"
    });
    $.__views.__alloyId19866 && $.addTopLevelView($.__views.__alloyId19866);
    $.__views.__alloyId19867 = Ti.UI.createView({
        id: "__alloyId19867"
    });
    $.__views.__alloyId19866.add($.__views.__alloyId19867);
    $.__views.__alloyId19868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19868"
    });
    $.__views.__alloyId19867.add($.__views.__alloyId19868);
    $.__views.__alloyId19869 = Ti.UI.createView({
        id: "__alloyId19869"
    });
    $.__views.__alloyId19869 && $.addTopLevelView($.__views.__alloyId19869);
    $.__views.__alloyId19870 = Ti.UI.createView({
        id: "__alloyId19870"
    });
    $.__views.__alloyId19869.add($.__views.__alloyId19870);
    $.__views.__alloyId19871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19871"
    });
    $.__views.__alloyId19870.add($.__views.__alloyId19871);
    $.__views.__alloyId19872 = Ti.UI.createView({
        id: "__alloyId19872"
    });
    $.__views.__alloyId19872 && $.addTopLevelView($.__views.__alloyId19872);
    $.__views.__alloyId19873 = Ti.UI.createView({
        id: "__alloyId19873"
    });
    $.__views.__alloyId19872.add($.__views.__alloyId19873);
    $.__views.__alloyId19874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19874"
    });
    $.__views.__alloyId19873.add($.__views.__alloyId19874);
    $.__views.__alloyId19875 = Ti.UI.createView({
        id: "__alloyId19875"
    });
    $.__views.__alloyId19875 && $.addTopLevelView($.__views.__alloyId19875);
    $.__views.__alloyId19876 = Ti.UI.createView({
        id: "__alloyId19876"
    });
    $.__views.__alloyId19875.add($.__views.__alloyId19876);
    $.__views.__alloyId19877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19877"
    });
    $.__views.__alloyId19876.add($.__views.__alloyId19877);
    $.__views.__alloyId19878 = Ti.UI.createView({
        id: "__alloyId19878"
    });
    $.__views.__alloyId19878 && $.addTopLevelView($.__views.__alloyId19878);
    $.__views.__alloyId19879 = Ti.UI.createView({
        id: "__alloyId19879"
    });
    $.__views.__alloyId19878.add($.__views.__alloyId19879);
    $.__views.__alloyId19880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19880"
    });
    $.__views.__alloyId19879.add($.__views.__alloyId19880);
    $.__views.__alloyId19881 = Ti.UI.createView({
        id: "__alloyId19881"
    });
    $.__views.__alloyId19881 && $.addTopLevelView($.__views.__alloyId19881);
    $.__views.__alloyId19882 = Ti.UI.createView({
        id: "__alloyId19882"
    });
    $.__views.__alloyId19881.add($.__views.__alloyId19882);
    $.__views.__alloyId19883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19883"
    });
    $.__views.__alloyId19882.add($.__views.__alloyId19883);
    $.__views.__alloyId19884 = Ti.UI.createView({
        id: "__alloyId19884"
    });
    $.__views.__alloyId19884 && $.addTopLevelView($.__views.__alloyId19884);
    $.__views.__alloyId19885 = Ti.UI.createView({
        id: "__alloyId19885"
    });
    $.__views.__alloyId19884.add($.__views.__alloyId19885);
    $.__views.__alloyId19886 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19886"
    });
    $.__views.__alloyId19885.add($.__views.__alloyId19886);
    $.__views.__alloyId19887 = Ti.UI.createView({
        id: "__alloyId19887"
    });
    $.__views.__alloyId19887 && $.addTopLevelView($.__views.__alloyId19887);
    $.__views.__alloyId19888 = Ti.UI.createView({
        id: "__alloyId19888"
    });
    $.__views.__alloyId19887.add($.__views.__alloyId19888);
    $.__views.__alloyId19889 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19889"
    });
    $.__views.__alloyId19888.add($.__views.__alloyId19889);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;