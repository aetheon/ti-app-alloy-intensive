function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_37";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_37 = Ti.UI.createView({
        id: "widget_37"
    });
    $.__views.widget_37 && $.addTopLevelView($.__views.widget_37);
    $.__views.__alloyId7852 = Ti.UI.createView({
        id: "__alloyId7852"
    });
    $.__views.widget_37.add($.__views.__alloyId7852);
    $.__views.__alloyId7853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7853"
    });
    $.__views.__alloyId7852.add($.__views.__alloyId7853);
    $.__views.__alloyId7854 = Ti.UI.createView({
        id: "__alloyId7854"
    });
    $.__views.__alloyId7854 && $.addTopLevelView($.__views.__alloyId7854);
    $.__views.__alloyId7855 = Ti.UI.createView({
        id: "__alloyId7855"
    });
    $.__views.__alloyId7854.add($.__views.__alloyId7855);
    $.__views.__alloyId7856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7856"
    });
    $.__views.__alloyId7855.add($.__views.__alloyId7856);
    $.__views.__alloyId7857 = Ti.UI.createView({
        id: "__alloyId7857"
    });
    $.__views.__alloyId7857 && $.addTopLevelView($.__views.__alloyId7857);
    $.__views.__alloyId7858 = Ti.UI.createView({
        id: "__alloyId7858"
    });
    $.__views.__alloyId7857.add($.__views.__alloyId7858);
    $.__views.__alloyId7859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7859"
    });
    $.__views.__alloyId7858.add($.__views.__alloyId7859);
    $.__views.__alloyId7860 = Ti.UI.createView({
        id: "__alloyId7860"
    });
    $.__views.__alloyId7860 && $.addTopLevelView($.__views.__alloyId7860);
    $.__views.__alloyId7861 = Ti.UI.createView({
        id: "__alloyId7861"
    });
    $.__views.__alloyId7860.add($.__views.__alloyId7861);
    $.__views.__alloyId7862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7862"
    });
    $.__views.__alloyId7861.add($.__views.__alloyId7862);
    $.__views.__alloyId7863 = Ti.UI.createView({
        id: "__alloyId7863"
    });
    $.__views.__alloyId7863 && $.addTopLevelView($.__views.__alloyId7863);
    $.__views.__alloyId7864 = Ti.UI.createView({
        id: "__alloyId7864"
    });
    $.__views.__alloyId7863.add($.__views.__alloyId7864);
    $.__views.__alloyId7865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7865"
    });
    $.__views.__alloyId7864.add($.__views.__alloyId7865);
    $.__views.__alloyId7866 = Ti.UI.createView({
        id: "__alloyId7866"
    });
    $.__views.__alloyId7866 && $.addTopLevelView($.__views.__alloyId7866);
    $.__views.__alloyId7867 = Ti.UI.createView({
        id: "__alloyId7867"
    });
    $.__views.__alloyId7866.add($.__views.__alloyId7867);
    $.__views.__alloyId7868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7868"
    });
    $.__views.__alloyId7867.add($.__views.__alloyId7868);
    $.__views.__alloyId7869 = Ti.UI.createView({
        id: "__alloyId7869"
    });
    $.__views.__alloyId7869 && $.addTopLevelView($.__views.__alloyId7869);
    $.__views.__alloyId7870 = Ti.UI.createView({
        id: "__alloyId7870"
    });
    $.__views.__alloyId7869.add($.__views.__alloyId7870);
    $.__views.__alloyId7871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7871"
    });
    $.__views.__alloyId7870.add($.__views.__alloyId7871);
    $.__views.__alloyId7872 = Ti.UI.createView({
        id: "__alloyId7872"
    });
    $.__views.__alloyId7872 && $.addTopLevelView($.__views.__alloyId7872);
    $.__views.__alloyId7873 = Ti.UI.createView({
        id: "__alloyId7873"
    });
    $.__views.__alloyId7872.add($.__views.__alloyId7873);
    $.__views.__alloyId7874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7874"
    });
    $.__views.__alloyId7873.add($.__views.__alloyId7874);
    $.__views.__alloyId7875 = Ti.UI.createView({
        id: "__alloyId7875"
    });
    $.__views.__alloyId7875 && $.addTopLevelView($.__views.__alloyId7875);
    $.__views.__alloyId7876 = Ti.UI.createView({
        id: "__alloyId7876"
    });
    $.__views.__alloyId7875.add($.__views.__alloyId7876);
    $.__views.__alloyId7877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7877"
    });
    $.__views.__alloyId7876.add($.__views.__alloyId7877);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;