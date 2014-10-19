function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_710";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_710 = Ti.UI.createView({
        id: "widget_710"
    });
    $.__views.widget_710 && $.addTopLevelView($.__views.widget_710);
    $.__views.__alloyId17706 = Ti.UI.createView({
        id: "__alloyId17706"
    });
    $.__views.widget_710.add($.__views.__alloyId17706);
    $.__views.__alloyId17707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17707"
    });
    $.__views.__alloyId17706.add($.__views.__alloyId17707);
    $.__views.__alloyId17708 = Ti.UI.createView({
        id: "__alloyId17708"
    });
    $.__views.__alloyId17708 && $.addTopLevelView($.__views.__alloyId17708);
    $.__views.__alloyId17709 = Ti.UI.createView({
        id: "__alloyId17709"
    });
    $.__views.__alloyId17708.add($.__views.__alloyId17709);
    $.__views.__alloyId17710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17710"
    });
    $.__views.__alloyId17709.add($.__views.__alloyId17710);
    $.__views.__alloyId17711 = Ti.UI.createView({
        id: "__alloyId17711"
    });
    $.__views.__alloyId17711 && $.addTopLevelView($.__views.__alloyId17711);
    $.__views.__alloyId17712 = Ti.UI.createView({
        id: "__alloyId17712"
    });
    $.__views.__alloyId17711.add($.__views.__alloyId17712);
    $.__views.__alloyId17713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17713"
    });
    $.__views.__alloyId17712.add($.__views.__alloyId17713);
    $.__views.__alloyId17714 = Ti.UI.createView({
        id: "__alloyId17714"
    });
    $.__views.__alloyId17714 && $.addTopLevelView($.__views.__alloyId17714);
    $.__views.__alloyId17715 = Ti.UI.createView({
        id: "__alloyId17715"
    });
    $.__views.__alloyId17714.add($.__views.__alloyId17715);
    $.__views.__alloyId17716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17716"
    });
    $.__views.__alloyId17715.add($.__views.__alloyId17716);
    $.__views.__alloyId17717 = Ti.UI.createView({
        id: "__alloyId17717"
    });
    $.__views.__alloyId17717 && $.addTopLevelView($.__views.__alloyId17717);
    $.__views.__alloyId17718 = Ti.UI.createView({
        id: "__alloyId17718"
    });
    $.__views.__alloyId17717.add($.__views.__alloyId17718);
    $.__views.__alloyId17719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17719"
    });
    $.__views.__alloyId17718.add($.__views.__alloyId17719);
    $.__views.__alloyId17720 = Ti.UI.createView({
        id: "__alloyId17720"
    });
    $.__views.__alloyId17720 && $.addTopLevelView($.__views.__alloyId17720);
    $.__views.__alloyId17721 = Ti.UI.createView({
        id: "__alloyId17721"
    });
    $.__views.__alloyId17720.add($.__views.__alloyId17721);
    $.__views.__alloyId17722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17722"
    });
    $.__views.__alloyId17721.add($.__views.__alloyId17722);
    $.__views.__alloyId17723 = Ti.UI.createView({
        id: "__alloyId17723"
    });
    $.__views.__alloyId17723 && $.addTopLevelView($.__views.__alloyId17723);
    $.__views.__alloyId17724 = Ti.UI.createView({
        id: "__alloyId17724"
    });
    $.__views.__alloyId17723.add($.__views.__alloyId17724);
    $.__views.__alloyId17725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17725"
    });
    $.__views.__alloyId17724.add($.__views.__alloyId17725);
    $.__views.__alloyId17726 = Ti.UI.createView({
        id: "__alloyId17726"
    });
    $.__views.__alloyId17726 && $.addTopLevelView($.__views.__alloyId17726);
    $.__views.__alloyId17727 = Ti.UI.createView({
        id: "__alloyId17727"
    });
    $.__views.__alloyId17726.add($.__views.__alloyId17727);
    $.__views.__alloyId17728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17728"
    });
    $.__views.__alloyId17727.add($.__views.__alloyId17728);
    $.__views.__alloyId17729 = Ti.UI.createView({
        id: "__alloyId17729"
    });
    $.__views.__alloyId17729 && $.addTopLevelView($.__views.__alloyId17729);
    $.__views.__alloyId17730 = Ti.UI.createView({
        id: "__alloyId17730"
    });
    $.__views.__alloyId17729.add($.__views.__alloyId17730);
    $.__views.__alloyId17731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17731"
    });
    $.__views.__alloyId17730.add($.__views.__alloyId17731);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;