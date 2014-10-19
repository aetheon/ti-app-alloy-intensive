function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_907";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_907 = Ti.UI.createView({
        id: "widget_907"
    });
    $.__views.widget_907 && $.addTopLevelView($.__views.widget_907);
    $.__views.__alloyId23374 = Ti.UI.createView({
        id: "__alloyId23374"
    });
    $.__views.widget_907.add($.__views.__alloyId23374);
    $.__views.__alloyId23375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23375"
    });
    $.__views.__alloyId23374.add($.__views.__alloyId23375);
    $.__views.__alloyId23376 = Ti.UI.createView({
        id: "__alloyId23376"
    });
    $.__views.__alloyId23376 && $.addTopLevelView($.__views.__alloyId23376);
    $.__views.__alloyId23377 = Ti.UI.createView({
        id: "__alloyId23377"
    });
    $.__views.__alloyId23376.add($.__views.__alloyId23377);
    $.__views.__alloyId23378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23378"
    });
    $.__views.__alloyId23377.add($.__views.__alloyId23378);
    $.__views.__alloyId23379 = Ti.UI.createView({
        id: "__alloyId23379"
    });
    $.__views.__alloyId23379 && $.addTopLevelView($.__views.__alloyId23379);
    $.__views.__alloyId23380 = Ti.UI.createView({
        id: "__alloyId23380"
    });
    $.__views.__alloyId23379.add($.__views.__alloyId23380);
    $.__views.__alloyId23381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23381"
    });
    $.__views.__alloyId23380.add($.__views.__alloyId23381);
    $.__views.__alloyId23382 = Ti.UI.createView({
        id: "__alloyId23382"
    });
    $.__views.__alloyId23382 && $.addTopLevelView($.__views.__alloyId23382);
    $.__views.__alloyId23383 = Ti.UI.createView({
        id: "__alloyId23383"
    });
    $.__views.__alloyId23382.add($.__views.__alloyId23383);
    $.__views.__alloyId23384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23384"
    });
    $.__views.__alloyId23383.add($.__views.__alloyId23384);
    $.__views.__alloyId23385 = Ti.UI.createView({
        id: "__alloyId23385"
    });
    $.__views.__alloyId23385 && $.addTopLevelView($.__views.__alloyId23385);
    $.__views.__alloyId23386 = Ti.UI.createView({
        id: "__alloyId23386"
    });
    $.__views.__alloyId23385.add($.__views.__alloyId23386);
    $.__views.__alloyId23387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23387"
    });
    $.__views.__alloyId23386.add($.__views.__alloyId23387);
    $.__views.__alloyId23388 = Ti.UI.createView({
        id: "__alloyId23388"
    });
    $.__views.__alloyId23388 && $.addTopLevelView($.__views.__alloyId23388);
    $.__views.__alloyId23389 = Ti.UI.createView({
        id: "__alloyId23389"
    });
    $.__views.__alloyId23388.add($.__views.__alloyId23389);
    $.__views.__alloyId23390 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23390"
    });
    $.__views.__alloyId23389.add($.__views.__alloyId23390);
    $.__views.__alloyId23391 = Ti.UI.createView({
        id: "__alloyId23391"
    });
    $.__views.__alloyId23391 && $.addTopLevelView($.__views.__alloyId23391);
    $.__views.__alloyId23392 = Ti.UI.createView({
        id: "__alloyId23392"
    });
    $.__views.__alloyId23391.add($.__views.__alloyId23392);
    $.__views.__alloyId23393 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23393"
    });
    $.__views.__alloyId23392.add($.__views.__alloyId23393);
    $.__views.__alloyId23394 = Ti.UI.createView({
        id: "__alloyId23394"
    });
    $.__views.__alloyId23394 && $.addTopLevelView($.__views.__alloyId23394);
    $.__views.__alloyId23395 = Ti.UI.createView({
        id: "__alloyId23395"
    });
    $.__views.__alloyId23394.add($.__views.__alloyId23395);
    $.__views.__alloyId23396 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23396"
    });
    $.__views.__alloyId23395.add($.__views.__alloyId23396);
    $.__views.__alloyId23397 = Ti.UI.createView({
        id: "__alloyId23397"
    });
    $.__views.__alloyId23397 && $.addTopLevelView($.__views.__alloyId23397);
    $.__views.__alloyId23398 = Ti.UI.createView({
        id: "__alloyId23398"
    });
    $.__views.__alloyId23397.add($.__views.__alloyId23398);
    $.__views.__alloyId23399 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23399"
    });
    $.__views.__alloyId23398.add($.__views.__alloyId23399);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;