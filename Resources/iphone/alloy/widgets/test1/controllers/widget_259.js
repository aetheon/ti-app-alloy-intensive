function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_259";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_259 = Ti.UI.createView({
        id: "widget_259"
    });
    $.__views.widget_259 && $.addTopLevelView($.__views.widget_259);
    $.__views.__alloyId4654 = Ti.UI.createView({
        id: "__alloyId4654"
    });
    $.__views.widget_259.add($.__views.__alloyId4654);
    $.__views.__alloyId4655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4655"
    });
    $.__views.__alloyId4654.add($.__views.__alloyId4655);
    $.__views.__alloyId4656 = Ti.UI.createView({
        id: "__alloyId4656"
    });
    $.__views.__alloyId4656 && $.addTopLevelView($.__views.__alloyId4656);
    $.__views.__alloyId4657 = Ti.UI.createView({
        id: "__alloyId4657"
    });
    $.__views.__alloyId4656.add($.__views.__alloyId4657);
    $.__views.__alloyId4658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4658"
    });
    $.__views.__alloyId4657.add($.__views.__alloyId4658);
    $.__views.__alloyId4659 = Ti.UI.createView({
        id: "__alloyId4659"
    });
    $.__views.__alloyId4659 && $.addTopLevelView($.__views.__alloyId4659);
    $.__views.__alloyId4660 = Ti.UI.createView({
        id: "__alloyId4660"
    });
    $.__views.__alloyId4659.add($.__views.__alloyId4660);
    $.__views.__alloyId4661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4661"
    });
    $.__views.__alloyId4660.add($.__views.__alloyId4661);
    $.__views.__alloyId4662 = Ti.UI.createView({
        id: "__alloyId4662"
    });
    $.__views.__alloyId4662 && $.addTopLevelView($.__views.__alloyId4662);
    $.__views.__alloyId4663 = Ti.UI.createView({
        id: "__alloyId4663"
    });
    $.__views.__alloyId4662.add($.__views.__alloyId4663);
    $.__views.__alloyId4664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4664"
    });
    $.__views.__alloyId4663.add($.__views.__alloyId4664);
    $.__views.__alloyId4665 = Ti.UI.createView({
        id: "__alloyId4665"
    });
    $.__views.__alloyId4665 && $.addTopLevelView($.__views.__alloyId4665);
    $.__views.__alloyId4666 = Ti.UI.createView({
        id: "__alloyId4666"
    });
    $.__views.__alloyId4665.add($.__views.__alloyId4666);
    $.__views.__alloyId4667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4667"
    });
    $.__views.__alloyId4666.add($.__views.__alloyId4667);
    $.__views.__alloyId4668 = Ti.UI.createView({
        id: "__alloyId4668"
    });
    $.__views.__alloyId4668 && $.addTopLevelView($.__views.__alloyId4668);
    $.__views.__alloyId4669 = Ti.UI.createView({
        id: "__alloyId4669"
    });
    $.__views.__alloyId4668.add($.__views.__alloyId4669);
    $.__views.__alloyId4670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4670"
    });
    $.__views.__alloyId4669.add($.__views.__alloyId4670);
    $.__views.__alloyId4671 = Ti.UI.createView({
        id: "__alloyId4671"
    });
    $.__views.__alloyId4671 && $.addTopLevelView($.__views.__alloyId4671);
    $.__views.__alloyId4672 = Ti.UI.createView({
        id: "__alloyId4672"
    });
    $.__views.__alloyId4671.add($.__views.__alloyId4672);
    $.__views.__alloyId4673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4673"
    });
    $.__views.__alloyId4672.add($.__views.__alloyId4673);
    $.__views.__alloyId4674 = Ti.UI.createView({
        id: "__alloyId4674"
    });
    $.__views.__alloyId4674 && $.addTopLevelView($.__views.__alloyId4674);
    $.__views.__alloyId4675 = Ti.UI.createView({
        id: "__alloyId4675"
    });
    $.__views.__alloyId4674.add($.__views.__alloyId4675);
    $.__views.__alloyId4676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4676"
    });
    $.__views.__alloyId4675.add($.__views.__alloyId4676);
    $.__views.__alloyId4677 = Ti.UI.createView({
        id: "__alloyId4677"
    });
    $.__views.__alloyId4677 && $.addTopLevelView($.__views.__alloyId4677);
    $.__views.__alloyId4678 = Ti.UI.createView({
        id: "__alloyId4678"
    });
    $.__views.__alloyId4677.add($.__views.__alloyId4678);
    $.__views.__alloyId4679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4679"
    });
    $.__views.__alloyId4678.add($.__views.__alloyId4679);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;