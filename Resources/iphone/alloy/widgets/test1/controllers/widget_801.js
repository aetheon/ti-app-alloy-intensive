function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_801";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_801 = Ti.UI.createView({
        id: "widget_801"
    });
    $.__views.widget_801 && $.addTopLevelView($.__views.widget_801);
    $.__views.__alloyId20332 = Ti.UI.createView({
        id: "__alloyId20332"
    });
    $.__views.widget_801.add($.__views.__alloyId20332);
    $.__views.__alloyId20333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20333"
    });
    $.__views.__alloyId20332.add($.__views.__alloyId20333);
    $.__views.__alloyId20334 = Ti.UI.createView({
        id: "__alloyId20334"
    });
    $.__views.__alloyId20334 && $.addTopLevelView($.__views.__alloyId20334);
    $.__views.__alloyId20335 = Ti.UI.createView({
        id: "__alloyId20335"
    });
    $.__views.__alloyId20334.add($.__views.__alloyId20335);
    $.__views.__alloyId20336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20336"
    });
    $.__views.__alloyId20335.add($.__views.__alloyId20336);
    $.__views.__alloyId20337 = Ti.UI.createView({
        id: "__alloyId20337"
    });
    $.__views.__alloyId20337 && $.addTopLevelView($.__views.__alloyId20337);
    $.__views.__alloyId20338 = Ti.UI.createView({
        id: "__alloyId20338"
    });
    $.__views.__alloyId20337.add($.__views.__alloyId20338);
    $.__views.__alloyId20339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20339"
    });
    $.__views.__alloyId20338.add($.__views.__alloyId20339);
    $.__views.__alloyId20340 = Ti.UI.createView({
        id: "__alloyId20340"
    });
    $.__views.__alloyId20340 && $.addTopLevelView($.__views.__alloyId20340);
    $.__views.__alloyId20341 = Ti.UI.createView({
        id: "__alloyId20341"
    });
    $.__views.__alloyId20340.add($.__views.__alloyId20341);
    $.__views.__alloyId20342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20342"
    });
    $.__views.__alloyId20341.add($.__views.__alloyId20342);
    $.__views.__alloyId20343 = Ti.UI.createView({
        id: "__alloyId20343"
    });
    $.__views.__alloyId20343 && $.addTopLevelView($.__views.__alloyId20343);
    $.__views.__alloyId20344 = Ti.UI.createView({
        id: "__alloyId20344"
    });
    $.__views.__alloyId20343.add($.__views.__alloyId20344);
    $.__views.__alloyId20345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20345"
    });
    $.__views.__alloyId20344.add($.__views.__alloyId20345);
    $.__views.__alloyId20346 = Ti.UI.createView({
        id: "__alloyId20346"
    });
    $.__views.__alloyId20346 && $.addTopLevelView($.__views.__alloyId20346);
    $.__views.__alloyId20347 = Ti.UI.createView({
        id: "__alloyId20347"
    });
    $.__views.__alloyId20346.add($.__views.__alloyId20347);
    $.__views.__alloyId20348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20348"
    });
    $.__views.__alloyId20347.add($.__views.__alloyId20348);
    $.__views.__alloyId20349 = Ti.UI.createView({
        id: "__alloyId20349"
    });
    $.__views.__alloyId20349 && $.addTopLevelView($.__views.__alloyId20349);
    $.__views.__alloyId20350 = Ti.UI.createView({
        id: "__alloyId20350"
    });
    $.__views.__alloyId20349.add($.__views.__alloyId20350);
    $.__views.__alloyId20351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20351"
    });
    $.__views.__alloyId20350.add($.__views.__alloyId20351);
    $.__views.__alloyId20352 = Ti.UI.createView({
        id: "__alloyId20352"
    });
    $.__views.__alloyId20352 && $.addTopLevelView($.__views.__alloyId20352);
    $.__views.__alloyId20353 = Ti.UI.createView({
        id: "__alloyId20353"
    });
    $.__views.__alloyId20352.add($.__views.__alloyId20353);
    $.__views.__alloyId20354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20354"
    });
    $.__views.__alloyId20353.add($.__views.__alloyId20354);
    $.__views.__alloyId20355 = Ti.UI.createView({
        id: "__alloyId20355"
    });
    $.__views.__alloyId20355 && $.addTopLevelView($.__views.__alloyId20355);
    $.__views.__alloyId20356 = Ti.UI.createView({
        id: "__alloyId20356"
    });
    $.__views.__alloyId20355.add($.__views.__alloyId20356);
    $.__views.__alloyId20357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20357"
    });
    $.__views.__alloyId20356.add($.__views.__alloyId20357);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;