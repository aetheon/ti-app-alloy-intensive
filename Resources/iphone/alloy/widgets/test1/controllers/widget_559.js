function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_559";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_559 = Ti.UI.createView({
        id: "widget_559"
    });
    $.__views.widget_559 && $.addTopLevelView($.__views.widget_559);
    $.__views.__alloyId13312 = Ti.UI.createView({
        id: "__alloyId13312"
    });
    $.__views.widget_559.add($.__views.__alloyId13312);
    $.__views.__alloyId13313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13313"
    });
    $.__views.__alloyId13312.add($.__views.__alloyId13313);
    $.__views.__alloyId13314 = Ti.UI.createView({
        id: "__alloyId13314"
    });
    $.__views.__alloyId13314 && $.addTopLevelView($.__views.__alloyId13314);
    $.__views.__alloyId13315 = Ti.UI.createView({
        id: "__alloyId13315"
    });
    $.__views.__alloyId13314.add($.__views.__alloyId13315);
    $.__views.__alloyId13316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13316"
    });
    $.__views.__alloyId13315.add($.__views.__alloyId13316);
    $.__views.__alloyId13317 = Ti.UI.createView({
        id: "__alloyId13317"
    });
    $.__views.__alloyId13317 && $.addTopLevelView($.__views.__alloyId13317);
    $.__views.__alloyId13318 = Ti.UI.createView({
        id: "__alloyId13318"
    });
    $.__views.__alloyId13317.add($.__views.__alloyId13318);
    $.__views.__alloyId13319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13319"
    });
    $.__views.__alloyId13318.add($.__views.__alloyId13319);
    $.__views.__alloyId13320 = Ti.UI.createView({
        id: "__alloyId13320"
    });
    $.__views.__alloyId13320 && $.addTopLevelView($.__views.__alloyId13320);
    $.__views.__alloyId13321 = Ti.UI.createView({
        id: "__alloyId13321"
    });
    $.__views.__alloyId13320.add($.__views.__alloyId13321);
    $.__views.__alloyId13322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13322"
    });
    $.__views.__alloyId13321.add($.__views.__alloyId13322);
    $.__views.__alloyId13323 = Ti.UI.createView({
        id: "__alloyId13323"
    });
    $.__views.__alloyId13323 && $.addTopLevelView($.__views.__alloyId13323);
    $.__views.__alloyId13324 = Ti.UI.createView({
        id: "__alloyId13324"
    });
    $.__views.__alloyId13323.add($.__views.__alloyId13324);
    $.__views.__alloyId13325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13325"
    });
    $.__views.__alloyId13324.add($.__views.__alloyId13325);
    $.__views.__alloyId13326 = Ti.UI.createView({
        id: "__alloyId13326"
    });
    $.__views.__alloyId13326 && $.addTopLevelView($.__views.__alloyId13326);
    $.__views.__alloyId13327 = Ti.UI.createView({
        id: "__alloyId13327"
    });
    $.__views.__alloyId13326.add($.__views.__alloyId13327);
    $.__views.__alloyId13328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13328"
    });
    $.__views.__alloyId13327.add($.__views.__alloyId13328);
    $.__views.__alloyId13329 = Ti.UI.createView({
        id: "__alloyId13329"
    });
    $.__views.__alloyId13329 && $.addTopLevelView($.__views.__alloyId13329);
    $.__views.__alloyId13330 = Ti.UI.createView({
        id: "__alloyId13330"
    });
    $.__views.__alloyId13329.add($.__views.__alloyId13330);
    $.__views.__alloyId13331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13331"
    });
    $.__views.__alloyId13330.add($.__views.__alloyId13331);
    $.__views.__alloyId13332 = Ti.UI.createView({
        id: "__alloyId13332"
    });
    $.__views.__alloyId13332 && $.addTopLevelView($.__views.__alloyId13332);
    $.__views.__alloyId13333 = Ti.UI.createView({
        id: "__alloyId13333"
    });
    $.__views.__alloyId13332.add($.__views.__alloyId13333);
    $.__views.__alloyId13334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13334"
    });
    $.__views.__alloyId13333.add($.__views.__alloyId13334);
    $.__views.__alloyId13335 = Ti.UI.createView({
        id: "__alloyId13335"
    });
    $.__views.__alloyId13335 && $.addTopLevelView($.__views.__alloyId13335);
    $.__views.__alloyId13336 = Ti.UI.createView({
        id: "__alloyId13336"
    });
    $.__views.__alloyId13335.add($.__views.__alloyId13336);
    $.__views.__alloyId13337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13337"
    });
    $.__views.__alloyId13336.add($.__views.__alloyId13337);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;