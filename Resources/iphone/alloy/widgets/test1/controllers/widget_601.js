function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_601";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_601 = Ti.UI.createView({
        id: "widget_601"
    });
    $.__views.widget_601 && $.addTopLevelView($.__views.widget_601);
    $.__views.__alloyId14560 = Ti.UI.createView({
        id: "__alloyId14560"
    });
    $.__views.widget_601.add($.__views.__alloyId14560);
    $.__views.__alloyId14561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14561"
    });
    $.__views.__alloyId14560.add($.__views.__alloyId14561);
    $.__views.__alloyId14562 = Ti.UI.createView({
        id: "__alloyId14562"
    });
    $.__views.__alloyId14562 && $.addTopLevelView($.__views.__alloyId14562);
    $.__views.__alloyId14563 = Ti.UI.createView({
        id: "__alloyId14563"
    });
    $.__views.__alloyId14562.add($.__views.__alloyId14563);
    $.__views.__alloyId14564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14564"
    });
    $.__views.__alloyId14563.add($.__views.__alloyId14564);
    $.__views.__alloyId14565 = Ti.UI.createView({
        id: "__alloyId14565"
    });
    $.__views.__alloyId14565 && $.addTopLevelView($.__views.__alloyId14565);
    $.__views.__alloyId14566 = Ti.UI.createView({
        id: "__alloyId14566"
    });
    $.__views.__alloyId14565.add($.__views.__alloyId14566);
    $.__views.__alloyId14567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14567"
    });
    $.__views.__alloyId14566.add($.__views.__alloyId14567);
    $.__views.__alloyId14568 = Ti.UI.createView({
        id: "__alloyId14568"
    });
    $.__views.__alloyId14568 && $.addTopLevelView($.__views.__alloyId14568);
    $.__views.__alloyId14569 = Ti.UI.createView({
        id: "__alloyId14569"
    });
    $.__views.__alloyId14568.add($.__views.__alloyId14569);
    $.__views.__alloyId14570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14570"
    });
    $.__views.__alloyId14569.add($.__views.__alloyId14570);
    $.__views.__alloyId14571 = Ti.UI.createView({
        id: "__alloyId14571"
    });
    $.__views.__alloyId14571 && $.addTopLevelView($.__views.__alloyId14571);
    $.__views.__alloyId14572 = Ti.UI.createView({
        id: "__alloyId14572"
    });
    $.__views.__alloyId14571.add($.__views.__alloyId14572);
    $.__views.__alloyId14573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14573"
    });
    $.__views.__alloyId14572.add($.__views.__alloyId14573);
    $.__views.__alloyId14574 = Ti.UI.createView({
        id: "__alloyId14574"
    });
    $.__views.__alloyId14574 && $.addTopLevelView($.__views.__alloyId14574);
    $.__views.__alloyId14575 = Ti.UI.createView({
        id: "__alloyId14575"
    });
    $.__views.__alloyId14574.add($.__views.__alloyId14575);
    $.__views.__alloyId14576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14576"
    });
    $.__views.__alloyId14575.add($.__views.__alloyId14576);
    $.__views.__alloyId14577 = Ti.UI.createView({
        id: "__alloyId14577"
    });
    $.__views.__alloyId14577 && $.addTopLevelView($.__views.__alloyId14577);
    $.__views.__alloyId14578 = Ti.UI.createView({
        id: "__alloyId14578"
    });
    $.__views.__alloyId14577.add($.__views.__alloyId14578);
    $.__views.__alloyId14579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14579"
    });
    $.__views.__alloyId14578.add($.__views.__alloyId14579);
    $.__views.__alloyId14580 = Ti.UI.createView({
        id: "__alloyId14580"
    });
    $.__views.__alloyId14580 && $.addTopLevelView($.__views.__alloyId14580);
    $.__views.__alloyId14581 = Ti.UI.createView({
        id: "__alloyId14581"
    });
    $.__views.__alloyId14580.add($.__views.__alloyId14581);
    $.__views.__alloyId14582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14582"
    });
    $.__views.__alloyId14581.add($.__views.__alloyId14582);
    $.__views.__alloyId14583 = Ti.UI.createView({
        id: "__alloyId14583"
    });
    $.__views.__alloyId14583 && $.addTopLevelView($.__views.__alloyId14583);
    $.__views.__alloyId14584 = Ti.UI.createView({
        id: "__alloyId14584"
    });
    $.__views.__alloyId14583.add($.__views.__alloyId14584);
    $.__views.__alloyId14585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14585"
    });
    $.__views.__alloyId14584.add($.__views.__alloyId14585);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;