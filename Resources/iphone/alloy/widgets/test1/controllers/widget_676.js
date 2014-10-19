function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_676";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_676 = Ti.UI.createView({
        id: "widget_676"
    });
    $.__views.widget_676 && $.addTopLevelView($.__views.widget_676);
    $.__views.__alloyId16692 = Ti.UI.createView({
        id: "__alloyId16692"
    });
    $.__views.widget_676.add($.__views.__alloyId16692);
    $.__views.__alloyId16693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16693"
    });
    $.__views.__alloyId16692.add($.__views.__alloyId16693);
    $.__views.__alloyId16694 = Ti.UI.createView({
        id: "__alloyId16694"
    });
    $.__views.__alloyId16694 && $.addTopLevelView($.__views.__alloyId16694);
    $.__views.__alloyId16695 = Ti.UI.createView({
        id: "__alloyId16695"
    });
    $.__views.__alloyId16694.add($.__views.__alloyId16695);
    $.__views.__alloyId16696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16696"
    });
    $.__views.__alloyId16695.add($.__views.__alloyId16696);
    $.__views.__alloyId16697 = Ti.UI.createView({
        id: "__alloyId16697"
    });
    $.__views.__alloyId16697 && $.addTopLevelView($.__views.__alloyId16697);
    $.__views.__alloyId16698 = Ti.UI.createView({
        id: "__alloyId16698"
    });
    $.__views.__alloyId16697.add($.__views.__alloyId16698);
    $.__views.__alloyId16699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16699"
    });
    $.__views.__alloyId16698.add($.__views.__alloyId16699);
    $.__views.__alloyId16700 = Ti.UI.createView({
        id: "__alloyId16700"
    });
    $.__views.__alloyId16700 && $.addTopLevelView($.__views.__alloyId16700);
    $.__views.__alloyId16701 = Ti.UI.createView({
        id: "__alloyId16701"
    });
    $.__views.__alloyId16700.add($.__views.__alloyId16701);
    $.__views.__alloyId16702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16702"
    });
    $.__views.__alloyId16701.add($.__views.__alloyId16702);
    $.__views.__alloyId16703 = Ti.UI.createView({
        id: "__alloyId16703"
    });
    $.__views.__alloyId16703 && $.addTopLevelView($.__views.__alloyId16703);
    $.__views.__alloyId16704 = Ti.UI.createView({
        id: "__alloyId16704"
    });
    $.__views.__alloyId16703.add($.__views.__alloyId16704);
    $.__views.__alloyId16705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16705"
    });
    $.__views.__alloyId16704.add($.__views.__alloyId16705);
    $.__views.__alloyId16706 = Ti.UI.createView({
        id: "__alloyId16706"
    });
    $.__views.__alloyId16706 && $.addTopLevelView($.__views.__alloyId16706);
    $.__views.__alloyId16707 = Ti.UI.createView({
        id: "__alloyId16707"
    });
    $.__views.__alloyId16706.add($.__views.__alloyId16707);
    $.__views.__alloyId16708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16708"
    });
    $.__views.__alloyId16707.add($.__views.__alloyId16708);
    $.__views.__alloyId16709 = Ti.UI.createView({
        id: "__alloyId16709"
    });
    $.__views.__alloyId16709 && $.addTopLevelView($.__views.__alloyId16709);
    $.__views.__alloyId16710 = Ti.UI.createView({
        id: "__alloyId16710"
    });
    $.__views.__alloyId16709.add($.__views.__alloyId16710);
    $.__views.__alloyId16711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16711"
    });
    $.__views.__alloyId16710.add($.__views.__alloyId16711);
    $.__views.__alloyId16712 = Ti.UI.createView({
        id: "__alloyId16712"
    });
    $.__views.__alloyId16712 && $.addTopLevelView($.__views.__alloyId16712);
    $.__views.__alloyId16713 = Ti.UI.createView({
        id: "__alloyId16713"
    });
    $.__views.__alloyId16712.add($.__views.__alloyId16713);
    $.__views.__alloyId16714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16714"
    });
    $.__views.__alloyId16713.add($.__views.__alloyId16714);
    $.__views.__alloyId16715 = Ti.UI.createView({
        id: "__alloyId16715"
    });
    $.__views.__alloyId16715 && $.addTopLevelView($.__views.__alloyId16715);
    $.__views.__alloyId16716 = Ti.UI.createView({
        id: "__alloyId16716"
    });
    $.__views.__alloyId16715.add($.__views.__alloyId16716);
    $.__views.__alloyId16717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16717"
    });
    $.__views.__alloyId16716.add($.__views.__alloyId16717);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;