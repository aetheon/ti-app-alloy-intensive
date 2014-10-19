function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_324";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_324 = Ti.UI.createView({
        id: "widget_324"
    });
    $.__views.widget_324 && $.addTopLevelView($.__views.widget_324);
    $.__views.__alloyId6552 = Ti.UI.createView({
        id: "__alloyId6552"
    });
    $.__views.widget_324.add($.__views.__alloyId6552);
    $.__views.__alloyId6553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6553"
    });
    $.__views.__alloyId6552.add($.__views.__alloyId6553);
    $.__views.__alloyId6554 = Ti.UI.createView({
        id: "__alloyId6554"
    });
    $.__views.__alloyId6554 && $.addTopLevelView($.__views.__alloyId6554);
    $.__views.__alloyId6555 = Ti.UI.createView({
        id: "__alloyId6555"
    });
    $.__views.__alloyId6554.add($.__views.__alloyId6555);
    $.__views.__alloyId6556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6556"
    });
    $.__views.__alloyId6555.add($.__views.__alloyId6556);
    $.__views.__alloyId6557 = Ti.UI.createView({
        id: "__alloyId6557"
    });
    $.__views.__alloyId6557 && $.addTopLevelView($.__views.__alloyId6557);
    $.__views.__alloyId6558 = Ti.UI.createView({
        id: "__alloyId6558"
    });
    $.__views.__alloyId6557.add($.__views.__alloyId6558);
    $.__views.__alloyId6559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6559"
    });
    $.__views.__alloyId6558.add($.__views.__alloyId6559);
    $.__views.__alloyId6560 = Ti.UI.createView({
        id: "__alloyId6560"
    });
    $.__views.__alloyId6560 && $.addTopLevelView($.__views.__alloyId6560);
    $.__views.__alloyId6561 = Ti.UI.createView({
        id: "__alloyId6561"
    });
    $.__views.__alloyId6560.add($.__views.__alloyId6561);
    $.__views.__alloyId6562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6562"
    });
    $.__views.__alloyId6561.add($.__views.__alloyId6562);
    $.__views.__alloyId6563 = Ti.UI.createView({
        id: "__alloyId6563"
    });
    $.__views.__alloyId6563 && $.addTopLevelView($.__views.__alloyId6563);
    $.__views.__alloyId6564 = Ti.UI.createView({
        id: "__alloyId6564"
    });
    $.__views.__alloyId6563.add($.__views.__alloyId6564);
    $.__views.__alloyId6565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6565"
    });
    $.__views.__alloyId6564.add($.__views.__alloyId6565);
    $.__views.__alloyId6566 = Ti.UI.createView({
        id: "__alloyId6566"
    });
    $.__views.__alloyId6566 && $.addTopLevelView($.__views.__alloyId6566);
    $.__views.__alloyId6567 = Ti.UI.createView({
        id: "__alloyId6567"
    });
    $.__views.__alloyId6566.add($.__views.__alloyId6567);
    $.__views.__alloyId6568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6568"
    });
    $.__views.__alloyId6567.add($.__views.__alloyId6568);
    $.__views.__alloyId6569 = Ti.UI.createView({
        id: "__alloyId6569"
    });
    $.__views.__alloyId6569 && $.addTopLevelView($.__views.__alloyId6569);
    $.__views.__alloyId6570 = Ti.UI.createView({
        id: "__alloyId6570"
    });
    $.__views.__alloyId6569.add($.__views.__alloyId6570);
    $.__views.__alloyId6571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6571"
    });
    $.__views.__alloyId6570.add($.__views.__alloyId6571);
    $.__views.__alloyId6572 = Ti.UI.createView({
        id: "__alloyId6572"
    });
    $.__views.__alloyId6572 && $.addTopLevelView($.__views.__alloyId6572);
    $.__views.__alloyId6573 = Ti.UI.createView({
        id: "__alloyId6573"
    });
    $.__views.__alloyId6572.add($.__views.__alloyId6573);
    $.__views.__alloyId6574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6574"
    });
    $.__views.__alloyId6573.add($.__views.__alloyId6574);
    $.__views.__alloyId6575 = Ti.UI.createView({
        id: "__alloyId6575"
    });
    $.__views.__alloyId6575 && $.addTopLevelView($.__views.__alloyId6575);
    $.__views.__alloyId6576 = Ti.UI.createView({
        id: "__alloyId6576"
    });
    $.__views.__alloyId6575.add($.__views.__alloyId6576);
    $.__views.__alloyId6577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6577"
    });
    $.__views.__alloyId6576.add($.__views.__alloyId6577);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;