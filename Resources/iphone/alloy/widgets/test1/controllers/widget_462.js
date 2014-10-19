function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_462";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_462 = Ti.UI.createView({
        id: "widget_462"
    });
    $.__views.widget_462 && $.addTopLevelView($.__views.widget_462);
    $.__views.__alloyId10530 = Ti.UI.createView({
        id: "__alloyId10530"
    });
    $.__views.widget_462.add($.__views.__alloyId10530);
    $.__views.__alloyId10531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10531"
    });
    $.__views.__alloyId10530.add($.__views.__alloyId10531);
    $.__views.__alloyId10532 = Ti.UI.createView({
        id: "__alloyId10532"
    });
    $.__views.__alloyId10532 && $.addTopLevelView($.__views.__alloyId10532);
    $.__views.__alloyId10533 = Ti.UI.createView({
        id: "__alloyId10533"
    });
    $.__views.__alloyId10532.add($.__views.__alloyId10533);
    $.__views.__alloyId10534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10534"
    });
    $.__views.__alloyId10533.add($.__views.__alloyId10534);
    $.__views.__alloyId10535 = Ti.UI.createView({
        id: "__alloyId10535"
    });
    $.__views.__alloyId10535 && $.addTopLevelView($.__views.__alloyId10535);
    $.__views.__alloyId10536 = Ti.UI.createView({
        id: "__alloyId10536"
    });
    $.__views.__alloyId10535.add($.__views.__alloyId10536);
    $.__views.__alloyId10537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10537"
    });
    $.__views.__alloyId10536.add($.__views.__alloyId10537);
    $.__views.__alloyId10538 = Ti.UI.createView({
        id: "__alloyId10538"
    });
    $.__views.__alloyId10538 && $.addTopLevelView($.__views.__alloyId10538);
    $.__views.__alloyId10539 = Ti.UI.createView({
        id: "__alloyId10539"
    });
    $.__views.__alloyId10538.add($.__views.__alloyId10539);
    $.__views.__alloyId10540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10540"
    });
    $.__views.__alloyId10539.add($.__views.__alloyId10540);
    $.__views.__alloyId10541 = Ti.UI.createView({
        id: "__alloyId10541"
    });
    $.__views.__alloyId10541 && $.addTopLevelView($.__views.__alloyId10541);
    $.__views.__alloyId10542 = Ti.UI.createView({
        id: "__alloyId10542"
    });
    $.__views.__alloyId10541.add($.__views.__alloyId10542);
    $.__views.__alloyId10543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10543"
    });
    $.__views.__alloyId10542.add($.__views.__alloyId10543);
    $.__views.__alloyId10544 = Ti.UI.createView({
        id: "__alloyId10544"
    });
    $.__views.__alloyId10544 && $.addTopLevelView($.__views.__alloyId10544);
    $.__views.__alloyId10545 = Ti.UI.createView({
        id: "__alloyId10545"
    });
    $.__views.__alloyId10544.add($.__views.__alloyId10545);
    $.__views.__alloyId10546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10546"
    });
    $.__views.__alloyId10545.add($.__views.__alloyId10546);
    $.__views.__alloyId10547 = Ti.UI.createView({
        id: "__alloyId10547"
    });
    $.__views.__alloyId10547 && $.addTopLevelView($.__views.__alloyId10547);
    $.__views.__alloyId10548 = Ti.UI.createView({
        id: "__alloyId10548"
    });
    $.__views.__alloyId10547.add($.__views.__alloyId10548);
    $.__views.__alloyId10549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10549"
    });
    $.__views.__alloyId10548.add($.__views.__alloyId10549);
    $.__views.__alloyId10550 = Ti.UI.createView({
        id: "__alloyId10550"
    });
    $.__views.__alloyId10550 && $.addTopLevelView($.__views.__alloyId10550);
    $.__views.__alloyId10551 = Ti.UI.createView({
        id: "__alloyId10551"
    });
    $.__views.__alloyId10550.add($.__views.__alloyId10551);
    $.__views.__alloyId10552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10552"
    });
    $.__views.__alloyId10551.add($.__views.__alloyId10552);
    $.__views.__alloyId10553 = Ti.UI.createView({
        id: "__alloyId10553"
    });
    $.__views.__alloyId10553 && $.addTopLevelView($.__views.__alloyId10553);
    $.__views.__alloyId10554 = Ti.UI.createView({
        id: "__alloyId10554"
    });
    $.__views.__alloyId10553.add($.__views.__alloyId10554);
    $.__views.__alloyId10555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10555"
    });
    $.__views.__alloyId10554.add($.__views.__alloyId10555);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;