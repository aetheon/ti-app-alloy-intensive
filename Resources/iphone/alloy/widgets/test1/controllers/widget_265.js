function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_265";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_265 = Ti.UI.createView({
        id: "widget_265"
    });
    $.__views.widget_265 && $.addTopLevelView($.__views.widget_265);
    $.__views.__alloyId4836 = Ti.UI.createView({
        id: "__alloyId4836"
    });
    $.__views.widget_265.add($.__views.__alloyId4836);
    $.__views.__alloyId4837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4837"
    });
    $.__views.__alloyId4836.add($.__views.__alloyId4837);
    $.__views.__alloyId4838 = Ti.UI.createView({
        id: "__alloyId4838"
    });
    $.__views.__alloyId4838 && $.addTopLevelView($.__views.__alloyId4838);
    $.__views.__alloyId4839 = Ti.UI.createView({
        id: "__alloyId4839"
    });
    $.__views.__alloyId4838.add($.__views.__alloyId4839);
    $.__views.__alloyId4840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4840"
    });
    $.__views.__alloyId4839.add($.__views.__alloyId4840);
    $.__views.__alloyId4841 = Ti.UI.createView({
        id: "__alloyId4841"
    });
    $.__views.__alloyId4841 && $.addTopLevelView($.__views.__alloyId4841);
    $.__views.__alloyId4842 = Ti.UI.createView({
        id: "__alloyId4842"
    });
    $.__views.__alloyId4841.add($.__views.__alloyId4842);
    $.__views.__alloyId4843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4843"
    });
    $.__views.__alloyId4842.add($.__views.__alloyId4843);
    $.__views.__alloyId4844 = Ti.UI.createView({
        id: "__alloyId4844"
    });
    $.__views.__alloyId4844 && $.addTopLevelView($.__views.__alloyId4844);
    $.__views.__alloyId4845 = Ti.UI.createView({
        id: "__alloyId4845"
    });
    $.__views.__alloyId4844.add($.__views.__alloyId4845);
    $.__views.__alloyId4846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4846"
    });
    $.__views.__alloyId4845.add($.__views.__alloyId4846);
    $.__views.__alloyId4847 = Ti.UI.createView({
        id: "__alloyId4847"
    });
    $.__views.__alloyId4847 && $.addTopLevelView($.__views.__alloyId4847);
    $.__views.__alloyId4848 = Ti.UI.createView({
        id: "__alloyId4848"
    });
    $.__views.__alloyId4847.add($.__views.__alloyId4848);
    $.__views.__alloyId4849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4849"
    });
    $.__views.__alloyId4848.add($.__views.__alloyId4849);
    $.__views.__alloyId4850 = Ti.UI.createView({
        id: "__alloyId4850"
    });
    $.__views.__alloyId4850 && $.addTopLevelView($.__views.__alloyId4850);
    $.__views.__alloyId4851 = Ti.UI.createView({
        id: "__alloyId4851"
    });
    $.__views.__alloyId4850.add($.__views.__alloyId4851);
    $.__views.__alloyId4852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4852"
    });
    $.__views.__alloyId4851.add($.__views.__alloyId4852);
    $.__views.__alloyId4853 = Ti.UI.createView({
        id: "__alloyId4853"
    });
    $.__views.__alloyId4853 && $.addTopLevelView($.__views.__alloyId4853);
    $.__views.__alloyId4854 = Ti.UI.createView({
        id: "__alloyId4854"
    });
    $.__views.__alloyId4853.add($.__views.__alloyId4854);
    $.__views.__alloyId4855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4855"
    });
    $.__views.__alloyId4854.add($.__views.__alloyId4855);
    $.__views.__alloyId4856 = Ti.UI.createView({
        id: "__alloyId4856"
    });
    $.__views.__alloyId4856 && $.addTopLevelView($.__views.__alloyId4856);
    $.__views.__alloyId4857 = Ti.UI.createView({
        id: "__alloyId4857"
    });
    $.__views.__alloyId4856.add($.__views.__alloyId4857);
    $.__views.__alloyId4858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4858"
    });
    $.__views.__alloyId4857.add($.__views.__alloyId4858);
    $.__views.__alloyId4859 = Ti.UI.createView({
        id: "__alloyId4859"
    });
    $.__views.__alloyId4859 && $.addTopLevelView($.__views.__alloyId4859);
    $.__views.__alloyId4860 = Ti.UI.createView({
        id: "__alloyId4860"
    });
    $.__views.__alloyId4859.add($.__views.__alloyId4860);
    $.__views.__alloyId4861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4861"
    });
    $.__views.__alloyId4860.add($.__views.__alloyId4861);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;