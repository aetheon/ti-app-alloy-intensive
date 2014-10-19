function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_776";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_776 = Ti.UI.createView({
        id: "widget_776"
    });
    $.__views.widget_776 && $.addTopLevelView($.__views.widget_776);
    $.__views.__alloyId19578 = Ti.UI.createView({
        id: "__alloyId19578"
    });
    $.__views.widget_776.add($.__views.__alloyId19578);
    $.__views.__alloyId19579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19579"
    });
    $.__views.__alloyId19578.add($.__views.__alloyId19579);
    $.__views.__alloyId19580 = Ti.UI.createView({
        id: "__alloyId19580"
    });
    $.__views.__alloyId19580 && $.addTopLevelView($.__views.__alloyId19580);
    $.__views.__alloyId19581 = Ti.UI.createView({
        id: "__alloyId19581"
    });
    $.__views.__alloyId19580.add($.__views.__alloyId19581);
    $.__views.__alloyId19582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19582"
    });
    $.__views.__alloyId19581.add($.__views.__alloyId19582);
    $.__views.__alloyId19583 = Ti.UI.createView({
        id: "__alloyId19583"
    });
    $.__views.__alloyId19583 && $.addTopLevelView($.__views.__alloyId19583);
    $.__views.__alloyId19584 = Ti.UI.createView({
        id: "__alloyId19584"
    });
    $.__views.__alloyId19583.add($.__views.__alloyId19584);
    $.__views.__alloyId19585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19585"
    });
    $.__views.__alloyId19584.add($.__views.__alloyId19585);
    $.__views.__alloyId19586 = Ti.UI.createView({
        id: "__alloyId19586"
    });
    $.__views.__alloyId19586 && $.addTopLevelView($.__views.__alloyId19586);
    $.__views.__alloyId19587 = Ti.UI.createView({
        id: "__alloyId19587"
    });
    $.__views.__alloyId19586.add($.__views.__alloyId19587);
    $.__views.__alloyId19588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19588"
    });
    $.__views.__alloyId19587.add($.__views.__alloyId19588);
    $.__views.__alloyId19589 = Ti.UI.createView({
        id: "__alloyId19589"
    });
    $.__views.__alloyId19589 && $.addTopLevelView($.__views.__alloyId19589);
    $.__views.__alloyId19590 = Ti.UI.createView({
        id: "__alloyId19590"
    });
    $.__views.__alloyId19589.add($.__views.__alloyId19590);
    $.__views.__alloyId19591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19591"
    });
    $.__views.__alloyId19590.add($.__views.__alloyId19591);
    $.__views.__alloyId19592 = Ti.UI.createView({
        id: "__alloyId19592"
    });
    $.__views.__alloyId19592 && $.addTopLevelView($.__views.__alloyId19592);
    $.__views.__alloyId19593 = Ti.UI.createView({
        id: "__alloyId19593"
    });
    $.__views.__alloyId19592.add($.__views.__alloyId19593);
    $.__views.__alloyId19594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19594"
    });
    $.__views.__alloyId19593.add($.__views.__alloyId19594);
    $.__views.__alloyId19595 = Ti.UI.createView({
        id: "__alloyId19595"
    });
    $.__views.__alloyId19595 && $.addTopLevelView($.__views.__alloyId19595);
    $.__views.__alloyId19596 = Ti.UI.createView({
        id: "__alloyId19596"
    });
    $.__views.__alloyId19595.add($.__views.__alloyId19596);
    $.__views.__alloyId19597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19597"
    });
    $.__views.__alloyId19596.add($.__views.__alloyId19597);
    $.__views.__alloyId19598 = Ti.UI.createView({
        id: "__alloyId19598"
    });
    $.__views.__alloyId19598 && $.addTopLevelView($.__views.__alloyId19598);
    $.__views.__alloyId19599 = Ti.UI.createView({
        id: "__alloyId19599"
    });
    $.__views.__alloyId19598.add($.__views.__alloyId19599);
    $.__views.__alloyId19600 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19600"
    });
    $.__views.__alloyId19599.add($.__views.__alloyId19600);
    $.__views.__alloyId19601 = Ti.UI.createView({
        id: "__alloyId19601"
    });
    $.__views.__alloyId19601 && $.addTopLevelView($.__views.__alloyId19601);
    $.__views.__alloyId19602 = Ti.UI.createView({
        id: "__alloyId19602"
    });
    $.__views.__alloyId19601.add($.__views.__alloyId19602);
    $.__views.__alloyId19603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19603"
    });
    $.__views.__alloyId19602.add($.__views.__alloyId19603);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;