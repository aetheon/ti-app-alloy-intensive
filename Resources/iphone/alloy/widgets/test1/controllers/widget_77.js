function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_77";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_77 = Ti.UI.createView({
        id: "widget_77"
    });
    $.__views.widget_77 && $.addTopLevelView($.__views.widget_77);
    $.__views.__alloyId19396 = Ti.UI.createView({
        id: "__alloyId19396"
    });
    $.__views.widget_77.add($.__views.__alloyId19396);
    $.__views.__alloyId19397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19397"
    });
    $.__views.__alloyId19396.add($.__views.__alloyId19397);
    $.__views.__alloyId19398 = Ti.UI.createView({
        id: "__alloyId19398"
    });
    $.__views.__alloyId19398 && $.addTopLevelView($.__views.__alloyId19398);
    $.__views.__alloyId19399 = Ti.UI.createView({
        id: "__alloyId19399"
    });
    $.__views.__alloyId19398.add($.__views.__alloyId19399);
    $.__views.__alloyId19400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19400"
    });
    $.__views.__alloyId19399.add($.__views.__alloyId19400);
    $.__views.__alloyId19401 = Ti.UI.createView({
        id: "__alloyId19401"
    });
    $.__views.__alloyId19401 && $.addTopLevelView($.__views.__alloyId19401);
    $.__views.__alloyId19402 = Ti.UI.createView({
        id: "__alloyId19402"
    });
    $.__views.__alloyId19401.add($.__views.__alloyId19402);
    $.__views.__alloyId19403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19403"
    });
    $.__views.__alloyId19402.add($.__views.__alloyId19403);
    $.__views.__alloyId19404 = Ti.UI.createView({
        id: "__alloyId19404"
    });
    $.__views.__alloyId19404 && $.addTopLevelView($.__views.__alloyId19404);
    $.__views.__alloyId19405 = Ti.UI.createView({
        id: "__alloyId19405"
    });
    $.__views.__alloyId19404.add($.__views.__alloyId19405);
    $.__views.__alloyId19406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19406"
    });
    $.__views.__alloyId19405.add($.__views.__alloyId19406);
    $.__views.__alloyId19407 = Ti.UI.createView({
        id: "__alloyId19407"
    });
    $.__views.__alloyId19407 && $.addTopLevelView($.__views.__alloyId19407);
    $.__views.__alloyId19408 = Ti.UI.createView({
        id: "__alloyId19408"
    });
    $.__views.__alloyId19407.add($.__views.__alloyId19408);
    $.__views.__alloyId19409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19409"
    });
    $.__views.__alloyId19408.add($.__views.__alloyId19409);
    $.__views.__alloyId19410 = Ti.UI.createView({
        id: "__alloyId19410"
    });
    $.__views.__alloyId19410 && $.addTopLevelView($.__views.__alloyId19410);
    $.__views.__alloyId19411 = Ti.UI.createView({
        id: "__alloyId19411"
    });
    $.__views.__alloyId19410.add($.__views.__alloyId19411);
    $.__views.__alloyId19412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19412"
    });
    $.__views.__alloyId19411.add($.__views.__alloyId19412);
    $.__views.__alloyId19413 = Ti.UI.createView({
        id: "__alloyId19413"
    });
    $.__views.__alloyId19413 && $.addTopLevelView($.__views.__alloyId19413);
    $.__views.__alloyId19414 = Ti.UI.createView({
        id: "__alloyId19414"
    });
    $.__views.__alloyId19413.add($.__views.__alloyId19414);
    $.__views.__alloyId19415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19415"
    });
    $.__views.__alloyId19414.add($.__views.__alloyId19415);
    $.__views.__alloyId19416 = Ti.UI.createView({
        id: "__alloyId19416"
    });
    $.__views.__alloyId19416 && $.addTopLevelView($.__views.__alloyId19416);
    $.__views.__alloyId19417 = Ti.UI.createView({
        id: "__alloyId19417"
    });
    $.__views.__alloyId19416.add($.__views.__alloyId19417);
    $.__views.__alloyId19418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19418"
    });
    $.__views.__alloyId19417.add($.__views.__alloyId19418);
    $.__views.__alloyId19419 = Ti.UI.createView({
        id: "__alloyId19419"
    });
    $.__views.__alloyId19419 && $.addTopLevelView($.__views.__alloyId19419);
    $.__views.__alloyId19420 = Ti.UI.createView({
        id: "__alloyId19420"
    });
    $.__views.__alloyId19419.add($.__views.__alloyId19420);
    $.__views.__alloyId19421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19421"
    });
    $.__views.__alloyId19420.add($.__views.__alloyId19421);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;