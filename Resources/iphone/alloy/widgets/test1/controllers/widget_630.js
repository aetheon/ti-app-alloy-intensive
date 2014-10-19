function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_630";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_630 = Ti.UI.createView({
        id: "widget_630"
    });
    $.__views.widget_630 && $.addTopLevelView($.__views.widget_630);
    $.__views.__alloyId15392 = Ti.UI.createView({
        id: "__alloyId15392"
    });
    $.__views.widget_630.add($.__views.__alloyId15392);
    $.__views.__alloyId15393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15393"
    });
    $.__views.__alloyId15392.add($.__views.__alloyId15393);
    $.__views.__alloyId15394 = Ti.UI.createView({
        id: "__alloyId15394"
    });
    $.__views.__alloyId15394 && $.addTopLevelView($.__views.__alloyId15394);
    $.__views.__alloyId15395 = Ti.UI.createView({
        id: "__alloyId15395"
    });
    $.__views.__alloyId15394.add($.__views.__alloyId15395);
    $.__views.__alloyId15396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15396"
    });
    $.__views.__alloyId15395.add($.__views.__alloyId15396);
    $.__views.__alloyId15397 = Ti.UI.createView({
        id: "__alloyId15397"
    });
    $.__views.__alloyId15397 && $.addTopLevelView($.__views.__alloyId15397);
    $.__views.__alloyId15398 = Ti.UI.createView({
        id: "__alloyId15398"
    });
    $.__views.__alloyId15397.add($.__views.__alloyId15398);
    $.__views.__alloyId15399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15399"
    });
    $.__views.__alloyId15398.add($.__views.__alloyId15399);
    $.__views.__alloyId15400 = Ti.UI.createView({
        id: "__alloyId15400"
    });
    $.__views.__alloyId15400 && $.addTopLevelView($.__views.__alloyId15400);
    $.__views.__alloyId15401 = Ti.UI.createView({
        id: "__alloyId15401"
    });
    $.__views.__alloyId15400.add($.__views.__alloyId15401);
    $.__views.__alloyId15402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15402"
    });
    $.__views.__alloyId15401.add($.__views.__alloyId15402);
    $.__views.__alloyId15403 = Ti.UI.createView({
        id: "__alloyId15403"
    });
    $.__views.__alloyId15403 && $.addTopLevelView($.__views.__alloyId15403);
    $.__views.__alloyId15404 = Ti.UI.createView({
        id: "__alloyId15404"
    });
    $.__views.__alloyId15403.add($.__views.__alloyId15404);
    $.__views.__alloyId15405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15405"
    });
    $.__views.__alloyId15404.add($.__views.__alloyId15405);
    $.__views.__alloyId15406 = Ti.UI.createView({
        id: "__alloyId15406"
    });
    $.__views.__alloyId15406 && $.addTopLevelView($.__views.__alloyId15406);
    $.__views.__alloyId15407 = Ti.UI.createView({
        id: "__alloyId15407"
    });
    $.__views.__alloyId15406.add($.__views.__alloyId15407);
    $.__views.__alloyId15408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15408"
    });
    $.__views.__alloyId15407.add($.__views.__alloyId15408);
    $.__views.__alloyId15409 = Ti.UI.createView({
        id: "__alloyId15409"
    });
    $.__views.__alloyId15409 && $.addTopLevelView($.__views.__alloyId15409);
    $.__views.__alloyId15410 = Ti.UI.createView({
        id: "__alloyId15410"
    });
    $.__views.__alloyId15409.add($.__views.__alloyId15410);
    $.__views.__alloyId15411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15411"
    });
    $.__views.__alloyId15410.add($.__views.__alloyId15411);
    $.__views.__alloyId15412 = Ti.UI.createView({
        id: "__alloyId15412"
    });
    $.__views.__alloyId15412 && $.addTopLevelView($.__views.__alloyId15412);
    $.__views.__alloyId15413 = Ti.UI.createView({
        id: "__alloyId15413"
    });
    $.__views.__alloyId15412.add($.__views.__alloyId15413);
    $.__views.__alloyId15414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15414"
    });
    $.__views.__alloyId15413.add($.__views.__alloyId15414);
    $.__views.__alloyId15415 = Ti.UI.createView({
        id: "__alloyId15415"
    });
    $.__views.__alloyId15415 && $.addTopLevelView($.__views.__alloyId15415);
    $.__views.__alloyId15416 = Ti.UI.createView({
        id: "__alloyId15416"
    });
    $.__views.__alloyId15415.add($.__views.__alloyId15416);
    $.__views.__alloyId15417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15417"
    });
    $.__views.__alloyId15416.add($.__views.__alloyId15417);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;