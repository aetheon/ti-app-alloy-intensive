function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_873";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_873 = Ti.UI.createView({
        id: "widget_873"
    });
    $.__views.widget_873 && $.addTopLevelView($.__views.widget_873);
    $.__views.__alloyId22386 = Ti.UI.createView({
        id: "__alloyId22386"
    });
    $.__views.widget_873.add($.__views.__alloyId22386);
    $.__views.__alloyId22387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22387"
    });
    $.__views.__alloyId22386.add($.__views.__alloyId22387);
    $.__views.__alloyId22388 = Ti.UI.createView({
        id: "__alloyId22388"
    });
    $.__views.__alloyId22388 && $.addTopLevelView($.__views.__alloyId22388);
    $.__views.__alloyId22389 = Ti.UI.createView({
        id: "__alloyId22389"
    });
    $.__views.__alloyId22388.add($.__views.__alloyId22389);
    $.__views.__alloyId22390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22390"
    });
    $.__views.__alloyId22389.add($.__views.__alloyId22390);
    $.__views.__alloyId22391 = Ti.UI.createView({
        id: "__alloyId22391"
    });
    $.__views.__alloyId22391 && $.addTopLevelView($.__views.__alloyId22391);
    $.__views.__alloyId22392 = Ti.UI.createView({
        id: "__alloyId22392"
    });
    $.__views.__alloyId22391.add($.__views.__alloyId22392);
    $.__views.__alloyId22393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22393"
    });
    $.__views.__alloyId22392.add($.__views.__alloyId22393);
    $.__views.__alloyId22394 = Ti.UI.createView({
        id: "__alloyId22394"
    });
    $.__views.__alloyId22394 && $.addTopLevelView($.__views.__alloyId22394);
    $.__views.__alloyId22395 = Ti.UI.createView({
        id: "__alloyId22395"
    });
    $.__views.__alloyId22394.add($.__views.__alloyId22395);
    $.__views.__alloyId22396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22396"
    });
    $.__views.__alloyId22395.add($.__views.__alloyId22396);
    $.__views.__alloyId22397 = Ti.UI.createView({
        id: "__alloyId22397"
    });
    $.__views.__alloyId22397 && $.addTopLevelView($.__views.__alloyId22397);
    $.__views.__alloyId22398 = Ti.UI.createView({
        id: "__alloyId22398"
    });
    $.__views.__alloyId22397.add($.__views.__alloyId22398);
    $.__views.__alloyId22399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22399"
    });
    $.__views.__alloyId22398.add($.__views.__alloyId22399);
    $.__views.__alloyId22400 = Ti.UI.createView({
        id: "__alloyId22400"
    });
    $.__views.__alloyId22400 && $.addTopLevelView($.__views.__alloyId22400);
    $.__views.__alloyId22401 = Ti.UI.createView({
        id: "__alloyId22401"
    });
    $.__views.__alloyId22400.add($.__views.__alloyId22401);
    $.__views.__alloyId22402 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22402"
    });
    $.__views.__alloyId22401.add($.__views.__alloyId22402);
    $.__views.__alloyId22403 = Ti.UI.createView({
        id: "__alloyId22403"
    });
    $.__views.__alloyId22403 && $.addTopLevelView($.__views.__alloyId22403);
    $.__views.__alloyId22404 = Ti.UI.createView({
        id: "__alloyId22404"
    });
    $.__views.__alloyId22403.add($.__views.__alloyId22404);
    $.__views.__alloyId22405 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22405"
    });
    $.__views.__alloyId22404.add($.__views.__alloyId22405);
    $.__views.__alloyId22406 = Ti.UI.createView({
        id: "__alloyId22406"
    });
    $.__views.__alloyId22406 && $.addTopLevelView($.__views.__alloyId22406);
    $.__views.__alloyId22407 = Ti.UI.createView({
        id: "__alloyId22407"
    });
    $.__views.__alloyId22406.add($.__views.__alloyId22407);
    $.__views.__alloyId22408 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22408"
    });
    $.__views.__alloyId22407.add($.__views.__alloyId22408);
    $.__views.__alloyId22409 = Ti.UI.createView({
        id: "__alloyId22409"
    });
    $.__views.__alloyId22409 && $.addTopLevelView($.__views.__alloyId22409);
    $.__views.__alloyId22410 = Ti.UI.createView({
        id: "__alloyId22410"
    });
    $.__views.__alloyId22409.add($.__views.__alloyId22410);
    $.__views.__alloyId22411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22411"
    });
    $.__views.__alloyId22410.add($.__views.__alloyId22411);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;