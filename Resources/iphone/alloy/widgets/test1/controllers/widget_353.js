function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_353";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_353 = Ti.UI.createView({
        id: "widget_353"
    });
    $.__views.widget_353 && $.addTopLevelView($.__views.widget_353);
    $.__views.__alloyId7384 = Ti.UI.createView({
        id: "__alloyId7384"
    });
    $.__views.widget_353.add($.__views.__alloyId7384);
    $.__views.__alloyId7385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7385"
    });
    $.__views.__alloyId7384.add($.__views.__alloyId7385);
    $.__views.__alloyId7386 = Ti.UI.createView({
        id: "__alloyId7386"
    });
    $.__views.__alloyId7386 && $.addTopLevelView($.__views.__alloyId7386);
    $.__views.__alloyId7387 = Ti.UI.createView({
        id: "__alloyId7387"
    });
    $.__views.__alloyId7386.add($.__views.__alloyId7387);
    $.__views.__alloyId7388 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7388"
    });
    $.__views.__alloyId7387.add($.__views.__alloyId7388);
    $.__views.__alloyId7389 = Ti.UI.createView({
        id: "__alloyId7389"
    });
    $.__views.__alloyId7389 && $.addTopLevelView($.__views.__alloyId7389);
    $.__views.__alloyId7390 = Ti.UI.createView({
        id: "__alloyId7390"
    });
    $.__views.__alloyId7389.add($.__views.__alloyId7390);
    $.__views.__alloyId7391 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7391"
    });
    $.__views.__alloyId7390.add($.__views.__alloyId7391);
    $.__views.__alloyId7392 = Ti.UI.createView({
        id: "__alloyId7392"
    });
    $.__views.__alloyId7392 && $.addTopLevelView($.__views.__alloyId7392);
    $.__views.__alloyId7393 = Ti.UI.createView({
        id: "__alloyId7393"
    });
    $.__views.__alloyId7392.add($.__views.__alloyId7393);
    $.__views.__alloyId7394 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7394"
    });
    $.__views.__alloyId7393.add($.__views.__alloyId7394);
    $.__views.__alloyId7395 = Ti.UI.createView({
        id: "__alloyId7395"
    });
    $.__views.__alloyId7395 && $.addTopLevelView($.__views.__alloyId7395);
    $.__views.__alloyId7396 = Ti.UI.createView({
        id: "__alloyId7396"
    });
    $.__views.__alloyId7395.add($.__views.__alloyId7396);
    $.__views.__alloyId7397 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7397"
    });
    $.__views.__alloyId7396.add($.__views.__alloyId7397);
    $.__views.__alloyId7398 = Ti.UI.createView({
        id: "__alloyId7398"
    });
    $.__views.__alloyId7398 && $.addTopLevelView($.__views.__alloyId7398);
    $.__views.__alloyId7399 = Ti.UI.createView({
        id: "__alloyId7399"
    });
    $.__views.__alloyId7398.add($.__views.__alloyId7399);
    $.__views.__alloyId7400 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7400"
    });
    $.__views.__alloyId7399.add($.__views.__alloyId7400);
    $.__views.__alloyId7401 = Ti.UI.createView({
        id: "__alloyId7401"
    });
    $.__views.__alloyId7401 && $.addTopLevelView($.__views.__alloyId7401);
    $.__views.__alloyId7402 = Ti.UI.createView({
        id: "__alloyId7402"
    });
    $.__views.__alloyId7401.add($.__views.__alloyId7402);
    $.__views.__alloyId7403 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7403"
    });
    $.__views.__alloyId7402.add($.__views.__alloyId7403);
    $.__views.__alloyId7404 = Ti.UI.createView({
        id: "__alloyId7404"
    });
    $.__views.__alloyId7404 && $.addTopLevelView($.__views.__alloyId7404);
    $.__views.__alloyId7405 = Ti.UI.createView({
        id: "__alloyId7405"
    });
    $.__views.__alloyId7404.add($.__views.__alloyId7405);
    $.__views.__alloyId7406 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7406"
    });
    $.__views.__alloyId7405.add($.__views.__alloyId7406);
    $.__views.__alloyId7407 = Ti.UI.createView({
        id: "__alloyId7407"
    });
    $.__views.__alloyId7407 && $.addTopLevelView($.__views.__alloyId7407);
    $.__views.__alloyId7408 = Ti.UI.createView({
        id: "__alloyId7408"
    });
    $.__views.__alloyId7407.add($.__views.__alloyId7408);
    $.__views.__alloyId7409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7409"
    });
    $.__views.__alloyId7408.add($.__views.__alloyId7409);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;