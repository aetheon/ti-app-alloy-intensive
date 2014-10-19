function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_431";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_431 = Ti.UI.createView({
        id: "widget_431"
    });
    $.__views.widget_431 && $.addTopLevelView($.__views.widget_431);
    $.__views.__alloyId9646 = Ti.UI.createView({
        id: "__alloyId9646"
    });
    $.__views.widget_431.add($.__views.__alloyId9646);
    $.__views.__alloyId9647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9647"
    });
    $.__views.__alloyId9646.add($.__views.__alloyId9647);
    $.__views.__alloyId9648 = Ti.UI.createView({
        id: "__alloyId9648"
    });
    $.__views.__alloyId9648 && $.addTopLevelView($.__views.__alloyId9648);
    $.__views.__alloyId9649 = Ti.UI.createView({
        id: "__alloyId9649"
    });
    $.__views.__alloyId9648.add($.__views.__alloyId9649);
    $.__views.__alloyId9650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9650"
    });
    $.__views.__alloyId9649.add($.__views.__alloyId9650);
    $.__views.__alloyId9651 = Ti.UI.createView({
        id: "__alloyId9651"
    });
    $.__views.__alloyId9651 && $.addTopLevelView($.__views.__alloyId9651);
    $.__views.__alloyId9652 = Ti.UI.createView({
        id: "__alloyId9652"
    });
    $.__views.__alloyId9651.add($.__views.__alloyId9652);
    $.__views.__alloyId9653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9653"
    });
    $.__views.__alloyId9652.add($.__views.__alloyId9653);
    $.__views.__alloyId9654 = Ti.UI.createView({
        id: "__alloyId9654"
    });
    $.__views.__alloyId9654 && $.addTopLevelView($.__views.__alloyId9654);
    $.__views.__alloyId9655 = Ti.UI.createView({
        id: "__alloyId9655"
    });
    $.__views.__alloyId9654.add($.__views.__alloyId9655);
    $.__views.__alloyId9656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9656"
    });
    $.__views.__alloyId9655.add($.__views.__alloyId9656);
    $.__views.__alloyId9657 = Ti.UI.createView({
        id: "__alloyId9657"
    });
    $.__views.__alloyId9657 && $.addTopLevelView($.__views.__alloyId9657);
    $.__views.__alloyId9658 = Ti.UI.createView({
        id: "__alloyId9658"
    });
    $.__views.__alloyId9657.add($.__views.__alloyId9658);
    $.__views.__alloyId9659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9659"
    });
    $.__views.__alloyId9658.add($.__views.__alloyId9659);
    $.__views.__alloyId9660 = Ti.UI.createView({
        id: "__alloyId9660"
    });
    $.__views.__alloyId9660 && $.addTopLevelView($.__views.__alloyId9660);
    $.__views.__alloyId9661 = Ti.UI.createView({
        id: "__alloyId9661"
    });
    $.__views.__alloyId9660.add($.__views.__alloyId9661);
    $.__views.__alloyId9662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9662"
    });
    $.__views.__alloyId9661.add($.__views.__alloyId9662);
    $.__views.__alloyId9663 = Ti.UI.createView({
        id: "__alloyId9663"
    });
    $.__views.__alloyId9663 && $.addTopLevelView($.__views.__alloyId9663);
    $.__views.__alloyId9664 = Ti.UI.createView({
        id: "__alloyId9664"
    });
    $.__views.__alloyId9663.add($.__views.__alloyId9664);
    $.__views.__alloyId9665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9665"
    });
    $.__views.__alloyId9664.add($.__views.__alloyId9665);
    $.__views.__alloyId9666 = Ti.UI.createView({
        id: "__alloyId9666"
    });
    $.__views.__alloyId9666 && $.addTopLevelView($.__views.__alloyId9666);
    $.__views.__alloyId9667 = Ti.UI.createView({
        id: "__alloyId9667"
    });
    $.__views.__alloyId9666.add($.__views.__alloyId9667);
    $.__views.__alloyId9668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9668"
    });
    $.__views.__alloyId9667.add($.__views.__alloyId9668);
    $.__views.__alloyId9669 = Ti.UI.createView({
        id: "__alloyId9669"
    });
    $.__views.__alloyId9669 && $.addTopLevelView($.__views.__alloyId9669);
    $.__views.__alloyId9670 = Ti.UI.createView({
        id: "__alloyId9670"
    });
    $.__views.__alloyId9669.add($.__views.__alloyId9670);
    $.__views.__alloyId9671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9671"
    });
    $.__views.__alloyId9670.add($.__views.__alloyId9671);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;