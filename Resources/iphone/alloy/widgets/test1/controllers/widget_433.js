function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_433";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_433 = Ti.UI.createView({
        id: "widget_433"
    });
    $.__views.widget_433 && $.addTopLevelView($.__views.widget_433);
    $.__views.__alloyId9698 = Ti.UI.createView({
        id: "__alloyId9698"
    });
    $.__views.widget_433.add($.__views.__alloyId9698);
    $.__views.__alloyId9699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9699"
    });
    $.__views.__alloyId9698.add($.__views.__alloyId9699);
    $.__views.__alloyId9700 = Ti.UI.createView({
        id: "__alloyId9700"
    });
    $.__views.__alloyId9700 && $.addTopLevelView($.__views.__alloyId9700);
    $.__views.__alloyId9701 = Ti.UI.createView({
        id: "__alloyId9701"
    });
    $.__views.__alloyId9700.add($.__views.__alloyId9701);
    $.__views.__alloyId9702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9702"
    });
    $.__views.__alloyId9701.add($.__views.__alloyId9702);
    $.__views.__alloyId9703 = Ti.UI.createView({
        id: "__alloyId9703"
    });
    $.__views.__alloyId9703 && $.addTopLevelView($.__views.__alloyId9703);
    $.__views.__alloyId9704 = Ti.UI.createView({
        id: "__alloyId9704"
    });
    $.__views.__alloyId9703.add($.__views.__alloyId9704);
    $.__views.__alloyId9705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9705"
    });
    $.__views.__alloyId9704.add($.__views.__alloyId9705);
    $.__views.__alloyId9706 = Ti.UI.createView({
        id: "__alloyId9706"
    });
    $.__views.__alloyId9706 && $.addTopLevelView($.__views.__alloyId9706);
    $.__views.__alloyId9707 = Ti.UI.createView({
        id: "__alloyId9707"
    });
    $.__views.__alloyId9706.add($.__views.__alloyId9707);
    $.__views.__alloyId9708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9708"
    });
    $.__views.__alloyId9707.add($.__views.__alloyId9708);
    $.__views.__alloyId9709 = Ti.UI.createView({
        id: "__alloyId9709"
    });
    $.__views.__alloyId9709 && $.addTopLevelView($.__views.__alloyId9709);
    $.__views.__alloyId9710 = Ti.UI.createView({
        id: "__alloyId9710"
    });
    $.__views.__alloyId9709.add($.__views.__alloyId9710);
    $.__views.__alloyId9711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9711"
    });
    $.__views.__alloyId9710.add($.__views.__alloyId9711);
    $.__views.__alloyId9712 = Ti.UI.createView({
        id: "__alloyId9712"
    });
    $.__views.__alloyId9712 && $.addTopLevelView($.__views.__alloyId9712);
    $.__views.__alloyId9713 = Ti.UI.createView({
        id: "__alloyId9713"
    });
    $.__views.__alloyId9712.add($.__views.__alloyId9713);
    $.__views.__alloyId9714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9714"
    });
    $.__views.__alloyId9713.add($.__views.__alloyId9714);
    $.__views.__alloyId9715 = Ti.UI.createView({
        id: "__alloyId9715"
    });
    $.__views.__alloyId9715 && $.addTopLevelView($.__views.__alloyId9715);
    $.__views.__alloyId9716 = Ti.UI.createView({
        id: "__alloyId9716"
    });
    $.__views.__alloyId9715.add($.__views.__alloyId9716);
    $.__views.__alloyId9717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9717"
    });
    $.__views.__alloyId9716.add($.__views.__alloyId9717);
    $.__views.__alloyId9718 = Ti.UI.createView({
        id: "__alloyId9718"
    });
    $.__views.__alloyId9718 && $.addTopLevelView($.__views.__alloyId9718);
    $.__views.__alloyId9719 = Ti.UI.createView({
        id: "__alloyId9719"
    });
    $.__views.__alloyId9718.add($.__views.__alloyId9719);
    $.__views.__alloyId9720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9720"
    });
    $.__views.__alloyId9719.add($.__views.__alloyId9720);
    $.__views.__alloyId9721 = Ti.UI.createView({
        id: "__alloyId9721"
    });
    $.__views.__alloyId9721 && $.addTopLevelView($.__views.__alloyId9721);
    $.__views.__alloyId9722 = Ti.UI.createView({
        id: "__alloyId9722"
    });
    $.__views.__alloyId9721.add($.__views.__alloyId9722);
    $.__views.__alloyId9723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9723"
    });
    $.__views.__alloyId9722.add($.__views.__alloyId9723);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;