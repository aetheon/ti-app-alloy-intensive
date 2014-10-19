function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_605";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_605 = Ti.UI.createView({
        id: "widget_605"
    });
    $.__views.widget_605 && $.addTopLevelView($.__views.widget_605);
    $.__views.__alloyId14664 = Ti.UI.createView({
        id: "__alloyId14664"
    });
    $.__views.widget_605.add($.__views.__alloyId14664);
    $.__views.__alloyId14665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14665"
    });
    $.__views.__alloyId14664.add($.__views.__alloyId14665);
    $.__views.__alloyId14666 = Ti.UI.createView({
        id: "__alloyId14666"
    });
    $.__views.__alloyId14666 && $.addTopLevelView($.__views.__alloyId14666);
    $.__views.__alloyId14667 = Ti.UI.createView({
        id: "__alloyId14667"
    });
    $.__views.__alloyId14666.add($.__views.__alloyId14667);
    $.__views.__alloyId14668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14668"
    });
    $.__views.__alloyId14667.add($.__views.__alloyId14668);
    $.__views.__alloyId14669 = Ti.UI.createView({
        id: "__alloyId14669"
    });
    $.__views.__alloyId14669 && $.addTopLevelView($.__views.__alloyId14669);
    $.__views.__alloyId14670 = Ti.UI.createView({
        id: "__alloyId14670"
    });
    $.__views.__alloyId14669.add($.__views.__alloyId14670);
    $.__views.__alloyId14671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14671"
    });
    $.__views.__alloyId14670.add($.__views.__alloyId14671);
    $.__views.__alloyId14672 = Ti.UI.createView({
        id: "__alloyId14672"
    });
    $.__views.__alloyId14672 && $.addTopLevelView($.__views.__alloyId14672);
    $.__views.__alloyId14673 = Ti.UI.createView({
        id: "__alloyId14673"
    });
    $.__views.__alloyId14672.add($.__views.__alloyId14673);
    $.__views.__alloyId14674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14674"
    });
    $.__views.__alloyId14673.add($.__views.__alloyId14674);
    $.__views.__alloyId14675 = Ti.UI.createView({
        id: "__alloyId14675"
    });
    $.__views.__alloyId14675 && $.addTopLevelView($.__views.__alloyId14675);
    $.__views.__alloyId14676 = Ti.UI.createView({
        id: "__alloyId14676"
    });
    $.__views.__alloyId14675.add($.__views.__alloyId14676);
    $.__views.__alloyId14677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14677"
    });
    $.__views.__alloyId14676.add($.__views.__alloyId14677);
    $.__views.__alloyId14678 = Ti.UI.createView({
        id: "__alloyId14678"
    });
    $.__views.__alloyId14678 && $.addTopLevelView($.__views.__alloyId14678);
    $.__views.__alloyId14679 = Ti.UI.createView({
        id: "__alloyId14679"
    });
    $.__views.__alloyId14678.add($.__views.__alloyId14679);
    $.__views.__alloyId14680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14680"
    });
    $.__views.__alloyId14679.add($.__views.__alloyId14680);
    $.__views.__alloyId14681 = Ti.UI.createView({
        id: "__alloyId14681"
    });
    $.__views.__alloyId14681 && $.addTopLevelView($.__views.__alloyId14681);
    $.__views.__alloyId14682 = Ti.UI.createView({
        id: "__alloyId14682"
    });
    $.__views.__alloyId14681.add($.__views.__alloyId14682);
    $.__views.__alloyId14683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14683"
    });
    $.__views.__alloyId14682.add($.__views.__alloyId14683);
    $.__views.__alloyId14684 = Ti.UI.createView({
        id: "__alloyId14684"
    });
    $.__views.__alloyId14684 && $.addTopLevelView($.__views.__alloyId14684);
    $.__views.__alloyId14685 = Ti.UI.createView({
        id: "__alloyId14685"
    });
    $.__views.__alloyId14684.add($.__views.__alloyId14685);
    $.__views.__alloyId14686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14686"
    });
    $.__views.__alloyId14685.add($.__views.__alloyId14686);
    $.__views.__alloyId14687 = Ti.UI.createView({
        id: "__alloyId14687"
    });
    $.__views.__alloyId14687 && $.addTopLevelView($.__views.__alloyId14687);
    $.__views.__alloyId14688 = Ti.UI.createView({
        id: "__alloyId14688"
    });
    $.__views.__alloyId14687.add($.__views.__alloyId14688);
    $.__views.__alloyId14689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14689"
    });
    $.__views.__alloyId14688.add($.__views.__alloyId14689);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;