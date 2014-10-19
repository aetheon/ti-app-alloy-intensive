function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_975";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_975 = Ti.UI.createView({
        id: "widget_975"
    });
    $.__views.widget_975 && $.addTopLevelView($.__views.widget_975);
    $.__views.__alloyId25324 = Ti.UI.createView({
        id: "__alloyId25324"
    });
    $.__views.widget_975.add($.__views.__alloyId25324);
    $.__views.__alloyId25325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25325"
    });
    $.__views.__alloyId25324.add($.__views.__alloyId25325);
    $.__views.__alloyId25326 = Ti.UI.createView({
        id: "__alloyId25326"
    });
    $.__views.__alloyId25326 && $.addTopLevelView($.__views.__alloyId25326);
    $.__views.__alloyId25327 = Ti.UI.createView({
        id: "__alloyId25327"
    });
    $.__views.__alloyId25326.add($.__views.__alloyId25327);
    $.__views.__alloyId25328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25328"
    });
    $.__views.__alloyId25327.add($.__views.__alloyId25328);
    $.__views.__alloyId25329 = Ti.UI.createView({
        id: "__alloyId25329"
    });
    $.__views.__alloyId25329 && $.addTopLevelView($.__views.__alloyId25329);
    $.__views.__alloyId25330 = Ti.UI.createView({
        id: "__alloyId25330"
    });
    $.__views.__alloyId25329.add($.__views.__alloyId25330);
    $.__views.__alloyId25331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25331"
    });
    $.__views.__alloyId25330.add($.__views.__alloyId25331);
    $.__views.__alloyId25332 = Ti.UI.createView({
        id: "__alloyId25332"
    });
    $.__views.__alloyId25332 && $.addTopLevelView($.__views.__alloyId25332);
    $.__views.__alloyId25333 = Ti.UI.createView({
        id: "__alloyId25333"
    });
    $.__views.__alloyId25332.add($.__views.__alloyId25333);
    $.__views.__alloyId25334 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25334"
    });
    $.__views.__alloyId25333.add($.__views.__alloyId25334);
    $.__views.__alloyId25335 = Ti.UI.createView({
        id: "__alloyId25335"
    });
    $.__views.__alloyId25335 && $.addTopLevelView($.__views.__alloyId25335);
    $.__views.__alloyId25336 = Ti.UI.createView({
        id: "__alloyId25336"
    });
    $.__views.__alloyId25335.add($.__views.__alloyId25336);
    $.__views.__alloyId25337 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25337"
    });
    $.__views.__alloyId25336.add($.__views.__alloyId25337);
    $.__views.__alloyId25338 = Ti.UI.createView({
        id: "__alloyId25338"
    });
    $.__views.__alloyId25338 && $.addTopLevelView($.__views.__alloyId25338);
    $.__views.__alloyId25339 = Ti.UI.createView({
        id: "__alloyId25339"
    });
    $.__views.__alloyId25338.add($.__views.__alloyId25339);
    $.__views.__alloyId25340 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25340"
    });
    $.__views.__alloyId25339.add($.__views.__alloyId25340);
    $.__views.__alloyId25341 = Ti.UI.createView({
        id: "__alloyId25341"
    });
    $.__views.__alloyId25341 && $.addTopLevelView($.__views.__alloyId25341);
    $.__views.__alloyId25342 = Ti.UI.createView({
        id: "__alloyId25342"
    });
    $.__views.__alloyId25341.add($.__views.__alloyId25342);
    $.__views.__alloyId25343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25343"
    });
    $.__views.__alloyId25342.add($.__views.__alloyId25343);
    $.__views.__alloyId25344 = Ti.UI.createView({
        id: "__alloyId25344"
    });
    $.__views.__alloyId25344 && $.addTopLevelView($.__views.__alloyId25344);
    $.__views.__alloyId25345 = Ti.UI.createView({
        id: "__alloyId25345"
    });
    $.__views.__alloyId25344.add($.__views.__alloyId25345);
    $.__views.__alloyId25346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25346"
    });
    $.__views.__alloyId25345.add($.__views.__alloyId25346);
    $.__views.__alloyId25347 = Ti.UI.createView({
        id: "__alloyId25347"
    });
    $.__views.__alloyId25347 && $.addTopLevelView($.__views.__alloyId25347);
    $.__views.__alloyId25348 = Ti.UI.createView({
        id: "__alloyId25348"
    });
    $.__views.__alloyId25347.add($.__views.__alloyId25348);
    $.__views.__alloyId25349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25349"
    });
    $.__views.__alloyId25348.add($.__views.__alloyId25349);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;