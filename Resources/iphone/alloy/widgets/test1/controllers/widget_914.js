function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_914";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_914 = Ti.UI.createView({
        id: "widget_914"
    });
    $.__views.widget_914 && $.addTopLevelView($.__views.widget_914);
    $.__views.__alloyId23582 = Ti.UI.createView({
        id: "__alloyId23582"
    });
    $.__views.widget_914.add($.__views.__alloyId23582);
    $.__views.__alloyId23583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23583"
    });
    $.__views.__alloyId23582.add($.__views.__alloyId23583);
    $.__views.__alloyId23584 = Ti.UI.createView({
        id: "__alloyId23584"
    });
    $.__views.__alloyId23584 && $.addTopLevelView($.__views.__alloyId23584);
    $.__views.__alloyId23585 = Ti.UI.createView({
        id: "__alloyId23585"
    });
    $.__views.__alloyId23584.add($.__views.__alloyId23585);
    $.__views.__alloyId23586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23586"
    });
    $.__views.__alloyId23585.add($.__views.__alloyId23586);
    $.__views.__alloyId23587 = Ti.UI.createView({
        id: "__alloyId23587"
    });
    $.__views.__alloyId23587 && $.addTopLevelView($.__views.__alloyId23587);
    $.__views.__alloyId23588 = Ti.UI.createView({
        id: "__alloyId23588"
    });
    $.__views.__alloyId23587.add($.__views.__alloyId23588);
    $.__views.__alloyId23589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23589"
    });
    $.__views.__alloyId23588.add($.__views.__alloyId23589);
    $.__views.__alloyId23590 = Ti.UI.createView({
        id: "__alloyId23590"
    });
    $.__views.__alloyId23590 && $.addTopLevelView($.__views.__alloyId23590);
    $.__views.__alloyId23591 = Ti.UI.createView({
        id: "__alloyId23591"
    });
    $.__views.__alloyId23590.add($.__views.__alloyId23591);
    $.__views.__alloyId23592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23592"
    });
    $.__views.__alloyId23591.add($.__views.__alloyId23592);
    $.__views.__alloyId23593 = Ti.UI.createView({
        id: "__alloyId23593"
    });
    $.__views.__alloyId23593 && $.addTopLevelView($.__views.__alloyId23593);
    $.__views.__alloyId23594 = Ti.UI.createView({
        id: "__alloyId23594"
    });
    $.__views.__alloyId23593.add($.__views.__alloyId23594);
    $.__views.__alloyId23595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23595"
    });
    $.__views.__alloyId23594.add($.__views.__alloyId23595);
    $.__views.__alloyId23596 = Ti.UI.createView({
        id: "__alloyId23596"
    });
    $.__views.__alloyId23596 && $.addTopLevelView($.__views.__alloyId23596);
    $.__views.__alloyId23597 = Ti.UI.createView({
        id: "__alloyId23597"
    });
    $.__views.__alloyId23596.add($.__views.__alloyId23597);
    $.__views.__alloyId23598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23598"
    });
    $.__views.__alloyId23597.add($.__views.__alloyId23598);
    $.__views.__alloyId23599 = Ti.UI.createView({
        id: "__alloyId23599"
    });
    $.__views.__alloyId23599 && $.addTopLevelView($.__views.__alloyId23599);
    $.__views.__alloyId23600 = Ti.UI.createView({
        id: "__alloyId23600"
    });
    $.__views.__alloyId23599.add($.__views.__alloyId23600);
    $.__views.__alloyId23601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23601"
    });
    $.__views.__alloyId23600.add($.__views.__alloyId23601);
    $.__views.__alloyId23602 = Ti.UI.createView({
        id: "__alloyId23602"
    });
    $.__views.__alloyId23602 && $.addTopLevelView($.__views.__alloyId23602);
    $.__views.__alloyId23603 = Ti.UI.createView({
        id: "__alloyId23603"
    });
    $.__views.__alloyId23602.add($.__views.__alloyId23603);
    $.__views.__alloyId23604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23604"
    });
    $.__views.__alloyId23603.add($.__views.__alloyId23604);
    $.__views.__alloyId23605 = Ti.UI.createView({
        id: "__alloyId23605"
    });
    $.__views.__alloyId23605 && $.addTopLevelView($.__views.__alloyId23605);
    $.__views.__alloyId23606 = Ti.UI.createView({
        id: "__alloyId23606"
    });
    $.__views.__alloyId23605.add($.__views.__alloyId23606);
    $.__views.__alloyId23607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23607"
    });
    $.__views.__alloyId23606.add($.__views.__alloyId23607);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;