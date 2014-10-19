function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_429";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_429 = Ti.UI.createView({
        id: "widget_429"
    });
    $.__views.widget_429 && $.addTopLevelView($.__views.widget_429);
    $.__views.__alloyId9568 = Ti.UI.createView({
        id: "__alloyId9568"
    });
    $.__views.widget_429.add($.__views.__alloyId9568);
    $.__views.__alloyId9569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9569"
    });
    $.__views.__alloyId9568.add($.__views.__alloyId9569);
    $.__views.__alloyId9570 = Ti.UI.createView({
        id: "__alloyId9570"
    });
    $.__views.__alloyId9570 && $.addTopLevelView($.__views.__alloyId9570);
    $.__views.__alloyId9571 = Ti.UI.createView({
        id: "__alloyId9571"
    });
    $.__views.__alloyId9570.add($.__views.__alloyId9571);
    $.__views.__alloyId9572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9572"
    });
    $.__views.__alloyId9571.add($.__views.__alloyId9572);
    $.__views.__alloyId9573 = Ti.UI.createView({
        id: "__alloyId9573"
    });
    $.__views.__alloyId9573 && $.addTopLevelView($.__views.__alloyId9573);
    $.__views.__alloyId9574 = Ti.UI.createView({
        id: "__alloyId9574"
    });
    $.__views.__alloyId9573.add($.__views.__alloyId9574);
    $.__views.__alloyId9575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9575"
    });
    $.__views.__alloyId9574.add($.__views.__alloyId9575);
    $.__views.__alloyId9576 = Ti.UI.createView({
        id: "__alloyId9576"
    });
    $.__views.__alloyId9576 && $.addTopLevelView($.__views.__alloyId9576);
    $.__views.__alloyId9577 = Ti.UI.createView({
        id: "__alloyId9577"
    });
    $.__views.__alloyId9576.add($.__views.__alloyId9577);
    $.__views.__alloyId9578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9578"
    });
    $.__views.__alloyId9577.add($.__views.__alloyId9578);
    $.__views.__alloyId9579 = Ti.UI.createView({
        id: "__alloyId9579"
    });
    $.__views.__alloyId9579 && $.addTopLevelView($.__views.__alloyId9579);
    $.__views.__alloyId9580 = Ti.UI.createView({
        id: "__alloyId9580"
    });
    $.__views.__alloyId9579.add($.__views.__alloyId9580);
    $.__views.__alloyId9581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9581"
    });
    $.__views.__alloyId9580.add($.__views.__alloyId9581);
    $.__views.__alloyId9582 = Ti.UI.createView({
        id: "__alloyId9582"
    });
    $.__views.__alloyId9582 && $.addTopLevelView($.__views.__alloyId9582);
    $.__views.__alloyId9583 = Ti.UI.createView({
        id: "__alloyId9583"
    });
    $.__views.__alloyId9582.add($.__views.__alloyId9583);
    $.__views.__alloyId9584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9584"
    });
    $.__views.__alloyId9583.add($.__views.__alloyId9584);
    $.__views.__alloyId9585 = Ti.UI.createView({
        id: "__alloyId9585"
    });
    $.__views.__alloyId9585 && $.addTopLevelView($.__views.__alloyId9585);
    $.__views.__alloyId9586 = Ti.UI.createView({
        id: "__alloyId9586"
    });
    $.__views.__alloyId9585.add($.__views.__alloyId9586);
    $.__views.__alloyId9587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9587"
    });
    $.__views.__alloyId9586.add($.__views.__alloyId9587);
    $.__views.__alloyId9588 = Ti.UI.createView({
        id: "__alloyId9588"
    });
    $.__views.__alloyId9588 && $.addTopLevelView($.__views.__alloyId9588);
    $.__views.__alloyId9589 = Ti.UI.createView({
        id: "__alloyId9589"
    });
    $.__views.__alloyId9588.add($.__views.__alloyId9589);
    $.__views.__alloyId9590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9590"
    });
    $.__views.__alloyId9589.add($.__views.__alloyId9590);
    $.__views.__alloyId9591 = Ti.UI.createView({
        id: "__alloyId9591"
    });
    $.__views.__alloyId9591 && $.addTopLevelView($.__views.__alloyId9591);
    $.__views.__alloyId9592 = Ti.UI.createView({
        id: "__alloyId9592"
    });
    $.__views.__alloyId9591.add($.__views.__alloyId9592);
    $.__views.__alloyId9593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9593"
    });
    $.__views.__alloyId9592.add($.__views.__alloyId9593);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;