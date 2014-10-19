function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_789";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_789 = Ti.UI.createView({
        id: "widget_789"
    });
    $.__views.widget_789 && $.addTopLevelView($.__views.widget_789);
    $.__views.__alloyId19942 = Ti.UI.createView({
        id: "__alloyId19942"
    });
    $.__views.widget_789.add($.__views.__alloyId19942);
    $.__views.__alloyId19943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19943"
    });
    $.__views.__alloyId19942.add($.__views.__alloyId19943);
    $.__views.__alloyId19944 = Ti.UI.createView({
        id: "__alloyId19944"
    });
    $.__views.__alloyId19944 && $.addTopLevelView($.__views.__alloyId19944);
    $.__views.__alloyId19945 = Ti.UI.createView({
        id: "__alloyId19945"
    });
    $.__views.__alloyId19944.add($.__views.__alloyId19945);
    $.__views.__alloyId19946 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19946"
    });
    $.__views.__alloyId19945.add($.__views.__alloyId19946);
    $.__views.__alloyId19947 = Ti.UI.createView({
        id: "__alloyId19947"
    });
    $.__views.__alloyId19947 && $.addTopLevelView($.__views.__alloyId19947);
    $.__views.__alloyId19948 = Ti.UI.createView({
        id: "__alloyId19948"
    });
    $.__views.__alloyId19947.add($.__views.__alloyId19948);
    $.__views.__alloyId19949 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19949"
    });
    $.__views.__alloyId19948.add($.__views.__alloyId19949);
    $.__views.__alloyId19950 = Ti.UI.createView({
        id: "__alloyId19950"
    });
    $.__views.__alloyId19950 && $.addTopLevelView($.__views.__alloyId19950);
    $.__views.__alloyId19951 = Ti.UI.createView({
        id: "__alloyId19951"
    });
    $.__views.__alloyId19950.add($.__views.__alloyId19951);
    $.__views.__alloyId19952 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19952"
    });
    $.__views.__alloyId19951.add($.__views.__alloyId19952);
    $.__views.__alloyId19953 = Ti.UI.createView({
        id: "__alloyId19953"
    });
    $.__views.__alloyId19953 && $.addTopLevelView($.__views.__alloyId19953);
    $.__views.__alloyId19954 = Ti.UI.createView({
        id: "__alloyId19954"
    });
    $.__views.__alloyId19953.add($.__views.__alloyId19954);
    $.__views.__alloyId19955 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19955"
    });
    $.__views.__alloyId19954.add($.__views.__alloyId19955);
    $.__views.__alloyId19956 = Ti.UI.createView({
        id: "__alloyId19956"
    });
    $.__views.__alloyId19956 && $.addTopLevelView($.__views.__alloyId19956);
    $.__views.__alloyId19957 = Ti.UI.createView({
        id: "__alloyId19957"
    });
    $.__views.__alloyId19956.add($.__views.__alloyId19957);
    $.__views.__alloyId19958 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19958"
    });
    $.__views.__alloyId19957.add($.__views.__alloyId19958);
    $.__views.__alloyId19959 = Ti.UI.createView({
        id: "__alloyId19959"
    });
    $.__views.__alloyId19959 && $.addTopLevelView($.__views.__alloyId19959);
    $.__views.__alloyId19960 = Ti.UI.createView({
        id: "__alloyId19960"
    });
    $.__views.__alloyId19959.add($.__views.__alloyId19960);
    $.__views.__alloyId19961 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19961"
    });
    $.__views.__alloyId19960.add($.__views.__alloyId19961);
    $.__views.__alloyId19962 = Ti.UI.createView({
        id: "__alloyId19962"
    });
    $.__views.__alloyId19962 && $.addTopLevelView($.__views.__alloyId19962);
    $.__views.__alloyId19963 = Ti.UI.createView({
        id: "__alloyId19963"
    });
    $.__views.__alloyId19962.add($.__views.__alloyId19963);
    $.__views.__alloyId19964 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19964"
    });
    $.__views.__alloyId19963.add($.__views.__alloyId19964);
    $.__views.__alloyId19965 = Ti.UI.createView({
        id: "__alloyId19965"
    });
    $.__views.__alloyId19965 && $.addTopLevelView($.__views.__alloyId19965);
    $.__views.__alloyId19966 = Ti.UI.createView({
        id: "__alloyId19966"
    });
    $.__views.__alloyId19965.add($.__views.__alloyId19966);
    $.__views.__alloyId19967 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19967"
    });
    $.__views.__alloyId19966.add($.__views.__alloyId19967);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;