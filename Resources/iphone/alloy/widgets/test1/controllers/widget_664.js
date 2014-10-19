function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_664";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_664 = Ti.UI.createView({
        id: "widget_664"
    });
    $.__views.widget_664 && $.addTopLevelView($.__views.widget_664);
    $.__views.__alloyId16354 = Ti.UI.createView({
        id: "__alloyId16354"
    });
    $.__views.widget_664.add($.__views.__alloyId16354);
    $.__views.__alloyId16355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16355"
    });
    $.__views.__alloyId16354.add($.__views.__alloyId16355);
    $.__views.__alloyId16356 = Ti.UI.createView({
        id: "__alloyId16356"
    });
    $.__views.__alloyId16356 && $.addTopLevelView($.__views.__alloyId16356);
    $.__views.__alloyId16357 = Ti.UI.createView({
        id: "__alloyId16357"
    });
    $.__views.__alloyId16356.add($.__views.__alloyId16357);
    $.__views.__alloyId16358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16358"
    });
    $.__views.__alloyId16357.add($.__views.__alloyId16358);
    $.__views.__alloyId16359 = Ti.UI.createView({
        id: "__alloyId16359"
    });
    $.__views.__alloyId16359 && $.addTopLevelView($.__views.__alloyId16359);
    $.__views.__alloyId16360 = Ti.UI.createView({
        id: "__alloyId16360"
    });
    $.__views.__alloyId16359.add($.__views.__alloyId16360);
    $.__views.__alloyId16361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16361"
    });
    $.__views.__alloyId16360.add($.__views.__alloyId16361);
    $.__views.__alloyId16362 = Ti.UI.createView({
        id: "__alloyId16362"
    });
    $.__views.__alloyId16362 && $.addTopLevelView($.__views.__alloyId16362);
    $.__views.__alloyId16363 = Ti.UI.createView({
        id: "__alloyId16363"
    });
    $.__views.__alloyId16362.add($.__views.__alloyId16363);
    $.__views.__alloyId16364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16364"
    });
    $.__views.__alloyId16363.add($.__views.__alloyId16364);
    $.__views.__alloyId16365 = Ti.UI.createView({
        id: "__alloyId16365"
    });
    $.__views.__alloyId16365 && $.addTopLevelView($.__views.__alloyId16365);
    $.__views.__alloyId16366 = Ti.UI.createView({
        id: "__alloyId16366"
    });
    $.__views.__alloyId16365.add($.__views.__alloyId16366);
    $.__views.__alloyId16367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16367"
    });
    $.__views.__alloyId16366.add($.__views.__alloyId16367);
    $.__views.__alloyId16368 = Ti.UI.createView({
        id: "__alloyId16368"
    });
    $.__views.__alloyId16368 && $.addTopLevelView($.__views.__alloyId16368);
    $.__views.__alloyId16369 = Ti.UI.createView({
        id: "__alloyId16369"
    });
    $.__views.__alloyId16368.add($.__views.__alloyId16369);
    $.__views.__alloyId16370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16370"
    });
    $.__views.__alloyId16369.add($.__views.__alloyId16370);
    $.__views.__alloyId16371 = Ti.UI.createView({
        id: "__alloyId16371"
    });
    $.__views.__alloyId16371 && $.addTopLevelView($.__views.__alloyId16371);
    $.__views.__alloyId16372 = Ti.UI.createView({
        id: "__alloyId16372"
    });
    $.__views.__alloyId16371.add($.__views.__alloyId16372);
    $.__views.__alloyId16373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16373"
    });
    $.__views.__alloyId16372.add($.__views.__alloyId16373);
    $.__views.__alloyId16374 = Ti.UI.createView({
        id: "__alloyId16374"
    });
    $.__views.__alloyId16374 && $.addTopLevelView($.__views.__alloyId16374);
    $.__views.__alloyId16375 = Ti.UI.createView({
        id: "__alloyId16375"
    });
    $.__views.__alloyId16374.add($.__views.__alloyId16375);
    $.__views.__alloyId16376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16376"
    });
    $.__views.__alloyId16375.add($.__views.__alloyId16376);
    $.__views.__alloyId16377 = Ti.UI.createView({
        id: "__alloyId16377"
    });
    $.__views.__alloyId16377 && $.addTopLevelView($.__views.__alloyId16377);
    $.__views.__alloyId16378 = Ti.UI.createView({
        id: "__alloyId16378"
    });
    $.__views.__alloyId16377.add($.__views.__alloyId16378);
    $.__views.__alloyId16379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16379"
    });
    $.__views.__alloyId16378.add($.__views.__alloyId16379);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;