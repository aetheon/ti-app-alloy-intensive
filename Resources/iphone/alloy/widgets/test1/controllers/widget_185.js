function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_185";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_185 = Ti.UI.createView({
        id: "widget_185"
    });
    $.__views.widget_185 && $.addTopLevelView($.__views.widget_185);
    $.__views.__alloyId2522 = Ti.UI.createView({
        id: "__alloyId2522"
    });
    $.__views.widget_185.add($.__views.__alloyId2522);
    $.__views.__alloyId2523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2523"
    });
    $.__views.__alloyId2522.add($.__views.__alloyId2523);
    $.__views.__alloyId2524 = Ti.UI.createView({
        id: "__alloyId2524"
    });
    $.__views.__alloyId2524 && $.addTopLevelView($.__views.__alloyId2524);
    $.__views.__alloyId2525 = Ti.UI.createView({
        id: "__alloyId2525"
    });
    $.__views.__alloyId2524.add($.__views.__alloyId2525);
    $.__views.__alloyId2526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2526"
    });
    $.__views.__alloyId2525.add($.__views.__alloyId2526);
    $.__views.__alloyId2527 = Ti.UI.createView({
        id: "__alloyId2527"
    });
    $.__views.__alloyId2527 && $.addTopLevelView($.__views.__alloyId2527);
    $.__views.__alloyId2528 = Ti.UI.createView({
        id: "__alloyId2528"
    });
    $.__views.__alloyId2527.add($.__views.__alloyId2528);
    $.__views.__alloyId2529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2529"
    });
    $.__views.__alloyId2528.add($.__views.__alloyId2529);
    $.__views.__alloyId2530 = Ti.UI.createView({
        id: "__alloyId2530"
    });
    $.__views.__alloyId2530 && $.addTopLevelView($.__views.__alloyId2530);
    $.__views.__alloyId2531 = Ti.UI.createView({
        id: "__alloyId2531"
    });
    $.__views.__alloyId2530.add($.__views.__alloyId2531);
    $.__views.__alloyId2532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2532"
    });
    $.__views.__alloyId2531.add($.__views.__alloyId2532);
    $.__views.__alloyId2533 = Ti.UI.createView({
        id: "__alloyId2533"
    });
    $.__views.__alloyId2533 && $.addTopLevelView($.__views.__alloyId2533);
    $.__views.__alloyId2534 = Ti.UI.createView({
        id: "__alloyId2534"
    });
    $.__views.__alloyId2533.add($.__views.__alloyId2534);
    $.__views.__alloyId2535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2535"
    });
    $.__views.__alloyId2534.add($.__views.__alloyId2535);
    $.__views.__alloyId2536 = Ti.UI.createView({
        id: "__alloyId2536"
    });
    $.__views.__alloyId2536 && $.addTopLevelView($.__views.__alloyId2536);
    $.__views.__alloyId2537 = Ti.UI.createView({
        id: "__alloyId2537"
    });
    $.__views.__alloyId2536.add($.__views.__alloyId2537);
    $.__views.__alloyId2538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2538"
    });
    $.__views.__alloyId2537.add($.__views.__alloyId2538);
    $.__views.__alloyId2539 = Ti.UI.createView({
        id: "__alloyId2539"
    });
    $.__views.__alloyId2539 && $.addTopLevelView($.__views.__alloyId2539);
    $.__views.__alloyId2540 = Ti.UI.createView({
        id: "__alloyId2540"
    });
    $.__views.__alloyId2539.add($.__views.__alloyId2540);
    $.__views.__alloyId2541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2541"
    });
    $.__views.__alloyId2540.add($.__views.__alloyId2541);
    $.__views.__alloyId2542 = Ti.UI.createView({
        id: "__alloyId2542"
    });
    $.__views.__alloyId2542 && $.addTopLevelView($.__views.__alloyId2542);
    $.__views.__alloyId2543 = Ti.UI.createView({
        id: "__alloyId2543"
    });
    $.__views.__alloyId2542.add($.__views.__alloyId2543);
    $.__views.__alloyId2544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2544"
    });
    $.__views.__alloyId2543.add($.__views.__alloyId2544);
    $.__views.__alloyId2545 = Ti.UI.createView({
        id: "__alloyId2545"
    });
    $.__views.__alloyId2545 && $.addTopLevelView($.__views.__alloyId2545);
    $.__views.__alloyId2546 = Ti.UI.createView({
        id: "__alloyId2546"
    });
    $.__views.__alloyId2545.add($.__views.__alloyId2546);
    $.__views.__alloyId2547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2547"
    });
    $.__views.__alloyId2546.add($.__views.__alloyId2547);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;