function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_615";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_615 = Ti.UI.createView({
        id: "widget_615"
    });
    $.__views.widget_615 && $.addTopLevelView($.__views.widget_615);
    $.__views.__alloyId14950 = Ti.UI.createView({
        id: "__alloyId14950"
    });
    $.__views.widget_615.add($.__views.__alloyId14950);
    $.__views.__alloyId14951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14951"
    });
    $.__views.__alloyId14950.add($.__views.__alloyId14951);
    $.__views.__alloyId14952 = Ti.UI.createView({
        id: "__alloyId14952"
    });
    $.__views.__alloyId14952 && $.addTopLevelView($.__views.__alloyId14952);
    $.__views.__alloyId14953 = Ti.UI.createView({
        id: "__alloyId14953"
    });
    $.__views.__alloyId14952.add($.__views.__alloyId14953);
    $.__views.__alloyId14954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14954"
    });
    $.__views.__alloyId14953.add($.__views.__alloyId14954);
    $.__views.__alloyId14955 = Ti.UI.createView({
        id: "__alloyId14955"
    });
    $.__views.__alloyId14955 && $.addTopLevelView($.__views.__alloyId14955);
    $.__views.__alloyId14956 = Ti.UI.createView({
        id: "__alloyId14956"
    });
    $.__views.__alloyId14955.add($.__views.__alloyId14956);
    $.__views.__alloyId14957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14957"
    });
    $.__views.__alloyId14956.add($.__views.__alloyId14957);
    $.__views.__alloyId14958 = Ti.UI.createView({
        id: "__alloyId14958"
    });
    $.__views.__alloyId14958 && $.addTopLevelView($.__views.__alloyId14958);
    $.__views.__alloyId14959 = Ti.UI.createView({
        id: "__alloyId14959"
    });
    $.__views.__alloyId14958.add($.__views.__alloyId14959);
    $.__views.__alloyId14960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14960"
    });
    $.__views.__alloyId14959.add($.__views.__alloyId14960);
    $.__views.__alloyId14961 = Ti.UI.createView({
        id: "__alloyId14961"
    });
    $.__views.__alloyId14961 && $.addTopLevelView($.__views.__alloyId14961);
    $.__views.__alloyId14962 = Ti.UI.createView({
        id: "__alloyId14962"
    });
    $.__views.__alloyId14961.add($.__views.__alloyId14962);
    $.__views.__alloyId14963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14963"
    });
    $.__views.__alloyId14962.add($.__views.__alloyId14963);
    $.__views.__alloyId14964 = Ti.UI.createView({
        id: "__alloyId14964"
    });
    $.__views.__alloyId14964 && $.addTopLevelView($.__views.__alloyId14964);
    $.__views.__alloyId14965 = Ti.UI.createView({
        id: "__alloyId14965"
    });
    $.__views.__alloyId14964.add($.__views.__alloyId14965);
    $.__views.__alloyId14966 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14966"
    });
    $.__views.__alloyId14965.add($.__views.__alloyId14966);
    $.__views.__alloyId14967 = Ti.UI.createView({
        id: "__alloyId14967"
    });
    $.__views.__alloyId14967 && $.addTopLevelView($.__views.__alloyId14967);
    $.__views.__alloyId14968 = Ti.UI.createView({
        id: "__alloyId14968"
    });
    $.__views.__alloyId14967.add($.__views.__alloyId14968);
    $.__views.__alloyId14969 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14969"
    });
    $.__views.__alloyId14968.add($.__views.__alloyId14969);
    $.__views.__alloyId14970 = Ti.UI.createView({
        id: "__alloyId14970"
    });
    $.__views.__alloyId14970 && $.addTopLevelView($.__views.__alloyId14970);
    $.__views.__alloyId14971 = Ti.UI.createView({
        id: "__alloyId14971"
    });
    $.__views.__alloyId14970.add($.__views.__alloyId14971);
    $.__views.__alloyId14972 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14972"
    });
    $.__views.__alloyId14971.add($.__views.__alloyId14972);
    $.__views.__alloyId14973 = Ti.UI.createView({
        id: "__alloyId14973"
    });
    $.__views.__alloyId14973 && $.addTopLevelView($.__views.__alloyId14973);
    $.__views.__alloyId14974 = Ti.UI.createView({
        id: "__alloyId14974"
    });
    $.__views.__alloyId14973.add($.__views.__alloyId14974);
    $.__views.__alloyId14975 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14975"
    });
    $.__views.__alloyId14974.add($.__views.__alloyId14975);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;