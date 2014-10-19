function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_424";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_424 = Ti.UI.createView({
        id: "widget_424"
    });
    $.__views.widget_424 && $.addTopLevelView($.__views.widget_424);
    $.__views.__alloyId9438 = Ti.UI.createView({
        id: "__alloyId9438"
    });
    $.__views.widget_424.add($.__views.__alloyId9438);
    $.__views.__alloyId9439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9439"
    });
    $.__views.__alloyId9438.add($.__views.__alloyId9439);
    $.__views.__alloyId9440 = Ti.UI.createView({
        id: "__alloyId9440"
    });
    $.__views.__alloyId9440 && $.addTopLevelView($.__views.__alloyId9440);
    $.__views.__alloyId9441 = Ti.UI.createView({
        id: "__alloyId9441"
    });
    $.__views.__alloyId9440.add($.__views.__alloyId9441);
    $.__views.__alloyId9442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9442"
    });
    $.__views.__alloyId9441.add($.__views.__alloyId9442);
    $.__views.__alloyId9443 = Ti.UI.createView({
        id: "__alloyId9443"
    });
    $.__views.__alloyId9443 && $.addTopLevelView($.__views.__alloyId9443);
    $.__views.__alloyId9444 = Ti.UI.createView({
        id: "__alloyId9444"
    });
    $.__views.__alloyId9443.add($.__views.__alloyId9444);
    $.__views.__alloyId9445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9445"
    });
    $.__views.__alloyId9444.add($.__views.__alloyId9445);
    $.__views.__alloyId9446 = Ti.UI.createView({
        id: "__alloyId9446"
    });
    $.__views.__alloyId9446 && $.addTopLevelView($.__views.__alloyId9446);
    $.__views.__alloyId9447 = Ti.UI.createView({
        id: "__alloyId9447"
    });
    $.__views.__alloyId9446.add($.__views.__alloyId9447);
    $.__views.__alloyId9448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9448"
    });
    $.__views.__alloyId9447.add($.__views.__alloyId9448);
    $.__views.__alloyId9449 = Ti.UI.createView({
        id: "__alloyId9449"
    });
    $.__views.__alloyId9449 && $.addTopLevelView($.__views.__alloyId9449);
    $.__views.__alloyId9450 = Ti.UI.createView({
        id: "__alloyId9450"
    });
    $.__views.__alloyId9449.add($.__views.__alloyId9450);
    $.__views.__alloyId9451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9451"
    });
    $.__views.__alloyId9450.add($.__views.__alloyId9451);
    $.__views.__alloyId9452 = Ti.UI.createView({
        id: "__alloyId9452"
    });
    $.__views.__alloyId9452 && $.addTopLevelView($.__views.__alloyId9452);
    $.__views.__alloyId9453 = Ti.UI.createView({
        id: "__alloyId9453"
    });
    $.__views.__alloyId9452.add($.__views.__alloyId9453);
    $.__views.__alloyId9454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9454"
    });
    $.__views.__alloyId9453.add($.__views.__alloyId9454);
    $.__views.__alloyId9455 = Ti.UI.createView({
        id: "__alloyId9455"
    });
    $.__views.__alloyId9455 && $.addTopLevelView($.__views.__alloyId9455);
    $.__views.__alloyId9456 = Ti.UI.createView({
        id: "__alloyId9456"
    });
    $.__views.__alloyId9455.add($.__views.__alloyId9456);
    $.__views.__alloyId9457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9457"
    });
    $.__views.__alloyId9456.add($.__views.__alloyId9457);
    $.__views.__alloyId9458 = Ti.UI.createView({
        id: "__alloyId9458"
    });
    $.__views.__alloyId9458 && $.addTopLevelView($.__views.__alloyId9458);
    $.__views.__alloyId9459 = Ti.UI.createView({
        id: "__alloyId9459"
    });
    $.__views.__alloyId9458.add($.__views.__alloyId9459);
    $.__views.__alloyId9460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9460"
    });
    $.__views.__alloyId9459.add($.__views.__alloyId9460);
    $.__views.__alloyId9461 = Ti.UI.createView({
        id: "__alloyId9461"
    });
    $.__views.__alloyId9461 && $.addTopLevelView($.__views.__alloyId9461);
    $.__views.__alloyId9462 = Ti.UI.createView({
        id: "__alloyId9462"
    });
    $.__views.__alloyId9461.add($.__views.__alloyId9462);
    $.__views.__alloyId9463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9463"
    });
    $.__views.__alloyId9462.add($.__views.__alloyId9463);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;