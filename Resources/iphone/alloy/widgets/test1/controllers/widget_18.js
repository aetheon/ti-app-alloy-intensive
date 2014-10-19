function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_18";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_18 = Ti.UI.createView({
        id: "widget_18"
    });
    $.__views.widget_18 && $.addTopLevelView($.__views.widget_18);
    $.__views.__alloyId2366 = Ti.UI.createView({
        id: "__alloyId2366"
    });
    $.__views.widget_18.add($.__views.__alloyId2366);
    $.__views.__alloyId2367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2367"
    });
    $.__views.__alloyId2366.add($.__views.__alloyId2367);
    $.__views.__alloyId2368 = Ti.UI.createView({
        id: "__alloyId2368"
    });
    $.__views.__alloyId2368 && $.addTopLevelView($.__views.__alloyId2368);
    $.__views.__alloyId2369 = Ti.UI.createView({
        id: "__alloyId2369"
    });
    $.__views.__alloyId2368.add($.__views.__alloyId2369);
    $.__views.__alloyId2370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2370"
    });
    $.__views.__alloyId2369.add($.__views.__alloyId2370);
    $.__views.__alloyId2371 = Ti.UI.createView({
        id: "__alloyId2371"
    });
    $.__views.__alloyId2371 && $.addTopLevelView($.__views.__alloyId2371);
    $.__views.__alloyId2372 = Ti.UI.createView({
        id: "__alloyId2372"
    });
    $.__views.__alloyId2371.add($.__views.__alloyId2372);
    $.__views.__alloyId2373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2373"
    });
    $.__views.__alloyId2372.add($.__views.__alloyId2373);
    $.__views.__alloyId2374 = Ti.UI.createView({
        id: "__alloyId2374"
    });
    $.__views.__alloyId2374 && $.addTopLevelView($.__views.__alloyId2374);
    $.__views.__alloyId2375 = Ti.UI.createView({
        id: "__alloyId2375"
    });
    $.__views.__alloyId2374.add($.__views.__alloyId2375);
    $.__views.__alloyId2376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2376"
    });
    $.__views.__alloyId2375.add($.__views.__alloyId2376);
    $.__views.__alloyId2377 = Ti.UI.createView({
        id: "__alloyId2377"
    });
    $.__views.__alloyId2377 && $.addTopLevelView($.__views.__alloyId2377);
    $.__views.__alloyId2378 = Ti.UI.createView({
        id: "__alloyId2378"
    });
    $.__views.__alloyId2377.add($.__views.__alloyId2378);
    $.__views.__alloyId2379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2379"
    });
    $.__views.__alloyId2378.add($.__views.__alloyId2379);
    $.__views.__alloyId2380 = Ti.UI.createView({
        id: "__alloyId2380"
    });
    $.__views.__alloyId2380 && $.addTopLevelView($.__views.__alloyId2380);
    $.__views.__alloyId2381 = Ti.UI.createView({
        id: "__alloyId2381"
    });
    $.__views.__alloyId2380.add($.__views.__alloyId2381);
    $.__views.__alloyId2382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2382"
    });
    $.__views.__alloyId2381.add($.__views.__alloyId2382);
    $.__views.__alloyId2383 = Ti.UI.createView({
        id: "__alloyId2383"
    });
    $.__views.__alloyId2383 && $.addTopLevelView($.__views.__alloyId2383);
    $.__views.__alloyId2384 = Ti.UI.createView({
        id: "__alloyId2384"
    });
    $.__views.__alloyId2383.add($.__views.__alloyId2384);
    $.__views.__alloyId2385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2385"
    });
    $.__views.__alloyId2384.add($.__views.__alloyId2385);
    $.__views.__alloyId2386 = Ti.UI.createView({
        id: "__alloyId2386"
    });
    $.__views.__alloyId2386 && $.addTopLevelView($.__views.__alloyId2386);
    $.__views.__alloyId2387 = Ti.UI.createView({
        id: "__alloyId2387"
    });
    $.__views.__alloyId2386.add($.__views.__alloyId2387);
    $.__views.__alloyId2388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2388"
    });
    $.__views.__alloyId2387.add($.__views.__alloyId2388);
    $.__views.__alloyId2389 = Ti.UI.createView({
        id: "__alloyId2389"
    });
    $.__views.__alloyId2389 && $.addTopLevelView($.__views.__alloyId2389);
    $.__views.__alloyId2390 = Ti.UI.createView({
        id: "__alloyId2390"
    });
    $.__views.__alloyId2389.add($.__views.__alloyId2390);
    $.__views.__alloyId2391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2391"
    });
    $.__views.__alloyId2390.add($.__views.__alloyId2391);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;