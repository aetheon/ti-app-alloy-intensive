function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_403";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_403 = Ti.UI.createView({
        id: "widget_403"
    });
    $.__views.widget_403 && $.addTopLevelView($.__views.widget_403);
    $.__views.__alloyId8840 = Ti.UI.createView({
        id: "__alloyId8840"
    });
    $.__views.widget_403.add($.__views.__alloyId8840);
    $.__views.__alloyId8841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8841"
    });
    $.__views.__alloyId8840.add($.__views.__alloyId8841);
    $.__views.__alloyId8842 = Ti.UI.createView({
        id: "__alloyId8842"
    });
    $.__views.__alloyId8842 && $.addTopLevelView($.__views.__alloyId8842);
    $.__views.__alloyId8843 = Ti.UI.createView({
        id: "__alloyId8843"
    });
    $.__views.__alloyId8842.add($.__views.__alloyId8843);
    $.__views.__alloyId8844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8844"
    });
    $.__views.__alloyId8843.add($.__views.__alloyId8844);
    $.__views.__alloyId8845 = Ti.UI.createView({
        id: "__alloyId8845"
    });
    $.__views.__alloyId8845 && $.addTopLevelView($.__views.__alloyId8845);
    $.__views.__alloyId8846 = Ti.UI.createView({
        id: "__alloyId8846"
    });
    $.__views.__alloyId8845.add($.__views.__alloyId8846);
    $.__views.__alloyId8847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8847"
    });
    $.__views.__alloyId8846.add($.__views.__alloyId8847);
    $.__views.__alloyId8848 = Ti.UI.createView({
        id: "__alloyId8848"
    });
    $.__views.__alloyId8848 && $.addTopLevelView($.__views.__alloyId8848);
    $.__views.__alloyId8849 = Ti.UI.createView({
        id: "__alloyId8849"
    });
    $.__views.__alloyId8848.add($.__views.__alloyId8849);
    $.__views.__alloyId8850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8850"
    });
    $.__views.__alloyId8849.add($.__views.__alloyId8850);
    $.__views.__alloyId8851 = Ti.UI.createView({
        id: "__alloyId8851"
    });
    $.__views.__alloyId8851 && $.addTopLevelView($.__views.__alloyId8851);
    $.__views.__alloyId8852 = Ti.UI.createView({
        id: "__alloyId8852"
    });
    $.__views.__alloyId8851.add($.__views.__alloyId8852);
    $.__views.__alloyId8853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8853"
    });
    $.__views.__alloyId8852.add($.__views.__alloyId8853);
    $.__views.__alloyId8854 = Ti.UI.createView({
        id: "__alloyId8854"
    });
    $.__views.__alloyId8854 && $.addTopLevelView($.__views.__alloyId8854);
    $.__views.__alloyId8855 = Ti.UI.createView({
        id: "__alloyId8855"
    });
    $.__views.__alloyId8854.add($.__views.__alloyId8855);
    $.__views.__alloyId8856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8856"
    });
    $.__views.__alloyId8855.add($.__views.__alloyId8856);
    $.__views.__alloyId8857 = Ti.UI.createView({
        id: "__alloyId8857"
    });
    $.__views.__alloyId8857 && $.addTopLevelView($.__views.__alloyId8857);
    $.__views.__alloyId8858 = Ti.UI.createView({
        id: "__alloyId8858"
    });
    $.__views.__alloyId8857.add($.__views.__alloyId8858);
    $.__views.__alloyId8859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8859"
    });
    $.__views.__alloyId8858.add($.__views.__alloyId8859);
    $.__views.__alloyId8860 = Ti.UI.createView({
        id: "__alloyId8860"
    });
    $.__views.__alloyId8860 && $.addTopLevelView($.__views.__alloyId8860);
    $.__views.__alloyId8861 = Ti.UI.createView({
        id: "__alloyId8861"
    });
    $.__views.__alloyId8860.add($.__views.__alloyId8861);
    $.__views.__alloyId8862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8862"
    });
    $.__views.__alloyId8861.add($.__views.__alloyId8862);
    $.__views.__alloyId8863 = Ti.UI.createView({
        id: "__alloyId8863"
    });
    $.__views.__alloyId8863 && $.addTopLevelView($.__views.__alloyId8863);
    $.__views.__alloyId8864 = Ti.UI.createView({
        id: "__alloyId8864"
    });
    $.__views.__alloyId8863.add($.__views.__alloyId8864);
    $.__views.__alloyId8865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8865"
    });
    $.__views.__alloyId8864.add($.__views.__alloyId8865);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;