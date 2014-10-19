function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_603";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_603 = Ti.UI.createView({
        id: "widget_603"
    });
    $.__views.widget_603 && $.addTopLevelView($.__views.widget_603);
    $.__views.__alloyId14612 = Ti.UI.createView({
        id: "__alloyId14612"
    });
    $.__views.widget_603.add($.__views.__alloyId14612);
    $.__views.__alloyId14613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14613"
    });
    $.__views.__alloyId14612.add($.__views.__alloyId14613);
    $.__views.__alloyId14614 = Ti.UI.createView({
        id: "__alloyId14614"
    });
    $.__views.__alloyId14614 && $.addTopLevelView($.__views.__alloyId14614);
    $.__views.__alloyId14615 = Ti.UI.createView({
        id: "__alloyId14615"
    });
    $.__views.__alloyId14614.add($.__views.__alloyId14615);
    $.__views.__alloyId14616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14616"
    });
    $.__views.__alloyId14615.add($.__views.__alloyId14616);
    $.__views.__alloyId14617 = Ti.UI.createView({
        id: "__alloyId14617"
    });
    $.__views.__alloyId14617 && $.addTopLevelView($.__views.__alloyId14617);
    $.__views.__alloyId14618 = Ti.UI.createView({
        id: "__alloyId14618"
    });
    $.__views.__alloyId14617.add($.__views.__alloyId14618);
    $.__views.__alloyId14619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14619"
    });
    $.__views.__alloyId14618.add($.__views.__alloyId14619);
    $.__views.__alloyId14620 = Ti.UI.createView({
        id: "__alloyId14620"
    });
    $.__views.__alloyId14620 && $.addTopLevelView($.__views.__alloyId14620);
    $.__views.__alloyId14621 = Ti.UI.createView({
        id: "__alloyId14621"
    });
    $.__views.__alloyId14620.add($.__views.__alloyId14621);
    $.__views.__alloyId14622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14622"
    });
    $.__views.__alloyId14621.add($.__views.__alloyId14622);
    $.__views.__alloyId14623 = Ti.UI.createView({
        id: "__alloyId14623"
    });
    $.__views.__alloyId14623 && $.addTopLevelView($.__views.__alloyId14623);
    $.__views.__alloyId14624 = Ti.UI.createView({
        id: "__alloyId14624"
    });
    $.__views.__alloyId14623.add($.__views.__alloyId14624);
    $.__views.__alloyId14625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14625"
    });
    $.__views.__alloyId14624.add($.__views.__alloyId14625);
    $.__views.__alloyId14626 = Ti.UI.createView({
        id: "__alloyId14626"
    });
    $.__views.__alloyId14626 && $.addTopLevelView($.__views.__alloyId14626);
    $.__views.__alloyId14627 = Ti.UI.createView({
        id: "__alloyId14627"
    });
    $.__views.__alloyId14626.add($.__views.__alloyId14627);
    $.__views.__alloyId14628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14628"
    });
    $.__views.__alloyId14627.add($.__views.__alloyId14628);
    $.__views.__alloyId14629 = Ti.UI.createView({
        id: "__alloyId14629"
    });
    $.__views.__alloyId14629 && $.addTopLevelView($.__views.__alloyId14629);
    $.__views.__alloyId14630 = Ti.UI.createView({
        id: "__alloyId14630"
    });
    $.__views.__alloyId14629.add($.__views.__alloyId14630);
    $.__views.__alloyId14631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14631"
    });
    $.__views.__alloyId14630.add($.__views.__alloyId14631);
    $.__views.__alloyId14632 = Ti.UI.createView({
        id: "__alloyId14632"
    });
    $.__views.__alloyId14632 && $.addTopLevelView($.__views.__alloyId14632);
    $.__views.__alloyId14633 = Ti.UI.createView({
        id: "__alloyId14633"
    });
    $.__views.__alloyId14632.add($.__views.__alloyId14633);
    $.__views.__alloyId14634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14634"
    });
    $.__views.__alloyId14633.add($.__views.__alloyId14634);
    $.__views.__alloyId14635 = Ti.UI.createView({
        id: "__alloyId14635"
    });
    $.__views.__alloyId14635 && $.addTopLevelView($.__views.__alloyId14635);
    $.__views.__alloyId14636 = Ti.UI.createView({
        id: "__alloyId14636"
    });
    $.__views.__alloyId14635.add($.__views.__alloyId14636);
    $.__views.__alloyId14637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14637"
    });
    $.__views.__alloyId14636.add($.__views.__alloyId14637);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;