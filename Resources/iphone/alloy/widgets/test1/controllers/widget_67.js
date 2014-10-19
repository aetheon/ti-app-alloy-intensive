function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_67";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_67 = Ti.UI.createView({
        id: "widget_67"
    });
    $.__views.widget_67 && $.addTopLevelView($.__views.widget_67);
    $.__views.__alloyId16510 = Ti.UI.createView({
        id: "__alloyId16510"
    });
    $.__views.widget_67.add($.__views.__alloyId16510);
    $.__views.__alloyId16511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16511"
    });
    $.__views.__alloyId16510.add($.__views.__alloyId16511);
    $.__views.__alloyId16512 = Ti.UI.createView({
        id: "__alloyId16512"
    });
    $.__views.__alloyId16512 && $.addTopLevelView($.__views.__alloyId16512);
    $.__views.__alloyId16513 = Ti.UI.createView({
        id: "__alloyId16513"
    });
    $.__views.__alloyId16512.add($.__views.__alloyId16513);
    $.__views.__alloyId16514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16514"
    });
    $.__views.__alloyId16513.add($.__views.__alloyId16514);
    $.__views.__alloyId16515 = Ti.UI.createView({
        id: "__alloyId16515"
    });
    $.__views.__alloyId16515 && $.addTopLevelView($.__views.__alloyId16515);
    $.__views.__alloyId16516 = Ti.UI.createView({
        id: "__alloyId16516"
    });
    $.__views.__alloyId16515.add($.__views.__alloyId16516);
    $.__views.__alloyId16517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16517"
    });
    $.__views.__alloyId16516.add($.__views.__alloyId16517);
    $.__views.__alloyId16518 = Ti.UI.createView({
        id: "__alloyId16518"
    });
    $.__views.__alloyId16518 && $.addTopLevelView($.__views.__alloyId16518);
    $.__views.__alloyId16519 = Ti.UI.createView({
        id: "__alloyId16519"
    });
    $.__views.__alloyId16518.add($.__views.__alloyId16519);
    $.__views.__alloyId16520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16520"
    });
    $.__views.__alloyId16519.add($.__views.__alloyId16520);
    $.__views.__alloyId16521 = Ti.UI.createView({
        id: "__alloyId16521"
    });
    $.__views.__alloyId16521 && $.addTopLevelView($.__views.__alloyId16521);
    $.__views.__alloyId16522 = Ti.UI.createView({
        id: "__alloyId16522"
    });
    $.__views.__alloyId16521.add($.__views.__alloyId16522);
    $.__views.__alloyId16523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16523"
    });
    $.__views.__alloyId16522.add($.__views.__alloyId16523);
    $.__views.__alloyId16524 = Ti.UI.createView({
        id: "__alloyId16524"
    });
    $.__views.__alloyId16524 && $.addTopLevelView($.__views.__alloyId16524);
    $.__views.__alloyId16525 = Ti.UI.createView({
        id: "__alloyId16525"
    });
    $.__views.__alloyId16524.add($.__views.__alloyId16525);
    $.__views.__alloyId16526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16526"
    });
    $.__views.__alloyId16525.add($.__views.__alloyId16526);
    $.__views.__alloyId16527 = Ti.UI.createView({
        id: "__alloyId16527"
    });
    $.__views.__alloyId16527 && $.addTopLevelView($.__views.__alloyId16527);
    $.__views.__alloyId16528 = Ti.UI.createView({
        id: "__alloyId16528"
    });
    $.__views.__alloyId16527.add($.__views.__alloyId16528);
    $.__views.__alloyId16529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16529"
    });
    $.__views.__alloyId16528.add($.__views.__alloyId16529);
    $.__views.__alloyId16530 = Ti.UI.createView({
        id: "__alloyId16530"
    });
    $.__views.__alloyId16530 && $.addTopLevelView($.__views.__alloyId16530);
    $.__views.__alloyId16531 = Ti.UI.createView({
        id: "__alloyId16531"
    });
    $.__views.__alloyId16530.add($.__views.__alloyId16531);
    $.__views.__alloyId16532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16532"
    });
    $.__views.__alloyId16531.add($.__views.__alloyId16532);
    $.__views.__alloyId16533 = Ti.UI.createView({
        id: "__alloyId16533"
    });
    $.__views.__alloyId16533 && $.addTopLevelView($.__views.__alloyId16533);
    $.__views.__alloyId16534 = Ti.UI.createView({
        id: "__alloyId16534"
    });
    $.__views.__alloyId16533.add($.__views.__alloyId16534);
    $.__views.__alloyId16535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16535"
    });
    $.__views.__alloyId16534.add($.__views.__alloyId16535);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;