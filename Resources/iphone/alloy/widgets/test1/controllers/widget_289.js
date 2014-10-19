function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_289";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_289 = Ti.UI.createView({
        id: "widget_289"
    });
    $.__views.widget_289 && $.addTopLevelView($.__views.widget_289);
    $.__views.__alloyId5512 = Ti.UI.createView({
        id: "__alloyId5512"
    });
    $.__views.widget_289.add($.__views.__alloyId5512);
    $.__views.__alloyId5513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5513"
    });
    $.__views.__alloyId5512.add($.__views.__alloyId5513);
    $.__views.__alloyId5514 = Ti.UI.createView({
        id: "__alloyId5514"
    });
    $.__views.__alloyId5514 && $.addTopLevelView($.__views.__alloyId5514);
    $.__views.__alloyId5515 = Ti.UI.createView({
        id: "__alloyId5515"
    });
    $.__views.__alloyId5514.add($.__views.__alloyId5515);
    $.__views.__alloyId5516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5516"
    });
    $.__views.__alloyId5515.add($.__views.__alloyId5516);
    $.__views.__alloyId5517 = Ti.UI.createView({
        id: "__alloyId5517"
    });
    $.__views.__alloyId5517 && $.addTopLevelView($.__views.__alloyId5517);
    $.__views.__alloyId5518 = Ti.UI.createView({
        id: "__alloyId5518"
    });
    $.__views.__alloyId5517.add($.__views.__alloyId5518);
    $.__views.__alloyId5519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5519"
    });
    $.__views.__alloyId5518.add($.__views.__alloyId5519);
    $.__views.__alloyId5520 = Ti.UI.createView({
        id: "__alloyId5520"
    });
    $.__views.__alloyId5520 && $.addTopLevelView($.__views.__alloyId5520);
    $.__views.__alloyId5521 = Ti.UI.createView({
        id: "__alloyId5521"
    });
    $.__views.__alloyId5520.add($.__views.__alloyId5521);
    $.__views.__alloyId5522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5522"
    });
    $.__views.__alloyId5521.add($.__views.__alloyId5522);
    $.__views.__alloyId5523 = Ti.UI.createView({
        id: "__alloyId5523"
    });
    $.__views.__alloyId5523 && $.addTopLevelView($.__views.__alloyId5523);
    $.__views.__alloyId5524 = Ti.UI.createView({
        id: "__alloyId5524"
    });
    $.__views.__alloyId5523.add($.__views.__alloyId5524);
    $.__views.__alloyId5525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5525"
    });
    $.__views.__alloyId5524.add($.__views.__alloyId5525);
    $.__views.__alloyId5526 = Ti.UI.createView({
        id: "__alloyId5526"
    });
    $.__views.__alloyId5526 && $.addTopLevelView($.__views.__alloyId5526);
    $.__views.__alloyId5527 = Ti.UI.createView({
        id: "__alloyId5527"
    });
    $.__views.__alloyId5526.add($.__views.__alloyId5527);
    $.__views.__alloyId5528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5528"
    });
    $.__views.__alloyId5527.add($.__views.__alloyId5528);
    $.__views.__alloyId5529 = Ti.UI.createView({
        id: "__alloyId5529"
    });
    $.__views.__alloyId5529 && $.addTopLevelView($.__views.__alloyId5529);
    $.__views.__alloyId5530 = Ti.UI.createView({
        id: "__alloyId5530"
    });
    $.__views.__alloyId5529.add($.__views.__alloyId5530);
    $.__views.__alloyId5531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5531"
    });
    $.__views.__alloyId5530.add($.__views.__alloyId5531);
    $.__views.__alloyId5532 = Ti.UI.createView({
        id: "__alloyId5532"
    });
    $.__views.__alloyId5532 && $.addTopLevelView($.__views.__alloyId5532);
    $.__views.__alloyId5533 = Ti.UI.createView({
        id: "__alloyId5533"
    });
    $.__views.__alloyId5532.add($.__views.__alloyId5533);
    $.__views.__alloyId5534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5534"
    });
    $.__views.__alloyId5533.add($.__views.__alloyId5534);
    $.__views.__alloyId5535 = Ti.UI.createView({
        id: "__alloyId5535"
    });
    $.__views.__alloyId5535 && $.addTopLevelView($.__views.__alloyId5535);
    $.__views.__alloyId5536 = Ti.UI.createView({
        id: "__alloyId5536"
    });
    $.__views.__alloyId5535.add($.__views.__alloyId5536);
    $.__views.__alloyId5537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5537"
    });
    $.__views.__alloyId5536.add($.__views.__alloyId5537);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;