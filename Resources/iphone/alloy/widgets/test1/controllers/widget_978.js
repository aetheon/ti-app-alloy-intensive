function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_978";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_978 = Ti.UI.createView({
        id: "widget_978"
    });
    $.__views.widget_978 && $.addTopLevelView($.__views.widget_978);
    $.__views.__alloyId25402 = Ti.UI.createView({
        id: "__alloyId25402"
    });
    $.__views.widget_978.add($.__views.__alloyId25402);
    $.__views.__alloyId25403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25403"
    });
    $.__views.__alloyId25402.add($.__views.__alloyId25403);
    $.__views.__alloyId25404 = Ti.UI.createView({
        id: "__alloyId25404"
    });
    $.__views.__alloyId25404 && $.addTopLevelView($.__views.__alloyId25404);
    $.__views.__alloyId25405 = Ti.UI.createView({
        id: "__alloyId25405"
    });
    $.__views.__alloyId25404.add($.__views.__alloyId25405);
    $.__views.__alloyId25406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25406"
    });
    $.__views.__alloyId25405.add($.__views.__alloyId25406);
    $.__views.__alloyId25407 = Ti.UI.createView({
        id: "__alloyId25407"
    });
    $.__views.__alloyId25407 && $.addTopLevelView($.__views.__alloyId25407);
    $.__views.__alloyId25408 = Ti.UI.createView({
        id: "__alloyId25408"
    });
    $.__views.__alloyId25407.add($.__views.__alloyId25408);
    $.__views.__alloyId25409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25409"
    });
    $.__views.__alloyId25408.add($.__views.__alloyId25409);
    $.__views.__alloyId25410 = Ti.UI.createView({
        id: "__alloyId25410"
    });
    $.__views.__alloyId25410 && $.addTopLevelView($.__views.__alloyId25410);
    $.__views.__alloyId25411 = Ti.UI.createView({
        id: "__alloyId25411"
    });
    $.__views.__alloyId25410.add($.__views.__alloyId25411);
    $.__views.__alloyId25412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25412"
    });
    $.__views.__alloyId25411.add($.__views.__alloyId25412);
    $.__views.__alloyId25413 = Ti.UI.createView({
        id: "__alloyId25413"
    });
    $.__views.__alloyId25413 && $.addTopLevelView($.__views.__alloyId25413);
    $.__views.__alloyId25414 = Ti.UI.createView({
        id: "__alloyId25414"
    });
    $.__views.__alloyId25413.add($.__views.__alloyId25414);
    $.__views.__alloyId25415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25415"
    });
    $.__views.__alloyId25414.add($.__views.__alloyId25415);
    $.__views.__alloyId25416 = Ti.UI.createView({
        id: "__alloyId25416"
    });
    $.__views.__alloyId25416 && $.addTopLevelView($.__views.__alloyId25416);
    $.__views.__alloyId25417 = Ti.UI.createView({
        id: "__alloyId25417"
    });
    $.__views.__alloyId25416.add($.__views.__alloyId25417);
    $.__views.__alloyId25418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25418"
    });
    $.__views.__alloyId25417.add($.__views.__alloyId25418);
    $.__views.__alloyId25419 = Ti.UI.createView({
        id: "__alloyId25419"
    });
    $.__views.__alloyId25419 && $.addTopLevelView($.__views.__alloyId25419);
    $.__views.__alloyId25420 = Ti.UI.createView({
        id: "__alloyId25420"
    });
    $.__views.__alloyId25419.add($.__views.__alloyId25420);
    $.__views.__alloyId25421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25421"
    });
    $.__views.__alloyId25420.add($.__views.__alloyId25421);
    $.__views.__alloyId25422 = Ti.UI.createView({
        id: "__alloyId25422"
    });
    $.__views.__alloyId25422 && $.addTopLevelView($.__views.__alloyId25422);
    $.__views.__alloyId25423 = Ti.UI.createView({
        id: "__alloyId25423"
    });
    $.__views.__alloyId25422.add($.__views.__alloyId25423);
    $.__views.__alloyId25424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25424"
    });
    $.__views.__alloyId25423.add($.__views.__alloyId25424);
    $.__views.__alloyId25425 = Ti.UI.createView({
        id: "__alloyId25425"
    });
    $.__views.__alloyId25425 && $.addTopLevelView($.__views.__alloyId25425);
    $.__views.__alloyId25426 = Ti.UI.createView({
        id: "__alloyId25426"
    });
    $.__views.__alloyId25425.add($.__views.__alloyId25426);
    $.__views.__alloyId25427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25427"
    });
    $.__views.__alloyId25426.add($.__views.__alloyId25427);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;