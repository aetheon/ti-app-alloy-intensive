function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_362";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_362 = Ti.UI.createView({
        id: "widget_362"
    });
    $.__views.widget_362 && $.addTopLevelView($.__views.widget_362);
    $.__views.__alloyId7644 = Ti.UI.createView({
        id: "__alloyId7644"
    });
    $.__views.widget_362.add($.__views.__alloyId7644);
    $.__views.__alloyId7645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7645"
    });
    $.__views.__alloyId7644.add($.__views.__alloyId7645);
    $.__views.__alloyId7646 = Ti.UI.createView({
        id: "__alloyId7646"
    });
    $.__views.__alloyId7646 && $.addTopLevelView($.__views.__alloyId7646);
    $.__views.__alloyId7647 = Ti.UI.createView({
        id: "__alloyId7647"
    });
    $.__views.__alloyId7646.add($.__views.__alloyId7647);
    $.__views.__alloyId7648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7648"
    });
    $.__views.__alloyId7647.add($.__views.__alloyId7648);
    $.__views.__alloyId7649 = Ti.UI.createView({
        id: "__alloyId7649"
    });
    $.__views.__alloyId7649 && $.addTopLevelView($.__views.__alloyId7649);
    $.__views.__alloyId7650 = Ti.UI.createView({
        id: "__alloyId7650"
    });
    $.__views.__alloyId7649.add($.__views.__alloyId7650);
    $.__views.__alloyId7651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7651"
    });
    $.__views.__alloyId7650.add($.__views.__alloyId7651);
    $.__views.__alloyId7652 = Ti.UI.createView({
        id: "__alloyId7652"
    });
    $.__views.__alloyId7652 && $.addTopLevelView($.__views.__alloyId7652);
    $.__views.__alloyId7653 = Ti.UI.createView({
        id: "__alloyId7653"
    });
    $.__views.__alloyId7652.add($.__views.__alloyId7653);
    $.__views.__alloyId7654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7654"
    });
    $.__views.__alloyId7653.add($.__views.__alloyId7654);
    $.__views.__alloyId7655 = Ti.UI.createView({
        id: "__alloyId7655"
    });
    $.__views.__alloyId7655 && $.addTopLevelView($.__views.__alloyId7655);
    $.__views.__alloyId7656 = Ti.UI.createView({
        id: "__alloyId7656"
    });
    $.__views.__alloyId7655.add($.__views.__alloyId7656);
    $.__views.__alloyId7657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7657"
    });
    $.__views.__alloyId7656.add($.__views.__alloyId7657);
    $.__views.__alloyId7658 = Ti.UI.createView({
        id: "__alloyId7658"
    });
    $.__views.__alloyId7658 && $.addTopLevelView($.__views.__alloyId7658);
    $.__views.__alloyId7659 = Ti.UI.createView({
        id: "__alloyId7659"
    });
    $.__views.__alloyId7658.add($.__views.__alloyId7659);
    $.__views.__alloyId7660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7660"
    });
    $.__views.__alloyId7659.add($.__views.__alloyId7660);
    $.__views.__alloyId7661 = Ti.UI.createView({
        id: "__alloyId7661"
    });
    $.__views.__alloyId7661 && $.addTopLevelView($.__views.__alloyId7661);
    $.__views.__alloyId7662 = Ti.UI.createView({
        id: "__alloyId7662"
    });
    $.__views.__alloyId7661.add($.__views.__alloyId7662);
    $.__views.__alloyId7663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7663"
    });
    $.__views.__alloyId7662.add($.__views.__alloyId7663);
    $.__views.__alloyId7664 = Ti.UI.createView({
        id: "__alloyId7664"
    });
    $.__views.__alloyId7664 && $.addTopLevelView($.__views.__alloyId7664);
    $.__views.__alloyId7665 = Ti.UI.createView({
        id: "__alloyId7665"
    });
    $.__views.__alloyId7664.add($.__views.__alloyId7665);
    $.__views.__alloyId7666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7666"
    });
    $.__views.__alloyId7665.add($.__views.__alloyId7666);
    $.__views.__alloyId7667 = Ti.UI.createView({
        id: "__alloyId7667"
    });
    $.__views.__alloyId7667 && $.addTopLevelView($.__views.__alloyId7667);
    $.__views.__alloyId7668 = Ti.UI.createView({
        id: "__alloyId7668"
    });
    $.__views.__alloyId7667.add($.__views.__alloyId7668);
    $.__views.__alloyId7669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7669"
    });
    $.__views.__alloyId7668.add($.__views.__alloyId7669);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;