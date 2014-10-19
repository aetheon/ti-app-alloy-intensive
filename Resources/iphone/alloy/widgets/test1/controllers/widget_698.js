function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_698";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_698 = Ti.UI.createView({
        id: "widget_698"
    });
    $.__views.widget_698 && $.addTopLevelView($.__views.widget_698);
    $.__views.__alloyId17316 = Ti.UI.createView({
        id: "__alloyId17316"
    });
    $.__views.widget_698.add($.__views.__alloyId17316);
    $.__views.__alloyId17317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17317"
    });
    $.__views.__alloyId17316.add($.__views.__alloyId17317);
    $.__views.__alloyId17318 = Ti.UI.createView({
        id: "__alloyId17318"
    });
    $.__views.__alloyId17318 && $.addTopLevelView($.__views.__alloyId17318);
    $.__views.__alloyId17319 = Ti.UI.createView({
        id: "__alloyId17319"
    });
    $.__views.__alloyId17318.add($.__views.__alloyId17319);
    $.__views.__alloyId17320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17320"
    });
    $.__views.__alloyId17319.add($.__views.__alloyId17320);
    $.__views.__alloyId17321 = Ti.UI.createView({
        id: "__alloyId17321"
    });
    $.__views.__alloyId17321 && $.addTopLevelView($.__views.__alloyId17321);
    $.__views.__alloyId17322 = Ti.UI.createView({
        id: "__alloyId17322"
    });
    $.__views.__alloyId17321.add($.__views.__alloyId17322);
    $.__views.__alloyId17323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17323"
    });
    $.__views.__alloyId17322.add($.__views.__alloyId17323);
    $.__views.__alloyId17324 = Ti.UI.createView({
        id: "__alloyId17324"
    });
    $.__views.__alloyId17324 && $.addTopLevelView($.__views.__alloyId17324);
    $.__views.__alloyId17325 = Ti.UI.createView({
        id: "__alloyId17325"
    });
    $.__views.__alloyId17324.add($.__views.__alloyId17325);
    $.__views.__alloyId17326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17326"
    });
    $.__views.__alloyId17325.add($.__views.__alloyId17326);
    $.__views.__alloyId17327 = Ti.UI.createView({
        id: "__alloyId17327"
    });
    $.__views.__alloyId17327 && $.addTopLevelView($.__views.__alloyId17327);
    $.__views.__alloyId17328 = Ti.UI.createView({
        id: "__alloyId17328"
    });
    $.__views.__alloyId17327.add($.__views.__alloyId17328);
    $.__views.__alloyId17329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17329"
    });
    $.__views.__alloyId17328.add($.__views.__alloyId17329);
    $.__views.__alloyId17330 = Ti.UI.createView({
        id: "__alloyId17330"
    });
    $.__views.__alloyId17330 && $.addTopLevelView($.__views.__alloyId17330);
    $.__views.__alloyId17331 = Ti.UI.createView({
        id: "__alloyId17331"
    });
    $.__views.__alloyId17330.add($.__views.__alloyId17331);
    $.__views.__alloyId17332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17332"
    });
    $.__views.__alloyId17331.add($.__views.__alloyId17332);
    $.__views.__alloyId17333 = Ti.UI.createView({
        id: "__alloyId17333"
    });
    $.__views.__alloyId17333 && $.addTopLevelView($.__views.__alloyId17333);
    $.__views.__alloyId17334 = Ti.UI.createView({
        id: "__alloyId17334"
    });
    $.__views.__alloyId17333.add($.__views.__alloyId17334);
    $.__views.__alloyId17335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17335"
    });
    $.__views.__alloyId17334.add($.__views.__alloyId17335);
    $.__views.__alloyId17336 = Ti.UI.createView({
        id: "__alloyId17336"
    });
    $.__views.__alloyId17336 && $.addTopLevelView($.__views.__alloyId17336);
    $.__views.__alloyId17337 = Ti.UI.createView({
        id: "__alloyId17337"
    });
    $.__views.__alloyId17336.add($.__views.__alloyId17337);
    $.__views.__alloyId17338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17338"
    });
    $.__views.__alloyId17337.add($.__views.__alloyId17338);
    $.__views.__alloyId17339 = Ti.UI.createView({
        id: "__alloyId17339"
    });
    $.__views.__alloyId17339 && $.addTopLevelView($.__views.__alloyId17339);
    $.__views.__alloyId17340 = Ti.UI.createView({
        id: "__alloyId17340"
    });
    $.__views.__alloyId17339.add($.__views.__alloyId17340);
    $.__views.__alloyId17341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17341"
    });
    $.__views.__alloyId17340.add($.__views.__alloyId17341);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;