function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_732";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_732 = Ti.UI.createView({
        id: "widget_732"
    });
    $.__views.widget_732 && $.addTopLevelView($.__views.widget_732);
    $.__views.__alloyId18330 = Ti.UI.createView({
        id: "__alloyId18330"
    });
    $.__views.widget_732.add($.__views.__alloyId18330);
    $.__views.__alloyId18331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18331"
    });
    $.__views.__alloyId18330.add($.__views.__alloyId18331);
    $.__views.__alloyId18332 = Ti.UI.createView({
        id: "__alloyId18332"
    });
    $.__views.__alloyId18332 && $.addTopLevelView($.__views.__alloyId18332);
    $.__views.__alloyId18333 = Ti.UI.createView({
        id: "__alloyId18333"
    });
    $.__views.__alloyId18332.add($.__views.__alloyId18333);
    $.__views.__alloyId18334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18334"
    });
    $.__views.__alloyId18333.add($.__views.__alloyId18334);
    $.__views.__alloyId18335 = Ti.UI.createView({
        id: "__alloyId18335"
    });
    $.__views.__alloyId18335 && $.addTopLevelView($.__views.__alloyId18335);
    $.__views.__alloyId18336 = Ti.UI.createView({
        id: "__alloyId18336"
    });
    $.__views.__alloyId18335.add($.__views.__alloyId18336);
    $.__views.__alloyId18337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18337"
    });
    $.__views.__alloyId18336.add($.__views.__alloyId18337);
    $.__views.__alloyId18338 = Ti.UI.createView({
        id: "__alloyId18338"
    });
    $.__views.__alloyId18338 && $.addTopLevelView($.__views.__alloyId18338);
    $.__views.__alloyId18339 = Ti.UI.createView({
        id: "__alloyId18339"
    });
    $.__views.__alloyId18338.add($.__views.__alloyId18339);
    $.__views.__alloyId18340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18340"
    });
    $.__views.__alloyId18339.add($.__views.__alloyId18340);
    $.__views.__alloyId18341 = Ti.UI.createView({
        id: "__alloyId18341"
    });
    $.__views.__alloyId18341 && $.addTopLevelView($.__views.__alloyId18341);
    $.__views.__alloyId18342 = Ti.UI.createView({
        id: "__alloyId18342"
    });
    $.__views.__alloyId18341.add($.__views.__alloyId18342);
    $.__views.__alloyId18343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18343"
    });
    $.__views.__alloyId18342.add($.__views.__alloyId18343);
    $.__views.__alloyId18344 = Ti.UI.createView({
        id: "__alloyId18344"
    });
    $.__views.__alloyId18344 && $.addTopLevelView($.__views.__alloyId18344);
    $.__views.__alloyId18345 = Ti.UI.createView({
        id: "__alloyId18345"
    });
    $.__views.__alloyId18344.add($.__views.__alloyId18345);
    $.__views.__alloyId18346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18346"
    });
    $.__views.__alloyId18345.add($.__views.__alloyId18346);
    $.__views.__alloyId18347 = Ti.UI.createView({
        id: "__alloyId18347"
    });
    $.__views.__alloyId18347 && $.addTopLevelView($.__views.__alloyId18347);
    $.__views.__alloyId18348 = Ti.UI.createView({
        id: "__alloyId18348"
    });
    $.__views.__alloyId18347.add($.__views.__alloyId18348);
    $.__views.__alloyId18349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18349"
    });
    $.__views.__alloyId18348.add($.__views.__alloyId18349);
    $.__views.__alloyId18350 = Ti.UI.createView({
        id: "__alloyId18350"
    });
    $.__views.__alloyId18350 && $.addTopLevelView($.__views.__alloyId18350);
    $.__views.__alloyId18351 = Ti.UI.createView({
        id: "__alloyId18351"
    });
    $.__views.__alloyId18350.add($.__views.__alloyId18351);
    $.__views.__alloyId18352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18352"
    });
    $.__views.__alloyId18351.add($.__views.__alloyId18352);
    $.__views.__alloyId18353 = Ti.UI.createView({
        id: "__alloyId18353"
    });
    $.__views.__alloyId18353 && $.addTopLevelView($.__views.__alloyId18353);
    $.__views.__alloyId18354 = Ti.UI.createView({
        id: "__alloyId18354"
    });
    $.__views.__alloyId18353.add($.__views.__alloyId18354);
    $.__views.__alloyId18355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18355"
    });
    $.__views.__alloyId18354.add($.__views.__alloyId18355);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;