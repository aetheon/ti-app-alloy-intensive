function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_251";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_251 = Ti.UI.createView({
        id: "widget_251"
    });
    $.__views.widget_251 && $.addTopLevelView($.__views.widget_251);
    $.__views.__alloyId4446 = Ti.UI.createView({
        id: "__alloyId4446"
    });
    $.__views.widget_251.add($.__views.__alloyId4446);
    $.__views.__alloyId4447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4447"
    });
    $.__views.__alloyId4446.add($.__views.__alloyId4447);
    $.__views.__alloyId4448 = Ti.UI.createView({
        id: "__alloyId4448"
    });
    $.__views.__alloyId4448 && $.addTopLevelView($.__views.__alloyId4448);
    $.__views.__alloyId4449 = Ti.UI.createView({
        id: "__alloyId4449"
    });
    $.__views.__alloyId4448.add($.__views.__alloyId4449);
    $.__views.__alloyId4450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4450"
    });
    $.__views.__alloyId4449.add($.__views.__alloyId4450);
    $.__views.__alloyId4451 = Ti.UI.createView({
        id: "__alloyId4451"
    });
    $.__views.__alloyId4451 && $.addTopLevelView($.__views.__alloyId4451);
    $.__views.__alloyId4452 = Ti.UI.createView({
        id: "__alloyId4452"
    });
    $.__views.__alloyId4451.add($.__views.__alloyId4452);
    $.__views.__alloyId4453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4453"
    });
    $.__views.__alloyId4452.add($.__views.__alloyId4453);
    $.__views.__alloyId4454 = Ti.UI.createView({
        id: "__alloyId4454"
    });
    $.__views.__alloyId4454 && $.addTopLevelView($.__views.__alloyId4454);
    $.__views.__alloyId4455 = Ti.UI.createView({
        id: "__alloyId4455"
    });
    $.__views.__alloyId4454.add($.__views.__alloyId4455);
    $.__views.__alloyId4456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4456"
    });
    $.__views.__alloyId4455.add($.__views.__alloyId4456);
    $.__views.__alloyId4457 = Ti.UI.createView({
        id: "__alloyId4457"
    });
    $.__views.__alloyId4457 && $.addTopLevelView($.__views.__alloyId4457);
    $.__views.__alloyId4458 = Ti.UI.createView({
        id: "__alloyId4458"
    });
    $.__views.__alloyId4457.add($.__views.__alloyId4458);
    $.__views.__alloyId4459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4459"
    });
    $.__views.__alloyId4458.add($.__views.__alloyId4459);
    $.__views.__alloyId4460 = Ti.UI.createView({
        id: "__alloyId4460"
    });
    $.__views.__alloyId4460 && $.addTopLevelView($.__views.__alloyId4460);
    $.__views.__alloyId4461 = Ti.UI.createView({
        id: "__alloyId4461"
    });
    $.__views.__alloyId4460.add($.__views.__alloyId4461);
    $.__views.__alloyId4462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4462"
    });
    $.__views.__alloyId4461.add($.__views.__alloyId4462);
    $.__views.__alloyId4463 = Ti.UI.createView({
        id: "__alloyId4463"
    });
    $.__views.__alloyId4463 && $.addTopLevelView($.__views.__alloyId4463);
    $.__views.__alloyId4464 = Ti.UI.createView({
        id: "__alloyId4464"
    });
    $.__views.__alloyId4463.add($.__views.__alloyId4464);
    $.__views.__alloyId4465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4465"
    });
    $.__views.__alloyId4464.add($.__views.__alloyId4465);
    $.__views.__alloyId4466 = Ti.UI.createView({
        id: "__alloyId4466"
    });
    $.__views.__alloyId4466 && $.addTopLevelView($.__views.__alloyId4466);
    $.__views.__alloyId4467 = Ti.UI.createView({
        id: "__alloyId4467"
    });
    $.__views.__alloyId4466.add($.__views.__alloyId4467);
    $.__views.__alloyId4468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4468"
    });
    $.__views.__alloyId4467.add($.__views.__alloyId4468);
    $.__views.__alloyId4469 = Ti.UI.createView({
        id: "__alloyId4469"
    });
    $.__views.__alloyId4469 && $.addTopLevelView($.__views.__alloyId4469);
    $.__views.__alloyId4470 = Ti.UI.createView({
        id: "__alloyId4470"
    });
    $.__views.__alloyId4469.add($.__views.__alloyId4470);
    $.__views.__alloyId4471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4471"
    });
    $.__views.__alloyId4470.add($.__views.__alloyId4471);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;