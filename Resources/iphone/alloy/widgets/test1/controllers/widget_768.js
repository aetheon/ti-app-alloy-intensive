function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_768";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_768 = Ti.UI.createView({
        id: "widget_768"
    });
    $.__views.widget_768 && $.addTopLevelView($.__views.widget_768);
    $.__views.__alloyId19344 = Ti.UI.createView({
        id: "__alloyId19344"
    });
    $.__views.widget_768.add($.__views.__alloyId19344);
    $.__views.__alloyId19345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19345"
    });
    $.__views.__alloyId19344.add($.__views.__alloyId19345);
    $.__views.__alloyId19346 = Ti.UI.createView({
        id: "__alloyId19346"
    });
    $.__views.__alloyId19346 && $.addTopLevelView($.__views.__alloyId19346);
    $.__views.__alloyId19347 = Ti.UI.createView({
        id: "__alloyId19347"
    });
    $.__views.__alloyId19346.add($.__views.__alloyId19347);
    $.__views.__alloyId19348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19348"
    });
    $.__views.__alloyId19347.add($.__views.__alloyId19348);
    $.__views.__alloyId19349 = Ti.UI.createView({
        id: "__alloyId19349"
    });
    $.__views.__alloyId19349 && $.addTopLevelView($.__views.__alloyId19349);
    $.__views.__alloyId19350 = Ti.UI.createView({
        id: "__alloyId19350"
    });
    $.__views.__alloyId19349.add($.__views.__alloyId19350);
    $.__views.__alloyId19351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19351"
    });
    $.__views.__alloyId19350.add($.__views.__alloyId19351);
    $.__views.__alloyId19352 = Ti.UI.createView({
        id: "__alloyId19352"
    });
    $.__views.__alloyId19352 && $.addTopLevelView($.__views.__alloyId19352);
    $.__views.__alloyId19353 = Ti.UI.createView({
        id: "__alloyId19353"
    });
    $.__views.__alloyId19352.add($.__views.__alloyId19353);
    $.__views.__alloyId19354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19354"
    });
    $.__views.__alloyId19353.add($.__views.__alloyId19354);
    $.__views.__alloyId19355 = Ti.UI.createView({
        id: "__alloyId19355"
    });
    $.__views.__alloyId19355 && $.addTopLevelView($.__views.__alloyId19355);
    $.__views.__alloyId19356 = Ti.UI.createView({
        id: "__alloyId19356"
    });
    $.__views.__alloyId19355.add($.__views.__alloyId19356);
    $.__views.__alloyId19357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19357"
    });
    $.__views.__alloyId19356.add($.__views.__alloyId19357);
    $.__views.__alloyId19358 = Ti.UI.createView({
        id: "__alloyId19358"
    });
    $.__views.__alloyId19358 && $.addTopLevelView($.__views.__alloyId19358);
    $.__views.__alloyId19359 = Ti.UI.createView({
        id: "__alloyId19359"
    });
    $.__views.__alloyId19358.add($.__views.__alloyId19359);
    $.__views.__alloyId19360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19360"
    });
    $.__views.__alloyId19359.add($.__views.__alloyId19360);
    $.__views.__alloyId19361 = Ti.UI.createView({
        id: "__alloyId19361"
    });
    $.__views.__alloyId19361 && $.addTopLevelView($.__views.__alloyId19361);
    $.__views.__alloyId19362 = Ti.UI.createView({
        id: "__alloyId19362"
    });
    $.__views.__alloyId19361.add($.__views.__alloyId19362);
    $.__views.__alloyId19363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19363"
    });
    $.__views.__alloyId19362.add($.__views.__alloyId19363);
    $.__views.__alloyId19364 = Ti.UI.createView({
        id: "__alloyId19364"
    });
    $.__views.__alloyId19364 && $.addTopLevelView($.__views.__alloyId19364);
    $.__views.__alloyId19365 = Ti.UI.createView({
        id: "__alloyId19365"
    });
    $.__views.__alloyId19364.add($.__views.__alloyId19365);
    $.__views.__alloyId19366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19366"
    });
    $.__views.__alloyId19365.add($.__views.__alloyId19366);
    $.__views.__alloyId19367 = Ti.UI.createView({
        id: "__alloyId19367"
    });
    $.__views.__alloyId19367 && $.addTopLevelView($.__views.__alloyId19367);
    $.__views.__alloyId19368 = Ti.UI.createView({
        id: "__alloyId19368"
    });
    $.__views.__alloyId19367.add($.__views.__alloyId19368);
    $.__views.__alloyId19369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19369"
    });
    $.__views.__alloyId19368.add($.__views.__alloyId19369);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;