function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_249";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_249 = Ti.UI.createView({
        id: "widget_249"
    });
    $.__views.widget_249 && $.addTopLevelView($.__views.widget_249);
    $.__views.__alloyId4368 = Ti.UI.createView({
        id: "__alloyId4368"
    });
    $.__views.widget_249.add($.__views.__alloyId4368);
    $.__views.__alloyId4369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4369"
    });
    $.__views.__alloyId4368.add($.__views.__alloyId4369);
    $.__views.__alloyId4370 = Ti.UI.createView({
        id: "__alloyId4370"
    });
    $.__views.__alloyId4370 && $.addTopLevelView($.__views.__alloyId4370);
    $.__views.__alloyId4371 = Ti.UI.createView({
        id: "__alloyId4371"
    });
    $.__views.__alloyId4370.add($.__views.__alloyId4371);
    $.__views.__alloyId4372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4372"
    });
    $.__views.__alloyId4371.add($.__views.__alloyId4372);
    $.__views.__alloyId4373 = Ti.UI.createView({
        id: "__alloyId4373"
    });
    $.__views.__alloyId4373 && $.addTopLevelView($.__views.__alloyId4373);
    $.__views.__alloyId4374 = Ti.UI.createView({
        id: "__alloyId4374"
    });
    $.__views.__alloyId4373.add($.__views.__alloyId4374);
    $.__views.__alloyId4375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4375"
    });
    $.__views.__alloyId4374.add($.__views.__alloyId4375);
    $.__views.__alloyId4376 = Ti.UI.createView({
        id: "__alloyId4376"
    });
    $.__views.__alloyId4376 && $.addTopLevelView($.__views.__alloyId4376);
    $.__views.__alloyId4377 = Ti.UI.createView({
        id: "__alloyId4377"
    });
    $.__views.__alloyId4376.add($.__views.__alloyId4377);
    $.__views.__alloyId4378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4378"
    });
    $.__views.__alloyId4377.add($.__views.__alloyId4378);
    $.__views.__alloyId4379 = Ti.UI.createView({
        id: "__alloyId4379"
    });
    $.__views.__alloyId4379 && $.addTopLevelView($.__views.__alloyId4379);
    $.__views.__alloyId4380 = Ti.UI.createView({
        id: "__alloyId4380"
    });
    $.__views.__alloyId4379.add($.__views.__alloyId4380);
    $.__views.__alloyId4381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4381"
    });
    $.__views.__alloyId4380.add($.__views.__alloyId4381);
    $.__views.__alloyId4382 = Ti.UI.createView({
        id: "__alloyId4382"
    });
    $.__views.__alloyId4382 && $.addTopLevelView($.__views.__alloyId4382);
    $.__views.__alloyId4383 = Ti.UI.createView({
        id: "__alloyId4383"
    });
    $.__views.__alloyId4382.add($.__views.__alloyId4383);
    $.__views.__alloyId4384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4384"
    });
    $.__views.__alloyId4383.add($.__views.__alloyId4384);
    $.__views.__alloyId4385 = Ti.UI.createView({
        id: "__alloyId4385"
    });
    $.__views.__alloyId4385 && $.addTopLevelView($.__views.__alloyId4385);
    $.__views.__alloyId4386 = Ti.UI.createView({
        id: "__alloyId4386"
    });
    $.__views.__alloyId4385.add($.__views.__alloyId4386);
    $.__views.__alloyId4387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4387"
    });
    $.__views.__alloyId4386.add($.__views.__alloyId4387);
    $.__views.__alloyId4388 = Ti.UI.createView({
        id: "__alloyId4388"
    });
    $.__views.__alloyId4388 && $.addTopLevelView($.__views.__alloyId4388);
    $.__views.__alloyId4389 = Ti.UI.createView({
        id: "__alloyId4389"
    });
    $.__views.__alloyId4388.add($.__views.__alloyId4389);
    $.__views.__alloyId4390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4390"
    });
    $.__views.__alloyId4389.add($.__views.__alloyId4390);
    $.__views.__alloyId4391 = Ti.UI.createView({
        id: "__alloyId4391"
    });
    $.__views.__alloyId4391 && $.addTopLevelView($.__views.__alloyId4391);
    $.__views.__alloyId4392 = Ti.UI.createView({
        id: "__alloyId4392"
    });
    $.__views.__alloyId4391.add($.__views.__alloyId4392);
    $.__views.__alloyId4393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4393"
    });
    $.__views.__alloyId4392.add($.__views.__alloyId4393);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;