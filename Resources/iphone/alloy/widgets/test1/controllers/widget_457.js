function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_457";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_457 = Ti.UI.createView({
        id: "widget_457"
    });
    $.__views.widget_457 && $.addTopLevelView($.__views.widget_457);
    $.__views.__alloyId10374 = Ti.UI.createView({
        id: "__alloyId10374"
    });
    $.__views.widget_457.add($.__views.__alloyId10374);
    $.__views.__alloyId10375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10375"
    });
    $.__views.__alloyId10374.add($.__views.__alloyId10375);
    $.__views.__alloyId10376 = Ti.UI.createView({
        id: "__alloyId10376"
    });
    $.__views.__alloyId10376 && $.addTopLevelView($.__views.__alloyId10376);
    $.__views.__alloyId10377 = Ti.UI.createView({
        id: "__alloyId10377"
    });
    $.__views.__alloyId10376.add($.__views.__alloyId10377);
    $.__views.__alloyId10378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10378"
    });
    $.__views.__alloyId10377.add($.__views.__alloyId10378);
    $.__views.__alloyId10379 = Ti.UI.createView({
        id: "__alloyId10379"
    });
    $.__views.__alloyId10379 && $.addTopLevelView($.__views.__alloyId10379);
    $.__views.__alloyId10380 = Ti.UI.createView({
        id: "__alloyId10380"
    });
    $.__views.__alloyId10379.add($.__views.__alloyId10380);
    $.__views.__alloyId10381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10381"
    });
    $.__views.__alloyId10380.add($.__views.__alloyId10381);
    $.__views.__alloyId10382 = Ti.UI.createView({
        id: "__alloyId10382"
    });
    $.__views.__alloyId10382 && $.addTopLevelView($.__views.__alloyId10382);
    $.__views.__alloyId10383 = Ti.UI.createView({
        id: "__alloyId10383"
    });
    $.__views.__alloyId10382.add($.__views.__alloyId10383);
    $.__views.__alloyId10384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10384"
    });
    $.__views.__alloyId10383.add($.__views.__alloyId10384);
    $.__views.__alloyId10385 = Ti.UI.createView({
        id: "__alloyId10385"
    });
    $.__views.__alloyId10385 && $.addTopLevelView($.__views.__alloyId10385);
    $.__views.__alloyId10386 = Ti.UI.createView({
        id: "__alloyId10386"
    });
    $.__views.__alloyId10385.add($.__views.__alloyId10386);
    $.__views.__alloyId10387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10387"
    });
    $.__views.__alloyId10386.add($.__views.__alloyId10387);
    $.__views.__alloyId10388 = Ti.UI.createView({
        id: "__alloyId10388"
    });
    $.__views.__alloyId10388 && $.addTopLevelView($.__views.__alloyId10388);
    $.__views.__alloyId10389 = Ti.UI.createView({
        id: "__alloyId10389"
    });
    $.__views.__alloyId10388.add($.__views.__alloyId10389);
    $.__views.__alloyId10390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10390"
    });
    $.__views.__alloyId10389.add($.__views.__alloyId10390);
    $.__views.__alloyId10391 = Ti.UI.createView({
        id: "__alloyId10391"
    });
    $.__views.__alloyId10391 && $.addTopLevelView($.__views.__alloyId10391);
    $.__views.__alloyId10392 = Ti.UI.createView({
        id: "__alloyId10392"
    });
    $.__views.__alloyId10391.add($.__views.__alloyId10392);
    $.__views.__alloyId10393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10393"
    });
    $.__views.__alloyId10392.add($.__views.__alloyId10393);
    $.__views.__alloyId10394 = Ti.UI.createView({
        id: "__alloyId10394"
    });
    $.__views.__alloyId10394 && $.addTopLevelView($.__views.__alloyId10394);
    $.__views.__alloyId10395 = Ti.UI.createView({
        id: "__alloyId10395"
    });
    $.__views.__alloyId10394.add($.__views.__alloyId10395);
    $.__views.__alloyId10396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10396"
    });
    $.__views.__alloyId10395.add($.__views.__alloyId10396);
    $.__views.__alloyId10397 = Ti.UI.createView({
        id: "__alloyId10397"
    });
    $.__views.__alloyId10397 && $.addTopLevelView($.__views.__alloyId10397);
    $.__views.__alloyId10398 = Ti.UI.createView({
        id: "__alloyId10398"
    });
    $.__views.__alloyId10397.add($.__views.__alloyId10398);
    $.__views.__alloyId10399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10399"
    });
    $.__views.__alloyId10398.add($.__views.__alloyId10399);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;