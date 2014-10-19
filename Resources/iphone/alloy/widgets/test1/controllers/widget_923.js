function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_923";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_923 = Ti.UI.createView({
        id: "widget_923"
    });
    $.__views.widget_923 && $.addTopLevelView($.__views.widget_923);
    $.__views.__alloyId23842 = Ti.UI.createView({
        id: "__alloyId23842"
    });
    $.__views.widget_923.add($.__views.__alloyId23842);
    $.__views.__alloyId23843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23843"
    });
    $.__views.__alloyId23842.add($.__views.__alloyId23843);
    $.__views.__alloyId23844 = Ti.UI.createView({
        id: "__alloyId23844"
    });
    $.__views.__alloyId23844 && $.addTopLevelView($.__views.__alloyId23844);
    $.__views.__alloyId23845 = Ti.UI.createView({
        id: "__alloyId23845"
    });
    $.__views.__alloyId23844.add($.__views.__alloyId23845);
    $.__views.__alloyId23846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23846"
    });
    $.__views.__alloyId23845.add($.__views.__alloyId23846);
    $.__views.__alloyId23847 = Ti.UI.createView({
        id: "__alloyId23847"
    });
    $.__views.__alloyId23847 && $.addTopLevelView($.__views.__alloyId23847);
    $.__views.__alloyId23848 = Ti.UI.createView({
        id: "__alloyId23848"
    });
    $.__views.__alloyId23847.add($.__views.__alloyId23848);
    $.__views.__alloyId23849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23849"
    });
    $.__views.__alloyId23848.add($.__views.__alloyId23849);
    $.__views.__alloyId23850 = Ti.UI.createView({
        id: "__alloyId23850"
    });
    $.__views.__alloyId23850 && $.addTopLevelView($.__views.__alloyId23850);
    $.__views.__alloyId23851 = Ti.UI.createView({
        id: "__alloyId23851"
    });
    $.__views.__alloyId23850.add($.__views.__alloyId23851);
    $.__views.__alloyId23852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23852"
    });
    $.__views.__alloyId23851.add($.__views.__alloyId23852);
    $.__views.__alloyId23853 = Ti.UI.createView({
        id: "__alloyId23853"
    });
    $.__views.__alloyId23853 && $.addTopLevelView($.__views.__alloyId23853);
    $.__views.__alloyId23854 = Ti.UI.createView({
        id: "__alloyId23854"
    });
    $.__views.__alloyId23853.add($.__views.__alloyId23854);
    $.__views.__alloyId23855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23855"
    });
    $.__views.__alloyId23854.add($.__views.__alloyId23855);
    $.__views.__alloyId23856 = Ti.UI.createView({
        id: "__alloyId23856"
    });
    $.__views.__alloyId23856 && $.addTopLevelView($.__views.__alloyId23856);
    $.__views.__alloyId23857 = Ti.UI.createView({
        id: "__alloyId23857"
    });
    $.__views.__alloyId23856.add($.__views.__alloyId23857);
    $.__views.__alloyId23858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23858"
    });
    $.__views.__alloyId23857.add($.__views.__alloyId23858);
    $.__views.__alloyId23859 = Ti.UI.createView({
        id: "__alloyId23859"
    });
    $.__views.__alloyId23859 && $.addTopLevelView($.__views.__alloyId23859);
    $.__views.__alloyId23860 = Ti.UI.createView({
        id: "__alloyId23860"
    });
    $.__views.__alloyId23859.add($.__views.__alloyId23860);
    $.__views.__alloyId23861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23861"
    });
    $.__views.__alloyId23860.add($.__views.__alloyId23861);
    $.__views.__alloyId23862 = Ti.UI.createView({
        id: "__alloyId23862"
    });
    $.__views.__alloyId23862 && $.addTopLevelView($.__views.__alloyId23862);
    $.__views.__alloyId23863 = Ti.UI.createView({
        id: "__alloyId23863"
    });
    $.__views.__alloyId23862.add($.__views.__alloyId23863);
    $.__views.__alloyId23864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23864"
    });
    $.__views.__alloyId23863.add($.__views.__alloyId23864);
    $.__views.__alloyId23865 = Ti.UI.createView({
        id: "__alloyId23865"
    });
    $.__views.__alloyId23865 && $.addTopLevelView($.__views.__alloyId23865);
    $.__views.__alloyId23866 = Ti.UI.createView({
        id: "__alloyId23866"
    });
    $.__views.__alloyId23865.add($.__views.__alloyId23866);
    $.__views.__alloyId23867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23867"
    });
    $.__views.__alloyId23866.add($.__views.__alloyId23867);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;