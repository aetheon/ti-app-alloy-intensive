function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_913";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_913 = Ti.UI.createView({
        id: "widget_913"
    });
    $.__views.widget_913 && $.addTopLevelView($.__views.widget_913);
    $.__views.__alloyId23556 = Ti.UI.createView({
        id: "__alloyId23556"
    });
    $.__views.widget_913.add($.__views.__alloyId23556);
    $.__views.__alloyId23557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23557"
    });
    $.__views.__alloyId23556.add($.__views.__alloyId23557);
    $.__views.__alloyId23558 = Ti.UI.createView({
        id: "__alloyId23558"
    });
    $.__views.__alloyId23558 && $.addTopLevelView($.__views.__alloyId23558);
    $.__views.__alloyId23559 = Ti.UI.createView({
        id: "__alloyId23559"
    });
    $.__views.__alloyId23558.add($.__views.__alloyId23559);
    $.__views.__alloyId23560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23560"
    });
    $.__views.__alloyId23559.add($.__views.__alloyId23560);
    $.__views.__alloyId23561 = Ti.UI.createView({
        id: "__alloyId23561"
    });
    $.__views.__alloyId23561 && $.addTopLevelView($.__views.__alloyId23561);
    $.__views.__alloyId23562 = Ti.UI.createView({
        id: "__alloyId23562"
    });
    $.__views.__alloyId23561.add($.__views.__alloyId23562);
    $.__views.__alloyId23563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23563"
    });
    $.__views.__alloyId23562.add($.__views.__alloyId23563);
    $.__views.__alloyId23564 = Ti.UI.createView({
        id: "__alloyId23564"
    });
    $.__views.__alloyId23564 && $.addTopLevelView($.__views.__alloyId23564);
    $.__views.__alloyId23565 = Ti.UI.createView({
        id: "__alloyId23565"
    });
    $.__views.__alloyId23564.add($.__views.__alloyId23565);
    $.__views.__alloyId23566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23566"
    });
    $.__views.__alloyId23565.add($.__views.__alloyId23566);
    $.__views.__alloyId23567 = Ti.UI.createView({
        id: "__alloyId23567"
    });
    $.__views.__alloyId23567 && $.addTopLevelView($.__views.__alloyId23567);
    $.__views.__alloyId23568 = Ti.UI.createView({
        id: "__alloyId23568"
    });
    $.__views.__alloyId23567.add($.__views.__alloyId23568);
    $.__views.__alloyId23569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23569"
    });
    $.__views.__alloyId23568.add($.__views.__alloyId23569);
    $.__views.__alloyId23570 = Ti.UI.createView({
        id: "__alloyId23570"
    });
    $.__views.__alloyId23570 && $.addTopLevelView($.__views.__alloyId23570);
    $.__views.__alloyId23571 = Ti.UI.createView({
        id: "__alloyId23571"
    });
    $.__views.__alloyId23570.add($.__views.__alloyId23571);
    $.__views.__alloyId23572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23572"
    });
    $.__views.__alloyId23571.add($.__views.__alloyId23572);
    $.__views.__alloyId23573 = Ti.UI.createView({
        id: "__alloyId23573"
    });
    $.__views.__alloyId23573 && $.addTopLevelView($.__views.__alloyId23573);
    $.__views.__alloyId23574 = Ti.UI.createView({
        id: "__alloyId23574"
    });
    $.__views.__alloyId23573.add($.__views.__alloyId23574);
    $.__views.__alloyId23575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23575"
    });
    $.__views.__alloyId23574.add($.__views.__alloyId23575);
    $.__views.__alloyId23576 = Ti.UI.createView({
        id: "__alloyId23576"
    });
    $.__views.__alloyId23576 && $.addTopLevelView($.__views.__alloyId23576);
    $.__views.__alloyId23577 = Ti.UI.createView({
        id: "__alloyId23577"
    });
    $.__views.__alloyId23576.add($.__views.__alloyId23577);
    $.__views.__alloyId23578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23578"
    });
    $.__views.__alloyId23577.add($.__views.__alloyId23578);
    $.__views.__alloyId23579 = Ti.UI.createView({
        id: "__alloyId23579"
    });
    $.__views.__alloyId23579 && $.addTopLevelView($.__views.__alloyId23579);
    $.__views.__alloyId23580 = Ti.UI.createView({
        id: "__alloyId23580"
    });
    $.__views.__alloyId23579.add($.__views.__alloyId23580);
    $.__views.__alloyId23581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23581"
    });
    $.__views.__alloyId23580.add($.__views.__alloyId23581);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;