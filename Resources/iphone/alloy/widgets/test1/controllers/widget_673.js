function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_673";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_673 = Ti.UI.createView({
        id: "widget_673"
    });
    $.__views.widget_673 && $.addTopLevelView($.__views.widget_673);
    $.__views.__alloyId16614 = Ti.UI.createView({
        id: "__alloyId16614"
    });
    $.__views.widget_673.add($.__views.__alloyId16614);
    $.__views.__alloyId16615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16615"
    });
    $.__views.__alloyId16614.add($.__views.__alloyId16615);
    $.__views.__alloyId16616 = Ti.UI.createView({
        id: "__alloyId16616"
    });
    $.__views.__alloyId16616 && $.addTopLevelView($.__views.__alloyId16616);
    $.__views.__alloyId16617 = Ti.UI.createView({
        id: "__alloyId16617"
    });
    $.__views.__alloyId16616.add($.__views.__alloyId16617);
    $.__views.__alloyId16618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16618"
    });
    $.__views.__alloyId16617.add($.__views.__alloyId16618);
    $.__views.__alloyId16619 = Ti.UI.createView({
        id: "__alloyId16619"
    });
    $.__views.__alloyId16619 && $.addTopLevelView($.__views.__alloyId16619);
    $.__views.__alloyId16620 = Ti.UI.createView({
        id: "__alloyId16620"
    });
    $.__views.__alloyId16619.add($.__views.__alloyId16620);
    $.__views.__alloyId16621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16621"
    });
    $.__views.__alloyId16620.add($.__views.__alloyId16621);
    $.__views.__alloyId16622 = Ti.UI.createView({
        id: "__alloyId16622"
    });
    $.__views.__alloyId16622 && $.addTopLevelView($.__views.__alloyId16622);
    $.__views.__alloyId16623 = Ti.UI.createView({
        id: "__alloyId16623"
    });
    $.__views.__alloyId16622.add($.__views.__alloyId16623);
    $.__views.__alloyId16624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16624"
    });
    $.__views.__alloyId16623.add($.__views.__alloyId16624);
    $.__views.__alloyId16625 = Ti.UI.createView({
        id: "__alloyId16625"
    });
    $.__views.__alloyId16625 && $.addTopLevelView($.__views.__alloyId16625);
    $.__views.__alloyId16626 = Ti.UI.createView({
        id: "__alloyId16626"
    });
    $.__views.__alloyId16625.add($.__views.__alloyId16626);
    $.__views.__alloyId16627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16627"
    });
    $.__views.__alloyId16626.add($.__views.__alloyId16627);
    $.__views.__alloyId16628 = Ti.UI.createView({
        id: "__alloyId16628"
    });
    $.__views.__alloyId16628 && $.addTopLevelView($.__views.__alloyId16628);
    $.__views.__alloyId16629 = Ti.UI.createView({
        id: "__alloyId16629"
    });
    $.__views.__alloyId16628.add($.__views.__alloyId16629);
    $.__views.__alloyId16630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16630"
    });
    $.__views.__alloyId16629.add($.__views.__alloyId16630);
    $.__views.__alloyId16631 = Ti.UI.createView({
        id: "__alloyId16631"
    });
    $.__views.__alloyId16631 && $.addTopLevelView($.__views.__alloyId16631);
    $.__views.__alloyId16632 = Ti.UI.createView({
        id: "__alloyId16632"
    });
    $.__views.__alloyId16631.add($.__views.__alloyId16632);
    $.__views.__alloyId16633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16633"
    });
    $.__views.__alloyId16632.add($.__views.__alloyId16633);
    $.__views.__alloyId16634 = Ti.UI.createView({
        id: "__alloyId16634"
    });
    $.__views.__alloyId16634 && $.addTopLevelView($.__views.__alloyId16634);
    $.__views.__alloyId16635 = Ti.UI.createView({
        id: "__alloyId16635"
    });
    $.__views.__alloyId16634.add($.__views.__alloyId16635);
    $.__views.__alloyId16636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16636"
    });
    $.__views.__alloyId16635.add($.__views.__alloyId16636);
    $.__views.__alloyId16637 = Ti.UI.createView({
        id: "__alloyId16637"
    });
    $.__views.__alloyId16637 && $.addTopLevelView($.__views.__alloyId16637);
    $.__views.__alloyId16638 = Ti.UI.createView({
        id: "__alloyId16638"
    });
    $.__views.__alloyId16637.add($.__views.__alloyId16638);
    $.__views.__alloyId16639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16639"
    });
    $.__views.__alloyId16638.add($.__views.__alloyId16639);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;