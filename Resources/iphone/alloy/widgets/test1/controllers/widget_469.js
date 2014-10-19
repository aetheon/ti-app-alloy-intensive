function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_469";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_469 = Ti.UI.createView({
        id: "widget_469"
    });
    $.__views.widget_469 && $.addTopLevelView($.__views.widget_469);
    $.__views.__alloyId10712 = Ti.UI.createView({
        id: "__alloyId10712"
    });
    $.__views.widget_469.add($.__views.__alloyId10712);
    $.__views.__alloyId10713 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10713"
    });
    $.__views.__alloyId10712.add($.__views.__alloyId10713);
    $.__views.__alloyId10714 = Ti.UI.createView({
        id: "__alloyId10714"
    });
    $.__views.__alloyId10714 && $.addTopLevelView($.__views.__alloyId10714);
    $.__views.__alloyId10715 = Ti.UI.createView({
        id: "__alloyId10715"
    });
    $.__views.__alloyId10714.add($.__views.__alloyId10715);
    $.__views.__alloyId10716 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10716"
    });
    $.__views.__alloyId10715.add($.__views.__alloyId10716);
    $.__views.__alloyId10717 = Ti.UI.createView({
        id: "__alloyId10717"
    });
    $.__views.__alloyId10717 && $.addTopLevelView($.__views.__alloyId10717);
    $.__views.__alloyId10718 = Ti.UI.createView({
        id: "__alloyId10718"
    });
    $.__views.__alloyId10717.add($.__views.__alloyId10718);
    $.__views.__alloyId10719 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10719"
    });
    $.__views.__alloyId10718.add($.__views.__alloyId10719);
    $.__views.__alloyId10720 = Ti.UI.createView({
        id: "__alloyId10720"
    });
    $.__views.__alloyId10720 && $.addTopLevelView($.__views.__alloyId10720);
    $.__views.__alloyId10721 = Ti.UI.createView({
        id: "__alloyId10721"
    });
    $.__views.__alloyId10720.add($.__views.__alloyId10721);
    $.__views.__alloyId10722 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10722"
    });
    $.__views.__alloyId10721.add($.__views.__alloyId10722);
    $.__views.__alloyId10723 = Ti.UI.createView({
        id: "__alloyId10723"
    });
    $.__views.__alloyId10723 && $.addTopLevelView($.__views.__alloyId10723);
    $.__views.__alloyId10724 = Ti.UI.createView({
        id: "__alloyId10724"
    });
    $.__views.__alloyId10723.add($.__views.__alloyId10724);
    $.__views.__alloyId10725 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10725"
    });
    $.__views.__alloyId10724.add($.__views.__alloyId10725);
    $.__views.__alloyId10726 = Ti.UI.createView({
        id: "__alloyId10726"
    });
    $.__views.__alloyId10726 && $.addTopLevelView($.__views.__alloyId10726);
    $.__views.__alloyId10727 = Ti.UI.createView({
        id: "__alloyId10727"
    });
    $.__views.__alloyId10726.add($.__views.__alloyId10727);
    $.__views.__alloyId10728 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10728"
    });
    $.__views.__alloyId10727.add($.__views.__alloyId10728);
    $.__views.__alloyId10729 = Ti.UI.createView({
        id: "__alloyId10729"
    });
    $.__views.__alloyId10729 && $.addTopLevelView($.__views.__alloyId10729);
    $.__views.__alloyId10730 = Ti.UI.createView({
        id: "__alloyId10730"
    });
    $.__views.__alloyId10729.add($.__views.__alloyId10730);
    $.__views.__alloyId10731 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10731"
    });
    $.__views.__alloyId10730.add($.__views.__alloyId10731);
    $.__views.__alloyId10732 = Ti.UI.createView({
        id: "__alloyId10732"
    });
    $.__views.__alloyId10732 && $.addTopLevelView($.__views.__alloyId10732);
    $.__views.__alloyId10733 = Ti.UI.createView({
        id: "__alloyId10733"
    });
    $.__views.__alloyId10732.add($.__views.__alloyId10733);
    $.__views.__alloyId10734 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10734"
    });
    $.__views.__alloyId10733.add($.__views.__alloyId10734);
    $.__views.__alloyId10735 = Ti.UI.createView({
        id: "__alloyId10735"
    });
    $.__views.__alloyId10735 && $.addTopLevelView($.__views.__alloyId10735);
    $.__views.__alloyId10736 = Ti.UI.createView({
        id: "__alloyId10736"
    });
    $.__views.__alloyId10735.add($.__views.__alloyId10736);
    $.__views.__alloyId10737 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10737"
    });
    $.__views.__alloyId10736.add($.__views.__alloyId10737);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;