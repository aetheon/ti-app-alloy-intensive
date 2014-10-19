function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_177";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_177 = Ti.UI.createView({
        id: "widget_177"
    });
    $.__views.widget_177 && $.addTopLevelView($.__views.widget_177);
    $.__views.__alloyId2288 = Ti.UI.createView({
        id: "__alloyId2288"
    });
    $.__views.widget_177.add($.__views.__alloyId2288);
    $.__views.__alloyId2289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2289"
    });
    $.__views.__alloyId2288.add($.__views.__alloyId2289);
    $.__views.__alloyId2290 = Ti.UI.createView({
        id: "__alloyId2290"
    });
    $.__views.__alloyId2290 && $.addTopLevelView($.__views.__alloyId2290);
    $.__views.__alloyId2291 = Ti.UI.createView({
        id: "__alloyId2291"
    });
    $.__views.__alloyId2290.add($.__views.__alloyId2291);
    $.__views.__alloyId2292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2292"
    });
    $.__views.__alloyId2291.add($.__views.__alloyId2292);
    $.__views.__alloyId2293 = Ti.UI.createView({
        id: "__alloyId2293"
    });
    $.__views.__alloyId2293 && $.addTopLevelView($.__views.__alloyId2293);
    $.__views.__alloyId2294 = Ti.UI.createView({
        id: "__alloyId2294"
    });
    $.__views.__alloyId2293.add($.__views.__alloyId2294);
    $.__views.__alloyId2295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2295"
    });
    $.__views.__alloyId2294.add($.__views.__alloyId2295);
    $.__views.__alloyId2296 = Ti.UI.createView({
        id: "__alloyId2296"
    });
    $.__views.__alloyId2296 && $.addTopLevelView($.__views.__alloyId2296);
    $.__views.__alloyId2297 = Ti.UI.createView({
        id: "__alloyId2297"
    });
    $.__views.__alloyId2296.add($.__views.__alloyId2297);
    $.__views.__alloyId2298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2298"
    });
    $.__views.__alloyId2297.add($.__views.__alloyId2298);
    $.__views.__alloyId2299 = Ti.UI.createView({
        id: "__alloyId2299"
    });
    $.__views.__alloyId2299 && $.addTopLevelView($.__views.__alloyId2299);
    $.__views.__alloyId2300 = Ti.UI.createView({
        id: "__alloyId2300"
    });
    $.__views.__alloyId2299.add($.__views.__alloyId2300);
    $.__views.__alloyId2301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2301"
    });
    $.__views.__alloyId2300.add($.__views.__alloyId2301);
    $.__views.__alloyId2302 = Ti.UI.createView({
        id: "__alloyId2302"
    });
    $.__views.__alloyId2302 && $.addTopLevelView($.__views.__alloyId2302);
    $.__views.__alloyId2303 = Ti.UI.createView({
        id: "__alloyId2303"
    });
    $.__views.__alloyId2302.add($.__views.__alloyId2303);
    $.__views.__alloyId2304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2304"
    });
    $.__views.__alloyId2303.add($.__views.__alloyId2304);
    $.__views.__alloyId2305 = Ti.UI.createView({
        id: "__alloyId2305"
    });
    $.__views.__alloyId2305 && $.addTopLevelView($.__views.__alloyId2305);
    $.__views.__alloyId2306 = Ti.UI.createView({
        id: "__alloyId2306"
    });
    $.__views.__alloyId2305.add($.__views.__alloyId2306);
    $.__views.__alloyId2307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2307"
    });
    $.__views.__alloyId2306.add($.__views.__alloyId2307);
    $.__views.__alloyId2308 = Ti.UI.createView({
        id: "__alloyId2308"
    });
    $.__views.__alloyId2308 && $.addTopLevelView($.__views.__alloyId2308);
    $.__views.__alloyId2309 = Ti.UI.createView({
        id: "__alloyId2309"
    });
    $.__views.__alloyId2308.add($.__views.__alloyId2309);
    $.__views.__alloyId2310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2310"
    });
    $.__views.__alloyId2309.add($.__views.__alloyId2310);
    $.__views.__alloyId2311 = Ti.UI.createView({
        id: "__alloyId2311"
    });
    $.__views.__alloyId2311 && $.addTopLevelView($.__views.__alloyId2311);
    $.__views.__alloyId2312 = Ti.UI.createView({
        id: "__alloyId2312"
    });
    $.__views.__alloyId2311.add($.__views.__alloyId2312);
    $.__views.__alloyId2313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2313"
    });
    $.__views.__alloyId2312.add($.__views.__alloyId2313);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;