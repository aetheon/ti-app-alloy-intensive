function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_663";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_663 = Ti.UI.createView({
        id: "widget_663"
    });
    $.__views.widget_663 && $.addTopLevelView($.__views.widget_663);
    $.__views.__alloyId16328 = Ti.UI.createView({
        id: "__alloyId16328"
    });
    $.__views.widget_663.add($.__views.__alloyId16328);
    $.__views.__alloyId16329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16329"
    });
    $.__views.__alloyId16328.add($.__views.__alloyId16329);
    $.__views.__alloyId16330 = Ti.UI.createView({
        id: "__alloyId16330"
    });
    $.__views.__alloyId16330 && $.addTopLevelView($.__views.__alloyId16330);
    $.__views.__alloyId16331 = Ti.UI.createView({
        id: "__alloyId16331"
    });
    $.__views.__alloyId16330.add($.__views.__alloyId16331);
    $.__views.__alloyId16332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16332"
    });
    $.__views.__alloyId16331.add($.__views.__alloyId16332);
    $.__views.__alloyId16333 = Ti.UI.createView({
        id: "__alloyId16333"
    });
    $.__views.__alloyId16333 && $.addTopLevelView($.__views.__alloyId16333);
    $.__views.__alloyId16334 = Ti.UI.createView({
        id: "__alloyId16334"
    });
    $.__views.__alloyId16333.add($.__views.__alloyId16334);
    $.__views.__alloyId16335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16335"
    });
    $.__views.__alloyId16334.add($.__views.__alloyId16335);
    $.__views.__alloyId16336 = Ti.UI.createView({
        id: "__alloyId16336"
    });
    $.__views.__alloyId16336 && $.addTopLevelView($.__views.__alloyId16336);
    $.__views.__alloyId16337 = Ti.UI.createView({
        id: "__alloyId16337"
    });
    $.__views.__alloyId16336.add($.__views.__alloyId16337);
    $.__views.__alloyId16338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16338"
    });
    $.__views.__alloyId16337.add($.__views.__alloyId16338);
    $.__views.__alloyId16339 = Ti.UI.createView({
        id: "__alloyId16339"
    });
    $.__views.__alloyId16339 && $.addTopLevelView($.__views.__alloyId16339);
    $.__views.__alloyId16340 = Ti.UI.createView({
        id: "__alloyId16340"
    });
    $.__views.__alloyId16339.add($.__views.__alloyId16340);
    $.__views.__alloyId16341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16341"
    });
    $.__views.__alloyId16340.add($.__views.__alloyId16341);
    $.__views.__alloyId16342 = Ti.UI.createView({
        id: "__alloyId16342"
    });
    $.__views.__alloyId16342 && $.addTopLevelView($.__views.__alloyId16342);
    $.__views.__alloyId16343 = Ti.UI.createView({
        id: "__alloyId16343"
    });
    $.__views.__alloyId16342.add($.__views.__alloyId16343);
    $.__views.__alloyId16344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16344"
    });
    $.__views.__alloyId16343.add($.__views.__alloyId16344);
    $.__views.__alloyId16345 = Ti.UI.createView({
        id: "__alloyId16345"
    });
    $.__views.__alloyId16345 && $.addTopLevelView($.__views.__alloyId16345);
    $.__views.__alloyId16346 = Ti.UI.createView({
        id: "__alloyId16346"
    });
    $.__views.__alloyId16345.add($.__views.__alloyId16346);
    $.__views.__alloyId16347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16347"
    });
    $.__views.__alloyId16346.add($.__views.__alloyId16347);
    $.__views.__alloyId16348 = Ti.UI.createView({
        id: "__alloyId16348"
    });
    $.__views.__alloyId16348 && $.addTopLevelView($.__views.__alloyId16348);
    $.__views.__alloyId16349 = Ti.UI.createView({
        id: "__alloyId16349"
    });
    $.__views.__alloyId16348.add($.__views.__alloyId16349);
    $.__views.__alloyId16350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16350"
    });
    $.__views.__alloyId16349.add($.__views.__alloyId16350);
    $.__views.__alloyId16351 = Ti.UI.createView({
        id: "__alloyId16351"
    });
    $.__views.__alloyId16351 && $.addTopLevelView($.__views.__alloyId16351);
    $.__views.__alloyId16352 = Ti.UI.createView({
        id: "__alloyId16352"
    });
    $.__views.__alloyId16351.add($.__views.__alloyId16352);
    $.__views.__alloyId16353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16353"
    });
    $.__views.__alloyId16352.add($.__views.__alloyId16353);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;