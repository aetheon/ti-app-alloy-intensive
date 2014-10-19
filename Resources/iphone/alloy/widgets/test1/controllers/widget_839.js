function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_839";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_839 = Ti.UI.createView({
        id: "widget_839"
    });
    $.__views.widget_839 && $.addTopLevelView($.__views.widget_839);
    $.__views.__alloyId21398 = Ti.UI.createView({
        id: "__alloyId21398"
    });
    $.__views.widget_839.add($.__views.__alloyId21398);
    $.__views.__alloyId21399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21399"
    });
    $.__views.__alloyId21398.add($.__views.__alloyId21399);
    $.__views.__alloyId21400 = Ti.UI.createView({
        id: "__alloyId21400"
    });
    $.__views.__alloyId21400 && $.addTopLevelView($.__views.__alloyId21400);
    $.__views.__alloyId21401 = Ti.UI.createView({
        id: "__alloyId21401"
    });
    $.__views.__alloyId21400.add($.__views.__alloyId21401);
    $.__views.__alloyId21402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21402"
    });
    $.__views.__alloyId21401.add($.__views.__alloyId21402);
    $.__views.__alloyId21403 = Ti.UI.createView({
        id: "__alloyId21403"
    });
    $.__views.__alloyId21403 && $.addTopLevelView($.__views.__alloyId21403);
    $.__views.__alloyId21404 = Ti.UI.createView({
        id: "__alloyId21404"
    });
    $.__views.__alloyId21403.add($.__views.__alloyId21404);
    $.__views.__alloyId21405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21405"
    });
    $.__views.__alloyId21404.add($.__views.__alloyId21405);
    $.__views.__alloyId21406 = Ti.UI.createView({
        id: "__alloyId21406"
    });
    $.__views.__alloyId21406 && $.addTopLevelView($.__views.__alloyId21406);
    $.__views.__alloyId21407 = Ti.UI.createView({
        id: "__alloyId21407"
    });
    $.__views.__alloyId21406.add($.__views.__alloyId21407);
    $.__views.__alloyId21408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21408"
    });
    $.__views.__alloyId21407.add($.__views.__alloyId21408);
    $.__views.__alloyId21409 = Ti.UI.createView({
        id: "__alloyId21409"
    });
    $.__views.__alloyId21409 && $.addTopLevelView($.__views.__alloyId21409);
    $.__views.__alloyId21410 = Ti.UI.createView({
        id: "__alloyId21410"
    });
    $.__views.__alloyId21409.add($.__views.__alloyId21410);
    $.__views.__alloyId21411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21411"
    });
    $.__views.__alloyId21410.add($.__views.__alloyId21411);
    $.__views.__alloyId21412 = Ti.UI.createView({
        id: "__alloyId21412"
    });
    $.__views.__alloyId21412 && $.addTopLevelView($.__views.__alloyId21412);
    $.__views.__alloyId21413 = Ti.UI.createView({
        id: "__alloyId21413"
    });
    $.__views.__alloyId21412.add($.__views.__alloyId21413);
    $.__views.__alloyId21414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21414"
    });
    $.__views.__alloyId21413.add($.__views.__alloyId21414);
    $.__views.__alloyId21415 = Ti.UI.createView({
        id: "__alloyId21415"
    });
    $.__views.__alloyId21415 && $.addTopLevelView($.__views.__alloyId21415);
    $.__views.__alloyId21416 = Ti.UI.createView({
        id: "__alloyId21416"
    });
    $.__views.__alloyId21415.add($.__views.__alloyId21416);
    $.__views.__alloyId21417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21417"
    });
    $.__views.__alloyId21416.add($.__views.__alloyId21417);
    $.__views.__alloyId21418 = Ti.UI.createView({
        id: "__alloyId21418"
    });
    $.__views.__alloyId21418 && $.addTopLevelView($.__views.__alloyId21418);
    $.__views.__alloyId21419 = Ti.UI.createView({
        id: "__alloyId21419"
    });
    $.__views.__alloyId21418.add($.__views.__alloyId21419);
    $.__views.__alloyId21420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21420"
    });
    $.__views.__alloyId21419.add($.__views.__alloyId21420);
    $.__views.__alloyId21421 = Ti.UI.createView({
        id: "__alloyId21421"
    });
    $.__views.__alloyId21421 && $.addTopLevelView($.__views.__alloyId21421);
    $.__views.__alloyId21422 = Ti.UI.createView({
        id: "__alloyId21422"
    });
    $.__views.__alloyId21421.add($.__views.__alloyId21422);
    $.__views.__alloyId21423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21423"
    });
    $.__views.__alloyId21422.add($.__views.__alloyId21423);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;