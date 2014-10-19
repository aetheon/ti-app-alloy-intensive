function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_911";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_911 = Ti.UI.createView({
        id: "widget_911"
    });
    $.__views.widget_911 && $.addTopLevelView($.__views.widget_911);
    $.__views.__alloyId23504 = Ti.UI.createView({
        id: "__alloyId23504"
    });
    $.__views.widget_911.add($.__views.__alloyId23504);
    $.__views.__alloyId23505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23505"
    });
    $.__views.__alloyId23504.add($.__views.__alloyId23505);
    $.__views.__alloyId23506 = Ti.UI.createView({
        id: "__alloyId23506"
    });
    $.__views.__alloyId23506 && $.addTopLevelView($.__views.__alloyId23506);
    $.__views.__alloyId23507 = Ti.UI.createView({
        id: "__alloyId23507"
    });
    $.__views.__alloyId23506.add($.__views.__alloyId23507);
    $.__views.__alloyId23508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23508"
    });
    $.__views.__alloyId23507.add($.__views.__alloyId23508);
    $.__views.__alloyId23509 = Ti.UI.createView({
        id: "__alloyId23509"
    });
    $.__views.__alloyId23509 && $.addTopLevelView($.__views.__alloyId23509);
    $.__views.__alloyId23510 = Ti.UI.createView({
        id: "__alloyId23510"
    });
    $.__views.__alloyId23509.add($.__views.__alloyId23510);
    $.__views.__alloyId23511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23511"
    });
    $.__views.__alloyId23510.add($.__views.__alloyId23511);
    $.__views.__alloyId23512 = Ti.UI.createView({
        id: "__alloyId23512"
    });
    $.__views.__alloyId23512 && $.addTopLevelView($.__views.__alloyId23512);
    $.__views.__alloyId23513 = Ti.UI.createView({
        id: "__alloyId23513"
    });
    $.__views.__alloyId23512.add($.__views.__alloyId23513);
    $.__views.__alloyId23514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23514"
    });
    $.__views.__alloyId23513.add($.__views.__alloyId23514);
    $.__views.__alloyId23515 = Ti.UI.createView({
        id: "__alloyId23515"
    });
    $.__views.__alloyId23515 && $.addTopLevelView($.__views.__alloyId23515);
    $.__views.__alloyId23516 = Ti.UI.createView({
        id: "__alloyId23516"
    });
    $.__views.__alloyId23515.add($.__views.__alloyId23516);
    $.__views.__alloyId23517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23517"
    });
    $.__views.__alloyId23516.add($.__views.__alloyId23517);
    $.__views.__alloyId23518 = Ti.UI.createView({
        id: "__alloyId23518"
    });
    $.__views.__alloyId23518 && $.addTopLevelView($.__views.__alloyId23518);
    $.__views.__alloyId23519 = Ti.UI.createView({
        id: "__alloyId23519"
    });
    $.__views.__alloyId23518.add($.__views.__alloyId23519);
    $.__views.__alloyId23520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23520"
    });
    $.__views.__alloyId23519.add($.__views.__alloyId23520);
    $.__views.__alloyId23521 = Ti.UI.createView({
        id: "__alloyId23521"
    });
    $.__views.__alloyId23521 && $.addTopLevelView($.__views.__alloyId23521);
    $.__views.__alloyId23522 = Ti.UI.createView({
        id: "__alloyId23522"
    });
    $.__views.__alloyId23521.add($.__views.__alloyId23522);
    $.__views.__alloyId23523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23523"
    });
    $.__views.__alloyId23522.add($.__views.__alloyId23523);
    $.__views.__alloyId23524 = Ti.UI.createView({
        id: "__alloyId23524"
    });
    $.__views.__alloyId23524 && $.addTopLevelView($.__views.__alloyId23524);
    $.__views.__alloyId23525 = Ti.UI.createView({
        id: "__alloyId23525"
    });
    $.__views.__alloyId23524.add($.__views.__alloyId23525);
    $.__views.__alloyId23526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23526"
    });
    $.__views.__alloyId23525.add($.__views.__alloyId23526);
    $.__views.__alloyId23527 = Ti.UI.createView({
        id: "__alloyId23527"
    });
    $.__views.__alloyId23527 && $.addTopLevelView($.__views.__alloyId23527);
    $.__views.__alloyId23528 = Ti.UI.createView({
        id: "__alloyId23528"
    });
    $.__views.__alloyId23527.add($.__views.__alloyId23528);
    $.__views.__alloyId23529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23529"
    });
    $.__views.__alloyId23528.add($.__views.__alloyId23529);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;