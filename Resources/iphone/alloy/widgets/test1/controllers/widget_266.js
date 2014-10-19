function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_266";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_266 = Ti.UI.createView({
        id: "widget_266"
    });
    $.__views.widget_266 && $.addTopLevelView($.__views.widget_266);
    $.__views.__alloyId4862 = Ti.UI.createView({
        id: "__alloyId4862"
    });
    $.__views.widget_266.add($.__views.__alloyId4862);
    $.__views.__alloyId4863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4863"
    });
    $.__views.__alloyId4862.add($.__views.__alloyId4863);
    $.__views.__alloyId4864 = Ti.UI.createView({
        id: "__alloyId4864"
    });
    $.__views.__alloyId4864 && $.addTopLevelView($.__views.__alloyId4864);
    $.__views.__alloyId4865 = Ti.UI.createView({
        id: "__alloyId4865"
    });
    $.__views.__alloyId4864.add($.__views.__alloyId4865);
    $.__views.__alloyId4866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4866"
    });
    $.__views.__alloyId4865.add($.__views.__alloyId4866);
    $.__views.__alloyId4867 = Ti.UI.createView({
        id: "__alloyId4867"
    });
    $.__views.__alloyId4867 && $.addTopLevelView($.__views.__alloyId4867);
    $.__views.__alloyId4868 = Ti.UI.createView({
        id: "__alloyId4868"
    });
    $.__views.__alloyId4867.add($.__views.__alloyId4868);
    $.__views.__alloyId4869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4869"
    });
    $.__views.__alloyId4868.add($.__views.__alloyId4869);
    $.__views.__alloyId4870 = Ti.UI.createView({
        id: "__alloyId4870"
    });
    $.__views.__alloyId4870 && $.addTopLevelView($.__views.__alloyId4870);
    $.__views.__alloyId4871 = Ti.UI.createView({
        id: "__alloyId4871"
    });
    $.__views.__alloyId4870.add($.__views.__alloyId4871);
    $.__views.__alloyId4872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4872"
    });
    $.__views.__alloyId4871.add($.__views.__alloyId4872);
    $.__views.__alloyId4873 = Ti.UI.createView({
        id: "__alloyId4873"
    });
    $.__views.__alloyId4873 && $.addTopLevelView($.__views.__alloyId4873);
    $.__views.__alloyId4874 = Ti.UI.createView({
        id: "__alloyId4874"
    });
    $.__views.__alloyId4873.add($.__views.__alloyId4874);
    $.__views.__alloyId4875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4875"
    });
    $.__views.__alloyId4874.add($.__views.__alloyId4875);
    $.__views.__alloyId4876 = Ti.UI.createView({
        id: "__alloyId4876"
    });
    $.__views.__alloyId4876 && $.addTopLevelView($.__views.__alloyId4876);
    $.__views.__alloyId4877 = Ti.UI.createView({
        id: "__alloyId4877"
    });
    $.__views.__alloyId4876.add($.__views.__alloyId4877);
    $.__views.__alloyId4878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4878"
    });
    $.__views.__alloyId4877.add($.__views.__alloyId4878);
    $.__views.__alloyId4879 = Ti.UI.createView({
        id: "__alloyId4879"
    });
    $.__views.__alloyId4879 && $.addTopLevelView($.__views.__alloyId4879);
    $.__views.__alloyId4880 = Ti.UI.createView({
        id: "__alloyId4880"
    });
    $.__views.__alloyId4879.add($.__views.__alloyId4880);
    $.__views.__alloyId4881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4881"
    });
    $.__views.__alloyId4880.add($.__views.__alloyId4881);
    $.__views.__alloyId4882 = Ti.UI.createView({
        id: "__alloyId4882"
    });
    $.__views.__alloyId4882 && $.addTopLevelView($.__views.__alloyId4882);
    $.__views.__alloyId4883 = Ti.UI.createView({
        id: "__alloyId4883"
    });
    $.__views.__alloyId4882.add($.__views.__alloyId4883);
    $.__views.__alloyId4884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4884"
    });
    $.__views.__alloyId4883.add($.__views.__alloyId4884);
    $.__views.__alloyId4885 = Ti.UI.createView({
        id: "__alloyId4885"
    });
    $.__views.__alloyId4885 && $.addTopLevelView($.__views.__alloyId4885);
    $.__views.__alloyId4886 = Ti.UI.createView({
        id: "__alloyId4886"
    });
    $.__views.__alloyId4885.add($.__views.__alloyId4886);
    $.__views.__alloyId4887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4887"
    });
    $.__views.__alloyId4886.add($.__views.__alloyId4887);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;