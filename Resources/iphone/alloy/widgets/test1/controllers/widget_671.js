function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_671";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_671 = Ti.UI.createView({
        id: "widget_671"
    });
    $.__views.widget_671 && $.addTopLevelView($.__views.widget_671);
    $.__views.__alloyId16562 = Ti.UI.createView({
        id: "__alloyId16562"
    });
    $.__views.widget_671.add($.__views.__alloyId16562);
    $.__views.__alloyId16563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16563"
    });
    $.__views.__alloyId16562.add($.__views.__alloyId16563);
    $.__views.__alloyId16564 = Ti.UI.createView({
        id: "__alloyId16564"
    });
    $.__views.__alloyId16564 && $.addTopLevelView($.__views.__alloyId16564);
    $.__views.__alloyId16565 = Ti.UI.createView({
        id: "__alloyId16565"
    });
    $.__views.__alloyId16564.add($.__views.__alloyId16565);
    $.__views.__alloyId16566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16566"
    });
    $.__views.__alloyId16565.add($.__views.__alloyId16566);
    $.__views.__alloyId16567 = Ti.UI.createView({
        id: "__alloyId16567"
    });
    $.__views.__alloyId16567 && $.addTopLevelView($.__views.__alloyId16567);
    $.__views.__alloyId16568 = Ti.UI.createView({
        id: "__alloyId16568"
    });
    $.__views.__alloyId16567.add($.__views.__alloyId16568);
    $.__views.__alloyId16569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16569"
    });
    $.__views.__alloyId16568.add($.__views.__alloyId16569);
    $.__views.__alloyId16570 = Ti.UI.createView({
        id: "__alloyId16570"
    });
    $.__views.__alloyId16570 && $.addTopLevelView($.__views.__alloyId16570);
    $.__views.__alloyId16571 = Ti.UI.createView({
        id: "__alloyId16571"
    });
    $.__views.__alloyId16570.add($.__views.__alloyId16571);
    $.__views.__alloyId16572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16572"
    });
    $.__views.__alloyId16571.add($.__views.__alloyId16572);
    $.__views.__alloyId16573 = Ti.UI.createView({
        id: "__alloyId16573"
    });
    $.__views.__alloyId16573 && $.addTopLevelView($.__views.__alloyId16573);
    $.__views.__alloyId16574 = Ti.UI.createView({
        id: "__alloyId16574"
    });
    $.__views.__alloyId16573.add($.__views.__alloyId16574);
    $.__views.__alloyId16575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16575"
    });
    $.__views.__alloyId16574.add($.__views.__alloyId16575);
    $.__views.__alloyId16576 = Ti.UI.createView({
        id: "__alloyId16576"
    });
    $.__views.__alloyId16576 && $.addTopLevelView($.__views.__alloyId16576);
    $.__views.__alloyId16577 = Ti.UI.createView({
        id: "__alloyId16577"
    });
    $.__views.__alloyId16576.add($.__views.__alloyId16577);
    $.__views.__alloyId16578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16578"
    });
    $.__views.__alloyId16577.add($.__views.__alloyId16578);
    $.__views.__alloyId16579 = Ti.UI.createView({
        id: "__alloyId16579"
    });
    $.__views.__alloyId16579 && $.addTopLevelView($.__views.__alloyId16579);
    $.__views.__alloyId16580 = Ti.UI.createView({
        id: "__alloyId16580"
    });
    $.__views.__alloyId16579.add($.__views.__alloyId16580);
    $.__views.__alloyId16581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16581"
    });
    $.__views.__alloyId16580.add($.__views.__alloyId16581);
    $.__views.__alloyId16582 = Ti.UI.createView({
        id: "__alloyId16582"
    });
    $.__views.__alloyId16582 && $.addTopLevelView($.__views.__alloyId16582);
    $.__views.__alloyId16583 = Ti.UI.createView({
        id: "__alloyId16583"
    });
    $.__views.__alloyId16582.add($.__views.__alloyId16583);
    $.__views.__alloyId16584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16584"
    });
    $.__views.__alloyId16583.add($.__views.__alloyId16584);
    $.__views.__alloyId16585 = Ti.UI.createView({
        id: "__alloyId16585"
    });
    $.__views.__alloyId16585 && $.addTopLevelView($.__views.__alloyId16585);
    $.__views.__alloyId16586 = Ti.UI.createView({
        id: "__alloyId16586"
    });
    $.__views.__alloyId16585.add($.__views.__alloyId16586);
    $.__views.__alloyId16587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16587"
    });
    $.__views.__alloyId16586.add($.__views.__alloyId16587);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;