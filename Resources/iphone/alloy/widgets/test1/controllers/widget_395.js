function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_395";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_395 = Ti.UI.createView({
        id: "widget_395"
    });
    $.__views.widget_395 && $.addTopLevelView($.__views.widget_395);
    $.__views.__alloyId8580 = Ti.UI.createView({
        id: "__alloyId8580"
    });
    $.__views.widget_395.add($.__views.__alloyId8580);
    $.__views.__alloyId8581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8581"
    });
    $.__views.__alloyId8580.add($.__views.__alloyId8581);
    $.__views.__alloyId8582 = Ti.UI.createView({
        id: "__alloyId8582"
    });
    $.__views.__alloyId8582 && $.addTopLevelView($.__views.__alloyId8582);
    $.__views.__alloyId8583 = Ti.UI.createView({
        id: "__alloyId8583"
    });
    $.__views.__alloyId8582.add($.__views.__alloyId8583);
    $.__views.__alloyId8584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8584"
    });
    $.__views.__alloyId8583.add($.__views.__alloyId8584);
    $.__views.__alloyId8585 = Ti.UI.createView({
        id: "__alloyId8585"
    });
    $.__views.__alloyId8585 && $.addTopLevelView($.__views.__alloyId8585);
    $.__views.__alloyId8586 = Ti.UI.createView({
        id: "__alloyId8586"
    });
    $.__views.__alloyId8585.add($.__views.__alloyId8586);
    $.__views.__alloyId8587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8587"
    });
    $.__views.__alloyId8586.add($.__views.__alloyId8587);
    $.__views.__alloyId8588 = Ti.UI.createView({
        id: "__alloyId8588"
    });
    $.__views.__alloyId8588 && $.addTopLevelView($.__views.__alloyId8588);
    $.__views.__alloyId8589 = Ti.UI.createView({
        id: "__alloyId8589"
    });
    $.__views.__alloyId8588.add($.__views.__alloyId8589);
    $.__views.__alloyId8590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8590"
    });
    $.__views.__alloyId8589.add($.__views.__alloyId8590);
    $.__views.__alloyId8591 = Ti.UI.createView({
        id: "__alloyId8591"
    });
    $.__views.__alloyId8591 && $.addTopLevelView($.__views.__alloyId8591);
    $.__views.__alloyId8592 = Ti.UI.createView({
        id: "__alloyId8592"
    });
    $.__views.__alloyId8591.add($.__views.__alloyId8592);
    $.__views.__alloyId8593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8593"
    });
    $.__views.__alloyId8592.add($.__views.__alloyId8593);
    $.__views.__alloyId8594 = Ti.UI.createView({
        id: "__alloyId8594"
    });
    $.__views.__alloyId8594 && $.addTopLevelView($.__views.__alloyId8594);
    $.__views.__alloyId8595 = Ti.UI.createView({
        id: "__alloyId8595"
    });
    $.__views.__alloyId8594.add($.__views.__alloyId8595);
    $.__views.__alloyId8596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8596"
    });
    $.__views.__alloyId8595.add($.__views.__alloyId8596);
    $.__views.__alloyId8597 = Ti.UI.createView({
        id: "__alloyId8597"
    });
    $.__views.__alloyId8597 && $.addTopLevelView($.__views.__alloyId8597);
    $.__views.__alloyId8598 = Ti.UI.createView({
        id: "__alloyId8598"
    });
    $.__views.__alloyId8597.add($.__views.__alloyId8598);
    $.__views.__alloyId8599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8599"
    });
    $.__views.__alloyId8598.add($.__views.__alloyId8599);
    $.__views.__alloyId8600 = Ti.UI.createView({
        id: "__alloyId8600"
    });
    $.__views.__alloyId8600 && $.addTopLevelView($.__views.__alloyId8600);
    $.__views.__alloyId8601 = Ti.UI.createView({
        id: "__alloyId8601"
    });
    $.__views.__alloyId8600.add($.__views.__alloyId8601);
    $.__views.__alloyId8602 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8602"
    });
    $.__views.__alloyId8601.add($.__views.__alloyId8602);
    $.__views.__alloyId8603 = Ti.UI.createView({
        id: "__alloyId8603"
    });
    $.__views.__alloyId8603 && $.addTopLevelView($.__views.__alloyId8603);
    $.__views.__alloyId8604 = Ti.UI.createView({
        id: "__alloyId8604"
    });
    $.__views.__alloyId8603.add($.__views.__alloyId8604);
    $.__views.__alloyId8605 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8605"
    });
    $.__views.__alloyId8604.add($.__views.__alloyId8605);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;