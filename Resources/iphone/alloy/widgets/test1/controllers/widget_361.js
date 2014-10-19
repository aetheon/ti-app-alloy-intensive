function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_361";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_361 = Ti.UI.createView({
        id: "widget_361"
    });
    $.__views.widget_361 && $.addTopLevelView($.__views.widget_361);
    $.__views.__alloyId7618 = Ti.UI.createView({
        id: "__alloyId7618"
    });
    $.__views.widget_361.add($.__views.__alloyId7618);
    $.__views.__alloyId7619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7619"
    });
    $.__views.__alloyId7618.add($.__views.__alloyId7619);
    $.__views.__alloyId7620 = Ti.UI.createView({
        id: "__alloyId7620"
    });
    $.__views.__alloyId7620 && $.addTopLevelView($.__views.__alloyId7620);
    $.__views.__alloyId7621 = Ti.UI.createView({
        id: "__alloyId7621"
    });
    $.__views.__alloyId7620.add($.__views.__alloyId7621);
    $.__views.__alloyId7622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7622"
    });
    $.__views.__alloyId7621.add($.__views.__alloyId7622);
    $.__views.__alloyId7623 = Ti.UI.createView({
        id: "__alloyId7623"
    });
    $.__views.__alloyId7623 && $.addTopLevelView($.__views.__alloyId7623);
    $.__views.__alloyId7624 = Ti.UI.createView({
        id: "__alloyId7624"
    });
    $.__views.__alloyId7623.add($.__views.__alloyId7624);
    $.__views.__alloyId7625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7625"
    });
    $.__views.__alloyId7624.add($.__views.__alloyId7625);
    $.__views.__alloyId7626 = Ti.UI.createView({
        id: "__alloyId7626"
    });
    $.__views.__alloyId7626 && $.addTopLevelView($.__views.__alloyId7626);
    $.__views.__alloyId7627 = Ti.UI.createView({
        id: "__alloyId7627"
    });
    $.__views.__alloyId7626.add($.__views.__alloyId7627);
    $.__views.__alloyId7628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7628"
    });
    $.__views.__alloyId7627.add($.__views.__alloyId7628);
    $.__views.__alloyId7629 = Ti.UI.createView({
        id: "__alloyId7629"
    });
    $.__views.__alloyId7629 && $.addTopLevelView($.__views.__alloyId7629);
    $.__views.__alloyId7630 = Ti.UI.createView({
        id: "__alloyId7630"
    });
    $.__views.__alloyId7629.add($.__views.__alloyId7630);
    $.__views.__alloyId7631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7631"
    });
    $.__views.__alloyId7630.add($.__views.__alloyId7631);
    $.__views.__alloyId7632 = Ti.UI.createView({
        id: "__alloyId7632"
    });
    $.__views.__alloyId7632 && $.addTopLevelView($.__views.__alloyId7632);
    $.__views.__alloyId7633 = Ti.UI.createView({
        id: "__alloyId7633"
    });
    $.__views.__alloyId7632.add($.__views.__alloyId7633);
    $.__views.__alloyId7634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7634"
    });
    $.__views.__alloyId7633.add($.__views.__alloyId7634);
    $.__views.__alloyId7635 = Ti.UI.createView({
        id: "__alloyId7635"
    });
    $.__views.__alloyId7635 && $.addTopLevelView($.__views.__alloyId7635);
    $.__views.__alloyId7636 = Ti.UI.createView({
        id: "__alloyId7636"
    });
    $.__views.__alloyId7635.add($.__views.__alloyId7636);
    $.__views.__alloyId7637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7637"
    });
    $.__views.__alloyId7636.add($.__views.__alloyId7637);
    $.__views.__alloyId7638 = Ti.UI.createView({
        id: "__alloyId7638"
    });
    $.__views.__alloyId7638 && $.addTopLevelView($.__views.__alloyId7638);
    $.__views.__alloyId7639 = Ti.UI.createView({
        id: "__alloyId7639"
    });
    $.__views.__alloyId7638.add($.__views.__alloyId7639);
    $.__views.__alloyId7640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7640"
    });
    $.__views.__alloyId7639.add($.__views.__alloyId7640);
    $.__views.__alloyId7641 = Ti.UI.createView({
        id: "__alloyId7641"
    });
    $.__views.__alloyId7641 && $.addTopLevelView($.__views.__alloyId7641);
    $.__views.__alloyId7642 = Ti.UI.createView({
        id: "__alloyId7642"
    });
    $.__views.__alloyId7641.add($.__views.__alloyId7642);
    $.__views.__alloyId7643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7643"
    });
    $.__views.__alloyId7642.add($.__views.__alloyId7643);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;