function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_940";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_940 = Ti.UI.createView({
        id: "widget_940"
    });
    $.__views.widget_940 && $.addTopLevelView($.__views.widget_940);
    $.__views.__alloyId24336 = Ti.UI.createView({
        id: "__alloyId24336"
    });
    $.__views.widget_940.add($.__views.__alloyId24336);
    $.__views.__alloyId24337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24337"
    });
    $.__views.__alloyId24336.add($.__views.__alloyId24337);
    $.__views.__alloyId24338 = Ti.UI.createView({
        id: "__alloyId24338"
    });
    $.__views.__alloyId24338 && $.addTopLevelView($.__views.__alloyId24338);
    $.__views.__alloyId24339 = Ti.UI.createView({
        id: "__alloyId24339"
    });
    $.__views.__alloyId24338.add($.__views.__alloyId24339);
    $.__views.__alloyId24340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24340"
    });
    $.__views.__alloyId24339.add($.__views.__alloyId24340);
    $.__views.__alloyId24341 = Ti.UI.createView({
        id: "__alloyId24341"
    });
    $.__views.__alloyId24341 && $.addTopLevelView($.__views.__alloyId24341);
    $.__views.__alloyId24342 = Ti.UI.createView({
        id: "__alloyId24342"
    });
    $.__views.__alloyId24341.add($.__views.__alloyId24342);
    $.__views.__alloyId24343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24343"
    });
    $.__views.__alloyId24342.add($.__views.__alloyId24343);
    $.__views.__alloyId24344 = Ti.UI.createView({
        id: "__alloyId24344"
    });
    $.__views.__alloyId24344 && $.addTopLevelView($.__views.__alloyId24344);
    $.__views.__alloyId24345 = Ti.UI.createView({
        id: "__alloyId24345"
    });
    $.__views.__alloyId24344.add($.__views.__alloyId24345);
    $.__views.__alloyId24346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24346"
    });
    $.__views.__alloyId24345.add($.__views.__alloyId24346);
    $.__views.__alloyId24347 = Ti.UI.createView({
        id: "__alloyId24347"
    });
    $.__views.__alloyId24347 && $.addTopLevelView($.__views.__alloyId24347);
    $.__views.__alloyId24348 = Ti.UI.createView({
        id: "__alloyId24348"
    });
    $.__views.__alloyId24347.add($.__views.__alloyId24348);
    $.__views.__alloyId24349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24349"
    });
    $.__views.__alloyId24348.add($.__views.__alloyId24349);
    $.__views.__alloyId24350 = Ti.UI.createView({
        id: "__alloyId24350"
    });
    $.__views.__alloyId24350 && $.addTopLevelView($.__views.__alloyId24350);
    $.__views.__alloyId24351 = Ti.UI.createView({
        id: "__alloyId24351"
    });
    $.__views.__alloyId24350.add($.__views.__alloyId24351);
    $.__views.__alloyId24352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24352"
    });
    $.__views.__alloyId24351.add($.__views.__alloyId24352);
    $.__views.__alloyId24353 = Ti.UI.createView({
        id: "__alloyId24353"
    });
    $.__views.__alloyId24353 && $.addTopLevelView($.__views.__alloyId24353);
    $.__views.__alloyId24354 = Ti.UI.createView({
        id: "__alloyId24354"
    });
    $.__views.__alloyId24353.add($.__views.__alloyId24354);
    $.__views.__alloyId24355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24355"
    });
    $.__views.__alloyId24354.add($.__views.__alloyId24355);
    $.__views.__alloyId24356 = Ti.UI.createView({
        id: "__alloyId24356"
    });
    $.__views.__alloyId24356 && $.addTopLevelView($.__views.__alloyId24356);
    $.__views.__alloyId24357 = Ti.UI.createView({
        id: "__alloyId24357"
    });
    $.__views.__alloyId24356.add($.__views.__alloyId24357);
    $.__views.__alloyId24358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24358"
    });
    $.__views.__alloyId24357.add($.__views.__alloyId24358);
    $.__views.__alloyId24359 = Ti.UI.createView({
        id: "__alloyId24359"
    });
    $.__views.__alloyId24359 && $.addTopLevelView($.__views.__alloyId24359);
    $.__views.__alloyId24360 = Ti.UI.createView({
        id: "__alloyId24360"
    });
    $.__views.__alloyId24359.add($.__views.__alloyId24360);
    $.__views.__alloyId24361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24361"
    });
    $.__views.__alloyId24360.add($.__views.__alloyId24361);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;