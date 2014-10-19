function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_906";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_906 = Ti.UI.createView({
        id: "widget_906"
    });
    $.__views.widget_906 && $.addTopLevelView($.__views.widget_906);
    $.__views.__alloyId23348 = Ti.UI.createView({
        id: "__alloyId23348"
    });
    $.__views.widget_906.add($.__views.__alloyId23348);
    $.__views.__alloyId23349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23349"
    });
    $.__views.__alloyId23348.add($.__views.__alloyId23349);
    $.__views.__alloyId23350 = Ti.UI.createView({
        id: "__alloyId23350"
    });
    $.__views.__alloyId23350 && $.addTopLevelView($.__views.__alloyId23350);
    $.__views.__alloyId23351 = Ti.UI.createView({
        id: "__alloyId23351"
    });
    $.__views.__alloyId23350.add($.__views.__alloyId23351);
    $.__views.__alloyId23352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23352"
    });
    $.__views.__alloyId23351.add($.__views.__alloyId23352);
    $.__views.__alloyId23353 = Ti.UI.createView({
        id: "__alloyId23353"
    });
    $.__views.__alloyId23353 && $.addTopLevelView($.__views.__alloyId23353);
    $.__views.__alloyId23354 = Ti.UI.createView({
        id: "__alloyId23354"
    });
    $.__views.__alloyId23353.add($.__views.__alloyId23354);
    $.__views.__alloyId23355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23355"
    });
    $.__views.__alloyId23354.add($.__views.__alloyId23355);
    $.__views.__alloyId23356 = Ti.UI.createView({
        id: "__alloyId23356"
    });
    $.__views.__alloyId23356 && $.addTopLevelView($.__views.__alloyId23356);
    $.__views.__alloyId23357 = Ti.UI.createView({
        id: "__alloyId23357"
    });
    $.__views.__alloyId23356.add($.__views.__alloyId23357);
    $.__views.__alloyId23358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23358"
    });
    $.__views.__alloyId23357.add($.__views.__alloyId23358);
    $.__views.__alloyId23359 = Ti.UI.createView({
        id: "__alloyId23359"
    });
    $.__views.__alloyId23359 && $.addTopLevelView($.__views.__alloyId23359);
    $.__views.__alloyId23360 = Ti.UI.createView({
        id: "__alloyId23360"
    });
    $.__views.__alloyId23359.add($.__views.__alloyId23360);
    $.__views.__alloyId23361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23361"
    });
    $.__views.__alloyId23360.add($.__views.__alloyId23361);
    $.__views.__alloyId23362 = Ti.UI.createView({
        id: "__alloyId23362"
    });
    $.__views.__alloyId23362 && $.addTopLevelView($.__views.__alloyId23362);
    $.__views.__alloyId23363 = Ti.UI.createView({
        id: "__alloyId23363"
    });
    $.__views.__alloyId23362.add($.__views.__alloyId23363);
    $.__views.__alloyId23364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23364"
    });
    $.__views.__alloyId23363.add($.__views.__alloyId23364);
    $.__views.__alloyId23365 = Ti.UI.createView({
        id: "__alloyId23365"
    });
    $.__views.__alloyId23365 && $.addTopLevelView($.__views.__alloyId23365);
    $.__views.__alloyId23366 = Ti.UI.createView({
        id: "__alloyId23366"
    });
    $.__views.__alloyId23365.add($.__views.__alloyId23366);
    $.__views.__alloyId23367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23367"
    });
    $.__views.__alloyId23366.add($.__views.__alloyId23367);
    $.__views.__alloyId23368 = Ti.UI.createView({
        id: "__alloyId23368"
    });
    $.__views.__alloyId23368 && $.addTopLevelView($.__views.__alloyId23368);
    $.__views.__alloyId23369 = Ti.UI.createView({
        id: "__alloyId23369"
    });
    $.__views.__alloyId23368.add($.__views.__alloyId23369);
    $.__views.__alloyId23370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23370"
    });
    $.__views.__alloyId23369.add($.__views.__alloyId23370);
    $.__views.__alloyId23371 = Ti.UI.createView({
        id: "__alloyId23371"
    });
    $.__views.__alloyId23371 && $.addTopLevelView($.__views.__alloyId23371);
    $.__views.__alloyId23372 = Ti.UI.createView({
        id: "__alloyId23372"
    });
    $.__views.__alloyId23371.add($.__views.__alloyId23372);
    $.__views.__alloyId23373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23373"
    });
    $.__views.__alloyId23372.add($.__views.__alloyId23373);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;