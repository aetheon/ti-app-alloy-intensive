function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_667";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_667 = Ti.UI.createView({
        id: "widget_667"
    });
    $.__views.widget_667 && $.addTopLevelView($.__views.widget_667);
    $.__views.__alloyId16432 = Ti.UI.createView({
        id: "__alloyId16432"
    });
    $.__views.widget_667.add($.__views.__alloyId16432);
    $.__views.__alloyId16433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16433"
    });
    $.__views.__alloyId16432.add($.__views.__alloyId16433);
    $.__views.__alloyId16434 = Ti.UI.createView({
        id: "__alloyId16434"
    });
    $.__views.__alloyId16434 && $.addTopLevelView($.__views.__alloyId16434);
    $.__views.__alloyId16435 = Ti.UI.createView({
        id: "__alloyId16435"
    });
    $.__views.__alloyId16434.add($.__views.__alloyId16435);
    $.__views.__alloyId16436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16436"
    });
    $.__views.__alloyId16435.add($.__views.__alloyId16436);
    $.__views.__alloyId16437 = Ti.UI.createView({
        id: "__alloyId16437"
    });
    $.__views.__alloyId16437 && $.addTopLevelView($.__views.__alloyId16437);
    $.__views.__alloyId16438 = Ti.UI.createView({
        id: "__alloyId16438"
    });
    $.__views.__alloyId16437.add($.__views.__alloyId16438);
    $.__views.__alloyId16439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16439"
    });
    $.__views.__alloyId16438.add($.__views.__alloyId16439);
    $.__views.__alloyId16440 = Ti.UI.createView({
        id: "__alloyId16440"
    });
    $.__views.__alloyId16440 && $.addTopLevelView($.__views.__alloyId16440);
    $.__views.__alloyId16441 = Ti.UI.createView({
        id: "__alloyId16441"
    });
    $.__views.__alloyId16440.add($.__views.__alloyId16441);
    $.__views.__alloyId16442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16442"
    });
    $.__views.__alloyId16441.add($.__views.__alloyId16442);
    $.__views.__alloyId16443 = Ti.UI.createView({
        id: "__alloyId16443"
    });
    $.__views.__alloyId16443 && $.addTopLevelView($.__views.__alloyId16443);
    $.__views.__alloyId16444 = Ti.UI.createView({
        id: "__alloyId16444"
    });
    $.__views.__alloyId16443.add($.__views.__alloyId16444);
    $.__views.__alloyId16445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16445"
    });
    $.__views.__alloyId16444.add($.__views.__alloyId16445);
    $.__views.__alloyId16446 = Ti.UI.createView({
        id: "__alloyId16446"
    });
    $.__views.__alloyId16446 && $.addTopLevelView($.__views.__alloyId16446);
    $.__views.__alloyId16447 = Ti.UI.createView({
        id: "__alloyId16447"
    });
    $.__views.__alloyId16446.add($.__views.__alloyId16447);
    $.__views.__alloyId16448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16448"
    });
    $.__views.__alloyId16447.add($.__views.__alloyId16448);
    $.__views.__alloyId16449 = Ti.UI.createView({
        id: "__alloyId16449"
    });
    $.__views.__alloyId16449 && $.addTopLevelView($.__views.__alloyId16449);
    $.__views.__alloyId16450 = Ti.UI.createView({
        id: "__alloyId16450"
    });
    $.__views.__alloyId16449.add($.__views.__alloyId16450);
    $.__views.__alloyId16451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16451"
    });
    $.__views.__alloyId16450.add($.__views.__alloyId16451);
    $.__views.__alloyId16452 = Ti.UI.createView({
        id: "__alloyId16452"
    });
    $.__views.__alloyId16452 && $.addTopLevelView($.__views.__alloyId16452);
    $.__views.__alloyId16453 = Ti.UI.createView({
        id: "__alloyId16453"
    });
    $.__views.__alloyId16452.add($.__views.__alloyId16453);
    $.__views.__alloyId16454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16454"
    });
    $.__views.__alloyId16453.add($.__views.__alloyId16454);
    $.__views.__alloyId16455 = Ti.UI.createView({
        id: "__alloyId16455"
    });
    $.__views.__alloyId16455 && $.addTopLevelView($.__views.__alloyId16455);
    $.__views.__alloyId16456 = Ti.UI.createView({
        id: "__alloyId16456"
    });
    $.__views.__alloyId16455.add($.__views.__alloyId16456);
    $.__views.__alloyId16457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16457"
    });
    $.__views.__alloyId16456.add($.__views.__alloyId16457);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;