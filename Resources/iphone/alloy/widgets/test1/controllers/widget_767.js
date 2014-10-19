function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_767";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_767 = Ti.UI.createView({
        id: "widget_767"
    });
    $.__views.widget_767 && $.addTopLevelView($.__views.widget_767);
    $.__views.__alloyId19318 = Ti.UI.createView({
        id: "__alloyId19318"
    });
    $.__views.widget_767.add($.__views.__alloyId19318);
    $.__views.__alloyId19319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19319"
    });
    $.__views.__alloyId19318.add($.__views.__alloyId19319);
    $.__views.__alloyId19320 = Ti.UI.createView({
        id: "__alloyId19320"
    });
    $.__views.__alloyId19320 && $.addTopLevelView($.__views.__alloyId19320);
    $.__views.__alloyId19321 = Ti.UI.createView({
        id: "__alloyId19321"
    });
    $.__views.__alloyId19320.add($.__views.__alloyId19321);
    $.__views.__alloyId19322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19322"
    });
    $.__views.__alloyId19321.add($.__views.__alloyId19322);
    $.__views.__alloyId19323 = Ti.UI.createView({
        id: "__alloyId19323"
    });
    $.__views.__alloyId19323 && $.addTopLevelView($.__views.__alloyId19323);
    $.__views.__alloyId19324 = Ti.UI.createView({
        id: "__alloyId19324"
    });
    $.__views.__alloyId19323.add($.__views.__alloyId19324);
    $.__views.__alloyId19325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19325"
    });
    $.__views.__alloyId19324.add($.__views.__alloyId19325);
    $.__views.__alloyId19326 = Ti.UI.createView({
        id: "__alloyId19326"
    });
    $.__views.__alloyId19326 && $.addTopLevelView($.__views.__alloyId19326);
    $.__views.__alloyId19327 = Ti.UI.createView({
        id: "__alloyId19327"
    });
    $.__views.__alloyId19326.add($.__views.__alloyId19327);
    $.__views.__alloyId19328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19328"
    });
    $.__views.__alloyId19327.add($.__views.__alloyId19328);
    $.__views.__alloyId19329 = Ti.UI.createView({
        id: "__alloyId19329"
    });
    $.__views.__alloyId19329 && $.addTopLevelView($.__views.__alloyId19329);
    $.__views.__alloyId19330 = Ti.UI.createView({
        id: "__alloyId19330"
    });
    $.__views.__alloyId19329.add($.__views.__alloyId19330);
    $.__views.__alloyId19331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19331"
    });
    $.__views.__alloyId19330.add($.__views.__alloyId19331);
    $.__views.__alloyId19332 = Ti.UI.createView({
        id: "__alloyId19332"
    });
    $.__views.__alloyId19332 && $.addTopLevelView($.__views.__alloyId19332);
    $.__views.__alloyId19333 = Ti.UI.createView({
        id: "__alloyId19333"
    });
    $.__views.__alloyId19332.add($.__views.__alloyId19333);
    $.__views.__alloyId19334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19334"
    });
    $.__views.__alloyId19333.add($.__views.__alloyId19334);
    $.__views.__alloyId19335 = Ti.UI.createView({
        id: "__alloyId19335"
    });
    $.__views.__alloyId19335 && $.addTopLevelView($.__views.__alloyId19335);
    $.__views.__alloyId19336 = Ti.UI.createView({
        id: "__alloyId19336"
    });
    $.__views.__alloyId19335.add($.__views.__alloyId19336);
    $.__views.__alloyId19337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19337"
    });
    $.__views.__alloyId19336.add($.__views.__alloyId19337);
    $.__views.__alloyId19338 = Ti.UI.createView({
        id: "__alloyId19338"
    });
    $.__views.__alloyId19338 && $.addTopLevelView($.__views.__alloyId19338);
    $.__views.__alloyId19339 = Ti.UI.createView({
        id: "__alloyId19339"
    });
    $.__views.__alloyId19338.add($.__views.__alloyId19339);
    $.__views.__alloyId19340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19340"
    });
    $.__views.__alloyId19339.add($.__views.__alloyId19340);
    $.__views.__alloyId19341 = Ti.UI.createView({
        id: "__alloyId19341"
    });
    $.__views.__alloyId19341 && $.addTopLevelView($.__views.__alloyId19341);
    $.__views.__alloyId19342 = Ti.UI.createView({
        id: "__alloyId19342"
    });
    $.__views.__alloyId19341.add($.__views.__alloyId19342);
    $.__views.__alloyId19343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19343"
    });
    $.__views.__alloyId19342.add($.__views.__alloyId19343);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;