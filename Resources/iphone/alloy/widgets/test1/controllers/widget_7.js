function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_7";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_7 = Ti.UI.createView({
        id: "widget_7"
    });
    $.__views.widget_7 && $.addTopLevelView($.__views.widget_7);
    $.__views.__alloyId17368 = Ti.UI.createView({
        id: "__alloyId17368"
    });
    $.__views.widget_7.add($.__views.__alloyId17368);
    $.__views.__alloyId17369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17369"
    });
    $.__views.__alloyId17368.add($.__views.__alloyId17369);
    $.__views.__alloyId17370 = Ti.UI.createView({
        id: "__alloyId17370"
    });
    $.__views.__alloyId17370 && $.addTopLevelView($.__views.__alloyId17370);
    $.__views.__alloyId17371 = Ti.UI.createView({
        id: "__alloyId17371"
    });
    $.__views.__alloyId17370.add($.__views.__alloyId17371);
    $.__views.__alloyId17372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17372"
    });
    $.__views.__alloyId17371.add($.__views.__alloyId17372);
    $.__views.__alloyId17373 = Ti.UI.createView({
        id: "__alloyId17373"
    });
    $.__views.__alloyId17373 && $.addTopLevelView($.__views.__alloyId17373);
    $.__views.__alloyId17374 = Ti.UI.createView({
        id: "__alloyId17374"
    });
    $.__views.__alloyId17373.add($.__views.__alloyId17374);
    $.__views.__alloyId17375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17375"
    });
    $.__views.__alloyId17374.add($.__views.__alloyId17375);
    $.__views.__alloyId17376 = Ti.UI.createView({
        id: "__alloyId17376"
    });
    $.__views.__alloyId17376 && $.addTopLevelView($.__views.__alloyId17376);
    $.__views.__alloyId17377 = Ti.UI.createView({
        id: "__alloyId17377"
    });
    $.__views.__alloyId17376.add($.__views.__alloyId17377);
    $.__views.__alloyId17378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17378"
    });
    $.__views.__alloyId17377.add($.__views.__alloyId17378);
    $.__views.__alloyId17379 = Ti.UI.createView({
        id: "__alloyId17379"
    });
    $.__views.__alloyId17379 && $.addTopLevelView($.__views.__alloyId17379);
    $.__views.__alloyId17380 = Ti.UI.createView({
        id: "__alloyId17380"
    });
    $.__views.__alloyId17379.add($.__views.__alloyId17380);
    $.__views.__alloyId17381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17381"
    });
    $.__views.__alloyId17380.add($.__views.__alloyId17381);
    $.__views.__alloyId17382 = Ti.UI.createView({
        id: "__alloyId17382"
    });
    $.__views.__alloyId17382 && $.addTopLevelView($.__views.__alloyId17382);
    $.__views.__alloyId17383 = Ti.UI.createView({
        id: "__alloyId17383"
    });
    $.__views.__alloyId17382.add($.__views.__alloyId17383);
    $.__views.__alloyId17384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17384"
    });
    $.__views.__alloyId17383.add($.__views.__alloyId17384);
    $.__views.__alloyId17385 = Ti.UI.createView({
        id: "__alloyId17385"
    });
    $.__views.__alloyId17385 && $.addTopLevelView($.__views.__alloyId17385);
    $.__views.__alloyId17386 = Ti.UI.createView({
        id: "__alloyId17386"
    });
    $.__views.__alloyId17385.add($.__views.__alloyId17386);
    $.__views.__alloyId17387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17387"
    });
    $.__views.__alloyId17386.add($.__views.__alloyId17387);
    $.__views.__alloyId17388 = Ti.UI.createView({
        id: "__alloyId17388"
    });
    $.__views.__alloyId17388 && $.addTopLevelView($.__views.__alloyId17388);
    $.__views.__alloyId17389 = Ti.UI.createView({
        id: "__alloyId17389"
    });
    $.__views.__alloyId17388.add($.__views.__alloyId17389);
    $.__views.__alloyId17390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17390"
    });
    $.__views.__alloyId17389.add($.__views.__alloyId17390);
    $.__views.__alloyId17391 = Ti.UI.createView({
        id: "__alloyId17391"
    });
    $.__views.__alloyId17391 && $.addTopLevelView($.__views.__alloyId17391);
    $.__views.__alloyId17392 = Ti.UI.createView({
        id: "__alloyId17392"
    });
    $.__views.__alloyId17391.add($.__views.__alloyId17392);
    $.__views.__alloyId17393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17393"
    });
    $.__views.__alloyId17392.add($.__views.__alloyId17393);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;