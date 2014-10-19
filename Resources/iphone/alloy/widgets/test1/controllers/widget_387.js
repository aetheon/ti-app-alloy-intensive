function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_387";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_387 = Ti.UI.createView({
        id: "widget_387"
    });
    $.__views.widget_387 && $.addTopLevelView($.__views.widget_387);
    $.__views.__alloyId8346 = Ti.UI.createView({
        id: "__alloyId8346"
    });
    $.__views.widget_387.add($.__views.__alloyId8346);
    $.__views.__alloyId8347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8347"
    });
    $.__views.__alloyId8346.add($.__views.__alloyId8347);
    $.__views.__alloyId8348 = Ti.UI.createView({
        id: "__alloyId8348"
    });
    $.__views.__alloyId8348 && $.addTopLevelView($.__views.__alloyId8348);
    $.__views.__alloyId8349 = Ti.UI.createView({
        id: "__alloyId8349"
    });
    $.__views.__alloyId8348.add($.__views.__alloyId8349);
    $.__views.__alloyId8350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8350"
    });
    $.__views.__alloyId8349.add($.__views.__alloyId8350);
    $.__views.__alloyId8351 = Ti.UI.createView({
        id: "__alloyId8351"
    });
    $.__views.__alloyId8351 && $.addTopLevelView($.__views.__alloyId8351);
    $.__views.__alloyId8352 = Ti.UI.createView({
        id: "__alloyId8352"
    });
    $.__views.__alloyId8351.add($.__views.__alloyId8352);
    $.__views.__alloyId8353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8353"
    });
    $.__views.__alloyId8352.add($.__views.__alloyId8353);
    $.__views.__alloyId8354 = Ti.UI.createView({
        id: "__alloyId8354"
    });
    $.__views.__alloyId8354 && $.addTopLevelView($.__views.__alloyId8354);
    $.__views.__alloyId8355 = Ti.UI.createView({
        id: "__alloyId8355"
    });
    $.__views.__alloyId8354.add($.__views.__alloyId8355);
    $.__views.__alloyId8356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8356"
    });
    $.__views.__alloyId8355.add($.__views.__alloyId8356);
    $.__views.__alloyId8357 = Ti.UI.createView({
        id: "__alloyId8357"
    });
    $.__views.__alloyId8357 && $.addTopLevelView($.__views.__alloyId8357);
    $.__views.__alloyId8358 = Ti.UI.createView({
        id: "__alloyId8358"
    });
    $.__views.__alloyId8357.add($.__views.__alloyId8358);
    $.__views.__alloyId8359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8359"
    });
    $.__views.__alloyId8358.add($.__views.__alloyId8359);
    $.__views.__alloyId8360 = Ti.UI.createView({
        id: "__alloyId8360"
    });
    $.__views.__alloyId8360 && $.addTopLevelView($.__views.__alloyId8360);
    $.__views.__alloyId8361 = Ti.UI.createView({
        id: "__alloyId8361"
    });
    $.__views.__alloyId8360.add($.__views.__alloyId8361);
    $.__views.__alloyId8362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8362"
    });
    $.__views.__alloyId8361.add($.__views.__alloyId8362);
    $.__views.__alloyId8363 = Ti.UI.createView({
        id: "__alloyId8363"
    });
    $.__views.__alloyId8363 && $.addTopLevelView($.__views.__alloyId8363);
    $.__views.__alloyId8364 = Ti.UI.createView({
        id: "__alloyId8364"
    });
    $.__views.__alloyId8363.add($.__views.__alloyId8364);
    $.__views.__alloyId8365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8365"
    });
    $.__views.__alloyId8364.add($.__views.__alloyId8365);
    $.__views.__alloyId8366 = Ti.UI.createView({
        id: "__alloyId8366"
    });
    $.__views.__alloyId8366 && $.addTopLevelView($.__views.__alloyId8366);
    $.__views.__alloyId8367 = Ti.UI.createView({
        id: "__alloyId8367"
    });
    $.__views.__alloyId8366.add($.__views.__alloyId8367);
    $.__views.__alloyId8368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8368"
    });
    $.__views.__alloyId8367.add($.__views.__alloyId8368);
    $.__views.__alloyId8369 = Ti.UI.createView({
        id: "__alloyId8369"
    });
    $.__views.__alloyId8369 && $.addTopLevelView($.__views.__alloyId8369);
    $.__views.__alloyId8370 = Ti.UI.createView({
        id: "__alloyId8370"
    });
    $.__views.__alloyId8369.add($.__views.__alloyId8370);
    $.__views.__alloyId8371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8371"
    });
    $.__views.__alloyId8370.add($.__views.__alloyId8371);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;