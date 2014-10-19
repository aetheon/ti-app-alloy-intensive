function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_977";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_977 = Ti.UI.createView({
        id: "widget_977"
    });
    $.__views.widget_977 && $.addTopLevelView($.__views.widget_977);
    $.__views.__alloyId25376 = Ti.UI.createView({
        id: "__alloyId25376"
    });
    $.__views.widget_977.add($.__views.__alloyId25376);
    $.__views.__alloyId25377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25377"
    });
    $.__views.__alloyId25376.add($.__views.__alloyId25377);
    $.__views.__alloyId25378 = Ti.UI.createView({
        id: "__alloyId25378"
    });
    $.__views.__alloyId25378 && $.addTopLevelView($.__views.__alloyId25378);
    $.__views.__alloyId25379 = Ti.UI.createView({
        id: "__alloyId25379"
    });
    $.__views.__alloyId25378.add($.__views.__alloyId25379);
    $.__views.__alloyId25380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25380"
    });
    $.__views.__alloyId25379.add($.__views.__alloyId25380);
    $.__views.__alloyId25381 = Ti.UI.createView({
        id: "__alloyId25381"
    });
    $.__views.__alloyId25381 && $.addTopLevelView($.__views.__alloyId25381);
    $.__views.__alloyId25382 = Ti.UI.createView({
        id: "__alloyId25382"
    });
    $.__views.__alloyId25381.add($.__views.__alloyId25382);
    $.__views.__alloyId25383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25383"
    });
    $.__views.__alloyId25382.add($.__views.__alloyId25383);
    $.__views.__alloyId25384 = Ti.UI.createView({
        id: "__alloyId25384"
    });
    $.__views.__alloyId25384 && $.addTopLevelView($.__views.__alloyId25384);
    $.__views.__alloyId25385 = Ti.UI.createView({
        id: "__alloyId25385"
    });
    $.__views.__alloyId25384.add($.__views.__alloyId25385);
    $.__views.__alloyId25386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25386"
    });
    $.__views.__alloyId25385.add($.__views.__alloyId25386);
    $.__views.__alloyId25387 = Ti.UI.createView({
        id: "__alloyId25387"
    });
    $.__views.__alloyId25387 && $.addTopLevelView($.__views.__alloyId25387);
    $.__views.__alloyId25388 = Ti.UI.createView({
        id: "__alloyId25388"
    });
    $.__views.__alloyId25387.add($.__views.__alloyId25388);
    $.__views.__alloyId25389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25389"
    });
    $.__views.__alloyId25388.add($.__views.__alloyId25389);
    $.__views.__alloyId25390 = Ti.UI.createView({
        id: "__alloyId25390"
    });
    $.__views.__alloyId25390 && $.addTopLevelView($.__views.__alloyId25390);
    $.__views.__alloyId25391 = Ti.UI.createView({
        id: "__alloyId25391"
    });
    $.__views.__alloyId25390.add($.__views.__alloyId25391);
    $.__views.__alloyId25392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25392"
    });
    $.__views.__alloyId25391.add($.__views.__alloyId25392);
    $.__views.__alloyId25393 = Ti.UI.createView({
        id: "__alloyId25393"
    });
    $.__views.__alloyId25393 && $.addTopLevelView($.__views.__alloyId25393);
    $.__views.__alloyId25394 = Ti.UI.createView({
        id: "__alloyId25394"
    });
    $.__views.__alloyId25393.add($.__views.__alloyId25394);
    $.__views.__alloyId25395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25395"
    });
    $.__views.__alloyId25394.add($.__views.__alloyId25395);
    $.__views.__alloyId25396 = Ti.UI.createView({
        id: "__alloyId25396"
    });
    $.__views.__alloyId25396 && $.addTopLevelView($.__views.__alloyId25396);
    $.__views.__alloyId25397 = Ti.UI.createView({
        id: "__alloyId25397"
    });
    $.__views.__alloyId25396.add($.__views.__alloyId25397);
    $.__views.__alloyId25398 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25398"
    });
    $.__views.__alloyId25397.add($.__views.__alloyId25398);
    $.__views.__alloyId25399 = Ti.UI.createView({
        id: "__alloyId25399"
    });
    $.__views.__alloyId25399 && $.addTopLevelView($.__views.__alloyId25399);
    $.__views.__alloyId25400 = Ti.UI.createView({
        id: "__alloyId25400"
    });
    $.__views.__alloyId25399.add($.__views.__alloyId25400);
    $.__views.__alloyId25401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25401"
    });
    $.__views.__alloyId25400.add($.__views.__alloyId25401);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;