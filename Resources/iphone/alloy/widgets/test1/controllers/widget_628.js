function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_628";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_628 = Ti.UI.createView({
        id: "widget_628"
    });
    $.__views.widget_628 && $.addTopLevelView($.__views.widget_628);
    $.__views.__alloyId15314 = Ti.UI.createView({
        id: "__alloyId15314"
    });
    $.__views.widget_628.add($.__views.__alloyId15314);
    $.__views.__alloyId15315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15315"
    });
    $.__views.__alloyId15314.add($.__views.__alloyId15315);
    $.__views.__alloyId15316 = Ti.UI.createView({
        id: "__alloyId15316"
    });
    $.__views.__alloyId15316 && $.addTopLevelView($.__views.__alloyId15316);
    $.__views.__alloyId15317 = Ti.UI.createView({
        id: "__alloyId15317"
    });
    $.__views.__alloyId15316.add($.__views.__alloyId15317);
    $.__views.__alloyId15318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15318"
    });
    $.__views.__alloyId15317.add($.__views.__alloyId15318);
    $.__views.__alloyId15319 = Ti.UI.createView({
        id: "__alloyId15319"
    });
    $.__views.__alloyId15319 && $.addTopLevelView($.__views.__alloyId15319);
    $.__views.__alloyId15320 = Ti.UI.createView({
        id: "__alloyId15320"
    });
    $.__views.__alloyId15319.add($.__views.__alloyId15320);
    $.__views.__alloyId15321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15321"
    });
    $.__views.__alloyId15320.add($.__views.__alloyId15321);
    $.__views.__alloyId15322 = Ti.UI.createView({
        id: "__alloyId15322"
    });
    $.__views.__alloyId15322 && $.addTopLevelView($.__views.__alloyId15322);
    $.__views.__alloyId15323 = Ti.UI.createView({
        id: "__alloyId15323"
    });
    $.__views.__alloyId15322.add($.__views.__alloyId15323);
    $.__views.__alloyId15324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15324"
    });
    $.__views.__alloyId15323.add($.__views.__alloyId15324);
    $.__views.__alloyId15325 = Ti.UI.createView({
        id: "__alloyId15325"
    });
    $.__views.__alloyId15325 && $.addTopLevelView($.__views.__alloyId15325);
    $.__views.__alloyId15326 = Ti.UI.createView({
        id: "__alloyId15326"
    });
    $.__views.__alloyId15325.add($.__views.__alloyId15326);
    $.__views.__alloyId15327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15327"
    });
    $.__views.__alloyId15326.add($.__views.__alloyId15327);
    $.__views.__alloyId15328 = Ti.UI.createView({
        id: "__alloyId15328"
    });
    $.__views.__alloyId15328 && $.addTopLevelView($.__views.__alloyId15328);
    $.__views.__alloyId15329 = Ti.UI.createView({
        id: "__alloyId15329"
    });
    $.__views.__alloyId15328.add($.__views.__alloyId15329);
    $.__views.__alloyId15330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15330"
    });
    $.__views.__alloyId15329.add($.__views.__alloyId15330);
    $.__views.__alloyId15331 = Ti.UI.createView({
        id: "__alloyId15331"
    });
    $.__views.__alloyId15331 && $.addTopLevelView($.__views.__alloyId15331);
    $.__views.__alloyId15332 = Ti.UI.createView({
        id: "__alloyId15332"
    });
    $.__views.__alloyId15331.add($.__views.__alloyId15332);
    $.__views.__alloyId15333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15333"
    });
    $.__views.__alloyId15332.add($.__views.__alloyId15333);
    $.__views.__alloyId15334 = Ti.UI.createView({
        id: "__alloyId15334"
    });
    $.__views.__alloyId15334 && $.addTopLevelView($.__views.__alloyId15334);
    $.__views.__alloyId15335 = Ti.UI.createView({
        id: "__alloyId15335"
    });
    $.__views.__alloyId15334.add($.__views.__alloyId15335);
    $.__views.__alloyId15336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15336"
    });
    $.__views.__alloyId15335.add($.__views.__alloyId15336);
    $.__views.__alloyId15337 = Ti.UI.createView({
        id: "__alloyId15337"
    });
    $.__views.__alloyId15337 && $.addTopLevelView($.__views.__alloyId15337);
    $.__views.__alloyId15338 = Ti.UI.createView({
        id: "__alloyId15338"
    });
    $.__views.__alloyId15337.add($.__views.__alloyId15338);
    $.__views.__alloyId15339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15339"
    });
    $.__views.__alloyId15338.add($.__views.__alloyId15339);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;