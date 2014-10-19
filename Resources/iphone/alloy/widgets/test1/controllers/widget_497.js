function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_497";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_497 = Ti.UI.createView({
        id: "widget_497"
    });
    $.__views.widget_497 && $.addTopLevelView($.__views.widget_497);
    $.__views.__alloyId11518 = Ti.UI.createView({
        id: "__alloyId11518"
    });
    $.__views.widget_497.add($.__views.__alloyId11518);
    $.__views.__alloyId11519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11519"
    });
    $.__views.__alloyId11518.add($.__views.__alloyId11519);
    $.__views.__alloyId11520 = Ti.UI.createView({
        id: "__alloyId11520"
    });
    $.__views.__alloyId11520 && $.addTopLevelView($.__views.__alloyId11520);
    $.__views.__alloyId11521 = Ti.UI.createView({
        id: "__alloyId11521"
    });
    $.__views.__alloyId11520.add($.__views.__alloyId11521);
    $.__views.__alloyId11522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11522"
    });
    $.__views.__alloyId11521.add($.__views.__alloyId11522);
    $.__views.__alloyId11523 = Ti.UI.createView({
        id: "__alloyId11523"
    });
    $.__views.__alloyId11523 && $.addTopLevelView($.__views.__alloyId11523);
    $.__views.__alloyId11524 = Ti.UI.createView({
        id: "__alloyId11524"
    });
    $.__views.__alloyId11523.add($.__views.__alloyId11524);
    $.__views.__alloyId11525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11525"
    });
    $.__views.__alloyId11524.add($.__views.__alloyId11525);
    $.__views.__alloyId11526 = Ti.UI.createView({
        id: "__alloyId11526"
    });
    $.__views.__alloyId11526 && $.addTopLevelView($.__views.__alloyId11526);
    $.__views.__alloyId11527 = Ti.UI.createView({
        id: "__alloyId11527"
    });
    $.__views.__alloyId11526.add($.__views.__alloyId11527);
    $.__views.__alloyId11528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11528"
    });
    $.__views.__alloyId11527.add($.__views.__alloyId11528);
    $.__views.__alloyId11529 = Ti.UI.createView({
        id: "__alloyId11529"
    });
    $.__views.__alloyId11529 && $.addTopLevelView($.__views.__alloyId11529);
    $.__views.__alloyId11530 = Ti.UI.createView({
        id: "__alloyId11530"
    });
    $.__views.__alloyId11529.add($.__views.__alloyId11530);
    $.__views.__alloyId11531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11531"
    });
    $.__views.__alloyId11530.add($.__views.__alloyId11531);
    $.__views.__alloyId11532 = Ti.UI.createView({
        id: "__alloyId11532"
    });
    $.__views.__alloyId11532 && $.addTopLevelView($.__views.__alloyId11532);
    $.__views.__alloyId11533 = Ti.UI.createView({
        id: "__alloyId11533"
    });
    $.__views.__alloyId11532.add($.__views.__alloyId11533);
    $.__views.__alloyId11534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11534"
    });
    $.__views.__alloyId11533.add($.__views.__alloyId11534);
    $.__views.__alloyId11535 = Ti.UI.createView({
        id: "__alloyId11535"
    });
    $.__views.__alloyId11535 && $.addTopLevelView($.__views.__alloyId11535);
    $.__views.__alloyId11536 = Ti.UI.createView({
        id: "__alloyId11536"
    });
    $.__views.__alloyId11535.add($.__views.__alloyId11536);
    $.__views.__alloyId11537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11537"
    });
    $.__views.__alloyId11536.add($.__views.__alloyId11537);
    $.__views.__alloyId11538 = Ti.UI.createView({
        id: "__alloyId11538"
    });
    $.__views.__alloyId11538 && $.addTopLevelView($.__views.__alloyId11538);
    $.__views.__alloyId11539 = Ti.UI.createView({
        id: "__alloyId11539"
    });
    $.__views.__alloyId11538.add($.__views.__alloyId11539);
    $.__views.__alloyId11540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11540"
    });
    $.__views.__alloyId11539.add($.__views.__alloyId11540);
    $.__views.__alloyId11541 = Ti.UI.createView({
        id: "__alloyId11541"
    });
    $.__views.__alloyId11541 && $.addTopLevelView($.__views.__alloyId11541);
    $.__views.__alloyId11542 = Ti.UI.createView({
        id: "__alloyId11542"
    });
    $.__views.__alloyId11541.add($.__views.__alloyId11542);
    $.__views.__alloyId11543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11543"
    });
    $.__views.__alloyId11542.add($.__views.__alloyId11543);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;