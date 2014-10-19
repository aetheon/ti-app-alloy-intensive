function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_563";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_563 = Ti.UI.createView({
        id: "widget_563"
    });
    $.__views.widget_563 && $.addTopLevelView($.__views.widget_563);
    $.__views.__alloyId13442 = Ti.UI.createView({
        id: "__alloyId13442"
    });
    $.__views.widget_563.add($.__views.__alloyId13442);
    $.__views.__alloyId13443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13443"
    });
    $.__views.__alloyId13442.add($.__views.__alloyId13443);
    $.__views.__alloyId13444 = Ti.UI.createView({
        id: "__alloyId13444"
    });
    $.__views.__alloyId13444 && $.addTopLevelView($.__views.__alloyId13444);
    $.__views.__alloyId13445 = Ti.UI.createView({
        id: "__alloyId13445"
    });
    $.__views.__alloyId13444.add($.__views.__alloyId13445);
    $.__views.__alloyId13446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13446"
    });
    $.__views.__alloyId13445.add($.__views.__alloyId13446);
    $.__views.__alloyId13447 = Ti.UI.createView({
        id: "__alloyId13447"
    });
    $.__views.__alloyId13447 && $.addTopLevelView($.__views.__alloyId13447);
    $.__views.__alloyId13448 = Ti.UI.createView({
        id: "__alloyId13448"
    });
    $.__views.__alloyId13447.add($.__views.__alloyId13448);
    $.__views.__alloyId13449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13449"
    });
    $.__views.__alloyId13448.add($.__views.__alloyId13449);
    $.__views.__alloyId13450 = Ti.UI.createView({
        id: "__alloyId13450"
    });
    $.__views.__alloyId13450 && $.addTopLevelView($.__views.__alloyId13450);
    $.__views.__alloyId13451 = Ti.UI.createView({
        id: "__alloyId13451"
    });
    $.__views.__alloyId13450.add($.__views.__alloyId13451);
    $.__views.__alloyId13452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13452"
    });
    $.__views.__alloyId13451.add($.__views.__alloyId13452);
    $.__views.__alloyId13453 = Ti.UI.createView({
        id: "__alloyId13453"
    });
    $.__views.__alloyId13453 && $.addTopLevelView($.__views.__alloyId13453);
    $.__views.__alloyId13454 = Ti.UI.createView({
        id: "__alloyId13454"
    });
    $.__views.__alloyId13453.add($.__views.__alloyId13454);
    $.__views.__alloyId13455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13455"
    });
    $.__views.__alloyId13454.add($.__views.__alloyId13455);
    $.__views.__alloyId13456 = Ti.UI.createView({
        id: "__alloyId13456"
    });
    $.__views.__alloyId13456 && $.addTopLevelView($.__views.__alloyId13456);
    $.__views.__alloyId13457 = Ti.UI.createView({
        id: "__alloyId13457"
    });
    $.__views.__alloyId13456.add($.__views.__alloyId13457);
    $.__views.__alloyId13458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13458"
    });
    $.__views.__alloyId13457.add($.__views.__alloyId13458);
    $.__views.__alloyId13459 = Ti.UI.createView({
        id: "__alloyId13459"
    });
    $.__views.__alloyId13459 && $.addTopLevelView($.__views.__alloyId13459);
    $.__views.__alloyId13460 = Ti.UI.createView({
        id: "__alloyId13460"
    });
    $.__views.__alloyId13459.add($.__views.__alloyId13460);
    $.__views.__alloyId13461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13461"
    });
    $.__views.__alloyId13460.add($.__views.__alloyId13461);
    $.__views.__alloyId13462 = Ti.UI.createView({
        id: "__alloyId13462"
    });
    $.__views.__alloyId13462 && $.addTopLevelView($.__views.__alloyId13462);
    $.__views.__alloyId13463 = Ti.UI.createView({
        id: "__alloyId13463"
    });
    $.__views.__alloyId13462.add($.__views.__alloyId13463);
    $.__views.__alloyId13464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13464"
    });
    $.__views.__alloyId13463.add($.__views.__alloyId13464);
    $.__views.__alloyId13465 = Ti.UI.createView({
        id: "__alloyId13465"
    });
    $.__views.__alloyId13465 && $.addTopLevelView($.__views.__alloyId13465);
    $.__views.__alloyId13466 = Ti.UI.createView({
        id: "__alloyId13466"
    });
    $.__views.__alloyId13465.add($.__views.__alloyId13466);
    $.__views.__alloyId13467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13467"
    });
    $.__views.__alloyId13466.add($.__views.__alloyId13467);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;