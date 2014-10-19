function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_529";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_529 = Ti.UI.createView({
        id: "widget_529"
    });
    $.__views.widget_529 && $.addTopLevelView($.__views.widget_529);
    $.__views.__alloyId12454 = Ti.UI.createView({
        id: "__alloyId12454"
    });
    $.__views.widget_529.add($.__views.__alloyId12454);
    $.__views.__alloyId12455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12455"
    });
    $.__views.__alloyId12454.add($.__views.__alloyId12455);
    $.__views.__alloyId12456 = Ti.UI.createView({
        id: "__alloyId12456"
    });
    $.__views.__alloyId12456 && $.addTopLevelView($.__views.__alloyId12456);
    $.__views.__alloyId12457 = Ti.UI.createView({
        id: "__alloyId12457"
    });
    $.__views.__alloyId12456.add($.__views.__alloyId12457);
    $.__views.__alloyId12458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12458"
    });
    $.__views.__alloyId12457.add($.__views.__alloyId12458);
    $.__views.__alloyId12459 = Ti.UI.createView({
        id: "__alloyId12459"
    });
    $.__views.__alloyId12459 && $.addTopLevelView($.__views.__alloyId12459);
    $.__views.__alloyId12460 = Ti.UI.createView({
        id: "__alloyId12460"
    });
    $.__views.__alloyId12459.add($.__views.__alloyId12460);
    $.__views.__alloyId12461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12461"
    });
    $.__views.__alloyId12460.add($.__views.__alloyId12461);
    $.__views.__alloyId12462 = Ti.UI.createView({
        id: "__alloyId12462"
    });
    $.__views.__alloyId12462 && $.addTopLevelView($.__views.__alloyId12462);
    $.__views.__alloyId12463 = Ti.UI.createView({
        id: "__alloyId12463"
    });
    $.__views.__alloyId12462.add($.__views.__alloyId12463);
    $.__views.__alloyId12464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12464"
    });
    $.__views.__alloyId12463.add($.__views.__alloyId12464);
    $.__views.__alloyId12465 = Ti.UI.createView({
        id: "__alloyId12465"
    });
    $.__views.__alloyId12465 && $.addTopLevelView($.__views.__alloyId12465);
    $.__views.__alloyId12466 = Ti.UI.createView({
        id: "__alloyId12466"
    });
    $.__views.__alloyId12465.add($.__views.__alloyId12466);
    $.__views.__alloyId12467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12467"
    });
    $.__views.__alloyId12466.add($.__views.__alloyId12467);
    $.__views.__alloyId12468 = Ti.UI.createView({
        id: "__alloyId12468"
    });
    $.__views.__alloyId12468 && $.addTopLevelView($.__views.__alloyId12468);
    $.__views.__alloyId12469 = Ti.UI.createView({
        id: "__alloyId12469"
    });
    $.__views.__alloyId12468.add($.__views.__alloyId12469);
    $.__views.__alloyId12470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12470"
    });
    $.__views.__alloyId12469.add($.__views.__alloyId12470);
    $.__views.__alloyId12471 = Ti.UI.createView({
        id: "__alloyId12471"
    });
    $.__views.__alloyId12471 && $.addTopLevelView($.__views.__alloyId12471);
    $.__views.__alloyId12472 = Ti.UI.createView({
        id: "__alloyId12472"
    });
    $.__views.__alloyId12471.add($.__views.__alloyId12472);
    $.__views.__alloyId12473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12473"
    });
    $.__views.__alloyId12472.add($.__views.__alloyId12473);
    $.__views.__alloyId12474 = Ti.UI.createView({
        id: "__alloyId12474"
    });
    $.__views.__alloyId12474 && $.addTopLevelView($.__views.__alloyId12474);
    $.__views.__alloyId12475 = Ti.UI.createView({
        id: "__alloyId12475"
    });
    $.__views.__alloyId12474.add($.__views.__alloyId12475);
    $.__views.__alloyId12476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12476"
    });
    $.__views.__alloyId12475.add($.__views.__alloyId12476);
    $.__views.__alloyId12477 = Ti.UI.createView({
        id: "__alloyId12477"
    });
    $.__views.__alloyId12477 && $.addTopLevelView($.__views.__alloyId12477);
    $.__views.__alloyId12478 = Ti.UI.createView({
        id: "__alloyId12478"
    });
    $.__views.__alloyId12477.add($.__views.__alloyId12478);
    $.__views.__alloyId12479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12479"
    });
    $.__views.__alloyId12478.add($.__views.__alloyId12479);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;