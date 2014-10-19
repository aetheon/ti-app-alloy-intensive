function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_871";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_871 = Ti.UI.createView({
        id: "widget_871"
    });
    $.__views.widget_871 && $.addTopLevelView($.__views.widget_871);
    $.__views.__alloyId22334 = Ti.UI.createView({
        id: "__alloyId22334"
    });
    $.__views.widget_871.add($.__views.__alloyId22334);
    $.__views.__alloyId22335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22335"
    });
    $.__views.__alloyId22334.add($.__views.__alloyId22335);
    $.__views.__alloyId22336 = Ti.UI.createView({
        id: "__alloyId22336"
    });
    $.__views.__alloyId22336 && $.addTopLevelView($.__views.__alloyId22336);
    $.__views.__alloyId22337 = Ti.UI.createView({
        id: "__alloyId22337"
    });
    $.__views.__alloyId22336.add($.__views.__alloyId22337);
    $.__views.__alloyId22338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22338"
    });
    $.__views.__alloyId22337.add($.__views.__alloyId22338);
    $.__views.__alloyId22339 = Ti.UI.createView({
        id: "__alloyId22339"
    });
    $.__views.__alloyId22339 && $.addTopLevelView($.__views.__alloyId22339);
    $.__views.__alloyId22340 = Ti.UI.createView({
        id: "__alloyId22340"
    });
    $.__views.__alloyId22339.add($.__views.__alloyId22340);
    $.__views.__alloyId22341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22341"
    });
    $.__views.__alloyId22340.add($.__views.__alloyId22341);
    $.__views.__alloyId22342 = Ti.UI.createView({
        id: "__alloyId22342"
    });
    $.__views.__alloyId22342 && $.addTopLevelView($.__views.__alloyId22342);
    $.__views.__alloyId22343 = Ti.UI.createView({
        id: "__alloyId22343"
    });
    $.__views.__alloyId22342.add($.__views.__alloyId22343);
    $.__views.__alloyId22344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22344"
    });
    $.__views.__alloyId22343.add($.__views.__alloyId22344);
    $.__views.__alloyId22345 = Ti.UI.createView({
        id: "__alloyId22345"
    });
    $.__views.__alloyId22345 && $.addTopLevelView($.__views.__alloyId22345);
    $.__views.__alloyId22346 = Ti.UI.createView({
        id: "__alloyId22346"
    });
    $.__views.__alloyId22345.add($.__views.__alloyId22346);
    $.__views.__alloyId22347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22347"
    });
    $.__views.__alloyId22346.add($.__views.__alloyId22347);
    $.__views.__alloyId22348 = Ti.UI.createView({
        id: "__alloyId22348"
    });
    $.__views.__alloyId22348 && $.addTopLevelView($.__views.__alloyId22348);
    $.__views.__alloyId22349 = Ti.UI.createView({
        id: "__alloyId22349"
    });
    $.__views.__alloyId22348.add($.__views.__alloyId22349);
    $.__views.__alloyId22350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22350"
    });
    $.__views.__alloyId22349.add($.__views.__alloyId22350);
    $.__views.__alloyId22351 = Ti.UI.createView({
        id: "__alloyId22351"
    });
    $.__views.__alloyId22351 && $.addTopLevelView($.__views.__alloyId22351);
    $.__views.__alloyId22352 = Ti.UI.createView({
        id: "__alloyId22352"
    });
    $.__views.__alloyId22351.add($.__views.__alloyId22352);
    $.__views.__alloyId22353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22353"
    });
    $.__views.__alloyId22352.add($.__views.__alloyId22353);
    $.__views.__alloyId22354 = Ti.UI.createView({
        id: "__alloyId22354"
    });
    $.__views.__alloyId22354 && $.addTopLevelView($.__views.__alloyId22354);
    $.__views.__alloyId22355 = Ti.UI.createView({
        id: "__alloyId22355"
    });
    $.__views.__alloyId22354.add($.__views.__alloyId22355);
    $.__views.__alloyId22356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22356"
    });
    $.__views.__alloyId22355.add($.__views.__alloyId22356);
    $.__views.__alloyId22357 = Ti.UI.createView({
        id: "__alloyId22357"
    });
    $.__views.__alloyId22357 && $.addTopLevelView($.__views.__alloyId22357);
    $.__views.__alloyId22358 = Ti.UI.createView({
        id: "__alloyId22358"
    });
    $.__views.__alloyId22357.add($.__views.__alloyId22358);
    $.__views.__alloyId22359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22359"
    });
    $.__views.__alloyId22358.add($.__views.__alloyId22359);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;