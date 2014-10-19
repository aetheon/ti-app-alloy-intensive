function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_401";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_401 = Ti.UI.createView({
        id: "widget_401"
    });
    $.__views.widget_401 && $.addTopLevelView($.__views.widget_401);
    $.__views.__alloyId8788 = Ti.UI.createView({
        id: "__alloyId8788"
    });
    $.__views.widget_401.add($.__views.__alloyId8788);
    $.__views.__alloyId8789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8789"
    });
    $.__views.__alloyId8788.add($.__views.__alloyId8789);
    $.__views.__alloyId8790 = Ti.UI.createView({
        id: "__alloyId8790"
    });
    $.__views.__alloyId8790 && $.addTopLevelView($.__views.__alloyId8790);
    $.__views.__alloyId8791 = Ti.UI.createView({
        id: "__alloyId8791"
    });
    $.__views.__alloyId8790.add($.__views.__alloyId8791);
    $.__views.__alloyId8792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8792"
    });
    $.__views.__alloyId8791.add($.__views.__alloyId8792);
    $.__views.__alloyId8793 = Ti.UI.createView({
        id: "__alloyId8793"
    });
    $.__views.__alloyId8793 && $.addTopLevelView($.__views.__alloyId8793);
    $.__views.__alloyId8794 = Ti.UI.createView({
        id: "__alloyId8794"
    });
    $.__views.__alloyId8793.add($.__views.__alloyId8794);
    $.__views.__alloyId8795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8795"
    });
    $.__views.__alloyId8794.add($.__views.__alloyId8795);
    $.__views.__alloyId8796 = Ti.UI.createView({
        id: "__alloyId8796"
    });
    $.__views.__alloyId8796 && $.addTopLevelView($.__views.__alloyId8796);
    $.__views.__alloyId8797 = Ti.UI.createView({
        id: "__alloyId8797"
    });
    $.__views.__alloyId8796.add($.__views.__alloyId8797);
    $.__views.__alloyId8798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8798"
    });
    $.__views.__alloyId8797.add($.__views.__alloyId8798);
    $.__views.__alloyId8799 = Ti.UI.createView({
        id: "__alloyId8799"
    });
    $.__views.__alloyId8799 && $.addTopLevelView($.__views.__alloyId8799);
    $.__views.__alloyId8800 = Ti.UI.createView({
        id: "__alloyId8800"
    });
    $.__views.__alloyId8799.add($.__views.__alloyId8800);
    $.__views.__alloyId8801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8801"
    });
    $.__views.__alloyId8800.add($.__views.__alloyId8801);
    $.__views.__alloyId8802 = Ti.UI.createView({
        id: "__alloyId8802"
    });
    $.__views.__alloyId8802 && $.addTopLevelView($.__views.__alloyId8802);
    $.__views.__alloyId8803 = Ti.UI.createView({
        id: "__alloyId8803"
    });
    $.__views.__alloyId8802.add($.__views.__alloyId8803);
    $.__views.__alloyId8804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8804"
    });
    $.__views.__alloyId8803.add($.__views.__alloyId8804);
    $.__views.__alloyId8805 = Ti.UI.createView({
        id: "__alloyId8805"
    });
    $.__views.__alloyId8805 && $.addTopLevelView($.__views.__alloyId8805);
    $.__views.__alloyId8806 = Ti.UI.createView({
        id: "__alloyId8806"
    });
    $.__views.__alloyId8805.add($.__views.__alloyId8806);
    $.__views.__alloyId8807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8807"
    });
    $.__views.__alloyId8806.add($.__views.__alloyId8807);
    $.__views.__alloyId8808 = Ti.UI.createView({
        id: "__alloyId8808"
    });
    $.__views.__alloyId8808 && $.addTopLevelView($.__views.__alloyId8808);
    $.__views.__alloyId8809 = Ti.UI.createView({
        id: "__alloyId8809"
    });
    $.__views.__alloyId8808.add($.__views.__alloyId8809);
    $.__views.__alloyId8810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8810"
    });
    $.__views.__alloyId8809.add($.__views.__alloyId8810);
    $.__views.__alloyId8811 = Ti.UI.createView({
        id: "__alloyId8811"
    });
    $.__views.__alloyId8811 && $.addTopLevelView($.__views.__alloyId8811);
    $.__views.__alloyId8812 = Ti.UI.createView({
        id: "__alloyId8812"
    });
    $.__views.__alloyId8811.add($.__views.__alloyId8812);
    $.__views.__alloyId8813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8813"
    });
    $.__views.__alloyId8812.add($.__views.__alloyId8813);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;