function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_731";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_731 = Ti.UI.createView({
        id: "widget_731"
    });
    $.__views.widget_731 && $.addTopLevelView($.__views.widget_731);
    $.__views.__alloyId18304 = Ti.UI.createView({
        id: "__alloyId18304"
    });
    $.__views.widget_731.add($.__views.__alloyId18304);
    $.__views.__alloyId18305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18305"
    });
    $.__views.__alloyId18304.add($.__views.__alloyId18305);
    $.__views.__alloyId18306 = Ti.UI.createView({
        id: "__alloyId18306"
    });
    $.__views.__alloyId18306 && $.addTopLevelView($.__views.__alloyId18306);
    $.__views.__alloyId18307 = Ti.UI.createView({
        id: "__alloyId18307"
    });
    $.__views.__alloyId18306.add($.__views.__alloyId18307);
    $.__views.__alloyId18308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18308"
    });
    $.__views.__alloyId18307.add($.__views.__alloyId18308);
    $.__views.__alloyId18309 = Ti.UI.createView({
        id: "__alloyId18309"
    });
    $.__views.__alloyId18309 && $.addTopLevelView($.__views.__alloyId18309);
    $.__views.__alloyId18310 = Ti.UI.createView({
        id: "__alloyId18310"
    });
    $.__views.__alloyId18309.add($.__views.__alloyId18310);
    $.__views.__alloyId18311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18311"
    });
    $.__views.__alloyId18310.add($.__views.__alloyId18311);
    $.__views.__alloyId18312 = Ti.UI.createView({
        id: "__alloyId18312"
    });
    $.__views.__alloyId18312 && $.addTopLevelView($.__views.__alloyId18312);
    $.__views.__alloyId18313 = Ti.UI.createView({
        id: "__alloyId18313"
    });
    $.__views.__alloyId18312.add($.__views.__alloyId18313);
    $.__views.__alloyId18314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18314"
    });
    $.__views.__alloyId18313.add($.__views.__alloyId18314);
    $.__views.__alloyId18315 = Ti.UI.createView({
        id: "__alloyId18315"
    });
    $.__views.__alloyId18315 && $.addTopLevelView($.__views.__alloyId18315);
    $.__views.__alloyId18316 = Ti.UI.createView({
        id: "__alloyId18316"
    });
    $.__views.__alloyId18315.add($.__views.__alloyId18316);
    $.__views.__alloyId18317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18317"
    });
    $.__views.__alloyId18316.add($.__views.__alloyId18317);
    $.__views.__alloyId18318 = Ti.UI.createView({
        id: "__alloyId18318"
    });
    $.__views.__alloyId18318 && $.addTopLevelView($.__views.__alloyId18318);
    $.__views.__alloyId18319 = Ti.UI.createView({
        id: "__alloyId18319"
    });
    $.__views.__alloyId18318.add($.__views.__alloyId18319);
    $.__views.__alloyId18320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18320"
    });
    $.__views.__alloyId18319.add($.__views.__alloyId18320);
    $.__views.__alloyId18321 = Ti.UI.createView({
        id: "__alloyId18321"
    });
    $.__views.__alloyId18321 && $.addTopLevelView($.__views.__alloyId18321);
    $.__views.__alloyId18322 = Ti.UI.createView({
        id: "__alloyId18322"
    });
    $.__views.__alloyId18321.add($.__views.__alloyId18322);
    $.__views.__alloyId18323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18323"
    });
    $.__views.__alloyId18322.add($.__views.__alloyId18323);
    $.__views.__alloyId18324 = Ti.UI.createView({
        id: "__alloyId18324"
    });
    $.__views.__alloyId18324 && $.addTopLevelView($.__views.__alloyId18324);
    $.__views.__alloyId18325 = Ti.UI.createView({
        id: "__alloyId18325"
    });
    $.__views.__alloyId18324.add($.__views.__alloyId18325);
    $.__views.__alloyId18326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18326"
    });
    $.__views.__alloyId18325.add($.__views.__alloyId18326);
    $.__views.__alloyId18327 = Ti.UI.createView({
        id: "__alloyId18327"
    });
    $.__views.__alloyId18327 && $.addTopLevelView($.__views.__alloyId18327);
    $.__views.__alloyId18328 = Ti.UI.createView({
        id: "__alloyId18328"
    });
    $.__views.__alloyId18327.add($.__views.__alloyId18328);
    $.__views.__alloyId18329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18329"
    });
    $.__views.__alloyId18328.add($.__views.__alloyId18329);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;