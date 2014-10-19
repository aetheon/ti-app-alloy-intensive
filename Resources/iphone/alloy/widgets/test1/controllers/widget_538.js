function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_538";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_538 = Ti.UI.createView({
        id: "widget_538"
    });
    $.__views.widget_538 && $.addTopLevelView($.__views.widget_538);
    $.__views.__alloyId12714 = Ti.UI.createView({
        id: "__alloyId12714"
    });
    $.__views.widget_538.add($.__views.__alloyId12714);
    $.__views.__alloyId12715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12715"
    });
    $.__views.__alloyId12714.add($.__views.__alloyId12715);
    $.__views.__alloyId12716 = Ti.UI.createView({
        id: "__alloyId12716"
    });
    $.__views.__alloyId12716 && $.addTopLevelView($.__views.__alloyId12716);
    $.__views.__alloyId12717 = Ti.UI.createView({
        id: "__alloyId12717"
    });
    $.__views.__alloyId12716.add($.__views.__alloyId12717);
    $.__views.__alloyId12718 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12718"
    });
    $.__views.__alloyId12717.add($.__views.__alloyId12718);
    $.__views.__alloyId12719 = Ti.UI.createView({
        id: "__alloyId12719"
    });
    $.__views.__alloyId12719 && $.addTopLevelView($.__views.__alloyId12719);
    $.__views.__alloyId12720 = Ti.UI.createView({
        id: "__alloyId12720"
    });
    $.__views.__alloyId12719.add($.__views.__alloyId12720);
    $.__views.__alloyId12721 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12721"
    });
    $.__views.__alloyId12720.add($.__views.__alloyId12721);
    $.__views.__alloyId12722 = Ti.UI.createView({
        id: "__alloyId12722"
    });
    $.__views.__alloyId12722 && $.addTopLevelView($.__views.__alloyId12722);
    $.__views.__alloyId12723 = Ti.UI.createView({
        id: "__alloyId12723"
    });
    $.__views.__alloyId12722.add($.__views.__alloyId12723);
    $.__views.__alloyId12724 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12724"
    });
    $.__views.__alloyId12723.add($.__views.__alloyId12724);
    $.__views.__alloyId12725 = Ti.UI.createView({
        id: "__alloyId12725"
    });
    $.__views.__alloyId12725 && $.addTopLevelView($.__views.__alloyId12725);
    $.__views.__alloyId12726 = Ti.UI.createView({
        id: "__alloyId12726"
    });
    $.__views.__alloyId12725.add($.__views.__alloyId12726);
    $.__views.__alloyId12727 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12727"
    });
    $.__views.__alloyId12726.add($.__views.__alloyId12727);
    $.__views.__alloyId12728 = Ti.UI.createView({
        id: "__alloyId12728"
    });
    $.__views.__alloyId12728 && $.addTopLevelView($.__views.__alloyId12728);
    $.__views.__alloyId12729 = Ti.UI.createView({
        id: "__alloyId12729"
    });
    $.__views.__alloyId12728.add($.__views.__alloyId12729);
    $.__views.__alloyId12730 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12730"
    });
    $.__views.__alloyId12729.add($.__views.__alloyId12730);
    $.__views.__alloyId12731 = Ti.UI.createView({
        id: "__alloyId12731"
    });
    $.__views.__alloyId12731 && $.addTopLevelView($.__views.__alloyId12731);
    $.__views.__alloyId12732 = Ti.UI.createView({
        id: "__alloyId12732"
    });
    $.__views.__alloyId12731.add($.__views.__alloyId12732);
    $.__views.__alloyId12733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12733"
    });
    $.__views.__alloyId12732.add($.__views.__alloyId12733);
    $.__views.__alloyId12734 = Ti.UI.createView({
        id: "__alloyId12734"
    });
    $.__views.__alloyId12734 && $.addTopLevelView($.__views.__alloyId12734);
    $.__views.__alloyId12735 = Ti.UI.createView({
        id: "__alloyId12735"
    });
    $.__views.__alloyId12734.add($.__views.__alloyId12735);
    $.__views.__alloyId12736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12736"
    });
    $.__views.__alloyId12735.add($.__views.__alloyId12736);
    $.__views.__alloyId12737 = Ti.UI.createView({
        id: "__alloyId12737"
    });
    $.__views.__alloyId12737 && $.addTopLevelView($.__views.__alloyId12737);
    $.__views.__alloyId12738 = Ti.UI.createView({
        id: "__alloyId12738"
    });
    $.__views.__alloyId12737.add($.__views.__alloyId12738);
    $.__views.__alloyId12739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12739"
    });
    $.__views.__alloyId12738.add($.__views.__alloyId12739);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;