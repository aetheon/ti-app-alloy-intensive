function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_473";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_473 = Ti.UI.createView({
        id: "widget_473"
    });
    $.__views.widget_473 && $.addTopLevelView($.__views.widget_473);
    $.__views.__alloyId10842 = Ti.UI.createView({
        id: "__alloyId10842"
    });
    $.__views.widget_473.add($.__views.__alloyId10842);
    $.__views.__alloyId10843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10843"
    });
    $.__views.__alloyId10842.add($.__views.__alloyId10843);
    $.__views.__alloyId10844 = Ti.UI.createView({
        id: "__alloyId10844"
    });
    $.__views.__alloyId10844 && $.addTopLevelView($.__views.__alloyId10844);
    $.__views.__alloyId10845 = Ti.UI.createView({
        id: "__alloyId10845"
    });
    $.__views.__alloyId10844.add($.__views.__alloyId10845);
    $.__views.__alloyId10846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10846"
    });
    $.__views.__alloyId10845.add($.__views.__alloyId10846);
    $.__views.__alloyId10847 = Ti.UI.createView({
        id: "__alloyId10847"
    });
    $.__views.__alloyId10847 && $.addTopLevelView($.__views.__alloyId10847);
    $.__views.__alloyId10848 = Ti.UI.createView({
        id: "__alloyId10848"
    });
    $.__views.__alloyId10847.add($.__views.__alloyId10848);
    $.__views.__alloyId10849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10849"
    });
    $.__views.__alloyId10848.add($.__views.__alloyId10849);
    $.__views.__alloyId10850 = Ti.UI.createView({
        id: "__alloyId10850"
    });
    $.__views.__alloyId10850 && $.addTopLevelView($.__views.__alloyId10850);
    $.__views.__alloyId10851 = Ti.UI.createView({
        id: "__alloyId10851"
    });
    $.__views.__alloyId10850.add($.__views.__alloyId10851);
    $.__views.__alloyId10852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10852"
    });
    $.__views.__alloyId10851.add($.__views.__alloyId10852);
    $.__views.__alloyId10853 = Ti.UI.createView({
        id: "__alloyId10853"
    });
    $.__views.__alloyId10853 && $.addTopLevelView($.__views.__alloyId10853);
    $.__views.__alloyId10854 = Ti.UI.createView({
        id: "__alloyId10854"
    });
    $.__views.__alloyId10853.add($.__views.__alloyId10854);
    $.__views.__alloyId10855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10855"
    });
    $.__views.__alloyId10854.add($.__views.__alloyId10855);
    $.__views.__alloyId10856 = Ti.UI.createView({
        id: "__alloyId10856"
    });
    $.__views.__alloyId10856 && $.addTopLevelView($.__views.__alloyId10856);
    $.__views.__alloyId10857 = Ti.UI.createView({
        id: "__alloyId10857"
    });
    $.__views.__alloyId10856.add($.__views.__alloyId10857);
    $.__views.__alloyId10858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10858"
    });
    $.__views.__alloyId10857.add($.__views.__alloyId10858);
    $.__views.__alloyId10859 = Ti.UI.createView({
        id: "__alloyId10859"
    });
    $.__views.__alloyId10859 && $.addTopLevelView($.__views.__alloyId10859);
    $.__views.__alloyId10860 = Ti.UI.createView({
        id: "__alloyId10860"
    });
    $.__views.__alloyId10859.add($.__views.__alloyId10860);
    $.__views.__alloyId10861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10861"
    });
    $.__views.__alloyId10860.add($.__views.__alloyId10861);
    $.__views.__alloyId10862 = Ti.UI.createView({
        id: "__alloyId10862"
    });
    $.__views.__alloyId10862 && $.addTopLevelView($.__views.__alloyId10862);
    $.__views.__alloyId10863 = Ti.UI.createView({
        id: "__alloyId10863"
    });
    $.__views.__alloyId10862.add($.__views.__alloyId10863);
    $.__views.__alloyId10864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10864"
    });
    $.__views.__alloyId10863.add($.__views.__alloyId10864);
    $.__views.__alloyId10865 = Ti.UI.createView({
        id: "__alloyId10865"
    });
    $.__views.__alloyId10865 && $.addTopLevelView($.__views.__alloyId10865);
    $.__views.__alloyId10866 = Ti.UI.createView({
        id: "__alloyId10866"
    });
    $.__views.__alloyId10865.add($.__views.__alloyId10866);
    $.__views.__alloyId10867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10867"
    });
    $.__views.__alloyId10866.add($.__views.__alloyId10867);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;