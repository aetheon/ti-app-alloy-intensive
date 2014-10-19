function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_878";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_878 = Ti.UI.createView({
        id: "widget_878"
    });
    $.__views.widget_878 && $.addTopLevelView($.__views.widget_878);
    $.__views.__alloyId22516 = Ti.UI.createView({
        id: "__alloyId22516"
    });
    $.__views.widget_878.add($.__views.__alloyId22516);
    $.__views.__alloyId22517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22517"
    });
    $.__views.__alloyId22516.add($.__views.__alloyId22517);
    $.__views.__alloyId22518 = Ti.UI.createView({
        id: "__alloyId22518"
    });
    $.__views.__alloyId22518 && $.addTopLevelView($.__views.__alloyId22518);
    $.__views.__alloyId22519 = Ti.UI.createView({
        id: "__alloyId22519"
    });
    $.__views.__alloyId22518.add($.__views.__alloyId22519);
    $.__views.__alloyId22520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22520"
    });
    $.__views.__alloyId22519.add($.__views.__alloyId22520);
    $.__views.__alloyId22521 = Ti.UI.createView({
        id: "__alloyId22521"
    });
    $.__views.__alloyId22521 && $.addTopLevelView($.__views.__alloyId22521);
    $.__views.__alloyId22522 = Ti.UI.createView({
        id: "__alloyId22522"
    });
    $.__views.__alloyId22521.add($.__views.__alloyId22522);
    $.__views.__alloyId22523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22523"
    });
    $.__views.__alloyId22522.add($.__views.__alloyId22523);
    $.__views.__alloyId22524 = Ti.UI.createView({
        id: "__alloyId22524"
    });
    $.__views.__alloyId22524 && $.addTopLevelView($.__views.__alloyId22524);
    $.__views.__alloyId22525 = Ti.UI.createView({
        id: "__alloyId22525"
    });
    $.__views.__alloyId22524.add($.__views.__alloyId22525);
    $.__views.__alloyId22526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22526"
    });
    $.__views.__alloyId22525.add($.__views.__alloyId22526);
    $.__views.__alloyId22527 = Ti.UI.createView({
        id: "__alloyId22527"
    });
    $.__views.__alloyId22527 && $.addTopLevelView($.__views.__alloyId22527);
    $.__views.__alloyId22528 = Ti.UI.createView({
        id: "__alloyId22528"
    });
    $.__views.__alloyId22527.add($.__views.__alloyId22528);
    $.__views.__alloyId22529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22529"
    });
    $.__views.__alloyId22528.add($.__views.__alloyId22529);
    $.__views.__alloyId22530 = Ti.UI.createView({
        id: "__alloyId22530"
    });
    $.__views.__alloyId22530 && $.addTopLevelView($.__views.__alloyId22530);
    $.__views.__alloyId22531 = Ti.UI.createView({
        id: "__alloyId22531"
    });
    $.__views.__alloyId22530.add($.__views.__alloyId22531);
    $.__views.__alloyId22532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22532"
    });
    $.__views.__alloyId22531.add($.__views.__alloyId22532);
    $.__views.__alloyId22533 = Ti.UI.createView({
        id: "__alloyId22533"
    });
    $.__views.__alloyId22533 && $.addTopLevelView($.__views.__alloyId22533);
    $.__views.__alloyId22534 = Ti.UI.createView({
        id: "__alloyId22534"
    });
    $.__views.__alloyId22533.add($.__views.__alloyId22534);
    $.__views.__alloyId22535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22535"
    });
    $.__views.__alloyId22534.add($.__views.__alloyId22535);
    $.__views.__alloyId22536 = Ti.UI.createView({
        id: "__alloyId22536"
    });
    $.__views.__alloyId22536 && $.addTopLevelView($.__views.__alloyId22536);
    $.__views.__alloyId22537 = Ti.UI.createView({
        id: "__alloyId22537"
    });
    $.__views.__alloyId22536.add($.__views.__alloyId22537);
    $.__views.__alloyId22538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22538"
    });
    $.__views.__alloyId22537.add($.__views.__alloyId22538);
    $.__views.__alloyId22539 = Ti.UI.createView({
        id: "__alloyId22539"
    });
    $.__views.__alloyId22539 && $.addTopLevelView($.__views.__alloyId22539);
    $.__views.__alloyId22540 = Ti.UI.createView({
        id: "__alloyId22540"
    });
    $.__views.__alloyId22539.add($.__views.__alloyId22540);
    $.__views.__alloyId22541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22541"
    });
    $.__views.__alloyId22540.add($.__views.__alloyId22541);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;