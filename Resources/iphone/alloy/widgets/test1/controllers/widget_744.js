function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_744";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_744 = Ti.UI.createView({
        id: "widget_744"
    });
    $.__views.widget_744 && $.addTopLevelView($.__views.widget_744);
    $.__views.__alloyId18668 = Ti.UI.createView({
        id: "__alloyId18668"
    });
    $.__views.widget_744.add($.__views.__alloyId18668);
    $.__views.__alloyId18669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18669"
    });
    $.__views.__alloyId18668.add($.__views.__alloyId18669);
    $.__views.__alloyId18670 = Ti.UI.createView({
        id: "__alloyId18670"
    });
    $.__views.__alloyId18670 && $.addTopLevelView($.__views.__alloyId18670);
    $.__views.__alloyId18671 = Ti.UI.createView({
        id: "__alloyId18671"
    });
    $.__views.__alloyId18670.add($.__views.__alloyId18671);
    $.__views.__alloyId18672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18672"
    });
    $.__views.__alloyId18671.add($.__views.__alloyId18672);
    $.__views.__alloyId18673 = Ti.UI.createView({
        id: "__alloyId18673"
    });
    $.__views.__alloyId18673 && $.addTopLevelView($.__views.__alloyId18673);
    $.__views.__alloyId18674 = Ti.UI.createView({
        id: "__alloyId18674"
    });
    $.__views.__alloyId18673.add($.__views.__alloyId18674);
    $.__views.__alloyId18675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18675"
    });
    $.__views.__alloyId18674.add($.__views.__alloyId18675);
    $.__views.__alloyId18676 = Ti.UI.createView({
        id: "__alloyId18676"
    });
    $.__views.__alloyId18676 && $.addTopLevelView($.__views.__alloyId18676);
    $.__views.__alloyId18677 = Ti.UI.createView({
        id: "__alloyId18677"
    });
    $.__views.__alloyId18676.add($.__views.__alloyId18677);
    $.__views.__alloyId18678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18678"
    });
    $.__views.__alloyId18677.add($.__views.__alloyId18678);
    $.__views.__alloyId18679 = Ti.UI.createView({
        id: "__alloyId18679"
    });
    $.__views.__alloyId18679 && $.addTopLevelView($.__views.__alloyId18679);
    $.__views.__alloyId18680 = Ti.UI.createView({
        id: "__alloyId18680"
    });
    $.__views.__alloyId18679.add($.__views.__alloyId18680);
    $.__views.__alloyId18681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18681"
    });
    $.__views.__alloyId18680.add($.__views.__alloyId18681);
    $.__views.__alloyId18682 = Ti.UI.createView({
        id: "__alloyId18682"
    });
    $.__views.__alloyId18682 && $.addTopLevelView($.__views.__alloyId18682);
    $.__views.__alloyId18683 = Ti.UI.createView({
        id: "__alloyId18683"
    });
    $.__views.__alloyId18682.add($.__views.__alloyId18683);
    $.__views.__alloyId18684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18684"
    });
    $.__views.__alloyId18683.add($.__views.__alloyId18684);
    $.__views.__alloyId18685 = Ti.UI.createView({
        id: "__alloyId18685"
    });
    $.__views.__alloyId18685 && $.addTopLevelView($.__views.__alloyId18685);
    $.__views.__alloyId18686 = Ti.UI.createView({
        id: "__alloyId18686"
    });
    $.__views.__alloyId18685.add($.__views.__alloyId18686);
    $.__views.__alloyId18687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18687"
    });
    $.__views.__alloyId18686.add($.__views.__alloyId18687);
    $.__views.__alloyId18688 = Ti.UI.createView({
        id: "__alloyId18688"
    });
    $.__views.__alloyId18688 && $.addTopLevelView($.__views.__alloyId18688);
    $.__views.__alloyId18689 = Ti.UI.createView({
        id: "__alloyId18689"
    });
    $.__views.__alloyId18688.add($.__views.__alloyId18689);
    $.__views.__alloyId18690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18690"
    });
    $.__views.__alloyId18689.add($.__views.__alloyId18690);
    $.__views.__alloyId18691 = Ti.UI.createView({
        id: "__alloyId18691"
    });
    $.__views.__alloyId18691 && $.addTopLevelView($.__views.__alloyId18691);
    $.__views.__alloyId18692 = Ti.UI.createView({
        id: "__alloyId18692"
    });
    $.__views.__alloyId18691.add($.__views.__alloyId18692);
    $.__views.__alloyId18693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18693"
    });
    $.__views.__alloyId18692.add($.__views.__alloyId18693);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;