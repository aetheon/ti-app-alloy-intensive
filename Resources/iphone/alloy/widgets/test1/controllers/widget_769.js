function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_769";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_769 = Ti.UI.createView({
        id: "widget_769"
    });
    $.__views.widget_769 && $.addTopLevelView($.__views.widget_769);
    $.__views.__alloyId19370 = Ti.UI.createView({
        id: "__alloyId19370"
    });
    $.__views.widget_769.add($.__views.__alloyId19370);
    $.__views.__alloyId19371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19371"
    });
    $.__views.__alloyId19370.add($.__views.__alloyId19371);
    $.__views.__alloyId19372 = Ti.UI.createView({
        id: "__alloyId19372"
    });
    $.__views.__alloyId19372 && $.addTopLevelView($.__views.__alloyId19372);
    $.__views.__alloyId19373 = Ti.UI.createView({
        id: "__alloyId19373"
    });
    $.__views.__alloyId19372.add($.__views.__alloyId19373);
    $.__views.__alloyId19374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19374"
    });
    $.__views.__alloyId19373.add($.__views.__alloyId19374);
    $.__views.__alloyId19375 = Ti.UI.createView({
        id: "__alloyId19375"
    });
    $.__views.__alloyId19375 && $.addTopLevelView($.__views.__alloyId19375);
    $.__views.__alloyId19376 = Ti.UI.createView({
        id: "__alloyId19376"
    });
    $.__views.__alloyId19375.add($.__views.__alloyId19376);
    $.__views.__alloyId19377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19377"
    });
    $.__views.__alloyId19376.add($.__views.__alloyId19377);
    $.__views.__alloyId19378 = Ti.UI.createView({
        id: "__alloyId19378"
    });
    $.__views.__alloyId19378 && $.addTopLevelView($.__views.__alloyId19378);
    $.__views.__alloyId19379 = Ti.UI.createView({
        id: "__alloyId19379"
    });
    $.__views.__alloyId19378.add($.__views.__alloyId19379);
    $.__views.__alloyId19380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19380"
    });
    $.__views.__alloyId19379.add($.__views.__alloyId19380);
    $.__views.__alloyId19381 = Ti.UI.createView({
        id: "__alloyId19381"
    });
    $.__views.__alloyId19381 && $.addTopLevelView($.__views.__alloyId19381);
    $.__views.__alloyId19382 = Ti.UI.createView({
        id: "__alloyId19382"
    });
    $.__views.__alloyId19381.add($.__views.__alloyId19382);
    $.__views.__alloyId19383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19383"
    });
    $.__views.__alloyId19382.add($.__views.__alloyId19383);
    $.__views.__alloyId19384 = Ti.UI.createView({
        id: "__alloyId19384"
    });
    $.__views.__alloyId19384 && $.addTopLevelView($.__views.__alloyId19384);
    $.__views.__alloyId19385 = Ti.UI.createView({
        id: "__alloyId19385"
    });
    $.__views.__alloyId19384.add($.__views.__alloyId19385);
    $.__views.__alloyId19386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19386"
    });
    $.__views.__alloyId19385.add($.__views.__alloyId19386);
    $.__views.__alloyId19387 = Ti.UI.createView({
        id: "__alloyId19387"
    });
    $.__views.__alloyId19387 && $.addTopLevelView($.__views.__alloyId19387);
    $.__views.__alloyId19388 = Ti.UI.createView({
        id: "__alloyId19388"
    });
    $.__views.__alloyId19387.add($.__views.__alloyId19388);
    $.__views.__alloyId19389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19389"
    });
    $.__views.__alloyId19388.add($.__views.__alloyId19389);
    $.__views.__alloyId19390 = Ti.UI.createView({
        id: "__alloyId19390"
    });
    $.__views.__alloyId19390 && $.addTopLevelView($.__views.__alloyId19390);
    $.__views.__alloyId19391 = Ti.UI.createView({
        id: "__alloyId19391"
    });
    $.__views.__alloyId19390.add($.__views.__alloyId19391);
    $.__views.__alloyId19392 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19392"
    });
    $.__views.__alloyId19391.add($.__views.__alloyId19392);
    $.__views.__alloyId19393 = Ti.UI.createView({
        id: "__alloyId19393"
    });
    $.__views.__alloyId19393 && $.addTopLevelView($.__views.__alloyId19393);
    $.__views.__alloyId19394 = Ti.UI.createView({
        id: "__alloyId19394"
    });
    $.__views.__alloyId19393.add($.__views.__alloyId19394);
    $.__views.__alloyId19395 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19395"
    });
    $.__views.__alloyId19394.add($.__views.__alloyId19395);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;