function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_394";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_394 = Ti.UI.createView({
        id: "widget_394"
    });
    $.__views.widget_394 && $.addTopLevelView($.__views.widget_394);
    $.__views.__alloyId8554 = Ti.UI.createView({
        id: "__alloyId8554"
    });
    $.__views.widget_394.add($.__views.__alloyId8554);
    $.__views.__alloyId8555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8555"
    });
    $.__views.__alloyId8554.add($.__views.__alloyId8555);
    $.__views.__alloyId8556 = Ti.UI.createView({
        id: "__alloyId8556"
    });
    $.__views.__alloyId8556 && $.addTopLevelView($.__views.__alloyId8556);
    $.__views.__alloyId8557 = Ti.UI.createView({
        id: "__alloyId8557"
    });
    $.__views.__alloyId8556.add($.__views.__alloyId8557);
    $.__views.__alloyId8558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8558"
    });
    $.__views.__alloyId8557.add($.__views.__alloyId8558);
    $.__views.__alloyId8559 = Ti.UI.createView({
        id: "__alloyId8559"
    });
    $.__views.__alloyId8559 && $.addTopLevelView($.__views.__alloyId8559);
    $.__views.__alloyId8560 = Ti.UI.createView({
        id: "__alloyId8560"
    });
    $.__views.__alloyId8559.add($.__views.__alloyId8560);
    $.__views.__alloyId8561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8561"
    });
    $.__views.__alloyId8560.add($.__views.__alloyId8561);
    $.__views.__alloyId8562 = Ti.UI.createView({
        id: "__alloyId8562"
    });
    $.__views.__alloyId8562 && $.addTopLevelView($.__views.__alloyId8562);
    $.__views.__alloyId8563 = Ti.UI.createView({
        id: "__alloyId8563"
    });
    $.__views.__alloyId8562.add($.__views.__alloyId8563);
    $.__views.__alloyId8564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8564"
    });
    $.__views.__alloyId8563.add($.__views.__alloyId8564);
    $.__views.__alloyId8565 = Ti.UI.createView({
        id: "__alloyId8565"
    });
    $.__views.__alloyId8565 && $.addTopLevelView($.__views.__alloyId8565);
    $.__views.__alloyId8566 = Ti.UI.createView({
        id: "__alloyId8566"
    });
    $.__views.__alloyId8565.add($.__views.__alloyId8566);
    $.__views.__alloyId8567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8567"
    });
    $.__views.__alloyId8566.add($.__views.__alloyId8567);
    $.__views.__alloyId8568 = Ti.UI.createView({
        id: "__alloyId8568"
    });
    $.__views.__alloyId8568 && $.addTopLevelView($.__views.__alloyId8568);
    $.__views.__alloyId8569 = Ti.UI.createView({
        id: "__alloyId8569"
    });
    $.__views.__alloyId8568.add($.__views.__alloyId8569);
    $.__views.__alloyId8570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8570"
    });
    $.__views.__alloyId8569.add($.__views.__alloyId8570);
    $.__views.__alloyId8571 = Ti.UI.createView({
        id: "__alloyId8571"
    });
    $.__views.__alloyId8571 && $.addTopLevelView($.__views.__alloyId8571);
    $.__views.__alloyId8572 = Ti.UI.createView({
        id: "__alloyId8572"
    });
    $.__views.__alloyId8571.add($.__views.__alloyId8572);
    $.__views.__alloyId8573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8573"
    });
    $.__views.__alloyId8572.add($.__views.__alloyId8573);
    $.__views.__alloyId8574 = Ti.UI.createView({
        id: "__alloyId8574"
    });
    $.__views.__alloyId8574 && $.addTopLevelView($.__views.__alloyId8574);
    $.__views.__alloyId8575 = Ti.UI.createView({
        id: "__alloyId8575"
    });
    $.__views.__alloyId8574.add($.__views.__alloyId8575);
    $.__views.__alloyId8576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8576"
    });
    $.__views.__alloyId8575.add($.__views.__alloyId8576);
    $.__views.__alloyId8577 = Ti.UI.createView({
        id: "__alloyId8577"
    });
    $.__views.__alloyId8577 && $.addTopLevelView($.__views.__alloyId8577);
    $.__views.__alloyId8578 = Ti.UI.createView({
        id: "__alloyId8578"
    });
    $.__views.__alloyId8577.add($.__views.__alloyId8578);
    $.__views.__alloyId8579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8579"
    });
    $.__views.__alloyId8578.add($.__views.__alloyId8579);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;