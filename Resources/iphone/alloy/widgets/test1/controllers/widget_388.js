function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_388";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_388 = Ti.UI.createView({
        id: "widget_388"
    });
    $.__views.widget_388 && $.addTopLevelView($.__views.widget_388);
    $.__views.__alloyId8372 = Ti.UI.createView({
        id: "__alloyId8372"
    });
    $.__views.widget_388.add($.__views.__alloyId8372);
    $.__views.__alloyId8373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8373"
    });
    $.__views.__alloyId8372.add($.__views.__alloyId8373);
    $.__views.__alloyId8374 = Ti.UI.createView({
        id: "__alloyId8374"
    });
    $.__views.__alloyId8374 && $.addTopLevelView($.__views.__alloyId8374);
    $.__views.__alloyId8375 = Ti.UI.createView({
        id: "__alloyId8375"
    });
    $.__views.__alloyId8374.add($.__views.__alloyId8375);
    $.__views.__alloyId8376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8376"
    });
    $.__views.__alloyId8375.add($.__views.__alloyId8376);
    $.__views.__alloyId8377 = Ti.UI.createView({
        id: "__alloyId8377"
    });
    $.__views.__alloyId8377 && $.addTopLevelView($.__views.__alloyId8377);
    $.__views.__alloyId8378 = Ti.UI.createView({
        id: "__alloyId8378"
    });
    $.__views.__alloyId8377.add($.__views.__alloyId8378);
    $.__views.__alloyId8379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8379"
    });
    $.__views.__alloyId8378.add($.__views.__alloyId8379);
    $.__views.__alloyId8380 = Ti.UI.createView({
        id: "__alloyId8380"
    });
    $.__views.__alloyId8380 && $.addTopLevelView($.__views.__alloyId8380);
    $.__views.__alloyId8381 = Ti.UI.createView({
        id: "__alloyId8381"
    });
    $.__views.__alloyId8380.add($.__views.__alloyId8381);
    $.__views.__alloyId8382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8382"
    });
    $.__views.__alloyId8381.add($.__views.__alloyId8382);
    $.__views.__alloyId8383 = Ti.UI.createView({
        id: "__alloyId8383"
    });
    $.__views.__alloyId8383 && $.addTopLevelView($.__views.__alloyId8383);
    $.__views.__alloyId8384 = Ti.UI.createView({
        id: "__alloyId8384"
    });
    $.__views.__alloyId8383.add($.__views.__alloyId8384);
    $.__views.__alloyId8385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8385"
    });
    $.__views.__alloyId8384.add($.__views.__alloyId8385);
    $.__views.__alloyId8386 = Ti.UI.createView({
        id: "__alloyId8386"
    });
    $.__views.__alloyId8386 && $.addTopLevelView($.__views.__alloyId8386);
    $.__views.__alloyId8387 = Ti.UI.createView({
        id: "__alloyId8387"
    });
    $.__views.__alloyId8386.add($.__views.__alloyId8387);
    $.__views.__alloyId8388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8388"
    });
    $.__views.__alloyId8387.add($.__views.__alloyId8388);
    $.__views.__alloyId8389 = Ti.UI.createView({
        id: "__alloyId8389"
    });
    $.__views.__alloyId8389 && $.addTopLevelView($.__views.__alloyId8389);
    $.__views.__alloyId8390 = Ti.UI.createView({
        id: "__alloyId8390"
    });
    $.__views.__alloyId8389.add($.__views.__alloyId8390);
    $.__views.__alloyId8391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8391"
    });
    $.__views.__alloyId8390.add($.__views.__alloyId8391);
    $.__views.__alloyId8392 = Ti.UI.createView({
        id: "__alloyId8392"
    });
    $.__views.__alloyId8392 && $.addTopLevelView($.__views.__alloyId8392);
    $.__views.__alloyId8393 = Ti.UI.createView({
        id: "__alloyId8393"
    });
    $.__views.__alloyId8392.add($.__views.__alloyId8393);
    $.__views.__alloyId8394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8394"
    });
    $.__views.__alloyId8393.add($.__views.__alloyId8394);
    $.__views.__alloyId8395 = Ti.UI.createView({
        id: "__alloyId8395"
    });
    $.__views.__alloyId8395 && $.addTopLevelView($.__views.__alloyId8395);
    $.__views.__alloyId8396 = Ti.UI.createView({
        id: "__alloyId8396"
    });
    $.__views.__alloyId8395.add($.__views.__alloyId8396);
    $.__views.__alloyId8397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8397"
    });
    $.__views.__alloyId8396.add($.__views.__alloyId8397);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;