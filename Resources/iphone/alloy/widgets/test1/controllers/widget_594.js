function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_594";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_594 = Ti.UI.createView({
        id: "widget_594"
    });
    $.__views.widget_594 && $.addTopLevelView($.__views.widget_594);
    $.__views.__alloyId14326 = Ti.UI.createView({
        id: "__alloyId14326"
    });
    $.__views.widget_594.add($.__views.__alloyId14326);
    $.__views.__alloyId14327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14327"
    });
    $.__views.__alloyId14326.add($.__views.__alloyId14327);
    $.__views.__alloyId14328 = Ti.UI.createView({
        id: "__alloyId14328"
    });
    $.__views.__alloyId14328 && $.addTopLevelView($.__views.__alloyId14328);
    $.__views.__alloyId14329 = Ti.UI.createView({
        id: "__alloyId14329"
    });
    $.__views.__alloyId14328.add($.__views.__alloyId14329);
    $.__views.__alloyId14330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14330"
    });
    $.__views.__alloyId14329.add($.__views.__alloyId14330);
    $.__views.__alloyId14331 = Ti.UI.createView({
        id: "__alloyId14331"
    });
    $.__views.__alloyId14331 && $.addTopLevelView($.__views.__alloyId14331);
    $.__views.__alloyId14332 = Ti.UI.createView({
        id: "__alloyId14332"
    });
    $.__views.__alloyId14331.add($.__views.__alloyId14332);
    $.__views.__alloyId14333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14333"
    });
    $.__views.__alloyId14332.add($.__views.__alloyId14333);
    $.__views.__alloyId14334 = Ti.UI.createView({
        id: "__alloyId14334"
    });
    $.__views.__alloyId14334 && $.addTopLevelView($.__views.__alloyId14334);
    $.__views.__alloyId14335 = Ti.UI.createView({
        id: "__alloyId14335"
    });
    $.__views.__alloyId14334.add($.__views.__alloyId14335);
    $.__views.__alloyId14336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14336"
    });
    $.__views.__alloyId14335.add($.__views.__alloyId14336);
    $.__views.__alloyId14337 = Ti.UI.createView({
        id: "__alloyId14337"
    });
    $.__views.__alloyId14337 && $.addTopLevelView($.__views.__alloyId14337);
    $.__views.__alloyId14338 = Ti.UI.createView({
        id: "__alloyId14338"
    });
    $.__views.__alloyId14337.add($.__views.__alloyId14338);
    $.__views.__alloyId14339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14339"
    });
    $.__views.__alloyId14338.add($.__views.__alloyId14339);
    $.__views.__alloyId14340 = Ti.UI.createView({
        id: "__alloyId14340"
    });
    $.__views.__alloyId14340 && $.addTopLevelView($.__views.__alloyId14340);
    $.__views.__alloyId14341 = Ti.UI.createView({
        id: "__alloyId14341"
    });
    $.__views.__alloyId14340.add($.__views.__alloyId14341);
    $.__views.__alloyId14342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14342"
    });
    $.__views.__alloyId14341.add($.__views.__alloyId14342);
    $.__views.__alloyId14343 = Ti.UI.createView({
        id: "__alloyId14343"
    });
    $.__views.__alloyId14343 && $.addTopLevelView($.__views.__alloyId14343);
    $.__views.__alloyId14344 = Ti.UI.createView({
        id: "__alloyId14344"
    });
    $.__views.__alloyId14343.add($.__views.__alloyId14344);
    $.__views.__alloyId14345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14345"
    });
    $.__views.__alloyId14344.add($.__views.__alloyId14345);
    $.__views.__alloyId14346 = Ti.UI.createView({
        id: "__alloyId14346"
    });
    $.__views.__alloyId14346 && $.addTopLevelView($.__views.__alloyId14346);
    $.__views.__alloyId14347 = Ti.UI.createView({
        id: "__alloyId14347"
    });
    $.__views.__alloyId14346.add($.__views.__alloyId14347);
    $.__views.__alloyId14348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14348"
    });
    $.__views.__alloyId14347.add($.__views.__alloyId14348);
    $.__views.__alloyId14349 = Ti.UI.createView({
        id: "__alloyId14349"
    });
    $.__views.__alloyId14349 && $.addTopLevelView($.__views.__alloyId14349);
    $.__views.__alloyId14350 = Ti.UI.createView({
        id: "__alloyId14350"
    });
    $.__views.__alloyId14349.add($.__views.__alloyId14350);
    $.__views.__alloyId14351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14351"
    });
    $.__views.__alloyId14350.add($.__views.__alloyId14351);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;