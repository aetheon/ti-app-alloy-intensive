function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_398";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_398 = Ti.UI.createView({
        id: "widget_398"
    });
    $.__views.widget_398 && $.addTopLevelView($.__views.widget_398);
    $.__views.__alloyId8658 = Ti.UI.createView({
        id: "__alloyId8658"
    });
    $.__views.widget_398.add($.__views.__alloyId8658);
    $.__views.__alloyId8659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8659"
    });
    $.__views.__alloyId8658.add($.__views.__alloyId8659);
    $.__views.__alloyId8660 = Ti.UI.createView({
        id: "__alloyId8660"
    });
    $.__views.__alloyId8660 && $.addTopLevelView($.__views.__alloyId8660);
    $.__views.__alloyId8661 = Ti.UI.createView({
        id: "__alloyId8661"
    });
    $.__views.__alloyId8660.add($.__views.__alloyId8661);
    $.__views.__alloyId8662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8662"
    });
    $.__views.__alloyId8661.add($.__views.__alloyId8662);
    $.__views.__alloyId8663 = Ti.UI.createView({
        id: "__alloyId8663"
    });
    $.__views.__alloyId8663 && $.addTopLevelView($.__views.__alloyId8663);
    $.__views.__alloyId8664 = Ti.UI.createView({
        id: "__alloyId8664"
    });
    $.__views.__alloyId8663.add($.__views.__alloyId8664);
    $.__views.__alloyId8665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8665"
    });
    $.__views.__alloyId8664.add($.__views.__alloyId8665);
    $.__views.__alloyId8666 = Ti.UI.createView({
        id: "__alloyId8666"
    });
    $.__views.__alloyId8666 && $.addTopLevelView($.__views.__alloyId8666);
    $.__views.__alloyId8667 = Ti.UI.createView({
        id: "__alloyId8667"
    });
    $.__views.__alloyId8666.add($.__views.__alloyId8667);
    $.__views.__alloyId8668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8668"
    });
    $.__views.__alloyId8667.add($.__views.__alloyId8668);
    $.__views.__alloyId8669 = Ti.UI.createView({
        id: "__alloyId8669"
    });
    $.__views.__alloyId8669 && $.addTopLevelView($.__views.__alloyId8669);
    $.__views.__alloyId8670 = Ti.UI.createView({
        id: "__alloyId8670"
    });
    $.__views.__alloyId8669.add($.__views.__alloyId8670);
    $.__views.__alloyId8671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8671"
    });
    $.__views.__alloyId8670.add($.__views.__alloyId8671);
    $.__views.__alloyId8672 = Ti.UI.createView({
        id: "__alloyId8672"
    });
    $.__views.__alloyId8672 && $.addTopLevelView($.__views.__alloyId8672);
    $.__views.__alloyId8673 = Ti.UI.createView({
        id: "__alloyId8673"
    });
    $.__views.__alloyId8672.add($.__views.__alloyId8673);
    $.__views.__alloyId8674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8674"
    });
    $.__views.__alloyId8673.add($.__views.__alloyId8674);
    $.__views.__alloyId8675 = Ti.UI.createView({
        id: "__alloyId8675"
    });
    $.__views.__alloyId8675 && $.addTopLevelView($.__views.__alloyId8675);
    $.__views.__alloyId8676 = Ti.UI.createView({
        id: "__alloyId8676"
    });
    $.__views.__alloyId8675.add($.__views.__alloyId8676);
    $.__views.__alloyId8677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8677"
    });
    $.__views.__alloyId8676.add($.__views.__alloyId8677);
    $.__views.__alloyId8678 = Ti.UI.createView({
        id: "__alloyId8678"
    });
    $.__views.__alloyId8678 && $.addTopLevelView($.__views.__alloyId8678);
    $.__views.__alloyId8679 = Ti.UI.createView({
        id: "__alloyId8679"
    });
    $.__views.__alloyId8678.add($.__views.__alloyId8679);
    $.__views.__alloyId8680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8680"
    });
    $.__views.__alloyId8679.add($.__views.__alloyId8680);
    $.__views.__alloyId8681 = Ti.UI.createView({
        id: "__alloyId8681"
    });
    $.__views.__alloyId8681 && $.addTopLevelView($.__views.__alloyId8681);
    $.__views.__alloyId8682 = Ti.UI.createView({
        id: "__alloyId8682"
    });
    $.__views.__alloyId8681.add($.__views.__alloyId8682);
    $.__views.__alloyId8683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8683"
    });
    $.__views.__alloyId8682.add($.__views.__alloyId8683);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;