function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_773";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_773 = Ti.UI.createView({
        id: "widget_773"
    });
    $.__views.widget_773 && $.addTopLevelView($.__views.widget_773);
    $.__views.__alloyId19500 = Ti.UI.createView({
        id: "__alloyId19500"
    });
    $.__views.widget_773.add($.__views.__alloyId19500);
    $.__views.__alloyId19501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19501"
    });
    $.__views.__alloyId19500.add($.__views.__alloyId19501);
    $.__views.__alloyId19502 = Ti.UI.createView({
        id: "__alloyId19502"
    });
    $.__views.__alloyId19502 && $.addTopLevelView($.__views.__alloyId19502);
    $.__views.__alloyId19503 = Ti.UI.createView({
        id: "__alloyId19503"
    });
    $.__views.__alloyId19502.add($.__views.__alloyId19503);
    $.__views.__alloyId19504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19504"
    });
    $.__views.__alloyId19503.add($.__views.__alloyId19504);
    $.__views.__alloyId19505 = Ti.UI.createView({
        id: "__alloyId19505"
    });
    $.__views.__alloyId19505 && $.addTopLevelView($.__views.__alloyId19505);
    $.__views.__alloyId19506 = Ti.UI.createView({
        id: "__alloyId19506"
    });
    $.__views.__alloyId19505.add($.__views.__alloyId19506);
    $.__views.__alloyId19507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19507"
    });
    $.__views.__alloyId19506.add($.__views.__alloyId19507);
    $.__views.__alloyId19508 = Ti.UI.createView({
        id: "__alloyId19508"
    });
    $.__views.__alloyId19508 && $.addTopLevelView($.__views.__alloyId19508);
    $.__views.__alloyId19509 = Ti.UI.createView({
        id: "__alloyId19509"
    });
    $.__views.__alloyId19508.add($.__views.__alloyId19509);
    $.__views.__alloyId19510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19510"
    });
    $.__views.__alloyId19509.add($.__views.__alloyId19510);
    $.__views.__alloyId19511 = Ti.UI.createView({
        id: "__alloyId19511"
    });
    $.__views.__alloyId19511 && $.addTopLevelView($.__views.__alloyId19511);
    $.__views.__alloyId19512 = Ti.UI.createView({
        id: "__alloyId19512"
    });
    $.__views.__alloyId19511.add($.__views.__alloyId19512);
    $.__views.__alloyId19513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19513"
    });
    $.__views.__alloyId19512.add($.__views.__alloyId19513);
    $.__views.__alloyId19514 = Ti.UI.createView({
        id: "__alloyId19514"
    });
    $.__views.__alloyId19514 && $.addTopLevelView($.__views.__alloyId19514);
    $.__views.__alloyId19515 = Ti.UI.createView({
        id: "__alloyId19515"
    });
    $.__views.__alloyId19514.add($.__views.__alloyId19515);
    $.__views.__alloyId19516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19516"
    });
    $.__views.__alloyId19515.add($.__views.__alloyId19516);
    $.__views.__alloyId19517 = Ti.UI.createView({
        id: "__alloyId19517"
    });
    $.__views.__alloyId19517 && $.addTopLevelView($.__views.__alloyId19517);
    $.__views.__alloyId19518 = Ti.UI.createView({
        id: "__alloyId19518"
    });
    $.__views.__alloyId19517.add($.__views.__alloyId19518);
    $.__views.__alloyId19519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19519"
    });
    $.__views.__alloyId19518.add($.__views.__alloyId19519);
    $.__views.__alloyId19520 = Ti.UI.createView({
        id: "__alloyId19520"
    });
    $.__views.__alloyId19520 && $.addTopLevelView($.__views.__alloyId19520);
    $.__views.__alloyId19521 = Ti.UI.createView({
        id: "__alloyId19521"
    });
    $.__views.__alloyId19520.add($.__views.__alloyId19521);
    $.__views.__alloyId19522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19522"
    });
    $.__views.__alloyId19521.add($.__views.__alloyId19522);
    $.__views.__alloyId19523 = Ti.UI.createView({
        id: "__alloyId19523"
    });
    $.__views.__alloyId19523 && $.addTopLevelView($.__views.__alloyId19523);
    $.__views.__alloyId19524 = Ti.UI.createView({
        id: "__alloyId19524"
    });
    $.__views.__alloyId19523.add($.__views.__alloyId19524);
    $.__views.__alloyId19525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19525"
    });
    $.__views.__alloyId19524.add($.__views.__alloyId19525);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;