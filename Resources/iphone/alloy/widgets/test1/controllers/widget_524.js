function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_524";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_524 = Ti.UI.createView({
        id: "widget_524"
    });
    $.__views.widget_524 && $.addTopLevelView($.__views.widget_524);
    $.__views.__alloyId12324 = Ti.UI.createView({
        id: "__alloyId12324"
    });
    $.__views.widget_524.add($.__views.__alloyId12324);
    $.__views.__alloyId12325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12325"
    });
    $.__views.__alloyId12324.add($.__views.__alloyId12325);
    $.__views.__alloyId12326 = Ti.UI.createView({
        id: "__alloyId12326"
    });
    $.__views.__alloyId12326 && $.addTopLevelView($.__views.__alloyId12326);
    $.__views.__alloyId12327 = Ti.UI.createView({
        id: "__alloyId12327"
    });
    $.__views.__alloyId12326.add($.__views.__alloyId12327);
    $.__views.__alloyId12328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12328"
    });
    $.__views.__alloyId12327.add($.__views.__alloyId12328);
    $.__views.__alloyId12329 = Ti.UI.createView({
        id: "__alloyId12329"
    });
    $.__views.__alloyId12329 && $.addTopLevelView($.__views.__alloyId12329);
    $.__views.__alloyId12330 = Ti.UI.createView({
        id: "__alloyId12330"
    });
    $.__views.__alloyId12329.add($.__views.__alloyId12330);
    $.__views.__alloyId12331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12331"
    });
    $.__views.__alloyId12330.add($.__views.__alloyId12331);
    $.__views.__alloyId12332 = Ti.UI.createView({
        id: "__alloyId12332"
    });
    $.__views.__alloyId12332 && $.addTopLevelView($.__views.__alloyId12332);
    $.__views.__alloyId12333 = Ti.UI.createView({
        id: "__alloyId12333"
    });
    $.__views.__alloyId12332.add($.__views.__alloyId12333);
    $.__views.__alloyId12334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12334"
    });
    $.__views.__alloyId12333.add($.__views.__alloyId12334);
    $.__views.__alloyId12335 = Ti.UI.createView({
        id: "__alloyId12335"
    });
    $.__views.__alloyId12335 && $.addTopLevelView($.__views.__alloyId12335);
    $.__views.__alloyId12336 = Ti.UI.createView({
        id: "__alloyId12336"
    });
    $.__views.__alloyId12335.add($.__views.__alloyId12336);
    $.__views.__alloyId12337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12337"
    });
    $.__views.__alloyId12336.add($.__views.__alloyId12337);
    $.__views.__alloyId12338 = Ti.UI.createView({
        id: "__alloyId12338"
    });
    $.__views.__alloyId12338 && $.addTopLevelView($.__views.__alloyId12338);
    $.__views.__alloyId12339 = Ti.UI.createView({
        id: "__alloyId12339"
    });
    $.__views.__alloyId12338.add($.__views.__alloyId12339);
    $.__views.__alloyId12340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12340"
    });
    $.__views.__alloyId12339.add($.__views.__alloyId12340);
    $.__views.__alloyId12341 = Ti.UI.createView({
        id: "__alloyId12341"
    });
    $.__views.__alloyId12341 && $.addTopLevelView($.__views.__alloyId12341);
    $.__views.__alloyId12342 = Ti.UI.createView({
        id: "__alloyId12342"
    });
    $.__views.__alloyId12341.add($.__views.__alloyId12342);
    $.__views.__alloyId12343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12343"
    });
    $.__views.__alloyId12342.add($.__views.__alloyId12343);
    $.__views.__alloyId12344 = Ti.UI.createView({
        id: "__alloyId12344"
    });
    $.__views.__alloyId12344 && $.addTopLevelView($.__views.__alloyId12344);
    $.__views.__alloyId12345 = Ti.UI.createView({
        id: "__alloyId12345"
    });
    $.__views.__alloyId12344.add($.__views.__alloyId12345);
    $.__views.__alloyId12346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12346"
    });
    $.__views.__alloyId12345.add($.__views.__alloyId12346);
    $.__views.__alloyId12347 = Ti.UI.createView({
        id: "__alloyId12347"
    });
    $.__views.__alloyId12347 && $.addTopLevelView($.__views.__alloyId12347);
    $.__views.__alloyId12348 = Ti.UI.createView({
        id: "__alloyId12348"
    });
    $.__views.__alloyId12347.add($.__views.__alloyId12348);
    $.__views.__alloyId12349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12349"
    });
    $.__views.__alloyId12348.add($.__views.__alloyId12349);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;