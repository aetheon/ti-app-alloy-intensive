function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_316";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_316 = Ti.UI.createView({
        id: "widget_316"
    });
    $.__views.widget_316 && $.addTopLevelView($.__views.widget_316);
    $.__views.__alloyId6318 = Ti.UI.createView({
        id: "__alloyId6318"
    });
    $.__views.widget_316.add($.__views.__alloyId6318);
    $.__views.__alloyId6319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6319"
    });
    $.__views.__alloyId6318.add($.__views.__alloyId6319);
    $.__views.__alloyId6320 = Ti.UI.createView({
        id: "__alloyId6320"
    });
    $.__views.__alloyId6320 && $.addTopLevelView($.__views.__alloyId6320);
    $.__views.__alloyId6321 = Ti.UI.createView({
        id: "__alloyId6321"
    });
    $.__views.__alloyId6320.add($.__views.__alloyId6321);
    $.__views.__alloyId6322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6322"
    });
    $.__views.__alloyId6321.add($.__views.__alloyId6322);
    $.__views.__alloyId6323 = Ti.UI.createView({
        id: "__alloyId6323"
    });
    $.__views.__alloyId6323 && $.addTopLevelView($.__views.__alloyId6323);
    $.__views.__alloyId6324 = Ti.UI.createView({
        id: "__alloyId6324"
    });
    $.__views.__alloyId6323.add($.__views.__alloyId6324);
    $.__views.__alloyId6325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6325"
    });
    $.__views.__alloyId6324.add($.__views.__alloyId6325);
    $.__views.__alloyId6326 = Ti.UI.createView({
        id: "__alloyId6326"
    });
    $.__views.__alloyId6326 && $.addTopLevelView($.__views.__alloyId6326);
    $.__views.__alloyId6327 = Ti.UI.createView({
        id: "__alloyId6327"
    });
    $.__views.__alloyId6326.add($.__views.__alloyId6327);
    $.__views.__alloyId6328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6328"
    });
    $.__views.__alloyId6327.add($.__views.__alloyId6328);
    $.__views.__alloyId6329 = Ti.UI.createView({
        id: "__alloyId6329"
    });
    $.__views.__alloyId6329 && $.addTopLevelView($.__views.__alloyId6329);
    $.__views.__alloyId6330 = Ti.UI.createView({
        id: "__alloyId6330"
    });
    $.__views.__alloyId6329.add($.__views.__alloyId6330);
    $.__views.__alloyId6331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6331"
    });
    $.__views.__alloyId6330.add($.__views.__alloyId6331);
    $.__views.__alloyId6332 = Ti.UI.createView({
        id: "__alloyId6332"
    });
    $.__views.__alloyId6332 && $.addTopLevelView($.__views.__alloyId6332);
    $.__views.__alloyId6333 = Ti.UI.createView({
        id: "__alloyId6333"
    });
    $.__views.__alloyId6332.add($.__views.__alloyId6333);
    $.__views.__alloyId6334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6334"
    });
    $.__views.__alloyId6333.add($.__views.__alloyId6334);
    $.__views.__alloyId6335 = Ti.UI.createView({
        id: "__alloyId6335"
    });
    $.__views.__alloyId6335 && $.addTopLevelView($.__views.__alloyId6335);
    $.__views.__alloyId6336 = Ti.UI.createView({
        id: "__alloyId6336"
    });
    $.__views.__alloyId6335.add($.__views.__alloyId6336);
    $.__views.__alloyId6337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6337"
    });
    $.__views.__alloyId6336.add($.__views.__alloyId6337);
    $.__views.__alloyId6338 = Ti.UI.createView({
        id: "__alloyId6338"
    });
    $.__views.__alloyId6338 && $.addTopLevelView($.__views.__alloyId6338);
    $.__views.__alloyId6339 = Ti.UI.createView({
        id: "__alloyId6339"
    });
    $.__views.__alloyId6338.add($.__views.__alloyId6339);
    $.__views.__alloyId6340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6340"
    });
    $.__views.__alloyId6339.add($.__views.__alloyId6340);
    $.__views.__alloyId6341 = Ti.UI.createView({
        id: "__alloyId6341"
    });
    $.__views.__alloyId6341 && $.addTopLevelView($.__views.__alloyId6341);
    $.__views.__alloyId6342 = Ti.UI.createView({
        id: "__alloyId6342"
    });
    $.__views.__alloyId6341.add($.__views.__alloyId6342);
    $.__views.__alloyId6343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6343"
    });
    $.__views.__alloyId6342.add($.__views.__alloyId6343);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;