function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_228";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_228 = Ti.UI.createView({
        id: "widget_228"
    });
    $.__views.widget_228 && $.addTopLevelView($.__views.widget_228);
    $.__views.__alloyId3770 = Ti.UI.createView({
        id: "__alloyId3770"
    });
    $.__views.widget_228.add($.__views.__alloyId3770);
    $.__views.__alloyId3771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3771"
    });
    $.__views.__alloyId3770.add($.__views.__alloyId3771);
    $.__views.__alloyId3772 = Ti.UI.createView({
        id: "__alloyId3772"
    });
    $.__views.__alloyId3772 && $.addTopLevelView($.__views.__alloyId3772);
    $.__views.__alloyId3773 = Ti.UI.createView({
        id: "__alloyId3773"
    });
    $.__views.__alloyId3772.add($.__views.__alloyId3773);
    $.__views.__alloyId3774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3774"
    });
    $.__views.__alloyId3773.add($.__views.__alloyId3774);
    $.__views.__alloyId3775 = Ti.UI.createView({
        id: "__alloyId3775"
    });
    $.__views.__alloyId3775 && $.addTopLevelView($.__views.__alloyId3775);
    $.__views.__alloyId3776 = Ti.UI.createView({
        id: "__alloyId3776"
    });
    $.__views.__alloyId3775.add($.__views.__alloyId3776);
    $.__views.__alloyId3777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3777"
    });
    $.__views.__alloyId3776.add($.__views.__alloyId3777);
    $.__views.__alloyId3778 = Ti.UI.createView({
        id: "__alloyId3778"
    });
    $.__views.__alloyId3778 && $.addTopLevelView($.__views.__alloyId3778);
    $.__views.__alloyId3779 = Ti.UI.createView({
        id: "__alloyId3779"
    });
    $.__views.__alloyId3778.add($.__views.__alloyId3779);
    $.__views.__alloyId3780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3780"
    });
    $.__views.__alloyId3779.add($.__views.__alloyId3780);
    $.__views.__alloyId3781 = Ti.UI.createView({
        id: "__alloyId3781"
    });
    $.__views.__alloyId3781 && $.addTopLevelView($.__views.__alloyId3781);
    $.__views.__alloyId3782 = Ti.UI.createView({
        id: "__alloyId3782"
    });
    $.__views.__alloyId3781.add($.__views.__alloyId3782);
    $.__views.__alloyId3783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3783"
    });
    $.__views.__alloyId3782.add($.__views.__alloyId3783);
    $.__views.__alloyId3784 = Ti.UI.createView({
        id: "__alloyId3784"
    });
    $.__views.__alloyId3784 && $.addTopLevelView($.__views.__alloyId3784);
    $.__views.__alloyId3785 = Ti.UI.createView({
        id: "__alloyId3785"
    });
    $.__views.__alloyId3784.add($.__views.__alloyId3785);
    $.__views.__alloyId3786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3786"
    });
    $.__views.__alloyId3785.add($.__views.__alloyId3786);
    $.__views.__alloyId3787 = Ti.UI.createView({
        id: "__alloyId3787"
    });
    $.__views.__alloyId3787 && $.addTopLevelView($.__views.__alloyId3787);
    $.__views.__alloyId3788 = Ti.UI.createView({
        id: "__alloyId3788"
    });
    $.__views.__alloyId3787.add($.__views.__alloyId3788);
    $.__views.__alloyId3789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3789"
    });
    $.__views.__alloyId3788.add($.__views.__alloyId3789);
    $.__views.__alloyId3790 = Ti.UI.createView({
        id: "__alloyId3790"
    });
    $.__views.__alloyId3790 && $.addTopLevelView($.__views.__alloyId3790);
    $.__views.__alloyId3791 = Ti.UI.createView({
        id: "__alloyId3791"
    });
    $.__views.__alloyId3790.add($.__views.__alloyId3791);
    $.__views.__alloyId3792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3792"
    });
    $.__views.__alloyId3791.add($.__views.__alloyId3792);
    $.__views.__alloyId3793 = Ti.UI.createView({
        id: "__alloyId3793"
    });
    $.__views.__alloyId3793 && $.addTopLevelView($.__views.__alloyId3793);
    $.__views.__alloyId3794 = Ti.UI.createView({
        id: "__alloyId3794"
    });
    $.__views.__alloyId3793.add($.__views.__alloyId3794);
    $.__views.__alloyId3795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3795"
    });
    $.__views.__alloyId3794.add($.__views.__alloyId3795);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;