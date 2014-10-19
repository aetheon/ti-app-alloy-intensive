function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_458";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_458 = Ti.UI.createView({
        id: "widget_458"
    });
    $.__views.widget_458 && $.addTopLevelView($.__views.widget_458);
    $.__views.__alloyId10400 = Ti.UI.createView({
        id: "__alloyId10400"
    });
    $.__views.widget_458.add($.__views.__alloyId10400);
    $.__views.__alloyId10401 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10401"
    });
    $.__views.__alloyId10400.add($.__views.__alloyId10401);
    $.__views.__alloyId10402 = Ti.UI.createView({
        id: "__alloyId10402"
    });
    $.__views.__alloyId10402 && $.addTopLevelView($.__views.__alloyId10402);
    $.__views.__alloyId10403 = Ti.UI.createView({
        id: "__alloyId10403"
    });
    $.__views.__alloyId10402.add($.__views.__alloyId10403);
    $.__views.__alloyId10404 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10404"
    });
    $.__views.__alloyId10403.add($.__views.__alloyId10404);
    $.__views.__alloyId10405 = Ti.UI.createView({
        id: "__alloyId10405"
    });
    $.__views.__alloyId10405 && $.addTopLevelView($.__views.__alloyId10405);
    $.__views.__alloyId10406 = Ti.UI.createView({
        id: "__alloyId10406"
    });
    $.__views.__alloyId10405.add($.__views.__alloyId10406);
    $.__views.__alloyId10407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10407"
    });
    $.__views.__alloyId10406.add($.__views.__alloyId10407);
    $.__views.__alloyId10408 = Ti.UI.createView({
        id: "__alloyId10408"
    });
    $.__views.__alloyId10408 && $.addTopLevelView($.__views.__alloyId10408);
    $.__views.__alloyId10409 = Ti.UI.createView({
        id: "__alloyId10409"
    });
    $.__views.__alloyId10408.add($.__views.__alloyId10409);
    $.__views.__alloyId10410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10410"
    });
    $.__views.__alloyId10409.add($.__views.__alloyId10410);
    $.__views.__alloyId10411 = Ti.UI.createView({
        id: "__alloyId10411"
    });
    $.__views.__alloyId10411 && $.addTopLevelView($.__views.__alloyId10411);
    $.__views.__alloyId10412 = Ti.UI.createView({
        id: "__alloyId10412"
    });
    $.__views.__alloyId10411.add($.__views.__alloyId10412);
    $.__views.__alloyId10413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10413"
    });
    $.__views.__alloyId10412.add($.__views.__alloyId10413);
    $.__views.__alloyId10414 = Ti.UI.createView({
        id: "__alloyId10414"
    });
    $.__views.__alloyId10414 && $.addTopLevelView($.__views.__alloyId10414);
    $.__views.__alloyId10415 = Ti.UI.createView({
        id: "__alloyId10415"
    });
    $.__views.__alloyId10414.add($.__views.__alloyId10415);
    $.__views.__alloyId10416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10416"
    });
    $.__views.__alloyId10415.add($.__views.__alloyId10416);
    $.__views.__alloyId10417 = Ti.UI.createView({
        id: "__alloyId10417"
    });
    $.__views.__alloyId10417 && $.addTopLevelView($.__views.__alloyId10417);
    $.__views.__alloyId10418 = Ti.UI.createView({
        id: "__alloyId10418"
    });
    $.__views.__alloyId10417.add($.__views.__alloyId10418);
    $.__views.__alloyId10419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10419"
    });
    $.__views.__alloyId10418.add($.__views.__alloyId10419);
    $.__views.__alloyId10420 = Ti.UI.createView({
        id: "__alloyId10420"
    });
    $.__views.__alloyId10420 && $.addTopLevelView($.__views.__alloyId10420);
    $.__views.__alloyId10421 = Ti.UI.createView({
        id: "__alloyId10421"
    });
    $.__views.__alloyId10420.add($.__views.__alloyId10421);
    $.__views.__alloyId10422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10422"
    });
    $.__views.__alloyId10421.add($.__views.__alloyId10422);
    $.__views.__alloyId10423 = Ti.UI.createView({
        id: "__alloyId10423"
    });
    $.__views.__alloyId10423 && $.addTopLevelView($.__views.__alloyId10423);
    $.__views.__alloyId10424 = Ti.UI.createView({
        id: "__alloyId10424"
    });
    $.__views.__alloyId10423.add($.__views.__alloyId10424);
    $.__views.__alloyId10425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10425"
    });
    $.__views.__alloyId10424.add($.__views.__alloyId10425);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;