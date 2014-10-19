function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_814";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_814 = Ti.UI.createView({
        id: "widget_814"
    });
    $.__views.widget_814 && $.addTopLevelView($.__views.widget_814);
    $.__views.__alloyId20696 = Ti.UI.createView({
        id: "__alloyId20696"
    });
    $.__views.widget_814.add($.__views.__alloyId20696);
    $.__views.__alloyId20697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20697"
    });
    $.__views.__alloyId20696.add($.__views.__alloyId20697);
    $.__views.__alloyId20698 = Ti.UI.createView({
        id: "__alloyId20698"
    });
    $.__views.__alloyId20698 && $.addTopLevelView($.__views.__alloyId20698);
    $.__views.__alloyId20699 = Ti.UI.createView({
        id: "__alloyId20699"
    });
    $.__views.__alloyId20698.add($.__views.__alloyId20699);
    $.__views.__alloyId20700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20700"
    });
    $.__views.__alloyId20699.add($.__views.__alloyId20700);
    $.__views.__alloyId20701 = Ti.UI.createView({
        id: "__alloyId20701"
    });
    $.__views.__alloyId20701 && $.addTopLevelView($.__views.__alloyId20701);
    $.__views.__alloyId20702 = Ti.UI.createView({
        id: "__alloyId20702"
    });
    $.__views.__alloyId20701.add($.__views.__alloyId20702);
    $.__views.__alloyId20703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20703"
    });
    $.__views.__alloyId20702.add($.__views.__alloyId20703);
    $.__views.__alloyId20704 = Ti.UI.createView({
        id: "__alloyId20704"
    });
    $.__views.__alloyId20704 && $.addTopLevelView($.__views.__alloyId20704);
    $.__views.__alloyId20705 = Ti.UI.createView({
        id: "__alloyId20705"
    });
    $.__views.__alloyId20704.add($.__views.__alloyId20705);
    $.__views.__alloyId20706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20706"
    });
    $.__views.__alloyId20705.add($.__views.__alloyId20706);
    $.__views.__alloyId20707 = Ti.UI.createView({
        id: "__alloyId20707"
    });
    $.__views.__alloyId20707 && $.addTopLevelView($.__views.__alloyId20707);
    $.__views.__alloyId20708 = Ti.UI.createView({
        id: "__alloyId20708"
    });
    $.__views.__alloyId20707.add($.__views.__alloyId20708);
    $.__views.__alloyId20709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20709"
    });
    $.__views.__alloyId20708.add($.__views.__alloyId20709);
    $.__views.__alloyId20710 = Ti.UI.createView({
        id: "__alloyId20710"
    });
    $.__views.__alloyId20710 && $.addTopLevelView($.__views.__alloyId20710);
    $.__views.__alloyId20711 = Ti.UI.createView({
        id: "__alloyId20711"
    });
    $.__views.__alloyId20710.add($.__views.__alloyId20711);
    $.__views.__alloyId20712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20712"
    });
    $.__views.__alloyId20711.add($.__views.__alloyId20712);
    $.__views.__alloyId20713 = Ti.UI.createView({
        id: "__alloyId20713"
    });
    $.__views.__alloyId20713 && $.addTopLevelView($.__views.__alloyId20713);
    $.__views.__alloyId20714 = Ti.UI.createView({
        id: "__alloyId20714"
    });
    $.__views.__alloyId20713.add($.__views.__alloyId20714);
    $.__views.__alloyId20715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20715"
    });
    $.__views.__alloyId20714.add($.__views.__alloyId20715);
    $.__views.__alloyId20716 = Ti.UI.createView({
        id: "__alloyId20716"
    });
    $.__views.__alloyId20716 && $.addTopLevelView($.__views.__alloyId20716);
    $.__views.__alloyId20717 = Ti.UI.createView({
        id: "__alloyId20717"
    });
    $.__views.__alloyId20716.add($.__views.__alloyId20717);
    $.__views.__alloyId20718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20718"
    });
    $.__views.__alloyId20717.add($.__views.__alloyId20718);
    $.__views.__alloyId20719 = Ti.UI.createView({
        id: "__alloyId20719"
    });
    $.__views.__alloyId20719 && $.addTopLevelView($.__views.__alloyId20719);
    $.__views.__alloyId20720 = Ti.UI.createView({
        id: "__alloyId20720"
    });
    $.__views.__alloyId20719.add($.__views.__alloyId20720);
    $.__views.__alloyId20721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20721"
    });
    $.__views.__alloyId20720.add($.__views.__alloyId20721);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;