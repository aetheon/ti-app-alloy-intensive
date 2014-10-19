function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_396";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_396 = Ti.UI.createView({
        id: "widget_396"
    });
    $.__views.widget_396 && $.addTopLevelView($.__views.widget_396);
    $.__views.__alloyId8606 = Ti.UI.createView({
        id: "__alloyId8606"
    });
    $.__views.widget_396.add($.__views.__alloyId8606);
    $.__views.__alloyId8607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8607"
    });
    $.__views.__alloyId8606.add($.__views.__alloyId8607);
    $.__views.__alloyId8608 = Ti.UI.createView({
        id: "__alloyId8608"
    });
    $.__views.__alloyId8608 && $.addTopLevelView($.__views.__alloyId8608);
    $.__views.__alloyId8609 = Ti.UI.createView({
        id: "__alloyId8609"
    });
    $.__views.__alloyId8608.add($.__views.__alloyId8609);
    $.__views.__alloyId8610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8610"
    });
    $.__views.__alloyId8609.add($.__views.__alloyId8610);
    $.__views.__alloyId8611 = Ti.UI.createView({
        id: "__alloyId8611"
    });
    $.__views.__alloyId8611 && $.addTopLevelView($.__views.__alloyId8611);
    $.__views.__alloyId8612 = Ti.UI.createView({
        id: "__alloyId8612"
    });
    $.__views.__alloyId8611.add($.__views.__alloyId8612);
    $.__views.__alloyId8613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8613"
    });
    $.__views.__alloyId8612.add($.__views.__alloyId8613);
    $.__views.__alloyId8614 = Ti.UI.createView({
        id: "__alloyId8614"
    });
    $.__views.__alloyId8614 && $.addTopLevelView($.__views.__alloyId8614);
    $.__views.__alloyId8615 = Ti.UI.createView({
        id: "__alloyId8615"
    });
    $.__views.__alloyId8614.add($.__views.__alloyId8615);
    $.__views.__alloyId8616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8616"
    });
    $.__views.__alloyId8615.add($.__views.__alloyId8616);
    $.__views.__alloyId8617 = Ti.UI.createView({
        id: "__alloyId8617"
    });
    $.__views.__alloyId8617 && $.addTopLevelView($.__views.__alloyId8617);
    $.__views.__alloyId8618 = Ti.UI.createView({
        id: "__alloyId8618"
    });
    $.__views.__alloyId8617.add($.__views.__alloyId8618);
    $.__views.__alloyId8619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8619"
    });
    $.__views.__alloyId8618.add($.__views.__alloyId8619);
    $.__views.__alloyId8620 = Ti.UI.createView({
        id: "__alloyId8620"
    });
    $.__views.__alloyId8620 && $.addTopLevelView($.__views.__alloyId8620);
    $.__views.__alloyId8621 = Ti.UI.createView({
        id: "__alloyId8621"
    });
    $.__views.__alloyId8620.add($.__views.__alloyId8621);
    $.__views.__alloyId8622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8622"
    });
    $.__views.__alloyId8621.add($.__views.__alloyId8622);
    $.__views.__alloyId8623 = Ti.UI.createView({
        id: "__alloyId8623"
    });
    $.__views.__alloyId8623 && $.addTopLevelView($.__views.__alloyId8623);
    $.__views.__alloyId8624 = Ti.UI.createView({
        id: "__alloyId8624"
    });
    $.__views.__alloyId8623.add($.__views.__alloyId8624);
    $.__views.__alloyId8625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8625"
    });
    $.__views.__alloyId8624.add($.__views.__alloyId8625);
    $.__views.__alloyId8626 = Ti.UI.createView({
        id: "__alloyId8626"
    });
    $.__views.__alloyId8626 && $.addTopLevelView($.__views.__alloyId8626);
    $.__views.__alloyId8627 = Ti.UI.createView({
        id: "__alloyId8627"
    });
    $.__views.__alloyId8626.add($.__views.__alloyId8627);
    $.__views.__alloyId8628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8628"
    });
    $.__views.__alloyId8627.add($.__views.__alloyId8628);
    $.__views.__alloyId8629 = Ti.UI.createView({
        id: "__alloyId8629"
    });
    $.__views.__alloyId8629 && $.addTopLevelView($.__views.__alloyId8629);
    $.__views.__alloyId8630 = Ti.UI.createView({
        id: "__alloyId8630"
    });
    $.__views.__alloyId8629.add($.__views.__alloyId8630);
    $.__views.__alloyId8631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8631"
    });
    $.__views.__alloyId8630.add($.__views.__alloyId8631);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;