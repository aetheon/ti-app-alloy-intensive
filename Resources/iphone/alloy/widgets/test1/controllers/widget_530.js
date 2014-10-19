function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_530";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_530 = Ti.UI.createView({
        id: "widget_530"
    });
    $.__views.widget_530 && $.addTopLevelView($.__views.widget_530);
    $.__views.__alloyId12506 = Ti.UI.createView({
        id: "__alloyId12506"
    });
    $.__views.widget_530.add($.__views.__alloyId12506);
    $.__views.__alloyId12507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12507"
    });
    $.__views.__alloyId12506.add($.__views.__alloyId12507);
    $.__views.__alloyId12508 = Ti.UI.createView({
        id: "__alloyId12508"
    });
    $.__views.__alloyId12508 && $.addTopLevelView($.__views.__alloyId12508);
    $.__views.__alloyId12509 = Ti.UI.createView({
        id: "__alloyId12509"
    });
    $.__views.__alloyId12508.add($.__views.__alloyId12509);
    $.__views.__alloyId12510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12510"
    });
    $.__views.__alloyId12509.add($.__views.__alloyId12510);
    $.__views.__alloyId12511 = Ti.UI.createView({
        id: "__alloyId12511"
    });
    $.__views.__alloyId12511 && $.addTopLevelView($.__views.__alloyId12511);
    $.__views.__alloyId12512 = Ti.UI.createView({
        id: "__alloyId12512"
    });
    $.__views.__alloyId12511.add($.__views.__alloyId12512);
    $.__views.__alloyId12513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12513"
    });
    $.__views.__alloyId12512.add($.__views.__alloyId12513);
    $.__views.__alloyId12514 = Ti.UI.createView({
        id: "__alloyId12514"
    });
    $.__views.__alloyId12514 && $.addTopLevelView($.__views.__alloyId12514);
    $.__views.__alloyId12515 = Ti.UI.createView({
        id: "__alloyId12515"
    });
    $.__views.__alloyId12514.add($.__views.__alloyId12515);
    $.__views.__alloyId12516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12516"
    });
    $.__views.__alloyId12515.add($.__views.__alloyId12516);
    $.__views.__alloyId12517 = Ti.UI.createView({
        id: "__alloyId12517"
    });
    $.__views.__alloyId12517 && $.addTopLevelView($.__views.__alloyId12517);
    $.__views.__alloyId12518 = Ti.UI.createView({
        id: "__alloyId12518"
    });
    $.__views.__alloyId12517.add($.__views.__alloyId12518);
    $.__views.__alloyId12519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12519"
    });
    $.__views.__alloyId12518.add($.__views.__alloyId12519);
    $.__views.__alloyId12520 = Ti.UI.createView({
        id: "__alloyId12520"
    });
    $.__views.__alloyId12520 && $.addTopLevelView($.__views.__alloyId12520);
    $.__views.__alloyId12521 = Ti.UI.createView({
        id: "__alloyId12521"
    });
    $.__views.__alloyId12520.add($.__views.__alloyId12521);
    $.__views.__alloyId12522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12522"
    });
    $.__views.__alloyId12521.add($.__views.__alloyId12522);
    $.__views.__alloyId12523 = Ti.UI.createView({
        id: "__alloyId12523"
    });
    $.__views.__alloyId12523 && $.addTopLevelView($.__views.__alloyId12523);
    $.__views.__alloyId12524 = Ti.UI.createView({
        id: "__alloyId12524"
    });
    $.__views.__alloyId12523.add($.__views.__alloyId12524);
    $.__views.__alloyId12525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12525"
    });
    $.__views.__alloyId12524.add($.__views.__alloyId12525);
    $.__views.__alloyId12526 = Ti.UI.createView({
        id: "__alloyId12526"
    });
    $.__views.__alloyId12526 && $.addTopLevelView($.__views.__alloyId12526);
    $.__views.__alloyId12527 = Ti.UI.createView({
        id: "__alloyId12527"
    });
    $.__views.__alloyId12526.add($.__views.__alloyId12527);
    $.__views.__alloyId12528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12528"
    });
    $.__views.__alloyId12527.add($.__views.__alloyId12528);
    $.__views.__alloyId12529 = Ti.UI.createView({
        id: "__alloyId12529"
    });
    $.__views.__alloyId12529 && $.addTopLevelView($.__views.__alloyId12529);
    $.__views.__alloyId12530 = Ti.UI.createView({
        id: "__alloyId12530"
    });
    $.__views.__alloyId12529.add($.__views.__alloyId12530);
    $.__views.__alloyId12531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12531"
    });
    $.__views.__alloyId12530.add($.__views.__alloyId12531);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;