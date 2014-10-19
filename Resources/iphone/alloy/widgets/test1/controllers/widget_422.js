function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_422";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_422 = Ti.UI.createView({
        id: "widget_422"
    });
    $.__views.widget_422 && $.addTopLevelView($.__views.widget_422);
    $.__views.__alloyId9386 = Ti.UI.createView({
        id: "__alloyId9386"
    });
    $.__views.widget_422.add($.__views.__alloyId9386);
    $.__views.__alloyId9387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9387"
    });
    $.__views.__alloyId9386.add($.__views.__alloyId9387);
    $.__views.__alloyId9388 = Ti.UI.createView({
        id: "__alloyId9388"
    });
    $.__views.__alloyId9388 && $.addTopLevelView($.__views.__alloyId9388);
    $.__views.__alloyId9389 = Ti.UI.createView({
        id: "__alloyId9389"
    });
    $.__views.__alloyId9388.add($.__views.__alloyId9389);
    $.__views.__alloyId9390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9390"
    });
    $.__views.__alloyId9389.add($.__views.__alloyId9390);
    $.__views.__alloyId9391 = Ti.UI.createView({
        id: "__alloyId9391"
    });
    $.__views.__alloyId9391 && $.addTopLevelView($.__views.__alloyId9391);
    $.__views.__alloyId9392 = Ti.UI.createView({
        id: "__alloyId9392"
    });
    $.__views.__alloyId9391.add($.__views.__alloyId9392);
    $.__views.__alloyId9393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9393"
    });
    $.__views.__alloyId9392.add($.__views.__alloyId9393);
    $.__views.__alloyId9394 = Ti.UI.createView({
        id: "__alloyId9394"
    });
    $.__views.__alloyId9394 && $.addTopLevelView($.__views.__alloyId9394);
    $.__views.__alloyId9395 = Ti.UI.createView({
        id: "__alloyId9395"
    });
    $.__views.__alloyId9394.add($.__views.__alloyId9395);
    $.__views.__alloyId9396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9396"
    });
    $.__views.__alloyId9395.add($.__views.__alloyId9396);
    $.__views.__alloyId9397 = Ti.UI.createView({
        id: "__alloyId9397"
    });
    $.__views.__alloyId9397 && $.addTopLevelView($.__views.__alloyId9397);
    $.__views.__alloyId9398 = Ti.UI.createView({
        id: "__alloyId9398"
    });
    $.__views.__alloyId9397.add($.__views.__alloyId9398);
    $.__views.__alloyId9399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9399"
    });
    $.__views.__alloyId9398.add($.__views.__alloyId9399);
    $.__views.__alloyId9400 = Ti.UI.createView({
        id: "__alloyId9400"
    });
    $.__views.__alloyId9400 && $.addTopLevelView($.__views.__alloyId9400);
    $.__views.__alloyId9401 = Ti.UI.createView({
        id: "__alloyId9401"
    });
    $.__views.__alloyId9400.add($.__views.__alloyId9401);
    $.__views.__alloyId9402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9402"
    });
    $.__views.__alloyId9401.add($.__views.__alloyId9402);
    $.__views.__alloyId9403 = Ti.UI.createView({
        id: "__alloyId9403"
    });
    $.__views.__alloyId9403 && $.addTopLevelView($.__views.__alloyId9403);
    $.__views.__alloyId9404 = Ti.UI.createView({
        id: "__alloyId9404"
    });
    $.__views.__alloyId9403.add($.__views.__alloyId9404);
    $.__views.__alloyId9405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9405"
    });
    $.__views.__alloyId9404.add($.__views.__alloyId9405);
    $.__views.__alloyId9406 = Ti.UI.createView({
        id: "__alloyId9406"
    });
    $.__views.__alloyId9406 && $.addTopLevelView($.__views.__alloyId9406);
    $.__views.__alloyId9407 = Ti.UI.createView({
        id: "__alloyId9407"
    });
    $.__views.__alloyId9406.add($.__views.__alloyId9407);
    $.__views.__alloyId9408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9408"
    });
    $.__views.__alloyId9407.add($.__views.__alloyId9408);
    $.__views.__alloyId9409 = Ti.UI.createView({
        id: "__alloyId9409"
    });
    $.__views.__alloyId9409 && $.addTopLevelView($.__views.__alloyId9409);
    $.__views.__alloyId9410 = Ti.UI.createView({
        id: "__alloyId9410"
    });
    $.__views.__alloyId9409.add($.__views.__alloyId9410);
    $.__views.__alloyId9411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9411"
    });
    $.__views.__alloyId9410.add($.__views.__alloyId9411);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;