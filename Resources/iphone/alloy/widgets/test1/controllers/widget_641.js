function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_641";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_641 = Ti.UI.createView({
        id: "widget_641"
    });
    $.__views.widget_641 && $.addTopLevelView($.__views.widget_641);
    $.__views.__alloyId15704 = Ti.UI.createView({
        id: "__alloyId15704"
    });
    $.__views.widget_641.add($.__views.__alloyId15704);
    $.__views.__alloyId15705 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15705"
    });
    $.__views.__alloyId15704.add($.__views.__alloyId15705);
    $.__views.__alloyId15706 = Ti.UI.createView({
        id: "__alloyId15706"
    });
    $.__views.__alloyId15706 && $.addTopLevelView($.__views.__alloyId15706);
    $.__views.__alloyId15707 = Ti.UI.createView({
        id: "__alloyId15707"
    });
    $.__views.__alloyId15706.add($.__views.__alloyId15707);
    $.__views.__alloyId15708 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15708"
    });
    $.__views.__alloyId15707.add($.__views.__alloyId15708);
    $.__views.__alloyId15709 = Ti.UI.createView({
        id: "__alloyId15709"
    });
    $.__views.__alloyId15709 && $.addTopLevelView($.__views.__alloyId15709);
    $.__views.__alloyId15710 = Ti.UI.createView({
        id: "__alloyId15710"
    });
    $.__views.__alloyId15709.add($.__views.__alloyId15710);
    $.__views.__alloyId15711 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15711"
    });
    $.__views.__alloyId15710.add($.__views.__alloyId15711);
    $.__views.__alloyId15712 = Ti.UI.createView({
        id: "__alloyId15712"
    });
    $.__views.__alloyId15712 && $.addTopLevelView($.__views.__alloyId15712);
    $.__views.__alloyId15713 = Ti.UI.createView({
        id: "__alloyId15713"
    });
    $.__views.__alloyId15712.add($.__views.__alloyId15713);
    $.__views.__alloyId15714 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15714"
    });
    $.__views.__alloyId15713.add($.__views.__alloyId15714);
    $.__views.__alloyId15715 = Ti.UI.createView({
        id: "__alloyId15715"
    });
    $.__views.__alloyId15715 && $.addTopLevelView($.__views.__alloyId15715);
    $.__views.__alloyId15716 = Ti.UI.createView({
        id: "__alloyId15716"
    });
    $.__views.__alloyId15715.add($.__views.__alloyId15716);
    $.__views.__alloyId15717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15717"
    });
    $.__views.__alloyId15716.add($.__views.__alloyId15717);
    $.__views.__alloyId15718 = Ti.UI.createView({
        id: "__alloyId15718"
    });
    $.__views.__alloyId15718 && $.addTopLevelView($.__views.__alloyId15718);
    $.__views.__alloyId15719 = Ti.UI.createView({
        id: "__alloyId15719"
    });
    $.__views.__alloyId15718.add($.__views.__alloyId15719);
    $.__views.__alloyId15720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15720"
    });
    $.__views.__alloyId15719.add($.__views.__alloyId15720);
    $.__views.__alloyId15721 = Ti.UI.createView({
        id: "__alloyId15721"
    });
    $.__views.__alloyId15721 && $.addTopLevelView($.__views.__alloyId15721);
    $.__views.__alloyId15722 = Ti.UI.createView({
        id: "__alloyId15722"
    });
    $.__views.__alloyId15721.add($.__views.__alloyId15722);
    $.__views.__alloyId15723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15723"
    });
    $.__views.__alloyId15722.add($.__views.__alloyId15723);
    $.__views.__alloyId15724 = Ti.UI.createView({
        id: "__alloyId15724"
    });
    $.__views.__alloyId15724 && $.addTopLevelView($.__views.__alloyId15724);
    $.__views.__alloyId15725 = Ti.UI.createView({
        id: "__alloyId15725"
    });
    $.__views.__alloyId15724.add($.__views.__alloyId15725);
    $.__views.__alloyId15726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15726"
    });
    $.__views.__alloyId15725.add($.__views.__alloyId15726);
    $.__views.__alloyId15727 = Ti.UI.createView({
        id: "__alloyId15727"
    });
    $.__views.__alloyId15727 && $.addTopLevelView($.__views.__alloyId15727);
    $.__views.__alloyId15728 = Ti.UI.createView({
        id: "__alloyId15728"
    });
    $.__views.__alloyId15727.add($.__views.__alloyId15728);
    $.__views.__alloyId15729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15729"
    });
    $.__views.__alloyId15728.add($.__views.__alloyId15729);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;