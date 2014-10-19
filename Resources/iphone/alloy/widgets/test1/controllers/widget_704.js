function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_704";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_704 = Ti.UI.createView({
        id: "widget_704"
    });
    $.__views.widget_704 && $.addTopLevelView($.__views.widget_704);
    $.__views.__alloyId17524 = Ti.UI.createView({
        id: "__alloyId17524"
    });
    $.__views.widget_704.add($.__views.__alloyId17524);
    $.__views.__alloyId17525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17525"
    });
    $.__views.__alloyId17524.add($.__views.__alloyId17525);
    $.__views.__alloyId17526 = Ti.UI.createView({
        id: "__alloyId17526"
    });
    $.__views.__alloyId17526 && $.addTopLevelView($.__views.__alloyId17526);
    $.__views.__alloyId17527 = Ti.UI.createView({
        id: "__alloyId17527"
    });
    $.__views.__alloyId17526.add($.__views.__alloyId17527);
    $.__views.__alloyId17528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17528"
    });
    $.__views.__alloyId17527.add($.__views.__alloyId17528);
    $.__views.__alloyId17529 = Ti.UI.createView({
        id: "__alloyId17529"
    });
    $.__views.__alloyId17529 && $.addTopLevelView($.__views.__alloyId17529);
    $.__views.__alloyId17530 = Ti.UI.createView({
        id: "__alloyId17530"
    });
    $.__views.__alloyId17529.add($.__views.__alloyId17530);
    $.__views.__alloyId17531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17531"
    });
    $.__views.__alloyId17530.add($.__views.__alloyId17531);
    $.__views.__alloyId17532 = Ti.UI.createView({
        id: "__alloyId17532"
    });
    $.__views.__alloyId17532 && $.addTopLevelView($.__views.__alloyId17532);
    $.__views.__alloyId17533 = Ti.UI.createView({
        id: "__alloyId17533"
    });
    $.__views.__alloyId17532.add($.__views.__alloyId17533);
    $.__views.__alloyId17534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17534"
    });
    $.__views.__alloyId17533.add($.__views.__alloyId17534);
    $.__views.__alloyId17535 = Ti.UI.createView({
        id: "__alloyId17535"
    });
    $.__views.__alloyId17535 && $.addTopLevelView($.__views.__alloyId17535);
    $.__views.__alloyId17536 = Ti.UI.createView({
        id: "__alloyId17536"
    });
    $.__views.__alloyId17535.add($.__views.__alloyId17536);
    $.__views.__alloyId17537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17537"
    });
    $.__views.__alloyId17536.add($.__views.__alloyId17537);
    $.__views.__alloyId17538 = Ti.UI.createView({
        id: "__alloyId17538"
    });
    $.__views.__alloyId17538 && $.addTopLevelView($.__views.__alloyId17538);
    $.__views.__alloyId17539 = Ti.UI.createView({
        id: "__alloyId17539"
    });
    $.__views.__alloyId17538.add($.__views.__alloyId17539);
    $.__views.__alloyId17540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17540"
    });
    $.__views.__alloyId17539.add($.__views.__alloyId17540);
    $.__views.__alloyId17541 = Ti.UI.createView({
        id: "__alloyId17541"
    });
    $.__views.__alloyId17541 && $.addTopLevelView($.__views.__alloyId17541);
    $.__views.__alloyId17542 = Ti.UI.createView({
        id: "__alloyId17542"
    });
    $.__views.__alloyId17541.add($.__views.__alloyId17542);
    $.__views.__alloyId17543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17543"
    });
    $.__views.__alloyId17542.add($.__views.__alloyId17543);
    $.__views.__alloyId17544 = Ti.UI.createView({
        id: "__alloyId17544"
    });
    $.__views.__alloyId17544 && $.addTopLevelView($.__views.__alloyId17544);
    $.__views.__alloyId17545 = Ti.UI.createView({
        id: "__alloyId17545"
    });
    $.__views.__alloyId17544.add($.__views.__alloyId17545);
    $.__views.__alloyId17546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17546"
    });
    $.__views.__alloyId17545.add($.__views.__alloyId17546);
    $.__views.__alloyId17547 = Ti.UI.createView({
        id: "__alloyId17547"
    });
    $.__views.__alloyId17547 && $.addTopLevelView($.__views.__alloyId17547);
    $.__views.__alloyId17548 = Ti.UI.createView({
        id: "__alloyId17548"
    });
    $.__views.__alloyId17547.add($.__views.__alloyId17548);
    $.__views.__alloyId17549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17549"
    });
    $.__views.__alloyId17548.add($.__views.__alloyId17549);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;