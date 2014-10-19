function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_288";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_288 = Ti.UI.createView({
        id: "widget_288"
    });
    $.__views.widget_288 && $.addTopLevelView($.__views.widget_288);
    $.__views.__alloyId5486 = Ti.UI.createView({
        id: "__alloyId5486"
    });
    $.__views.widget_288.add($.__views.__alloyId5486);
    $.__views.__alloyId5487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5487"
    });
    $.__views.__alloyId5486.add($.__views.__alloyId5487);
    $.__views.__alloyId5488 = Ti.UI.createView({
        id: "__alloyId5488"
    });
    $.__views.__alloyId5488 && $.addTopLevelView($.__views.__alloyId5488);
    $.__views.__alloyId5489 = Ti.UI.createView({
        id: "__alloyId5489"
    });
    $.__views.__alloyId5488.add($.__views.__alloyId5489);
    $.__views.__alloyId5490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5490"
    });
    $.__views.__alloyId5489.add($.__views.__alloyId5490);
    $.__views.__alloyId5491 = Ti.UI.createView({
        id: "__alloyId5491"
    });
    $.__views.__alloyId5491 && $.addTopLevelView($.__views.__alloyId5491);
    $.__views.__alloyId5492 = Ti.UI.createView({
        id: "__alloyId5492"
    });
    $.__views.__alloyId5491.add($.__views.__alloyId5492);
    $.__views.__alloyId5493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5493"
    });
    $.__views.__alloyId5492.add($.__views.__alloyId5493);
    $.__views.__alloyId5494 = Ti.UI.createView({
        id: "__alloyId5494"
    });
    $.__views.__alloyId5494 && $.addTopLevelView($.__views.__alloyId5494);
    $.__views.__alloyId5495 = Ti.UI.createView({
        id: "__alloyId5495"
    });
    $.__views.__alloyId5494.add($.__views.__alloyId5495);
    $.__views.__alloyId5496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5496"
    });
    $.__views.__alloyId5495.add($.__views.__alloyId5496);
    $.__views.__alloyId5497 = Ti.UI.createView({
        id: "__alloyId5497"
    });
    $.__views.__alloyId5497 && $.addTopLevelView($.__views.__alloyId5497);
    $.__views.__alloyId5498 = Ti.UI.createView({
        id: "__alloyId5498"
    });
    $.__views.__alloyId5497.add($.__views.__alloyId5498);
    $.__views.__alloyId5499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5499"
    });
    $.__views.__alloyId5498.add($.__views.__alloyId5499);
    $.__views.__alloyId5500 = Ti.UI.createView({
        id: "__alloyId5500"
    });
    $.__views.__alloyId5500 && $.addTopLevelView($.__views.__alloyId5500);
    $.__views.__alloyId5501 = Ti.UI.createView({
        id: "__alloyId5501"
    });
    $.__views.__alloyId5500.add($.__views.__alloyId5501);
    $.__views.__alloyId5502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5502"
    });
    $.__views.__alloyId5501.add($.__views.__alloyId5502);
    $.__views.__alloyId5503 = Ti.UI.createView({
        id: "__alloyId5503"
    });
    $.__views.__alloyId5503 && $.addTopLevelView($.__views.__alloyId5503);
    $.__views.__alloyId5504 = Ti.UI.createView({
        id: "__alloyId5504"
    });
    $.__views.__alloyId5503.add($.__views.__alloyId5504);
    $.__views.__alloyId5505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5505"
    });
    $.__views.__alloyId5504.add($.__views.__alloyId5505);
    $.__views.__alloyId5506 = Ti.UI.createView({
        id: "__alloyId5506"
    });
    $.__views.__alloyId5506 && $.addTopLevelView($.__views.__alloyId5506);
    $.__views.__alloyId5507 = Ti.UI.createView({
        id: "__alloyId5507"
    });
    $.__views.__alloyId5506.add($.__views.__alloyId5507);
    $.__views.__alloyId5508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5508"
    });
    $.__views.__alloyId5507.add($.__views.__alloyId5508);
    $.__views.__alloyId5509 = Ti.UI.createView({
        id: "__alloyId5509"
    });
    $.__views.__alloyId5509 && $.addTopLevelView($.__views.__alloyId5509);
    $.__views.__alloyId5510 = Ti.UI.createView({
        id: "__alloyId5510"
    });
    $.__views.__alloyId5509.add($.__views.__alloyId5510);
    $.__views.__alloyId5511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5511"
    });
    $.__views.__alloyId5510.add($.__views.__alloyId5511);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;