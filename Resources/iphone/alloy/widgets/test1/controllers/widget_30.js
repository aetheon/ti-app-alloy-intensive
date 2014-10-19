function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_30";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_30 = Ti.UI.createView({
        id: "widget_30"
    });
    $.__views.widget_30 && $.addTopLevelView($.__views.widget_30);
    $.__views.__alloyId5850 = Ti.UI.createView({
        id: "__alloyId5850"
    });
    $.__views.widget_30.add($.__views.__alloyId5850);
    $.__views.__alloyId5851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5851"
    });
    $.__views.__alloyId5850.add($.__views.__alloyId5851);
    $.__views.__alloyId5852 = Ti.UI.createView({
        id: "__alloyId5852"
    });
    $.__views.__alloyId5852 && $.addTopLevelView($.__views.__alloyId5852);
    $.__views.__alloyId5853 = Ti.UI.createView({
        id: "__alloyId5853"
    });
    $.__views.__alloyId5852.add($.__views.__alloyId5853);
    $.__views.__alloyId5854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5854"
    });
    $.__views.__alloyId5853.add($.__views.__alloyId5854);
    $.__views.__alloyId5855 = Ti.UI.createView({
        id: "__alloyId5855"
    });
    $.__views.__alloyId5855 && $.addTopLevelView($.__views.__alloyId5855);
    $.__views.__alloyId5856 = Ti.UI.createView({
        id: "__alloyId5856"
    });
    $.__views.__alloyId5855.add($.__views.__alloyId5856);
    $.__views.__alloyId5857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5857"
    });
    $.__views.__alloyId5856.add($.__views.__alloyId5857);
    $.__views.__alloyId5858 = Ti.UI.createView({
        id: "__alloyId5858"
    });
    $.__views.__alloyId5858 && $.addTopLevelView($.__views.__alloyId5858);
    $.__views.__alloyId5859 = Ti.UI.createView({
        id: "__alloyId5859"
    });
    $.__views.__alloyId5858.add($.__views.__alloyId5859);
    $.__views.__alloyId5860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5860"
    });
    $.__views.__alloyId5859.add($.__views.__alloyId5860);
    $.__views.__alloyId5861 = Ti.UI.createView({
        id: "__alloyId5861"
    });
    $.__views.__alloyId5861 && $.addTopLevelView($.__views.__alloyId5861);
    $.__views.__alloyId5862 = Ti.UI.createView({
        id: "__alloyId5862"
    });
    $.__views.__alloyId5861.add($.__views.__alloyId5862);
    $.__views.__alloyId5863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5863"
    });
    $.__views.__alloyId5862.add($.__views.__alloyId5863);
    $.__views.__alloyId5864 = Ti.UI.createView({
        id: "__alloyId5864"
    });
    $.__views.__alloyId5864 && $.addTopLevelView($.__views.__alloyId5864);
    $.__views.__alloyId5865 = Ti.UI.createView({
        id: "__alloyId5865"
    });
    $.__views.__alloyId5864.add($.__views.__alloyId5865);
    $.__views.__alloyId5866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5866"
    });
    $.__views.__alloyId5865.add($.__views.__alloyId5866);
    $.__views.__alloyId5867 = Ti.UI.createView({
        id: "__alloyId5867"
    });
    $.__views.__alloyId5867 && $.addTopLevelView($.__views.__alloyId5867);
    $.__views.__alloyId5868 = Ti.UI.createView({
        id: "__alloyId5868"
    });
    $.__views.__alloyId5867.add($.__views.__alloyId5868);
    $.__views.__alloyId5869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5869"
    });
    $.__views.__alloyId5868.add($.__views.__alloyId5869);
    $.__views.__alloyId5870 = Ti.UI.createView({
        id: "__alloyId5870"
    });
    $.__views.__alloyId5870 && $.addTopLevelView($.__views.__alloyId5870);
    $.__views.__alloyId5871 = Ti.UI.createView({
        id: "__alloyId5871"
    });
    $.__views.__alloyId5870.add($.__views.__alloyId5871);
    $.__views.__alloyId5872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5872"
    });
    $.__views.__alloyId5871.add($.__views.__alloyId5872);
    $.__views.__alloyId5873 = Ti.UI.createView({
        id: "__alloyId5873"
    });
    $.__views.__alloyId5873 && $.addTopLevelView($.__views.__alloyId5873);
    $.__views.__alloyId5874 = Ti.UI.createView({
        id: "__alloyId5874"
    });
    $.__views.__alloyId5873.add($.__views.__alloyId5874);
    $.__views.__alloyId5875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5875"
    });
    $.__views.__alloyId5874.add($.__views.__alloyId5875);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;