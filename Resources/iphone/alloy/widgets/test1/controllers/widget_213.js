function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_213";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_213 = Ti.UI.createView({
        id: "widget_213"
    });
    $.__views.widget_213 && $.addTopLevelView($.__views.widget_213);
    $.__views.__alloyId3354 = Ti.UI.createView({
        id: "__alloyId3354"
    });
    $.__views.widget_213.add($.__views.__alloyId3354);
    $.__views.__alloyId3355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3355"
    });
    $.__views.__alloyId3354.add($.__views.__alloyId3355);
    $.__views.__alloyId3356 = Ti.UI.createView({
        id: "__alloyId3356"
    });
    $.__views.__alloyId3356 && $.addTopLevelView($.__views.__alloyId3356);
    $.__views.__alloyId3357 = Ti.UI.createView({
        id: "__alloyId3357"
    });
    $.__views.__alloyId3356.add($.__views.__alloyId3357);
    $.__views.__alloyId3358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3358"
    });
    $.__views.__alloyId3357.add($.__views.__alloyId3358);
    $.__views.__alloyId3359 = Ti.UI.createView({
        id: "__alloyId3359"
    });
    $.__views.__alloyId3359 && $.addTopLevelView($.__views.__alloyId3359);
    $.__views.__alloyId3360 = Ti.UI.createView({
        id: "__alloyId3360"
    });
    $.__views.__alloyId3359.add($.__views.__alloyId3360);
    $.__views.__alloyId3361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3361"
    });
    $.__views.__alloyId3360.add($.__views.__alloyId3361);
    $.__views.__alloyId3362 = Ti.UI.createView({
        id: "__alloyId3362"
    });
    $.__views.__alloyId3362 && $.addTopLevelView($.__views.__alloyId3362);
    $.__views.__alloyId3363 = Ti.UI.createView({
        id: "__alloyId3363"
    });
    $.__views.__alloyId3362.add($.__views.__alloyId3363);
    $.__views.__alloyId3364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3364"
    });
    $.__views.__alloyId3363.add($.__views.__alloyId3364);
    $.__views.__alloyId3365 = Ti.UI.createView({
        id: "__alloyId3365"
    });
    $.__views.__alloyId3365 && $.addTopLevelView($.__views.__alloyId3365);
    $.__views.__alloyId3366 = Ti.UI.createView({
        id: "__alloyId3366"
    });
    $.__views.__alloyId3365.add($.__views.__alloyId3366);
    $.__views.__alloyId3367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3367"
    });
    $.__views.__alloyId3366.add($.__views.__alloyId3367);
    $.__views.__alloyId3368 = Ti.UI.createView({
        id: "__alloyId3368"
    });
    $.__views.__alloyId3368 && $.addTopLevelView($.__views.__alloyId3368);
    $.__views.__alloyId3369 = Ti.UI.createView({
        id: "__alloyId3369"
    });
    $.__views.__alloyId3368.add($.__views.__alloyId3369);
    $.__views.__alloyId3370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3370"
    });
    $.__views.__alloyId3369.add($.__views.__alloyId3370);
    $.__views.__alloyId3371 = Ti.UI.createView({
        id: "__alloyId3371"
    });
    $.__views.__alloyId3371 && $.addTopLevelView($.__views.__alloyId3371);
    $.__views.__alloyId3372 = Ti.UI.createView({
        id: "__alloyId3372"
    });
    $.__views.__alloyId3371.add($.__views.__alloyId3372);
    $.__views.__alloyId3373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3373"
    });
    $.__views.__alloyId3372.add($.__views.__alloyId3373);
    $.__views.__alloyId3374 = Ti.UI.createView({
        id: "__alloyId3374"
    });
    $.__views.__alloyId3374 && $.addTopLevelView($.__views.__alloyId3374);
    $.__views.__alloyId3375 = Ti.UI.createView({
        id: "__alloyId3375"
    });
    $.__views.__alloyId3374.add($.__views.__alloyId3375);
    $.__views.__alloyId3376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3376"
    });
    $.__views.__alloyId3375.add($.__views.__alloyId3376);
    $.__views.__alloyId3377 = Ti.UI.createView({
        id: "__alloyId3377"
    });
    $.__views.__alloyId3377 && $.addTopLevelView($.__views.__alloyId3377);
    $.__views.__alloyId3378 = Ti.UI.createView({
        id: "__alloyId3378"
    });
    $.__views.__alloyId3377.add($.__views.__alloyId3378);
    $.__views.__alloyId3379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3379"
    });
    $.__views.__alloyId3378.add($.__views.__alloyId3379);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;