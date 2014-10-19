function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_754";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_754 = Ti.UI.createView({
        id: "widget_754"
    });
    $.__views.widget_754 && $.addTopLevelView($.__views.widget_754);
    $.__views.__alloyId18954 = Ti.UI.createView({
        id: "__alloyId18954"
    });
    $.__views.widget_754.add($.__views.__alloyId18954);
    $.__views.__alloyId18955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18955"
    });
    $.__views.__alloyId18954.add($.__views.__alloyId18955);
    $.__views.__alloyId18956 = Ti.UI.createView({
        id: "__alloyId18956"
    });
    $.__views.__alloyId18956 && $.addTopLevelView($.__views.__alloyId18956);
    $.__views.__alloyId18957 = Ti.UI.createView({
        id: "__alloyId18957"
    });
    $.__views.__alloyId18956.add($.__views.__alloyId18957);
    $.__views.__alloyId18958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18958"
    });
    $.__views.__alloyId18957.add($.__views.__alloyId18958);
    $.__views.__alloyId18959 = Ti.UI.createView({
        id: "__alloyId18959"
    });
    $.__views.__alloyId18959 && $.addTopLevelView($.__views.__alloyId18959);
    $.__views.__alloyId18960 = Ti.UI.createView({
        id: "__alloyId18960"
    });
    $.__views.__alloyId18959.add($.__views.__alloyId18960);
    $.__views.__alloyId18961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18961"
    });
    $.__views.__alloyId18960.add($.__views.__alloyId18961);
    $.__views.__alloyId18962 = Ti.UI.createView({
        id: "__alloyId18962"
    });
    $.__views.__alloyId18962 && $.addTopLevelView($.__views.__alloyId18962);
    $.__views.__alloyId18963 = Ti.UI.createView({
        id: "__alloyId18963"
    });
    $.__views.__alloyId18962.add($.__views.__alloyId18963);
    $.__views.__alloyId18964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18964"
    });
    $.__views.__alloyId18963.add($.__views.__alloyId18964);
    $.__views.__alloyId18965 = Ti.UI.createView({
        id: "__alloyId18965"
    });
    $.__views.__alloyId18965 && $.addTopLevelView($.__views.__alloyId18965);
    $.__views.__alloyId18966 = Ti.UI.createView({
        id: "__alloyId18966"
    });
    $.__views.__alloyId18965.add($.__views.__alloyId18966);
    $.__views.__alloyId18967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18967"
    });
    $.__views.__alloyId18966.add($.__views.__alloyId18967);
    $.__views.__alloyId18968 = Ti.UI.createView({
        id: "__alloyId18968"
    });
    $.__views.__alloyId18968 && $.addTopLevelView($.__views.__alloyId18968);
    $.__views.__alloyId18969 = Ti.UI.createView({
        id: "__alloyId18969"
    });
    $.__views.__alloyId18968.add($.__views.__alloyId18969);
    $.__views.__alloyId18970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18970"
    });
    $.__views.__alloyId18969.add($.__views.__alloyId18970);
    $.__views.__alloyId18971 = Ti.UI.createView({
        id: "__alloyId18971"
    });
    $.__views.__alloyId18971 && $.addTopLevelView($.__views.__alloyId18971);
    $.__views.__alloyId18972 = Ti.UI.createView({
        id: "__alloyId18972"
    });
    $.__views.__alloyId18971.add($.__views.__alloyId18972);
    $.__views.__alloyId18973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18973"
    });
    $.__views.__alloyId18972.add($.__views.__alloyId18973);
    $.__views.__alloyId18974 = Ti.UI.createView({
        id: "__alloyId18974"
    });
    $.__views.__alloyId18974 && $.addTopLevelView($.__views.__alloyId18974);
    $.__views.__alloyId18975 = Ti.UI.createView({
        id: "__alloyId18975"
    });
    $.__views.__alloyId18974.add($.__views.__alloyId18975);
    $.__views.__alloyId18976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18976"
    });
    $.__views.__alloyId18975.add($.__views.__alloyId18976);
    $.__views.__alloyId18977 = Ti.UI.createView({
        id: "__alloyId18977"
    });
    $.__views.__alloyId18977 && $.addTopLevelView($.__views.__alloyId18977);
    $.__views.__alloyId18978 = Ti.UI.createView({
        id: "__alloyId18978"
    });
    $.__views.__alloyId18977.add($.__views.__alloyId18978);
    $.__views.__alloyId18979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18979"
    });
    $.__views.__alloyId18978.add($.__views.__alloyId18979);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;