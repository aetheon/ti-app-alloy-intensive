function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_318";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_318 = Ti.UI.createView({
        id: "widget_318"
    });
    $.__views.widget_318 && $.addTopLevelView($.__views.widget_318);
    $.__views.__alloyId6370 = Ti.UI.createView({
        id: "__alloyId6370"
    });
    $.__views.widget_318.add($.__views.__alloyId6370);
    $.__views.__alloyId6371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6371"
    });
    $.__views.__alloyId6370.add($.__views.__alloyId6371);
    $.__views.__alloyId6372 = Ti.UI.createView({
        id: "__alloyId6372"
    });
    $.__views.__alloyId6372 && $.addTopLevelView($.__views.__alloyId6372);
    $.__views.__alloyId6373 = Ti.UI.createView({
        id: "__alloyId6373"
    });
    $.__views.__alloyId6372.add($.__views.__alloyId6373);
    $.__views.__alloyId6374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6374"
    });
    $.__views.__alloyId6373.add($.__views.__alloyId6374);
    $.__views.__alloyId6375 = Ti.UI.createView({
        id: "__alloyId6375"
    });
    $.__views.__alloyId6375 && $.addTopLevelView($.__views.__alloyId6375);
    $.__views.__alloyId6376 = Ti.UI.createView({
        id: "__alloyId6376"
    });
    $.__views.__alloyId6375.add($.__views.__alloyId6376);
    $.__views.__alloyId6377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6377"
    });
    $.__views.__alloyId6376.add($.__views.__alloyId6377);
    $.__views.__alloyId6378 = Ti.UI.createView({
        id: "__alloyId6378"
    });
    $.__views.__alloyId6378 && $.addTopLevelView($.__views.__alloyId6378);
    $.__views.__alloyId6379 = Ti.UI.createView({
        id: "__alloyId6379"
    });
    $.__views.__alloyId6378.add($.__views.__alloyId6379);
    $.__views.__alloyId6380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6380"
    });
    $.__views.__alloyId6379.add($.__views.__alloyId6380);
    $.__views.__alloyId6381 = Ti.UI.createView({
        id: "__alloyId6381"
    });
    $.__views.__alloyId6381 && $.addTopLevelView($.__views.__alloyId6381);
    $.__views.__alloyId6382 = Ti.UI.createView({
        id: "__alloyId6382"
    });
    $.__views.__alloyId6381.add($.__views.__alloyId6382);
    $.__views.__alloyId6383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6383"
    });
    $.__views.__alloyId6382.add($.__views.__alloyId6383);
    $.__views.__alloyId6384 = Ti.UI.createView({
        id: "__alloyId6384"
    });
    $.__views.__alloyId6384 && $.addTopLevelView($.__views.__alloyId6384);
    $.__views.__alloyId6385 = Ti.UI.createView({
        id: "__alloyId6385"
    });
    $.__views.__alloyId6384.add($.__views.__alloyId6385);
    $.__views.__alloyId6386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6386"
    });
    $.__views.__alloyId6385.add($.__views.__alloyId6386);
    $.__views.__alloyId6387 = Ti.UI.createView({
        id: "__alloyId6387"
    });
    $.__views.__alloyId6387 && $.addTopLevelView($.__views.__alloyId6387);
    $.__views.__alloyId6388 = Ti.UI.createView({
        id: "__alloyId6388"
    });
    $.__views.__alloyId6387.add($.__views.__alloyId6388);
    $.__views.__alloyId6389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6389"
    });
    $.__views.__alloyId6388.add($.__views.__alloyId6389);
    $.__views.__alloyId6390 = Ti.UI.createView({
        id: "__alloyId6390"
    });
    $.__views.__alloyId6390 && $.addTopLevelView($.__views.__alloyId6390);
    $.__views.__alloyId6391 = Ti.UI.createView({
        id: "__alloyId6391"
    });
    $.__views.__alloyId6390.add($.__views.__alloyId6391);
    $.__views.__alloyId6392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6392"
    });
    $.__views.__alloyId6391.add($.__views.__alloyId6392);
    $.__views.__alloyId6393 = Ti.UI.createView({
        id: "__alloyId6393"
    });
    $.__views.__alloyId6393 && $.addTopLevelView($.__views.__alloyId6393);
    $.__views.__alloyId6394 = Ti.UI.createView({
        id: "__alloyId6394"
    });
    $.__views.__alloyId6393.add($.__views.__alloyId6394);
    $.__views.__alloyId6395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6395"
    });
    $.__views.__alloyId6394.add($.__views.__alloyId6395);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;