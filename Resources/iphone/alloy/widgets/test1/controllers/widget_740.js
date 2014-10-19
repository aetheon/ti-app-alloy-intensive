function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_740";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_740 = Ti.UI.createView({
        id: "widget_740"
    });
    $.__views.widget_740 && $.addTopLevelView($.__views.widget_740);
    $.__views.__alloyId18564 = Ti.UI.createView({
        id: "__alloyId18564"
    });
    $.__views.widget_740.add($.__views.__alloyId18564);
    $.__views.__alloyId18565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18565"
    });
    $.__views.__alloyId18564.add($.__views.__alloyId18565);
    $.__views.__alloyId18566 = Ti.UI.createView({
        id: "__alloyId18566"
    });
    $.__views.__alloyId18566 && $.addTopLevelView($.__views.__alloyId18566);
    $.__views.__alloyId18567 = Ti.UI.createView({
        id: "__alloyId18567"
    });
    $.__views.__alloyId18566.add($.__views.__alloyId18567);
    $.__views.__alloyId18568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18568"
    });
    $.__views.__alloyId18567.add($.__views.__alloyId18568);
    $.__views.__alloyId18569 = Ti.UI.createView({
        id: "__alloyId18569"
    });
    $.__views.__alloyId18569 && $.addTopLevelView($.__views.__alloyId18569);
    $.__views.__alloyId18570 = Ti.UI.createView({
        id: "__alloyId18570"
    });
    $.__views.__alloyId18569.add($.__views.__alloyId18570);
    $.__views.__alloyId18571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18571"
    });
    $.__views.__alloyId18570.add($.__views.__alloyId18571);
    $.__views.__alloyId18572 = Ti.UI.createView({
        id: "__alloyId18572"
    });
    $.__views.__alloyId18572 && $.addTopLevelView($.__views.__alloyId18572);
    $.__views.__alloyId18573 = Ti.UI.createView({
        id: "__alloyId18573"
    });
    $.__views.__alloyId18572.add($.__views.__alloyId18573);
    $.__views.__alloyId18574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18574"
    });
    $.__views.__alloyId18573.add($.__views.__alloyId18574);
    $.__views.__alloyId18575 = Ti.UI.createView({
        id: "__alloyId18575"
    });
    $.__views.__alloyId18575 && $.addTopLevelView($.__views.__alloyId18575);
    $.__views.__alloyId18576 = Ti.UI.createView({
        id: "__alloyId18576"
    });
    $.__views.__alloyId18575.add($.__views.__alloyId18576);
    $.__views.__alloyId18577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18577"
    });
    $.__views.__alloyId18576.add($.__views.__alloyId18577);
    $.__views.__alloyId18578 = Ti.UI.createView({
        id: "__alloyId18578"
    });
    $.__views.__alloyId18578 && $.addTopLevelView($.__views.__alloyId18578);
    $.__views.__alloyId18579 = Ti.UI.createView({
        id: "__alloyId18579"
    });
    $.__views.__alloyId18578.add($.__views.__alloyId18579);
    $.__views.__alloyId18580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18580"
    });
    $.__views.__alloyId18579.add($.__views.__alloyId18580);
    $.__views.__alloyId18581 = Ti.UI.createView({
        id: "__alloyId18581"
    });
    $.__views.__alloyId18581 && $.addTopLevelView($.__views.__alloyId18581);
    $.__views.__alloyId18582 = Ti.UI.createView({
        id: "__alloyId18582"
    });
    $.__views.__alloyId18581.add($.__views.__alloyId18582);
    $.__views.__alloyId18583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18583"
    });
    $.__views.__alloyId18582.add($.__views.__alloyId18583);
    $.__views.__alloyId18584 = Ti.UI.createView({
        id: "__alloyId18584"
    });
    $.__views.__alloyId18584 && $.addTopLevelView($.__views.__alloyId18584);
    $.__views.__alloyId18585 = Ti.UI.createView({
        id: "__alloyId18585"
    });
    $.__views.__alloyId18584.add($.__views.__alloyId18585);
    $.__views.__alloyId18586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18586"
    });
    $.__views.__alloyId18585.add($.__views.__alloyId18586);
    $.__views.__alloyId18587 = Ti.UI.createView({
        id: "__alloyId18587"
    });
    $.__views.__alloyId18587 && $.addTopLevelView($.__views.__alloyId18587);
    $.__views.__alloyId18588 = Ti.UI.createView({
        id: "__alloyId18588"
    });
    $.__views.__alloyId18587.add($.__views.__alloyId18588);
    $.__views.__alloyId18589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18589"
    });
    $.__views.__alloyId18588.add($.__views.__alloyId18589);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;