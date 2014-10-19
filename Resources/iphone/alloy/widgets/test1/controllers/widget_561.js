function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_561";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_561 = Ti.UI.createView({
        id: "widget_561"
    });
    $.__views.widget_561 && $.addTopLevelView($.__views.widget_561);
    $.__views.__alloyId13390 = Ti.UI.createView({
        id: "__alloyId13390"
    });
    $.__views.widget_561.add($.__views.__alloyId13390);
    $.__views.__alloyId13391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13391"
    });
    $.__views.__alloyId13390.add($.__views.__alloyId13391);
    $.__views.__alloyId13392 = Ti.UI.createView({
        id: "__alloyId13392"
    });
    $.__views.__alloyId13392 && $.addTopLevelView($.__views.__alloyId13392);
    $.__views.__alloyId13393 = Ti.UI.createView({
        id: "__alloyId13393"
    });
    $.__views.__alloyId13392.add($.__views.__alloyId13393);
    $.__views.__alloyId13394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13394"
    });
    $.__views.__alloyId13393.add($.__views.__alloyId13394);
    $.__views.__alloyId13395 = Ti.UI.createView({
        id: "__alloyId13395"
    });
    $.__views.__alloyId13395 && $.addTopLevelView($.__views.__alloyId13395);
    $.__views.__alloyId13396 = Ti.UI.createView({
        id: "__alloyId13396"
    });
    $.__views.__alloyId13395.add($.__views.__alloyId13396);
    $.__views.__alloyId13397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13397"
    });
    $.__views.__alloyId13396.add($.__views.__alloyId13397);
    $.__views.__alloyId13398 = Ti.UI.createView({
        id: "__alloyId13398"
    });
    $.__views.__alloyId13398 && $.addTopLevelView($.__views.__alloyId13398);
    $.__views.__alloyId13399 = Ti.UI.createView({
        id: "__alloyId13399"
    });
    $.__views.__alloyId13398.add($.__views.__alloyId13399);
    $.__views.__alloyId13400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13400"
    });
    $.__views.__alloyId13399.add($.__views.__alloyId13400);
    $.__views.__alloyId13401 = Ti.UI.createView({
        id: "__alloyId13401"
    });
    $.__views.__alloyId13401 && $.addTopLevelView($.__views.__alloyId13401);
    $.__views.__alloyId13402 = Ti.UI.createView({
        id: "__alloyId13402"
    });
    $.__views.__alloyId13401.add($.__views.__alloyId13402);
    $.__views.__alloyId13403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13403"
    });
    $.__views.__alloyId13402.add($.__views.__alloyId13403);
    $.__views.__alloyId13404 = Ti.UI.createView({
        id: "__alloyId13404"
    });
    $.__views.__alloyId13404 && $.addTopLevelView($.__views.__alloyId13404);
    $.__views.__alloyId13405 = Ti.UI.createView({
        id: "__alloyId13405"
    });
    $.__views.__alloyId13404.add($.__views.__alloyId13405);
    $.__views.__alloyId13406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13406"
    });
    $.__views.__alloyId13405.add($.__views.__alloyId13406);
    $.__views.__alloyId13407 = Ti.UI.createView({
        id: "__alloyId13407"
    });
    $.__views.__alloyId13407 && $.addTopLevelView($.__views.__alloyId13407);
    $.__views.__alloyId13408 = Ti.UI.createView({
        id: "__alloyId13408"
    });
    $.__views.__alloyId13407.add($.__views.__alloyId13408);
    $.__views.__alloyId13409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13409"
    });
    $.__views.__alloyId13408.add($.__views.__alloyId13409);
    $.__views.__alloyId13410 = Ti.UI.createView({
        id: "__alloyId13410"
    });
    $.__views.__alloyId13410 && $.addTopLevelView($.__views.__alloyId13410);
    $.__views.__alloyId13411 = Ti.UI.createView({
        id: "__alloyId13411"
    });
    $.__views.__alloyId13410.add($.__views.__alloyId13411);
    $.__views.__alloyId13412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13412"
    });
    $.__views.__alloyId13411.add($.__views.__alloyId13412);
    $.__views.__alloyId13413 = Ti.UI.createView({
        id: "__alloyId13413"
    });
    $.__views.__alloyId13413 && $.addTopLevelView($.__views.__alloyId13413);
    $.__views.__alloyId13414 = Ti.UI.createView({
        id: "__alloyId13414"
    });
    $.__views.__alloyId13413.add($.__views.__alloyId13414);
    $.__views.__alloyId13415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13415"
    });
    $.__views.__alloyId13414.add($.__views.__alloyId13415);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;