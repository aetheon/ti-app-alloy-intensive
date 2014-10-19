function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_4";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_4 = Ti.UI.createView({
        id: "widget_4"
    });
    $.__views.widget_4 && $.addTopLevelView($.__views.widget_4);
    $.__views.__alloyId8710 = Ti.UI.createView({
        id: "__alloyId8710"
    });
    $.__views.widget_4.add($.__views.__alloyId8710);
    $.__views.__alloyId8711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8711"
    });
    $.__views.__alloyId8710.add($.__views.__alloyId8711);
    $.__views.__alloyId8712 = Ti.UI.createView({
        id: "__alloyId8712"
    });
    $.__views.__alloyId8712 && $.addTopLevelView($.__views.__alloyId8712);
    $.__views.__alloyId8713 = Ti.UI.createView({
        id: "__alloyId8713"
    });
    $.__views.__alloyId8712.add($.__views.__alloyId8713);
    $.__views.__alloyId8714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8714"
    });
    $.__views.__alloyId8713.add($.__views.__alloyId8714);
    $.__views.__alloyId8715 = Ti.UI.createView({
        id: "__alloyId8715"
    });
    $.__views.__alloyId8715 && $.addTopLevelView($.__views.__alloyId8715);
    $.__views.__alloyId8716 = Ti.UI.createView({
        id: "__alloyId8716"
    });
    $.__views.__alloyId8715.add($.__views.__alloyId8716);
    $.__views.__alloyId8717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8717"
    });
    $.__views.__alloyId8716.add($.__views.__alloyId8717);
    $.__views.__alloyId8718 = Ti.UI.createView({
        id: "__alloyId8718"
    });
    $.__views.__alloyId8718 && $.addTopLevelView($.__views.__alloyId8718);
    $.__views.__alloyId8719 = Ti.UI.createView({
        id: "__alloyId8719"
    });
    $.__views.__alloyId8718.add($.__views.__alloyId8719);
    $.__views.__alloyId8720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8720"
    });
    $.__views.__alloyId8719.add($.__views.__alloyId8720);
    $.__views.__alloyId8721 = Ti.UI.createView({
        id: "__alloyId8721"
    });
    $.__views.__alloyId8721 && $.addTopLevelView($.__views.__alloyId8721);
    $.__views.__alloyId8722 = Ti.UI.createView({
        id: "__alloyId8722"
    });
    $.__views.__alloyId8721.add($.__views.__alloyId8722);
    $.__views.__alloyId8723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8723"
    });
    $.__views.__alloyId8722.add($.__views.__alloyId8723);
    $.__views.__alloyId8724 = Ti.UI.createView({
        id: "__alloyId8724"
    });
    $.__views.__alloyId8724 && $.addTopLevelView($.__views.__alloyId8724);
    $.__views.__alloyId8725 = Ti.UI.createView({
        id: "__alloyId8725"
    });
    $.__views.__alloyId8724.add($.__views.__alloyId8725);
    $.__views.__alloyId8726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8726"
    });
    $.__views.__alloyId8725.add($.__views.__alloyId8726);
    $.__views.__alloyId8727 = Ti.UI.createView({
        id: "__alloyId8727"
    });
    $.__views.__alloyId8727 && $.addTopLevelView($.__views.__alloyId8727);
    $.__views.__alloyId8728 = Ti.UI.createView({
        id: "__alloyId8728"
    });
    $.__views.__alloyId8727.add($.__views.__alloyId8728);
    $.__views.__alloyId8729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8729"
    });
    $.__views.__alloyId8728.add($.__views.__alloyId8729);
    $.__views.__alloyId8730 = Ti.UI.createView({
        id: "__alloyId8730"
    });
    $.__views.__alloyId8730 && $.addTopLevelView($.__views.__alloyId8730);
    $.__views.__alloyId8731 = Ti.UI.createView({
        id: "__alloyId8731"
    });
    $.__views.__alloyId8730.add($.__views.__alloyId8731);
    $.__views.__alloyId8732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8732"
    });
    $.__views.__alloyId8731.add($.__views.__alloyId8732);
    $.__views.__alloyId8733 = Ti.UI.createView({
        id: "__alloyId8733"
    });
    $.__views.__alloyId8733 && $.addTopLevelView($.__views.__alloyId8733);
    $.__views.__alloyId8734 = Ti.UI.createView({
        id: "__alloyId8734"
    });
    $.__views.__alloyId8733.add($.__views.__alloyId8734);
    $.__views.__alloyId8735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8735"
    });
    $.__views.__alloyId8734.add($.__views.__alloyId8735);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;