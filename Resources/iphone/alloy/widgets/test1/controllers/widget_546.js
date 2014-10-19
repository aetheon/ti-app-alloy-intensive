function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_546";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_546 = Ti.UI.createView({
        id: "widget_546"
    });
    $.__views.widget_546 && $.addTopLevelView($.__views.widget_546);
    $.__views.__alloyId12948 = Ti.UI.createView({
        id: "__alloyId12948"
    });
    $.__views.widget_546.add($.__views.__alloyId12948);
    $.__views.__alloyId12949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12949"
    });
    $.__views.__alloyId12948.add($.__views.__alloyId12949);
    $.__views.__alloyId12950 = Ti.UI.createView({
        id: "__alloyId12950"
    });
    $.__views.__alloyId12950 && $.addTopLevelView($.__views.__alloyId12950);
    $.__views.__alloyId12951 = Ti.UI.createView({
        id: "__alloyId12951"
    });
    $.__views.__alloyId12950.add($.__views.__alloyId12951);
    $.__views.__alloyId12952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12952"
    });
    $.__views.__alloyId12951.add($.__views.__alloyId12952);
    $.__views.__alloyId12953 = Ti.UI.createView({
        id: "__alloyId12953"
    });
    $.__views.__alloyId12953 && $.addTopLevelView($.__views.__alloyId12953);
    $.__views.__alloyId12954 = Ti.UI.createView({
        id: "__alloyId12954"
    });
    $.__views.__alloyId12953.add($.__views.__alloyId12954);
    $.__views.__alloyId12955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12955"
    });
    $.__views.__alloyId12954.add($.__views.__alloyId12955);
    $.__views.__alloyId12956 = Ti.UI.createView({
        id: "__alloyId12956"
    });
    $.__views.__alloyId12956 && $.addTopLevelView($.__views.__alloyId12956);
    $.__views.__alloyId12957 = Ti.UI.createView({
        id: "__alloyId12957"
    });
    $.__views.__alloyId12956.add($.__views.__alloyId12957);
    $.__views.__alloyId12958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12958"
    });
    $.__views.__alloyId12957.add($.__views.__alloyId12958);
    $.__views.__alloyId12959 = Ti.UI.createView({
        id: "__alloyId12959"
    });
    $.__views.__alloyId12959 && $.addTopLevelView($.__views.__alloyId12959);
    $.__views.__alloyId12960 = Ti.UI.createView({
        id: "__alloyId12960"
    });
    $.__views.__alloyId12959.add($.__views.__alloyId12960);
    $.__views.__alloyId12961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12961"
    });
    $.__views.__alloyId12960.add($.__views.__alloyId12961);
    $.__views.__alloyId12962 = Ti.UI.createView({
        id: "__alloyId12962"
    });
    $.__views.__alloyId12962 && $.addTopLevelView($.__views.__alloyId12962);
    $.__views.__alloyId12963 = Ti.UI.createView({
        id: "__alloyId12963"
    });
    $.__views.__alloyId12962.add($.__views.__alloyId12963);
    $.__views.__alloyId12964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12964"
    });
    $.__views.__alloyId12963.add($.__views.__alloyId12964);
    $.__views.__alloyId12965 = Ti.UI.createView({
        id: "__alloyId12965"
    });
    $.__views.__alloyId12965 && $.addTopLevelView($.__views.__alloyId12965);
    $.__views.__alloyId12966 = Ti.UI.createView({
        id: "__alloyId12966"
    });
    $.__views.__alloyId12965.add($.__views.__alloyId12966);
    $.__views.__alloyId12967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12967"
    });
    $.__views.__alloyId12966.add($.__views.__alloyId12967);
    $.__views.__alloyId12968 = Ti.UI.createView({
        id: "__alloyId12968"
    });
    $.__views.__alloyId12968 && $.addTopLevelView($.__views.__alloyId12968);
    $.__views.__alloyId12969 = Ti.UI.createView({
        id: "__alloyId12969"
    });
    $.__views.__alloyId12968.add($.__views.__alloyId12969);
    $.__views.__alloyId12970 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12970"
    });
    $.__views.__alloyId12969.add($.__views.__alloyId12970);
    $.__views.__alloyId12971 = Ti.UI.createView({
        id: "__alloyId12971"
    });
    $.__views.__alloyId12971 && $.addTopLevelView($.__views.__alloyId12971);
    $.__views.__alloyId12972 = Ti.UI.createView({
        id: "__alloyId12972"
    });
    $.__views.__alloyId12971.add($.__views.__alloyId12972);
    $.__views.__alloyId12973 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12973"
    });
    $.__views.__alloyId12972.add($.__views.__alloyId12973);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;