function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_527";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_527 = Ti.UI.createView({
        id: "widget_527"
    });
    $.__views.widget_527 && $.addTopLevelView($.__views.widget_527);
    $.__views.__alloyId12402 = Ti.UI.createView({
        id: "__alloyId12402"
    });
    $.__views.widget_527.add($.__views.__alloyId12402);
    $.__views.__alloyId12403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12403"
    });
    $.__views.__alloyId12402.add($.__views.__alloyId12403);
    $.__views.__alloyId12404 = Ti.UI.createView({
        id: "__alloyId12404"
    });
    $.__views.__alloyId12404 && $.addTopLevelView($.__views.__alloyId12404);
    $.__views.__alloyId12405 = Ti.UI.createView({
        id: "__alloyId12405"
    });
    $.__views.__alloyId12404.add($.__views.__alloyId12405);
    $.__views.__alloyId12406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12406"
    });
    $.__views.__alloyId12405.add($.__views.__alloyId12406);
    $.__views.__alloyId12407 = Ti.UI.createView({
        id: "__alloyId12407"
    });
    $.__views.__alloyId12407 && $.addTopLevelView($.__views.__alloyId12407);
    $.__views.__alloyId12408 = Ti.UI.createView({
        id: "__alloyId12408"
    });
    $.__views.__alloyId12407.add($.__views.__alloyId12408);
    $.__views.__alloyId12409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12409"
    });
    $.__views.__alloyId12408.add($.__views.__alloyId12409);
    $.__views.__alloyId12410 = Ti.UI.createView({
        id: "__alloyId12410"
    });
    $.__views.__alloyId12410 && $.addTopLevelView($.__views.__alloyId12410);
    $.__views.__alloyId12411 = Ti.UI.createView({
        id: "__alloyId12411"
    });
    $.__views.__alloyId12410.add($.__views.__alloyId12411);
    $.__views.__alloyId12412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12412"
    });
    $.__views.__alloyId12411.add($.__views.__alloyId12412);
    $.__views.__alloyId12413 = Ti.UI.createView({
        id: "__alloyId12413"
    });
    $.__views.__alloyId12413 && $.addTopLevelView($.__views.__alloyId12413);
    $.__views.__alloyId12414 = Ti.UI.createView({
        id: "__alloyId12414"
    });
    $.__views.__alloyId12413.add($.__views.__alloyId12414);
    $.__views.__alloyId12415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12415"
    });
    $.__views.__alloyId12414.add($.__views.__alloyId12415);
    $.__views.__alloyId12416 = Ti.UI.createView({
        id: "__alloyId12416"
    });
    $.__views.__alloyId12416 && $.addTopLevelView($.__views.__alloyId12416);
    $.__views.__alloyId12417 = Ti.UI.createView({
        id: "__alloyId12417"
    });
    $.__views.__alloyId12416.add($.__views.__alloyId12417);
    $.__views.__alloyId12418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12418"
    });
    $.__views.__alloyId12417.add($.__views.__alloyId12418);
    $.__views.__alloyId12419 = Ti.UI.createView({
        id: "__alloyId12419"
    });
    $.__views.__alloyId12419 && $.addTopLevelView($.__views.__alloyId12419);
    $.__views.__alloyId12420 = Ti.UI.createView({
        id: "__alloyId12420"
    });
    $.__views.__alloyId12419.add($.__views.__alloyId12420);
    $.__views.__alloyId12421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12421"
    });
    $.__views.__alloyId12420.add($.__views.__alloyId12421);
    $.__views.__alloyId12422 = Ti.UI.createView({
        id: "__alloyId12422"
    });
    $.__views.__alloyId12422 && $.addTopLevelView($.__views.__alloyId12422);
    $.__views.__alloyId12423 = Ti.UI.createView({
        id: "__alloyId12423"
    });
    $.__views.__alloyId12422.add($.__views.__alloyId12423);
    $.__views.__alloyId12424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12424"
    });
    $.__views.__alloyId12423.add($.__views.__alloyId12424);
    $.__views.__alloyId12425 = Ti.UI.createView({
        id: "__alloyId12425"
    });
    $.__views.__alloyId12425 && $.addTopLevelView($.__views.__alloyId12425);
    $.__views.__alloyId12426 = Ti.UI.createView({
        id: "__alloyId12426"
    });
    $.__views.__alloyId12425.add($.__views.__alloyId12426);
    $.__views.__alloyId12427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12427"
    });
    $.__views.__alloyId12426.add($.__views.__alloyId12427);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;