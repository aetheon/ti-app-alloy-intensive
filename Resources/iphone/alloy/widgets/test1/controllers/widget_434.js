function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_434";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_434 = Ti.UI.createView({
        id: "widget_434"
    });
    $.__views.widget_434 && $.addTopLevelView($.__views.widget_434);
    $.__views.__alloyId9724 = Ti.UI.createView({
        id: "__alloyId9724"
    });
    $.__views.widget_434.add($.__views.__alloyId9724);
    $.__views.__alloyId9725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9725"
    });
    $.__views.__alloyId9724.add($.__views.__alloyId9725);
    $.__views.__alloyId9726 = Ti.UI.createView({
        id: "__alloyId9726"
    });
    $.__views.__alloyId9726 && $.addTopLevelView($.__views.__alloyId9726);
    $.__views.__alloyId9727 = Ti.UI.createView({
        id: "__alloyId9727"
    });
    $.__views.__alloyId9726.add($.__views.__alloyId9727);
    $.__views.__alloyId9728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9728"
    });
    $.__views.__alloyId9727.add($.__views.__alloyId9728);
    $.__views.__alloyId9729 = Ti.UI.createView({
        id: "__alloyId9729"
    });
    $.__views.__alloyId9729 && $.addTopLevelView($.__views.__alloyId9729);
    $.__views.__alloyId9730 = Ti.UI.createView({
        id: "__alloyId9730"
    });
    $.__views.__alloyId9729.add($.__views.__alloyId9730);
    $.__views.__alloyId9731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9731"
    });
    $.__views.__alloyId9730.add($.__views.__alloyId9731);
    $.__views.__alloyId9732 = Ti.UI.createView({
        id: "__alloyId9732"
    });
    $.__views.__alloyId9732 && $.addTopLevelView($.__views.__alloyId9732);
    $.__views.__alloyId9733 = Ti.UI.createView({
        id: "__alloyId9733"
    });
    $.__views.__alloyId9732.add($.__views.__alloyId9733);
    $.__views.__alloyId9734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9734"
    });
    $.__views.__alloyId9733.add($.__views.__alloyId9734);
    $.__views.__alloyId9735 = Ti.UI.createView({
        id: "__alloyId9735"
    });
    $.__views.__alloyId9735 && $.addTopLevelView($.__views.__alloyId9735);
    $.__views.__alloyId9736 = Ti.UI.createView({
        id: "__alloyId9736"
    });
    $.__views.__alloyId9735.add($.__views.__alloyId9736);
    $.__views.__alloyId9737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9737"
    });
    $.__views.__alloyId9736.add($.__views.__alloyId9737);
    $.__views.__alloyId9738 = Ti.UI.createView({
        id: "__alloyId9738"
    });
    $.__views.__alloyId9738 && $.addTopLevelView($.__views.__alloyId9738);
    $.__views.__alloyId9739 = Ti.UI.createView({
        id: "__alloyId9739"
    });
    $.__views.__alloyId9738.add($.__views.__alloyId9739);
    $.__views.__alloyId9740 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9740"
    });
    $.__views.__alloyId9739.add($.__views.__alloyId9740);
    $.__views.__alloyId9741 = Ti.UI.createView({
        id: "__alloyId9741"
    });
    $.__views.__alloyId9741 && $.addTopLevelView($.__views.__alloyId9741);
    $.__views.__alloyId9742 = Ti.UI.createView({
        id: "__alloyId9742"
    });
    $.__views.__alloyId9741.add($.__views.__alloyId9742);
    $.__views.__alloyId9743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9743"
    });
    $.__views.__alloyId9742.add($.__views.__alloyId9743);
    $.__views.__alloyId9744 = Ti.UI.createView({
        id: "__alloyId9744"
    });
    $.__views.__alloyId9744 && $.addTopLevelView($.__views.__alloyId9744);
    $.__views.__alloyId9745 = Ti.UI.createView({
        id: "__alloyId9745"
    });
    $.__views.__alloyId9744.add($.__views.__alloyId9745);
    $.__views.__alloyId9746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9746"
    });
    $.__views.__alloyId9745.add($.__views.__alloyId9746);
    $.__views.__alloyId9747 = Ti.UI.createView({
        id: "__alloyId9747"
    });
    $.__views.__alloyId9747 && $.addTopLevelView($.__views.__alloyId9747);
    $.__views.__alloyId9748 = Ti.UI.createView({
        id: "__alloyId9748"
    });
    $.__views.__alloyId9747.add($.__views.__alloyId9748);
    $.__views.__alloyId9749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9749"
    });
    $.__views.__alloyId9748.add($.__views.__alloyId9749);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;