function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_715";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_715 = Ti.UI.createView({
        id: "widget_715"
    });
    $.__views.widget_715 && $.addTopLevelView($.__views.widget_715);
    $.__views.__alloyId17836 = Ti.UI.createView({
        id: "__alloyId17836"
    });
    $.__views.widget_715.add($.__views.__alloyId17836);
    $.__views.__alloyId17837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17837"
    });
    $.__views.__alloyId17836.add($.__views.__alloyId17837);
    $.__views.__alloyId17838 = Ti.UI.createView({
        id: "__alloyId17838"
    });
    $.__views.__alloyId17838 && $.addTopLevelView($.__views.__alloyId17838);
    $.__views.__alloyId17839 = Ti.UI.createView({
        id: "__alloyId17839"
    });
    $.__views.__alloyId17838.add($.__views.__alloyId17839);
    $.__views.__alloyId17840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17840"
    });
    $.__views.__alloyId17839.add($.__views.__alloyId17840);
    $.__views.__alloyId17841 = Ti.UI.createView({
        id: "__alloyId17841"
    });
    $.__views.__alloyId17841 && $.addTopLevelView($.__views.__alloyId17841);
    $.__views.__alloyId17842 = Ti.UI.createView({
        id: "__alloyId17842"
    });
    $.__views.__alloyId17841.add($.__views.__alloyId17842);
    $.__views.__alloyId17843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17843"
    });
    $.__views.__alloyId17842.add($.__views.__alloyId17843);
    $.__views.__alloyId17844 = Ti.UI.createView({
        id: "__alloyId17844"
    });
    $.__views.__alloyId17844 && $.addTopLevelView($.__views.__alloyId17844);
    $.__views.__alloyId17845 = Ti.UI.createView({
        id: "__alloyId17845"
    });
    $.__views.__alloyId17844.add($.__views.__alloyId17845);
    $.__views.__alloyId17846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17846"
    });
    $.__views.__alloyId17845.add($.__views.__alloyId17846);
    $.__views.__alloyId17847 = Ti.UI.createView({
        id: "__alloyId17847"
    });
    $.__views.__alloyId17847 && $.addTopLevelView($.__views.__alloyId17847);
    $.__views.__alloyId17848 = Ti.UI.createView({
        id: "__alloyId17848"
    });
    $.__views.__alloyId17847.add($.__views.__alloyId17848);
    $.__views.__alloyId17849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17849"
    });
    $.__views.__alloyId17848.add($.__views.__alloyId17849);
    $.__views.__alloyId17850 = Ti.UI.createView({
        id: "__alloyId17850"
    });
    $.__views.__alloyId17850 && $.addTopLevelView($.__views.__alloyId17850);
    $.__views.__alloyId17851 = Ti.UI.createView({
        id: "__alloyId17851"
    });
    $.__views.__alloyId17850.add($.__views.__alloyId17851);
    $.__views.__alloyId17852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17852"
    });
    $.__views.__alloyId17851.add($.__views.__alloyId17852);
    $.__views.__alloyId17853 = Ti.UI.createView({
        id: "__alloyId17853"
    });
    $.__views.__alloyId17853 && $.addTopLevelView($.__views.__alloyId17853);
    $.__views.__alloyId17854 = Ti.UI.createView({
        id: "__alloyId17854"
    });
    $.__views.__alloyId17853.add($.__views.__alloyId17854);
    $.__views.__alloyId17855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17855"
    });
    $.__views.__alloyId17854.add($.__views.__alloyId17855);
    $.__views.__alloyId17856 = Ti.UI.createView({
        id: "__alloyId17856"
    });
    $.__views.__alloyId17856 && $.addTopLevelView($.__views.__alloyId17856);
    $.__views.__alloyId17857 = Ti.UI.createView({
        id: "__alloyId17857"
    });
    $.__views.__alloyId17856.add($.__views.__alloyId17857);
    $.__views.__alloyId17858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17858"
    });
    $.__views.__alloyId17857.add($.__views.__alloyId17858);
    $.__views.__alloyId17859 = Ti.UI.createView({
        id: "__alloyId17859"
    });
    $.__views.__alloyId17859 && $.addTopLevelView($.__views.__alloyId17859);
    $.__views.__alloyId17860 = Ti.UI.createView({
        id: "__alloyId17860"
    });
    $.__views.__alloyId17859.add($.__views.__alloyId17860);
    $.__views.__alloyId17861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17861"
    });
    $.__views.__alloyId17860.add($.__views.__alloyId17861);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;