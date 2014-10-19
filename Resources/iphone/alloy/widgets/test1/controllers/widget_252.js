function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_252";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_252 = Ti.UI.createView({
        id: "widget_252"
    });
    $.__views.widget_252 && $.addTopLevelView($.__views.widget_252);
    $.__views.__alloyId4472 = Ti.UI.createView({
        id: "__alloyId4472"
    });
    $.__views.widget_252.add($.__views.__alloyId4472);
    $.__views.__alloyId4473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4473"
    });
    $.__views.__alloyId4472.add($.__views.__alloyId4473);
    $.__views.__alloyId4474 = Ti.UI.createView({
        id: "__alloyId4474"
    });
    $.__views.__alloyId4474 && $.addTopLevelView($.__views.__alloyId4474);
    $.__views.__alloyId4475 = Ti.UI.createView({
        id: "__alloyId4475"
    });
    $.__views.__alloyId4474.add($.__views.__alloyId4475);
    $.__views.__alloyId4476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4476"
    });
    $.__views.__alloyId4475.add($.__views.__alloyId4476);
    $.__views.__alloyId4477 = Ti.UI.createView({
        id: "__alloyId4477"
    });
    $.__views.__alloyId4477 && $.addTopLevelView($.__views.__alloyId4477);
    $.__views.__alloyId4478 = Ti.UI.createView({
        id: "__alloyId4478"
    });
    $.__views.__alloyId4477.add($.__views.__alloyId4478);
    $.__views.__alloyId4479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4479"
    });
    $.__views.__alloyId4478.add($.__views.__alloyId4479);
    $.__views.__alloyId4480 = Ti.UI.createView({
        id: "__alloyId4480"
    });
    $.__views.__alloyId4480 && $.addTopLevelView($.__views.__alloyId4480);
    $.__views.__alloyId4481 = Ti.UI.createView({
        id: "__alloyId4481"
    });
    $.__views.__alloyId4480.add($.__views.__alloyId4481);
    $.__views.__alloyId4482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4482"
    });
    $.__views.__alloyId4481.add($.__views.__alloyId4482);
    $.__views.__alloyId4483 = Ti.UI.createView({
        id: "__alloyId4483"
    });
    $.__views.__alloyId4483 && $.addTopLevelView($.__views.__alloyId4483);
    $.__views.__alloyId4484 = Ti.UI.createView({
        id: "__alloyId4484"
    });
    $.__views.__alloyId4483.add($.__views.__alloyId4484);
    $.__views.__alloyId4485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4485"
    });
    $.__views.__alloyId4484.add($.__views.__alloyId4485);
    $.__views.__alloyId4486 = Ti.UI.createView({
        id: "__alloyId4486"
    });
    $.__views.__alloyId4486 && $.addTopLevelView($.__views.__alloyId4486);
    $.__views.__alloyId4487 = Ti.UI.createView({
        id: "__alloyId4487"
    });
    $.__views.__alloyId4486.add($.__views.__alloyId4487);
    $.__views.__alloyId4488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4488"
    });
    $.__views.__alloyId4487.add($.__views.__alloyId4488);
    $.__views.__alloyId4489 = Ti.UI.createView({
        id: "__alloyId4489"
    });
    $.__views.__alloyId4489 && $.addTopLevelView($.__views.__alloyId4489);
    $.__views.__alloyId4490 = Ti.UI.createView({
        id: "__alloyId4490"
    });
    $.__views.__alloyId4489.add($.__views.__alloyId4490);
    $.__views.__alloyId4491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4491"
    });
    $.__views.__alloyId4490.add($.__views.__alloyId4491);
    $.__views.__alloyId4492 = Ti.UI.createView({
        id: "__alloyId4492"
    });
    $.__views.__alloyId4492 && $.addTopLevelView($.__views.__alloyId4492);
    $.__views.__alloyId4493 = Ti.UI.createView({
        id: "__alloyId4493"
    });
    $.__views.__alloyId4492.add($.__views.__alloyId4493);
    $.__views.__alloyId4494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4494"
    });
    $.__views.__alloyId4493.add($.__views.__alloyId4494);
    $.__views.__alloyId4495 = Ti.UI.createView({
        id: "__alloyId4495"
    });
    $.__views.__alloyId4495 && $.addTopLevelView($.__views.__alloyId4495);
    $.__views.__alloyId4496 = Ti.UI.createView({
        id: "__alloyId4496"
    });
    $.__views.__alloyId4495.add($.__views.__alloyId4496);
    $.__views.__alloyId4497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4497"
    });
    $.__views.__alloyId4496.add($.__views.__alloyId4497);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;