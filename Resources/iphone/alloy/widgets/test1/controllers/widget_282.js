function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_282";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_282 = Ti.UI.createView({
        id: "widget_282"
    });
    $.__views.widget_282 && $.addTopLevelView($.__views.widget_282);
    $.__views.__alloyId5330 = Ti.UI.createView({
        id: "__alloyId5330"
    });
    $.__views.widget_282.add($.__views.__alloyId5330);
    $.__views.__alloyId5331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5331"
    });
    $.__views.__alloyId5330.add($.__views.__alloyId5331);
    $.__views.__alloyId5332 = Ti.UI.createView({
        id: "__alloyId5332"
    });
    $.__views.__alloyId5332 && $.addTopLevelView($.__views.__alloyId5332);
    $.__views.__alloyId5333 = Ti.UI.createView({
        id: "__alloyId5333"
    });
    $.__views.__alloyId5332.add($.__views.__alloyId5333);
    $.__views.__alloyId5334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5334"
    });
    $.__views.__alloyId5333.add($.__views.__alloyId5334);
    $.__views.__alloyId5335 = Ti.UI.createView({
        id: "__alloyId5335"
    });
    $.__views.__alloyId5335 && $.addTopLevelView($.__views.__alloyId5335);
    $.__views.__alloyId5336 = Ti.UI.createView({
        id: "__alloyId5336"
    });
    $.__views.__alloyId5335.add($.__views.__alloyId5336);
    $.__views.__alloyId5337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5337"
    });
    $.__views.__alloyId5336.add($.__views.__alloyId5337);
    $.__views.__alloyId5338 = Ti.UI.createView({
        id: "__alloyId5338"
    });
    $.__views.__alloyId5338 && $.addTopLevelView($.__views.__alloyId5338);
    $.__views.__alloyId5339 = Ti.UI.createView({
        id: "__alloyId5339"
    });
    $.__views.__alloyId5338.add($.__views.__alloyId5339);
    $.__views.__alloyId5340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5340"
    });
    $.__views.__alloyId5339.add($.__views.__alloyId5340);
    $.__views.__alloyId5341 = Ti.UI.createView({
        id: "__alloyId5341"
    });
    $.__views.__alloyId5341 && $.addTopLevelView($.__views.__alloyId5341);
    $.__views.__alloyId5342 = Ti.UI.createView({
        id: "__alloyId5342"
    });
    $.__views.__alloyId5341.add($.__views.__alloyId5342);
    $.__views.__alloyId5343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5343"
    });
    $.__views.__alloyId5342.add($.__views.__alloyId5343);
    $.__views.__alloyId5344 = Ti.UI.createView({
        id: "__alloyId5344"
    });
    $.__views.__alloyId5344 && $.addTopLevelView($.__views.__alloyId5344);
    $.__views.__alloyId5345 = Ti.UI.createView({
        id: "__alloyId5345"
    });
    $.__views.__alloyId5344.add($.__views.__alloyId5345);
    $.__views.__alloyId5346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5346"
    });
    $.__views.__alloyId5345.add($.__views.__alloyId5346);
    $.__views.__alloyId5347 = Ti.UI.createView({
        id: "__alloyId5347"
    });
    $.__views.__alloyId5347 && $.addTopLevelView($.__views.__alloyId5347);
    $.__views.__alloyId5348 = Ti.UI.createView({
        id: "__alloyId5348"
    });
    $.__views.__alloyId5347.add($.__views.__alloyId5348);
    $.__views.__alloyId5349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5349"
    });
    $.__views.__alloyId5348.add($.__views.__alloyId5349);
    $.__views.__alloyId5350 = Ti.UI.createView({
        id: "__alloyId5350"
    });
    $.__views.__alloyId5350 && $.addTopLevelView($.__views.__alloyId5350);
    $.__views.__alloyId5351 = Ti.UI.createView({
        id: "__alloyId5351"
    });
    $.__views.__alloyId5350.add($.__views.__alloyId5351);
    $.__views.__alloyId5352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5352"
    });
    $.__views.__alloyId5351.add($.__views.__alloyId5352);
    $.__views.__alloyId5353 = Ti.UI.createView({
        id: "__alloyId5353"
    });
    $.__views.__alloyId5353 && $.addTopLevelView($.__views.__alloyId5353);
    $.__views.__alloyId5354 = Ti.UI.createView({
        id: "__alloyId5354"
    });
    $.__views.__alloyId5353.add($.__views.__alloyId5354);
    $.__views.__alloyId5355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5355"
    });
    $.__views.__alloyId5354.add($.__views.__alloyId5355);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;