function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_953";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_953 = Ti.UI.createView({
        id: "widget_953"
    });
    $.__views.widget_953 && $.addTopLevelView($.__views.widget_953);
    $.__views.__alloyId24700 = Ti.UI.createView({
        id: "__alloyId24700"
    });
    $.__views.widget_953.add($.__views.__alloyId24700);
    $.__views.__alloyId24701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24701"
    });
    $.__views.__alloyId24700.add($.__views.__alloyId24701);
    $.__views.__alloyId24702 = Ti.UI.createView({
        id: "__alloyId24702"
    });
    $.__views.__alloyId24702 && $.addTopLevelView($.__views.__alloyId24702);
    $.__views.__alloyId24703 = Ti.UI.createView({
        id: "__alloyId24703"
    });
    $.__views.__alloyId24702.add($.__views.__alloyId24703);
    $.__views.__alloyId24704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24704"
    });
    $.__views.__alloyId24703.add($.__views.__alloyId24704);
    $.__views.__alloyId24705 = Ti.UI.createView({
        id: "__alloyId24705"
    });
    $.__views.__alloyId24705 && $.addTopLevelView($.__views.__alloyId24705);
    $.__views.__alloyId24706 = Ti.UI.createView({
        id: "__alloyId24706"
    });
    $.__views.__alloyId24705.add($.__views.__alloyId24706);
    $.__views.__alloyId24707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24707"
    });
    $.__views.__alloyId24706.add($.__views.__alloyId24707);
    $.__views.__alloyId24708 = Ti.UI.createView({
        id: "__alloyId24708"
    });
    $.__views.__alloyId24708 && $.addTopLevelView($.__views.__alloyId24708);
    $.__views.__alloyId24709 = Ti.UI.createView({
        id: "__alloyId24709"
    });
    $.__views.__alloyId24708.add($.__views.__alloyId24709);
    $.__views.__alloyId24710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24710"
    });
    $.__views.__alloyId24709.add($.__views.__alloyId24710);
    $.__views.__alloyId24711 = Ti.UI.createView({
        id: "__alloyId24711"
    });
    $.__views.__alloyId24711 && $.addTopLevelView($.__views.__alloyId24711);
    $.__views.__alloyId24712 = Ti.UI.createView({
        id: "__alloyId24712"
    });
    $.__views.__alloyId24711.add($.__views.__alloyId24712);
    $.__views.__alloyId24713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24713"
    });
    $.__views.__alloyId24712.add($.__views.__alloyId24713);
    $.__views.__alloyId24714 = Ti.UI.createView({
        id: "__alloyId24714"
    });
    $.__views.__alloyId24714 && $.addTopLevelView($.__views.__alloyId24714);
    $.__views.__alloyId24715 = Ti.UI.createView({
        id: "__alloyId24715"
    });
    $.__views.__alloyId24714.add($.__views.__alloyId24715);
    $.__views.__alloyId24716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24716"
    });
    $.__views.__alloyId24715.add($.__views.__alloyId24716);
    $.__views.__alloyId24717 = Ti.UI.createView({
        id: "__alloyId24717"
    });
    $.__views.__alloyId24717 && $.addTopLevelView($.__views.__alloyId24717);
    $.__views.__alloyId24718 = Ti.UI.createView({
        id: "__alloyId24718"
    });
    $.__views.__alloyId24717.add($.__views.__alloyId24718);
    $.__views.__alloyId24719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24719"
    });
    $.__views.__alloyId24718.add($.__views.__alloyId24719);
    $.__views.__alloyId24720 = Ti.UI.createView({
        id: "__alloyId24720"
    });
    $.__views.__alloyId24720 && $.addTopLevelView($.__views.__alloyId24720);
    $.__views.__alloyId24721 = Ti.UI.createView({
        id: "__alloyId24721"
    });
    $.__views.__alloyId24720.add($.__views.__alloyId24721);
    $.__views.__alloyId24722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24722"
    });
    $.__views.__alloyId24721.add($.__views.__alloyId24722);
    $.__views.__alloyId24723 = Ti.UI.createView({
        id: "__alloyId24723"
    });
    $.__views.__alloyId24723 && $.addTopLevelView($.__views.__alloyId24723);
    $.__views.__alloyId24724 = Ti.UI.createView({
        id: "__alloyId24724"
    });
    $.__views.__alloyId24723.add($.__views.__alloyId24724);
    $.__views.__alloyId24725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24725"
    });
    $.__views.__alloyId24724.add($.__views.__alloyId24725);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;