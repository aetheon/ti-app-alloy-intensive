function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_838";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_838 = Ti.UI.createView({
        id: "widget_838"
    });
    $.__views.widget_838 && $.addTopLevelView($.__views.widget_838);
    $.__views.__alloyId21372 = Ti.UI.createView({
        id: "__alloyId21372"
    });
    $.__views.widget_838.add($.__views.__alloyId21372);
    $.__views.__alloyId21373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21373"
    });
    $.__views.__alloyId21372.add($.__views.__alloyId21373);
    $.__views.__alloyId21374 = Ti.UI.createView({
        id: "__alloyId21374"
    });
    $.__views.__alloyId21374 && $.addTopLevelView($.__views.__alloyId21374);
    $.__views.__alloyId21375 = Ti.UI.createView({
        id: "__alloyId21375"
    });
    $.__views.__alloyId21374.add($.__views.__alloyId21375);
    $.__views.__alloyId21376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21376"
    });
    $.__views.__alloyId21375.add($.__views.__alloyId21376);
    $.__views.__alloyId21377 = Ti.UI.createView({
        id: "__alloyId21377"
    });
    $.__views.__alloyId21377 && $.addTopLevelView($.__views.__alloyId21377);
    $.__views.__alloyId21378 = Ti.UI.createView({
        id: "__alloyId21378"
    });
    $.__views.__alloyId21377.add($.__views.__alloyId21378);
    $.__views.__alloyId21379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21379"
    });
    $.__views.__alloyId21378.add($.__views.__alloyId21379);
    $.__views.__alloyId21380 = Ti.UI.createView({
        id: "__alloyId21380"
    });
    $.__views.__alloyId21380 && $.addTopLevelView($.__views.__alloyId21380);
    $.__views.__alloyId21381 = Ti.UI.createView({
        id: "__alloyId21381"
    });
    $.__views.__alloyId21380.add($.__views.__alloyId21381);
    $.__views.__alloyId21382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21382"
    });
    $.__views.__alloyId21381.add($.__views.__alloyId21382);
    $.__views.__alloyId21383 = Ti.UI.createView({
        id: "__alloyId21383"
    });
    $.__views.__alloyId21383 && $.addTopLevelView($.__views.__alloyId21383);
    $.__views.__alloyId21384 = Ti.UI.createView({
        id: "__alloyId21384"
    });
    $.__views.__alloyId21383.add($.__views.__alloyId21384);
    $.__views.__alloyId21385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21385"
    });
    $.__views.__alloyId21384.add($.__views.__alloyId21385);
    $.__views.__alloyId21386 = Ti.UI.createView({
        id: "__alloyId21386"
    });
    $.__views.__alloyId21386 && $.addTopLevelView($.__views.__alloyId21386);
    $.__views.__alloyId21387 = Ti.UI.createView({
        id: "__alloyId21387"
    });
    $.__views.__alloyId21386.add($.__views.__alloyId21387);
    $.__views.__alloyId21388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21388"
    });
    $.__views.__alloyId21387.add($.__views.__alloyId21388);
    $.__views.__alloyId21389 = Ti.UI.createView({
        id: "__alloyId21389"
    });
    $.__views.__alloyId21389 && $.addTopLevelView($.__views.__alloyId21389);
    $.__views.__alloyId21390 = Ti.UI.createView({
        id: "__alloyId21390"
    });
    $.__views.__alloyId21389.add($.__views.__alloyId21390);
    $.__views.__alloyId21391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21391"
    });
    $.__views.__alloyId21390.add($.__views.__alloyId21391);
    $.__views.__alloyId21392 = Ti.UI.createView({
        id: "__alloyId21392"
    });
    $.__views.__alloyId21392 && $.addTopLevelView($.__views.__alloyId21392);
    $.__views.__alloyId21393 = Ti.UI.createView({
        id: "__alloyId21393"
    });
    $.__views.__alloyId21392.add($.__views.__alloyId21393);
    $.__views.__alloyId21394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21394"
    });
    $.__views.__alloyId21393.add($.__views.__alloyId21394);
    $.__views.__alloyId21395 = Ti.UI.createView({
        id: "__alloyId21395"
    });
    $.__views.__alloyId21395 && $.addTopLevelView($.__views.__alloyId21395);
    $.__views.__alloyId21396 = Ti.UI.createView({
        id: "__alloyId21396"
    });
    $.__views.__alloyId21395.add($.__views.__alloyId21396);
    $.__views.__alloyId21397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21397"
    });
    $.__views.__alloyId21396.add($.__views.__alloyId21397);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;