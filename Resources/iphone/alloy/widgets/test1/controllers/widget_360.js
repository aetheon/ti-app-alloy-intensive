function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_360";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_360 = Ti.UI.createView({
        id: "widget_360"
    });
    $.__views.widget_360 && $.addTopLevelView($.__views.widget_360);
    $.__views.__alloyId7592 = Ti.UI.createView({
        id: "__alloyId7592"
    });
    $.__views.widget_360.add($.__views.__alloyId7592);
    $.__views.__alloyId7593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7593"
    });
    $.__views.__alloyId7592.add($.__views.__alloyId7593);
    $.__views.__alloyId7594 = Ti.UI.createView({
        id: "__alloyId7594"
    });
    $.__views.__alloyId7594 && $.addTopLevelView($.__views.__alloyId7594);
    $.__views.__alloyId7595 = Ti.UI.createView({
        id: "__alloyId7595"
    });
    $.__views.__alloyId7594.add($.__views.__alloyId7595);
    $.__views.__alloyId7596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7596"
    });
    $.__views.__alloyId7595.add($.__views.__alloyId7596);
    $.__views.__alloyId7597 = Ti.UI.createView({
        id: "__alloyId7597"
    });
    $.__views.__alloyId7597 && $.addTopLevelView($.__views.__alloyId7597);
    $.__views.__alloyId7598 = Ti.UI.createView({
        id: "__alloyId7598"
    });
    $.__views.__alloyId7597.add($.__views.__alloyId7598);
    $.__views.__alloyId7599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7599"
    });
    $.__views.__alloyId7598.add($.__views.__alloyId7599);
    $.__views.__alloyId7600 = Ti.UI.createView({
        id: "__alloyId7600"
    });
    $.__views.__alloyId7600 && $.addTopLevelView($.__views.__alloyId7600);
    $.__views.__alloyId7601 = Ti.UI.createView({
        id: "__alloyId7601"
    });
    $.__views.__alloyId7600.add($.__views.__alloyId7601);
    $.__views.__alloyId7602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7602"
    });
    $.__views.__alloyId7601.add($.__views.__alloyId7602);
    $.__views.__alloyId7603 = Ti.UI.createView({
        id: "__alloyId7603"
    });
    $.__views.__alloyId7603 && $.addTopLevelView($.__views.__alloyId7603);
    $.__views.__alloyId7604 = Ti.UI.createView({
        id: "__alloyId7604"
    });
    $.__views.__alloyId7603.add($.__views.__alloyId7604);
    $.__views.__alloyId7605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7605"
    });
    $.__views.__alloyId7604.add($.__views.__alloyId7605);
    $.__views.__alloyId7606 = Ti.UI.createView({
        id: "__alloyId7606"
    });
    $.__views.__alloyId7606 && $.addTopLevelView($.__views.__alloyId7606);
    $.__views.__alloyId7607 = Ti.UI.createView({
        id: "__alloyId7607"
    });
    $.__views.__alloyId7606.add($.__views.__alloyId7607);
    $.__views.__alloyId7608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7608"
    });
    $.__views.__alloyId7607.add($.__views.__alloyId7608);
    $.__views.__alloyId7609 = Ti.UI.createView({
        id: "__alloyId7609"
    });
    $.__views.__alloyId7609 && $.addTopLevelView($.__views.__alloyId7609);
    $.__views.__alloyId7610 = Ti.UI.createView({
        id: "__alloyId7610"
    });
    $.__views.__alloyId7609.add($.__views.__alloyId7610);
    $.__views.__alloyId7611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7611"
    });
    $.__views.__alloyId7610.add($.__views.__alloyId7611);
    $.__views.__alloyId7612 = Ti.UI.createView({
        id: "__alloyId7612"
    });
    $.__views.__alloyId7612 && $.addTopLevelView($.__views.__alloyId7612);
    $.__views.__alloyId7613 = Ti.UI.createView({
        id: "__alloyId7613"
    });
    $.__views.__alloyId7612.add($.__views.__alloyId7613);
    $.__views.__alloyId7614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7614"
    });
    $.__views.__alloyId7613.add($.__views.__alloyId7614);
    $.__views.__alloyId7615 = Ti.UI.createView({
        id: "__alloyId7615"
    });
    $.__views.__alloyId7615 && $.addTopLevelView($.__views.__alloyId7615);
    $.__views.__alloyId7616 = Ti.UI.createView({
        id: "__alloyId7616"
    });
    $.__views.__alloyId7615.add($.__views.__alloyId7616);
    $.__views.__alloyId7617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7617"
    });
    $.__views.__alloyId7616.add($.__views.__alloyId7617);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;