function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_54";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_54 = Ti.UI.createView({
        id: "widget_54"
    });
    $.__views.widget_54 && $.addTopLevelView($.__views.widget_54);
    $.__views.__alloyId12766 = Ti.UI.createView({
        id: "__alloyId12766"
    });
    $.__views.widget_54.add($.__views.__alloyId12766);
    $.__views.__alloyId12767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12767"
    });
    $.__views.__alloyId12766.add($.__views.__alloyId12767);
    $.__views.__alloyId12768 = Ti.UI.createView({
        id: "__alloyId12768"
    });
    $.__views.__alloyId12768 && $.addTopLevelView($.__views.__alloyId12768);
    $.__views.__alloyId12769 = Ti.UI.createView({
        id: "__alloyId12769"
    });
    $.__views.__alloyId12768.add($.__views.__alloyId12769);
    $.__views.__alloyId12770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12770"
    });
    $.__views.__alloyId12769.add($.__views.__alloyId12770);
    $.__views.__alloyId12771 = Ti.UI.createView({
        id: "__alloyId12771"
    });
    $.__views.__alloyId12771 && $.addTopLevelView($.__views.__alloyId12771);
    $.__views.__alloyId12772 = Ti.UI.createView({
        id: "__alloyId12772"
    });
    $.__views.__alloyId12771.add($.__views.__alloyId12772);
    $.__views.__alloyId12773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12773"
    });
    $.__views.__alloyId12772.add($.__views.__alloyId12773);
    $.__views.__alloyId12774 = Ti.UI.createView({
        id: "__alloyId12774"
    });
    $.__views.__alloyId12774 && $.addTopLevelView($.__views.__alloyId12774);
    $.__views.__alloyId12775 = Ti.UI.createView({
        id: "__alloyId12775"
    });
    $.__views.__alloyId12774.add($.__views.__alloyId12775);
    $.__views.__alloyId12776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12776"
    });
    $.__views.__alloyId12775.add($.__views.__alloyId12776);
    $.__views.__alloyId12777 = Ti.UI.createView({
        id: "__alloyId12777"
    });
    $.__views.__alloyId12777 && $.addTopLevelView($.__views.__alloyId12777);
    $.__views.__alloyId12778 = Ti.UI.createView({
        id: "__alloyId12778"
    });
    $.__views.__alloyId12777.add($.__views.__alloyId12778);
    $.__views.__alloyId12779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12779"
    });
    $.__views.__alloyId12778.add($.__views.__alloyId12779);
    $.__views.__alloyId12780 = Ti.UI.createView({
        id: "__alloyId12780"
    });
    $.__views.__alloyId12780 && $.addTopLevelView($.__views.__alloyId12780);
    $.__views.__alloyId12781 = Ti.UI.createView({
        id: "__alloyId12781"
    });
    $.__views.__alloyId12780.add($.__views.__alloyId12781);
    $.__views.__alloyId12782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12782"
    });
    $.__views.__alloyId12781.add($.__views.__alloyId12782);
    $.__views.__alloyId12783 = Ti.UI.createView({
        id: "__alloyId12783"
    });
    $.__views.__alloyId12783 && $.addTopLevelView($.__views.__alloyId12783);
    $.__views.__alloyId12784 = Ti.UI.createView({
        id: "__alloyId12784"
    });
    $.__views.__alloyId12783.add($.__views.__alloyId12784);
    $.__views.__alloyId12785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12785"
    });
    $.__views.__alloyId12784.add($.__views.__alloyId12785);
    $.__views.__alloyId12786 = Ti.UI.createView({
        id: "__alloyId12786"
    });
    $.__views.__alloyId12786 && $.addTopLevelView($.__views.__alloyId12786);
    $.__views.__alloyId12787 = Ti.UI.createView({
        id: "__alloyId12787"
    });
    $.__views.__alloyId12786.add($.__views.__alloyId12787);
    $.__views.__alloyId12788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12788"
    });
    $.__views.__alloyId12787.add($.__views.__alloyId12788);
    $.__views.__alloyId12789 = Ti.UI.createView({
        id: "__alloyId12789"
    });
    $.__views.__alloyId12789 && $.addTopLevelView($.__views.__alloyId12789);
    $.__views.__alloyId12790 = Ti.UI.createView({
        id: "__alloyId12790"
    });
    $.__views.__alloyId12789.add($.__views.__alloyId12790);
    $.__views.__alloyId12791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12791"
    });
    $.__views.__alloyId12790.add($.__views.__alloyId12791);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;