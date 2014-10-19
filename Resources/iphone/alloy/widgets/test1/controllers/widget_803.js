function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_803";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_803 = Ti.UI.createView({
        id: "widget_803"
    });
    $.__views.widget_803 && $.addTopLevelView($.__views.widget_803);
    $.__views.__alloyId20384 = Ti.UI.createView({
        id: "__alloyId20384"
    });
    $.__views.widget_803.add($.__views.__alloyId20384);
    $.__views.__alloyId20385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20385"
    });
    $.__views.__alloyId20384.add($.__views.__alloyId20385);
    $.__views.__alloyId20386 = Ti.UI.createView({
        id: "__alloyId20386"
    });
    $.__views.__alloyId20386 && $.addTopLevelView($.__views.__alloyId20386);
    $.__views.__alloyId20387 = Ti.UI.createView({
        id: "__alloyId20387"
    });
    $.__views.__alloyId20386.add($.__views.__alloyId20387);
    $.__views.__alloyId20388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20388"
    });
    $.__views.__alloyId20387.add($.__views.__alloyId20388);
    $.__views.__alloyId20389 = Ti.UI.createView({
        id: "__alloyId20389"
    });
    $.__views.__alloyId20389 && $.addTopLevelView($.__views.__alloyId20389);
    $.__views.__alloyId20390 = Ti.UI.createView({
        id: "__alloyId20390"
    });
    $.__views.__alloyId20389.add($.__views.__alloyId20390);
    $.__views.__alloyId20391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20391"
    });
    $.__views.__alloyId20390.add($.__views.__alloyId20391);
    $.__views.__alloyId20392 = Ti.UI.createView({
        id: "__alloyId20392"
    });
    $.__views.__alloyId20392 && $.addTopLevelView($.__views.__alloyId20392);
    $.__views.__alloyId20393 = Ti.UI.createView({
        id: "__alloyId20393"
    });
    $.__views.__alloyId20392.add($.__views.__alloyId20393);
    $.__views.__alloyId20394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20394"
    });
    $.__views.__alloyId20393.add($.__views.__alloyId20394);
    $.__views.__alloyId20395 = Ti.UI.createView({
        id: "__alloyId20395"
    });
    $.__views.__alloyId20395 && $.addTopLevelView($.__views.__alloyId20395);
    $.__views.__alloyId20396 = Ti.UI.createView({
        id: "__alloyId20396"
    });
    $.__views.__alloyId20395.add($.__views.__alloyId20396);
    $.__views.__alloyId20397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20397"
    });
    $.__views.__alloyId20396.add($.__views.__alloyId20397);
    $.__views.__alloyId20398 = Ti.UI.createView({
        id: "__alloyId20398"
    });
    $.__views.__alloyId20398 && $.addTopLevelView($.__views.__alloyId20398);
    $.__views.__alloyId20399 = Ti.UI.createView({
        id: "__alloyId20399"
    });
    $.__views.__alloyId20398.add($.__views.__alloyId20399);
    $.__views.__alloyId20400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20400"
    });
    $.__views.__alloyId20399.add($.__views.__alloyId20400);
    $.__views.__alloyId20401 = Ti.UI.createView({
        id: "__alloyId20401"
    });
    $.__views.__alloyId20401 && $.addTopLevelView($.__views.__alloyId20401);
    $.__views.__alloyId20402 = Ti.UI.createView({
        id: "__alloyId20402"
    });
    $.__views.__alloyId20401.add($.__views.__alloyId20402);
    $.__views.__alloyId20403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20403"
    });
    $.__views.__alloyId20402.add($.__views.__alloyId20403);
    $.__views.__alloyId20404 = Ti.UI.createView({
        id: "__alloyId20404"
    });
    $.__views.__alloyId20404 && $.addTopLevelView($.__views.__alloyId20404);
    $.__views.__alloyId20405 = Ti.UI.createView({
        id: "__alloyId20405"
    });
    $.__views.__alloyId20404.add($.__views.__alloyId20405);
    $.__views.__alloyId20406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20406"
    });
    $.__views.__alloyId20405.add($.__views.__alloyId20406);
    $.__views.__alloyId20407 = Ti.UI.createView({
        id: "__alloyId20407"
    });
    $.__views.__alloyId20407 && $.addTopLevelView($.__views.__alloyId20407);
    $.__views.__alloyId20408 = Ti.UI.createView({
        id: "__alloyId20408"
    });
    $.__views.__alloyId20407.add($.__views.__alloyId20408);
    $.__views.__alloyId20409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20409"
    });
    $.__views.__alloyId20408.add($.__views.__alloyId20409);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;