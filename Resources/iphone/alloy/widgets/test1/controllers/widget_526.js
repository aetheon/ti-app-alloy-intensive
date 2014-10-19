function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_526";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_526 = Ti.UI.createView({
        id: "widget_526"
    });
    $.__views.widget_526 && $.addTopLevelView($.__views.widget_526);
    $.__views.__alloyId12376 = Ti.UI.createView({
        id: "__alloyId12376"
    });
    $.__views.widget_526.add($.__views.__alloyId12376);
    $.__views.__alloyId12377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12377"
    });
    $.__views.__alloyId12376.add($.__views.__alloyId12377);
    $.__views.__alloyId12378 = Ti.UI.createView({
        id: "__alloyId12378"
    });
    $.__views.__alloyId12378 && $.addTopLevelView($.__views.__alloyId12378);
    $.__views.__alloyId12379 = Ti.UI.createView({
        id: "__alloyId12379"
    });
    $.__views.__alloyId12378.add($.__views.__alloyId12379);
    $.__views.__alloyId12380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12380"
    });
    $.__views.__alloyId12379.add($.__views.__alloyId12380);
    $.__views.__alloyId12381 = Ti.UI.createView({
        id: "__alloyId12381"
    });
    $.__views.__alloyId12381 && $.addTopLevelView($.__views.__alloyId12381);
    $.__views.__alloyId12382 = Ti.UI.createView({
        id: "__alloyId12382"
    });
    $.__views.__alloyId12381.add($.__views.__alloyId12382);
    $.__views.__alloyId12383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12383"
    });
    $.__views.__alloyId12382.add($.__views.__alloyId12383);
    $.__views.__alloyId12384 = Ti.UI.createView({
        id: "__alloyId12384"
    });
    $.__views.__alloyId12384 && $.addTopLevelView($.__views.__alloyId12384);
    $.__views.__alloyId12385 = Ti.UI.createView({
        id: "__alloyId12385"
    });
    $.__views.__alloyId12384.add($.__views.__alloyId12385);
    $.__views.__alloyId12386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12386"
    });
    $.__views.__alloyId12385.add($.__views.__alloyId12386);
    $.__views.__alloyId12387 = Ti.UI.createView({
        id: "__alloyId12387"
    });
    $.__views.__alloyId12387 && $.addTopLevelView($.__views.__alloyId12387);
    $.__views.__alloyId12388 = Ti.UI.createView({
        id: "__alloyId12388"
    });
    $.__views.__alloyId12387.add($.__views.__alloyId12388);
    $.__views.__alloyId12389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12389"
    });
    $.__views.__alloyId12388.add($.__views.__alloyId12389);
    $.__views.__alloyId12390 = Ti.UI.createView({
        id: "__alloyId12390"
    });
    $.__views.__alloyId12390 && $.addTopLevelView($.__views.__alloyId12390);
    $.__views.__alloyId12391 = Ti.UI.createView({
        id: "__alloyId12391"
    });
    $.__views.__alloyId12390.add($.__views.__alloyId12391);
    $.__views.__alloyId12392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12392"
    });
    $.__views.__alloyId12391.add($.__views.__alloyId12392);
    $.__views.__alloyId12393 = Ti.UI.createView({
        id: "__alloyId12393"
    });
    $.__views.__alloyId12393 && $.addTopLevelView($.__views.__alloyId12393);
    $.__views.__alloyId12394 = Ti.UI.createView({
        id: "__alloyId12394"
    });
    $.__views.__alloyId12393.add($.__views.__alloyId12394);
    $.__views.__alloyId12395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12395"
    });
    $.__views.__alloyId12394.add($.__views.__alloyId12395);
    $.__views.__alloyId12396 = Ti.UI.createView({
        id: "__alloyId12396"
    });
    $.__views.__alloyId12396 && $.addTopLevelView($.__views.__alloyId12396);
    $.__views.__alloyId12397 = Ti.UI.createView({
        id: "__alloyId12397"
    });
    $.__views.__alloyId12396.add($.__views.__alloyId12397);
    $.__views.__alloyId12398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12398"
    });
    $.__views.__alloyId12397.add($.__views.__alloyId12398);
    $.__views.__alloyId12399 = Ti.UI.createView({
        id: "__alloyId12399"
    });
    $.__views.__alloyId12399 && $.addTopLevelView($.__views.__alloyId12399);
    $.__views.__alloyId12400 = Ti.UI.createView({
        id: "__alloyId12400"
    });
    $.__views.__alloyId12399.add($.__views.__alloyId12400);
    $.__views.__alloyId12401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12401"
    });
    $.__views.__alloyId12400.add($.__views.__alloyId12401);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;