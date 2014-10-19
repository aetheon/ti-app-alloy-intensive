function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_905";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_905 = Ti.UI.createView({
        id: "widget_905"
    });
    $.__views.widget_905 && $.addTopLevelView($.__views.widget_905);
    $.__views.__alloyId23322 = Ti.UI.createView({
        id: "__alloyId23322"
    });
    $.__views.widget_905.add($.__views.__alloyId23322);
    $.__views.__alloyId23323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23323"
    });
    $.__views.__alloyId23322.add($.__views.__alloyId23323);
    $.__views.__alloyId23324 = Ti.UI.createView({
        id: "__alloyId23324"
    });
    $.__views.__alloyId23324 && $.addTopLevelView($.__views.__alloyId23324);
    $.__views.__alloyId23325 = Ti.UI.createView({
        id: "__alloyId23325"
    });
    $.__views.__alloyId23324.add($.__views.__alloyId23325);
    $.__views.__alloyId23326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23326"
    });
    $.__views.__alloyId23325.add($.__views.__alloyId23326);
    $.__views.__alloyId23327 = Ti.UI.createView({
        id: "__alloyId23327"
    });
    $.__views.__alloyId23327 && $.addTopLevelView($.__views.__alloyId23327);
    $.__views.__alloyId23328 = Ti.UI.createView({
        id: "__alloyId23328"
    });
    $.__views.__alloyId23327.add($.__views.__alloyId23328);
    $.__views.__alloyId23329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23329"
    });
    $.__views.__alloyId23328.add($.__views.__alloyId23329);
    $.__views.__alloyId23330 = Ti.UI.createView({
        id: "__alloyId23330"
    });
    $.__views.__alloyId23330 && $.addTopLevelView($.__views.__alloyId23330);
    $.__views.__alloyId23331 = Ti.UI.createView({
        id: "__alloyId23331"
    });
    $.__views.__alloyId23330.add($.__views.__alloyId23331);
    $.__views.__alloyId23332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23332"
    });
    $.__views.__alloyId23331.add($.__views.__alloyId23332);
    $.__views.__alloyId23333 = Ti.UI.createView({
        id: "__alloyId23333"
    });
    $.__views.__alloyId23333 && $.addTopLevelView($.__views.__alloyId23333);
    $.__views.__alloyId23334 = Ti.UI.createView({
        id: "__alloyId23334"
    });
    $.__views.__alloyId23333.add($.__views.__alloyId23334);
    $.__views.__alloyId23335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23335"
    });
    $.__views.__alloyId23334.add($.__views.__alloyId23335);
    $.__views.__alloyId23336 = Ti.UI.createView({
        id: "__alloyId23336"
    });
    $.__views.__alloyId23336 && $.addTopLevelView($.__views.__alloyId23336);
    $.__views.__alloyId23337 = Ti.UI.createView({
        id: "__alloyId23337"
    });
    $.__views.__alloyId23336.add($.__views.__alloyId23337);
    $.__views.__alloyId23338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23338"
    });
    $.__views.__alloyId23337.add($.__views.__alloyId23338);
    $.__views.__alloyId23339 = Ti.UI.createView({
        id: "__alloyId23339"
    });
    $.__views.__alloyId23339 && $.addTopLevelView($.__views.__alloyId23339);
    $.__views.__alloyId23340 = Ti.UI.createView({
        id: "__alloyId23340"
    });
    $.__views.__alloyId23339.add($.__views.__alloyId23340);
    $.__views.__alloyId23341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23341"
    });
    $.__views.__alloyId23340.add($.__views.__alloyId23341);
    $.__views.__alloyId23342 = Ti.UI.createView({
        id: "__alloyId23342"
    });
    $.__views.__alloyId23342 && $.addTopLevelView($.__views.__alloyId23342);
    $.__views.__alloyId23343 = Ti.UI.createView({
        id: "__alloyId23343"
    });
    $.__views.__alloyId23342.add($.__views.__alloyId23343);
    $.__views.__alloyId23344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23344"
    });
    $.__views.__alloyId23343.add($.__views.__alloyId23344);
    $.__views.__alloyId23345 = Ti.UI.createView({
        id: "__alloyId23345"
    });
    $.__views.__alloyId23345 && $.addTopLevelView($.__views.__alloyId23345);
    $.__views.__alloyId23346 = Ti.UI.createView({
        id: "__alloyId23346"
    });
    $.__views.__alloyId23345.add($.__views.__alloyId23346);
    $.__views.__alloyId23347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23347"
    });
    $.__views.__alloyId23346.add($.__views.__alloyId23347);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;