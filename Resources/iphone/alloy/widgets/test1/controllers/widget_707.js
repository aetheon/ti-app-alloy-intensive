function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_707";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_707 = Ti.UI.createView({
        id: "widget_707"
    });
    $.__views.widget_707 && $.addTopLevelView($.__views.widget_707);
    $.__views.__alloyId17602 = Ti.UI.createView({
        id: "__alloyId17602"
    });
    $.__views.widget_707.add($.__views.__alloyId17602);
    $.__views.__alloyId17603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17603"
    });
    $.__views.__alloyId17602.add($.__views.__alloyId17603);
    $.__views.__alloyId17604 = Ti.UI.createView({
        id: "__alloyId17604"
    });
    $.__views.__alloyId17604 && $.addTopLevelView($.__views.__alloyId17604);
    $.__views.__alloyId17605 = Ti.UI.createView({
        id: "__alloyId17605"
    });
    $.__views.__alloyId17604.add($.__views.__alloyId17605);
    $.__views.__alloyId17606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17606"
    });
    $.__views.__alloyId17605.add($.__views.__alloyId17606);
    $.__views.__alloyId17607 = Ti.UI.createView({
        id: "__alloyId17607"
    });
    $.__views.__alloyId17607 && $.addTopLevelView($.__views.__alloyId17607);
    $.__views.__alloyId17608 = Ti.UI.createView({
        id: "__alloyId17608"
    });
    $.__views.__alloyId17607.add($.__views.__alloyId17608);
    $.__views.__alloyId17609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17609"
    });
    $.__views.__alloyId17608.add($.__views.__alloyId17609);
    $.__views.__alloyId17610 = Ti.UI.createView({
        id: "__alloyId17610"
    });
    $.__views.__alloyId17610 && $.addTopLevelView($.__views.__alloyId17610);
    $.__views.__alloyId17611 = Ti.UI.createView({
        id: "__alloyId17611"
    });
    $.__views.__alloyId17610.add($.__views.__alloyId17611);
    $.__views.__alloyId17612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17612"
    });
    $.__views.__alloyId17611.add($.__views.__alloyId17612);
    $.__views.__alloyId17613 = Ti.UI.createView({
        id: "__alloyId17613"
    });
    $.__views.__alloyId17613 && $.addTopLevelView($.__views.__alloyId17613);
    $.__views.__alloyId17614 = Ti.UI.createView({
        id: "__alloyId17614"
    });
    $.__views.__alloyId17613.add($.__views.__alloyId17614);
    $.__views.__alloyId17615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17615"
    });
    $.__views.__alloyId17614.add($.__views.__alloyId17615);
    $.__views.__alloyId17616 = Ti.UI.createView({
        id: "__alloyId17616"
    });
    $.__views.__alloyId17616 && $.addTopLevelView($.__views.__alloyId17616);
    $.__views.__alloyId17617 = Ti.UI.createView({
        id: "__alloyId17617"
    });
    $.__views.__alloyId17616.add($.__views.__alloyId17617);
    $.__views.__alloyId17618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17618"
    });
    $.__views.__alloyId17617.add($.__views.__alloyId17618);
    $.__views.__alloyId17619 = Ti.UI.createView({
        id: "__alloyId17619"
    });
    $.__views.__alloyId17619 && $.addTopLevelView($.__views.__alloyId17619);
    $.__views.__alloyId17620 = Ti.UI.createView({
        id: "__alloyId17620"
    });
    $.__views.__alloyId17619.add($.__views.__alloyId17620);
    $.__views.__alloyId17621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17621"
    });
    $.__views.__alloyId17620.add($.__views.__alloyId17621);
    $.__views.__alloyId17622 = Ti.UI.createView({
        id: "__alloyId17622"
    });
    $.__views.__alloyId17622 && $.addTopLevelView($.__views.__alloyId17622);
    $.__views.__alloyId17623 = Ti.UI.createView({
        id: "__alloyId17623"
    });
    $.__views.__alloyId17622.add($.__views.__alloyId17623);
    $.__views.__alloyId17624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17624"
    });
    $.__views.__alloyId17623.add($.__views.__alloyId17624);
    $.__views.__alloyId17625 = Ti.UI.createView({
        id: "__alloyId17625"
    });
    $.__views.__alloyId17625 && $.addTopLevelView($.__views.__alloyId17625);
    $.__views.__alloyId17626 = Ti.UI.createView({
        id: "__alloyId17626"
    });
    $.__views.__alloyId17625.add($.__views.__alloyId17626);
    $.__views.__alloyId17627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17627"
    });
    $.__views.__alloyId17626.add($.__views.__alloyId17627);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;