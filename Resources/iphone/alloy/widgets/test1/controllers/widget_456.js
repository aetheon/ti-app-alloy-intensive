function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_456";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_456 = Ti.UI.createView({
        id: "widget_456"
    });
    $.__views.widget_456 && $.addTopLevelView($.__views.widget_456);
    $.__views.__alloyId10348 = Ti.UI.createView({
        id: "__alloyId10348"
    });
    $.__views.widget_456.add($.__views.__alloyId10348);
    $.__views.__alloyId10349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10349"
    });
    $.__views.__alloyId10348.add($.__views.__alloyId10349);
    $.__views.__alloyId10350 = Ti.UI.createView({
        id: "__alloyId10350"
    });
    $.__views.__alloyId10350 && $.addTopLevelView($.__views.__alloyId10350);
    $.__views.__alloyId10351 = Ti.UI.createView({
        id: "__alloyId10351"
    });
    $.__views.__alloyId10350.add($.__views.__alloyId10351);
    $.__views.__alloyId10352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10352"
    });
    $.__views.__alloyId10351.add($.__views.__alloyId10352);
    $.__views.__alloyId10353 = Ti.UI.createView({
        id: "__alloyId10353"
    });
    $.__views.__alloyId10353 && $.addTopLevelView($.__views.__alloyId10353);
    $.__views.__alloyId10354 = Ti.UI.createView({
        id: "__alloyId10354"
    });
    $.__views.__alloyId10353.add($.__views.__alloyId10354);
    $.__views.__alloyId10355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10355"
    });
    $.__views.__alloyId10354.add($.__views.__alloyId10355);
    $.__views.__alloyId10356 = Ti.UI.createView({
        id: "__alloyId10356"
    });
    $.__views.__alloyId10356 && $.addTopLevelView($.__views.__alloyId10356);
    $.__views.__alloyId10357 = Ti.UI.createView({
        id: "__alloyId10357"
    });
    $.__views.__alloyId10356.add($.__views.__alloyId10357);
    $.__views.__alloyId10358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10358"
    });
    $.__views.__alloyId10357.add($.__views.__alloyId10358);
    $.__views.__alloyId10359 = Ti.UI.createView({
        id: "__alloyId10359"
    });
    $.__views.__alloyId10359 && $.addTopLevelView($.__views.__alloyId10359);
    $.__views.__alloyId10360 = Ti.UI.createView({
        id: "__alloyId10360"
    });
    $.__views.__alloyId10359.add($.__views.__alloyId10360);
    $.__views.__alloyId10361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10361"
    });
    $.__views.__alloyId10360.add($.__views.__alloyId10361);
    $.__views.__alloyId10362 = Ti.UI.createView({
        id: "__alloyId10362"
    });
    $.__views.__alloyId10362 && $.addTopLevelView($.__views.__alloyId10362);
    $.__views.__alloyId10363 = Ti.UI.createView({
        id: "__alloyId10363"
    });
    $.__views.__alloyId10362.add($.__views.__alloyId10363);
    $.__views.__alloyId10364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10364"
    });
    $.__views.__alloyId10363.add($.__views.__alloyId10364);
    $.__views.__alloyId10365 = Ti.UI.createView({
        id: "__alloyId10365"
    });
    $.__views.__alloyId10365 && $.addTopLevelView($.__views.__alloyId10365);
    $.__views.__alloyId10366 = Ti.UI.createView({
        id: "__alloyId10366"
    });
    $.__views.__alloyId10365.add($.__views.__alloyId10366);
    $.__views.__alloyId10367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10367"
    });
    $.__views.__alloyId10366.add($.__views.__alloyId10367);
    $.__views.__alloyId10368 = Ti.UI.createView({
        id: "__alloyId10368"
    });
    $.__views.__alloyId10368 && $.addTopLevelView($.__views.__alloyId10368);
    $.__views.__alloyId10369 = Ti.UI.createView({
        id: "__alloyId10369"
    });
    $.__views.__alloyId10368.add($.__views.__alloyId10369);
    $.__views.__alloyId10370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10370"
    });
    $.__views.__alloyId10369.add($.__views.__alloyId10370);
    $.__views.__alloyId10371 = Ti.UI.createView({
        id: "__alloyId10371"
    });
    $.__views.__alloyId10371 && $.addTopLevelView($.__views.__alloyId10371);
    $.__views.__alloyId10372 = Ti.UI.createView({
        id: "__alloyId10372"
    });
    $.__views.__alloyId10371.add($.__views.__alloyId10372);
    $.__views.__alloyId10373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10373"
    });
    $.__views.__alloyId10372.add($.__views.__alloyId10373);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;