function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_363";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_363 = Ti.UI.createView({
        id: "widget_363"
    });
    $.__views.widget_363 && $.addTopLevelView($.__views.widget_363);
    $.__views.__alloyId7670 = Ti.UI.createView({
        id: "__alloyId7670"
    });
    $.__views.widget_363.add($.__views.__alloyId7670);
    $.__views.__alloyId7671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7671"
    });
    $.__views.__alloyId7670.add($.__views.__alloyId7671);
    $.__views.__alloyId7672 = Ti.UI.createView({
        id: "__alloyId7672"
    });
    $.__views.__alloyId7672 && $.addTopLevelView($.__views.__alloyId7672);
    $.__views.__alloyId7673 = Ti.UI.createView({
        id: "__alloyId7673"
    });
    $.__views.__alloyId7672.add($.__views.__alloyId7673);
    $.__views.__alloyId7674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7674"
    });
    $.__views.__alloyId7673.add($.__views.__alloyId7674);
    $.__views.__alloyId7675 = Ti.UI.createView({
        id: "__alloyId7675"
    });
    $.__views.__alloyId7675 && $.addTopLevelView($.__views.__alloyId7675);
    $.__views.__alloyId7676 = Ti.UI.createView({
        id: "__alloyId7676"
    });
    $.__views.__alloyId7675.add($.__views.__alloyId7676);
    $.__views.__alloyId7677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7677"
    });
    $.__views.__alloyId7676.add($.__views.__alloyId7677);
    $.__views.__alloyId7678 = Ti.UI.createView({
        id: "__alloyId7678"
    });
    $.__views.__alloyId7678 && $.addTopLevelView($.__views.__alloyId7678);
    $.__views.__alloyId7679 = Ti.UI.createView({
        id: "__alloyId7679"
    });
    $.__views.__alloyId7678.add($.__views.__alloyId7679);
    $.__views.__alloyId7680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7680"
    });
    $.__views.__alloyId7679.add($.__views.__alloyId7680);
    $.__views.__alloyId7681 = Ti.UI.createView({
        id: "__alloyId7681"
    });
    $.__views.__alloyId7681 && $.addTopLevelView($.__views.__alloyId7681);
    $.__views.__alloyId7682 = Ti.UI.createView({
        id: "__alloyId7682"
    });
    $.__views.__alloyId7681.add($.__views.__alloyId7682);
    $.__views.__alloyId7683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7683"
    });
    $.__views.__alloyId7682.add($.__views.__alloyId7683);
    $.__views.__alloyId7684 = Ti.UI.createView({
        id: "__alloyId7684"
    });
    $.__views.__alloyId7684 && $.addTopLevelView($.__views.__alloyId7684);
    $.__views.__alloyId7685 = Ti.UI.createView({
        id: "__alloyId7685"
    });
    $.__views.__alloyId7684.add($.__views.__alloyId7685);
    $.__views.__alloyId7686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7686"
    });
    $.__views.__alloyId7685.add($.__views.__alloyId7686);
    $.__views.__alloyId7687 = Ti.UI.createView({
        id: "__alloyId7687"
    });
    $.__views.__alloyId7687 && $.addTopLevelView($.__views.__alloyId7687);
    $.__views.__alloyId7688 = Ti.UI.createView({
        id: "__alloyId7688"
    });
    $.__views.__alloyId7687.add($.__views.__alloyId7688);
    $.__views.__alloyId7689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7689"
    });
    $.__views.__alloyId7688.add($.__views.__alloyId7689);
    $.__views.__alloyId7690 = Ti.UI.createView({
        id: "__alloyId7690"
    });
    $.__views.__alloyId7690 && $.addTopLevelView($.__views.__alloyId7690);
    $.__views.__alloyId7691 = Ti.UI.createView({
        id: "__alloyId7691"
    });
    $.__views.__alloyId7690.add($.__views.__alloyId7691);
    $.__views.__alloyId7692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7692"
    });
    $.__views.__alloyId7691.add($.__views.__alloyId7692);
    $.__views.__alloyId7693 = Ti.UI.createView({
        id: "__alloyId7693"
    });
    $.__views.__alloyId7693 && $.addTopLevelView($.__views.__alloyId7693);
    $.__views.__alloyId7694 = Ti.UI.createView({
        id: "__alloyId7694"
    });
    $.__views.__alloyId7693.add($.__views.__alloyId7694);
    $.__views.__alloyId7695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7695"
    });
    $.__views.__alloyId7694.add($.__views.__alloyId7695);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;