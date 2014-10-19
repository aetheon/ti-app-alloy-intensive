function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_742";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_742 = Ti.UI.createView({
        id: "widget_742"
    });
    $.__views.widget_742 && $.addTopLevelView($.__views.widget_742);
    $.__views.__alloyId18616 = Ti.UI.createView({
        id: "__alloyId18616"
    });
    $.__views.widget_742.add($.__views.__alloyId18616);
    $.__views.__alloyId18617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18617"
    });
    $.__views.__alloyId18616.add($.__views.__alloyId18617);
    $.__views.__alloyId18618 = Ti.UI.createView({
        id: "__alloyId18618"
    });
    $.__views.__alloyId18618 && $.addTopLevelView($.__views.__alloyId18618);
    $.__views.__alloyId18619 = Ti.UI.createView({
        id: "__alloyId18619"
    });
    $.__views.__alloyId18618.add($.__views.__alloyId18619);
    $.__views.__alloyId18620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18620"
    });
    $.__views.__alloyId18619.add($.__views.__alloyId18620);
    $.__views.__alloyId18621 = Ti.UI.createView({
        id: "__alloyId18621"
    });
    $.__views.__alloyId18621 && $.addTopLevelView($.__views.__alloyId18621);
    $.__views.__alloyId18622 = Ti.UI.createView({
        id: "__alloyId18622"
    });
    $.__views.__alloyId18621.add($.__views.__alloyId18622);
    $.__views.__alloyId18623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18623"
    });
    $.__views.__alloyId18622.add($.__views.__alloyId18623);
    $.__views.__alloyId18624 = Ti.UI.createView({
        id: "__alloyId18624"
    });
    $.__views.__alloyId18624 && $.addTopLevelView($.__views.__alloyId18624);
    $.__views.__alloyId18625 = Ti.UI.createView({
        id: "__alloyId18625"
    });
    $.__views.__alloyId18624.add($.__views.__alloyId18625);
    $.__views.__alloyId18626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18626"
    });
    $.__views.__alloyId18625.add($.__views.__alloyId18626);
    $.__views.__alloyId18627 = Ti.UI.createView({
        id: "__alloyId18627"
    });
    $.__views.__alloyId18627 && $.addTopLevelView($.__views.__alloyId18627);
    $.__views.__alloyId18628 = Ti.UI.createView({
        id: "__alloyId18628"
    });
    $.__views.__alloyId18627.add($.__views.__alloyId18628);
    $.__views.__alloyId18629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18629"
    });
    $.__views.__alloyId18628.add($.__views.__alloyId18629);
    $.__views.__alloyId18630 = Ti.UI.createView({
        id: "__alloyId18630"
    });
    $.__views.__alloyId18630 && $.addTopLevelView($.__views.__alloyId18630);
    $.__views.__alloyId18631 = Ti.UI.createView({
        id: "__alloyId18631"
    });
    $.__views.__alloyId18630.add($.__views.__alloyId18631);
    $.__views.__alloyId18632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18632"
    });
    $.__views.__alloyId18631.add($.__views.__alloyId18632);
    $.__views.__alloyId18633 = Ti.UI.createView({
        id: "__alloyId18633"
    });
    $.__views.__alloyId18633 && $.addTopLevelView($.__views.__alloyId18633);
    $.__views.__alloyId18634 = Ti.UI.createView({
        id: "__alloyId18634"
    });
    $.__views.__alloyId18633.add($.__views.__alloyId18634);
    $.__views.__alloyId18635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18635"
    });
    $.__views.__alloyId18634.add($.__views.__alloyId18635);
    $.__views.__alloyId18636 = Ti.UI.createView({
        id: "__alloyId18636"
    });
    $.__views.__alloyId18636 && $.addTopLevelView($.__views.__alloyId18636);
    $.__views.__alloyId18637 = Ti.UI.createView({
        id: "__alloyId18637"
    });
    $.__views.__alloyId18636.add($.__views.__alloyId18637);
    $.__views.__alloyId18638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18638"
    });
    $.__views.__alloyId18637.add($.__views.__alloyId18638);
    $.__views.__alloyId18639 = Ti.UI.createView({
        id: "__alloyId18639"
    });
    $.__views.__alloyId18639 && $.addTopLevelView($.__views.__alloyId18639);
    $.__views.__alloyId18640 = Ti.UI.createView({
        id: "__alloyId18640"
    });
    $.__views.__alloyId18639.add($.__views.__alloyId18640);
    $.__views.__alloyId18641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18641"
    });
    $.__views.__alloyId18640.add($.__views.__alloyId18641);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;