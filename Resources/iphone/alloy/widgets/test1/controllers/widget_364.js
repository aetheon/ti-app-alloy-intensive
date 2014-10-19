function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_364";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_364 = Ti.UI.createView({
        id: "widget_364"
    });
    $.__views.widget_364 && $.addTopLevelView($.__views.widget_364);
    $.__views.__alloyId7696 = Ti.UI.createView({
        id: "__alloyId7696"
    });
    $.__views.widget_364.add($.__views.__alloyId7696);
    $.__views.__alloyId7697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7697"
    });
    $.__views.__alloyId7696.add($.__views.__alloyId7697);
    $.__views.__alloyId7698 = Ti.UI.createView({
        id: "__alloyId7698"
    });
    $.__views.__alloyId7698 && $.addTopLevelView($.__views.__alloyId7698);
    $.__views.__alloyId7699 = Ti.UI.createView({
        id: "__alloyId7699"
    });
    $.__views.__alloyId7698.add($.__views.__alloyId7699);
    $.__views.__alloyId7700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7700"
    });
    $.__views.__alloyId7699.add($.__views.__alloyId7700);
    $.__views.__alloyId7701 = Ti.UI.createView({
        id: "__alloyId7701"
    });
    $.__views.__alloyId7701 && $.addTopLevelView($.__views.__alloyId7701);
    $.__views.__alloyId7702 = Ti.UI.createView({
        id: "__alloyId7702"
    });
    $.__views.__alloyId7701.add($.__views.__alloyId7702);
    $.__views.__alloyId7703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7703"
    });
    $.__views.__alloyId7702.add($.__views.__alloyId7703);
    $.__views.__alloyId7704 = Ti.UI.createView({
        id: "__alloyId7704"
    });
    $.__views.__alloyId7704 && $.addTopLevelView($.__views.__alloyId7704);
    $.__views.__alloyId7705 = Ti.UI.createView({
        id: "__alloyId7705"
    });
    $.__views.__alloyId7704.add($.__views.__alloyId7705);
    $.__views.__alloyId7706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7706"
    });
    $.__views.__alloyId7705.add($.__views.__alloyId7706);
    $.__views.__alloyId7707 = Ti.UI.createView({
        id: "__alloyId7707"
    });
    $.__views.__alloyId7707 && $.addTopLevelView($.__views.__alloyId7707);
    $.__views.__alloyId7708 = Ti.UI.createView({
        id: "__alloyId7708"
    });
    $.__views.__alloyId7707.add($.__views.__alloyId7708);
    $.__views.__alloyId7709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7709"
    });
    $.__views.__alloyId7708.add($.__views.__alloyId7709);
    $.__views.__alloyId7710 = Ti.UI.createView({
        id: "__alloyId7710"
    });
    $.__views.__alloyId7710 && $.addTopLevelView($.__views.__alloyId7710);
    $.__views.__alloyId7711 = Ti.UI.createView({
        id: "__alloyId7711"
    });
    $.__views.__alloyId7710.add($.__views.__alloyId7711);
    $.__views.__alloyId7712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7712"
    });
    $.__views.__alloyId7711.add($.__views.__alloyId7712);
    $.__views.__alloyId7713 = Ti.UI.createView({
        id: "__alloyId7713"
    });
    $.__views.__alloyId7713 && $.addTopLevelView($.__views.__alloyId7713);
    $.__views.__alloyId7714 = Ti.UI.createView({
        id: "__alloyId7714"
    });
    $.__views.__alloyId7713.add($.__views.__alloyId7714);
    $.__views.__alloyId7715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7715"
    });
    $.__views.__alloyId7714.add($.__views.__alloyId7715);
    $.__views.__alloyId7716 = Ti.UI.createView({
        id: "__alloyId7716"
    });
    $.__views.__alloyId7716 && $.addTopLevelView($.__views.__alloyId7716);
    $.__views.__alloyId7717 = Ti.UI.createView({
        id: "__alloyId7717"
    });
    $.__views.__alloyId7716.add($.__views.__alloyId7717);
    $.__views.__alloyId7718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7718"
    });
    $.__views.__alloyId7717.add($.__views.__alloyId7718);
    $.__views.__alloyId7719 = Ti.UI.createView({
        id: "__alloyId7719"
    });
    $.__views.__alloyId7719 && $.addTopLevelView($.__views.__alloyId7719);
    $.__views.__alloyId7720 = Ti.UI.createView({
        id: "__alloyId7720"
    });
    $.__views.__alloyId7719.add($.__views.__alloyId7720);
    $.__views.__alloyId7721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7721"
    });
    $.__views.__alloyId7720.add($.__views.__alloyId7721);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;