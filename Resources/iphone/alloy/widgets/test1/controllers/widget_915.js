function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_915";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_915 = Ti.UI.createView({
        id: "widget_915"
    });
    $.__views.widget_915 && $.addTopLevelView($.__views.widget_915);
    $.__views.__alloyId23608 = Ti.UI.createView({
        id: "__alloyId23608"
    });
    $.__views.widget_915.add($.__views.__alloyId23608);
    $.__views.__alloyId23609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23609"
    });
    $.__views.__alloyId23608.add($.__views.__alloyId23609);
    $.__views.__alloyId23610 = Ti.UI.createView({
        id: "__alloyId23610"
    });
    $.__views.__alloyId23610 && $.addTopLevelView($.__views.__alloyId23610);
    $.__views.__alloyId23611 = Ti.UI.createView({
        id: "__alloyId23611"
    });
    $.__views.__alloyId23610.add($.__views.__alloyId23611);
    $.__views.__alloyId23612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23612"
    });
    $.__views.__alloyId23611.add($.__views.__alloyId23612);
    $.__views.__alloyId23613 = Ti.UI.createView({
        id: "__alloyId23613"
    });
    $.__views.__alloyId23613 && $.addTopLevelView($.__views.__alloyId23613);
    $.__views.__alloyId23614 = Ti.UI.createView({
        id: "__alloyId23614"
    });
    $.__views.__alloyId23613.add($.__views.__alloyId23614);
    $.__views.__alloyId23615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23615"
    });
    $.__views.__alloyId23614.add($.__views.__alloyId23615);
    $.__views.__alloyId23616 = Ti.UI.createView({
        id: "__alloyId23616"
    });
    $.__views.__alloyId23616 && $.addTopLevelView($.__views.__alloyId23616);
    $.__views.__alloyId23617 = Ti.UI.createView({
        id: "__alloyId23617"
    });
    $.__views.__alloyId23616.add($.__views.__alloyId23617);
    $.__views.__alloyId23618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23618"
    });
    $.__views.__alloyId23617.add($.__views.__alloyId23618);
    $.__views.__alloyId23619 = Ti.UI.createView({
        id: "__alloyId23619"
    });
    $.__views.__alloyId23619 && $.addTopLevelView($.__views.__alloyId23619);
    $.__views.__alloyId23620 = Ti.UI.createView({
        id: "__alloyId23620"
    });
    $.__views.__alloyId23619.add($.__views.__alloyId23620);
    $.__views.__alloyId23621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23621"
    });
    $.__views.__alloyId23620.add($.__views.__alloyId23621);
    $.__views.__alloyId23622 = Ti.UI.createView({
        id: "__alloyId23622"
    });
    $.__views.__alloyId23622 && $.addTopLevelView($.__views.__alloyId23622);
    $.__views.__alloyId23623 = Ti.UI.createView({
        id: "__alloyId23623"
    });
    $.__views.__alloyId23622.add($.__views.__alloyId23623);
    $.__views.__alloyId23624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23624"
    });
    $.__views.__alloyId23623.add($.__views.__alloyId23624);
    $.__views.__alloyId23625 = Ti.UI.createView({
        id: "__alloyId23625"
    });
    $.__views.__alloyId23625 && $.addTopLevelView($.__views.__alloyId23625);
    $.__views.__alloyId23626 = Ti.UI.createView({
        id: "__alloyId23626"
    });
    $.__views.__alloyId23625.add($.__views.__alloyId23626);
    $.__views.__alloyId23627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23627"
    });
    $.__views.__alloyId23626.add($.__views.__alloyId23627);
    $.__views.__alloyId23628 = Ti.UI.createView({
        id: "__alloyId23628"
    });
    $.__views.__alloyId23628 && $.addTopLevelView($.__views.__alloyId23628);
    $.__views.__alloyId23629 = Ti.UI.createView({
        id: "__alloyId23629"
    });
    $.__views.__alloyId23628.add($.__views.__alloyId23629);
    $.__views.__alloyId23630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23630"
    });
    $.__views.__alloyId23629.add($.__views.__alloyId23630);
    $.__views.__alloyId23631 = Ti.UI.createView({
        id: "__alloyId23631"
    });
    $.__views.__alloyId23631 && $.addTopLevelView($.__views.__alloyId23631);
    $.__views.__alloyId23632 = Ti.UI.createView({
        id: "__alloyId23632"
    });
    $.__views.__alloyId23631.add($.__views.__alloyId23632);
    $.__views.__alloyId23633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23633"
    });
    $.__views.__alloyId23632.add($.__views.__alloyId23633);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;