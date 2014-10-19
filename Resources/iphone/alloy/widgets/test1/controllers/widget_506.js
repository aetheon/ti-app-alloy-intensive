function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_506";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_506 = Ti.UI.createView({
        id: "widget_506"
    });
    $.__views.widget_506 && $.addTopLevelView($.__views.widget_506);
    $.__views.__alloyId11804 = Ti.UI.createView({
        id: "__alloyId11804"
    });
    $.__views.widget_506.add($.__views.__alloyId11804);
    $.__views.__alloyId11805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11805"
    });
    $.__views.__alloyId11804.add($.__views.__alloyId11805);
    $.__views.__alloyId11806 = Ti.UI.createView({
        id: "__alloyId11806"
    });
    $.__views.__alloyId11806 && $.addTopLevelView($.__views.__alloyId11806);
    $.__views.__alloyId11807 = Ti.UI.createView({
        id: "__alloyId11807"
    });
    $.__views.__alloyId11806.add($.__views.__alloyId11807);
    $.__views.__alloyId11808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11808"
    });
    $.__views.__alloyId11807.add($.__views.__alloyId11808);
    $.__views.__alloyId11809 = Ti.UI.createView({
        id: "__alloyId11809"
    });
    $.__views.__alloyId11809 && $.addTopLevelView($.__views.__alloyId11809);
    $.__views.__alloyId11810 = Ti.UI.createView({
        id: "__alloyId11810"
    });
    $.__views.__alloyId11809.add($.__views.__alloyId11810);
    $.__views.__alloyId11811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11811"
    });
    $.__views.__alloyId11810.add($.__views.__alloyId11811);
    $.__views.__alloyId11812 = Ti.UI.createView({
        id: "__alloyId11812"
    });
    $.__views.__alloyId11812 && $.addTopLevelView($.__views.__alloyId11812);
    $.__views.__alloyId11813 = Ti.UI.createView({
        id: "__alloyId11813"
    });
    $.__views.__alloyId11812.add($.__views.__alloyId11813);
    $.__views.__alloyId11814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11814"
    });
    $.__views.__alloyId11813.add($.__views.__alloyId11814);
    $.__views.__alloyId11815 = Ti.UI.createView({
        id: "__alloyId11815"
    });
    $.__views.__alloyId11815 && $.addTopLevelView($.__views.__alloyId11815);
    $.__views.__alloyId11816 = Ti.UI.createView({
        id: "__alloyId11816"
    });
    $.__views.__alloyId11815.add($.__views.__alloyId11816);
    $.__views.__alloyId11817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11817"
    });
    $.__views.__alloyId11816.add($.__views.__alloyId11817);
    $.__views.__alloyId11818 = Ti.UI.createView({
        id: "__alloyId11818"
    });
    $.__views.__alloyId11818 && $.addTopLevelView($.__views.__alloyId11818);
    $.__views.__alloyId11819 = Ti.UI.createView({
        id: "__alloyId11819"
    });
    $.__views.__alloyId11818.add($.__views.__alloyId11819);
    $.__views.__alloyId11820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11820"
    });
    $.__views.__alloyId11819.add($.__views.__alloyId11820);
    $.__views.__alloyId11821 = Ti.UI.createView({
        id: "__alloyId11821"
    });
    $.__views.__alloyId11821 && $.addTopLevelView($.__views.__alloyId11821);
    $.__views.__alloyId11822 = Ti.UI.createView({
        id: "__alloyId11822"
    });
    $.__views.__alloyId11821.add($.__views.__alloyId11822);
    $.__views.__alloyId11823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11823"
    });
    $.__views.__alloyId11822.add($.__views.__alloyId11823);
    $.__views.__alloyId11824 = Ti.UI.createView({
        id: "__alloyId11824"
    });
    $.__views.__alloyId11824 && $.addTopLevelView($.__views.__alloyId11824);
    $.__views.__alloyId11825 = Ti.UI.createView({
        id: "__alloyId11825"
    });
    $.__views.__alloyId11824.add($.__views.__alloyId11825);
    $.__views.__alloyId11826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11826"
    });
    $.__views.__alloyId11825.add($.__views.__alloyId11826);
    $.__views.__alloyId11827 = Ti.UI.createView({
        id: "__alloyId11827"
    });
    $.__views.__alloyId11827 && $.addTopLevelView($.__views.__alloyId11827);
    $.__views.__alloyId11828 = Ti.UI.createView({
        id: "__alloyId11828"
    });
    $.__views.__alloyId11827.add($.__views.__alloyId11828);
    $.__views.__alloyId11829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11829"
    });
    $.__views.__alloyId11828.add($.__views.__alloyId11829);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;