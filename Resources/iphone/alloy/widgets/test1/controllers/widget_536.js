function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_536";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_536 = Ti.UI.createView({
        id: "widget_536"
    });
    $.__views.widget_536 && $.addTopLevelView($.__views.widget_536);
    $.__views.__alloyId12662 = Ti.UI.createView({
        id: "__alloyId12662"
    });
    $.__views.widget_536.add($.__views.__alloyId12662);
    $.__views.__alloyId12663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12663"
    });
    $.__views.__alloyId12662.add($.__views.__alloyId12663);
    $.__views.__alloyId12664 = Ti.UI.createView({
        id: "__alloyId12664"
    });
    $.__views.__alloyId12664 && $.addTopLevelView($.__views.__alloyId12664);
    $.__views.__alloyId12665 = Ti.UI.createView({
        id: "__alloyId12665"
    });
    $.__views.__alloyId12664.add($.__views.__alloyId12665);
    $.__views.__alloyId12666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12666"
    });
    $.__views.__alloyId12665.add($.__views.__alloyId12666);
    $.__views.__alloyId12667 = Ti.UI.createView({
        id: "__alloyId12667"
    });
    $.__views.__alloyId12667 && $.addTopLevelView($.__views.__alloyId12667);
    $.__views.__alloyId12668 = Ti.UI.createView({
        id: "__alloyId12668"
    });
    $.__views.__alloyId12667.add($.__views.__alloyId12668);
    $.__views.__alloyId12669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12669"
    });
    $.__views.__alloyId12668.add($.__views.__alloyId12669);
    $.__views.__alloyId12670 = Ti.UI.createView({
        id: "__alloyId12670"
    });
    $.__views.__alloyId12670 && $.addTopLevelView($.__views.__alloyId12670);
    $.__views.__alloyId12671 = Ti.UI.createView({
        id: "__alloyId12671"
    });
    $.__views.__alloyId12670.add($.__views.__alloyId12671);
    $.__views.__alloyId12672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12672"
    });
    $.__views.__alloyId12671.add($.__views.__alloyId12672);
    $.__views.__alloyId12673 = Ti.UI.createView({
        id: "__alloyId12673"
    });
    $.__views.__alloyId12673 && $.addTopLevelView($.__views.__alloyId12673);
    $.__views.__alloyId12674 = Ti.UI.createView({
        id: "__alloyId12674"
    });
    $.__views.__alloyId12673.add($.__views.__alloyId12674);
    $.__views.__alloyId12675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12675"
    });
    $.__views.__alloyId12674.add($.__views.__alloyId12675);
    $.__views.__alloyId12676 = Ti.UI.createView({
        id: "__alloyId12676"
    });
    $.__views.__alloyId12676 && $.addTopLevelView($.__views.__alloyId12676);
    $.__views.__alloyId12677 = Ti.UI.createView({
        id: "__alloyId12677"
    });
    $.__views.__alloyId12676.add($.__views.__alloyId12677);
    $.__views.__alloyId12678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12678"
    });
    $.__views.__alloyId12677.add($.__views.__alloyId12678);
    $.__views.__alloyId12679 = Ti.UI.createView({
        id: "__alloyId12679"
    });
    $.__views.__alloyId12679 && $.addTopLevelView($.__views.__alloyId12679);
    $.__views.__alloyId12680 = Ti.UI.createView({
        id: "__alloyId12680"
    });
    $.__views.__alloyId12679.add($.__views.__alloyId12680);
    $.__views.__alloyId12681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12681"
    });
    $.__views.__alloyId12680.add($.__views.__alloyId12681);
    $.__views.__alloyId12682 = Ti.UI.createView({
        id: "__alloyId12682"
    });
    $.__views.__alloyId12682 && $.addTopLevelView($.__views.__alloyId12682);
    $.__views.__alloyId12683 = Ti.UI.createView({
        id: "__alloyId12683"
    });
    $.__views.__alloyId12682.add($.__views.__alloyId12683);
    $.__views.__alloyId12684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12684"
    });
    $.__views.__alloyId12683.add($.__views.__alloyId12684);
    $.__views.__alloyId12685 = Ti.UI.createView({
        id: "__alloyId12685"
    });
    $.__views.__alloyId12685 && $.addTopLevelView($.__views.__alloyId12685);
    $.__views.__alloyId12686 = Ti.UI.createView({
        id: "__alloyId12686"
    });
    $.__views.__alloyId12685.add($.__views.__alloyId12686);
    $.__views.__alloyId12687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12687"
    });
    $.__views.__alloyId12686.add($.__views.__alloyId12687);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;