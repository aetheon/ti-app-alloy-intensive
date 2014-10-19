function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_26";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_26 = Ti.UI.createView({
        id: "widget_26"
    });
    $.__views.widget_26 && $.addTopLevelView($.__views.widget_26);
    $.__views.__alloyId4680 = Ti.UI.createView({
        id: "__alloyId4680"
    });
    $.__views.widget_26.add($.__views.__alloyId4680);
    $.__views.__alloyId4681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4681"
    });
    $.__views.__alloyId4680.add($.__views.__alloyId4681);
    $.__views.__alloyId4682 = Ti.UI.createView({
        id: "__alloyId4682"
    });
    $.__views.__alloyId4682 && $.addTopLevelView($.__views.__alloyId4682);
    $.__views.__alloyId4683 = Ti.UI.createView({
        id: "__alloyId4683"
    });
    $.__views.__alloyId4682.add($.__views.__alloyId4683);
    $.__views.__alloyId4684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4684"
    });
    $.__views.__alloyId4683.add($.__views.__alloyId4684);
    $.__views.__alloyId4685 = Ti.UI.createView({
        id: "__alloyId4685"
    });
    $.__views.__alloyId4685 && $.addTopLevelView($.__views.__alloyId4685);
    $.__views.__alloyId4686 = Ti.UI.createView({
        id: "__alloyId4686"
    });
    $.__views.__alloyId4685.add($.__views.__alloyId4686);
    $.__views.__alloyId4687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4687"
    });
    $.__views.__alloyId4686.add($.__views.__alloyId4687);
    $.__views.__alloyId4688 = Ti.UI.createView({
        id: "__alloyId4688"
    });
    $.__views.__alloyId4688 && $.addTopLevelView($.__views.__alloyId4688);
    $.__views.__alloyId4689 = Ti.UI.createView({
        id: "__alloyId4689"
    });
    $.__views.__alloyId4688.add($.__views.__alloyId4689);
    $.__views.__alloyId4690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4690"
    });
    $.__views.__alloyId4689.add($.__views.__alloyId4690);
    $.__views.__alloyId4691 = Ti.UI.createView({
        id: "__alloyId4691"
    });
    $.__views.__alloyId4691 && $.addTopLevelView($.__views.__alloyId4691);
    $.__views.__alloyId4692 = Ti.UI.createView({
        id: "__alloyId4692"
    });
    $.__views.__alloyId4691.add($.__views.__alloyId4692);
    $.__views.__alloyId4693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4693"
    });
    $.__views.__alloyId4692.add($.__views.__alloyId4693);
    $.__views.__alloyId4694 = Ti.UI.createView({
        id: "__alloyId4694"
    });
    $.__views.__alloyId4694 && $.addTopLevelView($.__views.__alloyId4694);
    $.__views.__alloyId4695 = Ti.UI.createView({
        id: "__alloyId4695"
    });
    $.__views.__alloyId4694.add($.__views.__alloyId4695);
    $.__views.__alloyId4696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4696"
    });
    $.__views.__alloyId4695.add($.__views.__alloyId4696);
    $.__views.__alloyId4697 = Ti.UI.createView({
        id: "__alloyId4697"
    });
    $.__views.__alloyId4697 && $.addTopLevelView($.__views.__alloyId4697);
    $.__views.__alloyId4698 = Ti.UI.createView({
        id: "__alloyId4698"
    });
    $.__views.__alloyId4697.add($.__views.__alloyId4698);
    $.__views.__alloyId4699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4699"
    });
    $.__views.__alloyId4698.add($.__views.__alloyId4699);
    $.__views.__alloyId4700 = Ti.UI.createView({
        id: "__alloyId4700"
    });
    $.__views.__alloyId4700 && $.addTopLevelView($.__views.__alloyId4700);
    $.__views.__alloyId4701 = Ti.UI.createView({
        id: "__alloyId4701"
    });
    $.__views.__alloyId4700.add($.__views.__alloyId4701);
    $.__views.__alloyId4702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4702"
    });
    $.__views.__alloyId4701.add($.__views.__alloyId4702);
    $.__views.__alloyId4703 = Ti.UI.createView({
        id: "__alloyId4703"
    });
    $.__views.__alloyId4703 && $.addTopLevelView($.__views.__alloyId4703);
    $.__views.__alloyId4704 = Ti.UI.createView({
        id: "__alloyId4704"
    });
    $.__views.__alloyId4703.add($.__views.__alloyId4704);
    $.__views.__alloyId4705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4705"
    });
    $.__views.__alloyId4704.add($.__views.__alloyId4705);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;