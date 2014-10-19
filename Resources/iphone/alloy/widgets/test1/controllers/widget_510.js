function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_510";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_510 = Ti.UI.createView({
        id: "widget_510"
    });
    $.__views.widget_510 && $.addTopLevelView($.__views.widget_510);
    $.__views.__alloyId11934 = Ti.UI.createView({
        id: "__alloyId11934"
    });
    $.__views.widget_510.add($.__views.__alloyId11934);
    $.__views.__alloyId11935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11935"
    });
    $.__views.__alloyId11934.add($.__views.__alloyId11935);
    $.__views.__alloyId11936 = Ti.UI.createView({
        id: "__alloyId11936"
    });
    $.__views.__alloyId11936 && $.addTopLevelView($.__views.__alloyId11936);
    $.__views.__alloyId11937 = Ti.UI.createView({
        id: "__alloyId11937"
    });
    $.__views.__alloyId11936.add($.__views.__alloyId11937);
    $.__views.__alloyId11938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11938"
    });
    $.__views.__alloyId11937.add($.__views.__alloyId11938);
    $.__views.__alloyId11939 = Ti.UI.createView({
        id: "__alloyId11939"
    });
    $.__views.__alloyId11939 && $.addTopLevelView($.__views.__alloyId11939);
    $.__views.__alloyId11940 = Ti.UI.createView({
        id: "__alloyId11940"
    });
    $.__views.__alloyId11939.add($.__views.__alloyId11940);
    $.__views.__alloyId11941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11941"
    });
    $.__views.__alloyId11940.add($.__views.__alloyId11941);
    $.__views.__alloyId11942 = Ti.UI.createView({
        id: "__alloyId11942"
    });
    $.__views.__alloyId11942 && $.addTopLevelView($.__views.__alloyId11942);
    $.__views.__alloyId11943 = Ti.UI.createView({
        id: "__alloyId11943"
    });
    $.__views.__alloyId11942.add($.__views.__alloyId11943);
    $.__views.__alloyId11944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11944"
    });
    $.__views.__alloyId11943.add($.__views.__alloyId11944);
    $.__views.__alloyId11945 = Ti.UI.createView({
        id: "__alloyId11945"
    });
    $.__views.__alloyId11945 && $.addTopLevelView($.__views.__alloyId11945);
    $.__views.__alloyId11946 = Ti.UI.createView({
        id: "__alloyId11946"
    });
    $.__views.__alloyId11945.add($.__views.__alloyId11946);
    $.__views.__alloyId11947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11947"
    });
    $.__views.__alloyId11946.add($.__views.__alloyId11947);
    $.__views.__alloyId11948 = Ti.UI.createView({
        id: "__alloyId11948"
    });
    $.__views.__alloyId11948 && $.addTopLevelView($.__views.__alloyId11948);
    $.__views.__alloyId11949 = Ti.UI.createView({
        id: "__alloyId11949"
    });
    $.__views.__alloyId11948.add($.__views.__alloyId11949);
    $.__views.__alloyId11950 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11950"
    });
    $.__views.__alloyId11949.add($.__views.__alloyId11950);
    $.__views.__alloyId11951 = Ti.UI.createView({
        id: "__alloyId11951"
    });
    $.__views.__alloyId11951 && $.addTopLevelView($.__views.__alloyId11951);
    $.__views.__alloyId11952 = Ti.UI.createView({
        id: "__alloyId11952"
    });
    $.__views.__alloyId11951.add($.__views.__alloyId11952);
    $.__views.__alloyId11953 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11953"
    });
    $.__views.__alloyId11952.add($.__views.__alloyId11953);
    $.__views.__alloyId11954 = Ti.UI.createView({
        id: "__alloyId11954"
    });
    $.__views.__alloyId11954 && $.addTopLevelView($.__views.__alloyId11954);
    $.__views.__alloyId11955 = Ti.UI.createView({
        id: "__alloyId11955"
    });
    $.__views.__alloyId11954.add($.__views.__alloyId11955);
    $.__views.__alloyId11956 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11956"
    });
    $.__views.__alloyId11955.add($.__views.__alloyId11956);
    $.__views.__alloyId11957 = Ti.UI.createView({
        id: "__alloyId11957"
    });
    $.__views.__alloyId11957 && $.addTopLevelView($.__views.__alloyId11957);
    $.__views.__alloyId11958 = Ti.UI.createView({
        id: "__alloyId11958"
    });
    $.__views.__alloyId11957.add($.__views.__alloyId11958);
    $.__views.__alloyId11959 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11959"
    });
    $.__views.__alloyId11958.add($.__views.__alloyId11959);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;