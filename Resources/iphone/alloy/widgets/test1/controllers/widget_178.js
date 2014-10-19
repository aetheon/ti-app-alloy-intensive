function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_178";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_178 = Ti.UI.createView({
        id: "widget_178"
    });
    $.__views.widget_178 && $.addTopLevelView($.__views.widget_178);
    $.__views.__alloyId2314 = Ti.UI.createView({
        id: "__alloyId2314"
    });
    $.__views.widget_178.add($.__views.__alloyId2314);
    $.__views.__alloyId2315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2315"
    });
    $.__views.__alloyId2314.add($.__views.__alloyId2315);
    $.__views.__alloyId2316 = Ti.UI.createView({
        id: "__alloyId2316"
    });
    $.__views.__alloyId2316 && $.addTopLevelView($.__views.__alloyId2316);
    $.__views.__alloyId2317 = Ti.UI.createView({
        id: "__alloyId2317"
    });
    $.__views.__alloyId2316.add($.__views.__alloyId2317);
    $.__views.__alloyId2318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2318"
    });
    $.__views.__alloyId2317.add($.__views.__alloyId2318);
    $.__views.__alloyId2319 = Ti.UI.createView({
        id: "__alloyId2319"
    });
    $.__views.__alloyId2319 && $.addTopLevelView($.__views.__alloyId2319);
    $.__views.__alloyId2320 = Ti.UI.createView({
        id: "__alloyId2320"
    });
    $.__views.__alloyId2319.add($.__views.__alloyId2320);
    $.__views.__alloyId2321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2321"
    });
    $.__views.__alloyId2320.add($.__views.__alloyId2321);
    $.__views.__alloyId2322 = Ti.UI.createView({
        id: "__alloyId2322"
    });
    $.__views.__alloyId2322 && $.addTopLevelView($.__views.__alloyId2322);
    $.__views.__alloyId2323 = Ti.UI.createView({
        id: "__alloyId2323"
    });
    $.__views.__alloyId2322.add($.__views.__alloyId2323);
    $.__views.__alloyId2324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2324"
    });
    $.__views.__alloyId2323.add($.__views.__alloyId2324);
    $.__views.__alloyId2325 = Ti.UI.createView({
        id: "__alloyId2325"
    });
    $.__views.__alloyId2325 && $.addTopLevelView($.__views.__alloyId2325);
    $.__views.__alloyId2326 = Ti.UI.createView({
        id: "__alloyId2326"
    });
    $.__views.__alloyId2325.add($.__views.__alloyId2326);
    $.__views.__alloyId2327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2327"
    });
    $.__views.__alloyId2326.add($.__views.__alloyId2327);
    $.__views.__alloyId2328 = Ti.UI.createView({
        id: "__alloyId2328"
    });
    $.__views.__alloyId2328 && $.addTopLevelView($.__views.__alloyId2328);
    $.__views.__alloyId2329 = Ti.UI.createView({
        id: "__alloyId2329"
    });
    $.__views.__alloyId2328.add($.__views.__alloyId2329);
    $.__views.__alloyId2330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2330"
    });
    $.__views.__alloyId2329.add($.__views.__alloyId2330);
    $.__views.__alloyId2331 = Ti.UI.createView({
        id: "__alloyId2331"
    });
    $.__views.__alloyId2331 && $.addTopLevelView($.__views.__alloyId2331);
    $.__views.__alloyId2332 = Ti.UI.createView({
        id: "__alloyId2332"
    });
    $.__views.__alloyId2331.add($.__views.__alloyId2332);
    $.__views.__alloyId2333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2333"
    });
    $.__views.__alloyId2332.add($.__views.__alloyId2333);
    $.__views.__alloyId2334 = Ti.UI.createView({
        id: "__alloyId2334"
    });
    $.__views.__alloyId2334 && $.addTopLevelView($.__views.__alloyId2334);
    $.__views.__alloyId2335 = Ti.UI.createView({
        id: "__alloyId2335"
    });
    $.__views.__alloyId2334.add($.__views.__alloyId2335);
    $.__views.__alloyId2336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2336"
    });
    $.__views.__alloyId2335.add($.__views.__alloyId2336);
    $.__views.__alloyId2337 = Ti.UI.createView({
        id: "__alloyId2337"
    });
    $.__views.__alloyId2337 && $.addTopLevelView($.__views.__alloyId2337);
    $.__views.__alloyId2338 = Ti.UI.createView({
        id: "__alloyId2338"
    });
    $.__views.__alloyId2337.add($.__views.__alloyId2338);
    $.__views.__alloyId2339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2339"
    });
    $.__views.__alloyId2338.add($.__views.__alloyId2339);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;