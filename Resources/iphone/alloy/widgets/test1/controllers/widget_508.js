function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_508";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_508 = Ti.UI.createView({
        id: "widget_508"
    });
    $.__views.widget_508 && $.addTopLevelView($.__views.widget_508);
    $.__views.__alloyId11856 = Ti.UI.createView({
        id: "__alloyId11856"
    });
    $.__views.widget_508.add($.__views.__alloyId11856);
    $.__views.__alloyId11857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11857"
    });
    $.__views.__alloyId11856.add($.__views.__alloyId11857);
    $.__views.__alloyId11858 = Ti.UI.createView({
        id: "__alloyId11858"
    });
    $.__views.__alloyId11858 && $.addTopLevelView($.__views.__alloyId11858);
    $.__views.__alloyId11859 = Ti.UI.createView({
        id: "__alloyId11859"
    });
    $.__views.__alloyId11858.add($.__views.__alloyId11859);
    $.__views.__alloyId11860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11860"
    });
    $.__views.__alloyId11859.add($.__views.__alloyId11860);
    $.__views.__alloyId11861 = Ti.UI.createView({
        id: "__alloyId11861"
    });
    $.__views.__alloyId11861 && $.addTopLevelView($.__views.__alloyId11861);
    $.__views.__alloyId11862 = Ti.UI.createView({
        id: "__alloyId11862"
    });
    $.__views.__alloyId11861.add($.__views.__alloyId11862);
    $.__views.__alloyId11863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11863"
    });
    $.__views.__alloyId11862.add($.__views.__alloyId11863);
    $.__views.__alloyId11864 = Ti.UI.createView({
        id: "__alloyId11864"
    });
    $.__views.__alloyId11864 && $.addTopLevelView($.__views.__alloyId11864);
    $.__views.__alloyId11865 = Ti.UI.createView({
        id: "__alloyId11865"
    });
    $.__views.__alloyId11864.add($.__views.__alloyId11865);
    $.__views.__alloyId11866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11866"
    });
    $.__views.__alloyId11865.add($.__views.__alloyId11866);
    $.__views.__alloyId11867 = Ti.UI.createView({
        id: "__alloyId11867"
    });
    $.__views.__alloyId11867 && $.addTopLevelView($.__views.__alloyId11867);
    $.__views.__alloyId11868 = Ti.UI.createView({
        id: "__alloyId11868"
    });
    $.__views.__alloyId11867.add($.__views.__alloyId11868);
    $.__views.__alloyId11869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11869"
    });
    $.__views.__alloyId11868.add($.__views.__alloyId11869);
    $.__views.__alloyId11870 = Ti.UI.createView({
        id: "__alloyId11870"
    });
    $.__views.__alloyId11870 && $.addTopLevelView($.__views.__alloyId11870);
    $.__views.__alloyId11871 = Ti.UI.createView({
        id: "__alloyId11871"
    });
    $.__views.__alloyId11870.add($.__views.__alloyId11871);
    $.__views.__alloyId11872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11872"
    });
    $.__views.__alloyId11871.add($.__views.__alloyId11872);
    $.__views.__alloyId11873 = Ti.UI.createView({
        id: "__alloyId11873"
    });
    $.__views.__alloyId11873 && $.addTopLevelView($.__views.__alloyId11873);
    $.__views.__alloyId11874 = Ti.UI.createView({
        id: "__alloyId11874"
    });
    $.__views.__alloyId11873.add($.__views.__alloyId11874);
    $.__views.__alloyId11875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11875"
    });
    $.__views.__alloyId11874.add($.__views.__alloyId11875);
    $.__views.__alloyId11876 = Ti.UI.createView({
        id: "__alloyId11876"
    });
    $.__views.__alloyId11876 && $.addTopLevelView($.__views.__alloyId11876);
    $.__views.__alloyId11877 = Ti.UI.createView({
        id: "__alloyId11877"
    });
    $.__views.__alloyId11876.add($.__views.__alloyId11877);
    $.__views.__alloyId11878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11878"
    });
    $.__views.__alloyId11877.add($.__views.__alloyId11878);
    $.__views.__alloyId11879 = Ti.UI.createView({
        id: "__alloyId11879"
    });
    $.__views.__alloyId11879 && $.addTopLevelView($.__views.__alloyId11879);
    $.__views.__alloyId11880 = Ti.UI.createView({
        id: "__alloyId11880"
    });
    $.__views.__alloyId11879.add($.__views.__alloyId11880);
    $.__views.__alloyId11881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11881"
    });
    $.__views.__alloyId11880.add($.__views.__alloyId11881);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;