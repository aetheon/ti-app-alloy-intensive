function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_303";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_303 = Ti.UI.createView({
        id: "widget_303"
    });
    $.__views.widget_303 && $.addTopLevelView($.__views.widget_303);
    $.__views.__alloyId5954 = Ti.UI.createView({
        id: "__alloyId5954"
    });
    $.__views.widget_303.add($.__views.__alloyId5954);
    $.__views.__alloyId5955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5955"
    });
    $.__views.__alloyId5954.add($.__views.__alloyId5955);
    $.__views.__alloyId5956 = Ti.UI.createView({
        id: "__alloyId5956"
    });
    $.__views.__alloyId5956 && $.addTopLevelView($.__views.__alloyId5956);
    $.__views.__alloyId5957 = Ti.UI.createView({
        id: "__alloyId5957"
    });
    $.__views.__alloyId5956.add($.__views.__alloyId5957);
    $.__views.__alloyId5958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5958"
    });
    $.__views.__alloyId5957.add($.__views.__alloyId5958);
    $.__views.__alloyId5959 = Ti.UI.createView({
        id: "__alloyId5959"
    });
    $.__views.__alloyId5959 && $.addTopLevelView($.__views.__alloyId5959);
    $.__views.__alloyId5960 = Ti.UI.createView({
        id: "__alloyId5960"
    });
    $.__views.__alloyId5959.add($.__views.__alloyId5960);
    $.__views.__alloyId5961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5961"
    });
    $.__views.__alloyId5960.add($.__views.__alloyId5961);
    $.__views.__alloyId5962 = Ti.UI.createView({
        id: "__alloyId5962"
    });
    $.__views.__alloyId5962 && $.addTopLevelView($.__views.__alloyId5962);
    $.__views.__alloyId5963 = Ti.UI.createView({
        id: "__alloyId5963"
    });
    $.__views.__alloyId5962.add($.__views.__alloyId5963);
    $.__views.__alloyId5964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5964"
    });
    $.__views.__alloyId5963.add($.__views.__alloyId5964);
    $.__views.__alloyId5965 = Ti.UI.createView({
        id: "__alloyId5965"
    });
    $.__views.__alloyId5965 && $.addTopLevelView($.__views.__alloyId5965);
    $.__views.__alloyId5966 = Ti.UI.createView({
        id: "__alloyId5966"
    });
    $.__views.__alloyId5965.add($.__views.__alloyId5966);
    $.__views.__alloyId5967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5967"
    });
    $.__views.__alloyId5966.add($.__views.__alloyId5967);
    $.__views.__alloyId5968 = Ti.UI.createView({
        id: "__alloyId5968"
    });
    $.__views.__alloyId5968 && $.addTopLevelView($.__views.__alloyId5968);
    $.__views.__alloyId5969 = Ti.UI.createView({
        id: "__alloyId5969"
    });
    $.__views.__alloyId5968.add($.__views.__alloyId5969);
    $.__views.__alloyId5970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5970"
    });
    $.__views.__alloyId5969.add($.__views.__alloyId5970);
    $.__views.__alloyId5971 = Ti.UI.createView({
        id: "__alloyId5971"
    });
    $.__views.__alloyId5971 && $.addTopLevelView($.__views.__alloyId5971);
    $.__views.__alloyId5972 = Ti.UI.createView({
        id: "__alloyId5972"
    });
    $.__views.__alloyId5971.add($.__views.__alloyId5972);
    $.__views.__alloyId5973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5973"
    });
    $.__views.__alloyId5972.add($.__views.__alloyId5973);
    $.__views.__alloyId5974 = Ti.UI.createView({
        id: "__alloyId5974"
    });
    $.__views.__alloyId5974 && $.addTopLevelView($.__views.__alloyId5974);
    $.__views.__alloyId5975 = Ti.UI.createView({
        id: "__alloyId5975"
    });
    $.__views.__alloyId5974.add($.__views.__alloyId5975);
    $.__views.__alloyId5976 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5976"
    });
    $.__views.__alloyId5975.add($.__views.__alloyId5976);
    $.__views.__alloyId5977 = Ti.UI.createView({
        id: "__alloyId5977"
    });
    $.__views.__alloyId5977 && $.addTopLevelView($.__views.__alloyId5977);
    $.__views.__alloyId5978 = Ti.UI.createView({
        id: "__alloyId5978"
    });
    $.__views.__alloyId5977.add($.__views.__alloyId5978);
    $.__views.__alloyId5979 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5979"
    });
    $.__views.__alloyId5978.add($.__views.__alloyId5979);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;