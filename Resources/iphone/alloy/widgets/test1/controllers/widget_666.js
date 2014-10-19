function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_666";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_666 = Ti.UI.createView({
        id: "widget_666"
    });
    $.__views.widget_666 && $.addTopLevelView($.__views.widget_666);
    $.__views.__alloyId16406 = Ti.UI.createView({
        id: "__alloyId16406"
    });
    $.__views.widget_666.add($.__views.__alloyId16406);
    $.__views.__alloyId16407 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16407"
    });
    $.__views.__alloyId16406.add($.__views.__alloyId16407);
    $.__views.__alloyId16408 = Ti.UI.createView({
        id: "__alloyId16408"
    });
    $.__views.__alloyId16408 && $.addTopLevelView($.__views.__alloyId16408);
    $.__views.__alloyId16409 = Ti.UI.createView({
        id: "__alloyId16409"
    });
    $.__views.__alloyId16408.add($.__views.__alloyId16409);
    $.__views.__alloyId16410 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16410"
    });
    $.__views.__alloyId16409.add($.__views.__alloyId16410);
    $.__views.__alloyId16411 = Ti.UI.createView({
        id: "__alloyId16411"
    });
    $.__views.__alloyId16411 && $.addTopLevelView($.__views.__alloyId16411);
    $.__views.__alloyId16412 = Ti.UI.createView({
        id: "__alloyId16412"
    });
    $.__views.__alloyId16411.add($.__views.__alloyId16412);
    $.__views.__alloyId16413 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16413"
    });
    $.__views.__alloyId16412.add($.__views.__alloyId16413);
    $.__views.__alloyId16414 = Ti.UI.createView({
        id: "__alloyId16414"
    });
    $.__views.__alloyId16414 && $.addTopLevelView($.__views.__alloyId16414);
    $.__views.__alloyId16415 = Ti.UI.createView({
        id: "__alloyId16415"
    });
    $.__views.__alloyId16414.add($.__views.__alloyId16415);
    $.__views.__alloyId16416 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16416"
    });
    $.__views.__alloyId16415.add($.__views.__alloyId16416);
    $.__views.__alloyId16417 = Ti.UI.createView({
        id: "__alloyId16417"
    });
    $.__views.__alloyId16417 && $.addTopLevelView($.__views.__alloyId16417);
    $.__views.__alloyId16418 = Ti.UI.createView({
        id: "__alloyId16418"
    });
    $.__views.__alloyId16417.add($.__views.__alloyId16418);
    $.__views.__alloyId16419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16419"
    });
    $.__views.__alloyId16418.add($.__views.__alloyId16419);
    $.__views.__alloyId16420 = Ti.UI.createView({
        id: "__alloyId16420"
    });
    $.__views.__alloyId16420 && $.addTopLevelView($.__views.__alloyId16420);
    $.__views.__alloyId16421 = Ti.UI.createView({
        id: "__alloyId16421"
    });
    $.__views.__alloyId16420.add($.__views.__alloyId16421);
    $.__views.__alloyId16422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16422"
    });
    $.__views.__alloyId16421.add($.__views.__alloyId16422);
    $.__views.__alloyId16423 = Ti.UI.createView({
        id: "__alloyId16423"
    });
    $.__views.__alloyId16423 && $.addTopLevelView($.__views.__alloyId16423);
    $.__views.__alloyId16424 = Ti.UI.createView({
        id: "__alloyId16424"
    });
    $.__views.__alloyId16423.add($.__views.__alloyId16424);
    $.__views.__alloyId16425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16425"
    });
    $.__views.__alloyId16424.add($.__views.__alloyId16425);
    $.__views.__alloyId16426 = Ti.UI.createView({
        id: "__alloyId16426"
    });
    $.__views.__alloyId16426 && $.addTopLevelView($.__views.__alloyId16426);
    $.__views.__alloyId16427 = Ti.UI.createView({
        id: "__alloyId16427"
    });
    $.__views.__alloyId16426.add($.__views.__alloyId16427);
    $.__views.__alloyId16428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16428"
    });
    $.__views.__alloyId16427.add($.__views.__alloyId16428);
    $.__views.__alloyId16429 = Ti.UI.createView({
        id: "__alloyId16429"
    });
    $.__views.__alloyId16429 && $.addTopLevelView($.__views.__alloyId16429);
    $.__views.__alloyId16430 = Ti.UI.createView({
        id: "__alloyId16430"
    });
    $.__views.__alloyId16429.add($.__views.__alloyId16430);
    $.__views.__alloyId16431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16431"
    });
    $.__views.__alloyId16430.add($.__views.__alloyId16431);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;