function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_56";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_56 = Ti.UI.createView({
        id: "widget_56"
    });
    $.__views.widget_56 && $.addTopLevelView($.__views.widget_56);
    $.__views.__alloyId13338 = Ti.UI.createView({
        id: "__alloyId13338"
    });
    $.__views.widget_56.add($.__views.__alloyId13338);
    $.__views.__alloyId13339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13339"
    });
    $.__views.__alloyId13338.add($.__views.__alloyId13339);
    $.__views.__alloyId13340 = Ti.UI.createView({
        id: "__alloyId13340"
    });
    $.__views.__alloyId13340 && $.addTopLevelView($.__views.__alloyId13340);
    $.__views.__alloyId13341 = Ti.UI.createView({
        id: "__alloyId13341"
    });
    $.__views.__alloyId13340.add($.__views.__alloyId13341);
    $.__views.__alloyId13342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13342"
    });
    $.__views.__alloyId13341.add($.__views.__alloyId13342);
    $.__views.__alloyId13343 = Ti.UI.createView({
        id: "__alloyId13343"
    });
    $.__views.__alloyId13343 && $.addTopLevelView($.__views.__alloyId13343);
    $.__views.__alloyId13344 = Ti.UI.createView({
        id: "__alloyId13344"
    });
    $.__views.__alloyId13343.add($.__views.__alloyId13344);
    $.__views.__alloyId13345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13345"
    });
    $.__views.__alloyId13344.add($.__views.__alloyId13345);
    $.__views.__alloyId13346 = Ti.UI.createView({
        id: "__alloyId13346"
    });
    $.__views.__alloyId13346 && $.addTopLevelView($.__views.__alloyId13346);
    $.__views.__alloyId13347 = Ti.UI.createView({
        id: "__alloyId13347"
    });
    $.__views.__alloyId13346.add($.__views.__alloyId13347);
    $.__views.__alloyId13348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13348"
    });
    $.__views.__alloyId13347.add($.__views.__alloyId13348);
    $.__views.__alloyId13349 = Ti.UI.createView({
        id: "__alloyId13349"
    });
    $.__views.__alloyId13349 && $.addTopLevelView($.__views.__alloyId13349);
    $.__views.__alloyId13350 = Ti.UI.createView({
        id: "__alloyId13350"
    });
    $.__views.__alloyId13349.add($.__views.__alloyId13350);
    $.__views.__alloyId13351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13351"
    });
    $.__views.__alloyId13350.add($.__views.__alloyId13351);
    $.__views.__alloyId13352 = Ti.UI.createView({
        id: "__alloyId13352"
    });
    $.__views.__alloyId13352 && $.addTopLevelView($.__views.__alloyId13352);
    $.__views.__alloyId13353 = Ti.UI.createView({
        id: "__alloyId13353"
    });
    $.__views.__alloyId13352.add($.__views.__alloyId13353);
    $.__views.__alloyId13354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13354"
    });
    $.__views.__alloyId13353.add($.__views.__alloyId13354);
    $.__views.__alloyId13355 = Ti.UI.createView({
        id: "__alloyId13355"
    });
    $.__views.__alloyId13355 && $.addTopLevelView($.__views.__alloyId13355);
    $.__views.__alloyId13356 = Ti.UI.createView({
        id: "__alloyId13356"
    });
    $.__views.__alloyId13355.add($.__views.__alloyId13356);
    $.__views.__alloyId13357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13357"
    });
    $.__views.__alloyId13356.add($.__views.__alloyId13357);
    $.__views.__alloyId13358 = Ti.UI.createView({
        id: "__alloyId13358"
    });
    $.__views.__alloyId13358 && $.addTopLevelView($.__views.__alloyId13358);
    $.__views.__alloyId13359 = Ti.UI.createView({
        id: "__alloyId13359"
    });
    $.__views.__alloyId13358.add($.__views.__alloyId13359);
    $.__views.__alloyId13360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13360"
    });
    $.__views.__alloyId13359.add($.__views.__alloyId13360);
    $.__views.__alloyId13361 = Ti.UI.createView({
        id: "__alloyId13361"
    });
    $.__views.__alloyId13361 && $.addTopLevelView($.__views.__alloyId13361);
    $.__views.__alloyId13362 = Ti.UI.createView({
        id: "__alloyId13362"
    });
    $.__views.__alloyId13361.add($.__views.__alloyId13362);
    $.__views.__alloyId13363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13363"
    });
    $.__views.__alloyId13362.add($.__views.__alloyId13363);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;