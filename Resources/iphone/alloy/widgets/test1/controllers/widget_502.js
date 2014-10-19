function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_502";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_502 = Ti.UI.createView({
        id: "widget_502"
    });
    $.__views.widget_502 && $.addTopLevelView($.__views.widget_502);
    $.__views.__alloyId11700 = Ti.UI.createView({
        id: "__alloyId11700"
    });
    $.__views.widget_502.add($.__views.__alloyId11700);
    $.__views.__alloyId11701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11701"
    });
    $.__views.__alloyId11700.add($.__views.__alloyId11701);
    $.__views.__alloyId11702 = Ti.UI.createView({
        id: "__alloyId11702"
    });
    $.__views.__alloyId11702 && $.addTopLevelView($.__views.__alloyId11702);
    $.__views.__alloyId11703 = Ti.UI.createView({
        id: "__alloyId11703"
    });
    $.__views.__alloyId11702.add($.__views.__alloyId11703);
    $.__views.__alloyId11704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11704"
    });
    $.__views.__alloyId11703.add($.__views.__alloyId11704);
    $.__views.__alloyId11705 = Ti.UI.createView({
        id: "__alloyId11705"
    });
    $.__views.__alloyId11705 && $.addTopLevelView($.__views.__alloyId11705);
    $.__views.__alloyId11706 = Ti.UI.createView({
        id: "__alloyId11706"
    });
    $.__views.__alloyId11705.add($.__views.__alloyId11706);
    $.__views.__alloyId11707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11707"
    });
    $.__views.__alloyId11706.add($.__views.__alloyId11707);
    $.__views.__alloyId11708 = Ti.UI.createView({
        id: "__alloyId11708"
    });
    $.__views.__alloyId11708 && $.addTopLevelView($.__views.__alloyId11708);
    $.__views.__alloyId11709 = Ti.UI.createView({
        id: "__alloyId11709"
    });
    $.__views.__alloyId11708.add($.__views.__alloyId11709);
    $.__views.__alloyId11710 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11710"
    });
    $.__views.__alloyId11709.add($.__views.__alloyId11710);
    $.__views.__alloyId11711 = Ti.UI.createView({
        id: "__alloyId11711"
    });
    $.__views.__alloyId11711 && $.addTopLevelView($.__views.__alloyId11711);
    $.__views.__alloyId11712 = Ti.UI.createView({
        id: "__alloyId11712"
    });
    $.__views.__alloyId11711.add($.__views.__alloyId11712);
    $.__views.__alloyId11713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11713"
    });
    $.__views.__alloyId11712.add($.__views.__alloyId11713);
    $.__views.__alloyId11714 = Ti.UI.createView({
        id: "__alloyId11714"
    });
    $.__views.__alloyId11714 && $.addTopLevelView($.__views.__alloyId11714);
    $.__views.__alloyId11715 = Ti.UI.createView({
        id: "__alloyId11715"
    });
    $.__views.__alloyId11714.add($.__views.__alloyId11715);
    $.__views.__alloyId11716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11716"
    });
    $.__views.__alloyId11715.add($.__views.__alloyId11716);
    $.__views.__alloyId11717 = Ti.UI.createView({
        id: "__alloyId11717"
    });
    $.__views.__alloyId11717 && $.addTopLevelView($.__views.__alloyId11717);
    $.__views.__alloyId11718 = Ti.UI.createView({
        id: "__alloyId11718"
    });
    $.__views.__alloyId11717.add($.__views.__alloyId11718);
    $.__views.__alloyId11719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11719"
    });
    $.__views.__alloyId11718.add($.__views.__alloyId11719);
    $.__views.__alloyId11720 = Ti.UI.createView({
        id: "__alloyId11720"
    });
    $.__views.__alloyId11720 && $.addTopLevelView($.__views.__alloyId11720);
    $.__views.__alloyId11721 = Ti.UI.createView({
        id: "__alloyId11721"
    });
    $.__views.__alloyId11720.add($.__views.__alloyId11721);
    $.__views.__alloyId11722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11722"
    });
    $.__views.__alloyId11721.add($.__views.__alloyId11722);
    $.__views.__alloyId11723 = Ti.UI.createView({
        id: "__alloyId11723"
    });
    $.__views.__alloyId11723 && $.addTopLevelView($.__views.__alloyId11723);
    $.__views.__alloyId11724 = Ti.UI.createView({
        id: "__alloyId11724"
    });
    $.__views.__alloyId11723.add($.__views.__alloyId11724);
    $.__views.__alloyId11725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11725"
    });
    $.__views.__alloyId11724.add($.__views.__alloyId11725);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;