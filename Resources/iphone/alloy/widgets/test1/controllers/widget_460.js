function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_460";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_460 = Ti.UI.createView({
        id: "widget_460"
    });
    $.__views.widget_460 && $.addTopLevelView($.__views.widget_460);
    $.__views.__alloyId10478 = Ti.UI.createView({
        id: "__alloyId10478"
    });
    $.__views.widget_460.add($.__views.__alloyId10478);
    $.__views.__alloyId10479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10479"
    });
    $.__views.__alloyId10478.add($.__views.__alloyId10479);
    $.__views.__alloyId10480 = Ti.UI.createView({
        id: "__alloyId10480"
    });
    $.__views.__alloyId10480 && $.addTopLevelView($.__views.__alloyId10480);
    $.__views.__alloyId10481 = Ti.UI.createView({
        id: "__alloyId10481"
    });
    $.__views.__alloyId10480.add($.__views.__alloyId10481);
    $.__views.__alloyId10482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10482"
    });
    $.__views.__alloyId10481.add($.__views.__alloyId10482);
    $.__views.__alloyId10483 = Ti.UI.createView({
        id: "__alloyId10483"
    });
    $.__views.__alloyId10483 && $.addTopLevelView($.__views.__alloyId10483);
    $.__views.__alloyId10484 = Ti.UI.createView({
        id: "__alloyId10484"
    });
    $.__views.__alloyId10483.add($.__views.__alloyId10484);
    $.__views.__alloyId10485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10485"
    });
    $.__views.__alloyId10484.add($.__views.__alloyId10485);
    $.__views.__alloyId10486 = Ti.UI.createView({
        id: "__alloyId10486"
    });
    $.__views.__alloyId10486 && $.addTopLevelView($.__views.__alloyId10486);
    $.__views.__alloyId10487 = Ti.UI.createView({
        id: "__alloyId10487"
    });
    $.__views.__alloyId10486.add($.__views.__alloyId10487);
    $.__views.__alloyId10488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10488"
    });
    $.__views.__alloyId10487.add($.__views.__alloyId10488);
    $.__views.__alloyId10489 = Ti.UI.createView({
        id: "__alloyId10489"
    });
    $.__views.__alloyId10489 && $.addTopLevelView($.__views.__alloyId10489);
    $.__views.__alloyId10490 = Ti.UI.createView({
        id: "__alloyId10490"
    });
    $.__views.__alloyId10489.add($.__views.__alloyId10490);
    $.__views.__alloyId10491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10491"
    });
    $.__views.__alloyId10490.add($.__views.__alloyId10491);
    $.__views.__alloyId10492 = Ti.UI.createView({
        id: "__alloyId10492"
    });
    $.__views.__alloyId10492 && $.addTopLevelView($.__views.__alloyId10492);
    $.__views.__alloyId10493 = Ti.UI.createView({
        id: "__alloyId10493"
    });
    $.__views.__alloyId10492.add($.__views.__alloyId10493);
    $.__views.__alloyId10494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10494"
    });
    $.__views.__alloyId10493.add($.__views.__alloyId10494);
    $.__views.__alloyId10495 = Ti.UI.createView({
        id: "__alloyId10495"
    });
    $.__views.__alloyId10495 && $.addTopLevelView($.__views.__alloyId10495);
    $.__views.__alloyId10496 = Ti.UI.createView({
        id: "__alloyId10496"
    });
    $.__views.__alloyId10495.add($.__views.__alloyId10496);
    $.__views.__alloyId10497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10497"
    });
    $.__views.__alloyId10496.add($.__views.__alloyId10497);
    $.__views.__alloyId10498 = Ti.UI.createView({
        id: "__alloyId10498"
    });
    $.__views.__alloyId10498 && $.addTopLevelView($.__views.__alloyId10498);
    $.__views.__alloyId10499 = Ti.UI.createView({
        id: "__alloyId10499"
    });
    $.__views.__alloyId10498.add($.__views.__alloyId10499);
    $.__views.__alloyId10500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10500"
    });
    $.__views.__alloyId10499.add($.__views.__alloyId10500);
    $.__views.__alloyId10501 = Ti.UI.createView({
        id: "__alloyId10501"
    });
    $.__views.__alloyId10501 && $.addTopLevelView($.__views.__alloyId10501);
    $.__views.__alloyId10502 = Ti.UI.createView({
        id: "__alloyId10502"
    });
    $.__views.__alloyId10501.add($.__views.__alloyId10502);
    $.__views.__alloyId10503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10503"
    });
    $.__views.__alloyId10502.add($.__views.__alloyId10503);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;