function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_91";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_91 = Ti.UI.createView({
        id: "widget_91"
    });
    $.__views.widget_91 && $.addTopLevelView($.__views.widget_91);
    $.__views.__alloyId23452 = Ti.UI.createView({
        id: "__alloyId23452"
    });
    $.__views.widget_91.add($.__views.__alloyId23452);
    $.__views.__alloyId23453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23453"
    });
    $.__views.__alloyId23452.add($.__views.__alloyId23453);
    $.__views.__alloyId23454 = Ti.UI.createView({
        id: "__alloyId23454"
    });
    $.__views.__alloyId23454 && $.addTopLevelView($.__views.__alloyId23454);
    $.__views.__alloyId23455 = Ti.UI.createView({
        id: "__alloyId23455"
    });
    $.__views.__alloyId23454.add($.__views.__alloyId23455);
    $.__views.__alloyId23456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23456"
    });
    $.__views.__alloyId23455.add($.__views.__alloyId23456);
    $.__views.__alloyId23457 = Ti.UI.createView({
        id: "__alloyId23457"
    });
    $.__views.__alloyId23457 && $.addTopLevelView($.__views.__alloyId23457);
    $.__views.__alloyId23458 = Ti.UI.createView({
        id: "__alloyId23458"
    });
    $.__views.__alloyId23457.add($.__views.__alloyId23458);
    $.__views.__alloyId23459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23459"
    });
    $.__views.__alloyId23458.add($.__views.__alloyId23459);
    $.__views.__alloyId23460 = Ti.UI.createView({
        id: "__alloyId23460"
    });
    $.__views.__alloyId23460 && $.addTopLevelView($.__views.__alloyId23460);
    $.__views.__alloyId23461 = Ti.UI.createView({
        id: "__alloyId23461"
    });
    $.__views.__alloyId23460.add($.__views.__alloyId23461);
    $.__views.__alloyId23462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23462"
    });
    $.__views.__alloyId23461.add($.__views.__alloyId23462);
    $.__views.__alloyId23463 = Ti.UI.createView({
        id: "__alloyId23463"
    });
    $.__views.__alloyId23463 && $.addTopLevelView($.__views.__alloyId23463);
    $.__views.__alloyId23464 = Ti.UI.createView({
        id: "__alloyId23464"
    });
    $.__views.__alloyId23463.add($.__views.__alloyId23464);
    $.__views.__alloyId23465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23465"
    });
    $.__views.__alloyId23464.add($.__views.__alloyId23465);
    $.__views.__alloyId23466 = Ti.UI.createView({
        id: "__alloyId23466"
    });
    $.__views.__alloyId23466 && $.addTopLevelView($.__views.__alloyId23466);
    $.__views.__alloyId23467 = Ti.UI.createView({
        id: "__alloyId23467"
    });
    $.__views.__alloyId23466.add($.__views.__alloyId23467);
    $.__views.__alloyId23468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23468"
    });
    $.__views.__alloyId23467.add($.__views.__alloyId23468);
    $.__views.__alloyId23469 = Ti.UI.createView({
        id: "__alloyId23469"
    });
    $.__views.__alloyId23469 && $.addTopLevelView($.__views.__alloyId23469);
    $.__views.__alloyId23470 = Ti.UI.createView({
        id: "__alloyId23470"
    });
    $.__views.__alloyId23469.add($.__views.__alloyId23470);
    $.__views.__alloyId23471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23471"
    });
    $.__views.__alloyId23470.add($.__views.__alloyId23471);
    $.__views.__alloyId23472 = Ti.UI.createView({
        id: "__alloyId23472"
    });
    $.__views.__alloyId23472 && $.addTopLevelView($.__views.__alloyId23472);
    $.__views.__alloyId23473 = Ti.UI.createView({
        id: "__alloyId23473"
    });
    $.__views.__alloyId23472.add($.__views.__alloyId23473);
    $.__views.__alloyId23474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23474"
    });
    $.__views.__alloyId23473.add($.__views.__alloyId23474);
    $.__views.__alloyId23475 = Ti.UI.createView({
        id: "__alloyId23475"
    });
    $.__views.__alloyId23475 && $.addTopLevelView($.__views.__alloyId23475);
    $.__views.__alloyId23476 = Ti.UI.createView({
        id: "__alloyId23476"
    });
    $.__views.__alloyId23475.add($.__views.__alloyId23476);
    $.__views.__alloyId23477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23477"
    });
    $.__views.__alloyId23476.add($.__views.__alloyId23477);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;