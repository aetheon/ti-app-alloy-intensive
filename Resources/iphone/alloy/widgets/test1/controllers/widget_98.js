function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_98";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_98 = Ti.UI.createView({
        id: "widget_98"
    });
    $.__views.widget_98 && $.addTopLevelView($.__views.widget_98);
    $.__views.__alloyId25454 = Ti.UI.createView({
        id: "__alloyId25454"
    });
    $.__views.widget_98.add($.__views.__alloyId25454);
    $.__views.__alloyId25455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25455"
    });
    $.__views.__alloyId25454.add($.__views.__alloyId25455);
    $.__views.__alloyId25456 = Ti.UI.createView({
        id: "__alloyId25456"
    });
    $.__views.__alloyId25456 && $.addTopLevelView($.__views.__alloyId25456);
    $.__views.__alloyId25457 = Ti.UI.createView({
        id: "__alloyId25457"
    });
    $.__views.__alloyId25456.add($.__views.__alloyId25457);
    $.__views.__alloyId25458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25458"
    });
    $.__views.__alloyId25457.add($.__views.__alloyId25458);
    $.__views.__alloyId25459 = Ti.UI.createView({
        id: "__alloyId25459"
    });
    $.__views.__alloyId25459 && $.addTopLevelView($.__views.__alloyId25459);
    $.__views.__alloyId25460 = Ti.UI.createView({
        id: "__alloyId25460"
    });
    $.__views.__alloyId25459.add($.__views.__alloyId25460);
    $.__views.__alloyId25461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25461"
    });
    $.__views.__alloyId25460.add($.__views.__alloyId25461);
    $.__views.__alloyId25462 = Ti.UI.createView({
        id: "__alloyId25462"
    });
    $.__views.__alloyId25462 && $.addTopLevelView($.__views.__alloyId25462);
    $.__views.__alloyId25463 = Ti.UI.createView({
        id: "__alloyId25463"
    });
    $.__views.__alloyId25462.add($.__views.__alloyId25463);
    $.__views.__alloyId25464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25464"
    });
    $.__views.__alloyId25463.add($.__views.__alloyId25464);
    $.__views.__alloyId25465 = Ti.UI.createView({
        id: "__alloyId25465"
    });
    $.__views.__alloyId25465 && $.addTopLevelView($.__views.__alloyId25465);
    $.__views.__alloyId25466 = Ti.UI.createView({
        id: "__alloyId25466"
    });
    $.__views.__alloyId25465.add($.__views.__alloyId25466);
    $.__views.__alloyId25467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25467"
    });
    $.__views.__alloyId25466.add($.__views.__alloyId25467);
    $.__views.__alloyId25468 = Ti.UI.createView({
        id: "__alloyId25468"
    });
    $.__views.__alloyId25468 && $.addTopLevelView($.__views.__alloyId25468);
    $.__views.__alloyId25469 = Ti.UI.createView({
        id: "__alloyId25469"
    });
    $.__views.__alloyId25468.add($.__views.__alloyId25469);
    $.__views.__alloyId25470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25470"
    });
    $.__views.__alloyId25469.add($.__views.__alloyId25470);
    $.__views.__alloyId25471 = Ti.UI.createView({
        id: "__alloyId25471"
    });
    $.__views.__alloyId25471 && $.addTopLevelView($.__views.__alloyId25471);
    $.__views.__alloyId25472 = Ti.UI.createView({
        id: "__alloyId25472"
    });
    $.__views.__alloyId25471.add($.__views.__alloyId25472);
    $.__views.__alloyId25473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25473"
    });
    $.__views.__alloyId25472.add($.__views.__alloyId25473);
    $.__views.__alloyId25474 = Ti.UI.createView({
        id: "__alloyId25474"
    });
    $.__views.__alloyId25474 && $.addTopLevelView($.__views.__alloyId25474);
    $.__views.__alloyId25475 = Ti.UI.createView({
        id: "__alloyId25475"
    });
    $.__views.__alloyId25474.add($.__views.__alloyId25475);
    $.__views.__alloyId25476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25476"
    });
    $.__views.__alloyId25475.add($.__views.__alloyId25476);
    $.__views.__alloyId25477 = Ti.UI.createView({
        id: "__alloyId25477"
    });
    $.__views.__alloyId25477 && $.addTopLevelView($.__views.__alloyId25477);
    $.__views.__alloyId25478 = Ti.UI.createView({
        id: "__alloyId25478"
    });
    $.__views.__alloyId25477.add($.__views.__alloyId25478);
    $.__views.__alloyId25479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25479"
    });
    $.__views.__alloyId25478.add($.__views.__alloyId25479);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;