function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_675";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_675 = Ti.UI.createView({
        id: "widget_675"
    });
    $.__views.widget_675 && $.addTopLevelView($.__views.widget_675);
    $.__views.__alloyId16666 = Ti.UI.createView({
        id: "__alloyId16666"
    });
    $.__views.widget_675.add($.__views.__alloyId16666);
    $.__views.__alloyId16667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16667"
    });
    $.__views.__alloyId16666.add($.__views.__alloyId16667);
    $.__views.__alloyId16668 = Ti.UI.createView({
        id: "__alloyId16668"
    });
    $.__views.__alloyId16668 && $.addTopLevelView($.__views.__alloyId16668);
    $.__views.__alloyId16669 = Ti.UI.createView({
        id: "__alloyId16669"
    });
    $.__views.__alloyId16668.add($.__views.__alloyId16669);
    $.__views.__alloyId16670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16670"
    });
    $.__views.__alloyId16669.add($.__views.__alloyId16670);
    $.__views.__alloyId16671 = Ti.UI.createView({
        id: "__alloyId16671"
    });
    $.__views.__alloyId16671 && $.addTopLevelView($.__views.__alloyId16671);
    $.__views.__alloyId16672 = Ti.UI.createView({
        id: "__alloyId16672"
    });
    $.__views.__alloyId16671.add($.__views.__alloyId16672);
    $.__views.__alloyId16673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16673"
    });
    $.__views.__alloyId16672.add($.__views.__alloyId16673);
    $.__views.__alloyId16674 = Ti.UI.createView({
        id: "__alloyId16674"
    });
    $.__views.__alloyId16674 && $.addTopLevelView($.__views.__alloyId16674);
    $.__views.__alloyId16675 = Ti.UI.createView({
        id: "__alloyId16675"
    });
    $.__views.__alloyId16674.add($.__views.__alloyId16675);
    $.__views.__alloyId16676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16676"
    });
    $.__views.__alloyId16675.add($.__views.__alloyId16676);
    $.__views.__alloyId16677 = Ti.UI.createView({
        id: "__alloyId16677"
    });
    $.__views.__alloyId16677 && $.addTopLevelView($.__views.__alloyId16677);
    $.__views.__alloyId16678 = Ti.UI.createView({
        id: "__alloyId16678"
    });
    $.__views.__alloyId16677.add($.__views.__alloyId16678);
    $.__views.__alloyId16679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16679"
    });
    $.__views.__alloyId16678.add($.__views.__alloyId16679);
    $.__views.__alloyId16680 = Ti.UI.createView({
        id: "__alloyId16680"
    });
    $.__views.__alloyId16680 && $.addTopLevelView($.__views.__alloyId16680);
    $.__views.__alloyId16681 = Ti.UI.createView({
        id: "__alloyId16681"
    });
    $.__views.__alloyId16680.add($.__views.__alloyId16681);
    $.__views.__alloyId16682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16682"
    });
    $.__views.__alloyId16681.add($.__views.__alloyId16682);
    $.__views.__alloyId16683 = Ti.UI.createView({
        id: "__alloyId16683"
    });
    $.__views.__alloyId16683 && $.addTopLevelView($.__views.__alloyId16683);
    $.__views.__alloyId16684 = Ti.UI.createView({
        id: "__alloyId16684"
    });
    $.__views.__alloyId16683.add($.__views.__alloyId16684);
    $.__views.__alloyId16685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16685"
    });
    $.__views.__alloyId16684.add($.__views.__alloyId16685);
    $.__views.__alloyId16686 = Ti.UI.createView({
        id: "__alloyId16686"
    });
    $.__views.__alloyId16686 && $.addTopLevelView($.__views.__alloyId16686);
    $.__views.__alloyId16687 = Ti.UI.createView({
        id: "__alloyId16687"
    });
    $.__views.__alloyId16686.add($.__views.__alloyId16687);
    $.__views.__alloyId16688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16688"
    });
    $.__views.__alloyId16687.add($.__views.__alloyId16688);
    $.__views.__alloyId16689 = Ti.UI.createView({
        id: "__alloyId16689"
    });
    $.__views.__alloyId16689 && $.addTopLevelView($.__views.__alloyId16689);
    $.__views.__alloyId16690 = Ti.UI.createView({
        id: "__alloyId16690"
    });
    $.__views.__alloyId16689.add($.__views.__alloyId16690);
    $.__views.__alloyId16691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16691"
    });
    $.__views.__alloyId16690.add($.__views.__alloyId16691);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;