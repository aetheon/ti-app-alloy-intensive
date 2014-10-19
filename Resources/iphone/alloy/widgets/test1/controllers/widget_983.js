function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_983";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_983 = Ti.UI.createView({
        id: "widget_983"
    });
    $.__views.widget_983 && $.addTopLevelView($.__views.widget_983);
    $.__views.__alloyId25558 = Ti.UI.createView({
        id: "__alloyId25558"
    });
    $.__views.widget_983.add($.__views.__alloyId25558);
    $.__views.__alloyId25559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25559"
    });
    $.__views.__alloyId25558.add($.__views.__alloyId25559);
    $.__views.__alloyId25560 = Ti.UI.createView({
        id: "__alloyId25560"
    });
    $.__views.__alloyId25560 && $.addTopLevelView($.__views.__alloyId25560);
    $.__views.__alloyId25561 = Ti.UI.createView({
        id: "__alloyId25561"
    });
    $.__views.__alloyId25560.add($.__views.__alloyId25561);
    $.__views.__alloyId25562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25562"
    });
    $.__views.__alloyId25561.add($.__views.__alloyId25562);
    $.__views.__alloyId25563 = Ti.UI.createView({
        id: "__alloyId25563"
    });
    $.__views.__alloyId25563 && $.addTopLevelView($.__views.__alloyId25563);
    $.__views.__alloyId25564 = Ti.UI.createView({
        id: "__alloyId25564"
    });
    $.__views.__alloyId25563.add($.__views.__alloyId25564);
    $.__views.__alloyId25565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25565"
    });
    $.__views.__alloyId25564.add($.__views.__alloyId25565);
    $.__views.__alloyId25566 = Ti.UI.createView({
        id: "__alloyId25566"
    });
    $.__views.__alloyId25566 && $.addTopLevelView($.__views.__alloyId25566);
    $.__views.__alloyId25567 = Ti.UI.createView({
        id: "__alloyId25567"
    });
    $.__views.__alloyId25566.add($.__views.__alloyId25567);
    $.__views.__alloyId25568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25568"
    });
    $.__views.__alloyId25567.add($.__views.__alloyId25568);
    $.__views.__alloyId25569 = Ti.UI.createView({
        id: "__alloyId25569"
    });
    $.__views.__alloyId25569 && $.addTopLevelView($.__views.__alloyId25569);
    $.__views.__alloyId25570 = Ti.UI.createView({
        id: "__alloyId25570"
    });
    $.__views.__alloyId25569.add($.__views.__alloyId25570);
    $.__views.__alloyId25571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25571"
    });
    $.__views.__alloyId25570.add($.__views.__alloyId25571);
    $.__views.__alloyId25572 = Ti.UI.createView({
        id: "__alloyId25572"
    });
    $.__views.__alloyId25572 && $.addTopLevelView($.__views.__alloyId25572);
    $.__views.__alloyId25573 = Ti.UI.createView({
        id: "__alloyId25573"
    });
    $.__views.__alloyId25572.add($.__views.__alloyId25573);
    $.__views.__alloyId25574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25574"
    });
    $.__views.__alloyId25573.add($.__views.__alloyId25574);
    $.__views.__alloyId25575 = Ti.UI.createView({
        id: "__alloyId25575"
    });
    $.__views.__alloyId25575 && $.addTopLevelView($.__views.__alloyId25575);
    $.__views.__alloyId25576 = Ti.UI.createView({
        id: "__alloyId25576"
    });
    $.__views.__alloyId25575.add($.__views.__alloyId25576);
    $.__views.__alloyId25577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25577"
    });
    $.__views.__alloyId25576.add($.__views.__alloyId25577);
    $.__views.__alloyId25578 = Ti.UI.createView({
        id: "__alloyId25578"
    });
    $.__views.__alloyId25578 && $.addTopLevelView($.__views.__alloyId25578);
    $.__views.__alloyId25579 = Ti.UI.createView({
        id: "__alloyId25579"
    });
    $.__views.__alloyId25578.add($.__views.__alloyId25579);
    $.__views.__alloyId25580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25580"
    });
    $.__views.__alloyId25579.add($.__views.__alloyId25580);
    $.__views.__alloyId25581 = Ti.UI.createView({
        id: "__alloyId25581"
    });
    $.__views.__alloyId25581 && $.addTopLevelView($.__views.__alloyId25581);
    $.__views.__alloyId25582 = Ti.UI.createView({
        id: "__alloyId25582"
    });
    $.__views.__alloyId25581.add($.__views.__alloyId25582);
    $.__views.__alloyId25583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25583"
    });
    $.__views.__alloyId25582.add($.__views.__alloyId25583);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;