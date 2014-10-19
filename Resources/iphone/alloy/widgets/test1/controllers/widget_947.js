function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_947";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_947 = Ti.UI.createView({
        id: "widget_947"
    });
    $.__views.widget_947 && $.addTopLevelView($.__views.widget_947);
    $.__views.__alloyId24518 = Ti.UI.createView({
        id: "__alloyId24518"
    });
    $.__views.widget_947.add($.__views.__alloyId24518);
    $.__views.__alloyId24519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24519"
    });
    $.__views.__alloyId24518.add($.__views.__alloyId24519);
    $.__views.__alloyId24520 = Ti.UI.createView({
        id: "__alloyId24520"
    });
    $.__views.__alloyId24520 && $.addTopLevelView($.__views.__alloyId24520);
    $.__views.__alloyId24521 = Ti.UI.createView({
        id: "__alloyId24521"
    });
    $.__views.__alloyId24520.add($.__views.__alloyId24521);
    $.__views.__alloyId24522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24522"
    });
    $.__views.__alloyId24521.add($.__views.__alloyId24522);
    $.__views.__alloyId24523 = Ti.UI.createView({
        id: "__alloyId24523"
    });
    $.__views.__alloyId24523 && $.addTopLevelView($.__views.__alloyId24523);
    $.__views.__alloyId24524 = Ti.UI.createView({
        id: "__alloyId24524"
    });
    $.__views.__alloyId24523.add($.__views.__alloyId24524);
    $.__views.__alloyId24525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24525"
    });
    $.__views.__alloyId24524.add($.__views.__alloyId24525);
    $.__views.__alloyId24526 = Ti.UI.createView({
        id: "__alloyId24526"
    });
    $.__views.__alloyId24526 && $.addTopLevelView($.__views.__alloyId24526);
    $.__views.__alloyId24527 = Ti.UI.createView({
        id: "__alloyId24527"
    });
    $.__views.__alloyId24526.add($.__views.__alloyId24527);
    $.__views.__alloyId24528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24528"
    });
    $.__views.__alloyId24527.add($.__views.__alloyId24528);
    $.__views.__alloyId24529 = Ti.UI.createView({
        id: "__alloyId24529"
    });
    $.__views.__alloyId24529 && $.addTopLevelView($.__views.__alloyId24529);
    $.__views.__alloyId24530 = Ti.UI.createView({
        id: "__alloyId24530"
    });
    $.__views.__alloyId24529.add($.__views.__alloyId24530);
    $.__views.__alloyId24531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24531"
    });
    $.__views.__alloyId24530.add($.__views.__alloyId24531);
    $.__views.__alloyId24532 = Ti.UI.createView({
        id: "__alloyId24532"
    });
    $.__views.__alloyId24532 && $.addTopLevelView($.__views.__alloyId24532);
    $.__views.__alloyId24533 = Ti.UI.createView({
        id: "__alloyId24533"
    });
    $.__views.__alloyId24532.add($.__views.__alloyId24533);
    $.__views.__alloyId24534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24534"
    });
    $.__views.__alloyId24533.add($.__views.__alloyId24534);
    $.__views.__alloyId24535 = Ti.UI.createView({
        id: "__alloyId24535"
    });
    $.__views.__alloyId24535 && $.addTopLevelView($.__views.__alloyId24535);
    $.__views.__alloyId24536 = Ti.UI.createView({
        id: "__alloyId24536"
    });
    $.__views.__alloyId24535.add($.__views.__alloyId24536);
    $.__views.__alloyId24537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24537"
    });
    $.__views.__alloyId24536.add($.__views.__alloyId24537);
    $.__views.__alloyId24538 = Ti.UI.createView({
        id: "__alloyId24538"
    });
    $.__views.__alloyId24538 && $.addTopLevelView($.__views.__alloyId24538);
    $.__views.__alloyId24539 = Ti.UI.createView({
        id: "__alloyId24539"
    });
    $.__views.__alloyId24538.add($.__views.__alloyId24539);
    $.__views.__alloyId24540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24540"
    });
    $.__views.__alloyId24539.add($.__views.__alloyId24540);
    $.__views.__alloyId24541 = Ti.UI.createView({
        id: "__alloyId24541"
    });
    $.__views.__alloyId24541 && $.addTopLevelView($.__views.__alloyId24541);
    $.__views.__alloyId24542 = Ti.UI.createView({
        id: "__alloyId24542"
    });
    $.__views.__alloyId24541.add($.__views.__alloyId24542);
    $.__views.__alloyId24543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24543"
    });
    $.__views.__alloyId24542.add($.__views.__alloyId24543);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;