function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_806";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_806 = Ti.UI.createView({
        id: "widget_806"
    });
    $.__views.widget_806 && $.addTopLevelView($.__views.widget_806);
    $.__views.__alloyId20462 = Ti.UI.createView({
        id: "__alloyId20462"
    });
    $.__views.widget_806.add($.__views.__alloyId20462);
    $.__views.__alloyId20463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20463"
    });
    $.__views.__alloyId20462.add($.__views.__alloyId20463);
    $.__views.__alloyId20464 = Ti.UI.createView({
        id: "__alloyId20464"
    });
    $.__views.__alloyId20464 && $.addTopLevelView($.__views.__alloyId20464);
    $.__views.__alloyId20465 = Ti.UI.createView({
        id: "__alloyId20465"
    });
    $.__views.__alloyId20464.add($.__views.__alloyId20465);
    $.__views.__alloyId20466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20466"
    });
    $.__views.__alloyId20465.add($.__views.__alloyId20466);
    $.__views.__alloyId20467 = Ti.UI.createView({
        id: "__alloyId20467"
    });
    $.__views.__alloyId20467 && $.addTopLevelView($.__views.__alloyId20467);
    $.__views.__alloyId20468 = Ti.UI.createView({
        id: "__alloyId20468"
    });
    $.__views.__alloyId20467.add($.__views.__alloyId20468);
    $.__views.__alloyId20469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20469"
    });
    $.__views.__alloyId20468.add($.__views.__alloyId20469);
    $.__views.__alloyId20470 = Ti.UI.createView({
        id: "__alloyId20470"
    });
    $.__views.__alloyId20470 && $.addTopLevelView($.__views.__alloyId20470);
    $.__views.__alloyId20471 = Ti.UI.createView({
        id: "__alloyId20471"
    });
    $.__views.__alloyId20470.add($.__views.__alloyId20471);
    $.__views.__alloyId20472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20472"
    });
    $.__views.__alloyId20471.add($.__views.__alloyId20472);
    $.__views.__alloyId20473 = Ti.UI.createView({
        id: "__alloyId20473"
    });
    $.__views.__alloyId20473 && $.addTopLevelView($.__views.__alloyId20473);
    $.__views.__alloyId20474 = Ti.UI.createView({
        id: "__alloyId20474"
    });
    $.__views.__alloyId20473.add($.__views.__alloyId20474);
    $.__views.__alloyId20475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20475"
    });
    $.__views.__alloyId20474.add($.__views.__alloyId20475);
    $.__views.__alloyId20476 = Ti.UI.createView({
        id: "__alloyId20476"
    });
    $.__views.__alloyId20476 && $.addTopLevelView($.__views.__alloyId20476);
    $.__views.__alloyId20477 = Ti.UI.createView({
        id: "__alloyId20477"
    });
    $.__views.__alloyId20476.add($.__views.__alloyId20477);
    $.__views.__alloyId20478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20478"
    });
    $.__views.__alloyId20477.add($.__views.__alloyId20478);
    $.__views.__alloyId20479 = Ti.UI.createView({
        id: "__alloyId20479"
    });
    $.__views.__alloyId20479 && $.addTopLevelView($.__views.__alloyId20479);
    $.__views.__alloyId20480 = Ti.UI.createView({
        id: "__alloyId20480"
    });
    $.__views.__alloyId20479.add($.__views.__alloyId20480);
    $.__views.__alloyId20481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20481"
    });
    $.__views.__alloyId20480.add($.__views.__alloyId20481);
    $.__views.__alloyId20482 = Ti.UI.createView({
        id: "__alloyId20482"
    });
    $.__views.__alloyId20482 && $.addTopLevelView($.__views.__alloyId20482);
    $.__views.__alloyId20483 = Ti.UI.createView({
        id: "__alloyId20483"
    });
    $.__views.__alloyId20482.add($.__views.__alloyId20483);
    $.__views.__alloyId20484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20484"
    });
    $.__views.__alloyId20483.add($.__views.__alloyId20484);
    $.__views.__alloyId20485 = Ti.UI.createView({
        id: "__alloyId20485"
    });
    $.__views.__alloyId20485 && $.addTopLevelView($.__views.__alloyId20485);
    $.__views.__alloyId20486 = Ti.UI.createView({
        id: "__alloyId20486"
    });
    $.__views.__alloyId20485.add($.__views.__alloyId20486);
    $.__views.__alloyId20487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20487"
    });
    $.__views.__alloyId20486.add($.__views.__alloyId20487);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;