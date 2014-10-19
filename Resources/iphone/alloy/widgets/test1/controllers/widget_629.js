function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_629";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_629 = Ti.UI.createView({
        id: "widget_629"
    });
    $.__views.widget_629 && $.addTopLevelView($.__views.widget_629);
    $.__views.__alloyId15340 = Ti.UI.createView({
        id: "__alloyId15340"
    });
    $.__views.widget_629.add($.__views.__alloyId15340);
    $.__views.__alloyId15341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15341"
    });
    $.__views.__alloyId15340.add($.__views.__alloyId15341);
    $.__views.__alloyId15342 = Ti.UI.createView({
        id: "__alloyId15342"
    });
    $.__views.__alloyId15342 && $.addTopLevelView($.__views.__alloyId15342);
    $.__views.__alloyId15343 = Ti.UI.createView({
        id: "__alloyId15343"
    });
    $.__views.__alloyId15342.add($.__views.__alloyId15343);
    $.__views.__alloyId15344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15344"
    });
    $.__views.__alloyId15343.add($.__views.__alloyId15344);
    $.__views.__alloyId15345 = Ti.UI.createView({
        id: "__alloyId15345"
    });
    $.__views.__alloyId15345 && $.addTopLevelView($.__views.__alloyId15345);
    $.__views.__alloyId15346 = Ti.UI.createView({
        id: "__alloyId15346"
    });
    $.__views.__alloyId15345.add($.__views.__alloyId15346);
    $.__views.__alloyId15347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15347"
    });
    $.__views.__alloyId15346.add($.__views.__alloyId15347);
    $.__views.__alloyId15348 = Ti.UI.createView({
        id: "__alloyId15348"
    });
    $.__views.__alloyId15348 && $.addTopLevelView($.__views.__alloyId15348);
    $.__views.__alloyId15349 = Ti.UI.createView({
        id: "__alloyId15349"
    });
    $.__views.__alloyId15348.add($.__views.__alloyId15349);
    $.__views.__alloyId15350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15350"
    });
    $.__views.__alloyId15349.add($.__views.__alloyId15350);
    $.__views.__alloyId15351 = Ti.UI.createView({
        id: "__alloyId15351"
    });
    $.__views.__alloyId15351 && $.addTopLevelView($.__views.__alloyId15351);
    $.__views.__alloyId15352 = Ti.UI.createView({
        id: "__alloyId15352"
    });
    $.__views.__alloyId15351.add($.__views.__alloyId15352);
    $.__views.__alloyId15353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15353"
    });
    $.__views.__alloyId15352.add($.__views.__alloyId15353);
    $.__views.__alloyId15354 = Ti.UI.createView({
        id: "__alloyId15354"
    });
    $.__views.__alloyId15354 && $.addTopLevelView($.__views.__alloyId15354);
    $.__views.__alloyId15355 = Ti.UI.createView({
        id: "__alloyId15355"
    });
    $.__views.__alloyId15354.add($.__views.__alloyId15355);
    $.__views.__alloyId15356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15356"
    });
    $.__views.__alloyId15355.add($.__views.__alloyId15356);
    $.__views.__alloyId15357 = Ti.UI.createView({
        id: "__alloyId15357"
    });
    $.__views.__alloyId15357 && $.addTopLevelView($.__views.__alloyId15357);
    $.__views.__alloyId15358 = Ti.UI.createView({
        id: "__alloyId15358"
    });
    $.__views.__alloyId15357.add($.__views.__alloyId15358);
    $.__views.__alloyId15359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15359"
    });
    $.__views.__alloyId15358.add($.__views.__alloyId15359);
    $.__views.__alloyId15360 = Ti.UI.createView({
        id: "__alloyId15360"
    });
    $.__views.__alloyId15360 && $.addTopLevelView($.__views.__alloyId15360);
    $.__views.__alloyId15361 = Ti.UI.createView({
        id: "__alloyId15361"
    });
    $.__views.__alloyId15360.add($.__views.__alloyId15361);
    $.__views.__alloyId15362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15362"
    });
    $.__views.__alloyId15361.add($.__views.__alloyId15362);
    $.__views.__alloyId15363 = Ti.UI.createView({
        id: "__alloyId15363"
    });
    $.__views.__alloyId15363 && $.addTopLevelView($.__views.__alloyId15363);
    $.__views.__alloyId15364 = Ti.UI.createView({
        id: "__alloyId15364"
    });
    $.__views.__alloyId15363.add($.__views.__alloyId15364);
    $.__views.__alloyId15365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15365"
    });
    $.__views.__alloyId15364.add($.__views.__alloyId15365);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;