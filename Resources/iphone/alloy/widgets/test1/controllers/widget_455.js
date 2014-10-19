function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_455";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_455 = Ti.UI.createView({
        id: "widget_455"
    });
    $.__views.widget_455 && $.addTopLevelView($.__views.widget_455);
    $.__views.__alloyId10322 = Ti.UI.createView({
        id: "__alloyId10322"
    });
    $.__views.widget_455.add($.__views.__alloyId10322);
    $.__views.__alloyId10323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10323"
    });
    $.__views.__alloyId10322.add($.__views.__alloyId10323);
    $.__views.__alloyId10324 = Ti.UI.createView({
        id: "__alloyId10324"
    });
    $.__views.__alloyId10324 && $.addTopLevelView($.__views.__alloyId10324);
    $.__views.__alloyId10325 = Ti.UI.createView({
        id: "__alloyId10325"
    });
    $.__views.__alloyId10324.add($.__views.__alloyId10325);
    $.__views.__alloyId10326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10326"
    });
    $.__views.__alloyId10325.add($.__views.__alloyId10326);
    $.__views.__alloyId10327 = Ti.UI.createView({
        id: "__alloyId10327"
    });
    $.__views.__alloyId10327 && $.addTopLevelView($.__views.__alloyId10327);
    $.__views.__alloyId10328 = Ti.UI.createView({
        id: "__alloyId10328"
    });
    $.__views.__alloyId10327.add($.__views.__alloyId10328);
    $.__views.__alloyId10329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10329"
    });
    $.__views.__alloyId10328.add($.__views.__alloyId10329);
    $.__views.__alloyId10330 = Ti.UI.createView({
        id: "__alloyId10330"
    });
    $.__views.__alloyId10330 && $.addTopLevelView($.__views.__alloyId10330);
    $.__views.__alloyId10331 = Ti.UI.createView({
        id: "__alloyId10331"
    });
    $.__views.__alloyId10330.add($.__views.__alloyId10331);
    $.__views.__alloyId10332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10332"
    });
    $.__views.__alloyId10331.add($.__views.__alloyId10332);
    $.__views.__alloyId10333 = Ti.UI.createView({
        id: "__alloyId10333"
    });
    $.__views.__alloyId10333 && $.addTopLevelView($.__views.__alloyId10333);
    $.__views.__alloyId10334 = Ti.UI.createView({
        id: "__alloyId10334"
    });
    $.__views.__alloyId10333.add($.__views.__alloyId10334);
    $.__views.__alloyId10335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10335"
    });
    $.__views.__alloyId10334.add($.__views.__alloyId10335);
    $.__views.__alloyId10336 = Ti.UI.createView({
        id: "__alloyId10336"
    });
    $.__views.__alloyId10336 && $.addTopLevelView($.__views.__alloyId10336);
    $.__views.__alloyId10337 = Ti.UI.createView({
        id: "__alloyId10337"
    });
    $.__views.__alloyId10336.add($.__views.__alloyId10337);
    $.__views.__alloyId10338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10338"
    });
    $.__views.__alloyId10337.add($.__views.__alloyId10338);
    $.__views.__alloyId10339 = Ti.UI.createView({
        id: "__alloyId10339"
    });
    $.__views.__alloyId10339 && $.addTopLevelView($.__views.__alloyId10339);
    $.__views.__alloyId10340 = Ti.UI.createView({
        id: "__alloyId10340"
    });
    $.__views.__alloyId10339.add($.__views.__alloyId10340);
    $.__views.__alloyId10341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10341"
    });
    $.__views.__alloyId10340.add($.__views.__alloyId10341);
    $.__views.__alloyId10342 = Ti.UI.createView({
        id: "__alloyId10342"
    });
    $.__views.__alloyId10342 && $.addTopLevelView($.__views.__alloyId10342);
    $.__views.__alloyId10343 = Ti.UI.createView({
        id: "__alloyId10343"
    });
    $.__views.__alloyId10342.add($.__views.__alloyId10343);
    $.__views.__alloyId10344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10344"
    });
    $.__views.__alloyId10343.add($.__views.__alloyId10344);
    $.__views.__alloyId10345 = Ti.UI.createView({
        id: "__alloyId10345"
    });
    $.__views.__alloyId10345 && $.addTopLevelView($.__views.__alloyId10345);
    $.__views.__alloyId10346 = Ti.UI.createView({
        id: "__alloyId10346"
    });
    $.__views.__alloyId10345.add($.__views.__alloyId10346);
    $.__views.__alloyId10347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10347"
    });
    $.__views.__alloyId10346.add($.__views.__alloyId10347);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;