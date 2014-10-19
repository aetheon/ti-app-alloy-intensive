function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_329";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_329 = Ti.UI.createView({
        id: "widget_329"
    });
    $.__views.widget_329 && $.addTopLevelView($.__views.widget_329);
    $.__views.__alloyId6682 = Ti.UI.createView({
        id: "__alloyId6682"
    });
    $.__views.widget_329.add($.__views.__alloyId6682);
    $.__views.__alloyId6683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6683"
    });
    $.__views.__alloyId6682.add($.__views.__alloyId6683);
    $.__views.__alloyId6684 = Ti.UI.createView({
        id: "__alloyId6684"
    });
    $.__views.__alloyId6684 && $.addTopLevelView($.__views.__alloyId6684);
    $.__views.__alloyId6685 = Ti.UI.createView({
        id: "__alloyId6685"
    });
    $.__views.__alloyId6684.add($.__views.__alloyId6685);
    $.__views.__alloyId6686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6686"
    });
    $.__views.__alloyId6685.add($.__views.__alloyId6686);
    $.__views.__alloyId6687 = Ti.UI.createView({
        id: "__alloyId6687"
    });
    $.__views.__alloyId6687 && $.addTopLevelView($.__views.__alloyId6687);
    $.__views.__alloyId6688 = Ti.UI.createView({
        id: "__alloyId6688"
    });
    $.__views.__alloyId6687.add($.__views.__alloyId6688);
    $.__views.__alloyId6689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6689"
    });
    $.__views.__alloyId6688.add($.__views.__alloyId6689);
    $.__views.__alloyId6690 = Ti.UI.createView({
        id: "__alloyId6690"
    });
    $.__views.__alloyId6690 && $.addTopLevelView($.__views.__alloyId6690);
    $.__views.__alloyId6691 = Ti.UI.createView({
        id: "__alloyId6691"
    });
    $.__views.__alloyId6690.add($.__views.__alloyId6691);
    $.__views.__alloyId6692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6692"
    });
    $.__views.__alloyId6691.add($.__views.__alloyId6692);
    $.__views.__alloyId6693 = Ti.UI.createView({
        id: "__alloyId6693"
    });
    $.__views.__alloyId6693 && $.addTopLevelView($.__views.__alloyId6693);
    $.__views.__alloyId6694 = Ti.UI.createView({
        id: "__alloyId6694"
    });
    $.__views.__alloyId6693.add($.__views.__alloyId6694);
    $.__views.__alloyId6695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6695"
    });
    $.__views.__alloyId6694.add($.__views.__alloyId6695);
    $.__views.__alloyId6696 = Ti.UI.createView({
        id: "__alloyId6696"
    });
    $.__views.__alloyId6696 && $.addTopLevelView($.__views.__alloyId6696);
    $.__views.__alloyId6697 = Ti.UI.createView({
        id: "__alloyId6697"
    });
    $.__views.__alloyId6696.add($.__views.__alloyId6697);
    $.__views.__alloyId6698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6698"
    });
    $.__views.__alloyId6697.add($.__views.__alloyId6698);
    $.__views.__alloyId6699 = Ti.UI.createView({
        id: "__alloyId6699"
    });
    $.__views.__alloyId6699 && $.addTopLevelView($.__views.__alloyId6699);
    $.__views.__alloyId6700 = Ti.UI.createView({
        id: "__alloyId6700"
    });
    $.__views.__alloyId6699.add($.__views.__alloyId6700);
    $.__views.__alloyId6701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6701"
    });
    $.__views.__alloyId6700.add($.__views.__alloyId6701);
    $.__views.__alloyId6702 = Ti.UI.createView({
        id: "__alloyId6702"
    });
    $.__views.__alloyId6702 && $.addTopLevelView($.__views.__alloyId6702);
    $.__views.__alloyId6703 = Ti.UI.createView({
        id: "__alloyId6703"
    });
    $.__views.__alloyId6702.add($.__views.__alloyId6703);
    $.__views.__alloyId6704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6704"
    });
    $.__views.__alloyId6703.add($.__views.__alloyId6704);
    $.__views.__alloyId6705 = Ti.UI.createView({
        id: "__alloyId6705"
    });
    $.__views.__alloyId6705 && $.addTopLevelView($.__views.__alloyId6705);
    $.__views.__alloyId6706 = Ti.UI.createView({
        id: "__alloyId6706"
    });
    $.__views.__alloyId6705.add($.__views.__alloyId6706);
    $.__views.__alloyId6707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6707"
    });
    $.__views.__alloyId6706.add($.__views.__alloyId6707);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;