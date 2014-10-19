function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_836";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_836 = Ti.UI.createView({
        id: "widget_836"
    });
    $.__views.widget_836 && $.addTopLevelView($.__views.widget_836);
    $.__views.__alloyId21320 = Ti.UI.createView({
        id: "__alloyId21320"
    });
    $.__views.widget_836.add($.__views.__alloyId21320);
    $.__views.__alloyId21321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21321"
    });
    $.__views.__alloyId21320.add($.__views.__alloyId21321);
    $.__views.__alloyId21322 = Ti.UI.createView({
        id: "__alloyId21322"
    });
    $.__views.__alloyId21322 && $.addTopLevelView($.__views.__alloyId21322);
    $.__views.__alloyId21323 = Ti.UI.createView({
        id: "__alloyId21323"
    });
    $.__views.__alloyId21322.add($.__views.__alloyId21323);
    $.__views.__alloyId21324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21324"
    });
    $.__views.__alloyId21323.add($.__views.__alloyId21324);
    $.__views.__alloyId21325 = Ti.UI.createView({
        id: "__alloyId21325"
    });
    $.__views.__alloyId21325 && $.addTopLevelView($.__views.__alloyId21325);
    $.__views.__alloyId21326 = Ti.UI.createView({
        id: "__alloyId21326"
    });
    $.__views.__alloyId21325.add($.__views.__alloyId21326);
    $.__views.__alloyId21327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21327"
    });
    $.__views.__alloyId21326.add($.__views.__alloyId21327);
    $.__views.__alloyId21328 = Ti.UI.createView({
        id: "__alloyId21328"
    });
    $.__views.__alloyId21328 && $.addTopLevelView($.__views.__alloyId21328);
    $.__views.__alloyId21329 = Ti.UI.createView({
        id: "__alloyId21329"
    });
    $.__views.__alloyId21328.add($.__views.__alloyId21329);
    $.__views.__alloyId21330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21330"
    });
    $.__views.__alloyId21329.add($.__views.__alloyId21330);
    $.__views.__alloyId21331 = Ti.UI.createView({
        id: "__alloyId21331"
    });
    $.__views.__alloyId21331 && $.addTopLevelView($.__views.__alloyId21331);
    $.__views.__alloyId21332 = Ti.UI.createView({
        id: "__alloyId21332"
    });
    $.__views.__alloyId21331.add($.__views.__alloyId21332);
    $.__views.__alloyId21333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21333"
    });
    $.__views.__alloyId21332.add($.__views.__alloyId21333);
    $.__views.__alloyId21334 = Ti.UI.createView({
        id: "__alloyId21334"
    });
    $.__views.__alloyId21334 && $.addTopLevelView($.__views.__alloyId21334);
    $.__views.__alloyId21335 = Ti.UI.createView({
        id: "__alloyId21335"
    });
    $.__views.__alloyId21334.add($.__views.__alloyId21335);
    $.__views.__alloyId21336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21336"
    });
    $.__views.__alloyId21335.add($.__views.__alloyId21336);
    $.__views.__alloyId21337 = Ti.UI.createView({
        id: "__alloyId21337"
    });
    $.__views.__alloyId21337 && $.addTopLevelView($.__views.__alloyId21337);
    $.__views.__alloyId21338 = Ti.UI.createView({
        id: "__alloyId21338"
    });
    $.__views.__alloyId21337.add($.__views.__alloyId21338);
    $.__views.__alloyId21339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21339"
    });
    $.__views.__alloyId21338.add($.__views.__alloyId21339);
    $.__views.__alloyId21340 = Ti.UI.createView({
        id: "__alloyId21340"
    });
    $.__views.__alloyId21340 && $.addTopLevelView($.__views.__alloyId21340);
    $.__views.__alloyId21341 = Ti.UI.createView({
        id: "__alloyId21341"
    });
    $.__views.__alloyId21340.add($.__views.__alloyId21341);
    $.__views.__alloyId21342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21342"
    });
    $.__views.__alloyId21341.add($.__views.__alloyId21342);
    $.__views.__alloyId21343 = Ti.UI.createView({
        id: "__alloyId21343"
    });
    $.__views.__alloyId21343 && $.addTopLevelView($.__views.__alloyId21343);
    $.__views.__alloyId21344 = Ti.UI.createView({
        id: "__alloyId21344"
    });
    $.__views.__alloyId21343.add($.__views.__alloyId21344);
    $.__views.__alloyId21345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21345"
    });
    $.__views.__alloyId21344.add($.__views.__alloyId21345);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;