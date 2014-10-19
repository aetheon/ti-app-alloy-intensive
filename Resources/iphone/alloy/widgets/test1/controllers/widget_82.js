function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_82";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_82 = Ti.UI.createView({
        id: "widget_82"
    });
    $.__views.widget_82 && $.addTopLevelView($.__views.widget_82);
    $.__views.__alloyId20852 = Ti.UI.createView({
        id: "__alloyId20852"
    });
    $.__views.widget_82.add($.__views.__alloyId20852);
    $.__views.__alloyId20853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20853"
    });
    $.__views.__alloyId20852.add($.__views.__alloyId20853);
    $.__views.__alloyId20854 = Ti.UI.createView({
        id: "__alloyId20854"
    });
    $.__views.__alloyId20854 && $.addTopLevelView($.__views.__alloyId20854);
    $.__views.__alloyId20855 = Ti.UI.createView({
        id: "__alloyId20855"
    });
    $.__views.__alloyId20854.add($.__views.__alloyId20855);
    $.__views.__alloyId20856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20856"
    });
    $.__views.__alloyId20855.add($.__views.__alloyId20856);
    $.__views.__alloyId20857 = Ti.UI.createView({
        id: "__alloyId20857"
    });
    $.__views.__alloyId20857 && $.addTopLevelView($.__views.__alloyId20857);
    $.__views.__alloyId20858 = Ti.UI.createView({
        id: "__alloyId20858"
    });
    $.__views.__alloyId20857.add($.__views.__alloyId20858);
    $.__views.__alloyId20859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20859"
    });
    $.__views.__alloyId20858.add($.__views.__alloyId20859);
    $.__views.__alloyId20860 = Ti.UI.createView({
        id: "__alloyId20860"
    });
    $.__views.__alloyId20860 && $.addTopLevelView($.__views.__alloyId20860);
    $.__views.__alloyId20861 = Ti.UI.createView({
        id: "__alloyId20861"
    });
    $.__views.__alloyId20860.add($.__views.__alloyId20861);
    $.__views.__alloyId20862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20862"
    });
    $.__views.__alloyId20861.add($.__views.__alloyId20862);
    $.__views.__alloyId20863 = Ti.UI.createView({
        id: "__alloyId20863"
    });
    $.__views.__alloyId20863 && $.addTopLevelView($.__views.__alloyId20863);
    $.__views.__alloyId20864 = Ti.UI.createView({
        id: "__alloyId20864"
    });
    $.__views.__alloyId20863.add($.__views.__alloyId20864);
    $.__views.__alloyId20865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20865"
    });
    $.__views.__alloyId20864.add($.__views.__alloyId20865);
    $.__views.__alloyId20866 = Ti.UI.createView({
        id: "__alloyId20866"
    });
    $.__views.__alloyId20866 && $.addTopLevelView($.__views.__alloyId20866);
    $.__views.__alloyId20867 = Ti.UI.createView({
        id: "__alloyId20867"
    });
    $.__views.__alloyId20866.add($.__views.__alloyId20867);
    $.__views.__alloyId20868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20868"
    });
    $.__views.__alloyId20867.add($.__views.__alloyId20868);
    $.__views.__alloyId20869 = Ti.UI.createView({
        id: "__alloyId20869"
    });
    $.__views.__alloyId20869 && $.addTopLevelView($.__views.__alloyId20869);
    $.__views.__alloyId20870 = Ti.UI.createView({
        id: "__alloyId20870"
    });
    $.__views.__alloyId20869.add($.__views.__alloyId20870);
    $.__views.__alloyId20871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20871"
    });
    $.__views.__alloyId20870.add($.__views.__alloyId20871);
    $.__views.__alloyId20872 = Ti.UI.createView({
        id: "__alloyId20872"
    });
    $.__views.__alloyId20872 && $.addTopLevelView($.__views.__alloyId20872);
    $.__views.__alloyId20873 = Ti.UI.createView({
        id: "__alloyId20873"
    });
    $.__views.__alloyId20872.add($.__views.__alloyId20873);
    $.__views.__alloyId20874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20874"
    });
    $.__views.__alloyId20873.add($.__views.__alloyId20874);
    $.__views.__alloyId20875 = Ti.UI.createView({
        id: "__alloyId20875"
    });
    $.__views.__alloyId20875 && $.addTopLevelView($.__views.__alloyId20875);
    $.__views.__alloyId20876 = Ti.UI.createView({
        id: "__alloyId20876"
    });
    $.__views.__alloyId20875.add($.__views.__alloyId20876);
    $.__views.__alloyId20877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20877"
    });
    $.__views.__alloyId20876.add($.__views.__alloyId20877);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;