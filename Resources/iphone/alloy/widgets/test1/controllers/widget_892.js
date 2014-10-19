function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_892";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_892 = Ti.UI.createView({
        id: "widget_892"
    });
    $.__views.widget_892 && $.addTopLevelView($.__views.widget_892);
    $.__views.__alloyId22932 = Ti.UI.createView({
        id: "__alloyId22932"
    });
    $.__views.widget_892.add($.__views.__alloyId22932);
    $.__views.__alloyId22933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22933"
    });
    $.__views.__alloyId22932.add($.__views.__alloyId22933);
    $.__views.__alloyId22934 = Ti.UI.createView({
        id: "__alloyId22934"
    });
    $.__views.__alloyId22934 && $.addTopLevelView($.__views.__alloyId22934);
    $.__views.__alloyId22935 = Ti.UI.createView({
        id: "__alloyId22935"
    });
    $.__views.__alloyId22934.add($.__views.__alloyId22935);
    $.__views.__alloyId22936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22936"
    });
    $.__views.__alloyId22935.add($.__views.__alloyId22936);
    $.__views.__alloyId22937 = Ti.UI.createView({
        id: "__alloyId22937"
    });
    $.__views.__alloyId22937 && $.addTopLevelView($.__views.__alloyId22937);
    $.__views.__alloyId22938 = Ti.UI.createView({
        id: "__alloyId22938"
    });
    $.__views.__alloyId22937.add($.__views.__alloyId22938);
    $.__views.__alloyId22939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22939"
    });
    $.__views.__alloyId22938.add($.__views.__alloyId22939);
    $.__views.__alloyId22940 = Ti.UI.createView({
        id: "__alloyId22940"
    });
    $.__views.__alloyId22940 && $.addTopLevelView($.__views.__alloyId22940);
    $.__views.__alloyId22941 = Ti.UI.createView({
        id: "__alloyId22941"
    });
    $.__views.__alloyId22940.add($.__views.__alloyId22941);
    $.__views.__alloyId22942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22942"
    });
    $.__views.__alloyId22941.add($.__views.__alloyId22942);
    $.__views.__alloyId22943 = Ti.UI.createView({
        id: "__alloyId22943"
    });
    $.__views.__alloyId22943 && $.addTopLevelView($.__views.__alloyId22943);
    $.__views.__alloyId22944 = Ti.UI.createView({
        id: "__alloyId22944"
    });
    $.__views.__alloyId22943.add($.__views.__alloyId22944);
    $.__views.__alloyId22945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22945"
    });
    $.__views.__alloyId22944.add($.__views.__alloyId22945);
    $.__views.__alloyId22946 = Ti.UI.createView({
        id: "__alloyId22946"
    });
    $.__views.__alloyId22946 && $.addTopLevelView($.__views.__alloyId22946);
    $.__views.__alloyId22947 = Ti.UI.createView({
        id: "__alloyId22947"
    });
    $.__views.__alloyId22946.add($.__views.__alloyId22947);
    $.__views.__alloyId22948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22948"
    });
    $.__views.__alloyId22947.add($.__views.__alloyId22948);
    $.__views.__alloyId22949 = Ti.UI.createView({
        id: "__alloyId22949"
    });
    $.__views.__alloyId22949 && $.addTopLevelView($.__views.__alloyId22949);
    $.__views.__alloyId22950 = Ti.UI.createView({
        id: "__alloyId22950"
    });
    $.__views.__alloyId22949.add($.__views.__alloyId22950);
    $.__views.__alloyId22951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22951"
    });
    $.__views.__alloyId22950.add($.__views.__alloyId22951);
    $.__views.__alloyId22952 = Ti.UI.createView({
        id: "__alloyId22952"
    });
    $.__views.__alloyId22952 && $.addTopLevelView($.__views.__alloyId22952);
    $.__views.__alloyId22953 = Ti.UI.createView({
        id: "__alloyId22953"
    });
    $.__views.__alloyId22952.add($.__views.__alloyId22953);
    $.__views.__alloyId22954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22954"
    });
    $.__views.__alloyId22953.add($.__views.__alloyId22954);
    $.__views.__alloyId22955 = Ti.UI.createView({
        id: "__alloyId22955"
    });
    $.__views.__alloyId22955 && $.addTopLevelView($.__views.__alloyId22955);
    $.__views.__alloyId22956 = Ti.UI.createView({
        id: "__alloyId22956"
    });
    $.__views.__alloyId22955.add($.__views.__alloyId22956);
    $.__views.__alloyId22957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22957"
    });
    $.__views.__alloyId22956.add($.__views.__alloyId22957);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;