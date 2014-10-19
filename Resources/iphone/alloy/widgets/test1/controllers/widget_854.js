function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_854";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_854 = Ti.UI.createView({
        id: "widget_854"
    });
    $.__views.widget_854 && $.addTopLevelView($.__views.widget_854);
    $.__views.__alloyId21840 = Ti.UI.createView({
        id: "__alloyId21840"
    });
    $.__views.widget_854.add($.__views.__alloyId21840);
    $.__views.__alloyId21841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21841"
    });
    $.__views.__alloyId21840.add($.__views.__alloyId21841);
    $.__views.__alloyId21842 = Ti.UI.createView({
        id: "__alloyId21842"
    });
    $.__views.__alloyId21842 && $.addTopLevelView($.__views.__alloyId21842);
    $.__views.__alloyId21843 = Ti.UI.createView({
        id: "__alloyId21843"
    });
    $.__views.__alloyId21842.add($.__views.__alloyId21843);
    $.__views.__alloyId21844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21844"
    });
    $.__views.__alloyId21843.add($.__views.__alloyId21844);
    $.__views.__alloyId21845 = Ti.UI.createView({
        id: "__alloyId21845"
    });
    $.__views.__alloyId21845 && $.addTopLevelView($.__views.__alloyId21845);
    $.__views.__alloyId21846 = Ti.UI.createView({
        id: "__alloyId21846"
    });
    $.__views.__alloyId21845.add($.__views.__alloyId21846);
    $.__views.__alloyId21847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21847"
    });
    $.__views.__alloyId21846.add($.__views.__alloyId21847);
    $.__views.__alloyId21848 = Ti.UI.createView({
        id: "__alloyId21848"
    });
    $.__views.__alloyId21848 && $.addTopLevelView($.__views.__alloyId21848);
    $.__views.__alloyId21849 = Ti.UI.createView({
        id: "__alloyId21849"
    });
    $.__views.__alloyId21848.add($.__views.__alloyId21849);
    $.__views.__alloyId21850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21850"
    });
    $.__views.__alloyId21849.add($.__views.__alloyId21850);
    $.__views.__alloyId21851 = Ti.UI.createView({
        id: "__alloyId21851"
    });
    $.__views.__alloyId21851 && $.addTopLevelView($.__views.__alloyId21851);
    $.__views.__alloyId21852 = Ti.UI.createView({
        id: "__alloyId21852"
    });
    $.__views.__alloyId21851.add($.__views.__alloyId21852);
    $.__views.__alloyId21853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21853"
    });
    $.__views.__alloyId21852.add($.__views.__alloyId21853);
    $.__views.__alloyId21854 = Ti.UI.createView({
        id: "__alloyId21854"
    });
    $.__views.__alloyId21854 && $.addTopLevelView($.__views.__alloyId21854);
    $.__views.__alloyId21855 = Ti.UI.createView({
        id: "__alloyId21855"
    });
    $.__views.__alloyId21854.add($.__views.__alloyId21855);
    $.__views.__alloyId21856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21856"
    });
    $.__views.__alloyId21855.add($.__views.__alloyId21856);
    $.__views.__alloyId21857 = Ti.UI.createView({
        id: "__alloyId21857"
    });
    $.__views.__alloyId21857 && $.addTopLevelView($.__views.__alloyId21857);
    $.__views.__alloyId21858 = Ti.UI.createView({
        id: "__alloyId21858"
    });
    $.__views.__alloyId21857.add($.__views.__alloyId21858);
    $.__views.__alloyId21859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21859"
    });
    $.__views.__alloyId21858.add($.__views.__alloyId21859);
    $.__views.__alloyId21860 = Ti.UI.createView({
        id: "__alloyId21860"
    });
    $.__views.__alloyId21860 && $.addTopLevelView($.__views.__alloyId21860);
    $.__views.__alloyId21861 = Ti.UI.createView({
        id: "__alloyId21861"
    });
    $.__views.__alloyId21860.add($.__views.__alloyId21861);
    $.__views.__alloyId21862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21862"
    });
    $.__views.__alloyId21861.add($.__views.__alloyId21862);
    $.__views.__alloyId21863 = Ti.UI.createView({
        id: "__alloyId21863"
    });
    $.__views.__alloyId21863 && $.addTopLevelView($.__views.__alloyId21863);
    $.__views.__alloyId21864 = Ti.UI.createView({
        id: "__alloyId21864"
    });
    $.__views.__alloyId21863.add($.__views.__alloyId21864);
    $.__views.__alloyId21865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21865"
    });
    $.__views.__alloyId21864.add($.__views.__alloyId21865);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;