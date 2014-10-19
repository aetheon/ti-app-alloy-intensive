function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_230";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_230 = Ti.UI.createView({
        id: "widget_230"
    });
    $.__views.widget_230 && $.addTopLevelView($.__views.widget_230);
    $.__views.__alloyId3848 = Ti.UI.createView({
        id: "__alloyId3848"
    });
    $.__views.widget_230.add($.__views.__alloyId3848);
    $.__views.__alloyId3849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3849"
    });
    $.__views.__alloyId3848.add($.__views.__alloyId3849);
    $.__views.__alloyId3850 = Ti.UI.createView({
        id: "__alloyId3850"
    });
    $.__views.__alloyId3850 && $.addTopLevelView($.__views.__alloyId3850);
    $.__views.__alloyId3851 = Ti.UI.createView({
        id: "__alloyId3851"
    });
    $.__views.__alloyId3850.add($.__views.__alloyId3851);
    $.__views.__alloyId3852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3852"
    });
    $.__views.__alloyId3851.add($.__views.__alloyId3852);
    $.__views.__alloyId3853 = Ti.UI.createView({
        id: "__alloyId3853"
    });
    $.__views.__alloyId3853 && $.addTopLevelView($.__views.__alloyId3853);
    $.__views.__alloyId3854 = Ti.UI.createView({
        id: "__alloyId3854"
    });
    $.__views.__alloyId3853.add($.__views.__alloyId3854);
    $.__views.__alloyId3855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3855"
    });
    $.__views.__alloyId3854.add($.__views.__alloyId3855);
    $.__views.__alloyId3856 = Ti.UI.createView({
        id: "__alloyId3856"
    });
    $.__views.__alloyId3856 && $.addTopLevelView($.__views.__alloyId3856);
    $.__views.__alloyId3857 = Ti.UI.createView({
        id: "__alloyId3857"
    });
    $.__views.__alloyId3856.add($.__views.__alloyId3857);
    $.__views.__alloyId3858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3858"
    });
    $.__views.__alloyId3857.add($.__views.__alloyId3858);
    $.__views.__alloyId3859 = Ti.UI.createView({
        id: "__alloyId3859"
    });
    $.__views.__alloyId3859 && $.addTopLevelView($.__views.__alloyId3859);
    $.__views.__alloyId3860 = Ti.UI.createView({
        id: "__alloyId3860"
    });
    $.__views.__alloyId3859.add($.__views.__alloyId3860);
    $.__views.__alloyId3861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3861"
    });
    $.__views.__alloyId3860.add($.__views.__alloyId3861);
    $.__views.__alloyId3862 = Ti.UI.createView({
        id: "__alloyId3862"
    });
    $.__views.__alloyId3862 && $.addTopLevelView($.__views.__alloyId3862);
    $.__views.__alloyId3863 = Ti.UI.createView({
        id: "__alloyId3863"
    });
    $.__views.__alloyId3862.add($.__views.__alloyId3863);
    $.__views.__alloyId3864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3864"
    });
    $.__views.__alloyId3863.add($.__views.__alloyId3864);
    $.__views.__alloyId3865 = Ti.UI.createView({
        id: "__alloyId3865"
    });
    $.__views.__alloyId3865 && $.addTopLevelView($.__views.__alloyId3865);
    $.__views.__alloyId3866 = Ti.UI.createView({
        id: "__alloyId3866"
    });
    $.__views.__alloyId3865.add($.__views.__alloyId3866);
    $.__views.__alloyId3867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3867"
    });
    $.__views.__alloyId3866.add($.__views.__alloyId3867);
    $.__views.__alloyId3868 = Ti.UI.createView({
        id: "__alloyId3868"
    });
    $.__views.__alloyId3868 && $.addTopLevelView($.__views.__alloyId3868);
    $.__views.__alloyId3869 = Ti.UI.createView({
        id: "__alloyId3869"
    });
    $.__views.__alloyId3868.add($.__views.__alloyId3869);
    $.__views.__alloyId3870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3870"
    });
    $.__views.__alloyId3869.add($.__views.__alloyId3870);
    $.__views.__alloyId3871 = Ti.UI.createView({
        id: "__alloyId3871"
    });
    $.__views.__alloyId3871 && $.addTopLevelView($.__views.__alloyId3871);
    $.__views.__alloyId3872 = Ti.UI.createView({
        id: "__alloyId3872"
    });
    $.__views.__alloyId3871.add($.__views.__alloyId3872);
    $.__views.__alloyId3873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3873"
    });
    $.__views.__alloyId3872.add($.__views.__alloyId3873);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;