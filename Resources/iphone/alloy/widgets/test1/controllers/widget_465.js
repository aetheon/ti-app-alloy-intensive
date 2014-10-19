function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_465";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_465 = Ti.UI.createView({
        id: "widget_465"
    });
    $.__views.widget_465 && $.addTopLevelView($.__views.widget_465);
    $.__views.__alloyId10608 = Ti.UI.createView({
        id: "__alloyId10608"
    });
    $.__views.widget_465.add($.__views.__alloyId10608);
    $.__views.__alloyId10609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10609"
    });
    $.__views.__alloyId10608.add($.__views.__alloyId10609);
    $.__views.__alloyId10610 = Ti.UI.createView({
        id: "__alloyId10610"
    });
    $.__views.__alloyId10610 && $.addTopLevelView($.__views.__alloyId10610);
    $.__views.__alloyId10611 = Ti.UI.createView({
        id: "__alloyId10611"
    });
    $.__views.__alloyId10610.add($.__views.__alloyId10611);
    $.__views.__alloyId10612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10612"
    });
    $.__views.__alloyId10611.add($.__views.__alloyId10612);
    $.__views.__alloyId10613 = Ti.UI.createView({
        id: "__alloyId10613"
    });
    $.__views.__alloyId10613 && $.addTopLevelView($.__views.__alloyId10613);
    $.__views.__alloyId10614 = Ti.UI.createView({
        id: "__alloyId10614"
    });
    $.__views.__alloyId10613.add($.__views.__alloyId10614);
    $.__views.__alloyId10615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10615"
    });
    $.__views.__alloyId10614.add($.__views.__alloyId10615);
    $.__views.__alloyId10616 = Ti.UI.createView({
        id: "__alloyId10616"
    });
    $.__views.__alloyId10616 && $.addTopLevelView($.__views.__alloyId10616);
    $.__views.__alloyId10617 = Ti.UI.createView({
        id: "__alloyId10617"
    });
    $.__views.__alloyId10616.add($.__views.__alloyId10617);
    $.__views.__alloyId10618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10618"
    });
    $.__views.__alloyId10617.add($.__views.__alloyId10618);
    $.__views.__alloyId10619 = Ti.UI.createView({
        id: "__alloyId10619"
    });
    $.__views.__alloyId10619 && $.addTopLevelView($.__views.__alloyId10619);
    $.__views.__alloyId10620 = Ti.UI.createView({
        id: "__alloyId10620"
    });
    $.__views.__alloyId10619.add($.__views.__alloyId10620);
    $.__views.__alloyId10621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10621"
    });
    $.__views.__alloyId10620.add($.__views.__alloyId10621);
    $.__views.__alloyId10622 = Ti.UI.createView({
        id: "__alloyId10622"
    });
    $.__views.__alloyId10622 && $.addTopLevelView($.__views.__alloyId10622);
    $.__views.__alloyId10623 = Ti.UI.createView({
        id: "__alloyId10623"
    });
    $.__views.__alloyId10622.add($.__views.__alloyId10623);
    $.__views.__alloyId10624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10624"
    });
    $.__views.__alloyId10623.add($.__views.__alloyId10624);
    $.__views.__alloyId10625 = Ti.UI.createView({
        id: "__alloyId10625"
    });
    $.__views.__alloyId10625 && $.addTopLevelView($.__views.__alloyId10625);
    $.__views.__alloyId10626 = Ti.UI.createView({
        id: "__alloyId10626"
    });
    $.__views.__alloyId10625.add($.__views.__alloyId10626);
    $.__views.__alloyId10627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10627"
    });
    $.__views.__alloyId10626.add($.__views.__alloyId10627);
    $.__views.__alloyId10628 = Ti.UI.createView({
        id: "__alloyId10628"
    });
    $.__views.__alloyId10628 && $.addTopLevelView($.__views.__alloyId10628);
    $.__views.__alloyId10629 = Ti.UI.createView({
        id: "__alloyId10629"
    });
    $.__views.__alloyId10628.add($.__views.__alloyId10629);
    $.__views.__alloyId10630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10630"
    });
    $.__views.__alloyId10629.add($.__views.__alloyId10630);
    $.__views.__alloyId10631 = Ti.UI.createView({
        id: "__alloyId10631"
    });
    $.__views.__alloyId10631 && $.addTopLevelView($.__views.__alloyId10631);
    $.__views.__alloyId10632 = Ti.UI.createView({
        id: "__alloyId10632"
    });
    $.__views.__alloyId10631.add($.__views.__alloyId10632);
    $.__views.__alloyId10633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10633"
    });
    $.__views.__alloyId10632.add($.__views.__alloyId10633);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;