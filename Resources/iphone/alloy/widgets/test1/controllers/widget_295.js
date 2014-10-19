function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_295";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_295 = Ti.UI.createView({
        id: "widget_295"
    });
    $.__views.widget_295 && $.addTopLevelView($.__views.widget_295);
    $.__views.__alloyId5694 = Ti.UI.createView({
        id: "__alloyId5694"
    });
    $.__views.widget_295.add($.__views.__alloyId5694);
    $.__views.__alloyId5695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5695"
    });
    $.__views.__alloyId5694.add($.__views.__alloyId5695);
    $.__views.__alloyId5696 = Ti.UI.createView({
        id: "__alloyId5696"
    });
    $.__views.__alloyId5696 && $.addTopLevelView($.__views.__alloyId5696);
    $.__views.__alloyId5697 = Ti.UI.createView({
        id: "__alloyId5697"
    });
    $.__views.__alloyId5696.add($.__views.__alloyId5697);
    $.__views.__alloyId5698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5698"
    });
    $.__views.__alloyId5697.add($.__views.__alloyId5698);
    $.__views.__alloyId5699 = Ti.UI.createView({
        id: "__alloyId5699"
    });
    $.__views.__alloyId5699 && $.addTopLevelView($.__views.__alloyId5699);
    $.__views.__alloyId5700 = Ti.UI.createView({
        id: "__alloyId5700"
    });
    $.__views.__alloyId5699.add($.__views.__alloyId5700);
    $.__views.__alloyId5701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5701"
    });
    $.__views.__alloyId5700.add($.__views.__alloyId5701);
    $.__views.__alloyId5702 = Ti.UI.createView({
        id: "__alloyId5702"
    });
    $.__views.__alloyId5702 && $.addTopLevelView($.__views.__alloyId5702);
    $.__views.__alloyId5703 = Ti.UI.createView({
        id: "__alloyId5703"
    });
    $.__views.__alloyId5702.add($.__views.__alloyId5703);
    $.__views.__alloyId5704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5704"
    });
    $.__views.__alloyId5703.add($.__views.__alloyId5704);
    $.__views.__alloyId5705 = Ti.UI.createView({
        id: "__alloyId5705"
    });
    $.__views.__alloyId5705 && $.addTopLevelView($.__views.__alloyId5705);
    $.__views.__alloyId5706 = Ti.UI.createView({
        id: "__alloyId5706"
    });
    $.__views.__alloyId5705.add($.__views.__alloyId5706);
    $.__views.__alloyId5707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5707"
    });
    $.__views.__alloyId5706.add($.__views.__alloyId5707);
    $.__views.__alloyId5708 = Ti.UI.createView({
        id: "__alloyId5708"
    });
    $.__views.__alloyId5708 && $.addTopLevelView($.__views.__alloyId5708);
    $.__views.__alloyId5709 = Ti.UI.createView({
        id: "__alloyId5709"
    });
    $.__views.__alloyId5708.add($.__views.__alloyId5709);
    $.__views.__alloyId5710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5710"
    });
    $.__views.__alloyId5709.add($.__views.__alloyId5710);
    $.__views.__alloyId5711 = Ti.UI.createView({
        id: "__alloyId5711"
    });
    $.__views.__alloyId5711 && $.addTopLevelView($.__views.__alloyId5711);
    $.__views.__alloyId5712 = Ti.UI.createView({
        id: "__alloyId5712"
    });
    $.__views.__alloyId5711.add($.__views.__alloyId5712);
    $.__views.__alloyId5713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5713"
    });
    $.__views.__alloyId5712.add($.__views.__alloyId5713);
    $.__views.__alloyId5714 = Ti.UI.createView({
        id: "__alloyId5714"
    });
    $.__views.__alloyId5714 && $.addTopLevelView($.__views.__alloyId5714);
    $.__views.__alloyId5715 = Ti.UI.createView({
        id: "__alloyId5715"
    });
    $.__views.__alloyId5714.add($.__views.__alloyId5715);
    $.__views.__alloyId5716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5716"
    });
    $.__views.__alloyId5715.add($.__views.__alloyId5716);
    $.__views.__alloyId5717 = Ti.UI.createView({
        id: "__alloyId5717"
    });
    $.__views.__alloyId5717 && $.addTopLevelView($.__views.__alloyId5717);
    $.__views.__alloyId5718 = Ti.UI.createView({
        id: "__alloyId5718"
    });
    $.__views.__alloyId5717.add($.__views.__alloyId5718);
    $.__views.__alloyId5719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5719"
    });
    $.__views.__alloyId5718.add($.__views.__alloyId5719);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;