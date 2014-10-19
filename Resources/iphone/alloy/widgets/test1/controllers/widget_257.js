function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_257";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_257 = Ti.UI.createView({
        id: "widget_257"
    });
    $.__views.widget_257 && $.addTopLevelView($.__views.widget_257);
    $.__views.__alloyId4602 = Ti.UI.createView({
        id: "__alloyId4602"
    });
    $.__views.widget_257.add($.__views.__alloyId4602);
    $.__views.__alloyId4603 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4603"
    });
    $.__views.__alloyId4602.add($.__views.__alloyId4603);
    $.__views.__alloyId4604 = Ti.UI.createView({
        id: "__alloyId4604"
    });
    $.__views.__alloyId4604 && $.addTopLevelView($.__views.__alloyId4604);
    $.__views.__alloyId4605 = Ti.UI.createView({
        id: "__alloyId4605"
    });
    $.__views.__alloyId4604.add($.__views.__alloyId4605);
    $.__views.__alloyId4606 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4606"
    });
    $.__views.__alloyId4605.add($.__views.__alloyId4606);
    $.__views.__alloyId4607 = Ti.UI.createView({
        id: "__alloyId4607"
    });
    $.__views.__alloyId4607 && $.addTopLevelView($.__views.__alloyId4607);
    $.__views.__alloyId4608 = Ti.UI.createView({
        id: "__alloyId4608"
    });
    $.__views.__alloyId4607.add($.__views.__alloyId4608);
    $.__views.__alloyId4609 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4609"
    });
    $.__views.__alloyId4608.add($.__views.__alloyId4609);
    $.__views.__alloyId4610 = Ti.UI.createView({
        id: "__alloyId4610"
    });
    $.__views.__alloyId4610 && $.addTopLevelView($.__views.__alloyId4610);
    $.__views.__alloyId4611 = Ti.UI.createView({
        id: "__alloyId4611"
    });
    $.__views.__alloyId4610.add($.__views.__alloyId4611);
    $.__views.__alloyId4612 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4612"
    });
    $.__views.__alloyId4611.add($.__views.__alloyId4612);
    $.__views.__alloyId4613 = Ti.UI.createView({
        id: "__alloyId4613"
    });
    $.__views.__alloyId4613 && $.addTopLevelView($.__views.__alloyId4613);
    $.__views.__alloyId4614 = Ti.UI.createView({
        id: "__alloyId4614"
    });
    $.__views.__alloyId4613.add($.__views.__alloyId4614);
    $.__views.__alloyId4615 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4615"
    });
    $.__views.__alloyId4614.add($.__views.__alloyId4615);
    $.__views.__alloyId4616 = Ti.UI.createView({
        id: "__alloyId4616"
    });
    $.__views.__alloyId4616 && $.addTopLevelView($.__views.__alloyId4616);
    $.__views.__alloyId4617 = Ti.UI.createView({
        id: "__alloyId4617"
    });
    $.__views.__alloyId4616.add($.__views.__alloyId4617);
    $.__views.__alloyId4618 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4618"
    });
    $.__views.__alloyId4617.add($.__views.__alloyId4618);
    $.__views.__alloyId4619 = Ti.UI.createView({
        id: "__alloyId4619"
    });
    $.__views.__alloyId4619 && $.addTopLevelView($.__views.__alloyId4619);
    $.__views.__alloyId4620 = Ti.UI.createView({
        id: "__alloyId4620"
    });
    $.__views.__alloyId4619.add($.__views.__alloyId4620);
    $.__views.__alloyId4621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4621"
    });
    $.__views.__alloyId4620.add($.__views.__alloyId4621);
    $.__views.__alloyId4622 = Ti.UI.createView({
        id: "__alloyId4622"
    });
    $.__views.__alloyId4622 && $.addTopLevelView($.__views.__alloyId4622);
    $.__views.__alloyId4623 = Ti.UI.createView({
        id: "__alloyId4623"
    });
    $.__views.__alloyId4622.add($.__views.__alloyId4623);
    $.__views.__alloyId4624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4624"
    });
    $.__views.__alloyId4623.add($.__views.__alloyId4624);
    $.__views.__alloyId4625 = Ti.UI.createView({
        id: "__alloyId4625"
    });
    $.__views.__alloyId4625 && $.addTopLevelView($.__views.__alloyId4625);
    $.__views.__alloyId4626 = Ti.UI.createView({
        id: "__alloyId4626"
    });
    $.__views.__alloyId4625.add($.__views.__alloyId4626);
    $.__views.__alloyId4627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4627"
    });
    $.__views.__alloyId4626.add($.__views.__alloyId4627);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;