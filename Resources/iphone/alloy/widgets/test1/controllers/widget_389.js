function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_389";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_389 = Ti.UI.createView({
        id: "widget_389"
    });
    $.__views.widget_389 && $.addTopLevelView($.__views.widget_389);
    $.__views.__alloyId8398 = Ti.UI.createView({
        id: "__alloyId8398"
    });
    $.__views.widget_389.add($.__views.__alloyId8398);
    $.__views.__alloyId8399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8399"
    });
    $.__views.__alloyId8398.add($.__views.__alloyId8399);
    $.__views.__alloyId8400 = Ti.UI.createView({
        id: "__alloyId8400"
    });
    $.__views.__alloyId8400 && $.addTopLevelView($.__views.__alloyId8400);
    $.__views.__alloyId8401 = Ti.UI.createView({
        id: "__alloyId8401"
    });
    $.__views.__alloyId8400.add($.__views.__alloyId8401);
    $.__views.__alloyId8402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8402"
    });
    $.__views.__alloyId8401.add($.__views.__alloyId8402);
    $.__views.__alloyId8403 = Ti.UI.createView({
        id: "__alloyId8403"
    });
    $.__views.__alloyId8403 && $.addTopLevelView($.__views.__alloyId8403);
    $.__views.__alloyId8404 = Ti.UI.createView({
        id: "__alloyId8404"
    });
    $.__views.__alloyId8403.add($.__views.__alloyId8404);
    $.__views.__alloyId8405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8405"
    });
    $.__views.__alloyId8404.add($.__views.__alloyId8405);
    $.__views.__alloyId8406 = Ti.UI.createView({
        id: "__alloyId8406"
    });
    $.__views.__alloyId8406 && $.addTopLevelView($.__views.__alloyId8406);
    $.__views.__alloyId8407 = Ti.UI.createView({
        id: "__alloyId8407"
    });
    $.__views.__alloyId8406.add($.__views.__alloyId8407);
    $.__views.__alloyId8408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8408"
    });
    $.__views.__alloyId8407.add($.__views.__alloyId8408);
    $.__views.__alloyId8409 = Ti.UI.createView({
        id: "__alloyId8409"
    });
    $.__views.__alloyId8409 && $.addTopLevelView($.__views.__alloyId8409);
    $.__views.__alloyId8410 = Ti.UI.createView({
        id: "__alloyId8410"
    });
    $.__views.__alloyId8409.add($.__views.__alloyId8410);
    $.__views.__alloyId8411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8411"
    });
    $.__views.__alloyId8410.add($.__views.__alloyId8411);
    $.__views.__alloyId8412 = Ti.UI.createView({
        id: "__alloyId8412"
    });
    $.__views.__alloyId8412 && $.addTopLevelView($.__views.__alloyId8412);
    $.__views.__alloyId8413 = Ti.UI.createView({
        id: "__alloyId8413"
    });
    $.__views.__alloyId8412.add($.__views.__alloyId8413);
    $.__views.__alloyId8414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8414"
    });
    $.__views.__alloyId8413.add($.__views.__alloyId8414);
    $.__views.__alloyId8415 = Ti.UI.createView({
        id: "__alloyId8415"
    });
    $.__views.__alloyId8415 && $.addTopLevelView($.__views.__alloyId8415);
    $.__views.__alloyId8416 = Ti.UI.createView({
        id: "__alloyId8416"
    });
    $.__views.__alloyId8415.add($.__views.__alloyId8416);
    $.__views.__alloyId8417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8417"
    });
    $.__views.__alloyId8416.add($.__views.__alloyId8417);
    $.__views.__alloyId8418 = Ti.UI.createView({
        id: "__alloyId8418"
    });
    $.__views.__alloyId8418 && $.addTopLevelView($.__views.__alloyId8418);
    $.__views.__alloyId8419 = Ti.UI.createView({
        id: "__alloyId8419"
    });
    $.__views.__alloyId8418.add($.__views.__alloyId8419);
    $.__views.__alloyId8420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8420"
    });
    $.__views.__alloyId8419.add($.__views.__alloyId8420);
    $.__views.__alloyId8421 = Ti.UI.createView({
        id: "__alloyId8421"
    });
    $.__views.__alloyId8421 && $.addTopLevelView($.__views.__alloyId8421);
    $.__views.__alloyId8422 = Ti.UI.createView({
        id: "__alloyId8422"
    });
    $.__views.__alloyId8421.add($.__views.__alloyId8422);
    $.__views.__alloyId8423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8423"
    });
    $.__views.__alloyId8422.add($.__views.__alloyId8423);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;