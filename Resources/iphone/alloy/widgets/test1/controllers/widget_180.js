function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_180";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_180 = Ti.UI.createView({
        id: "widget_180"
    });
    $.__views.widget_180 && $.addTopLevelView($.__views.widget_180);
    $.__views.__alloyId2392 = Ti.UI.createView({
        id: "__alloyId2392"
    });
    $.__views.widget_180.add($.__views.__alloyId2392);
    $.__views.__alloyId2393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2393"
    });
    $.__views.__alloyId2392.add($.__views.__alloyId2393);
    $.__views.__alloyId2394 = Ti.UI.createView({
        id: "__alloyId2394"
    });
    $.__views.__alloyId2394 && $.addTopLevelView($.__views.__alloyId2394);
    $.__views.__alloyId2395 = Ti.UI.createView({
        id: "__alloyId2395"
    });
    $.__views.__alloyId2394.add($.__views.__alloyId2395);
    $.__views.__alloyId2396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2396"
    });
    $.__views.__alloyId2395.add($.__views.__alloyId2396);
    $.__views.__alloyId2397 = Ti.UI.createView({
        id: "__alloyId2397"
    });
    $.__views.__alloyId2397 && $.addTopLevelView($.__views.__alloyId2397);
    $.__views.__alloyId2398 = Ti.UI.createView({
        id: "__alloyId2398"
    });
    $.__views.__alloyId2397.add($.__views.__alloyId2398);
    $.__views.__alloyId2399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2399"
    });
    $.__views.__alloyId2398.add($.__views.__alloyId2399);
    $.__views.__alloyId2400 = Ti.UI.createView({
        id: "__alloyId2400"
    });
    $.__views.__alloyId2400 && $.addTopLevelView($.__views.__alloyId2400);
    $.__views.__alloyId2401 = Ti.UI.createView({
        id: "__alloyId2401"
    });
    $.__views.__alloyId2400.add($.__views.__alloyId2401);
    $.__views.__alloyId2402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2402"
    });
    $.__views.__alloyId2401.add($.__views.__alloyId2402);
    $.__views.__alloyId2403 = Ti.UI.createView({
        id: "__alloyId2403"
    });
    $.__views.__alloyId2403 && $.addTopLevelView($.__views.__alloyId2403);
    $.__views.__alloyId2404 = Ti.UI.createView({
        id: "__alloyId2404"
    });
    $.__views.__alloyId2403.add($.__views.__alloyId2404);
    $.__views.__alloyId2405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2405"
    });
    $.__views.__alloyId2404.add($.__views.__alloyId2405);
    $.__views.__alloyId2406 = Ti.UI.createView({
        id: "__alloyId2406"
    });
    $.__views.__alloyId2406 && $.addTopLevelView($.__views.__alloyId2406);
    $.__views.__alloyId2407 = Ti.UI.createView({
        id: "__alloyId2407"
    });
    $.__views.__alloyId2406.add($.__views.__alloyId2407);
    $.__views.__alloyId2408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2408"
    });
    $.__views.__alloyId2407.add($.__views.__alloyId2408);
    $.__views.__alloyId2409 = Ti.UI.createView({
        id: "__alloyId2409"
    });
    $.__views.__alloyId2409 && $.addTopLevelView($.__views.__alloyId2409);
    $.__views.__alloyId2410 = Ti.UI.createView({
        id: "__alloyId2410"
    });
    $.__views.__alloyId2409.add($.__views.__alloyId2410);
    $.__views.__alloyId2411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2411"
    });
    $.__views.__alloyId2410.add($.__views.__alloyId2411);
    $.__views.__alloyId2412 = Ti.UI.createView({
        id: "__alloyId2412"
    });
    $.__views.__alloyId2412 && $.addTopLevelView($.__views.__alloyId2412);
    $.__views.__alloyId2413 = Ti.UI.createView({
        id: "__alloyId2413"
    });
    $.__views.__alloyId2412.add($.__views.__alloyId2413);
    $.__views.__alloyId2414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2414"
    });
    $.__views.__alloyId2413.add($.__views.__alloyId2414);
    $.__views.__alloyId2415 = Ti.UI.createView({
        id: "__alloyId2415"
    });
    $.__views.__alloyId2415 && $.addTopLevelView($.__views.__alloyId2415);
    $.__views.__alloyId2416 = Ti.UI.createView({
        id: "__alloyId2416"
    });
    $.__views.__alloyId2415.add($.__views.__alloyId2416);
    $.__views.__alloyId2417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2417"
    });
    $.__views.__alloyId2416.add($.__views.__alloyId2417);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;