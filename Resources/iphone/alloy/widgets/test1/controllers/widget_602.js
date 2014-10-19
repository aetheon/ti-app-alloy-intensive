function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_602";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_602 = Ti.UI.createView({
        id: "widget_602"
    });
    $.__views.widget_602 && $.addTopLevelView($.__views.widget_602);
    $.__views.__alloyId14586 = Ti.UI.createView({
        id: "__alloyId14586"
    });
    $.__views.widget_602.add($.__views.__alloyId14586);
    $.__views.__alloyId14587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14587"
    });
    $.__views.__alloyId14586.add($.__views.__alloyId14587);
    $.__views.__alloyId14588 = Ti.UI.createView({
        id: "__alloyId14588"
    });
    $.__views.__alloyId14588 && $.addTopLevelView($.__views.__alloyId14588);
    $.__views.__alloyId14589 = Ti.UI.createView({
        id: "__alloyId14589"
    });
    $.__views.__alloyId14588.add($.__views.__alloyId14589);
    $.__views.__alloyId14590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14590"
    });
    $.__views.__alloyId14589.add($.__views.__alloyId14590);
    $.__views.__alloyId14591 = Ti.UI.createView({
        id: "__alloyId14591"
    });
    $.__views.__alloyId14591 && $.addTopLevelView($.__views.__alloyId14591);
    $.__views.__alloyId14592 = Ti.UI.createView({
        id: "__alloyId14592"
    });
    $.__views.__alloyId14591.add($.__views.__alloyId14592);
    $.__views.__alloyId14593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14593"
    });
    $.__views.__alloyId14592.add($.__views.__alloyId14593);
    $.__views.__alloyId14594 = Ti.UI.createView({
        id: "__alloyId14594"
    });
    $.__views.__alloyId14594 && $.addTopLevelView($.__views.__alloyId14594);
    $.__views.__alloyId14595 = Ti.UI.createView({
        id: "__alloyId14595"
    });
    $.__views.__alloyId14594.add($.__views.__alloyId14595);
    $.__views.__alloyId14596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14596"
    });
    $.__views.__alloyId14595.add($.__views.__alloyId14596);
    $.__views.__alloyId14597 = Ti.UI.createView({
        id: "__alloyId14597"
    });
    $.__views.__alloyId14597 && $.addTopLevelView($.__views.__alloyId14597);
    $.__views.__alloyId14598 = Ti.UI.createView({
        id: "__alloyId14598"
    });
    $.__views.__alloyId14597.add($.__views.__alloyId14598);
    $.__views.__alloyId14599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14599"
    });
    $.__views.__alloyId14598.add($.__views.__alloyId14599);
    $.__views.__alloyId14600 = Ti.UI.createView({
        id: "__alloyId14600"
    });
    $.__views.__alloyId14600 && $.addTopLevelView($.__views.__alloyId14600);
    $.__views.__alloyId14601 = Ti.UI.createView({
        id: "__alloyId14601"
    });
    $.__views.__alloyId14600.add($.__views.__alloyId14601);
    $.__views.__alloyId14602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14602"
    });
    $.__views.__alloyId14601.add($.__views.__alloyId14602);
    $.__views.__alloyId14603 = Ti.UI.createView({
        id: "__alloyId14603"
    });
    $.__views.__alloyId14603 && $.addTopLevelView($.__views.__alloyId14603);
    $.__views.__alloyId14604 = Ti.UI.createView({
        id: "__alloyId14604"
    });
    $.__views.__alloyId14603.add($.__views.__alloyId14604);
    $.__views.__alloyId14605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14605"
    });
    $.__views.__alloyId14604.add($.__views.__alloyId14605);
    $.__views.__alloyId14606 = Ti.UI.createView({
        id: "__alloyId14606"
    });
    $.__views.__alloyId14606 && $.addTopLevelView($.__views.__alloyId14606);
    $.__views.__alloyId14607 = Ti.UI.createView({
        id: "__alloyId14607"
    });
    $.__views.__alloyId14606.add($.__views.__alloyId14607);
    $.__views.__alloyId14608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14608"
    });
    $.__views.__alloyId14607.add($.__views.__alloyId14608);
    $.__views.__alloyId14609 = Ti.UI.createView({
        id: "__alloyId14609"
    });
    $.__views.__alloyId14609 && $.addTopLevelView($.__views.__alloyId14609);
    $.__views.__alloyId14610 = Ti.UI.createView({
        id: "__alloyId14610"
    });
    $.__views.__alloyId14609.add($.__views.__alloyId14610);
    $.__views.__alloyId14611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14611"
    });
    $.__views.__alloyId14610.add($.__views.__alloyId14611);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;