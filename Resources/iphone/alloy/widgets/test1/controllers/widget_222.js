function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_222";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_222 = Ti.UI.createView({
        id: "widget_222"
    });
    $.__views.widget_222 && $.addTopLevelView($.__views.widget_222);
    $.__views.__alloyId3614 = Ti.UI.createView({
        id: "__alloyId3614"
    });
    $.__views.widget_222.add($.__views.__alloyId3614);
    $.__views.__alloyId3615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3615"
    });
    $.__views.__alloyId3614.add($.__views.__alloyId3615);
    $.__views.__alloyId3616 = Ti.UI.createView({
        id: "__alloyId3616"
    });
    $.__views.__alloyId3616 && $.addTopLevelView($.__views.__alloyId3616);
    $.__views.__alloyId3617 = Ti.UI.createView({
        id: "__alloyId3617"
    });
    $.__views.__alloyId3616.add($.__views.__alloyId3617);
    $.__views.__alloyId3618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3618"
    });
    $.__views.__alloyId3617.add($.__views.__alloyId3618);
    $.__views.__alloyId3619 = Ti.UI.createView({
        id: "__alloyId3619"
    });
    $.__views.__alloyId3619 && $.addTopLevelView($.__views.__alloyId3619);
    $.__views.__alloyId3620 = Ti.UI.createView({
        id: "__alloyId3620"
    });
    $.__views.__alloyId3619.add($.__views.__alloyId3620);
    $.__views.__alloyId3621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3621"
    });
    $.__views.__alloyId3620.add($.__views.__alloyId3621);
    $.__views.__alloyId3622 = Ti.UI.createView({
        id: "__alloyId3622"
    });
    $.__views.__alloyId3622 && $.addTopLevelView($.__views.__alloyId3622);
    $.__views.__alloyId3623 = Ti.UI.createView({
        id: "__alloyId3623"
    });
    $.__views.__alloyId3622.add($.__views.__alloyId3623);
    $.__views.__alloyId3624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3624"
    });
    $.__views.__alloyId3623.add($.__views.__alloyId3624);
    $.__views.__alloyId3625 = Ti.UI.createView({
        id: "__alloyId3625"
    });
    $.__views.__alloyId3625 && $.addTopLevelView($.__views.__alloyId3625);
    $.__views.__alloyId3626 = Ti.UI.createView({
        id: "__alloyId3626"
    });
    $.__views.__alloyId3625.add($.__views.__alloyId3626);
    $.__views.__alloyId3627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3627"
    });
    $.__views.__alloyId3626.add($.__views.__alloyId3627);
    $.__views.__alloyId3628 = Ti.UI.createView({
        id: "__alloyId3628"
    });
    $.__views.__alloyId3628 && $.addTopLevelView($.__views.__alloyId3628);
    $.__views.__alloyId3629 = Ti.UI.createView({
        id: "__alloyId3629"
    });
    $.__views.__alloyId3628.add($.__views.__alloyId3629);
    $.__views.__alloyId3630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3630"
    });
    $.__views.__alloyId3629.add($.__views.__alloyId3630);
    $.__views.__alloyId3631 = Ti.UI.createView({
        id: "__alloyId3631"
    });
    $.__views.__alloyId3631 && $.addTopLevelView($.__views.__alloyId3631);
    $.__views.__alloyId3632 = Ti.UI.createView({
        id: "__alloyId3632"
    });
    $.__views.__alloyId3631.add($.__views.__alloyId3632);
    $.__views.__alloyId3633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3633"
    });
    $.__views.__alloyId3632.add($.__views.__alloyId3633);
    $.__views.__alloyId3634 = Ti.UI.createView({
        id: "__alloyId3634"
    });
    $.__views.__alloyId3634 && $.addTopLevelView($.__views.__alloyId3634);
    $.__views.__alloyId3635 = Ti.UI.createView({
        id: "__alloyId3635"
    });
    $.__views.__alloyId3634.add($.__views.__alloyId3635);
    $.__views.__alloyId3636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3636"
    });
    $.__views.__alloyId3635.add($.__views.__alloyId3636);
    $.__views.__alloyId3637 = Ti.UI.createView({
        id: "__alloyId3637"
    });
    $.__views.__alloyId3637 && $.addTopLevelView($.__views.__alloyId3637);
    $.__views.__alloyId3638 = Ti.UI.createView({
        id: "__alloyId3638"
    });
    $.__views.__alloyId3637.add($.__views.__alloyId3638);
    $.__views.__alloyId3639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3639"
    });
    $.__views.__alloyId3638.add($.__views.__alloyId3639);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;