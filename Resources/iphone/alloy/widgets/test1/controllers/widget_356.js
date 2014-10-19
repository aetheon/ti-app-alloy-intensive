function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_356";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_356 = Ti.UI.createView({
        id: "widget_356"
    });
    $.__views.widget_356 && $.addTopLevelView($.__views.widget_356);
    $.__views.__alloyId7462 = Ti.UI.createView({
        id: "__alloyId7462"
    });
    $.__views.widget_356.add($.__views.__alloyId7462);
    $.__views.__alloyId7463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7463"
    });
    $.__views.__alloyId7462.add($.__views.__alloyId7463);
    $.__views.__alloyId7464 = Ti.UI.createView({
        id: "__alloyId7464"
    });
    $.__views.__alloyId7464 && $.addTopLevelView($.__views.__alloyId7464);
    $.__views.__alloyId7465 = Ti.UI.createView({
        id: "__alloyId7465"
    });
    $.__views.__alloyId7464.add($.__views.__alloyId7465);
    $.__views.__alloyId7466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7466"
    });
    $.__views.__alloyId7465.add($.__views.__alloyId7466);
    $.__views.__alloyId7467 = Ti.UI.createView({
        id: "__alloyId7467"
    });
    $.__views.__alloyId7467 && $.addTopLevelView($.__views.__alloyId7467);
    $.__views.__alloyId7468 = Ti.UI.createView({
        id: "__alloyId7468"
    });
    $.__views.__alloyId7467.add($.__views.__alloyId7468);
    $.__views.__alloyId7469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7469"
    });
    $.__views.__alloyId7468.add($.__views.__alloyId7469);
    $.__views.__alloyId7470 = Ti.UI.createView({
        id: "__alloyId7470"
    });
    $.__views.__alloyId7470 && $.addTopLevelView($.__views.__alloyId7470);
    $.__views.__alloyId7471 = Ti.UI.createView({
        id: "__alloyId7471"
    });
    $.__views.__alloyId7470.add($.__views.__alloyId7471);
    $.__views.__alloyId7472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7472"
    });
    $.__views.__alloyId7471.add($.__views.__alloyId7472);
    $.__views.__alloyId7473 = Ti.UI.createView({
        id: "__alloyId7473"
    });
    $.__views.__alloyId7473 && $.addTopLevelView($.__views.__alloyId7473);
    $.__views.__alloyId7474 = Ti.UI.createView({
        id: "__alloyId7474"
    });
    $.__views.__alloyId7473.add($.__views.__alloyId7474);
    $.__views.__alloyId7475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7475"
    });
    $.__views.__alloyId7474.add($.__views.__alloyId7475);
    $.__views.__alloyId7476 = Ti.UI.createView({
        id: "__alloyId7476"
    });
    $.__views.__alloyId7476 && $.addTopLevelView($.__views.__alloyId7476);
    $.__views.__alloyId7477 = Ti.UI.createView({
        id: "__alloyId7477"
    });
    $.__views.__alloyId7476.add($.__views.__alloyId7477);
    $.__views.__alloyId7478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7478"
    });
    $.__views.__alloyId7477.add($.__views.__alloyId7478);
    $.__views.__alloyId7479 = Ti.UI.createView({
        id: "__alloyId7479"
    });
    $.__views.__alloyId7479 && $.addTopLevelView($.__views.__alloyId7479);
    $.__views.__alloyId7480 = Ti.UI.createView({
        id: "__alloyId7480"
    });
    $.__views.__alloyId7479.add($.__views.__alloyId7480);
    $.__views.__alloyId7481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7481"
    });
    $.__views.__alloyId7480.add($.__views.__alloyId7481);
    $.__views.__alloyId7482 = Ti.UI.createView({
        id: "__alloyId7482"
    });
    $.__views.__alloyId7482 && $.addTopLevelView($.__views.__alloyId7482);
    $.__views.__alloyId7483 = Ti.UI.createView({
        id: "__alloyId7483"
    });
    $.__views.__alloyId7482.add($.__views.__alloyId7483);
    $.__views.__alloyId7484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7484"
    });
    $.__views.__alloyId7483.add($.__views.__alloyId7484);
    $.__views.__alloyId7485 = Ti.UI.createView({
        id: "__alloyId7485"
    });
    $.__views.__alloyId7485 && $.addTopLevelView($.__views.__alloyId7485);
    $.__views.__alloyId7486 = Ti.UI.createView({
        id: "__alloyId7486"
    });
    $.__views.__alloyId7485.add($.__views.__alloyId7486);
    $.__views.__alloyId7487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7487"
    });
    $.__views.__alloyId7486.add($.__views.__alloyId7487);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;