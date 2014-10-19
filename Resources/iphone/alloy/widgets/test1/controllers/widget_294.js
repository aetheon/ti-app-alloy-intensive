function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_294";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_294 = Ti.UI.createView({
        id: "widget_294"
    });
    $.__views.widget_294 && $.addTopLevelView($.__views.widget_294);
    $.__views.__alloyId5668 = Ti.UI.createView({
        id: "__alloyId5668"
    });
    $.__views.widget_294.add($.__views.__alloyId5668);
    $.__views.__alloyId5669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5669"
    });
    $.__views.__alloyId5668.add($.__views.__alloyId5669);
    $.__views.__alloyId5670 = Ti.UI.createView({
        id: "__alloyId5670"
    });
    $.__views.__alloyId5670 && $.addTopLevelView($.__views.__alloyId5670);
    $.__views.__alloyId5671 = Ti.UI.createView({
        id: "__alloyId5671"
    });
    $.__views.__alloyId5670.add($.__views.__alloyId5671);
    $.__views.__alloyId5672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5672"
    });
    $.__views.__alloyId5671.add($.__views.__alloyId5672);
    $.__views.__alloyId5673 = Ti.UI.createView({
        id: "__alloyId5673"
    });
    $.__views.__alloyId5673 && $.addTopLevelView($.__views.__alloyId5673);
    $.__views.__alloyId5674 = Ti.UI.createView({
        id: "__alloyId5674"
    });
    $.__views.__alloyId5673.add($.__views.__alloyId5674);
    $.__views.__alloyId5675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5675"
    });
    $.__views.__alloyId5674.add($.__views.__alloyId5675);
    $.__views.__alloyId5676 = Ti.UI.createView({
        id: "__alloyId5676"
    });
    $.__views.__alloyId5676 && $.addTopLevelView($.__views.__alloyId5676);
    $.__views.__alloyId5677 = Ti.UI.createView({
        id: "__alloyId5677"
    });
    $.__views.__alloyId5676.add($.__views.__alloyId5677);
    $.__views.__alloyId5678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5678"
    });
    $.__views.__alloyId5677.add($.__views.__alloyId5678);
    $.__views.__alloyId5679 = Ti.UI.createView({
        id: "__alloyId5679"
    });
    $.__views.__alloyId5679 && $.addTopLevelView($.__views.__alloyId5679);
    $.__views.__alloyId5680 = Ti.UI.createView({
        id: "__alloyId5680"
    });
    $.__views.__alloyId5679.add($.__views.__alloyId5680);
    $.__views.__alloyId5681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5681"
    });
    $.__views.__alloyId5680.add($.__views.__alloyId5681);
    $.__views.__alloyId5682 = Ti.UI.createView({
        id: "__alloyId5682"
    });
    $.__views.__alloyId5682 && $.addTopLevelView($.__views.__alloyId5682);
    $.__views.__alloyId5683 = Ti.UI.createView({
        id: "__alloyId5683"
    });
    $.__views.__alloyId5682.add($.__views.__alloyId5683);
    $.__views.__alloyId5684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5684"
    });
    $.__views.__alloyId5683.add($.__views.__alloyId5684);
    $.__views.__alloyId5685 = Ti.UI.createView({
        id: "__alloyId5685"
    });
    $.__views.__alloyId5685 && $.addTopLevelView($.__views.__alloyId5685);
    $.__views.__alloyId5686 = Ti.UI.createView({
        id: "__alloyId5686"
    });
    $.__views.__alloyId5685.add($.__views.__alloyId5686);
    $.__views.__alloyId5687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5687"
    });
    $.__views.__alloyId5686.add($.__views.__alloyId5687);
    $.__views.__alloyId5688 = Ti.UI.createView({
        id: "__alloyId5688"
    });
    $.__views.__alloyId5688 && $.addTopLevelView($.__views.__alloyId5688);
    $.__views.__alloyId5689 = Ti.UI.createView({
        id: "__alloyId5689"
    });
    $.__views.__alloyId5688.add($.__views.__alloyId5689);
    $.__views.__alloyId5690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5690"
    });
    $.__views.__alloyId5689.add($.__views.__alloyId5690);
    $.__views.__alloyId5691 = Ti.UI.createView({
        id: "__alloyId5691"
    });
    $.__views.__alloyId5691 && $.addTopLevelView($.__views.__alloyId5691);
    $.__views.__alloyId5692 = Ti.UI.createView({
        id: "__alloyId5692"
    });
    $.__views.__alloyId5691.add($.__views.__alloyId5692);
    $.__views.__alloyId5693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5693"
    });
    $.__views.__alloyId5692.add($.__views.__alloyId5693);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;