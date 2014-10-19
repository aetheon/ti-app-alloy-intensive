function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_386";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_386 = Ti.UI.createView({
        id: "widget_386"
    });
    $.__views.widget_386 && $.addTopLevelView($.__views.widget_386);
    $.__views.__alloyId8320 = Ti.UI.createView({
        id: "__alloyId8320"
    });
    $.__views.widget_386.add($.__views.__alloyId8320);
    $.__views.__alloyId8321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8321"
    });
    $.__views.__alloyId8320.add($.__views.__alloyId8321);
    $.__views.__alloyId8322 = Ti.UI.createView({
        id: "__alloyId8322"
    });
    $.__views.__alloyId8322 && $.addTopLevelView($.__views.__alloyId8322);
    $.__views.__alloyId8323 = Ti.UI.createView({
        id: "__alloyId8323"
    });
    $.__views.__alloyId8322.add($.__views.__alloyId8323);
    $.__views.__alloyId8324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8324"
    });
    $.__views.__alloyId8323.add($.__views.__alloyId8324);
    $.__views.__alloyId8325 = Ti.UI.createView({
        id: "__alloyId8325"
    });
    $.__views.__alloyId8325 && $.addTopLevelView($.__views.__alloyId8325);
    $.__views.__alloyId8326 = Ti.UI.createView({
        id: "__alloyId8326"
    });
    $.__views.__alloyId8325.add($.__views.__alloyId8326);
    $.__views.__alloyId8327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8327"
    });
    $.__views.__alloyId8326.add($.__views.__alloyId8327);
    $.__views.__alloyId8328 = Ti.UI.createView({
        id: "__alloyId8328"
    });
    $.__views.__alloyId8328 && $.addTopLevelView($.__views.__alloyId8328);
    $.__views.__alloyId8329 = Ti.UI.createView({
        id: "__alloyId8329"
    });
    $.__views.__alloyId8328.add($.__views.__alloyId8329);
    $.__views.__alloyId8330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8330"
    });
    $.__views.__alloyId8329.add($.__views.__alloyId8330);
    $.__views.__alloyId8331 = Ti.UI.createView({
        id: "__alloyId8331"
    });
    $.__views.__alloyId8331 && $.addTopLevelView($.__views.__alloyId8331);
    $.__views.__alloyId8332 = Ti.UI.createView({
        id: "__alloyId8332"
    });
    $.__views.__alloyId8331.add($.__views.__alloyId8332);
    $.__views.__alloyId8333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8333"
    });
    $.__views.__alloyId8332.add($.__views.__alloyId8333);
    $.__views.__alloyId8334 = Ti.UI.createView({
        id: "__alloyId8334"
    });
    $.__views.__alloyId8334 && $.addTopLevelView($.__views.__alloyId8334);
    $.__views.__alloyId8335 = Ti.UI.createView({
        id: "__alloyId8335"
    });
    $.__views.__alloyId8334.add($.__views.__alloyId8335);
    $.__views.__alloyId8336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8336"
    });
    $.__views.__alloyId8335.add($.__views.__alloyId8336);
    $.__views.__alloyId8337 = Ti.UI.createView({
        id: "__alloyId8337"
    });
    $.__views.__alloyId8337 && $.addTopLevelView($.__views.__alloyId8337);
    $.__views.__alloyId8338 = Ti.UI.createView({
        id: "__alloyId8338"
    });
    $.__views.__alloyId8337.add($.__views.__alloyId8338);
    $.__views.__alloyId8339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8339"
    });
    $.__views.__alloyId8338.add($.__views.__alloyId8339);
    $.__views.__alloyId8340 = Ti.UI.createView({
        id: "__alloyId8340"
    });
    $.__views.__alloyId8340 && $.addTopLevelView($.__views.__alloyId8340);
    $.__views.__alloyId8341 = Ti.UI.createView({
        id: "__alloyId8341"
    });
    $.__views.__alloyId8340.add($.__views.__alloyId8341);
    $.__views.__alloyId8342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8342"
    });
    $.__views.__alloyId8341.add($.__views.__alloyId8342);
    $.__views.__alloyId8343 = Ti.UI.createView({
        id: "__alloyId8343"
    });
    $.__views.__alloyId8343 && $.addTopLevelView($.__views.__alloyId8343);
    $.__views.__alloyId8344 = Ti.UI.createView({
        id: "__alloyId8344"
    });
    $.__views.__alloyId8343.add($.__views.__alloyId8344);
    $.__views.__alloyId8345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8345"
    });
    $.__views.__alloyId8344.add($.__views.__alloyId8345);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;