function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_884";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_884 = Ti.UI.createView({
        id: "widget_884"
    });
    $.__views.widget_884 && $.addTopLevelView($.__views.widget_884);
    $.__views.__alloyId22698 = Ti.UI.createView({
        id: "__alloyId22698"
    });
    $.__views.widget_884.add($.__views.__alloyId22698);
    $.__views.__alloyId22699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22699"
    });
    $.__views.__alloyId22698.add($.__views.__alloyId22699);
    $.__views.__alloyId22700 = Ti.UI.createView({
        id: "__alloyId22700"
    });
    $.__views.__alloyId22700 && $.addTopLevelView($.__views.__alloyId22700);
    $.__views.__alloyId22701 = Ti.UI.createView({
        id: "__alloyId22701"
    });
    $.__views.__alloyId22700.add($.__views.__alloyId22701);
    $.__views.__alloyId22702 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22702"
    });
    $.__views.__alloyId22701.add($.__views.__alloyId22702);
    $.__views.__alloyId22703 = Ti.UI.createView({
        id: "__alloyId22703"
    });
    $.__views.__alloyId22703 && $.addTopLevelView($.__views.__alloyId22703);
    $.__views.__alloyId22704 = Ti.UI.createView({
        id: "__alloyId22704"
    });
    $.__views.__alloyId22703.add($.__views.__alloyId22704);
    $.__views.__alloyId22705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22705"
    });
    $.__views.__alloyId22704.add($.__views.__alloyId22705);
    $.__views.__alloyId22706 = Ti.UI.createView({
        id: "__alloyId22706"
    });
    $.__views.__alloyId22706 && $.addTopLevelView($.__views.__alloyId22706);
    $.__views.__alloyId22707 = Ti.UI.createView({
        id: "__alloyId22707"
    });
    $.__views.__alloyId22706.add($.__views.__alloyId22707);
    $.__views.__alloyId22708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22708"
    });
    $.__views.__alloyId22707.add($.__views.__alloyId22708);
    $.__views.__alloyId22709 = Ti.UI.createView({
        id: "__alloyId22709"
    });
    $.__views.__alloyId22709 && $.addTopLevelView($.__views.__alloyId22709);
    $.__views.__alloyId22710 = Ti.UI.createView({
        id: "__alloyId22710"
    });
    $.__views.__alloyId22709.add($.__views.__alloyId22710);
    $.__views.__alloyId22711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22711"
    });
    $.__views.__alloyId22710.add($.__views.__alloyId22711);
    $.__views.__alloyId22712 = Ti.UI.createView({
        id: "__alloyId22712"
    });
    $.__views.__alloyId22712 && $.addTopLevelView($.__views.__alloyId22712);
    $.__views.__alloyId22713 = Ti.UI.createView({
        id: "__alloyId22713"
    });
    $.__views.__alloyId22712.add($.__views.__alloyId22713);
    $.__views.__alloyId22714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22714"
    });
    $.__views.__alloyId22713.add($.__views.__alloyId22714);
    $.__views.__alloyId22715 = Ti.UI.createView({
        id: "__alloyId22715"
    });
    $.__views.__alloyId22715 && $.addTopLevelView($.__views.__alloyId22715);
    $.__views.__alloyId22716 = Ti.UI.createView({
        id: "__alloyId22716"
    });
    $.__views.__alloyId22715.add($.__views.__alloyId22716);
    $.__views.__alloyId22717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22717"
    });
    $.__views.__alloyId22716.add($.__views.__alloyId22717);
    $.__views.__alloyId22718 = Ti.UI.createView({
        id: "__alloyId22718"
    });
    $.__views.__alloyId22718 && $.addTopLevelView($.__views.__alloyId22718);
    $.__views.__alloyId22719 = Ti.UI.createView({
        id: "__alloyId22719"
    });
    $.__views.__alloyId22718.add($.__views.__alloyId22719);
    $.__views.__alloyId22720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22720"
    });
    $.__views.__alloyId22719.add($.__views.__alloyId22720);
    $.__views.__alloyId22721 = Ti.UI.createView({
        id: "__alloyId22721"
    });
    $.__views.__alloyId22721 && $.addTopLevelView($.__views.__alloyId22721);
    $.__views.__alloyId22722 = Ti.UI.createView({
        id: "__alloyId22722"
    });
    $.__views.__alloyId22721.add($.__views.__alloyId22722);
    $.__views.__alloyId22723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22723"
    });
    $.__views.__alloyId22722.add($.__views.__alloyId22723);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;