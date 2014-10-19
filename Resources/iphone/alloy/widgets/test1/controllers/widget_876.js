function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_876";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_876 = Ti.UI.createView({
        id: "widget_876"
    });
    $.__views.widget_876 && $.addTopLevelView($.__views.widget_876);
    $.__views.__alloyId22464 = Ti.UI.createView({
        id: "__alloyId22464"
    });
    $.__views.widget_876.add($.__views.__alloyId22464);
    $.__views.__alloyId22465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22465"
    });
    $.__views.__alloyId22464.add($.__views.__alloyId22465);
    $.__views.__alloyId22466 = Ti.UI.createView({
        id: "__alloyId22466"
    });
    $.__views.__alloyId22466 && $.addTopLevelView($.__views.__alloyId22466);
    $.__views.__alloyId22467 = Ti.UI.createView({
        id: "__alloyId22467"
    });
    $.__views.__alloyId22466.add($.__views.__alloyId22467);
    $.__views.__alloyId22468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22468"
    });
    $.__views.__alloyId22467.add($.__views.__alloyId22468);
    $.__views.__alloyId22469 = Ti.UI.createView({
        id: "__alloyId22469"
    });
    $.__views.__alloyId22469 && $.addTopLevelView($.__views.__alloyId22469);
    $.__views.__alloyId22470 = Ti.UI.createView({
        id: "__alloyId22470"
    });
    $.__views.__alloyId22469.add($.__views.__alloyId22470);
    $.__views.__alloyId22471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22471"
    });
    $.__views.__alloyId22470.add($.__views.__alloyId22471);
    $.__views.__alloyId22472 = Ti.UI.createView({
        id: "__alloyId22472"
    });
    $.__views.__alloyId22472 && $.addTopLevelView($.__views.__alloyId22472);
    $.__views.__alloyId22473 = Ti.UI.createView({
        id: "__alloyId22473"
    });
    $.__views.__alloyId22472.add($.__views.__alloyId22473);
    $.__views.__alloyId22474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22474"
    });
    $.__views.__alloyId22473.add($.__views.__alloyId22474);
    $.__views.__alloyId22475 = Ti.UI.createView({
        id: "__alloyId22475"
    });
    $.__views.__alloyId22475 && $.addTopLevelView($.__views.__alloyId22475);
    $.__views.__alloyId22476 = Ti.UI.createView({
        id: "__alloyId22476"
    });
    $.__views.__alloyId22475.add($.__views.__alloyId22476);
    $.__views.__alloyId22477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22477"
    });
    $.__views.__alloyId22476.add($.__views.__alloyId22477);
    $.__views.__alloyId22478 = Ti.UI.createView({
        id: "__alloyId22478"
    });
    $.__views.__alloyId22478 && $.addTopLevelView($.__views.__alloyId22478);
    $.__views.__alloyId22479 = Ti.UI.createView({
        id: "__alloyId22479"
    });
    $.__views.__alloyId22478.add($.__views.__alloyId22479);
    $.__views.__alloyId22480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22480"
    });
    $.__views.__alloyId22479.add($.__views.__alloyId22480);
    $.__views.__alloyId22481 = Ti.UI.createView({
        id: "__alloyId22481"
    });
    $.__views.__alloyId22481 && $.addTopLevelView($.__views.__alloyId22481);
    $.__views.__alloyId22482 = Ti.UI.createView({
        id: "__alloyId22482"
    });
    $.__views.__alloyId22481.add($.__views.__alloyId22482);
    $.__views.__alloyId22483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22483"
    });
    $.__views.__alloyId22482.add($.__views.__alloyId22483);
    $.__views.__alloyId22484 = Ti.UI.createView({
        id: "__alloyId22484"
    });
    $.__views.__alloyId22484 && $.addTopLevelView($.__views.__alloyId22484);
    $.__views.__alloyId22485 = Ti.UI.createView({
        id: "__alloyId22485"
    });
    $.__views.__alloyId22484.add($.__views.__alloyId22485);
    $.__views.__alloyId22486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22486"
    });
    $.__views.__alloyId22485.add($.__views.__alloyId22486);
    $.__views.__alloyId22487 = Ti.UI.createView({
        id: "__alloyId22487"
    });
    $.__views.__alloyId22487 && $.addTopLevelView($.__views.__alloyId22487);
    $.__views.__alloyId22488 = Ti.UI.createView({
        id: "__alloyId22488"
    });
    $.__views.__alloyId22487.add($.__views.__alloyId22488);
    $.__views.__alloyId22489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22489"
    });
    $.__views.__alloyId22488.add($.__views.__alloyId22489);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;