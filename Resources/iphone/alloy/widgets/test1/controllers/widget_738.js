function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_738";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_738 = Ti.UI.createView({
        id: "widget_738"
    });
    $.__views.widget_738 && $.addTopLevelView($.__views.widget_738);
    $.__views.__alloyId18486 = Ti.UI.createView({
        id: "__alloyId18486"
    });
    $.__views.widget_738.add($.__views.__alloyId18486);
    $.__views.__alloyId18487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18487"
    });
    $.__views.__alloyId18486.add($.__views.__alloyId18487);
    $.__views.__alloyId18488 = Ti.UI.createView({
        id: "__alloyId18488"
    });
    $.__views.__alloyId18488 && $.addTopLevelView($.__views.__alloyId18488);
    $.__views.__alloyId18489 = Ti.UI.createView({
        id: "__alloyId18489"
    });
    $.__views.__alloyId18488.add($.__views.__alloyId18489);
    $.__views.__alloyId18490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18490"
    });
    $.__views.__alloyId18489.add($.__views.__alloyId18490);
    $.__views.__alloyId18491 = Ti.UI.createView({
        id: "__alloyId18491"
    });
    $.__views.__alloyId18491 && $.addTopLevelView($.__views.__alloyId18491);
    $.__views.__alloyId18492 = Ti.UI.createView({
        id: "__alloyId18492"
    });
    $.__views.__alloyId18491.add($.__views.__alloyId18492);
    $.__views.__alloyId18493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18493"
    });
    $.__views.__alloyId18492.add($.__views.__alloyId18493);
    $.__views.__alloyId18494 = Ti.UI.createView({
        id: "__alloyId18494"
    });
    $.__views.__alloyId18494 && $.addTopLevelView($.__views.__alloyId18494);
    $.__views.__alloyId18495 = Ti.UI.createView({
        id: "__alloyId18495"
    });
    $.__views.__alloyId18494.add($.__views.__alloyId18495);
    $.__views.__alloyId18496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18496"
    });
    $.__views.__alloyId18495.add($.__views.__alloyId18496);
    $.__views.__alloyId18497 = Ti.UI.createView({
        id: "__alloyId18497"
    });
    $.__views.__alloyId18497 && $.addTopLevelView($.__views.__alloyId18497);
    $.__views.__alloyId18498 = Ti.UI.createView({
        id: "__alloyId18498"
    });
    $.__views.__alloyId18497.add($.__views.__alloyId18498);
    $.__views.__alloyId18499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18499"
    });
    $.__views.__alloyId18498.add($.__views.__alloyId18499);
    $.__views.__alloyId18500 = Ti.UI.createView({
        id: "__alloyId18500"
    });
    $.__views.__alloyId18500 && $.addTopLevelView($.__views.__alloyId18500);
    $.__views.__alloyId18501 = Ti.UI.createView({
        id: "__alloyId18501"
    });
    $.__views.__alloyId18500.add($.__views.__alloyId18501);
    $.__views.__alloyId18502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18502"
    });
    $.__views.__alloyId18501.add($.__views.__alloyId18502);
    $.__views.__alloyId18503 = Ti.UI.createView({
        id: "__alloyId18503"
    });
    $.__views.__alloyId18503 && $.addTopLevelView($.__views.__alloyId18503);
    $.__views.__alloyId18504 = Ti.UI.createView({
        id: "__alloyId18504"
    });
    $.__views.__alloyId18503.add($.__views.__alloyId18504);
    $.__views.__alloyId18505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18505"
    });
    $.__views.__alloyId18504.add($.__views.__alloyId18505);
    $.__views.__alloyId18506 = Ti.UI.createView({
        id: "__alloyId18506"
    });
    $.__views.__alloyId18506 && $.addTopLevelView($.__views.__alloyId18506);
    $.__views.__alloyId18507 = Ti.UI.createView({
        id: "__alloyId18507"
    });
    $.__views.__alloyId18506.add($.__views.__alloyId18507);
    $.__views.__alloyId18508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18508"
    });
    $.__views.__alloyId18507.add($.__views.__alloyId18508);
    $.__views.__alloyId18509 = Ti.UI.createView({
        id: "__alloyId18509"
    });
    $.__views.__alloyId18509 && $.addTopLevelView($.__views.__alloyId18509);
    $.__views.__alloyId18510 = Ti.UI.createView({
        id: "__alloyId18510"
    });
    $.__views.__alloyId18509.add($.__views.__alloyId18510);
    $.__views.__alloyId18511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18511"
    });
    $.__views.__alloyId18510.add($.__views.__alloyId18511);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;