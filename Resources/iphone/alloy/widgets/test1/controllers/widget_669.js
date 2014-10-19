function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_669";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_669 = Ti.UI.createView({
        id: "widget_669"
    });
    $.__views.widget_669 && $.addTopLevelView($.__views.widget_669);
    $.__views.__alloyId16484 = Ti.UI.createView({
        id: "__alloyId16484"
    });
    $.__views.widget_669.add($.__views.__alloyId16484);
    $.__views.__alloyId16485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16485"
    });
    $.__views.__alloyId16484.add($.__views.__alloyId16485);
    $.__views.__alloyId16486 = Ti.UI.createView({
        id: "__alloyId16486"
    });
    $.__views.__alloyId16486 && $.addTopLevelView($.__views.__alloyId16486);
    $.__views.__alloyId16487 = Ti.UI.createView({
        id: "__alloyId16487"
    });
    $.__views.__alloyId16486.add($.__views.__alloyId16487);
    $.__views.__alloyId16488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16488"
    });
    $.__views.__alloyId16487.add($.__views.__alloyId16488);
    $.__views.__alloyId16489 = Ti.UI.createView({
        id: "__alloyId16489"
    });
    $.__views.__alloyId16489 && $.addTopLevelView($.__views.__alloyId16489);
    $.__views.__alloyId16490 = Ti.UI.createView({
        id: "__alloyId16490"
    });
    $.__views.__alloyId16489.add($.__views.__alloyId16490);
    $.__views.__alloyId16491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16491"
    });
    $.__views.__alloyId16490.add($.__views.__alloyId16491);
    $.__views.__alloyId16492 = Ti.UI.createView({
        id: "__alloyId16492"
    });
    $.__views.__alloyId16492 && $.addTopLevelView($.__views.__alloyId16492);
    $.__views.__alloyId16493 = Ti.UI.createView({
        id: "__alloyId16493"
    });
    $.__views.__alloyId16492.add($.__views.__alloyId16493);
    $.__views.__alloyId16494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16494"
    });
    $.__views.__alloyId16493.add($.__views.__alloyId16494);
    $.__views.__alloyId16495 = Ti.UI.createView({
        id: "__alloyId16495"
    });
    $.__views.__alloyId16495 && $.addTopLevelView($.__views.__alloyId16495);
    $.__views.__alloyId16496 = Ti.UI.createView({
        id: "__alloyId16496"
    });
    $.__views.__alloyId16495.add($.__views.__alloyId16496);
    $.__views.__alloyId16497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16497"
    });
    $.__views.__alloyId16496.add($.__views.__alloyId16497);
    $.__views.__alloyId16498 = Ti.UI.createView({
        id: "__alloyId16498"
    });
    $.__views.__alloyId16498 && $.addTopLevelView($.__views.__alloyId16498);
    $.__views.__alloyId16499 = Ti.UI.createView({
        id: "__alloyId16499"
    });
    $.__views.__alloyId16498.add($.__views.__alloyId16499);
    $.__views.__alloyId16500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16500"
    });
    $.__views.__alloyId16499.add($.__views.__alloyId16500);
    $.__views.__alloyId16501 = Ti.UI.createView({
        id: "__alloyId16501"
    });
    $.__views.__alloyId16501 && $.addTopLevelView($.__views.__alloyId16501);
    $.__views.__alloyId16502 = Ti.UI.createView({
        id: "__alloyId16502"
    });
    $.__views.__alloyId16501.add($.__views.__alloyId16502);
    $.__views.__alloyId16503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16503"
    });
    $.__views.__alloyId16502.add($.__views.__alloyId16503);
    $.__views.__alloyId16504 = Ti.UI.createView({
        id: "__alloyId16504"
    });
    $.__views.__alloyId16504 && $.addTopLevelView($.__views.__alloyId16504);
    $.__views.__alloyId16505 = Ti.UI.createView({
        id: "__alloyId16505"
    });
    $.__views.__alloyId16504.add($.__views.__alloyId16505);
    $.__views.__alloyId16506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16506"
    });
    $.__views.__alloyId16505.add($.__views.__alloyId16506);
    $.__views.__alloyId16507 = Ti.UI.createView({
        id: "__alloyId16507"
    });
    $.__views.__alloyId16507 && $.addTopLevelView($.__views.__alloyId16507);
    $.__views.__alloyId16508 = Ti.UI.createView({
        id: "__alloyId16508"
    });
    $.__views.__alloyId16507.add($.__views.__alloyId16508);
    $.__views.__alloyId16509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16509"
    });
    $.__views.__alloyId16508.add($.__views.__alloyId16509);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;