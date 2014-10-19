function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_810";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_810 = Ti.UI.createView({
        id: "widget_810"
    });
    $.__views.widget_810 && $.addTopLevelView($.__views.widget_810);
    $.__views.__alloyId20592 = Ti.UI.createView({
        id: "__alloyId20592"
    });
    $.__views.widget_810.add($.__views.__alloyId20592);
    $.__views.__alloyId20593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20593"
    });
    $.__views.__alloyId20592.add($.__views.__alloyId20593);
    $.__views.__alloyId20594 = Ti.UI.createView({
        id: "__alloyId20594"
    });
    $.__views.__alloyId20594 && $.addTopLevelView($.__views.__alloyId20594);
    $.__views.__alloyId20595 = Ti.UI.createView({
        id: "__alloyId20595"
    });
    $.__views.__alloyId20594.add($.__views.__alloyId20595);
    $.__views.__alloyId20596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20596"
    });
    $.__views.__alloyId20595.add($.__views.__alloyId20596);
    $.__views.__alloyId20597 = Ti.UI.createView({
        id: "__alloyId20597"
    });
    $.__views.__alloyId20597 && $.addTopLevelView($.__views.__alloyId20597);
    $.__views.__alloyId20598 = Ti.UI.createView({
        id: "__alloyId20598"
    });
    $.__views.__alloyId20597.add($.__views.__alloyId20598);
    $.__views.__alloyId20599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20599"
    });
    $.__views.__alloyId20598.add($.__views.__alloyId20599);
    $.__views.__alloyId20600 = Ti.UI.createView({
        id: "__alloyId20600"
    });
    $.__views.__alloyId20600 && $.addTopLevelView($.__views.__alloyId20600);
    $.__views.__alloyId20601 = Ti.UI.createView({
        id: "__alloyId20601"
    });
    $.__views.__alloyId20600.add($.__views.__alloyId20601);
    $.__views.__alloyId20602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20602"
    });
    $.__views.__alloyId20601.add($.__views.__alloyId20602);
    $.__views.__alloyId20603 = Ti.UI.createView({
        id: "__alloyId20603"
    });
    $.__views.__alloyId20603 && $.addTopLevelView($.__views.__alloyId20603);
    $.__views.__alloyId20604 = Ti.UI.createView({
        id: "__alloyId20604"
    });
    $.__views.__alloyId20603.add($.__views.__alloyId20604);
    $.__views.__alloyId20605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20605"
    });
    $.__views.__alloyId20604.add($.__views.__alloyId20605);
    $.__views.__alloyId20606 = Ti.UI.createView({
        id: "__alloyId20606"
    });
    $.__views.__alloyId20606 && $.addTopLevelView($.__views.__alloyId20606);
    $.__views.__alloyId20607 = Ti.UI.createView({
        id: "__alloyId20607"
    });
    $.__views.__alloyId20606.add($.__views.__alloyId20607);
    $.__views.__alloyId20608 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20608"
    });
    $.__views.__alloyId20607.add($.__views.__alloyId20608);
    $.__views.__alloyId20609 = Ti.UI.createView({
        id: "__alloyId20609"
    });
    $.__views.__alloyId20609 && $.addTopLevelView($.__views.__alloyId20609);
    $.__views.__alloyId20610 = Ti.UI.createView({
        id: "__alloyId20610"
    });
    $.__views.__alloyId20609.add($.__views.__alloyId20610);
    $.__views.__alloyId20611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20611"
    });
    $.__views.__alloyId20610.add($.__views.__alloyId20611);
    $.__views.__alloyId20612 = Ti.UI.createView({
        id: "__alloyId20612"
    });
    $.__views.__alloyId20612 && $.addTopLevelView($.__views.__alloyId20612);
    $.__views.__alloyId20613 = Ti.UI.createView({
        id: "__alloyId20613"
    });
    $.__views.__alloyId20612.add($.__views.__alloyId20613);
    $.__views.__alloyId20614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20614"
    });
    $.__views.__alloyId20613.add($.__views.__alloyId20614);
    $.__views.__alloyId20615 = Ti.UI.createView({
        id: "__alloyId20615"
    });
    $.__views.__alloyId20615 && $.addTopLevelView($.__views.__alloyId20615);
    $.__views.__alloyId20616 = Ti.UI.createView({
        id: "__alloyId20616"
    });
    $.__views.__alloyId20615.add($.__views.__alloyId20616);
    $.__views.__alloyId20617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20617"
    });
    $.__views.__alloyId20616.add($.__views.__alloyId20617);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;