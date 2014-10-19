function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_179";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_179 = Ti.UI.createView({
        id: "widget_179"
    });
    $.__views.widget_179 && $.addTopLevelView($.__views.widget_179);
    $.__views.__alloyId2340 = Ti.UI.createView({
        id: "__alloyId2340"
    });
    $.__views.widget_179.add($.__views.__alloyId2340);
    $.__views.__alloyId2341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2341"
    });
    $.__views.__alloyId2340.add($.__views.__alloyId2341);
    $.__views.__alloyId2342 = Ti.UI.createView({
        id: "__alloyId2342"
    });
    $.__views.__alloyId2342 && $.addTopLevelView($.__views.__alloyId2342);
    $.__views.__alloyId2343 = Ti.UI.createView({
        id: "__alloyId2343"
    });
    $.__views.__alloyId2342.add($.__views.__alloyId2343);
    $.__views.__alloyId2344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2344"
    });
    $.__views.__alloyId2343.add($.__views.__alloyId2344);
    $.__views.__alloyId2345 = Ti.UI.createView({
        id: "__alloyId2345"
    });
    $.__views.__alloyId2345 && $.addTopLevelView($.__views.__alloyId2345);
    $.__views.__alloyId2346 = Ti.UI.createView({
        id: "__alloyId2346"
    });
    $.__views.__alloyId2345.add($.__views.__alloyId2346);
    $.__views.__alloyId2347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2347"
    });
    $.__views.__alloyId2346.add($.__views.__alloyId2347);
    $.__views.__alloyId2348 = Ti.UI.createView({
        id: "__alloyId2348"
    });
    $.__views.__alloyId2348 && $.addTopLevelView($.__views.__alloyId2348);
    $.__views.__alloyId2349 = Ti.UI.createView({
        id: "__alloyId2349"
    });
    $.__views.__alloyId2348.add($.__views.__alloyId2349);
    $.__views.__alloyId2350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2350"
    });
    $.__views.__alloyId2349.add($.__views.__alloyId2350);
    $.__views.__alloyId2351 = Ti.UI.createView({
        id: "__alloyId2351"
    });
    $.__views.__alloyId2351 && $.addTopLevelView($.__views.__alloyId2351);
    $.__views.__alloyId2352 = Ti.UI.createView({
        id: "__alloyId2352"
    });
    $.__views.__alloyId2351.add($.__views.__alloyId2352);
    $.__views.__alloyId2353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2353"
    });
    $.__views.__alloyId2352.add($.__views.__alloyId2353);
    $.__views.__alloyId2354 = Ti.UI.createView({
        id: "__alloyId2354"
    });
    $.__views.__alloyId2354 && $.addTopLevelView($.__views.__alloyId2354);
    $.__views.__alloyId2355 = Ti.UI.createView({
        id: "__alloyId2355"
    });
    $.__views.__alloyId2354.add($.__views.__alloyId2355);
    $.__views.__alloyId2356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2356"
    });
    $.__views.__alloyId2355.add($.__views.__alloyId2356);
    $.__views.__alloyId2357 = Ti.UI.createView({
        id: "__alloyId2357"
    });
    $.__views.__alloyId2357 && $.addTopLevelView($.__views.__alloyId2357);
    $.__views.__alloyId2358 = Ti.UI.createView({
        id: "__alloyId2358"
    });
    $.__views.__alloyId2357.add($.__views.__alloyId2358);
    $.__views.__alloyId2359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2359"
    });
    $.__views.__alloyId2358.add($.__views.__alloyId2359);
    $.__views.__alloyId2360 = Ti.UI.createView({
        id: "__alloyId2360"
    });
    $.__views.__alloyId2360 && $.addTopLevelView($.__views.__alloyId2360);
    $.__views.__alloyId2361 = Ti.UI.createView({
        id: "__alloyId2361"
    });
    $.__views.__alloyId2360.add($.__views.__alloyId2361);
    $.__views.__alloyId2362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2362"
    });
    $.__views.__alloyId2361.add($.__views.__alloyId2362);
    $.__views.__alloyId2363 = Ti.UI.createView({
        id: "__alloyId2363"
    });
    $.__views.__alloyId2363 && $.addTopLevelView($.__views.__alloyId2363);
    $.__views.__alloyId2364 = Ti.UI.createView({
        id: "__alloyId2364"
    });
    $.__views.__alloyId2363.add($.__views.__alloyId2364);
    $.__views.__alloyId2365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2365"
    });
    $.__views.__alloyId2364.add($.__views.__alloyId2365);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;