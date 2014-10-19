function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_840";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_840 = Ti.UI.createView({
        id: "widget_840"
    });
    $.__views.widget_840 && $.addTopLevelView($.__views.widget_840);
    $.__views.__alloyId21450 = Ti.UI.createView({
        id: "__alloyId21450"
    });
    $.__views.widget_840.add($.__views.__alloyId21450);
    $.__views.__alloyId21451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21451"
    });
    $.__views.__alloyId21450.add($.__views.__alloyId21451);
    $.__views.__alloyId21452 = Ti.UI.createView({
        id: "__alloyId21452"
    });
    $.__views.__alloyId21452 && $.addTopLevelView($.__views.__alloyId21452);
    $.__views.__alloyId21453 = Ti.UI.createView({
        id: "__alloyId21453"
    });
    $.__views.__alloyId21452.add($.__views.__alloyId21453);
    $.__views.__alloyId21454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21454"
    });
    $.__views.__alloyId21453.add($.__views.__alloyId21454);
    $.__views.__alloyId21455 = Ti.UI.createView({
        id: "__alloyId21455"
    });
    $.__views.__alloyId21455 && $.addTopLevelView($.__views.__alloyId21455);
    $.__views.__alloyId21456 = Ti.UI.createView({
        id: "__alloyId21456"
    });
    $.__views.__alloyId21455.add($.__views.__alloyId21456);
    $.__views.__alloyId21457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21457"
    });
    $.__views.__alloyId21456.add($.__views.__alloyId21457);
    $.__views.__alloyId21458 = Ti.UI.createView({
        id: "__alloyId21458"
    });
    $.__views.__alloyId21458 && $.addTopLevelView($.__views.__alloyId21458);
    $.__views.__alloyId21459 = Ti.UI.createView({
        id: "__alloyId21459"
    });
    $.__views.__alloyId21458.add($.__views.__alloyId21459);
    $.__views.__alloyId21460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21460"
    });
    $.__views.__alloyId21459.add($.__views.__alloyId21460);
    $.__views.__alloyId21461 = Ti.UI.createView({
        id: "__alloyId21461"
    });
    $.__views.__alloyId21461 && $.addTopLevelView($.__views.__alloyId21461);
    $.__views.__alloyId21462 = Ti.UI.createView({
        id: "__alloyId21462"
    });
    $.__views.__alloyId21461.add($.__views.__alloyId21462);
    $.__views.__alloyId21463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21463"
    });
    $.__views.__alloyId21462.add($.__views.__alloyId21463);
    $.__views.__alloyId21464 = Ti.UI.createView({
        id: "__alloyId21464"
    });
    $.__views.__alloyId21464 && $.addTopLevelView($.__views.__alloyId21464);
    $.__views.__alloyId21465 = Ti.UI.createView({
        id: "__alloyId21465"
    });
    $.__views.__alloyId21464.add($.__views.__alloyId21465);
    $.__views.__alloyId21466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21466"
    });
    $.__views.__alloyId21465.add($.__views.__alloyId21466);
    $.__views.__alloyId21467 = Ti.UI.createView({
        id: "__alloyId21467"
    });
    $.__views.__alloyId21467 && $.addTopLevelView($.__views.__alloyId21467);
    $.__views.__alloyId21468 = Ti.UI.createView({
        id: "__alloyId21468"
    });
    $.__views.__alloyId21467.add($.__views.__alloyId21468);
    $.__views.__alloyId21469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21469"
    });
    $.__views.__alloyId21468.add($.__views.__alloyId21469);
    $.__views.__alloyId21470 = Ti.UI.createView({
        id: "__alloyId21470"
    });
    $.__views.__alloyId21470 && $.addTopLevelView($.__views.__alloyId21470);
    $.__views.__alloyId21471 = Ti.UI.createView({
        id: "__alloyId21471"
    });
    $.__views.__alloyId21470.add($.__views.__alloyId21471);
    $.__views.__alloyId21472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21472"
    });
    $.__views.__alloyId21471.add($.__views.__alloyId21472);
    $.__views.__alloyId21473 = Ti.UI.createView({
        id: "__alloyId21473"
    });
    $.__views.__alloyId21473 && $.addTopLevelView($.__views.__alloyId21473);
    $.__views.__alloyId21474 = Ti.UI.createView({
        id: "__alloyId21474"
    });
    $.__views.__alloyId21473.add($.__views.__alloyId21474);
    $.__views.__alloyId21475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21475"
    });
    $.__views.__alloyId21474.add($.__views.__alloyId21475);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;