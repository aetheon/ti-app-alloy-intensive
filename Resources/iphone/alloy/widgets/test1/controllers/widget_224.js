function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_224";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_224 = Ti.UI.createView({
        id: "widget_224"
    });
    $.__views.widget_224 && $.addTopLevelView($.__views.widget_224);
    $.__views.__alloyId3666 = Ti.UI.createView({
        id: "__alloyId3666"
    });
    $.__views.widget_224.add($.__views.__alloyId3666);
    $.__views.__alloyId3667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3667"
    });
    $.__views.__alloyId3666.add($.__views.__alloyId3667);
    $.__views.__alloyId3668 = Ti.UI.createView({
        id: "__alloyId3668"
    });
    $.__views.__alloyId3668 && $.addTopLevelView($.__views.__alloyId3668);
    $.__views.__alloyId3669 = Ti.UI.createView({
        id: "__alloyId3669"
    });
    $.__views.__alloyId3668.add($.__views.__alloyId3669);
    $.__views.__alloyId3670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3670"
    });
    $.__views.__alloyId3669.add($.__views.__alloyId3670);
    $.__views.__alloyId3671 = Ti.UI.createView({
        id: "__alloyId3671"
    });
    $.__views.__alloyId3671 && $.addTopLevelView($.__views.__alloyId3671);
    $.__views.__alloyId3672 = Ti.UI.createView({
        id: "__alloyId3672"
    });
    $.__views.__alloyId3671.add($.__views.__alloyId3672);
    $.__views.__alloyId3673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3673"
    });
    $.__views.__alloyId3672.add($.__views.__alloyId3673);
    $.__views.__alloyId3674 = Ti.UI.createView({
        id: "__alloyId3674"
    });
    $.__views.__alloyId3674 && $.addTopLevelView($.__views.__alloyId3674);
    $.__views.__alloyId3675 = Ti.UI.createView({
        id: "__alloyId3675"
    });
    $.__views.__alloyId3674.add($.__views.__alloyId3675);
    $.__views.__alloyId3676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3676"
    });
    $.__views.__alloyId3675.add($.__views.__alloyId3676);
    $.__views.__alloyId3677 = Ti.UI.createView({
        id: "__alloyId3677"
    });
    $.__views.__alloyId3677 && $.addTopLevelView($.__views.__alloyId3677);
    $.__views.__alloyId3678 = Ti.UI.createView({
        id: "__alloyId3678"
    });
    $.__views.__alloyId3677.add($.__views.__alloyId3678);
    $.__views.__alloyId3679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3679"
    });
    $.__views.__alloyId3678.add($.__views.__alloyId3679);
    $.__views.__alloyId3680 = Ti.UI.createView({
        id: "__alloyId3680"
    });
    $.__views.__alloyId3680 && $.addTopLevelView($.__views.__alloyId3680);
    $.__views.__alloyId3681 = Ti.UI.createView({
        id: "__alloyId3681"
    });
    $.__views.__alloyId3680.add($.__views.__alloyId3681);
    $.__views.__alloyId3682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3682"
    });
    $.__views.__alloyId3681.add($.__views.__alloyId3682);
    $.__views.__alloyId3683 = Ti.UI.createView({
        id: "__alloyId3683"
    });
    $.__views.__alloyId3683 && $.addTopLevelView($.__views.__alloyId3683);
    $.__views.__alloyId3684 = Ti.UI.createView({
        id: "__alloyId3684"
    });
    $.__views.__alloyId3683.add($.__views.__alloyId3684);
    $.__views.__alloyId3685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3685"
    });
    $.__views.__alloyId3684.add($.__views.__alloyId3685);
    $.__views.__alloyId3686 = Ti.UI.createView({
        id: "__alloyId3686"
    });
    $.__views.__alloyId3686 && $.addTopLevelView($.__views.__alloyId3686);
    $.__views.__alloyId3687 = Ti.UI.createView({
        id: "__alloyId3687"
    });
    $.__views.__alloyId3686.add($.__views.__alloyId3687);
    $.__views.__alloyId3688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3688"
    });
    $.__views.__alloyId3687.add($.__views.__alloyId3688);
    $.__views.__alloyId3689 = Ti.UI.createView({
        id: "__alloyId3689"
    });
    $.__views.__alloyId3689 && $.addTopLevelView($.__views.__alloyId3689);
    $.__views.__alloyId3690 = Ti.UI.createView({
        id: "__alloyId3690"
    });
    $.__views.__alloyId3689.add($.__views.__alloyId3690);
    $.__views.__alloyId3691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3691"
    });
    $.__views.__alloyId3690.add($.__views.__alloyId3691);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;