function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_703";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_703 = Ti.UI.createView({
        id: "widget_703"
    });
    $.__views.widget_703 && $.addTopLevelView($.__views.widget_703);
    $.__views.__alloyId17498 = Ti.UI.createView({
        id: "__alloyId17498"
    });
    $.__views.widget_703.add($.__views.__alloyId17498);
    $.__views.__alloyId17499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17499"
    });
    $.__views.__alloyId17498.add($.__views.__alloyId17499);
    $.__views.__alloyId17500 = Ti.UI.createView({
        id: "__alloyId17500"
    });
    $.__views.__alloyId17500 && $.addTopLevelView($.__views.__alloyId17500);
    $.__views.__alloyId17501 = Ti.UI.createView({
        id: "__alloyId17501"
    });
    $.__views.__alloyId17500.add($.__views.__alloyId17501);
    $.__views.__alloyId17502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17502"
    });
    $.__views.__alloyId17501.add($.__views.__alloyId17502);
    $.__views.__alloyId17503 = Ti.UI.createView({
        id: "__alloyId17503"
    });
    $.__views.__alloyId17503 && $.addTopLevelView($.__views.__alloyId17503);
    $.__views.__alloyId17504 = Ti.UI.createView({
        id: "__alloyId17504"
    });
    $.__views.__alloyId17503.add($.__views.__alloyId17504);
    $.__views.__alloyId17505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17505"
    });
    $.__views.__alloyId17504.add($.__views.__alloyId17505);
    $.__views.__alloyId17506 = Ti.UI.createView({
        id: "__alloyId17506"
    });
    $.__views.__alloyId17506 && $.addTopLevelView($.__views.__alloyId17506);
    $.__views.__alloyId17507 = Ti.UI.createView({
        id: "__alloyId17507"
    });
    $.__views.__alloyId17506.add($.__views.__alloyId17507);
    $.__views.__alloyId17508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17508"
    });
    $.__views.__alloyId17507.add($.__views.__alloyId17508);
    $.__views.__alloyId17509 = Ti.UI.createView({
        id: "__alloyId17509"
    });
    $.__views.__alloyId17509 && $.addTopLevelView($.__views.__alloyId17509);
    $.__views.__alloyId17510 = Ti.UI.createView({
        id: "__alloyId17510"
    });
    $.__views.__alloyId17509.add($.__views.__alloyId17510);
    $.__views.__alloyId17511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17511"
    });
    $.__views.__alloyId17510.add($.__views.__alloyId17511);
    $.__views.__alloyId17512 = Ti.UI.createView({
        id: "__alloyId17512"
    });
    $.__views.__alloyId17512 && $.addTopLevelView($.__views.__alloyId17512);
    $.__views.__alloyId17513 = Ti.UI.createView({
        id: "__alloyId17513"
    });
    $.__views.__alloyId17512.add($.__views.__alloyId17513);
    $.__views.__alloyId17514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17514"
    });
    $.__views.__alloyId17513.add($.__views.__alloyId17514);
    $.__views.__alloyId17515 = Ti.UI.createView({
        id: "__alloyId17515"
    });
    $.__views.__alloyId17515 && $.addTopLevelView($.__views.__alloyId17515);
    $.__views.__alloyId17516 = Ti.UI.createView({
        id: "__alloyId17516"
    });
    $.__views.__alloyId17515.add($.__views.__alloyId17516);
    $.__views.__alloyId17517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17517"
    });
    $.__views.__alloyId17516.add($.__views.__alloyId17517);
    $.__views.__alloyId17518 = Ti.UI.createView({
        id: "__alloyId17518"
    });
    $.__views.__alloyId17518 && $.addTopLevelView($.__views.__alloyId17518);
    $.__views.__alloyId17519 = Ti.UI.createView({
        id: "__alloyId17519"
    });
    $.__views.__alloyId17518.add($.__views.__alloyId17519);
    $.__views.__alloyId17520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17520"
    });
    $.__views.__alloyId17519.add($.__views.__alloyId17520);
    $.__views.__alloyId17521 = Ti.UI.createView({
        id: "__alloyId17521"
    });
    $.__views.__alloyId17521 && $.addTopLevelView($.__views.__alloyId17521);
    $.__views.__alloyId17522 = Ti.UI.createView({
        id: "__alloyId17522"
    });
    $.__views.__alloyId17521.add($.__views.__alloyId17522);
    $.__views.__alloyId17523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17523"
    });
    $.__views.__alloyId17522.add($.__views.__alloyId17523);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;