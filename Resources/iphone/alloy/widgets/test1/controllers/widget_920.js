function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_920";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_920 = Ti.UI.createView({
        id: "widget_920"
    });
    $.__views.widget_920 && $.addTopLevelView($.__views.widget_920);
    $.__views.__alloyId23764 = Ti.UI.createView({
        id: "__alloyId23764"
    });
    $.__views.widget_920.add($.__views.__alloyId23764);
    $.__views.__alloyId23765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23765"
    });
    $.__views.__alloyId23764.add($.__views.__alloyId23765);
    $.__views.__alloyId23766 = Ti.UI.createView({
        id: "__alloyId23766"
    });
    $.__views.__alloyId23766 && $.addTopLevelView($.__views.__alloyId23766);
    $.__views.__alloyId23767 = Ti.UI.createView({
        id: "__alloyId23767"
    });
    $.__views.__alloyId23766.add($.__views.__alloyId23767);
    $.__views.__alloyId23768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23768"
    });
    $.__views.__alloyId23767.add($.__views.__alloyId23768);
    $.__views.__alloyId23769 = Ti.UI.createView({
        id: "__alloyId23769"
    });
    $.__views.__alloyId23769 && $.addTopLevelView($.__views.__alloyId23769);
    $.__views.__alloyId23770 = Ti.UI.createView({
        id: "__alloyId23770"
    });
    $.__views.__alloyId23769.add($.__views.__alloyId23770);
    $.__views.__alloyId23771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23771"
    });
    $.__views.__alloyId23770.add($.__views.__alloyId23771);
    $.__views.__alloyId23772 = Ti.UI.createView({
        id: "__alloyId23772"
    });
    $.__views.__alloyId23772 && $.addTopLevelView($.__views.__alloyId23772);
    $.__views.__alloyId23773 = Ti.UI.createView({
        id: "__alloyId23773"
    });
    $.__views.__alloyId23772.add($.__views.__alloyId23773);
    $.__views.__alloyId23774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23774"
    });
    $.__views.__alloyId23773.add($.__views.__alloyId23774);
    $.__views.__alloyId23775 = Ti.UI.createView({
        id: "__alloyId23775"
    });
    $.__views.__alloyId23775 && $.addTopLevelView($.__views.__alloyId23775);
    $.__views.__alloyId23776 = Ti.UI.createView({
        id: "__alloyId23776"
    });
    $.__views.__alloyId23775.add($.__views.__alloyId23776);
    $.__views.__alloyId23777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23777"
    });
    $.__views.__alloyId23776.add($.__views.__alloyId23777);
    $.__views.__alloyId23778 = Ti.UI.createView({
        id: "__alloyId23778"
    });
    $.__views.__alloyId23778 && $.addTopLevelView($.__views.__alloyId23778);
    $.__views.__alloyId23779 = Ti.UI.createView({
        id: "__alloyId23779"
    });
    $.__views.__alloyId23778.add($.__views.__alloyId23779);
    $.__views.__alloyId23780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23780"
    });
    $.__views.__alloyId23779.add($.__views.__alloyId23780);
    $.__views.__alloyId23781 = Ti.UI.createView({
        id: "__alloyId23781"
    });
    $.__views.__alloyId23781 && $.addTopLevelView($.__views.__alloyId23781);
    $.__views.__alloyId23782 = Ti.UI.createView({
        id: "__alloyId23782"
    });
    $.__views.__alloyId23781.add($.__views.__alloyId23782);
    $.__views.__alloyId23783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23783"
    });
    $.__views.__alloyId23782.add($.__views.__alloyId23783);
    $.__views.__alloyId23784 = Ti.UI.createView({
        id: "__alloyId23784"
    });
    $.__views.__alloyId23784 && $.addTopLevelView($.__views.__alloyId23784);
    $.__views.__alloyId23785 = Ti.UI.createView({
        id: "__alloyId23785"
    });
    $.__views.__alloyId23784.add($.__views.__alloyId23785);
    $.__views.__alloyId23786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23786"
    });
    $.__views.__alloyId23785.add($.__views.__alloyId23786);
    $.__views.__alloyId23787 = Ti.UI.createView({
        id: "__alloyId23787"
    });
    $.__views.__alloyId23787 && $.addTopLevelView($.__views.__alloyId23787);
    $.__views.__alloyId23788 = Ti.UI.createView({
        id: "__alloyId23788"
    });
    $.__views.__alloyId23787.add($.__views.__alloyId23788);
    $.__views.__alloyId23789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23789"
    });
    $.__views.__alloyId23788.add($.__views.__alloyId23789);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;