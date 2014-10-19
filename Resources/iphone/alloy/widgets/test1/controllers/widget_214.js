function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_214";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_214 = Ti.UI.createView({
        id: "widget_214"
    });
    $.__views.widget_214 && $.addTopLevelView($.__views.widget_214);
    $.__views.__alloyId3380 = Ti.UI.createView({
        id: "__alloyId3380"
    });
    $.__views.widget_214.add($.__views.__alloyId3380);
    $.__views.__alloyId3381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3381"
    });
    $.__views.__alloyId3380.add($.__views.__alloyId3381);
    $.__views.__alloyId3382 = Ti.UI.createView({
        id: "__alloyId3382"
    });
    $.__views.__alloyId3382 && $.addTopLevelView($.__views.__alloyId3382);
    $.__views.__alloyId3383 = Ti.UI.createView({
        id: "__alloyId3383"
    });
    $.__views.__alloyId3382.add($.__views.__alloyId3383);
    $.__views.__alloyId3384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3384"
    });
    $.__views.__alloyId3383.add($.__views.__alloyId3384);
    $.__views.__alloyId3385 = Ti.UI.createView({
        id: "__alloyId3385"
    });
    $.__views.__alloyId3385 && $.addTopLevelView($.__views.__alloyId3385);
    $.__views.__alloyId3386 = Ti.UI.createView({
        id: "__alloyId3386"
    });
    $.__views.__alloyId3385.add($.__views.__alloyId3386);
    $.__views.__alloyId3387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3387"
    });
    $.__views.__alloyId3386.add($.__views.__alloyId3387);
    $.__views.__alloyId3388 = Ti.UI.createView({
        id: "__alloyId3388"
    });
    $.__views.__alloyId3388 && $.addTopLevelView($.__views.__alloyId3388);
    $.__views.__alloyId3389 = Ti.UI.createView({
        id: "__alloyId3389"
    });
    $.__views.__alloyId3388.add($.__views.__alloyId3389);
    $.__views.__alloyId3390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3390"
    });
    $.__views.__alloyId3389.add($.__views.__alloyId3390);
    $.__views.__alloyId3391 = Ti.UI.createView({
        id: "__alloyId3391"
    });
    $.__views.__alloyId3391 && $.addTopLevelView($.__views.__alloyId3391);
    $.__views.__alloyId3392 = Ti.UI.createView({
        id: "__alloyId3392"
    });
    $.__views.__alloyId3391.add($.__views.__alloyId3392);
    $.__views.__alloyId3393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3393"
    });
    $.__views.__alloyId3392.add($.__views.__alloyId3393);
    $.__views.__alloyId3394 = Ti.UI.createView({
        id: "__alloyId3394"
    });
    $.__views.__alloyId3394 && $.addTopLevelView($.__views.__alloyId3394);
    $.__views.__alloyId3395 = Ti.UI.createView({
        id: "__alloyId3395"
    });
    $.__views.__alloyId3394.add($.__views.__alloyId3395);
    $.__views.__alloyId3396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3396"
    });
    $.__views.__alloyId3395.add($.__views.__alloyId3396);
    $.__views.__alloyId3397 = Ti.UI.createView({
        id: "__alloyId3397"
    });
    $.__views.__alloyId3397 && $.addTopLevelView($.__views.__alloyId3397);
    $.__views.__alloyId3398 = Ti.UI.createView({
        id: "__alloyId3398"
    });
    $.__views.__alloyId3397.add($.__views.__alloyId3398);
    $.__views.__alloyId3399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3399"
    });
    $.__views.__alloyId3398.add($.__views.__alloyId3399);
    $.__views.__alloyId3400 = Ti.UI.createView({
        id: "__alloyId3400"
    });
    $.__views.__alloyId3400 && $.addTopLevelView($.__views.__alloyId3400);
    $.__views.__alloyId3401 = Ti.UI.createView({
        id: "__alloyId3401"
    });
    $.__views.__alloyId3400.add($.__views.__alloyId3401);
    $.__views.__alloyId3402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3402"
    });
    $.__views.__alloyId3401.add($.__views.__alloyId3402);
    $.__views.__alloyId3403 = Ti.UI.createView({
        id: "__alloyId3403"
    });
    $.__views.__alloyId3403 && $.addTopLevelView($.__views.__alloyId3403);
    $.__views.__alloyId3404 = Ti.UI.createView({
        id: "__alloyId3404"
    });
    $.__views.__alloyId3403.add($.__views.__alloyId3404);
    $.__views.__alloyId3405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3405"
    });
    $.__views.__alloyId3404.add($.__views.__alloyId3405);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;