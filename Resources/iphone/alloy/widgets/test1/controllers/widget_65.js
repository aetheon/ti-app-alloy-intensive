function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_65";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_65 = Ti.UI.createView({
        id: "widget_65"
    });
    $.__views.widget_65 && $.addTopLevelView($.__views.widget_65);
    $.__views.__alloyId15938 = Ti.UI.createView({
        id: "__alloyId15938"
    });
    $.__views.widget_65.add($.__views.__alloyId15938);
    $.__views.__alloyId15939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15939"
    });
    $.__views.__alloyId15938.add($.__views.__alloyId15939);
    $.__views.__alloyId15940 = Ti.UI.createView({
        id: "__alloyId15940"
    });
    $.__views.__alloyId15940 && $.addTopLevelView($.__views.__alloyId15940);
    $.__views.__alloyId15941 = Ti.UI.createView({
        id: "__alloyId15941"
    });
    $.__views.__alloyId15940.add($.__views.__alloyId15941);
    $.__views.__alloyId15942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15942"
    });
    $.__views.__alloyId15941.add($.__views.__alloyId15942);
    $.__views.__alloyId15943 = Ti.UI.createView({
        id: "__alloyId15943"
    });
    $.__views.__alloyId15943 && $.addTopLevelView($.__views.__alloyId15943);
    $.__views.__alloyId15944 = Ti.UI.createView({
        id: "__alloyId15944"
    });
    $.__views.__alloyId15943.add($.__views.__alloyId15944);
    $.__views.__alloyId15945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15945"
    });
    $.__views.__alloyId15944.add($.__views.__alloyId15945);
    $.__views.__alloyId15946 = Ti.UI.createView({
        id: "__alloyId15946"
    });
    $.__views.__alloyId15946 && $.addTopLevelView($.__views.__alloyId15946);
    $.__views.__alloyId15947 = Ti.UI.createView({
        id: "__alloyId15947"
    });
    $.__views.__alloyId15946.add($.__views.__alloyId15947);
    $.__views.__alloyId15948 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15948"
    });
    $.__views.__alloyId15947.add($.__views.__alloyId15948);
    $.__views.__alloyId15949 = Ti.UI.createView({
        id: "__alloyId15949"
    });
    $.__views.__alloyId15949 && $.addTopLevelView($.__views.__alloyId15949);
    $.__views.__alloyId15950 = Ti.UI.createView({
        id: "__alloyId15950"
    });
    $.__views.__alloyId15949.add($.__views.__alloyId15950);
    $.__views.__alloyId15951 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15951"
    });
    $.__views.__alloyId15950.add($.__views.__alloyId15951);
    $.__views.__alloyId15952 = Ti.UI.createView({
        id: "__alloyId15952"
    });
    $.__views.__alloyId15952 && $.addTopLevelView($.__views.__alloyId15952);
    $.__views.__alloyId15953 = Ti.UI.createView({
        id: "__alloyId15953"
    });
    $.__views.__alloyId15952.add($.__views.__alloyId15953);
    $.__views.__alloyId15954 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15954"
    });
    $.__views.__alloyId15953.add($.__views.__alloyId15954);
    $.__views.__alloyId15955 = Ti.UI.createView({
        id: "__alloyId15955"
    });
    $.__views.__alloyId15955 && $.addTopLevelView($.__views.__alloyId15955);
    $.__views.__alloyId15956 = Ti.UI.createView({
        id: "__alloyId15956"
    });
    $.__views.__alloyId15955.add($.__views.__alloyId15956);
    $.__views.__alloyId15957 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15957"
    });
    $.__views.__alloyId15956.add($.__views.__alloyId15957);
    $.__views.__alloyId15958 = Ti.UI.createView({
        id: "__alloyId15958"
    });
    $.__views.__alloyId15958 && $.addTopLevelView($.__views.__alloyId15958);
    $.__views.__alloyId15959 = Ti.UI.createView({
        id: "__alloyId15959"
    });
    $.__views.__alloyId15958.add($.__views.__alloyId15959);
    $.__views.__alloyId15960 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15960"
    });
    $.__views.__alloyId15959.add($.__views.__alloyId15960);
    $.__views.__alloyId15961 = Ti.UI.createView({
        id: "__alloyId15961"
    });
    $.__views.__alloyId15961 && $.addTopLevelView($.__views.__alloyId15961);
    $.__views.__alloyId15962 = Ti.UI.createView({
        id: "__alloyId15962"
    });
    $.__views.__alloyId15961.add($.__views.__alloyId15962);
    $.__views.__alloyId15963 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15963"
    });
    $.__views.__alloyId15962.add($.__views.__alloyId15963);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;