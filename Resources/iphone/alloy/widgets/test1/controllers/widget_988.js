function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_988";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_988 = Ti.UI.createView({
        id: "widget_988"
    });
    $.__views.widget_988 && $.addTopLevelView($.__views.widget_988);
    $.__views.__alloyId25688 = Ti.UI.createView({
        id: "__alloyId25688"
    });
    $.__views.widget_988.add($.__views.__alloyId25688);
    $.__views.__alloyId25689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25689"
    });
    $.__views.__alloyId25688.add($.__views.__alloyId25689);
    $.__views.__alloyId25690 = Ti.UI.createView({
        id: "__alloyId25690"
    });
    $.__views.__alloyId25690 && $.addTopLevelView($.__views.__alloyId25690);
    $.__views.__alloyId25691 = Ti.UI.createView({
        id: "__alloyId25691"
    });
    $.__views.__alloyId25690.add($.__views.__alloyId25691);
    $.__views.__alloyId25692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25692"
    });
    $.__views.__alloyId25691.add($.__views.__alloyId25692);
    $.__views.__alloyId25693 = Ti.UI.createView({
        id: "__alloyId25693"
    });
    $.__views.__alloyId25693 && $.addTopLevelView($.__views.__alloyId25693);
    $.__views.__alloyId25694 = Ti.UI.createView({
        id: "__alloyId25694"
    });
    $.__views.__alloyId25693.add($.__views.__alloyId25694);
    $.__views.__alloyId25695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25695"
    });
    $.__views.__alloyId25694.add($.__views.__alloyId25695);
    $.__views.__alloyId25696 = Ti.UI.createView({
        id: "__alloyId25696"
    });
    $.__views.__alloyId25696 && $.addTopLevelView($.__views.__alloyId25696);
    $.__views.__alloyId25697 = Ti.UI.createView({
        id: "__alloyId25697"
    });
    $.__views.__alloyId25696.add($.__views.__alloyId25697);
    $.__views.__alloyId25698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25698"
    });
    $.__views.__alloyId25697.add($.__views.__alloyId25698);
    $.__views.__alloyId25699 = Ti.UI.createView({
        id: "__alloyId25699"
    });
    $.__views.__alloyId25699 && $.addTopLevelView($.__views.__alloyId25699);
    $.__views.__alloyId25700 = Ti.UI.createView({
        id: "__alloyId25700"
    });
    $.__views.__alloyId25699.add($.__views.__alloyId25700);
    $.__views.__alloyId25701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25701"
    });
    $.__views.__alloyId25700.add($.__views.__alloyId25701);
    $.__views.__alloyId25702 = Ti.UI.createView({
        id: "__alloyId25702"
    });
    $.__views.__alloyId25702 && $.addTopLevelView($.__views.__alloyId25702);
    $.__views.__alloyId25703 = Ti.UI.createView({
        id: "__alloyId25703"
    });
    $.__views.__alloyId25702.add($.__views.__alloyId25703);
    $.__views.__alloyId25704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25704"
    });
    $.__views.__alloyId25703.add($.__views.__alloyId25704);
    $.__views.__alloyId25705 = Ti.UI.createView({
        id: "__alloyId25705"
    });
    $.__views.__alloyId25705 && $.addTopLevelView($.__views.__alloyId25705);
    $.__views.__alloyId25706 = Ti.UI.createView({
        id: "__alloyId25706"
    });
    $.__views.__alloyId25705.add($.__views.__alloyId25706);
    $.__views.__alloyId25707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25707"
    });
    $.__views.__alloyId25706.add($.__views.__alloyId25707);
    $.__views.__alloyId25708 = Ti.UI.createView({
        id: "__alloyId25708"
    });
    $.__views.__alloyId25708 && $.addTopLevelView($.__views.__alloyId25708);
    $.__views.__alloyId25709 = Ti.UI.createView({
        id: "__alloyId25709"
    });
    $.__views.__alloyId25708.add($.__views.__alloyId25709);
    $.__views.__alloyId25710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25710"
    });
    $.__views.__alloyId25709.add($.__views.__alloyId25710);
    $.__views.__alloyId25711 = Ti.UI.createView({
        id: "__alloyId25711"
    });
    $.__views.__alloyId25711 && $.addTopLevelView($.__views.__alloyId25711);
    $.__views.__alloyId25712 = Ti.UI.createView({
        id: "__alloyId25712"
    });
    $.__views.__alloyId25711.add($.__views.__alloyId25712);
    $.__views.__alloyId25713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25713"
    });
    $.__views.__alloyId25712.add($.__views.__alloyId25713);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;