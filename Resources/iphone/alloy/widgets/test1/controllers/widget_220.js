function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_220";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_220 = Ti.UI.createView({
        id: "widget_220"
    });
    $.__views.widget_220 && $.addTopLevelView($.__views.widget_220);
    $.__views.__alloyId3562 = Ti.UI.createView({
        id: "__alloyId3562"
    });
    $.__views.widget_220.add($.__views.__alloyId3562);
    $.__views.__alloyId3563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3563"
    });
    $.__views.__alloyId3562.add($.__views.__alloyId3563);
    $.__views.__alloyId3564 = Ti.UI.createView({
        id: "__alloyId3564"
    });
    $.__views.__alloyId3564 && $.addTopLevelView($.__views.__alloyId3564);
    $.__views.__alloyId3565 = Ti.UI.createView({
        id: "__alloyId3565"
    });
    $.__views.__alloyId3564.add($.__views.__alloyId3565);
    $.__views.__alloyId3566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3566"
    });
    $.__views.__alloyId3565.add($.__views.__alloyId3566);
    $.__views.__alloyId3567 = Ti.UI.createView({
        id: "__alloyId3567"
    });
    $.__views.__alloyId3567 && $.addTopLevelView($.__views.__alloyId3567);
    $.__views.__alloyId3568 = Ti.UI.createView({
        id: "__alloyId3568"
    });
    $.__views.__alloyId3567.add($.__views.__alloyId3568);
    $.__views.__alloyId3569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3569"
    });
    $.__views.__alloyId3568.add($.__views.__alloyId3569);
    $.__views.__alloyId3570 = Ti.UI.createView({
        id: "__alloyId3570"
    });
    $.__views.__alloyId3570 && $.addTopLevelView($.__views.__alloyId3570);
    $.__views.__alloyId3571 = Ti.UI.createView({
        id: "__alloyId3571"
    });
    $.__views.__alloyId3570.add($.__views.__alloyId3571);
    $.__views.__alloyId3572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3572"
    });
    $.__views.__alloyId3571.add($.__views.__alloyId3572);
    $.__views.__alloyId3573 = Ti.UI.createView({
        id: "__alloyId3573"
    });
    $.__views.__alloyId3573 && $.addTopLevelView($.__views.__alloyId3573);
    $.__views.__alloyId3574 = Ti.UI.createView({
        id: "__alloyId3574"
    });
    $.__views.__alloyId3573.add($.__views.__alloyId3574);
    $.__views.__alloyId3575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3575"
    });
    $.__views.__alloyId3574.add($.__views.__alloyId3575);
    $.__views.__alloyId3576 = Ti.UI.createView({
        id: "__alloyId3576"
    });
    $.__views.__alloyId3576 && $.addTopLevelView($.__views.__alloyId3576);
    $.__views.__alloyId3577 = Ti.UI.createView({
        id: "__alloyId3577"
    });
    $.__views.__alloyId3576.add($.__views.__alloyId3577);
    $.__views.__alloyId3578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3578"
    });
    $.__views.__alloyId3577.add($.__views.__alloyId3578);
    $.__views.__alloyId3579 = Ti.UI.createView({
        id: "__alloyId3579"
    });
    $.__views.__alloyId3579 && $.addTopLevelView($.__views.__alloyId3579);
    $.__views.__alloyId3580 = Ti.UI.createView({
        id: "__alloyId3580"
    });
    $.__views.__alloyId3579.add($.__views.__alloyId3580);
    $.__views.__alloyId3581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3581"
    });
    $.__views.__alloyId3580.add($.__views.__alloyId3581);
    $.__views.__alloyId3582 = Ti.UI.createView({
        id: "__alloyId3582"
    });
    $.__views.__alloyId3582 && $.addTopLevelView($.__views.__alloyId3582);
    $.__views.__alloyId3583 = Ti.UI.createView({
        id: "__alloyId3583"
    });
    $.__views.__alloyId3582.add($.__views.__alloyId3583);
    $.__views.__alloyId3584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3584"
    });
    $.__views.__alloyId3583.add($.__views.__alloyId3584);
    $.__views.__alloyId3585 = Ti.UI.createView({
        id: "__alloyId3585"
    });
    $.__views.__alloyId3585 && $.addTopLevelView($.__views.__alloyId3585);
    $.__views.__alloyId3586 = Ti.UI.createView({
        id: "__alloyId3586"
    });
    $.__views.__alloyId3585.add($.__views.__alloyId3586);
    $.__views.__alloyId3587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3587"
    });
    $.__views.__alloyId3586.add($.__views.__alloyId3587);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;