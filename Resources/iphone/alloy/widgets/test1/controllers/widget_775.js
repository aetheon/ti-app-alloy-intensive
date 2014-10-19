function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_775";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_775 = Ti.UI.createView({
        id: "widget_775"
    });
    $.__views.widget_775 && $.addTopLevelView($.__views.widget_775);
    $.__views.__alloyId19552 = Ti.UI.createView({
        id: "__alloyId19552"
    });
    $.__views.widget_775.add($.__views.__alloyId19552);
    $.__views.__alloyId19553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19553"
    });
    $.__views.__alloyId19552.add($.__views.__alloyId19553);
    $.__views.__alloyId19554 = Ti.UI.createView({
        id: "__alloyId19554"
    });
    $.__views.__alloyId19554 && $.addTopLevelView($.__views.__alloyId19554);
    $.__views.__alloyId19555 = Ti.UI.createView({
        id: "__alloyId19555"
    });
    $.__views.__alloyId19554.add($.__views.__alloyId19555);
    $.__views.__alloyId19556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19556"
    });
    $.__views.__alloyId19555.add($.__views.__alloyId19556);
    $.__views.__alloyId19557 = Ti.UI.createView({
        id: "__alloyId19557"
    });
    $.__views.__alloyId19557 && $.addTopLevelView($.__views.__alloyId19557);
    $.__views.__alloyId19558 = Ti.UI.createView({
        id: "__alloyId19558"
    });
    $.__views.__alloyId19557.add($.__views.__alloyId19558);
    $.__views.__alloyId19559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19559"
    });
    $.__views.__alloyId19558.add($.__views.__alloyId19559);
    $.__views.__alloyId19560 = Ti.UI.createView({
        id: "__alloyId19560"
    });
    $.__views.__alloyId19560 && $.addTopLevelView($.__views.__alloyId19560);
    $.__views.__alloyId19561 = Ti.UI.createView({
        id: "__alloyId19561"
    });
    $.__views.__alloyId19560.add($.__views.__alloyId19561);
    $.__views.__alloyId19562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19562"
    });
    $.__views.__alloyId19561.add($.__views.__alloyId19562);
    $.__views.__alloyId19563 = Ti.UI.createView({
        id: "__alloyId19563"
    });
    $.__views.__alloyId19563 && $.addTopLevelView($.__views.__alloyId19563);
    $.__views.__alloyId19564 = Ti.UI.createView({
        id: "__alloyId19564"
    });
    $.__views.__alloyId19563.add($.__views.__alloyId19564);
    $.__views.__alloyId19565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19565"
    });
    $.__views.__alloyId19564.add($.__views.__alloyId19565);
    $.__views.__alloyId19566 = Ti.UI.createView({
        id: "__alloyId19566"
    });
    $.__views.__alloyId19566 && $.addTopLevelView($.__views.__alloyId19566);
    $.__views.__alloyId19567 = Ti.UI.createView({
        id: "__alloyId19567"
    });
    $.__views.__alloyId19566.add($.__views.__alloyId19567);
    $.__views.__alloyId19568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19568"
    });
    $.__views.__alloyId19567.add($.__views.__alloyId19568);
    $.__views.__alloyId19569 = Ti.UI.createView({
        id: "__alloyId19569"
    });
    $.__views.__alloyId19569 && $.addTopLevelView($.__views.__alloyId19569);
    $.__views.__alloyId19570 = Ti.UI.createView({
        id: "__alloyId19570"
    });
    $.__views.__alloyId19569.add($.__views.__alloyId19570);
    $.__views.__alloyId19571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19571"
    });
    $.__views.__alloyId19570.add($.__views.__alloyId19571);
    $.__views.__alloyId19572 = Ti.UI.createView({
        id: "__alloyId19572"
    });
    $.__views.__alloyId19572 && $.addTopLevelView($.__views.__alloyId19572);
    $.__views.__alloyId19573 = Ti.UI.createView({
        id: "__alloyId19573"
    });
    $.__views.__alloyId19572.add($.__views.__alloyId19573);
    $.__views.__alloyId19574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19574"
    });
    $.__views.__alloyId19573.add($.__views.__alloyId19574);
    $.__views.__alloyId19575 = Ti.UI.createView({
        id: "__alloyId19575"
    });
    $.__views.__alloyId19575 && $.addTopLevelView($.__views.__alloyId19575);
    $.__views.__alloyId19576 = Ti.UI.createView({
        id: "__alloyId19576"
    });
    $.__views.__alloyId19575.add($.__views.__alloyId19576);
    $.__views.__alloyId19577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19577"
    });
    $.__views.__alloyId19576.add($.__views.__alloyId19577);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;