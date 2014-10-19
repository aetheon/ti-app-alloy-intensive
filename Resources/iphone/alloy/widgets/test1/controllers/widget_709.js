function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_709";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_709 = Ti.UI.createView({
        id: "widget_709"
    });
    $.__views.widget_709 && $.addTopLevelView($.__views.widget_709);
    $.__views.__alloyId17654 = Ti.UI.createView({
        id: "__alloyId17654"
    });
    $.__views.widget_709.add($.__views.__alloyId17654);
    $.__views.__alloyId17655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17655"
    });
    $.__views.__alloyId17654.add($.__views.__alloyId17655);
    $.__views.__alloyId17656 = Ti.UI.createView({
        id: "__alloyId17656"
    });
    $.__views.__alloyId17656 && $.addTopLevelView($.__views.__alloyId17656);
    $.__views.__alloyId17657 = Ti.UI.createView({
        id: "__alloyId17657"
    });
    $.__views.__alloyId17656.add($.__views.__alloyId17657);
    $.__views.__alloyId17658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17658"
    });
    $.__views.__alloyId17657.add($.__views.__alloyId17658);
    $.__views.__alloyId17659 = Ti.UI.createView({
        id: "__alloyId17659"
    });
    $.__views.__alloyId17659 && $.addTopLevelView($.__views.__alloyId17659);
    $.__views.__alloyId17660 = Ti.UI.createView({
        id: "__alloyId17660"
    });
    $.__views.__alloyId17659.add($.__views.__alloyId17660);
    $.__views.__alloyId17661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17661"
    });
    $.__views.__alloyId17660.add($.__views.__alloyId17661);
    $.__views.__alloyId17662 = Ti.UI.createView({
        id: "__alloyId17662"
    });
    $.__views.__alloyId17662 && $.addTopLevelView($.__views.__alloyId17662);
    $.__views.__alloyId17663 = Ti.UI.createView({
        id: "__alloyId17663"
    });
    $.__views.__alloyId17662.add($.__views.__alloyId17663);
    $.__views.__alloyId17664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17664"
    });
    $.__views.__alloyId17663.add($.__views.__alloyId17664);
    $.__views.__alloyId17665 = Ti.UI.createView({
        id: "__alloyId17665"
    });
    $.__views.__alloyId17665 && $.addTopLevelView($.__views.__alloyId17665);
    $.__views.__alloyId17666 = Ti.UI.createView({
        id: "__alloyId17666"
    });
    $.__views.__alloyId17665.add($.__views.__alloyId17666);
    $.__views.__alloyId17667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17667"
    });
    $.__views.__alloyId17666.add($.__views.__alloyId17667);
    $.__views.__alloyId17668 = Ti.UI.createView({
        id: "__alloyId17668"
    });
    $.__views.__alloyId17668 && $.addTopLevelView($.__views.__alloyId17668);
    $.__views.__alloyId17669 = Ti.UI.createView({
        id: "__alloyId17669"
    });
    $.__views.__alloyId17668.add($.__views.__alloyId17669);
    $.__views.__alloyId17670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17670"
    });
    $.__views.__alloyId17669.add($.__views.__alloyId17670);
    $.__views.__alloyId17671 = Ti.UI.createView({
        id: "__alloyId17671"
    });
    $.__views.__alloyId17671 && $.addTopLevelView($.__views.__alloyId17671);
    $.__views.__alloyId17672 = Ti.UI.createView({
        id: "__alloyId17672"
    });
    $.__views.__alloyId17671.add($.__views.__alloyId17672);
    $.__views.__alloyId17673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17673"
    });
    $.__views.__alloyId17672.add($.__views.__alloyId17673);
    $.__views.__alloyId17674 = Ti.UI.createView({
        id: "__alloyId17674"
    });
    $.__views.__alloyId17674 && $.addTopLevelView($.__views.__alloyId17674);
    $.__views.__alloyId17675 = Ti.UI.createView({
        id: "__alloyId17675"
    });
    $.__views.__alloyId17674.add($.__views.__alloyId17675);
    $.__views.__alloyId17676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17676"
    });
    $.__views.__alloyId17675.add($.__views.__alloyId17676);
    $.__views.__alloyId17677 = Ti.UI.createView({
        id: "__alloyId17677"
    });
    $.__views.__alloyId17677 && $.addTopLevelView($.__views.__alloyId17677);
    $.__views.__alloyId17678 = Ti.UI.createView({
        id: "__alloyId17678"
    });
    $.__views.__alloyId17677.add($.__views.__alloyId17678);
    $.__views.__alloyId17679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17679"
    });
    $.__views.__alloyId17678.add($.__views.__alloyId17679);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;