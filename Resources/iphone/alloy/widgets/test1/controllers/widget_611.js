function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_611";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_611 = Ti.UI.createView({
        id: "widget_611"
    });
    $.__views.widget_611 && $.addTopLevelView($.__views.widget_611);
    $.__views.__alloyId14846 = Ti.UI.createView({
        id: "__alloyId14846"
    });
    $.__views.widget_611.add($.__views.__alloyId14846);
    $.__views.__alloyId14847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14847"
    });
    $.__views.__alloyId14846.add($.__views.__alloyId14847);
    $.__views.__alloyId14848 = Ti.UI.createView({
        id: "__alloyId14848"
    });
    $.__views.__alloyId14848 && $.addTopLevelView($.__views.__alloyId14848);
    $.__views.__alloyId14849 = Ti.UI.createView({
        id: "__alloyId14849"
    });
    $.__views.__alloyId14848.add($.__views.__alloyId14849);
    $.__views.__alloyId14850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14850"
    });
    $.__views.__alloyId14849.add($.__views.__alloyId14850);
    $.__views.__alloyId14851 = Ti.UI.createView({
        id: "__alloyId14851"
    });
    $.__views.__alloyId14851 && $.addTopLevelView($.__views.__alloyId14851);
    $.__views.__alloyId14852 = Ti.UI.createView({
        id: "__alloyId14852"
    });
    $.__views.__alloyId14851.add($.__views.__alloyId14852);
    $.__views.__alloyId14853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14853"
    });
    $.__views.__alloyId14852.add($.__views.__alloyId14853);
    $.__views.__alloyId14854 = Ti.UI.createView({
        id: "__alloyId14854"
    });
    $.__views.__alloyId14854 && $.addTopLevelView($.__views.__alloyId14854);
    $.__views.__alloyId14855 = Ti.UI.createView({
        id: "__alloyId14855"
    });
    $.__views.__alloyId14854.add($.__views.__alloyId14855);
    $.__views.__alloyId14856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14856"
    });
    $.__views.__alloyId14855.add($.__views.__alloyId14856);
    $.__views.__alloyId14857 = Ti.UI.createView({
        id: "__alloyId14857"
    });
    $.__views.__alloyId14857 && $.addTopLevelView($.__views.__alloyId14857);
    $.__views.__alloyId14858 = Ti.UI.createView({
        id: "__alloyId14858"
    });
    $.__views.__alloyId14857.add($.__views.__alloyId14858);
    $.__views.__alloyId14859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14859"
    });
    $.__views.__alloyId14858.add($.__views.__alloyId14859);
    $.__views.__alloyId14860 = Ti.UI.createView({
        id: "__alloyId14860"
    });
    $.__views.__alloyId14860 && $.addTopLevelView($.__views.__alloyId14860);
    $.__views.__alloyId14861 = Ti.UI.createView({
        id: "__alloyId14861"
    });
    $.__views.__alloyId14860.add($.__views.__alloyId14861);
    $.__views.__alloyId14862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14862"
    });
    $.__views.__alloyId14861.add($.__views.__alloyId14862);
    $.__views.__alloyId14863 = Ti.UI.createView({
        id: "__alloyId14863"
    });
    $.__views.__alloyId14863 && $.addTopLevelView($.__views.__alloyId14863);
    $.__views.__alloyId14864 = Ti.UI.createView({
        id: "__alloyId14864"
    });
    $.__views.__alloyId14863.add($.__views.__alloyId14864);
    $.__views.__alloyId14865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14865"
    });
    $.__views.__alloyId14864.add($.__views.__alloyId14865);
    $.__views.__alloyId14866 = Ti.UI.createView({
        id: "__alloyId14866"
    });
    $.__views.__alloyId14866 && $.addTopLevelView($.__views.__alloyId14866);
    $.__views.__alloyId14867 = Ti.UI.createView({
        id: "__alloyId14867"
    });
    $.__views.__alloyId14866.add($.__views.__alloyId14867);
    $.__views.__alloyId14868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14868"
    });
    $.__views.__alloyId14867.add($.__views.__alloyId14868);
    $.__views.__alloyId14869 = Ti.UI.createView({
        id: "__alloyId14869"
    });
    $.__views.__alloyId14869 && $.addTopLevelView($.__views.__alloyId14869);
    $.__views.__alloyId14870 = Ti.UI.createView({
        id: "__alloyId14870"
    });
    $.__views.__alloyId14869.add($.__views.__alloyId14870);
    $.__views.__alloyId14871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14871"
    });
    $.__views.__alloyId14870.add($.__views.__alloyId14871);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;