function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_286";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_286 = Ti.UI.createView({
        id: "widget_286"
    });
    $.__views.widget_286 && $.addTopLevelView($.__views.widget_286);
    $.__views.__alloyId5434 = Ti.UI.createView({
        id: "__alloyId5434"
    });
    $.__views.widget_286.add($.__views.__alloyId5434);
    $.__views.__alloyId5435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5435"
    });
    $.__views.__alloyId5434.add($.__views.__alloyId5435);
    $.__views.__alloyId5436 = Ti.UI.createView({
        id: "__alloyId5436"
    });
    $.__views.__alloyId5436 && $.addTopLevelView($.__views.__alloyId5436);
    $.__views.__alloyId5437 = Ti.UI.createView({
        id: "__alloyId5437"
    });
    $.__views.__alloyId5436.add($.__views.__alloyId5437);
    $.__views.__alloyId5438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5438"
    });
    $.__views.__alloyId5437.add($.__views.__alloyId5438);
    $.__views.__alloyId5439 = Ti.UI.createView({
        id: "__alloyId5439"
    });
    $.__views.__alloyId5439 && $.addTopLevelView($.__views.__alloyId5439);
    $.__views.__alloyId5440 = Ti.UI.createView({
        id: "__alloyId5440"
    });
    $.__views.__alloyId5439.add($.__views.__alloyId5440);
    $.__views.__alloyId5441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5441"
    });
    $.__views.__alloyId5440.add($.__views.__alloyId5441);
    $.__views.__alloyId5442 = Ti.UI.createView({
        id: "__alloyId5442"
    });
    $.__views.__alloyId5442 && $.addTopLevelView($.__views.__alloyId5442);
    $.__views.__alloyId5443 = Ti.UI.createView({
        id: "__alloyId5443"
    });
    $.__views.__alloyId5442.add($.__views.__alloyId5443);
    $.__views.__alloyId5444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5444"
    });
    $.__views.__alloyId5443.add($.__views.__alloyId5444);
    $.__views.__alloyId5445 = Ti.UI.createView({
        id: "__alloyId5445"
    });
    $.__views.__alloyId5445 && $.addTopLevelView($.__views.__alloyId5445);
    $.__views.__alloyId5446 = Ti.UI.createView({
        id: "__alloyId5446"
    });
    $.__views.__alloyId5445.add($.__views.__alloyId5446);
    $.__views.__alloyId5447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5447"
    });
    $.__views.__alloyId5446.add($.__views.__alloyId5447);
    $.__views.__alloyId5448 = Ti.UI.createView({
        id: "__alloyId5448"
    });
    $.__views.__alloyId5448 && $.addTopLevelView($.__views.__alloyId5448);
    $.__views.__alloyId5449 = Ti.UI.createView({
        id: "__alloyId5449"
    });
    $.__views.__alloyId5448.add($.__views.__alloyId5449);
    $.__views.__alloyId5450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5450"
    });
    $.__views.__alloyId5449.add($.__views.__alloyId5450);
    $.__views.__alloyId5451 = Ti.UI.createView({
        id: "__alloyId5451"
    });
    $.__views.__alloyId5451 && $.addTopLevelView($.__views.__alloyId5451);
    $.__views.__alloyId5452 = Ti.UI.createView({
        id: "__alloyId5452"
    });
    $.__views.__alloyId5451.add($.__views.__alloyId5452);
    $.__views.__alloyId5453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5453"
    });
    $.__views.__alloyId5452.add($.__views.__alloyId5453);
    $.__views.__alloyId5454 = Ti.UI.createView({
        id: "__alloyId5454"
    });
    $.__views.__alloyId5454 && $.addTopLevelView($.__views.__alloyId5454);
    $.__views.__alloyId5455 = Ti.UI.createView({
        id: "__alloyId5455"
    });
    $.__views.__alloyId5454.add($.__views.__alloyId5455);
    $.__views.__alloyId5456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5456"
    });
    $.__views.__alloyId5455.add($.__views.__alloyId5456);
    $.__views.__alloyId5457 = Ti.UI.createView({
        id: "__alloyId5457"
    });
    $.__views.__alloyId5457 && $.addTopLevelView($.__views.__alloyId5457);
    $.__views.__alloyId5458 = Ti.UI.createView({
        id: "__alloyId5458"
    });
    $.__views.__alloyId5457.add($.__views.__alloyId5458);
    $.__views.__alloyId5459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5459"
    });
    $.__views.__alloyId5458.add($.__views.__alloyId5459);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;