function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_490";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_490 = Ti.UI.createView({
        id: "widget_490"
    });
    $.__views.widget_490 && $.addTopLevelView($.__views.widget_490);
    $.__views.__alloyId11336 = Ti.UI.createView({
        id: "__alloyId11336"
    });
    $.__views.widget_490.add($.__views.__alloyId11336);
    $.__views.__alloyId11337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11337"
    });
    $.__views.__alloyId11336.add($.__views.__alloyId11337);
    $.__views.__alloyId11338 = Ti.UI.createView({
        id: "__alloyId11338"
    });
    $.__views.__alloyId11338 && $.addTopLevelView($.__views.__alloyId11338);
    $.__views.__alloyId11339 = Ti.UI.createView({
        id: "__alloyId11339"
    });
    $.__views.__alloyId11338.add($.__views.__alloyId11339);
    $.__views.__alloyId11340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11340"
    });
    $.__views.__alloyId11339.add($.__views.__alloyId11340);
    $.__views.__alloyId11341 = Ti.UI.createView({
        id: "__alloyId11341"
    });
    $.__views.__alloyId11341 && $.addTopLevelView($.__views.__alloyId11341);
    $.__views.__alloyId11342 = Ti.UI.createView({
        id: "__alloyId11342"
    });
    $.__views.__alloyId11341.add($.__views.__alloyId11342);
    $.__views.__alloyId11343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11343"
    });
    $.__views.__alloyId11342.add($.__views.__alloyId11343);
    $.__views.__alloyId11344 = Ti.UI.createView({
        id: "__alloyId11344"
    });
    $.__views.__alloyId11344 && $.addTopLevelView($.__views.__alloyId11344);
    $.__views.__alloyId11345 = Ti.UI.createView({
        id: "__alloyId11345"
    });
    $.__views.__alloyId11344.add($.__views.__alloyId11345);
    $.__views.__alloyId11346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11346"
    });
    $.__views.__alloyId11345.add($.__views.__alloyId11346);
    $.__views.__alloyId11347 = Ti.UI.createView({
        id: "__alloyId11347"
    });
    $.__views.__alloyId11347 && $.addTopLevelView($.__views.__alloyId11347);
    $.__views.__alloyId11348 = Ti.UI.createView({
        id: "__alloyId11348"
    });
    $.__views.__alloyId11347.add($.__views.__alloyId11348);
    $.__views.__alloyId11349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11349"
    });
    $.__views.__alloyId11348.add($.__views.__alloyId11349);
    $.__views.__alloyId11350 = Ti.UI.createView({
        id: "__alloyId11350"
    });
    $.__views.__alloyId11350 && $.addTopLevelView($.__views.__alloyId11350);
    $.__views.__alloyId11351 = Ti.UI.createView({
        id: "__alloyId11351"
    });
    $.__views.__alloyId11350.add($.__views.__alloyId11351);
    $.__views.__alloyId11352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11352"
    });
    $.__views.__alloyId11351.add($.__views.__alloyId11352);
    $.__views.__alloyId11353 = Ti.UI.createView({
        id: "__alloyId11353"
    });
    $.__views.__alloyId11353 && $.addTopLevelView($.__views.__alloyId11353);
    $.__views.__alloyId11354 = Ti.UI.createView({
        id: "__alloyId11354"
    });
    $.__views.__alloyId11353.add($.__views.__alloyId11354);
    $.__views.__alloyId11355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11355"
    });
    $.__views.__alloyId11354.add($.__views.__alloyId11355);
    $.__views.__alloyId11356 = Ti.UI.createView({
        id: "__alloyId11356"
    });
    $.__views.__alloyId11356 && $.addTopLevelView($.__views.__alloyId11356);
    $.__views.__alloyId11357 = Ti.UI.createView({
        id: "__alloyId11357"
    });
    $.__views.__alloyId11356.add($.__views.__alloyId11357);
    $.__views.__alloyId11358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11358"
    });
    $.__views.__alloyId11357.add($.__views.__alloyId11358);
    $.__views.__alloyId11359 = Ti.UI.createView({
        id: "__alloyId11359"
    });
    $.__views.__alloyId11359 && $.addTopLevelView($.__views.__alloyId11359);
    $.__views.__alloyId11360 = Ti.UI.createView({
        id: "__alloyId11360"
    });
    $.__views.__alloyId11359.add($.__views.__alloyId11360);
    $.__views.__alloyId11361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11361"
    });
    $.__views.__alloyId11360.add($.__views.__alloyId11361);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;