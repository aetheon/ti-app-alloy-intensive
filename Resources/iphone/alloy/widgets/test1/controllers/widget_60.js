function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_60";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_60 = Ti.UI.createView({
        id: "widget_60"
    });
    $.__views.widget_60 && $.addTopLevelView($.__views.widget_60);
    $.__views.__alloyId14508 = Ti.UI.createView({
        id: "__alloyId14508"
    });
    $.__views.widget_60.add($.__views.__alloyId14508);
    $.__views.__alloyId14509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14509"
    });
    $.__views.__alloyId14508.add($.__views.__alloyId14509);
    $.__views.__alloyId14510 = Ti.UI.createView({
        id: "__alloyId14510"
    });
    $.__views.__alloyId14510 && $.addTopLevelView($.__views.__alloyId14510);
    $.__views.__alloyId14511 = Ti.UI.createView({
        id: "__alloyId14511"
    });
    $.__views.__alloyId14510.add($.__views.__alloyId14511);
    $.__views.__alloyId14512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14512"
    });
    $.__views.__alloyId14511.add($.__views.__alloyId14512);
    $.__views.__alloyId14513 = Ti.UI.createView({
        id: "__alloyId14513"
    });
    $.__views.__alloyId14513 && $.addTopLevelView($.__views.__alloyId14513);
    $.__views.__alloyId14514 = Ti.UI.createView({
        id: "__alloyId14514"
    });
    $.__views.__alloyId14513.add($.__views.__alloyId14514);
    $.__views.__alloyId14515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14515"
    });
    $.__views.__alloyId14514.add($.__views.__alloyId14515);
    $.__views.__alloyId14516 = Ti.UI.createView({
        id: "__alloyId14516"
    });
    $.__views.__alloyId14516 && $.addTopLevelView($.__views.__alloyId14516);
    $.__views.__alloyId14517 = Ti.UI.createView({
        id: "__alloyId14517"
    });
    $.__views.__alloyId14516.add($.__views.__alloyId14517);
    $.__views.__alloyId14518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14518"
    });
    $.__views.__alloyId14517.add($.__views.__alloyId14518);
    $.__views.__alloyId14519 = Ti.UI.createView({
        id: "__alloyId14519"
    });
    $.__views.__alloyId14519 && $.addTopLevelView($.__views.__alloyId14519);
    $.__views.__alloyId14520 = Ti.UI.createView({
        id: "__alloyId14520"
    });
    $.__views.__alloyId14519.add($.__views.__alloyId14520);
    $.__views.__alloyId14521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14521"
    });
    $.__views.__alloyId14520.add($.__views.__alloyId14521);
    $.__views.__alloyId14522 = Ti.UI.createView({
        id: "__alloyId14522"
    });
    $.__views.__alloyId14522 && $.addTopLevelView($.__views.__alloyId14522);
    $.__views.__alloyId14523 = Ti.UI.createView({
        id: "__alloyId14523"
    });
    $.__views.__alloyId14522.add($.__views.__alloyId14523);
    $.__views.__alloyId14524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14524"
    });
    $.__views.__alloyId14523.add($.__views.__alloyId14524);
    $.__views.__alloyId14525 = Ti.UI.createView({
        id: "__alloyId14525"
    });
    $.__views.__alloyId14525 && $.addTopLevelView($.__views.__alloyId14525);
    $.__views.__alloyId14526 = Ti.UI.createView({
        id: "__alloyId14526"
    });
    $.__views.__alloyId14525.add($.__views.__alloyId14526);
    $.__views.__alloyId14527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14527"
    });
    $.__views.__alloyId14526.add($.__views.__alloyId14527);
    $.__views.__alloyId14528 = Ti.UI.createView({
        id: "__alloyId14528"
    });
    $.__views.__alloyId14528 && $.addTopLevelView($.__views.__alloyId14528);
    $.__views.__alloyId14529 = Ti.UI.createView({
        id: "__alloyId14529"
    });
    $.__views.__alloyId14528.add($.__views.__alloyId14529);
    $.__views.__alloyId14530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14530"
    });
    $.__views.__alloyId14529.add($.__views.__alloyId14530);
    $.__views.__alloyId14531 = Ti.UI.createView({
        id: "__alloyId14531"
    });
    $.__views.__alloyId14531 && $.addTopLevelView($.__views.__alloyId14531);
    $.__views.__alloyId14532 = Ti.UI.createView({
        id: "__alloyId14532"
    });
    $.__views.__alloyId14531.add($.__views.__alloyId14532);
    $.__views.__alloyId14533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14533"
    });
    $.__views.__alloyId14532.add($.__views.__alloyId14533);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;