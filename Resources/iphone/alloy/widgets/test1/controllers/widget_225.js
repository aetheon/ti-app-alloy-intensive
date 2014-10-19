function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_225";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_225 = Ti.UI.createView({
        id: "widget_225"
    });
    $.__views.widget_225 && $.addTopLevelView($.__views.widget_225);
    $.__views.__alloyId3692 = Ti.UI.createView({
        id: "__alloyId3692"
    });
    $.__views.widget_225.add($.__views.__alloyId3692);
    $.__views.__alloyId3693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3693"
    });
    $.__views.__alloyId3692.add($.__views.__alloyId3693);
    $.__views.__alloyId3694 = Ti.UI.createView({
        id: "__alloyId3694"
    });
    $.__views.__alloyId3694 && $.addTopLevelView($.__views.__alloyId3694);
    $.__views.__alloyId3695 = Ti.UI.createView({
        id: "__alloyId3695"
    });
    $.__views.__alloyId3694.add($.__views.__alloyId3695);
    $.__views.__alloyId3696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3696"
    });
    $.__views.__alloyId3695.add($.__views.__alloyId3696);
    $.__views.__alloyId3697 = Ti.UI.createView({
        id: "__alloyId3697"
    });
    $.__views.__alloyId3697 && $.addTopLevelView($.__views.__alloyId3697);
    $.__views.__alloyId3698 = Ti.UI.createView({
        id: "__alloyId3698"
    });
    $.__views.__alloyId3697.add($.__views.__alloyId3698);
    $.__views.__alloyId3699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3699"
    });
    $.__views.__alloyId3698.add($.__views.__alloyId3699);
    $.__views.__alloyId3700 = Ti.UI.createView({
        id: "__alloyId3700"
    });
    $.__views.__alloyId3700 && $.addTopLevelView($.__views.__alloyId3700);
    $.__views.__alloyId3701 = Ti.UI.createView({
        id: "__alloyId3701"
    });
    $.__views.__alloyId3700.add($.__views.__alloyId3701);
    $.__views.__alloyId3702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3702"
    });
    $.__views.__alloyId3701.add($.__views.__alloyId3702);
    $.__views.__alloyId3703 = Ti.UI.createView({
        id: "__alloyId3703"
    });
    $.__views.__alloyId3703 && $.addTopLevelView($.__views.__alloyId3703);
    $.__views.__alloyId3704 = Ti.UI.createView({
        id: "__alloyId3704"
    });
    $.__views.__alloyId3703.add($.__views.__alloyId3704);
    $.__views.__alloyId3705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3705"
    });
    $.__views.__alloyId3704.add($.__views.__alloyId3705);
    $.__views.__alloyId3706 = Ti.UI.createView({
        id: "__alloyId3706"
    });
    $.__views.__alloyId3706 && $.addTopLevelView($.__views.__alloyId3706);
    $.__views.__alloyId3707 = Ti.UI.createView({
        id: "__alloyId3707"
    });
    $.__views.__alloyId3706.add($.__views.__alloyId3707);
    $.__views.__alloyId3708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3708"
    });
    $.__views.__alloyId3707.add($.__views.__alloyId3708);
    $.__views.__alloyId3709 = Ti.UI.createView({
        id: "__alloyId3709"
    });
    $.__views.__alloyId3709 && $.addTopLevelView($.__views.__alloyId3709);
    $.__views.__alloyId3710 = Ti.UI.createView({
        id: "__alloyId3710"
    });
    $.__views.__alloyId3709.add($.__views.__alloyId3710);
    $.__views.__alloyId3711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3711"
    });
    $.__views.__alloyId3710.add($.__views.__alloyId3711);
    $.__views.__alloyId3712 = Ti.UI.createView({
        id: "__alloyId3712"
    });
    $.__views.__alloyId3712 && $.addTopLevelView($.__views.__alloyId3712);
    $.__views.__alloyId3713 = Ti.UI.createView({
        id: "__alloyId3713"
    });
    $.__views.__alloyId3712.add($.__views.__alloyId3713);
    $.__views.__alloyId3714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3714"
    });
    $.__views.__alloyId3713.add($.__views.__alloyId3714);
    $.__views.__alloyId3715 = Ti.UI.createView({
        id: "__alloyId3715"
    });
    $.__views.__alloyId3715 && $.addTopLevelView($.__views.__alloyId3715);
    $.__views.__alloyId3716 = Ti.UI.createView({
        id: "__alloyId3716"
    });
    $.__views.__alloyId3715.add($.__views.__alloyId3716);
    $.__views.__alloyId3717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3717"
    });
    $.__views.__alloyId3716.add($.__views.__alloyId3717);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;