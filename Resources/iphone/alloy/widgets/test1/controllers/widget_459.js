function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_459";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_459 = Ti.UI.createView({
        id: "widget_459"
    });
    $.__views.widget_459 && $.addTopLevelView($.__views.widget_459);
    $.__views.__alloyId10426 = Ti.UI.createView({
        id: "__alloyId10426"
    });
    $.__views.widget_459.add($.__views.__alloyId10426);
    $.__views.__alloyId10427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10427"
    });
    $.__views.__alloyId10426.add($.__views.__alloyId10427);
    $.__views.__alloyId10428 = Ti.UI.createView({
        id: "__alloyId10428"
    });
    $.__views.__alloyId10428 && $.addTopLevelView($.__views.__alloyId10428);
    $.__views.__alloyId10429 = Ti.UI.createView({
        id: "__alloyId10429"
    });
    $.__views.__alloyId10428.add($.__views.__alloyId10429);
    $.__views.__alloyId10430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10430"
    });
    $.__views.__alloyId10429.add($.__views.__alloyId10430);
    $.__views.__alloyId10431 = Ti.UI.createView({
        id: "__alloyId10431"
    });
    $.__views.__alloyId10431 && $.addTopLevelView($.__views.__alloyId10431);
    $.__views.__alloyId10432 = Ti.UI.createView({
        id: "__alloyId10432"
    });
    $.__views.__alloyId10431.add($.__views.__alloyId10432);
    $.__views.__alloyId10433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10433"
    });
    $.__views.__alloyId10432.add($.__views.__alloyId10433);
    $.__views.__alloyId10434 = Ti.UI.createView({
        id: "__alloyId10434"
    });
    $.__views.__alloyId10434 && $.addTopLevelView($.__views.__alloyId10434);
    $.__views.__alloyId10435 = Ti.UI.createView({
        id: "__alloyId10435"
    });
    $.__views.__alloyId10434.add($.__views.__alloyId10435);
    $.__views.__alloyId10436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10436"
    });
    $.__views.__alloyId10435.add($.__views.__alloyId10436);
    $.__views.__alloyId10437 = Ti.UI.createView({
        id: "__alloyId10437"
    });
    $.__views.__alloyId10437 && $.addTopLevelView($.__views.__alloyId10437);
    $.__views.__alloyId10438 = Ti.UI.createView({
        id: "__alloyId10438"
    });
    $.__views.__alloyId10437.add($.__views.__alloyId10438);
    $.__views.__alloyId10439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10439"
    });
    $.__views.__alloyId10438.add($.__views.__alloyId10439);
    $.__views.__alloyId10440 = Ti.UI.createView({
        id: "__alloyId10440"
    });
    $.__views.__alloyId10440 && $.addTopLevelView($.__views.__alloyId10440);
    $.__views.__alloyId10441 = Ti.UI.createView({
        id: "__alloyId10441"
    });
    $.__views.__alloyId10440.add($.__views.__alloyId10441);
    $.__views.__alloyId10442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10442"
    });
    $.__views.__alloyId10441.add($.__views.__alloyId10442);
    $.__views.__alloyId10443 = Ti.UI.createView({
        id: "__alloyId10443"
    });
    $.__views.__alloyId10443 && $.addTopLevelView($.__views.__alloyId10443);
    $.__views.__alloyId10444 = Ti.UI.createView({
        id: "__alloyId10444"
    });
    $.__views.__alloyId10443.add($.__views.__alloyId10444);
    $.__views.__alloyId10445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10445"
    });
    $.__views.__alloyId10444.add($.__views.__alloyId10445);
    $.__views.__alloyId10446 = Ti.UI.createView({
        id: "__alloyId10446"
    });
    $.__views.__alloyId10446 && $.addTopLevelView($.__views.__alloyId10446);
    $.__views.__alloyId10447 = Ti.UI.createView({
        id: "__alloyId10447"
    });
    $.__views.__alloyId10446.add($.__views.__alloyId10447);
    $.__views.__alloyId10448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10448"
    });
    $.__views.__alloyId10447.add($.__views.__alloyId10448);
    $.__views.__alloyId10449 = Ti.UI.createView({
        id: "__alloyId10449"
    });
    $.__views.__alloyId10449 && $.addTopLevelView($.__views.__alloyId10449);
    $.__views.__alloyId10450 = Ti.UI.createView({
        id: "__alloyId10450"
    });
    $.__views.__alloyId10449.add($.__views.__alloyId10450);
    $.__views.__alloyId10451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10451"
    });
    $.__views.__alloyId10450.add($.__views.__alloyId10451);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;