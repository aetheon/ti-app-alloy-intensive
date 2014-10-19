function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_576";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_576 = Ti.UI.createView({
        id: "widget_576"
    });
    $.__views.widget_576 && $.addTopLevelView($.__views.widget_576);
    $.__views.__alloyId13806 = Ti.UI.createView({
        id: "__alloyId13806"
    });
    $.__views.widget_576.add($.__views.__alloyId13806);
    $.__views.__alloyId13807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13807"
    });
    $.__views.__alloyId13806.add($.__views.__alloyId13807);
    $.__views.__alloyId13808 = Ti.UI.createView({
        id: "__alloyId13808"
    });
    $.__views.__alloyId13808 && $.addTopLevelView($.__views.__alloyId13808);
    $.__views.__alloyId13809 = Ti.UI.createView({
        id: "__alloyId13809"
    });
    $.__views.__alloyId13808.add($.__views.__alloyId13809);
    $.__views.__alloyId13810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13810"
    });
    $.__views.__alloyId13809.add($.__views.__alloyId13810);
    $.__views.__alloyId13811 = Ti.UI.createView({
        id: "__alloyId13811"
    });
    $.__views.__alloyId13811 && $.addTopLevelView($.__views.__alloyId13811);
    $.__views.__alloyId13812 = Ti.UI.createView({
        id: "__alloyId13812"
    });
    $.__views.__alloyId13811.add($.__views.__alloyId13812);
    $.__views.__alloyId13813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13813"
    });
    $.__views.__alloyId13812.add($.__views.__alloyId13813);
    $.__views.__alloyId13814 = Ti.UI.createView({
        id: "__alloyId13814"
    });
    $.__views.__alloyId13814 && $.addTopLevelView($.__views.__alloyId13814);
    $.__views.__alloyId13815 = Ti.UI.createView({
        id: "__alloyId13815"
    });
    $.__views.__alloyId13814.add($.__views.__alloyId13815);
    $.__views.__alloyId13816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13816"
    });
    $.__views.__alloyId13815.add($.__views.__alloyId13816);
    $.__views.__alloyId13817 = Ti.UI.createView({
        id: "__alloyId13817"
    });
    $.__views.__alloyId13817 && $.addTopLevelView($.__views.__alloyId13817);
    $.__views.__alloyId13818 = Ti.UI.createView({
        id: "__alloyId13818"
    });
    $.__views.__alloyId13817.add($.__views.__alloyId13818);
    $.__views.__alloyId13819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13819"
    });
    $.__views.__alloyId13818.add($.__views.__alloyId13819);
    $.__views.__alloyId13820 = Ti.UI.createView({
        id: "__alloyId13820"
    });
    $.__views.__alloyId13820 && $.addTopLevelView($.__views.__alloyId13820);
    $.__views.__alloyId13821 = Ti.UI.createView({
        id: "__alloyId13821"
    });
    $.__views.__alloyId13820.add($.__views.__alloyId13821);
    $.__views.__alloyId13822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13822"
    });
    $.__views.__alloyId13821.add($.__views.__alloyId13822);
    $.__views.__alloyId13823 = Ti.UI.createView({
        id: "__alloyId13823"
    });
    $.__views.__alloyId13823 && $.addTopLevelView($.__views.__alloyId13823);
    $.__views.__alloyId13824 = Ti.UI.createView({
        id: "__alloyId13824"
    });
    $.__views.__alloyId13823.add($.__views.__alloyId13824);
    $.__views.__alloyId13825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13825"
    });
    $.__views.__alloyId13824.add($.__views.__alloyId13825);
    $.__views.__alloyId13826 = Ti.UI.createView({
        id: "__alloyId13826"
    });
    $.__views.__alloyId13826 && $.addTopLevelView($.__views.__alloyId13826);
    $.__views.__alloyId13827 = Ti.UI.createView({
        id: "__alloyId13827"
    });
    $.__views.__alloyId13826.add($.__views.__alloyId13827);
    $.__views.__alloyId13828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13828"
    });
    $.__views.__alloyId13827.add($.__views.__alloyId13828);
    $.__views.__alloyId13829 = Ti.UI.createView({
        id: "__alloyId13829"
    });
    $.__views.__alloyId13829 && $.addTopLevelView($.__views.__alloyId13829);
    $.__views.__alloyId13830 = Ti.UI.createView({
        id: "__alloyId13830"
    });
    $.__views.__alloyId13829.add($.__views.__alloyId13830);
    $.__views.__alloyId13831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13831"
    });
    $.__views.__alloyId13830.add($.__views.__alloyId13831);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;