function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_496";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_496 = Ti.UI.createView({
        id: "widget_496"
    });
    $.__views.widget_496 && $.addTopLevelView($.__views.widget_496);
    $.__views.__alloyId11492 = Ti.UI.createView({
        id: "__alloyId11492"
    });
    $.__views.widget_496.add($.__views.__alloyId11492);
    $.__views.__alloyId11493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11493"
    });
    $.__views.__alloyId11492.add($.__views.__alloyId11493);
    $.__views.__alloyId11494 = Ti.UI.createView({
        id: "__alloyId11494"
    });
    $.__views.__alloyId11494 && $.addTopLevelView($.__views.__alloyId11494);
    $.__views.__alloyId11495 = Ti.UI.createView({
        id: "__alloyId11495"
    });
    $.__views.__alloyId11494.add($.__views.__alloyId11495);
    $.__views.__alloyId11496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11496"
    });
    $.__views.__alloyId11495.add($.__views.__alloyId11496);
    $.__views.__alloyId11497 = Ti.UI.createView({
        id: "__alloyId11497"
    });
    $.__views.__alloyId11497 && $.addTopLevelView($.__views.__alloyId11497);
    $.__views.__alloyId11498 = Ti.UI.createView({
        id: "__alloyId11498"
    });
    $.__views.__alloyId11497.add($.__views.__alloyId11498);
    $.__views.__alloyId11499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11499"
    });
    $.__views.__alloyId11498.add($.__views.__alloyId11499);
    $.__views.__alloyId11500 = Ti.UI.createView({
        id: "__alloyId11500"
    });
    $.__views.__alloyId11500 && $.addTopLevelView($.__views.__alloyId11500);
    $.__views.__alloyId11501 = Ti.UI.createView({
        id: "__alloyId11501"
    });
    $.__views.__alloyId11500.add($.__views.__alloyId11501);
    $.__views.__alloyId11502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11502"
    });
    $.__views.__alloyId11501.add($.__views.__alloyId11502);
    $.__views.__alloyId11503 = Ti.UI.createView({
        id: "__alloyId11503"
    });
    $.__views.__alloyId11503 && $.addTopLevelView($.__views.__alloyId11503);
    $.__views.__alloyId11504 = Ti.UI.createView({
        id: "__alloyId11504"
    });
    $.__views.__alloyId11503.add($.__views.__alloyId11504);
    $.__views.__alloyId11505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11505"
    });
    $.__views.__alloyId11504.add($.__views.__alloyId11505);
    $.__views.__alloyId11506 = Ti.UI.createView({
        id: "__alloyId11506"
    });
    $.__views.__alloyId11506 && $.addTopLevelView($.__views.__alloyId11506);
    $.__views.__alloyId11507 = Ti.UI.createView({
        id: "__alloyId11507"
    });
    $.__views.__alloyId11506.add($.__views.__alloyId11507);
    $.__views.__alloyId11508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11508"
    });
    $.__views.__alloyId11507.add($.__views.__alloyId11508);
    $.__views.__alloyId11509 = Ti.UI.createView({
        id: "__alloyId11509"
    });
    $.__views.__alloyId11509 && $.addTopLevelView($.__views.__alloyId11509);
    $.__views.__alloyId11510 = Ti.UI.createView({
        id: "__alloyId11510"
    });
    $.__views.__alloyId11509.add($.__views.__alloyId11510);
    $.__views.__alloyId11511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11511"
    });
    $.__views.__alloyId11510.add($.__views.__alloyId11511);
    $.__views.__alloyId11512 = Ti.UI.createView({
        id: "__alloyId11512"
    });
    $.__views.__alloyId11512 && $.addTopLevelView($.__views.__alloyId11512);
    $.__views.__alloyId11513 = Ti.UI.createView({
        id: "__alloyId11513"
    });
    $.__views.__alloyId11512.add($.__views.__alloyId11513);
    $.__views.__alloyId11514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11514"
    });
    $.__views.__alloyId11513.add($.__views.__alloyId11514);
    $.__views.__alloyId11515 = Ti.UI.createView({
        id: "__alloyId11515"
    });
    $.__views.__alloyId11515 && $.addTopLevelView($.__views.__alloyId11515);
    $.__views.__alloyId11516 = Ti.UI.createView({
        id: "__alloyId11516"
    });
    $.__views.__alloyId11515.add($.__views.__alloyId11516);
    $.__views.__alloyId11517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11517"
    });
    $.__views.__alloyId11516.add($.__views.__alloyId11517);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;