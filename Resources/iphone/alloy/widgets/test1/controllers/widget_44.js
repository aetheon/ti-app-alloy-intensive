function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_44";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_44 = Ti.UI.createView({
        id: "widget_44"
    });
    $.__views.widget_44 && $.addTopLevelView($.__views.widget_44);
    $.__views.__alloyId9880 = Ti.UI.createView({
        id: "__alloyId9880"
    });
    $.__views.widget_44.add($.__views.__alloyId9880);
    $.__views.__alloyId9881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9881"
    });
    $.__views.__alloyId9880.add($.__views.__alloyId9881);
    $.__views.__alloyId9882 = Ti.UI.createView({
        id: "__alloyId9882"
    });
    $.__views.__alloyId9882 && $.addTopLevelView($.__views.__alloyId9882);
    $.__views.__alloyId9883 = Ti.UI.createView({
        id: "__alloyId9883"
    });
    $.__views.__alloyId9882.add($.__views.__alloyId9883);
    $.__views.__alloyId9884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9884"
    });
    $.__views.__alloyId9883.add($.__views.__alloyId9884);
    $.__views.__alloyId9885 = Ti.UI.createView({
        id: "__alloyId9885"
    });
    $.__views.__alloyId9885 && $.addTopLevelView($.__views.__alloyId9885);
    $.__views.__alloyId9886 = Ti.UI.createView({
        id: "__alloyId9886"
    });
    $.__views.__alloyId9885.add($.__views.__alloyId9886);
    $.__views.__alloyId9887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9887"
    });
    $.__views.__alloyId9886.add($.__views.__alloyId9887);
    $.__views.__alloyId9888 = Ti.UI.createView({
        id: "__alloyId9888"
    });
    $.__views.__alloyId9888 && $.addTopLevelView($.__views.__alloyId9888);
    $.__views.__alloyId9889 = Ti.UI.createView({
        id: "__alloyId9889"
    });
    $.__views.__alloyId9888.add($.__views.__alloyId9889);
    $.__views.__alloyId9890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9890"
    });
    $.__views.__alloyId9889.add($.__views.__alloyId9890);
    $.__views.__alloyId9891 = Ti.UI.createView({
        id: "__alloyId9891"
    });
    $.__views.__alloyId9891 && $.addTopLevelView($.__views.__alloyId9891);
    $.__views.__alloyId9892 = Ti.UI.createView({
        id: "__alloyId9892"
    });
    $.__views.__alloyId9891.add($.__views.__alloyId9892);
    $.__views.__alloyId9893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9893"
    });
    $.__views.__alloyId9892.add($.__views.__alloyId9893);
    $.__views.__alloyId9894 = Ti.UI.createView({
        id: "__alloyId9894"
    });
    $.__views.__alloyId9894 && $.addTopLevelView($.__views.__alloyId9894);
    $.__views.__alloyId9895 = Ti.UI.createView({
        id: "__alloyId9895"
    });
    $.__views.__alloyId9894.add($.__views.__alloyId9895);
    $.__views.__alloyId9896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9896"
    });
    $.__views.__alloyId9895.add($.__views.__alloyId9896);
    $.__views.__alloyId9897 = Ti.UI.createView({
        id: "__alloyId9897"
    });
    $.__views.__alloyId9897 && $.addTopLevelView($.__views.__alloyId9897);
    $.__views.__alloyId9898 = Ti.UI.createView({
        id: "__alloyId9898"
    });
    $.__views.__alloyId9897.add($.__views.__alloyId9898);
    $.__views.__alloyId9899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9899"
    });
    $.__views.__alloyId9898.add($.__views.__alloyId9899);
    $.__views.__alloyId9900 = Ti.UI.createView({
        id: "__alloyId9900"
    });
    $.__views.__alloyId9900 && $.addTopLevelView($.__views.__alloyId9900);
    $.__views.__alloyId9901 = Ti.UI.createView({
        id: "__alloyId9901"
    });
    $.__views.__alloyId9900.add($.__views.__alloyId9901);
    $.__views.__alloyId9902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9902"
    });
    $.__views.__alloyId9901.add($.__views.__alloyId9902);
    $.__views.__alloyId9903 = Ti.UI.createView({
        id: "__alloyId9903"
    });
    $.__views.__alloyId9903 && $.addTopLevelView($.__views.__alloyId9903);
    $.__views.__alloyId9904 = Ti.UI.createView({
        id: "__alloyId9904"
    });
    $.__views.__alloyId9903.add($.__views.__alloyId9904);
    $.__views.__alloyId9905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9905"
    });
    $.__views.__alloyId9904.add($.__views.__alloyId9905);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;