function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_959";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_959 = Ti.UI.createView({
        id: "widget_959"
    });
    $.__views.widget_959 && $.addTopLevelView($.__views.widget_959);
    $.__views.__alloyId24856 = Ti.UI.createView({
        id: "__alloyId24856"
    });
    $.__views.widget_959.add($.__views.__alloyId24856);
    $.__views.__alloyId24857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24857"
    });
    $.__views.__alloyId24856.add($.__views.__alloyId24857);
    $.__views.__alloyId24858 = Ti.UI.createView({
        id: "__alloyId24858"
    });
    $.__views.__alloyId24858 && $.addTopLevelView($.__views.__alloyId24858);
    $.__views.__alloyId24859 = Ti.UI.createView({
        id: "__alloyId24859"
    });
    $.__views.__alloyId24858.add($.__views.__alloyId24859);
    $.__views.__alloyId24860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24860"
    });
    $.__views.__alloyId24859.add($.__views.__alloyId24860);
    $.__views.__alloyId24861 = Ti.UI.createView({
        id: "__alloyId24861"
    });
    $.__views.__alloyId24861 && $.addTopLevelView($.__views.__alloyId24861);
    $.__views.__alloyId24862 = Ti.UI.createView({
        id: "__alloyId24862"
    });
    $.__views.__alloyId24861.add($.__views.__alloyId24862);
    $.__views.__alloyId24863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24863"
    });
    $.__views.__alloyId24862.add($.__views.__alloyId24863);
    $.__views.__alloyId24864 = Ti.UI.createView({
        id: "__alloyId24864"
    });
    $.__views.__alloyId24864 && $.addTopLevelView($.__views.__alloyId24864);
    $.__views.__alloyId24865 = Ti.UI.createView({
        id: "__alloyId24865"
    });
    $.__views.__alloyId24864.add($.__views.__alloyId24865);
    $.__views.__alloyId24866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24866"
    });
    $.__views.__alloyId24865.add($.__views.__alloyId24866);
    $.__views.__alloyId24867 = Ti.UI.createView({
        id: "__alloyId24867"
    });
    $.__views.__alloyId24867 && $.addTopLevelView($.__views.__alloyId24867);
    $.__views.__alloyId24868 = Ti.UI.createView({
        id: "__alloyId24868"
    });
    $.__views.__alloyId24867.add($.__views.__alloyId24868);
    $.__views.__alloyId24869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24869"
    });
    $.__views.__alloyId24868.add($.__views.__alloyId24869);
    $.__views.__alloyId24870 = Ti.UI.createView({
        id: "__alloyId24870"
    });
    $.__views.__alloyId24870 && $.addTopLevelView($.__views.__alloyId24870);
    $.__views.__alloyId24871 = Ti.UI.createView({
        id: "__alloyId24871"
    });
    $.__views.__alloyId24870.add($.__views.__alloyId24871);
    $.__views.__alloyId24872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24872"
    });
    $.__views.__alloyId24871.add($.__views.__alloyId24872);
    $.__views.__alloyId24873 = Ti.UI.createView({
        id: "__alloyId24873"
    });
    $.__views.__alloyId24873 && $.addTopLevelView($.__views.__alloyId24873);
    $.__views.__alloyId24874 = Ti.UI.createView({
        id: "__alloyId24874"
    });
    $.__views.__alloyId24873.add($.__views.__alloyId24874);
    $.__views.__alloyId24875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24875"
    });
    $.__views.__alloyId24874.add($.__views.__alloyId24875);
    $.__views.__alloyId24876 = Ti.UI.createView({
        id: "__alloyId24876"
    });
    $.__views.__alloyId24876 && $.addTopLevelView($.__views.__alloyId24876);
    $.__views.__alloyId24877 = Ti.UI.createView({
        id: "__alloyId24877"
    });
    $.__views.__alloyId24876.add($.__views.__alloyId24877);
    $.__views.__alloyId24878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24878"
    });
    $.__views.__alloyId24877.add($.__views.__alloyId24878);
    $.__views.__alloyId24879 = Ti.UI.createView({
        id: "__alloyId24879"
    });
    $.__views.__alloyId24879 && $.addTopLevelView($.__views.__alloyId24879);
    $.__views.__alloyId24880 = Ti.UI.createView({
        id: "__alloyId24880"
    });
    $.__views.__alloyId24879.add($.__views.__alloyId24880);
    $.__views.__alloyId24881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24881"
    });
    $.__views.__alloyId24880.add($.__views.__alloyId24881);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;